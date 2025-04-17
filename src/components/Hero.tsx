import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

const Hero: React.FC = () => {
  const slides = [
    {
      id: 1,
      image: '/images/hero1.jpg',
      alt: 'Manufacturing facility',
    },
    {
      id: 2,
      image: '/images/hero2.jpg',
      alt: 'Precision machined components',
    },
    {
      id: 3,
      image: '/images/hero3.jpg',
      alt: 'Quality control process',
    },
  ];

  return (
    <section className="relative">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[60vh] w-full">
                <div 
                  className="absolute inset-0 bg-black/60 flex items-center justify-center"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-black/60"></div>
                  <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                      Excellence in Automotive Components
                    </h1>
                    <p className="text-lg md:text-xl text-white/90">
                      Committed to customer satisfaction through Continual improvement in Quality & Production
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
};

export default Hero;