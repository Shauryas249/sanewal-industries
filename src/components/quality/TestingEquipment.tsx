import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import Container from '@/components/ui/container';

const TestingEquipment: React.FC = () => {
  const equipmentCategories = [
    {
      id: 'measurement',
      name: 'Measurement Tools',
      equipment: [
        { 
          id: 1, 
          name: 'Micrometers', 
          description: 'Precision measurement tools for accurate dimensional analysis',
          image: '/images/micrometer.jpg',
          alt: 'Micrometers - Precision measurement tools for dimensional analysis'
        },
        { 
          id: 2, 
          name: 'Vernier Calipers', 
          description: 'For measuring internal and external dimensions with high precision',
          image: '/images/vernier-caliper.jpg',
          alt: 'Vernier Calipers - High precision measuring tool for internal and external dimensions'
        },
        { 
          id: 3, 
          name: 'Height Gauge', 
          description: 'For precise height measurements and scribing operations',
          image: '/images/height-gauge.jpg',
          alt: 'Height Gauge - Precision tool for height measurements and scribing operations'
        },
        { 
          id: 4, 
          name: 'Contour Measurement Contracer', 
          description: 'For precise measurement and analysis of complex contours and surface profiles',
          image: '/images/Contour-Measurement-Contracer.jpg',
          alt: 'Contour Measurement Contracer - Precision device for measuring complex surface profiles'
        },
      ],
    },
    {
      id: 'optical',
      name: 'Optical Equipment',
      equipment: [
        { 
          id: 1, 
          name: 'Profile Projector', 
          description: 'For inspecting complex profiles and geometric dimensions',
          image: '/images/profile-projector.png',
          alt: 'Profile Projector - For inspecting complex profiles and geometric dimensions'
        },
        { 
          id: 2, 
          name: 'Magnascope', 
          description: 'For detailed surface inspection and analysis',
          image: '/images/magnascope.png',
          alt: 'Magnascope - For detailed surface inspection and analysis'
        },
        { 
          id: 3, 
          name: 'Metallurgical Microscope', 
          description: 'For microstructure analysis of materials',
          image: '/images/metallurgical-microscope.png',
          alt: 'Metallurgical Microscope - For microstructure analysis of materials'
        },
        { 
          id: 4, 
          name: 'Trinocular Stereozoom Microscope', 
          description: 'For detailed 3D inspection of components',
          image: '/images/trinocular-stereozoom-microscope.png',
          alt: 'Trinocular Stereozoom Microscope - For detailed 3D inspection of components'
        },
      ],
    },
    {
      id: 'testing',
      name: 'Testing Instruments',
      equipment: [
        { 
          id: 1, 
          name: 'Roughness Tester', 
          description: 'For measuring surface texture and finish quality',
          image: '/images/roughness-tester.png',
          alt: 'Roughness Tester - For measuring surface texture and finish quality'
        },
        { 
          id: 2, 
          name: 'Micro Vickers Hardness Tester', 
          description: 'For precise hardness testing of materials',
          image: '/images/micro-vickers-hardness-tester.png',
          alt: 'Micro Vickers Hardness Tester - For precise hardness testing of materials'
        },
        { 
          id: 3, 
          name: 'Rockwell Hardness Tester', 
          description: 'For evaluating material hardness properties',
          image: '/images/rockwell-hardness-tester.png',
          alt: 'Rockwell Hardness Tester - For evaluating material hardness properties'
        },
        { 
          id: 4, 
          name: 'Coating Thickness Testers', 
          description: 'For measuring the thickness of surface coatings',
          image: '/images/coating-thickness-tester.png',
          alt: 'Coating Thickness Testers - For measuring the thickness of surface coatings'
        },
        { 
          id: 5, 
          name: 'SST Chamber', 
          description: 'For accelerated corrosion testing in salt spray environments to evaluate material durability',
          image: '/images/Salt-Spray-Test-Chamber.jpg',
          alt: 'Salt Spray Test Chamber for accelerated corrosion testing in controlled environments'
        },
        { 
          id: 6, 
          name: 'MPI Machine', 
          description: 'Magnetic Particle Inspection equipment for detecting surface and near-surface discontinuities in ferromagnetic materials',
          image: '/images/magneetic-particle-inpector.jpg',
          alt: 'MPI Machine - Magnetic Particle Inspection equipment for detecting discontinuities in ferromagnetic materials'
        },
      ],
    },
    {
      id: 'specialized',
      name: 'Specialized Equipment',
      equipment: [
        { 
          id: 1, 
          name: 'Laser Marking Machine', 
          description: 'For permanent identification and traceability marking',
          image: '/images/laser-marking-machine.png',
          alt: 'Laser Marking Machine - For permanent identification and traceability marking'
        },
        { 
          id: 2, 
          name: 'Leakage Testing Machine', 
          description: 'For verifying seal integrity and detecting leaks',
          image: '/images/leakage-testing-machine.png',
          alt: 'Leakage Testing Machine - For verifying seal integrity and detecting leaks'
        },
        { 
          id: 3, 
          name: 'Magnetic Crack Detector', 
          description: 'For non-destructive detection of surface and subsurface flaws in ferromagnetic materials',
          image: '/images/Magnetic-Crack-Detector.jpg',
          alt: 'Magnetic Crack Detector with U-shaped yoke for non-destructive flaw detection in ferromagnetic materials'
        },
      ],
    },
    {
      id: 'sample-preparation',
      name: 'Sample Preparation Equipment',
      equipment: [
        { 
          id: 1, 
          name: 'Double Disc Polishing Machine', 
          description: 'High-precision polishing system for achieving mirror-finish surfaces on metallographic samples',
          image: '/images/dual-disc-polishing-machine.jpg',
          alt: 'Double Disc Polishing Machine - High-precision polishing system for metallographic samples'
        },
        { 
          id: 2, 
          name: 'Touch Screen Hot Mounting Press', 
          description: 'Automated mounting press with digital temperature and pressure control for sample preparation',
          image: '/images/hot-mounting-press.jpg',
          alt: 'Touch Screen Hot Mounting Press - Automated mounting press with digital controls for sample preparation'
        },
        { 
          id: 3, 
          name: 'Abrasive Belt Grinder', 
          description: 'Variable speed belt grinding system for rough and fine grinding of metallographic specimens',
          image: '/images/Abrasive-belt-grinder.jpg',
          alt: 'Abrasive Belt Grinder - Variable speed belt grinding system for metallographic specimens'
        },
        { 
          id: 4, 
          name: 'Abrasive Cut Off Machine', 
          description: 'Precision cutting machine for sectioning hard materials with minimal sample damage',
          image: '/images/abrasive-cut-off-machine.jpg',
          alt: 'Abrasive Cut Off Machine - Precision cutting machine for sectioning hard materials with minimal damage'
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Testing Equipment</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We utilize advanced testing and measurement equipment to ensure our components meet the highest quality standards.
          </p>
        </div>
        
        <Tabs defaultValue="measurement" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {equipmentCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {equipmentCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.equipment.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <div className="h-48 bg-muted flex items-center justify-center relative overflow-hidden">
                      {item.image ? (
                        <Image 
                          src={item.image}
                          alt={item.alt || `${item.name} - ${item.description}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlZWVlZWUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5OTk5Ij5JbWFnZSBub3QgYXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg==';
                          }}
                        />
                      ) : (
                        <span className="text-muted-foreground">[{item.name} Image]</span>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </section>
  );
};

export default TestingEquipment;