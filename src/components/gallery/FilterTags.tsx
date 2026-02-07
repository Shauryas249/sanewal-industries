import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

export interface FilterCategory {
  name: string;
  tags: string[];
}

export interface FilterTagsProps {
  categories: FilterCategory[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  onClearFilters: () => void;
  filterLogic: 'AND' | 'OR';
  onFilterLogicChange: (logic: 'AND' | 'OR') => void;
}

const FilterTags = ({
  categories,
  selectedTags,
  onTagToggle,
  onClearFilters,
  filterLogic,
  onFilterLogicChange,
}: FilterTagsProps) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    categories.map(category => category.name)
  );

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryName)
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  const isCategoryExpanded = (categoryName: string) => {
    return expandedCategories.includes(categoryName);
  };

  return (
    <div className="w-full space-y-6" role="region" aria-label="Image filters">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium">Filter Logic:</span>
          <div className="flex rounded-md overflow-hidden border">
            <Button
              variant={filterLogic === 'AND' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onFilterLogicChange('AND')}
              className="rounded-none border-0"
            >
              AND
            </Button>
            <Button
              variant={filterLogic === 'OR' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onFilterLogicChange('OR')}
              className="rounded-none border-0"
            >
              OR
            </Button>
          </div>
          <span className="text-xs text-muted-foreground ml-2">
            {filterLogic === 'AND' 
              ? 'Images must match ALL selected filters' 
              : 'Images must match ANY selected filter'}
          </span>
        </div>
        
        {selectedTags.length > 0 && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onClearFilters}
            className="flex items-center gap-1"
          >
            <X className="h-3 w-3" />
            Clear Filters ({selectedTags.length})
          </Button>
        )}
      </div>

      {selectedTags.length > 0 && (
        <div className="flex flex-wrap gap-2 py-2">
          <span className="text-sm font-medium mr-2">Active Filters:</span>
          {selectedTags.map(tag => (
            <Badge 
              key={tag} 
              variant="secondary"
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => onTagToggle(tag)}
            >
              {tag}
              <X className="h-3 w-3 ml-1" />
            </Badge>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Collapsible
            key={category.name}
            open={isCategoryExpanded(category.name)}
            onOpenChange={() => toggleCategory(category.name)}
            className="border rounded-md overflow-hidden"
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full flex items-center justify-between p-3 h-auto"
              >
                <span className="font-medium">{category.name}</span>
                {isCategoryExpanded(category.name) ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-3 pt-0">
              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag) => {
                  const isSelected = selectedTags.includes(tag);
                  return (
                    <Badge
                      key={tag}
                      variant={isSelected ? "default" : "outline"}
                      className={`cursor-pointer transition-all ${
                        isSelected ? "bg-primary" : "hover:bg-primary/10"
                      }`}
                      onClick={() => onTagToggle(tag)}
                    >
                      {tag}
                    </Badge>
                  );
                })}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );
};

export default FilterTags;