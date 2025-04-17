import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductList from './ProductList';

const ProductCategories: React.FC = () => {
  const machinedComponents = [
    "Adjusting Pin",
    "Banjo Bolt M12",
    "Banjo Bolt M22",
    "Collars (Pinion, Shift, Oil Lock, Wheel Side)",
    "Pins (Gear Shift, Sector)"
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
        
        <Tabs defaultValue="machined" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="machined">Machined Components</TabsTrigger>
            <TabsTrigger value="forged">Forged Components</TabsTrigger>
            <TabsTrigger value="automotive">Automotive Parts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="machined" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="h-64 w-full max-w-md bg-muted rounded-lg overflow-hidden group cursor-zoom-in">
                    <img 
                      src="/images/machined.jpg" 
                      alt="Machined Components" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">Machined Components</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  Precision-engineered components manufactured with tight tolerances and superior finish.
                </p>
                <ProductList items={machinedComponents} />
              </CardContent>
            </Card>
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
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductCategories;