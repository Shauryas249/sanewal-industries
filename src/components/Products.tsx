import React from 'react';
import { Button } from '@/components/ui/button';
import Container from './ui/container';
import ProductCarousel from './products/ProductCarousel';

const Products: React.FC = () => {
  // Product categories with their descriptions and slugs
  const productCategories = [
    {
      id: 1,
      title: 'Fasteners & Connectors',
      description: 'Essential fastening components designed for secure connections in automotive applications.',
      slug: 'fasteners-connectors',
      products: [
        { name: 'Stud Hood', imagePath: '/images/Stud-Hood.jpg' },
        { name: 'Lock Nut', imagePath: '/images/Lock-Nut.jpg' },
        { name: 'Steering Head Nut', imagePath: '/images/Steering-Head-Nut.jpg' },
        { name: 'Fork Bolt', imagePath: '/images/Fork-Bolt.jpg' },
        { name: 'Banjo Bolt M12', imagePath: '/images/Banjo-Bolt-M12.jpg' }
      ]
    },
    {
      id: 2,
      title: 'Pistons & Hydraulic Components',
      description: 'Precision-engineered pistons and hydraulic parts for optimal fluid control and pressure management.',
      slug: 'pistons-hydraulic-components',
      products: [
        { name: 'Primary Piston', imagePath: '/images/Primary-Piston.jpg' },
        { name: 'Rear Piston', imagePath: '/images/Rear-Piston.jpg' },
        { name: 'De-compression FCU', imagePath: '/images/De-compression-FCU.jpg' },
        { name: 'Oil Lock Coller K60', imagePath: '/images/Oil-Lock-Coller-K60.jpg' },
        { name: 'Oil Lock Coller', imagePath: '/images/Oil-Lock-Coller.jpg' }
      ]
    },
    {
      id: 3,
      title: 'Shafts & Rotational Components',
      description: 'High-strength rotational components manufactured to ensure reliable power transmission.',
      slug: 'shafts-rotational-components',
      products: [
        { name: 'Spline Gear Shaft', imagePath: '/images/Spline-Gear-Shaft.jpg' },
        { name: 'Pin Sector 10x64', imagePath: '/images/Pin-Sector-10x64.jpg' },
        { name: 'Rotor Shaft Alternator', imagePath: '/images/Rotor-Shaft-Alternator.jpg' },
        { name: 'Pin Gear Shift 28G20', imagePath: '/images/Pin-Gear-Shift-28G20.jpg' }
      ]
    },
    {
      id: 4,
      title: 'Bushings & Collars',
      description: 'Durable bushings and collars designed for reduced friction and extended component life.',
      slug: 'bushings-collars',
      products: [
        { name: 'Bush Pinion', imagePath: '/images/Bush-Pinion.jpg' },
        { name: 'Coller 9MM', imagePath: '/images/Coller.jpg' },
        { name: 'Coller Shift', imagePath: '/images/Coller-Shift.jpg' },
        { name: 'Coller Wheel Side', imagePath: '/images/Coller-Wheel-Side.jpg' }
      ]
    },
    {
      id: 5,
      title: 'Adapters & Connectors',
      description: 'Specialized connectors that ensure proper integration between various automotive systems.',
      slug: 'adapters-connectors',
      products: [
        { name: 'Upper Case', imagePath: '/images/Upper-Case.jpg' },
        { name: 'Inner Pole', imagePath: '/images/Inner-Pole.jpg' },
        { name: 'Plug', imagePath: '/images/Plug.jpg' },
        { name: 'Adjecting Pin', imagePath: '/images/Adjecting-Pin.JPG' }
      ]
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Products</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We specialize in manufacturing high-quality machined and forged components for the automotive industry.
          </p>
        </div>
        
        <div className="flex flex-nowrap overflow-x-auto pb-6 space-x-6 snap-x">
          {productCategories.map((category) => (
            <div key={category.id} className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/5 snap-start">
              <ProductCarousel
                categoryTitle={category.title}
                categoryDescription={category.description}
                productImages={category.products}
                categorySlug={category.slug}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="default" size="lg" onClick={() => window.location.href = "/products"}>
            View All Products
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Products;