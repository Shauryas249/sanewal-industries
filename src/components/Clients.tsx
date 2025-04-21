import React from 'react';
import Container from './ui/container';

const Clients: React.FC = () => {
  // Placeholder for client logos
  const clients = [
    { id: 1, name: 'Client 1' },
    { id: 2, name: 'Client 2' },
    { id: 3, name: 'Client 3' },
    { id: 4, name: 'Client 4' },
    { id: 5, name: 'Client 5' },
    { id: 6, name: 'Client 6' },
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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client) => (
            <div key={client.id} className="flex items-center justify-center p-4 bg-muted/30 rounded-md h-24">
              <div className="text-xl font-medium text-muted-foreground">{client.name}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Clients;