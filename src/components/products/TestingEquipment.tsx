import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TestingEquipment: React.FC = () => {
  const equipmentList = [
    "Profile Projector (Meerametzer)",
    "Roughness Tester (Mitutoyo SJ-201)",
    "Micro Vickers Hardness Tester (Truemet)",
    "Rockwell Hardness Tester (Saroj)",
    "Magnascope (Truemet)",
    "Metallurgical Microscope (Truemet)",
    "Trinocular Stereozoom Microscope (Truemet)",
    "Coating Thickness Testers",
    "Measurement Tools (Micrometers, Vernier Calipers, Height Gauge)",
    "Specialized Equipment (Laser Marking Machine, Leakage Testing Machine)"
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Quality Testing Equipment</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We utilize advanced testing equipment to ensure the highest quality standards for all our products.
          </p>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {equipmentList.map((equipment, index) => (
                <div key={index} className="flex items-center p-4 border rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary font-semibold">{index + 1}</span>
                  </div>
                  <span className="text-sm md:text-base">{equipment}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TestingEquipment;