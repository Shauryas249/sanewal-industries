import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Process: React.FC = () => {
  const processes = [
    {
      id: 1,
      title: 'Design & Engineering',
      description: 'Our engineering team works closely with clients to optimize process designs for manufacturability and performance.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-10 w-10">
          <path d="M3 3v18h18"/>
          <path d="m3 17 8-4 4 2 6-4"/>
          <path d="m3 11 8-4 4 2 6-4"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Material Selection',
      description: 'We source high-quality materials that meet specific requirements for strength, durability, and performance.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-10 w-10">
          <path d="M21 7 12 2 3 7l9 5 9-5Z"/>
          <path d="m3 7 9 5 9-5"/>
          <path d="m3 12 9 5 9-5"/>
          <path d="m3 17 9 5 9-5"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Precision Machining',
      description: 'Our CNC machines produce components with tight tolerances and consistent quality across production runs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-10 w-10">
          <path d="M12 2v8"/>
          <path d="m4.93 10.93 1.41 1.41"/>
          <path d="M2 18h2"/>
          <path d="M20 18h2"/>
          <path d="m19.07 10.93-1.41 1.41"/>
          <path d="M22 22H2"/>
          <path d="m16 6-4 4-4-4"/>
          <path d="M16 18a4 4 0 0 0-8 0"/>
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Forging Operations',
      description: 'Our forging processes create components with superior strength and structural integrity for demanding applications.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-10 w-10">
          <path d="m18 8 4 4-4 4"/>
          <path d="m2 12 20 0"/>
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Heat Treatment',
      description: 'Controlled heat treatment processes enhance material properties for specific performance requirements.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-10 w-10">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
        </svg>
      ),
    },
    {
      id: 6,
      title: 'Quality Inspection',
      description: 'Rigorous quality control at every stage ensures components meet or exceed customer specifications.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-10 w-10">
          <path d="m9 11 3 3L22 4"/>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Manufacturing Process</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive manufacturing process ensures high-quality components that meet precise specifications and performance requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processes.map((process) => (
            <Card key={process.id}>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {process.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
