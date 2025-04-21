import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';

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
          image: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/micrometer-c7aaee1.jpg',
          alt: 'Micrometers - Precision measurement tools for dimensional analysis'
        },
        { 
          id: 2, 
          name: 'Vernier Calipers', 
          description: 'For measuring internal and external dimensions with high precision',
          image: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/vernier-caliper-6fabfeb.jpg',
          alt: 'Vernier Calipers - High precision measuring tool for internal and external dimensions'
        },
        { 
          id: 3, 
          name: 'Height Gauge', 
          description: 'For precise height measurements and scribing operations',
          image: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/height-gauge-4837fac.jpg',
          alt: 'Height Gauge - Precision tool for height measurements and scribing operations'
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
          image: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/profile-projector-673ad9c.png',
          alt: 'Profile Projector - For inspecting complex profiles and geometric dimensions'
        },
        { 
          id: 2, 
          name: 'Magnascope', 
          description: 'For detailed surface inspection and analysis',
          image: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/magnascope-4638d63.png',
          alt: 'Magnascope - For detailed surface inspection and analysis'
        },
        { 
          id: 3, 
          name: 'Metallurgical Microscope', 
          description: 'For microstructure analysis of materials',
          image: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/metallurgical-microscope-d285bc3.png',
          alt: 'Metallurgical Microscope - For microstructure analysis of materials'
        },
        { 
          id: 4, 
          name: 'Trinocular Stereozoom Microscope', 
          description: 'For detailed 3D inspection of components',
          image: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/trinocular-stereozoom-microscope-325c15b.png',
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
          image: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/roughness-tester-2654181.png',
          alt: 'Roughness Tester - For measuring surface texture and finish quality'
        },
        { 
          id: 2, 
          name: 'Micro Vickers Hardness Tester', 
          description: 'For precise hardness testing of materials',
          image: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/micro-vickers-hardness-tester-dc588b3.png',
          alt: 'Micro Vickers Hardness Tester - For precise hardness testing of materials'
        },
        { 
          id: 3, 
          name: 'Rockwell Hardness Tester', 
          description: 'For evaluating material hardness properties',
          image: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/rockwell-hardness-tester-344992d.png',
          alt: 'Rockwell Hardness Tester - For evaluating material hardness properties'
        },
        { 
          id: 4, 
          name: 'Coating Thickness Testers', 
          description: 'For measuring the thickness of surface coatings',
          image: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/coating-thickness-tester-0c3d714.png',
          alt: 'Coating Thickness Testers - For measuring the thickness of surface coatings'
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
          image: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/laser-marking-machine-34f7d05.png',
          alt: 'Laser Marking Machine - For permanent identification and traceability marking'
        },
        { 
          id: 2, 
          name: 'Leakage Testing Machine', 
          description: 'For verifying seal integrity and detecting leaks',
          image: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/leakage-testing-machine-3abe856.png',
          alt: 'Leakage Testing Machine - For verifying seal integrity and detecting leaks'
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Testing Equipment</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We utilize advanced testing and measurement equipment to ensure our components meet the highest quality standards.
          </p>
        </div>
        
        <Tabs defaultValue="measurement" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
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
                          className="object-contain p-2"
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
      </div>
    </section>
  );
};

export default TestingEquipment;