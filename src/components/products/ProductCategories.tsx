import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductList from './ProductList';
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

  const forgedComponents = [
    "Stud Hood",
    "Lock Nut",
    "Steering Head Nut"
  ];

  const automotiveParts = [
    "Rotor Shaft Alternator",
    "Pole Shoe 1.5 HP",
    "De-compression",
    "Fork Bolt",
    "Upper Case",
    "Spline Gear Shaft",
    "Primary Piston",
    "Rear Piston"
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
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="h-64 w-full max-w-md bg-muted rounded-lg overflow-hidden group cursor-zoom-in">
                    <img 
                      src="/images/forged.jpg" 
                      alt="Forged Components" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">Forged Components</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  High-strength forged components designed for durability and performance.
                </p>
                <ProductList items={forgedComponents} />
                <div className="flex justify-center mt-8">
                  <Button variant="outline">
                    View All Forged Components
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="automotive" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="h-64 w-full max-w-md bg-muted rounded-lg overflow-hidden group cursor-zoom-in">
                    <img 
                      src="/images/automotive.jpg" 
                      alt="Automotive Parts" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">Automotive Parts</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  Specialized automotive components engineered for optimal performance and reliability.
                </p>
                <ProductList items={automotiveParts} />
                <div className="flex justify-center mt-8">
                  <Button variant="outline">
                    View All Automotive Parts
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductCategories;