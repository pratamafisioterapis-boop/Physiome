
import React from 'react';
import { cn } from '@/lib/utils';

const TimeSlot = ({ time, children, onClick, className }) => {
  return (
    <div 
      className={cn('time-slot flex', className)}
      onClick={onClick}
    >
      <div className="w-16 shrink-0 text-xs text-muted-foreground text-right pr-2 py-1 border-r border-border/50">
        {time}
      </div>
      <div className="flex-1 relative">
        {children}
      </div>
    </div>
  );
};

export default TimeSlot;
