
import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const FilterBadge = ({ label, onClear, className }) => {
  return (
    <span className={cn('inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground', className)}>
      {label}
      <button 
        onClick={onClear}
        className="hover:bg-secondary-foreground/10 rounded-full p-0.5 transition-colors focus:outline-none"
        aria-label={`Clear ${label} filter`}
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </span>
  );
};

export default FilterBadge;
