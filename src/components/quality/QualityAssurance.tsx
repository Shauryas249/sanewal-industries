import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Container from '@/components/ui/container';

const QualityAssurance: React.FC = () => {
  const methods = [
    {
      id: 1,
      title: 'Advanced Planning',
      description: 'We implement Advanced Product Quality Planning (APQP) to ensure quality is built into our products from the design phase.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-10 w-10">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
          <polyline points="14 2 14 8 20 8"/>
          <path d="M12 18v-6"/>
          <path d="M8 18v-1"/>
          <path d="M16 18v-3"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Statistical Process Control',
      description: 'We utilize SPC techniques to monitor and control our manufacturing processes, ensuring consistent quality.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-10 w-10">
          <path d="M3 3v18h18"/>
          <path d="m19 9-5 5-4-4-3 3"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Failure Mode and Effects Analysis',
      description: 'We conduct FMEA to identify potential failure modes and implement preventive measures.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-10 w-10">
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
          <path d="M12 9v4"/>
          <path d="M12 17h.01"/>
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Production Part Approval Process',
      description: 'We follow PPAP to ensure that our components consistently meet all customer engineering design requirements.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-10 w-10">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Measurement System Analysis',
      description: 'We perform MSA to validate the measurement systems used in our quality control processes.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-10 w-10">
          <path d="M2 12h20"/>
          <path d="M2 12v3.5a1.5 1.5 0 0 0 1.5 1.5H20a2 2 0 0 0 2-2V12"/>
          <path d="M2 12v-2.5A1.5 1.5 0 0 1 3.5 8H4"/>
          <path d="M22 12V9a2 2 0 0 0-2-2H11"/>
          <path d="M15 12V6"/>
          <path d="M18 12V6"/>
          <path d="M15 3h3v3"/>
          <path d="M13 6h2"/>
        </svg>
      ),
    },
    {
      id: 6,
      title: 'Continuous Improvement',
      description: 'We implement Kaizen and other continuous improvement methodologies to enhance our quality processes.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-10 w-10">
          <circle cx="12" cy="12" r="10"/>
          <path d="m8 14 4-4 4 4"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-background">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Quality Assurance Methods</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We employ comprehensive quality assurance methods throughout our manufacturing processes to ensure consistent product quality and reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methods.map((method) => (
            <Card key={method.id}>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground">{method.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default QualityAssurance;