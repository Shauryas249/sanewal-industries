import React from 'react';
import { render, screen } from '@testing-library/react';
import OptimizedImage from '../optimized-image';

describe('OptimizedImage', () => {
  it('renders with required props', () => {
    render(
      <OptimizedImage
        src="/test-image.jpg"
        alt="Test image"
        width={500}
        height={300}
      />
    );
    
    const image = screen.getByAltText('Test image');
    expect(image).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <OptimizedImage
        src="/test-image.jpg"
        alt="Test image"
        width={500}
        height={300}
        className="custom-class"
      />
    );
    
    const image = screen.getByAltText('Test image');
    expect(image).toHaveClass('custom-class');
  });

  it('applies container className', () => {
    const { container } = render(
      <OptimizedImage
        src="/test-image.jpg"
        alt="Test image"
        width={500}
        height={300}
        containerClassName="container-class"
      />
    );
    
    // The first div should be the container
    const containerDiv = container.firstChild;
    expect(containerDiv).toHaveClass('container-class');
  });

  it('applies correct aspect ratio class', () => {
    const { container } = render(
      <OptimizedImage
        src="/test-image.jpg"
        alt="Test image"
        width={500}
        height={300}
        aspectRatio="16:9"
      />
    );
    
    // The first div should be the container
    const containerDiv = container.firstChild;
    expect(containerDiv).toHaveClass('aspect-[16/9]');
  });

  it('sets priority loading when specified', () => {
    render(
      <OptimizedImage
        src="/test-image.jpg"
        alt="Test image"
        width={500}
        height={300}
        priority={true}
      />
    );
    
    const image = screen.getByAltText('Test image');
    expect(image).toHaveAttribute('loading', 'eager');
  });
});