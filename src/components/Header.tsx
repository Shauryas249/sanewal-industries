import { useRouter } from 'next/router';
import { useState } from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    return router.pathname === path ? "text-primary font-semibold" : "hover:text-primary transition-colors";
  };

  const productCategories = [
    { name: "Fasteners & Connectors", path: "/products/fasteners-connectors" },
    { name: "Pistons & Hydraulic Components", path: "/products/pistons-hydraulic-components" },
    { name: "Shafts & Rotational Components", path: "/products/shafts-rotational-components" },
    { name: "Bushings & Collars", path: "/products/bushings-collars" },
    { name: "Adapters & Connectors", path: "/products/adapters-connectors" },
    { name: "Precision Machined Parts", path: "/products/precision-machined-parts" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex justify-between items-center py-4">
        <div className="cursor-pointer" onClick={() => router.push("/")}>
          <Logo />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className={`text-sm font-medium ${isActive('/')}`}>Home</a>
          <a href="/about" className={`text-sm font-medium ${isActive('/about')}`}>About Us</a>
          
          {/* Products Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-primary transition-colors focus:outline-none">
              <span className={isActive('/products')}>Products</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem onClick={() => router.push("/products")}>
                All Products
              </DropdownMenuItem>
              {productCategories.map((category, index) => (
                <DropdownMenuItem key={index} onClick={() => router.push(category.path)}>
                  {category.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <a href="/manufacturing" className={`text-sm font-medium ${isActive('/manufacturing')}`}>Manufacturing</a>
          <a href="/quality" className={`text-sm font-medium ${isActive('/quality')}`}>Quality</a>
          <a href="/gallery" className={`text-sm font-medium ${isActive('/gallery')}`}>Gallery</a>
          <a href="/data" className={`text-sm font-medium ${isActive('/data')}`}>Data</a>
          <a href="/ethics-compliance" className={`text-sm font-medium ${isActive('/ethics-compliance')}`}>Ethics & Compliance</a>
          <Button variant="outline" size="sm" onClick={() => router.push("/contact")}>
            Contact Us
          </Button>
        </nav>
        
        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center py-4 border-b">
                <Logo />
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              
              <nav className="flex flex-col space-y-4 mt-8">
                <a 
                  href="/" 
                  className={`flex items-center py-2 px-4 rounded-md ${isActive('/') ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="/about" 
                  className={`flex items-center py-2 px-4 rounded-md ${isActive('/about') ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </a>
                
                {/* Mobile Products Dropdown */}
                <div className="flex flex-col">
                  <a 
                    href="/products" 
                    className={`flex items-center justify-between py-2 px-4 rounded-md ${isActive('/products') ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>Products</span>
                    <ChevronRight className="h-4 w-4" />
                  </a>
                  <div className="ml-4 mt-2 border-l pl-4 space-y-2">
                    {productCategories.map((category, index) => (
                      <a 
                        key={index} 
                        href={category.path} 
                        className="flex items-center py-2 px-4 rounded-md hover:bg-muted"
                        onClick={() => setIsOpen(false)}
                      >
                        {category.name}
                      </a>
                    ))}
                  </div>
                </div>
                
                <a 
                  href="/manufacturing" 
                  className={`flex items-center py-2 px-4 rounded-md ${isActive('/manufacturing') ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                  onClick={() => setIsOpen(false)}
                >
                  Manufacturing
                </a>
                <a 
                  href="/quality" 
                  className={`flex items-center py-2 px-4 rounded-md ${isActive('/quality') ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                  onClick={() => setIsOpen(false)}
                >
                  Quality
                </a>
                <a 
                  href="/gallery" 
                  className={`flex items-center py-2 px-4 rounded-md ${isActive('/gallery') ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                  onClick={() => setIsOpen(false)}
                >
                  Gallery
                </a>
                <a 
                  href="/data" 
                  className={`flex items-center py-2 px-4 rounded-md ${isActive('/data') ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                  onClick={() => setIsOpen(false)}
                >
                  Data
                </a>
                <a 
                  href="/ethics-compliance" 
                  className={`flex items-center py-2 px-4 rounded-md ${isActive('/ethics-compliance') ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                  onClick={() => setIsOpen(false)}
                >
                  Ethics & Compliance
                </a>
              </nav>
              
              <div className="mt-auto pb-8">
                <Button 
                  className="w-full" 
                  onClick={() => {
                    router.push("/contact");
                    setIsOpen(false);
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;