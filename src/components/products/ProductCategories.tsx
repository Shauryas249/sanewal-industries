import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { Settings, Hammer, Car, Wrench, Package } from 'lucide-react';

interface ProductItem {
  name: string;
  description: string;
  imagePath?: string;
}

const ProductCategories: React.FC = () => {
  const fastenersConnectors: ProductItem[] = [
    {
      name: "Stud Hood",
      description: "High-strength stud for hood mounting and secure fastening",
    },
    {
      name: "Lock Nut",
      description: "Self-locking nut designed to prevent loosening under vibration",
    },
    {
      name: "Steering Head Nut",
      description: "Specialized nut for steering column assembly and adjustment",
    },
    {
      name: "Fork Bolt",
      description: "High-strength bolt for suspension fork assembly",
    },
    {
      name: "Banjo Bolt M12",
      description: "Hollow bolt designed for fluid passage in brake and fuel systems",
    },
    {
      name: "Banjo Bolt M22",
      description: "Heavy-duty hollow bolt for high-pressure fluid systems",
    }
  ];

  const pistonsHydraulic: ProductItem[] = [
    {
      name: "Primary Piston",
      description: "High-performance piston for primary hydraulic systems",
    },
    {
      name: "Rear Piston",
      description: "Specialized piston for rear brake or hydraulic applications",
    },
    {
      name: "De-compression FCU",
      description: "Engine decompression mechanism for fluid control units",
    },
    {
      name: "Oil Lock Coller K60",
      description: "Specialized collar for oil sealing in hydraulic systems",
    },
    {
      name: "Oil Lock Coller",
      description: "Standard oil lock collar for hydraulic applications",
    }
  ];

  const shaftsRotational: ProductItem[] = [
    {
      name: "Spline Gear Shaft",
      description: "Specialized shaft with spline profile for power transmission",
    },
    {
      name: "Pin Sector 10x64",
      description: "Precision pin for sector gear applications",
    },
    {
      name: "Rotor Shaft Alternator",
      description: "Precision-machined shaft for optimal alternator performance",
    },
    {
      name: "Pin Gear Shift 28G20",
      description: "Specialized pin for gear shift mechanisms",
    }
  ];

  const bushingsCollars: ProductItem[] = [
    {
      name: "Bush Pinion",
      description: "Specialized bushing for pinion gear applications",
    },
    {
      name: "Coller 9MM",
      description: "Standard 9mm collar for various applications",
    },
    {
      name: "Coller Shift",
      description: "Specialized collar for shift mechanisms",
    },
    {
      name: "Coller Wheel Side",
      description: "Wheel-side collar for automotive applications",
    }
  ];

  const adaptersConnectors: ProductItem[] = [
    {
      name: "Upper Case",
      description: "Precision-engineered housing for automotive components",
    },
    {
      name: "Inner Pole",
      description: "Specialized connector for electrical components",
    },
    {
      name: "Plug",
      description: "Sealing plug for fluid systems",
    },
    {
      name: "Adjecting Pin",
      description: "Precision-engineered pin for accurate adjustments and alignments",
    }
  ];

  const precisionMachined: ProductItem[] = [
    {
      name: "Pole Shoe 1.5 HP",
      description: "Specialized component for electric motor applications",
    }
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Product Categories</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We manufacture a wide range of high-quality components for the automotive industry, including machined components, forged components, and specialized automotive parts.
          </p>
        </div>
        
        {/* Category Navigation with Icons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          <Card 
            className="cursor-pointer hover:border-primary transition-colors" 
            onClick={() => window.location.href = "/products/fasteners-connectors"}
          >
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <Hammer className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-medium">Fasteners & Connectors</h3>
            </CardContent>
          </Card>
          
          <Card 
            className="cursor-pointer hover:border-primary transition-colors"
            onClick={() => window.location.href = "/products/pistons-hydraulic-components"}
          >
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <Car className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-medium">Pistons & Hydraulic</h3>
            </CardContent>
          </Card>
          
          <Card 
            className="cursor-pointer hover:border-primary transition-colors"
            onClick={() => window.location.href = "/products/shafts-rotational-components"}
          >
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <Settings className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-medium">Shafts & Rotational</h3>
            </CardContent>
          </Card>
          
          <Card 
            className="cursor-pointer hover:border-primary transition-colors"
            onClick={() => window.location.href = "/products/bushings-collars"}
          >
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <Wrench className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-medium">Bushings & Collars</h3>
            </CardContent>
          </Card>
          
          <Card 
            className="cursor-pointer hover:border-primary transition-colors"
            onClick={() => window.location.href = "/products/adapters-connectors"}
          >
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <Car className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-medium">Adapters & Connectors</h3>
            </CardContent>
          </Card>
          
          <Card 
            className="cursor-pointer hover:border-primary transition-colors"
            onClick={() => window.location.href = "/products/precision-machined-parts"}
          >
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <Settings className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-medium">Precision Machined</h3>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="fasteners" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="fasteners" onClick={() => window.location.href = "/products/fasteners-connectors"}>Fasteners</TabsTrigger>
            <TabsTrigger value="pistons" onClick={() => window.location.href = "/products/pistons-hydraulic-components"}>Pistons</TabsTrigger>
            <TabsTrigger value="shafts" onClick={() => window.location.href = "/products/shafts-rotational-components"}>Shafts</TabsTrigger>
            <TabsTrigger value="bushings" onClick={() => window.location.href = "/products/bushings-collars"}>Bushings</TabsTrigger>
            <TabsTrigger value="adapters" onClick={() => window.location.href = "/products/adapters-connectors"}>Adapters</TabsTrigger>
            <TabsTrigger value="precision" onClick={() => window.location.href = "/products/precision-machined-parts"}>Precision</TabsTrigger>
          </TabsList>
          
          <TabsContent value="fasteners" className="mt-6">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Fasteners & Connectors</h3>
              <p className="text-muted-foreground mb-6">
                Essential fastening components designed for secure connections in automotive applications.
              </p>
              
              {/* Card Grid Layout for Fasteners & Connectors */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {fastenersConnectors.map((item, index) => (
                  <ProductCard 
                    key={index}
                    name={item.name}
                    description={item.description}
                    imagePath={item.imagePath}
                  />
                ))}
              </div>
              
              <div className="flex justify-center mt-8">
                <Button variant="outline" onClick={() => window.location.href = "/products/fasteners-connectors"}>
                  View All Fasteners & Connectors
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="pistons" className="mt-6">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Pistons & Hydraulic Components</h3>
              <p className="text-muted-foreground mb-6">
                Precision-engineered pistons and hydraulic parts for optimal fluid control and pressure management.
              </p>
              
              {/* Card Grid Layout for Pistons & Hydraulic Components */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {pistonsHydraulic.map((item, index) => (
                  <ProductCard 
                    key={index}
                    name={item.name}
                    description={item.description}
                    imagePath={item.imagePath}
                  />
                ))}
              </div>
              
              <div className="flex justify-center mt-8">
                <Button variant="outline" onClick={() => window.location.href = "/products/pistons-hydraulic-components"}>
                  View All Pistons & Hydraulic Components
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="shafts" className="mt-6">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Shafts & Rotational Components</h3>
              <p className="text-muted-foreground mb-6">
                High-strength rotational components manufactured to ensure reliable power transmission.
              </p>
              
              {/* Card Grid Layout for Shafts & Rotational Components */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {shaftsRotational.map((item, index) => (
                  <ProductCard 
                    key={index}
                    name={item.name}
                    description={item.description}
                    imagePath={item.imagePath}
                  />
                ))}
              </div>
              
              <div className="flex justify-center mt-8">
                <Button variant="outline" onClick={() => window.location.href = "/products/shafts-rotational-components"}>
                  View All Shafts & Rotational Components
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="bushings" className="mt-6">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Bushings & Collars</h3>
              <p className="text-muted-foreground mb-6">
                Durable bushings and collars designed for reduced friction and extended component life.
              </p>
              
              {/* Card Grid Layout for Bushings & Collars */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {bushingsCollars.map((item, index) => (
                  <ProductCard 
                    key={index}
                    name={item.name}
                    description={item.description}
                    imagePath={item.imagePath}
                  />
                ))}
              </div>
              
              <div className="flex justify-center mt-8">
                <Button variant="outline" onClick={() => window.location.href = "/products/bushings-collars"}>
                  View All Bushings & Collars
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="adapters" className="mt-6">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Adapters & Connectors</h3>
              <p className="text-muted-foreground mb-6">
                Specialized connectors that ensure proper integration between various automotive systems.
              </p>
              
              {/* Card Grid Layout for Adapters & Connectors */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {adaptersConnectors.map((item, index) => (
                  <ProductCard 
                    key={index}
                    name={item.name}
                    description={item.description}
                    imagePath={item.imagePath}
                  />
                ))}
              </div>
              
              <div className="flex justify-center mt-8">
                <Button variant="outline" onClick={() => window.location.href = "/products/adapters-connectors"}>
                  View All Adapters & Connectors
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="precision" className="mt-6">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Precision Machined Parts</h3>
              <p className="text-muted-foreground mb-6">
                Custom machined components manufactured with tight tolerances and superior finish.
              </p>
              
              {/* Card Grid Layout for Precision Machined Parts */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {precisionMachined.map((item, index) => (
                  <ProductCard 
                    key={index}
                    name={item.name}
                    description={item.description}
                    imagePath={item.imagePath}
                  />
                ))}
              </div>
              
              <div className="flex justify-center mt-8">
                <Button variant="outline" onClick={() => window.location.href = "/products/precision-machined-parts"}>
                  View All Precision Machined Parts
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductCategories;