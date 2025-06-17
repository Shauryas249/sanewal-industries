import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Machinery: React.FC = () => {
  const machineCategories = [
    {
      id: 'cnc',
      name: 'CNC Machines',
      machines: [
        {
          id: 1,
          name: 'CNC Turning Centers',
          specs: 'High-precision multi-axis turning centers with live tooling capabilities',
        },
        {
          id: 2,
          name: 'CNC Machining Centers',
          specs: 'Vertical and horizontal machining centers for complex component manufacturing',
        },
        {
          id: 3,
          name: 'CNC Grinding Machines',
          specs: 'Surface and cylindrical grinding machines for precision finishing',
        },
      ],
    },
    {
      id: 'forging',
      name: 'Forging Equipment',
      machines: [
        {
          id: 1,
          name: 'Hydraulic Presses',
          specs: 'Various tonnage capacities for cold and hot forging operations',
        },
        {
          id: 2,
          name: 'Forging Hammers',
          specs: 'Pneumatic and mechanical hammers for precision forging',
        },
        {
          id: 3,
          name: 'Heat Treatment Furnaces',
          specs: 'Controlled atmosphere furnaces for precise heat treatment processes',
        },
      ],
    },
    {
      id: 'inspection',
      name: 'Inspection Equipment',
      machines: [
        {
          id: 1,
          name: 'Coordinate Measuring Machines (CMM)',
          specs: 'High-precision measurement systems for complex geometries',
        },
        {
          id: 2,
          name: 'Optical Measurement Systems',
          specs: 'Non-contact measurement for critical dimensions and surface analysis',
        },
        {
          id: 3,
          name: 'Material Testing Equipment',
          specs: 'Hardness testers, tensile testing machines, and metallurgical analysis tools',
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Machinery</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We invest in advanced machinery and equipment to ensure precision, quality, and efficiency in our manufacturing processes.
          </p>
        </div>
        
        <Tabs defaultValue="cnc" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            {machineCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {machineCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.machines.map((machine) => (
                  <Card key={machine.id}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{machine.name}</h3>
                      <p className="text-muted-foreground text-sm">{machine.specs}</p>
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

export default Machinery;