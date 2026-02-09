import React, { useState, useRef, useCallback } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext,
  type CarouselApi
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';
import { ChevronRight, Play, Pause } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import OptimizedImage from '@/components/ui/optimized-image';

interface HeroSlide {
  id: number;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  cta: string;
  link: string;
}

const Hero: React.FC = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  
  const autoplayRef = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  const slides: HeroSlide[] = [
    {
      id: 1,
      image: '/images/Hero 1.jpg',
      alt: 'Automotive engineering excellence',
      title: 'Excellence in Automotive Components',
      subtitle: 'Committed to customer satisfaction through Continual improvement in Quality & Production',
      cta: 'Explore Our Products',
      link: '/products'
    },
    {
      id: 2,
      image: '/images/Hero 2.jpg',
      alt: 'Precision manufacturing process',
      title: 'Precision Engineering',
      subtitle: 'IATF 16949:2016 & ISO 14001:2015 Certified manufacturing for over 40 years',
      cta: 'Our Manufacturing Process',
      link: '/manufacturing'
    },
    {
      id: 3,
      image: '/images/Hero 3.jpg',
      alt: 'Quality assurance in action',
      title: 'Quality Assurance',
      subtitle: 'Rigorous testing and quality control for every component we produce',
      cta: 'Learn About Our Quality',
      link: '/quality'
    },
  ];

  const handlePause = useCallback(() => {
    if (autoplayRef.current && !isPaused) {
      autoplayRef.current.stop();
      setIsPaused(true);
    }
  }, [isPaused]);

  const handleResume = useCallback(() => {
    if (autoplayRef.current && isPaused) {
      autoplayRef.current.play();
      setIsPaused(false);
    }
  }, [isPaused]);

  // Update current slide when the carousel changes
  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrentSlide(api.selectedScrollSnap());
  }, [api]);

  // Set up the carousel API and event listeners
  React.useEffect(() => {
    if (!api) return;
    
    onSelect();
    api.on("select", onSelect);
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section className="relative" aria-label="Featured highlights">
      <Carousel 
        className="w-full" 
        plugins={[autoplayRef.current]}
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
        setApi={setApi}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[70vh] w-full">
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform scale-105"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
                <div className="relative z-20 h-full flex items-center justify-center">
                  <div className="text-center px-4 max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8">
                      {slide.subtitle}
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-white"
                      onClick={() => router.push(slide.link)}
                    >
                      {slide.cta}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious 
          className="left-4 z-30" 
          aria-label="Show previous slide"
        />
        <CarouselNext 
          className="right-4 z-30" 
          aria-label="Show next slide"
        />
        
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-30" role="tablist">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-primary w-6' : 'bg-white/50'}`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === currentSlide}
              role="tab"
            />
          ))}
        </div>
        
        {/* Pause/Play Button */}
        <button 
          className="absolute bottom-6 right-6 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all z-30"
          onClick={() => isPaused ? handleResume() : handlePause()}
          aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
        >
          {isPaused ? (
            <Play className="h-5 w-5" />
          ) : (
            <Pause className="h-5 w-5" />
          )}
        </button>
      </Carousel>
    </section>
  );
};

export default Hero;