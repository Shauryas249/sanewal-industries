import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  name: string;
  description: string;
  imagePath?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, imagePath }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        {imagePath ? (
          <img 
            src={imagePath} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">[Product Image]</span>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;