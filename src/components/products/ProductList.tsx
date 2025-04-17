import React from 'react';
import { Check } from 'lucide-react';

interface ProductListProps {
  items: string[];
}

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;