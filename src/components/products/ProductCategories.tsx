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
  const machinedComponents: ProductItem[] = [
    {
      name: "Adjusting Pin",
      description: "Precision-engineered pin for accurate adjustments and alignments",
    },
    {
      name: "Banjo Bolt M12",
      description: "Hollow bolt designed for fluid passage in brake and fuel systems",
    },
    {
      name: "Banjo Bolt M22",
      description: "Heavy-duty hollow bolt for high-pressure fluid systems",
    },
    {
      name: "Collars",
      description: "Various collar types including Pinion, Shift, Oil Lock, and Wheel Side",
    },
    {
      name: "Pins",
      description: "Specialized pins including Gear Shift and Sector variants",
    },
    {
      name: "Custom Machined Parts",
      description: "Tailored machined components to meet specific requirements",
    }
  ];

  const forgedComponents: ProductItem[] = [
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
      name: "Forged Brackets",
      description: "Durable brackets with superior strength-to-weight ratio",
    },
    {
      name: "Connecting Rods",
      description: "High-performance connecting rods for engine applications",
    },
    {
      name: "Forged Flanges",
      description: "Precision flanges for high-pressure and high-temperature systems",
    }
  ];

  const automotiveParts: ProductItem[] = [
    {
      name: "Rotor Shaft Alternator",
      description: "Precision-machined shaft for optimal alternator performance",
    },
    {
      name: "Pole Shoe 1.5 HP",
      description: "Specialized component for electric motor applications",
    },
    {
      name: "De-compression",
      description: "Engine decompression mechanism for easier starting",
    },
    {
      name: "Fork Bolt",
      description: "High-strength bolt for suspension fork assembly",
    },
    {
      name: "Upper Case",
      description: "Precision-engineered housing for automotive components",
    },
    {
      name: "Spline Gear Shaft",
      description: "Specialized shaft with spline profile for power transmission",
    },
    {
      name: "Primary Piston",
      description: "High-performance piston for primary hydraulic systems",
    },
    {
      name: "Rear Piston",
      description: "Specialized piston for rear brake or hydraulic applications",
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          <Card className="cursor-pointer hover:border-primary transition-colors">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <Settings className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-medium">Machined Components</h3>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:border-primary transition-colors">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <Hammer className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-medium">Forged Components</h3>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:border-primary transition-colors">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <Car className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-medium">Automotive Parts</h3>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:border-primary transition-colors">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <Wrench className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-medium">Custom Solutions</h3>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:border-primary transition-colors">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <Package className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-medium">All Products</h3>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="machined" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="machined">Machined Components</TabsTrigger>
            <TabsTrigger value="forged">Forged Components</TabsTrigger>
            <TabsTrigger value="automotive">Automotive Parts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="machined" className="mt-6">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Machined Components</h3>
              <p className="text-muted-foreground mb-6">
                Precision-engineered components manufactured with tight tolerances and superior finish.
              </p>
              
              {/* Card Grid Layout for Machined Components */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {machinedComponents.map((item, index) => (
                  <ProductCard 
                    key={index}
                    name={item.name}
                    description={item.description}
                    imagePath={item.imagePath}
                  />
                ))}
              </div>
              
              <div className="flex justify-center mt-8">
                <Button variant="outline">
                  View All Machined Components
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="forged" className="mt-6">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Forged Components</h3>
              <p className="text-muted-foreground mb-6">
                High-strength forged components designed for durability and performance.
              </p>
              
              {/* Card Grid Layout for Forged Components */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {forgedComponents.map((item, index) => (
                  <ProductCard 
                    key={index}
                    name={item.name}
                    description={item.description}
                    imagePath={item.imagePath}
                  />
                ))}
              </div>
              
              <div className="flex justify-center mt-8">
                <Button variant="outline">
                  View All Forged Components
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="automotive" className="mt-6">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Automotive Parts</h3>
              <p className="text-muted-foreground mb-6">
                Specialized automotive components engineered for optimal performance and reliability.
              </p>
              
              {/* Card Grid Layout for Automotive Parts */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {automotiveParts.map((item, index) => (
                  <ProductCard 
                    key={index}
                    name={item.name}
                    description={item.description}
                    imagePath={item.imagePath}
                  />
                ))}
              </div>
              
              <div className="flex justify-center mt-8">
                <Button variant="outline">
                  View All Automotive Parts
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