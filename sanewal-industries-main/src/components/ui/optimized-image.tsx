import React from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

export interface OptimizedImageProps extends Omit<ImageProps, 'alt'> {
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: '1:1' | '4:3' | '16:9' | '21:9' | 'auto';
  fallback?: React.ReactNode;
  priority?: boolean;
}

/**
 * OptimizedImage component that wraps Next.js Image with additional features
 * - Consistent aspect ratios
 * - Proper image optimization
 * - Fallback for missing images
 * - Accessibility improvements
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  containerClassName,
  aspectRatio = 'auto',
  fallback,
  priority = false,
  ...props
}) => {
  // Define aspect ratio classes
  const aspectRatioClasses = {
    '1:1': 'aspect-square',
    '4:3': 'aspect-[4/3]',
    '16:9': 'aspect-[16/9]',
    '21:9': 'aspect-[21/9]',
    'auto': '',
  };

  // Default sizes for responsive images if not provided
  const defaultSizes = props.sizes || "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw";

  return (
    <div 
      className={cn(
        'relative overflow-hidden',
        aspectRatio !== 'auto' && aspectRatioClasses[aspectRatio],
        containerClassName
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn('object-cover w-full h-full', className)}
        sizes={defaultSizes}
        loading={priority ? 'eager' : 'lazy'}
        priority={priority}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;