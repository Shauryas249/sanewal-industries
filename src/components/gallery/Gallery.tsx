import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import Lightbox from './Lightbox';
import FilterTags, { FilterCategory } from './FilterTags';

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
  filterCategories?: FilterCategory[];
}

const Gallery = ({ images, title, description, filterCategories = [] }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filterLogic, setFilterLogic] = useState<'AND' | 'OR'>('OR');
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(images);
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});

  // Filter images based on selected tags
  const filterImages = useCallback(() => {
    if (selectedTags.length === 0) {
      setFilteredImages(images);
      return;
    }

    const filtered = images.filter(image => {
      if (filterLogic === 'AND') {
        // Image must have ALL selected tags
        return selectedTags.every(tag => image.tags.includes(tag));
      } else {
        // Image must have ANY selected tag
        return selectedTags.some(tag => image.tags.includes(tag));
      }
    });

    setFilteredImages(filtered);
  }, [images, selectedTags, filterLogic]);

  // Apply filtering when selected tags or filter logic changes
  useEffect(() => {
    filterImages();
  }, [filterImages, selectedTags, filterLogic]);

  const handleImageLoad = (imageId: string) => {
    setImagesLoaded(prev => ({ ...prev, [imageId]: true }));
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
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
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const goToPrevious = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="py-8 space-y-8">
      {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
      {description && <p className="text-muted-foreground mb-8">{description}</p>}
      
      {filterCategories.length > 0 && (
        <FilterTags
          categories={filterCategories}
          selectedTags={selectedTags}
          onTagToggle={toggleTag}
          onClearFilters={clearFilters}
          filterLogic={filterLogic}
          onFilterLogicChange={setFilterLogic}
        />
      )}
      
      {filteredImages.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No images match the selected filters.</p>
          <button 
            onClick={clearFilters}
            className="mt-4 text-primary hover:underline"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <Card 
              key={image.id} 
              className="overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col"
            >
              <div 
                className="relative cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                <AspectRatio ratio={4/3}>
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
                    priority={false}
                  />
                </AspectRatio>
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
              
              {image.tags.length > 0 && (
                <CardFooter className="p-4 pt-0 flex flex-wrap gap-1">
                  {image.tags.slice(0, 3).map(tag => (
                    <Badge 
                      key={`${image.id}-${tag}`} 
                      variant="secondary"
                      className="cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTag(tag);
                      }}
                    >
                      {tag}
                    </Badge>
                  ))}
                  {image.tags.length > 3 && (
                    <Badge variant="outline">+{image.tags.length - 3}</Badge>
                  )}
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      )}

      {selectedImage && (
        <Lightbox
          image={selectedImage}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrevious={goToPrevious}
          totalImages={filteredImages.length}
          currentIndex={filteredImages.findIndex(img => img.id === selectedImage.id)}
        />
      )}
    </div>
  );
};

export default Gallery;