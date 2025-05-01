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
        { name: 'Stud Hood', imagePath: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/stud-hood-addf197.jpg' },
        { name: 'Lock Nut', imagePath: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/lock-nut-63b57c6.jpg' },
        { name: 'Steering Head Nut', imagePath: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/steering-head-nut-0f81599.jpg' },
        { name: 'Fork Bolt', imagePath: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/fork-bolt-cfbf3a0.jpg' },
        { name: 'Banjo Bolt M12', imagePath: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/banjo-bolt-m12-fe403f2.jpg' }
      ]
    },
    {
      id: 2,
      title: 'Pistons & Hydraulic Components',
      description: 'Precision-engineered pistons and hydraulic parts for optimal fluid control and pressure management.',
      slug: 'pistons-hydraulic-components',
      products: [
        { name: 'Primary Piston', imagePath: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/primary-piston-8615fa2.jpg' },
        { name: 'Rear Piston', imagePath: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/rear-piston-094b9f4.jpg' },
        { name: 'De-compression FCU', imagePath: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/de-compression-fcu-42751cb.jpg' },
        { name: 'Oil Lock Coller K60', imagePath: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/oil-lock-coller-k60-ec0efa4.jpg' },
        { name: 'Oil Lock Coller', imagePath: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/oil-lock-coller-dee7174.jpg' }
      ]
    },
    {
      id: 3,
      title: 'Shafts & Rotational Components',
      description: 'High-strength rotational components manufactured to ensure reliable power transmission.',
      slug: 'shafts-rotational-components',
      products: [
        { name: 'Spline Gear Shaft', imagePath: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/spline-gear-shaft-c36056e.jpg' },
        { name: 'Pin Sector 10x64', imagePath: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/pin-sector-10x64-d67bd4c.jpg' },
        { name: 'Rotor Shaft Alternator', imagePath: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/rotor-shaft-alternator-ac35dfb.jpg' },
        { name: 'Pin Gear Shift 28G20', imagePath: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/pin-gear-shift-28g20-3a852dc.jpg' }
      ]
    },
    {
      id: 4,
      title: 'Bushings & Collars',
      description: 'Durable bushings and collars designed for reduced friction and extended component life.',
      slug: 'bushings-collars',
      products: [
        { name: 'Bush Pinion', imagePath: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/bush-pinion-3c875dc.jpg' },
        { name: 'Coller 9MM', imagePath: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/coller-c5314e2.jpg' },
        { name: 'Coller Shift', imagePath: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/coller-shift-1e3b60e.jpg' },
        { name: 'Coller Wheel Side', imagePath: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/coller-wheel-side-fe351bd.jpg' }
      ]
    },
    {
      id: 5,
      title: 'Adapters & Connectors',
      description: 'Specialized connectors that ensure proper integration between various automotive systems.',
      slug: 'adapters-connectors',
      products: [
        { name: 'Upper Case', imagePath: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/upper-case-55386fb.jpg' },
        { name: 'Inner Pole', imagePath: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/inner-pole-a28eae1.jpg' },
        { name: 'Plug', imagePath: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/plug-5ca7560.jpg' },
        { name: 'Adjecting Pin', imagePath: 'https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/adjecting-pin-e5662cc.JPG' }
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category) => (
            <ProductCarousel
              key={category.id}
              categoryTitle={category.title}
              categoryDescription={category.description}
              productImages={category.products}
              categorySlug={category.slug}
            />
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