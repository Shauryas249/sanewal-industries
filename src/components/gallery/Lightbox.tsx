import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { GalleryImage } from './Gallery';

interface LightboxProps {
  image: GalleryImage;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  totalImages: number;
  currentIndex: number;
}

const Lightbox = ({
  image,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  totalImages,
  currentIndex
}: LightboxProps) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Reset zoom and position when image changes
  useEffect(() => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, [image]);

  // Handle keyboard navigation and trap focus
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          onPrevious();
          break;
        case 'ArrowRight':
          onNext();
          break;
        case 'Escape':
          onClose();
          break;
        case '+':
          handleZoomIn();
          break;
        case '-':
          handleZoomOut();
          break;
        default:
          break;
      }
    };

    // Save the previously focused element
    const previouslyFocused = document.activeElement as HTMLElement;

    // Focus trap management
    const handleFocusTrap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      
      // Get all focusable elements in the lightbox
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
      
      // If shift+tab and on first element, move to last element
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
      
      // If tab and on last element, move to first element
      else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keydown', handleFocusTrap);
    
    // Focus the first button in the lightbox
    const firstButton = document.querySelector('.lightbox-container button') as HTMLElement;
    if (firstButton) {
      setTimeout(() => firstButton.focus(), 100);
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keydown', handleFocusTrap);
      
      // Restore focus when lightbox closes
      if (previouslyFocused) {
        setTimeout(() => previouslyFocused.focus(), 100);
      }
    };
  }, [isOpen, onNext, onPrevious, onClose]);

  const handleZoomIn = () => {
    if (zoom < 3) {
      setZoom(prev => prev + 0.5);
    }
  };

  const handleZoomOut = () => {
    if (zoom > 1) {
      setZoom(prev => prev - 0.5);
      // Reset position if zooming out to 1
      if (zoom - 0.5 <= 1) {
        setPosition({ x: 0, y: 0 });
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-[95vw] max-h-[95vh] p-0 bg-background/95 backdrop-blur-sm"
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="relative w-full h-full flex flex-col lightbox-container">
          {/* Toolbar */}
          <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-4 bg-background/80">
            <div className="text-sm text-muted-foreground">
              {currentIndex + 1} / {totalImages}
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={handleZoomOut} disabled={zoom <= 1}>
                <ZoomOut className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleZoomIn} disabled={zoom >= 3}>
                <ZoomIn className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Image container */}
          <div 
            className="flex-1 overflow-hidden flex items-center justify-center"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            style={{ cursor: zoom > 1 ? 'grab' : 'default' }}
          >
            <div 
              className="relative transition-transform duration-200 ease-out"
              style={{ 
                transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                cursor: isDragging ? 'grabbing' : 'grab'
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="max-h-[85vh] w-auto object-contain"
                loading="eager"
              />
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-12 w-12 rounded-full bg-background/50 hover:bg-background/80 ml-2"
              onClick={(e) => {
                e.stopPropagation();
                onPrevious();
              }}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-12 w-12 rounded-full bg-background/50 hover:bg-background/80 mr-2"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>

          {/* Caption and metadata */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/80">
            {image.title && <h3 className="text-lg font-medium">{image.title}</h3>}
            {image.description && <p className="text-sm mb-2">{image.description}</p>}
            {image.alt && <p className="text-sm text-muted-foreground">{image.alt}</p>}
            
            {image.tags && image.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {image.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Lightbox;