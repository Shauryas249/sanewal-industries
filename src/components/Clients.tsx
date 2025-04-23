import React from 'react';
import Container from './ui/container';
import OptimizedImage from './ui/optimized-image';

const Clients: React.FC = () => {
  // Client logos with proper information
  const clients = [
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
  ];

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
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client) => (
            <div key={client.id} className="flex items-center justify-center p-6 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 h-32">
              <OptimizedImage
                src={client.logo}
                alt={`${client.name} logo`}
                width={200}
                height={80}
                className="max-h-20 w-auto object-contain"
                priority={client.id <= 2}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Clients;