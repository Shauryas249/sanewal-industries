import { useState } from 'react';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card } from '@/components/ui/card';
import Lightbox from './Lightbox';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  title?: string;
  description?: string;
}

const Gallery = ({ images, title, description }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

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
    <div className="container py-8">
      {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
      {description && <p className="text-muted-foreground mb-8">{description}</p>}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <Card 
            key={image.id} 
            className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg"
            onClick={() => openLightbox(image)}
          >
            <div className="relative">
              <AspectRatio ratio={1}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </AspectRatio>
            </div>
          </Card>
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