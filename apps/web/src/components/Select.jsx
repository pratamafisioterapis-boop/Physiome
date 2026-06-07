
import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const Select = React.forwardRef(({ 
  label,
  error,
  className,
  options = [],
  ...props 
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-foreground mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            'flex h-10 w-full appearance-none rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground transition-colors',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-destructive focus-visible:ring-destructive',
            className
          )}
          {...props}
        >
          <option value="" disabled hidden>Select an option</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-destructive">{error}</p>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
