import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Container from '@/components/ui/container';

const TestingEquipment: React.FC = () => {
  // Empty equipment list since we're displaying all items with images now
  const equipmentList: string[] = [];
  
  const testingInstruments = [
    {
      name: "Roughness Tester",
      description: "For measuring surface texture and finish quality",
      image: "/images/roughness-tester.png",
      alt: "Roughness Tester - For measuring surface texture and finish quality"
    },
    {
      name: "Micro Vickers Hardness Tester",
      description: "For precise hardness testing of materials",
      image: "/images/micro-vickers-hardness-tester.png",
      alt: "Micro Vickers Hardness Tester - For precise hardness testing of materials"
    },
    {
      name: "Rockwell Hardness Tester",
      description: "For evaluating material hardness properties",
      image: "/images/rockwell-hardness-tester.png",
      alt: "Rockwell Hardness Tester - For evaluating material hardness properties"
    },
    {
      name: "Coating Thickness Testers",
      description: "For measuring the thickness of surface coatings",
      image: "/images/coating-thickness-tester.png",
      alt: "Coating Thickness Testers - For measuring the thickness of surface coatings"
    }
  ];
  
  const specializedEquipment = [
    {
      name: "Laser Marking Machine",
      description: "For permanent identification and traceability marking",
      image: "/images/laser-marking-machine.png",
      alt: "Laser Marking Machine - For permanent identification and traceability marking"
    },
    {
      name: "Leakage Testing Machine",
      description: "For verifying seal integrity and detecting leaks",
      image: "/images/leakage-testing-machine.png",
      alt: "Leakage Testing Machine - For verifying seal integrity and detecting leaks"
    }
  ];

  const measurementTools = [
    {
      name: "Micrometers",
      description: "Precision measurement tools for accurate dimensional analysis",
      image: "/images/micrometer.jpg",
      alt: "Micrometers - Precision measurement tools for dimensional analysis"
    },
    {
      name: "Vernier Calipers",
      description: "For measuring internal and external dimensions with high precision",
      image: "/images/vernier-caliper.jpg",
      alt: "Vernier Calipers - High precision measuring tool for internal and external dimensions"
    },
    {
      name: "Height Gauge",
      description: "For precise height measurements and scribing operations",
      image: "/images/height-gauge.jpg",
      alt: "Height Gauge - Precision tool for height measurements and scribing operations"
    }
  ];
  
  const opticalEquipment = [
    {
      name: "Profile Projector",
      description: "For inspecting complex profiles and geometric dimensions",
      image: "/images/profile-projector.png",
      alt: "Profile Projector - For inspecting complex profiles and geometric dimensions"
    },
    {
      name: "Magnascope",
      description: "For detailed surface inspection and analysis",
      image: "/images/magnascope.png",
      alt: "Magnascope - For detailed surface inspection and analysis"
    },
    {
      name: "Metallurgical Microscope",
      description: "For microstructure analysis of materials",
      image: "/images/metallurgical-microscope.png",
      alt: "Metallurgical Microscope - For microstructure analysis of materials"
    },
    {
      name: "Trinocular Stereozoom Microscope",
      description: "For detailed 3D inspection of components",
      image: "/images/trinocular-stereozoom-microscope.png",
      alt: "Trinocular Stereozoom Microscope - For detailed 3D inspection of components"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <Container>
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

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Measurement Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {measurementTools.map((tool, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 bg-muted relative overflow-hidden">
                  <Image 
                    src={tool.image}
                    alt={tool.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">{tool.name}</h4>
                  <p className="text-muted-foreground text-sm">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Optical Equipment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {opticalEquipment.map((tool, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 bg-muted relative overflow-hidden">
                  <Image 
                    src={tool.image}
                    alt={tool.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">{tool.name}</h4>
                  <p className="text-muted-foreground text-sm">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Testing Instruments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testingInstruments.map((tool, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 bg-muted relative overflow-hidden">
                  <Image 
                    src={tool.image}
                    alt={tool.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">{tool.name}</h4>
                  <p className="text-muted-foreground text-sm">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Specialized Equipment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specializedEquipment.map((tool, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 bg-muted relative overflow-hidden">
                  <Image 
                    src={tool.image}
                    alt={tool.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">{tool.name}</h4>
                  <p className="text-muted-foreground text-sm">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestingEquipment;