import React, { useState, useCallback, useEffect, memo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from './Logo';
import Container from './ui/container';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown, ChevronRight, X, Sun, Moon, Laptop } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useTheme } from '@/contexts/ThemeContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isActive: boolean;
}

// Memoized NavLink component to prevent unnecessary re-renders
const NavLink = memo(({ href, children, className = '', onClick, isActive }: NavLinkProps) => {
  return (
    <Link 
      href={href} 
      className={`text-sm font-medium ${isActive ? 'text-primary font-semibold' : 'hover:text-primary transition-colors'} ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
});

NavLink.displayName = 'NavLink';

// Product categories data
const productCategories = [
  { name: "Fasteners & Connectors", path: "/products/fasteners-connectors" },
  { name: "Pistons & Hydraulic Components", path: "/products/pistons-hydraulic-components" },
  { name: "Shafts & Rotational Components", path: "/products/shafts-rotational-components" },
  { name: "Bushings & Collars", path: "/products/bushings-collars" },
  { name: "Adapters & Connectors", path: "/products/adapters-connectors" },
  { name: "Precision Machined Parts", path: "/products/precision-machined-parts" },
];

const Header: React.FC = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Check if the current path matches the given path
  const isActive = useCallback((path: string) => {
    return router.pathname === path || router.pathname.startsWith(`${path}/`);
  }, [router.pathname]);

  // Handle scroll events to add shadow to header when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  return (
    <header 
      className={`w-full sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b transition-shadow ${
        scrolled ? 'shadow-sm' : ''
      }`}
      role="banner"
    >
      <Container className="flex justify-between items-center py-3">
        <Link href="/" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md" aria-label="Sanewal Auto Engineers - Home">
          <Logo />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6" aria-label="Main Navigation">
          <NavLink href="/" isActive={isActive('/')}>Home</NavLink>
          <NavLink href="/about" isActive={isActive('/about')}>About Us</NavLink>
          
          {/* Products Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger 
              className={`flex items-center text-sm font-medium hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md ${
                isActive('/products') ? 'text-primary font-semibold' : ''
              }`}
              aria-label="Products menu"
            >
              <span>Products</span>
              <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem asChild>
                <Link href="/products">All Products</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {productCategories.map((category, index) => (
                <DropdownMenuItem key={index} asChild>
                  <Link href={category.path}>{category.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <NavLink href="/manufacturing" isActive={isActive('/manufacturing')}>Manufacturing</NavLink>
          <NavLink href="/quality" isActive={isActive('/quality')}>Quality</NavLink>
          <NavLink href="/gallery" isActive={isActive('/gallery')}>Gallery</NavLink>
          <NavLink href="/data" isActive={isActive('/data')}>Data</NavLink>
          <NavLink href="/ethics-compliance" isActive={isActive('/ethics-compliance')}>Ethics & Compliance</NavLink>
          
          <Button 
            variant="outline" 
            size="sm" 
            asChild
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
          
          {/* Theme Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Change theme">
                {theme === 'dark' ? (
                  <Moon className="h-5 w-5" />
                ) : theme === 'light' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Laptop className="h-5 w-5" />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Theme</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setTheme('light')}>
                <Sun className="mr-2 h-4 w-4" />
                <span>Light</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                <Laptop className="mr-2 h-4 w-4" />
                <span>System</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="flex items-center space-x-2 md:hidden">
          {/* Theme Switcher for Mobile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Change theme">
                {theme === 'dark' ? (
                  <Moon className="h-5 w-5" />
                ) : theme === 'light' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Laptop className="h-5 w-5" />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Theme</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setTheme('light')}>
                <Sun className="mr-2 h-4 w-4" />
                <span>Light</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                <Laptop className="mr-2 h-4 w-4" />
                <span>System</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label={isOpen ? "Close menu" : "Open menu"}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-6 border-b">
                  <Logo />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <ScrollArea className="flex-1 h-[calc(100vh-140px)]">
                  <nav className="flex flex-col p-6" aria-label="Mobile Navigation">
                    <Link 
                      href="/" 
                      className={`flex items-center py-3 px-4 rounded-md ${isActive('/') ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                    >
                      Home
                    </Link>
                    <Link 
                      href="/about" 
                      className={`flex items-center py-3 px-4 rounded-md ${isActive('/about') ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                    >
                      About Us
                    </Link>
                    
                    {/* Mobile Products Dropdown - Accordion */}
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="products" className="border-none">
                        <AccordionTrigger 
                          className={`py-3 px-4 rounded-md ${isActive('/products') ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                        >
                          Products
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="ml-4 border-l pl-4 space-y-1">
                            <Link 
                              href="/products" 
                              className="flex items-center py-2 px-4 rounded-md hover:bg-muted"
                            >
                              All Products
                            </Link>
                            {productCategories.map((category, index) => (
                              <Link 
                                key={index} 
                                href={category.path} 
                                className="flex items-center py-2 px-4 rounded-md hover:bg-muted"
                              >
                                {category.name}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    
                    <Link 
                      href="/manufacturing" 
                      className={`flex items-center py-3 px-4 rounded-md ${isActive('/manufacturing') ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                    >
                      Manufacturing
                    </Link>
                    <Link 
                      href="/quality" 
                      className={`flex items-center py-3 px-4 rounded-md ${isActive('/quality') ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                    >
                      Quality
                    </Link>
                    <Link 
                      href="/gallery" 
                      className={`flex items-center py-3 px-4 rounded-md ${isActive('/gallery') ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                    >
                      Gallery
                    </Link>
                    <Link 
                      href="/data" 
                      className={`flex items-center py-3 px-4 rounded-md ${isActive('/data') ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                    >
                      Data
                    </Link>
                    <Link 
                      href="/ethics-compliance" 
                      className={`flex items-center py-3 px-4 rounded-md ${isActive('/ethics-compliance') ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                    >
                      Ethics & Compliance
                    </Link>
                  </nav>
                </ScrollArea>
                
                <div className="p-6 border-t">
                  <Button 
                    className="w-full" 
                    asChild
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
};

export default memo(Header);