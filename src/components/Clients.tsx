import React, { useCallback, useEffect, useState } from 'react';
import Container from './ui/container';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';

interface ClientLogo {
  id: number;
  name: string;
  logo: string;
}

const Clients: React.FC = () => {
  // Client logos with proper information
  const clients: ClientLogo[] = [
    { 
      id: 1, 
      name: 'Greaves Cotton', 
      logo: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/greaves-cotton-98683b0.png' 
    },
    { 
      id: 2, 
      name: 'Sonalika Tractors', 
      logo: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/sonalika-tractors-23786b4.png' 
    },
    { 
      id: 3, 
      name: 'New Holland', 
      logo: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/new-holland-ccd1e69.png' 
    },
    { 
      id: 4, 
      name: 'Hero MotoCorp', 
      logo: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/hero-moto-corp-e2ec2e5.png' 
    },
    // New client logos
    {
      id: 5,
      name: 'Sundaram Fasteners',
      logo: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/sundaram-fasteners-6fb5e8c.png'
    },
    {
      id: 6,
      name: 'Kohli Rubber Moulds',
      logo: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/kohli-rubber-moulds-733e54a.jpg'
    },
    {
      id: 7,
      name: 'Bajajson',
      logo: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/bajajson-logo-770dbe7.png'
    },
    {
      id: 8,
      name: 'Sansera Engineering',
      logo: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/sansera-engineering-f1e6906.png'
    },
    {
      id: 9,
      name: 'Sandhar Ltd',
      logo: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/sandhar-ltd-4248cdc.png'
    },
    {
      id: 10,
      name: 'Rockman Ltd',
      logo: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/rockman-ltd-6c18783.png'
    },
    {
      id: 11,
      name: 'Anand Motor Ltd',
      logo: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/anand-motor-ltd.-5f7dde3.png'
    },
    {
      id: 12,
      name: 'New Swan',
      logo: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/new-swan-1d7227c.png'
    },
    {
      id: 13,
      name: 'ASK Automotive',
      logo: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/ask-automotive-1255683.png'
    },
    {
      id: 14,
      name: 'Rico Auto Industries',
      logo: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/rico-auto-industries-cd2c37c.jpg'
    },
    {
      id: 15,
      name: 'Life Long India',
      logo: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/life-long-india-752545d.png'
    },
    {
      id: 16,
      name: 'AG Industries',
      logo: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/ag-industries-773c153.png'
    },
    {
      id: 17,
      name: 'Shigan Quantum',
      logo: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/shigan-quantum-5baf3e0.png'
    },
    {
      id: 18,
      name: 'Pheon Autotech',
      logo: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/pheon-autotech-74ff541.jpg'
    },
    {
      id: 19,
      name: 'Endurance Technology Limited',
      logo: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/endurance-technology-limited-61b061e.png'
    },
    {
      id: 20,
      name: 'Munjal Showa',
      logo: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/munjal-showa-59ce88a.png'
    }
  ];

  // Configure autoplay plugin with 4 second interval and stop on interaction
  const autoplayOptions = {
    delay: 4000,
    stopOnInteraction: true,
    rootNode: (emblaRoot: any) => emblaRoot.parentElement,
  };

  // Create embla carousel with autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      skipSnaps: false,
    }, 
    [AutoPlay(autoplayOptions)]
  );

  // State for tracking current slide and total slides
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Update selected index when slide changes
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Initialize carousel
  useEffect(() => {
    if (!emblaApi) return;
    
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-background">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Clients</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We are proud to serve leading automotive manufacturers and suppliers across the industry.
          </p>
        </div>
        
        <div className="relative px-4 md:px-10">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent ref={emblaRef} className="-ml-4">
              {clients.map((client) => (
                <CarouselItem 
                  key={client.id} 
                  className="pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <Card className="overflow-hidden h-32 flex items-center justify-center p-6 bg-white hover:shadow-md transition-all duration-300 group">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        loading={client.id <= 5 ? "eager" : "lazy"}
                      />
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="left-0 lg:-left-4 bg-white/80 hover:bg-white" />
            <CarouselNext className="right-0 lg:-right-4 bg-white/80 hover:bg-white" />
          </Carousel>
          
          {/* Indicator dots */}
          <div className="flex justify-center gap-1 mt-4">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  index === selectedIndex ? "bg-primary" : "bg-muted"
                )}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Clients;