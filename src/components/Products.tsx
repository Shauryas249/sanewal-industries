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
        { name: 'Stud Hood', imagePath: '/images/stud-hood.jpg' },
        { name: 'Lock Nut', imagePath: '/images/lock-nut.jpg' },
        { name: 'Steering Head Nut', imagePath: '/images/steering-head-nut.jpg' },
        { name: 'Fork Bolt', imagePath: '/images/fork-bolt.jpg' },
        { name: 'Banjo Bolt M12', imagePath: '/images/banjo-bolt-m12.jpg' }
      ]
    },
    {
      id: 2,
      title: 'Pistons & Hydraulic Components',
      description: 'Precision-engineered pistons and hydraulic parts for optimal fluid control and pressure management.',
      slug: 'pistons-hydraulic-components',
      products: [
        { name: 'Primary Piston', imagePath: '/images/primary-piston.jpg' },
        { name: 'Rear Piston', imagePath: '/images/rear-piston.jpg' },
        { name: 'De-compression FCU', imagePath: '/images/de-compression-fcu.jpg' },
        { name: 'Oil Lock Coller K60', imagePath: '/images/oil-lock-coller-k60.jpg' },
        { name: 'Oil Lock Coller', imagePath: '/images/oil-lock-coller.jpg' }
      ]
    },
    {
      id: 3,
      title: 'Shafts & Rotational Components',
      description: 'High-strength rotational components manufactured to ensure reliable power transmission.',
      slug: 'shafts-rotational-components',
      products: [
        { name: 'Spline Gear Shaft', imagePath: '/images/spline-gear-shaft.jpg' },
        { name: 'Pin Sector 10x64', imagePath: '/images/pin-sector-10x64.jpg' },
        { name: 'Rotor Shaft Alternator', imagePath: '/images/rotor-shaft-alternator.jpg' },
        { name: 'Pin Gear Shift 28G20', imagePath: '/images/pin-gear-shift-28g20.jpg' }
      ]
    },
    {
      id: 4,
      title: 'Bushings & Collars',
      description: 'Durable bushings and collars designed for reduced friction and extended component life.',
      slug: 'bushings-collars',
      products: [
        { name: 'Bush Pinion', imagePath: '/images/bush-pinion.jpg' },
        { name: 'Coller 9MM', imagePath: '/images/coller.jpg' },
        { name: 'Coller Shift', imagePath: '/images/coller-shift.jpg' },
        { name: 'Coller Wheel Side', imagePath: '/images/coller-wheel-side.jpg' }
      ]
    },
    {
      id: 5,
      title: 'Adapters & Connectors',
      description: 'Specialized connectors that ensure proper integration between various automotive systems.',
      slug: 'adapters-connectors',
      products: [
        { name: 'Upper Case', imagePath: '/images/upper-case.jpg' },
        { name: 'Inner Pole', imagePath: '/images/inner-pole.jpg' },
        { name: 'Plug', imagePath: '/images/plug.jpg' },
        { name: 'Adjecting Pin', imagePath: '/images/adjecting-pin.jpg' }
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