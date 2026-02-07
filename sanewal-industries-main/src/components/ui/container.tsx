import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'default' | 'small' | 'large';
}

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className, 
  size = 'default', 
  ...props 
}) => {
  return (
    <div 
      className={cn(
        "mx-auto px-4 sm:px-6 w-full",
        size === 'small' && 'max-w-4xl',
        size === 'default' && 'max-w-7xl',
        size === 'large' && 'max-w-screen-2xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;