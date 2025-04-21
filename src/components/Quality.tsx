import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Container from './ui/container';

const Quality: React.FC = () => {
  const certifications = [
    {
      id: 1,
      title: 'IATF 16949:2016',
      description: 'International standard for automotive quality management systems',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-10 w-10">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: 'ISO 14001:2015',
      description: 'Environmental management systems certification',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-10 w-10">
          <path d="M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0Z"/>
          <path d="M12 2v10l4.5 4.5"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Quality Assurance</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our commitment to quality is reflected in our certifications and rigorous quality control processes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {certifications.map((cert) => (
            <Card key={cert.id}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg max-w-3xl mx-auto">
            We maintain strict quality control at every stage of production to ensure our products meet the highest standards of performance and reliability.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Quality;