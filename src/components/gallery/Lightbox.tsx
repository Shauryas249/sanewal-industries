import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
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

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
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

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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
        <div className="relative w-full h-full flex flex-col">
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
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="max-h-[85vh] w-auto object-contain"
                priority
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

          {/* Caption */}
          {image.alt && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/80 text-center">
              <p className="text-sm">{image.alt}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Lightbox;