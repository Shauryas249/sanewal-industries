import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TestingEquipment: React.FC = () => {
  const equipmentCategories = [
    {
      id: 'measurement',
      name: 'Measurement Tools',
      equipment: [
        { id: 1, name: 'Micrometers', description: 'Precision measurement tools for accurate dimensional analysis' },
        { id: 2, name: 'Vernier Calipers', description: 'For measuring internal and external dimensions with high precision' },
        { id: 3, name: 'Height Gauge', description: 'For precise height measurements and scribing operations' },
      ],
    },
    {
      id: 'optical',
      name: 'Optical Equipment',
      equipment: [
        { id: 1, name: 'Profile Projector', description: 'For inspecting complex profiles and geometric dimensions' },
        { id: 2, name: 'Magnascope', description: 'For detailed surface inspection and analysis' },
        { id: 3, name: 'Metallurgical Microscope', description: 'For microstructure analysis of materials' },
        { id: 4, name: 'Trinocular Stereozoom Microscope', description: 'For detailed 3D inspection of components' },
      ],
    },
    {
      id: 'testing',
      name: 'Testing Instruments',
      equipment: [
        { id: 1, name: 'Roughness Tester', description: 'For measuring surface texture and finish quality' },
        { id: 2, name: 'Micro Vickers Hardness Tester', description: 'For precise hardness testing of materials' },
        { id: 3, name: 'Rockwell Hardness Tester', description: 'For evaluating material hardness properties' },
        { id: 4, name: 'Coating Thickness Testers', description: 'For measuring the thickness of surface coatings' },
      ],
    },
    {
      id: 'specialized',
      name: 'Specialized Equipment',
      equipment: [
        { id: 1, name: 'Laser Marking Machine', description: 'For permanent identification and traceability marking' },
        { id: 2, name: 'Leakage Testing Machine', description: 'For verifying seal integrity and detecting leaks' },
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
                    <div className="h-48 bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground">[{item.name} Image]</span>
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