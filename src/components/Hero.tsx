import React, { useEffect, useState, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';
import { ChevronRight } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

const Hero: React.FC = () => {
  const router = useRouter();
  // For a real implementation, we would need to use the Embla API to track the current slide
  // For now, we'll just use a static value for the UI
  const [currentSlide] = useState(0);
  const autoplayRef = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      image: '/images/hero1.jpg',
      alt: 'Manufacturing facility',
      title: 'Excellence in Automotive Components',
      subtitle: 'Committed to customer satisfaction through Continual improvement in Quality & Production',
      cta: 'Explore Our Products',
      link: '/products'
    },
    {
      id: 2,
      image: '/images/hero2.jpg',
      alt: 'Precision machined components',
      title: 'Precision Engineering',
      subtitle: 'IATF 16949:2016 & ISO 14001:2015 Certified manufacturing for over 40 years',
      cta: 'Our Manufacturing Process',
      link: '/manufacturing'
    },
    {
      id: 3,
      image: '/images/hero3.jpg',
      alt: 'Quality control process',
      title: 'Quality Assurance',
      subtitle: 'Rigorous testing and quality control for every component we produce',
      cta: 'Learn About Our Quality',
      link: '/quality'
    },
  ];

  const handlePause = () => {
    if (autoplayRef.current && !isPaused) {
      autoplayRef.current.stop();
      setIsPaused(true);
    }
  };

  const handleResume = () => {
    if (autoplayRef.current && isPaused) {
      autoplayRef.current.play();
      setIsPaused(false);
    }
  };

  return (
    <section className="relative">
      <Carousel 
        className="w-full" 
        plugins={[autoplayRef.current]}
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
        // Note: We'll handle slide change differently
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[70vh] w-full">
                <div 
                  className="absolute inset-0 bg-black/60 flex items-center justify-center transition-transform duration-500 ease-in-out transform scale-105"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-black/60"></div>
                  <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
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
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
        
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-primary w-6' : 'bg-white/50'}`}
            />
          ))}
        </div>
        
        {/* Pause/Play Button */}
        <button 
          className="absolute bottom-6 right-6 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
          onClick={() => isPaused ? handleResume() : handlePause()}
        >
          {isPaused ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          )}
        </button>
      </Carousel>
    </section>
  );
};

export default Hero;