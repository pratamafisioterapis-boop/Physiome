
import React from 'react';
import { Folder, ChevronRight } from 'lucide-react';

const CategoryTree = ({ categories, onSelect, selectedId }) => {
  return (
    <div className="space-y-1">
      {categories.map(cat => (
        <div 
          key={cat.id}
          onClick={() => onSelect(cat)}
          className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-colors ${selectedId === cat.id ? 'bg-primary/10 text-primary' : 'hover:bg-muted text-foreground'}`}
        >
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <Folder className="w-4 h-4" />
          <span className="text-sm font-medium">{cat.name}</span>
          <span className="ml-auto text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{cat.exercise_count || 0}</span>
        </div>
      ))}
      {categories.length === 0 && (
        <p className="text-sm text-muted-foreground p-4 text-center">No categories found.</p>
      )}
    </div>
  );
};

export default CategoryTree;
