import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Container from '@/components/ui/container';

const Certifications: React.FC = () => {
  const certifications = [
    {
      id: 'iatf',
      name: 'IATF 16949:2016',
      description: 'The International Automotive Task Force (IATF) 16949:2016 is the global technical specification and quality management standard for the automotive industry.',
      details: [
        'Focuses on continuous improvement, defect prevention, and reduction of variation and waste in the supply chain',
        'Emphasizes the development of a process-oriented quality management system',
        'Includes specific requirements for automotive production and relevant service parts organizations',
        'Builds on the ISO 9001 framework with additional automotive industry-specific requirements',
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-12 w-12">
          <circle cx="12" cy="12" r="10"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      ),
    },
    {
      id: 'iso',
      name: 'ISO 14001:2015',
      description: 'ISO 14001:2015 is the international standard for environmental management systems (EMS) that helps organizations improve their environmental performance.',
      details: [
        'Provides a framework for environmental management best practices',
        'Helps organizations minimize their environmental impact and comply with applicable laws and regulations',
        'Focuses on sustainable resource use and climate change mitigation',
        'Requires ongoing monitoring and measurement of environmental performance',
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-12 w-12">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
          <path d="m7 10 3 3 7-7"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We maintain the highest standards of quality and environmental management through our internationally recognized certifications.
          </p>
        </div>
        
        <Tabs defaultValue="iatf" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            {certifications.map((cert) => (
              <TabsTrigger key={cert.id} value={cert.id}>
                {cert.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {certifications.map((cert) => (
            <TabsContent key={cert.id} value={cert.id} className="mt-6">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="flex-shrink-0">
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">{cert.name}</h3>
                      <p className="text-muted-foreground mb-6">{cert.description}</p>
                      
                      <h4 className="text-lg font-medium mb-3">Key Requirements:</h4>
                      <ul className="space-y-2">
                        {cert.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-5 w-5 mr-2 mt-0.5">
                              <polyline points="9 11 12 14 22 4"/>
                              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                            </svg>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6 flex justify-center">
                {cert.id === 'iatf' ? (
                  <div className="relative w-[300px] h-[350px] overflow-hidden border border-muted rounded-md">
                    <img 
                      src="/images/IATF-16949-2016.jpg"
                      alt="Sanewal Auto Engineers IATF 16949:2016 Automotive Quality Management System certification"
                      className="object-contain w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="relative w-[300px] h-[350px] overflow-hidden border border-muted rounded-md">
                    <img 
                      src="/images/ISO-14001-2015.jpg"
                      alt="Sanewal Auto Engineers ISO 14001:2015 Environmental Management System certification"
                      className="object-contain w-full h-full"
                    />
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </section>
  );
};

export default Certifications;