import React, { useState, useCallback, memo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import OptimizedImage from '@/components/ui/optimized-image';
import Lightbox from './Lightbox';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category?: string;
  title?: string;
  description?: string;
  tags: string[];
}

interface GalleryProps {
  images: GalleryImage[];
  title?: string;
  description?: string;
  className?: string;
}

// Memoized gallery item to prevent unnecessary re-renders
const GalleryItem = memo(({ 
  image, 
  onOpenLightbox 
}: { 
  image: GalleryImage; 
  onOpenLightbox: (image: GalleryImage) => void;
}) => {
  const aspectRatio = image.width && image.height 
    ? (image.height / image.width) 
    : 0.75; // Default to 4:3 if dimensions not provided
  
  return (
    <div className="flex justify-center">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col h-full max-w-sm w-full">
        <div 
          className="relative cursor-pointer"
          onClick={() => onOpenLightbox(image)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onOpenLightbox(image);
            }
          }}
          tabIndex={0}
          role="button"
          aria-label={`View ${image.title || image.alt}`}
        >
          <div 
            className="relative overflow-hidden" 
            style={{ paddingBottom: `${aspectRatio * 100}%` }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      
        {(image.title || image.description) && (
          <CardContent className="text-center">
            {image.title && (
              <h3 className="font-medium text-lg mb-1">{image.title}</h3>
            )}
            {image.description && (
              <p className="text-sm text-muted-foreground">{image.description}</p>
            )}
          </CardContent>
        )}
      </Card>
    </div>
  );
});

GalleryItem.displayName = 'GalleryItem';

const Gallery: React.FC<GalleryProps> = ({ 
  images, 
  title, 
  description,
  className = ""
}) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = useCallback((image: GalleryImage) => {
    setSelectedImage(image);
    setLightboxOpen(true);
    // Announce to screen readers
    document.getElementById('lightbox-announcement')?.setAttribute(
      'aria-label', 
      `Image lightbox opened: ${image.title || image.alt}`
    );
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    // Return focus to the last viewed image
    if (selectedImage) {
      const imageElement = document.getElementById(`gallery-image-${selectedImage.id}`);
      if (imageElement) {
        imageElement.focus();
      }
    }
  }, [selectedImage]);

  const goToNext = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  }, [selectedImage, images]);

  const goToPrevious = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  }, [selectedImage, images]);

  return (
    <div 
      className={`py-8 space-y-8 text-center ${className}`} 
      role="region" 
      aria-label="Image gallery"
    >
      {/* Hidden element for screen reader announcements */}
      <div 
        id="lightbox-announcement" 
        className="sr-only" 
        aria-live="polite"
      ></div>
      
      {title && <h2 className="text-3xl font-bold mb-4 font-heading">{title}</h2>}
      {description && <p className="text-muted-foreground mb-8 mx-auto max-w-3xl">{description}</p>}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((image) => (
          <GalleryItem 
            key={image.id} 
            image={image} 
            onOpenLightbox={openLightbox} 
          />
        ))}
      </div>

      {selectedImage && (
        <Lightbox
          image={selectedImage}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrevious={goToPrevious}
          totalImages={images.length}
          currentIndex={images.findIndex(img => img.id === selectedImage.id)}
        />
      )}
    </div>
  );
};

export default memo(Gallery);