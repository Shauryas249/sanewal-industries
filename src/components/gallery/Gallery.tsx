import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
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
}

const Gallery = ({ images, title, description }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});

  const handleImageLoad = (imageId: string) => {
    setImagesLoaded(prev => ({ ...prev, [imageId]: true }));
  };

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const goToPrevious = () => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <div className="py-8 space-y-8" role="region" aria-label="Image gallery">
      {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
      {description && <p className="text-muted-foreground mb-8">{description}</p>}
      
      <div className="masonry-grid columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
        {images.map((image) => (
          <div key={image.id} className="break-inside-avoid mb-6">
            <Card 
              className="overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col h-full"
            >
              <div 
                className="relative cursor-pointer"
                onClick={() => openLightbox(image)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(image);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View ${image.title || image.alt}`}
              >
                <div className="relative" style={{ paddingBottom: `${(image.height / image.width) * 100}%` }}>
                  {!imagesLoaded[image.id] && (
                    <Skeleton className="absolute inset-0 z-10" />
                  )}
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    onLoad={() => handleImageLoad(image.id)}
                    loading="lazy"
                  />
                </div>
              </div>
            
              {(image.title || image.description) && (
                <CardContent className="p-4">
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

export default Gallery;