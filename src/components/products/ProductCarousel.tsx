import React, { useEffect } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface ProductImage {
  name: string;
  imagePath: string;
}

interface ProductCarouselProps {
  categoryTitle: string;
  categoryDescription: string;
  productImages: ProductImage[];
  categorySlug: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ 
  categoryTitle, 
  categoryDescription, 
  productImages,
  categorySlug
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: true })
  ]);

  // Reset autoplay when component mounts or updates
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi, productImages]);

  return (
    <Card className="overflow-hidden h-full">
      <div className="h-48 bg-muted relative">
        {productImages.length > 0 ? (
          <Carousel 
            ref={emblaRef}
            className="w-full h-full"
            opts={{ loop: true }}
          >
            <CarouselContent className="h-full">
              {productImages.map((product, index) => (
                <CarouselItem key={index} className="h-full">
                  <div className="relative w-full h-full">
                    <img 
                      src={product.imagePath} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm">
                      {product.name}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8" />
          </Carousel>
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <div className="text-4xl text-muted-foreground/50">[No Images]</div>
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{categoryTitle}</h3>
        <p className="text-muted-foreground mb-4">{categoryDescription}</p>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full"
          onClick={() => window.location.href = `/products/${categorySlug}`}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCarousel;