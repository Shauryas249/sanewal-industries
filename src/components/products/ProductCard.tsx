import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

interface ProductCardProps {
  name: string;
  description: string;
  imagePath?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, imagePath }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="h-48 bg-gray-100 flex items-center justify-center relative">
        {imagePath ? (
          <div className="relative w-full h-full">
            <img 
              src={imagePath} 
              alt={`${name} - Automotive fastener component by Sanewal Auto Engineers`}
              className="w-full h-full object-contain p-2"
              loading="lazy"
            />
          </div>
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