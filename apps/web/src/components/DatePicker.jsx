
import React from 'react';
import { cn } from '@/lib/utils';

const DatePicker = React.forwardRef(({ 
  label,
  error,
  className,
  ...props 
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-foreground mb-1.5">
          {label}
        </label>
      )}
      <input
        ref={ref}
        type="date"
        className={cn(
          'flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0',
          'disabled:cursor-not-allowed disabled:opacity-50',
          '[color-scheme:light] dark:[color-scheme:dark]',
          error && 'border-destructive focus-visible:ring-destructive',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1.5 text-sm text-destructive">{error}</p>
      )}
    </div>
  );
});

DatePicker.displayName = 'DatePicker';

export default DatePicker;
