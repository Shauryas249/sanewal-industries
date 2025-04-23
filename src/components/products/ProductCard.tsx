import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import OptimizedImage from '@/components/ui/optimized-image';

interface ProductCardProps {
  name: string;
  description: string;
  imagePath?: string;
  href?: string;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  name, 
  description, 
  imagePath,
  href,
  onClick
}) => {
  // Determine if the card is clickable
  const isClickable = !!(href || onClick);
  
  // Wrapper component based on whether the card is clickable
  const CardWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    if (href) {
      return (
        <a 
          href={href} 
          className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
          aria-label={`View ${name}`}
        >
          {children}
        </a>
      );
    }
    
    if (onClick) {
      return (
        <button 
          onClick={onClick} 
          className="block w-full h-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
          aria-label={`View ${name}`}
        >
          {children}
        </button>
      );
    }
    
    return <>{children}</>;
  };

  return (
    <CardWrapper>
      <Card 
        className={`overflow-hidden transition-all hover:shadow-md ${isClickable ? 'transform hover:scale-[1.02]' : ''} duration-300 border border-border/40 h-full`}
      >
        <div className="h-48 bg-muted flex items-center justify-center relative">
          {imagePath ? (
            <OptimizedImage
              src={imagePath}
              alt={`${name} - ${description}`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">[Product Image]</span>
            </div>
          )}
        </div>
        <CardContent className="p-6">
          <h3 className="text-lg font-bold mb-2">{name}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </CardWrapper>
  );
};

export default ProductCard;