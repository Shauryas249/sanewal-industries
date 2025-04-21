import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { Settings, Hammer, Car, Wrench, Package } from 'lucide-react';
import Container from '../ui/container';

interface ProductItem {
  name: string;
  description: string;
  imagePath?: string;
  category: string;
}

const ProductCategories: React.FC = () => {
  // State to track the active category and animation key
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [animationKey, setAnimationKey] = useState<number>(0);

  // All products with category information
  const allProducts: ProductItem[] = [
    // Fasteners & Connectors
    {
      name: "Stud Hood",
      description: "High-strength stud for hood mounting and secure fastening",
      imagePath: "https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/stud-hood-addf197.jpg",
      category: "fasteners"
    },
    {
      name: "Lock Nut",
      description: "Self-locking nut designed to prevent loosening under vibration",
      imagePath: "https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/lock-nut-63b57c6.jpg",
      category: "fasteners"
    },
    {
      name: "Steering Head Nut",
      description: "Specialized nut for steering column assembly and adjustment",
      imagePath: "https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/steering-head-nut-0f81599.jpg",
      category: "fasteners"
    },
    {
      name: "Fork Bolt",
      description: "High-strength bolt for suspension fork assembly",
      imagePath: "https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/fork-bolt-cfbf3a0.jpg",
      category: "fasteners"
    },
    {
      name: "Banjo Bolt M12",
      description: "Hollow bolt designed for fluid passage in brake and fuel systems",
      imagePath: "https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/banjo-bolt-m12-fe403f2.jpg",
      category: "fasteners"
    },
    {
      name: "Banjo Bolt M22",
      description: "Heavy-duty hollow bolt for high-pressure fluid systems",
      imagePath: "https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/banjo-bolt-m22-db254d4.jpg",
      category: "fasteners"
    },

    // Pistons & Hydraulic Components
    {
      name: "Primary Piston",
      description: "High-performance piston for primary hydraulic systems",
      imagePath: "https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/primary-piston-8615fa2.jpg",
      category: "pistons"
    },
    {
      name: "Rear Piston",
      description: "Specialized piston for rear brake or hydraulic applications",
      imagePath: "https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/rear-piston-094b9f4.jpg",
      category: "pistons"
    },
    {
      name: "De-compression FCU",
      description: "Engine decompression mechanism for fluid control units",
      imagePath: "https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/de-compression-fcu-42751cb.jpg",
      category: "pistons"
    },
    {
      name: "Oil Lock Coller K60",
      description: "Specialized collar for oil sealing in hydraulic systems",
      imagePath: "https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/oil-lock-coller-k60-ec0efa4.jpg",
      category: "pistons"
    },
    {
      name: "Oil Lock Coller",
      description: "Standard oil lock collar for hydraulic applications",
      imagePath: "https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/oil-lock-coller-dee7174.jpg",
      category: "pistons"
    },

    // Shafts & Rotational Components
    {
      name: "Spline Gear Shaft",
      description: "Specialized shaft with spline profile for power transmission",
      imagePath: "https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/spline-gear-shaft-c36056e.jpg",
      category: "shafts"
    },
    {
      name: "Pin Sector 10x64",
      description: "Precision pin for sector gear applications",
      imagePath: "https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/pin-sector-10x64-d67bd4c.jpg",
      category: "shafts"
    },
    {
      name: "Rotor Shaft Alternator",
      description: "Precision-machined shaft for optimal alternator performance",
      imagePath: "https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/rotor-shaft-alternator-ac35dfb.jpg",
      category: "shafts"
    },
    {
      name: "Pin Gear Shift 28G20",
      description: "Specialized pin for gear shift mechanisms",
      imagePath: "https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/pin-gear-shift-28g20-3a852dc.jpg",
      category: "shafts"
    },

    // Bushings & Collars
    {
      name: "Bush Pinion",
      description: "Specialized bushing for pinion gear applications",
      imagePath: "https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/bush-pinion-3c875dc.jpg",
      category: "bushings"
    },
    {
      name: "Coller 9MM",
      description: "Standard 9mm collar for various applications",
      imagePath: "https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/coller-c5314e2.jpg",
      category: "bushings"
    },
    {
      name: "Coller Shift",
      description: "Specialized collar for shift mechanisms",
      imagePath: "https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/coller-shift-1e3b60e.jpg",
      category: "bushings"
    },
    {
      name: "Coller Wheel Side",
      description: "Wheel-side collar for automotive applications",
      imagePath: "https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/coller-wheel-side-fe351bd.jpg",
      category: "bushings"
    },

    // Adapters & Connectors
    {
      name: "Upper Case",
      description: "Precision-engineered housing for automotive components",
      imagePath: "https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/upper-case-55386fb.jpg",
      category: "adapters"
    },
    {
      name: "Inner Pole",
      description: "Specialized connector for electrical components",
      imagePath: "https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/inner-pole-a28eae1.jpg",
      category: "adapters"
    },
    {
      name: "Plug",
      description: "Sealing plug for fluid systems",
      imagePath: "https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/plug-5ca7560.jpg",
      category: "adapters"
    },
    {
      name: "Adjecting Pin",
      description: "Precision-engineered pin for accurate adjustments and alignments",
      imagePath: "https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/adjecting-pin-e5662cc.JPG",
      category: "adapters"
    },

    // Precision Machined Parts
    {
      name: "Pole Shoe 1.5 HP",
      description: "Specialized component for electric motor applications",
      imagePath: "https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/pole-shoe-1.5-hp-54076a8.jpg",
      category: "precision"
    }
  ];

  // Category metadata for titles and descriptions
  const categoryInfo = {
    all: {
      title: "All Products",
      description: "Browse our complete range of high-quality automotive components."
    },
    fasteners: {
      title: "Fasteners & Connectors",
      description: "Essential fastening components designed for secure connections in automotive applications."
    },
    pistons: {
      title: "Pistons & Hydraulic Components",
      description: "Precision-engineered pistons and hydraulic parts for optimal fluid control and pressure management."
    },
    shafts: {
      title: "Shafts & Rotational Components",
      description: "High-strength rotational components manufactured to ensure reliable power transmission."
    },
    bushings: {
      title: "Bushings & Collars",
      description: "Durable bushings and collars designed for reduced friction and extended component life."
    },
    adapters: {
      title: "Adapters & Connectors",
      description: "Specialized connectors that ensure proper integration between various automotive systems."
    },
    precision: {
      title: "Precision Machined Parts",
      description: "Custom machined components manufactured with tight tolerances and superior finish."
    }
  };

  // Filter products based on active category
  const filteredProducts = activeCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === activeCategory);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    if (category !== activeCategory) {
      setActiveCategory(category);
      setAnimationKey(prevKey => prevKey + 1); // Increment key to trigger animation reset
      
      // Update URL without page navigation
      const url = new URL(window.location.href);
      if (category === 'all') {
        url.searchParams.delete('category');
      } else {
        url.searchParams.set('category', category);
      }
      window.history.pushState({}, '', url.toString());
    }
  };

  // Function to get category from URL
  const getCategoryFromUrl = () => {
    const url = new URL(window.location.href);
    const categoryParam = url.searchParams.get('category');
    return categoryParam && Object.keys(categoryInfo).includes(categoryParam) 
      ? categoryParam 
      : 'all';
  };

  // Check URL for category parameter on initial load
  useEffect(() => {
    const category = getCategoryFromUrl();
    setActiveCategory(category);
  }, []);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const category = getCategoryFromUrl();
      setActiveCategory(category);
      setAnimationKey(prevKey => prevKey + 1);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <section className="py-24">
      <Container>
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
            className={`cursor-pointer hover:border-primary transition-colors ${activeCategory === 'fasteners' ? 'border-primary bg-primary/5' : ''}`}
            onClick={() => handleCategoryChange('fasteners')}
          >
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <Hammer className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-medium">Fasteners & Connectors</h3>
            </CardContent>
          </Card>
          
          <Card 
            className={`cursor-pointer hover:border-primary transition-colors ${activeCategory === 'pistons' ? 'border-primary bg-primary/5' : ''}`}
            onClick={() => handleCategoryChange('pistons')}
          >
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <Car className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-medium">Pistons & Hydraulic</h3>
            </CardContent>
          </Card>
          
          <Card 
            className={`cursor-pointer hover:border-primary transition-colors ${activeCategory === 'shafts' ? 'border-primary bg-primary/5' : ''}`}
            onClick={() => handleCategoryChange('shafts')}
          >
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <Settings className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-medium">Shafts & Rotational</h3>
            </CardContent>
          </Card>
          
          <Card 
            className={`cursor-pointer hover:border-primary transition-colors ${activeCategory === 'bushings' ? 'border-primary bg-primary/5' : ''}`}
            onClick={() => handleCategoryChange('bushings')}
          >
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <Wrench className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-medium">Bushings & Collars</h3>
            </CardContent>
          </Card>
          
          <Card 
            className={`cursor-pointer hover:border-primary transition-colors ${activeCategory === 'adapters' ? 'border-primary bg-primary/5' : ''}`}
            onClick={() => handleCategoryChange('adapters')}
          >
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <Car className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-medium">Adapters & Connectors</h3>
            </CardContent>
          </Card>
          
          <Card 
            className={`cursor-pointer hover:border-primary transition-colors ${activeCategory === 'precision' ? 'border-primary bg-primary/5' : ''}`}
            onClick={() => handleCategoryChange('precision')}
          >
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <Settings className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-medium">Precision Machined</h3>
            </CardContent>
          </Card>
        </div>
        
        {/* Tabs for category filtering */}
        <Tabs value={activeCategory} onValueChange={handleCategoryChange} className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="fasteners">Fasteners</TabsTrigger>
            <TabsTrigger value="pistons">Pistons</TabsTrigger>
            <TabsTrigger value="shafts">Shafts</TabsTrigger>
            <TabsTrigger value="bushings">Bushings</TabsTrigger>
            <TabsTrigger value="adapters">Adapters</TabsTrigger>
            <TabsTrigger value="precision">Precision</TabsTrigger>
          </TabsList>
          
          {/* Product display section with fade animation - key forces re-render and animation restart */}
          <div key={animationKey} className="mt-6 transition-all duration-500 animate-fadeIn">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">{categoryInfo[activeCategory as keyof typeof categoryInfo].title}</h3>
              <p className="text-muted-foreground mb-6">
                {categoryInfo[activeCategory as keyof typeof categoryInfo].description}
              </p>
              
              {/* Card Grid Layout for filtered products with staggered animation */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {filteredProducts.map((item, index) => (
                  <div 
                    key={index} 
                    className="animate-fadeIn" 
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <ProductCard 
                      name={item.name}
                      description={item.description}
                      imagePath={item.imagePath}
                    />
                  </div>
                ))}
              </div>
              
              {/* Show "View All" button only when a specific category is selected */}
              {activeCategory !== 'all' && (
                <div className="flex justify-center mt-8">
                  <Button variant="outline" onClick={() => handleCategoryChange('all')}>
                    View All Products
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Tabs>
      </Container>
    </section>
  );
};

export default ProductCategories;