import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Products: React.FC = () => {
  const productCategories = [
    {
      id: 1,
      title: 'Fasteners & Connectors',
      image: '/images/forged.jpg',
      description: 'Essential fastening components designed for secure connections in automotive applications.',
    },
    {
      id: 2,
      title: 'Pistons & Hydraulic Components',
      image: '/images/automotive.jpg',
      description: 'Precision-engineered pistons and hydraulic parts for optimal fluid control and pressure management.',
    },
    {
      id: 3,
      title: 'Shafts & Rotational Components',
      image: '/images/machined.jpg',
      description: 'High-strength rotational components manufactured to ensure reliable power transmission.',
    },
    {
      id: 4,
      title: 'Bushings & Collars',
      image: '/images/custom.jpg',
      description: 'Durable bushings and collars designed for reduced friction and extended component life.',
    },
    {
      id: 5,
      title: 'Adapters & Connectors',
      image: '/images/automotive.jpg',
      description: 'Specialized connectors that ensure proper integration between various automotive systems.',
    },
    {
      id: 6,
      title: 'Precision Machined Parts',
      image: '/images/machined.jpg',
      description: 'Custom machined components manufactured with tight tolerances and superior finish.',
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Products</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We specialize in manufacturing high-quality machined and forged components for the automotive industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category) => (
            <Card key={category.id} className="overflow-hidden">
              <div className="h-48 bg-muted flex items-center justify-center">
                <div className="text-4xl text-muted-foreground/50">[Image]</div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.location.href = `/products/${category.title.toLowerCase().replace(/ /g, '-')}`}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="default" size="lg" onClick={() => window.location.href = "/products"}>
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;