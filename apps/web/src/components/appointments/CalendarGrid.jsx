
import React from 'react';
import { cn } from '@/lib/utils';

const CalendarGrid = ({ days, children, className }) => {
  return (
    <div className={cn('flex flex-col', className)}>
      <div className="grid grid-cols-7 gap-px bg-border border border-border rounded-t-xl overflow-hidden">
        {days.map((day, i) => (
          <div key={i} className="calendar-day-header">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-grid rounded-t-none border-t-0">
        {children}
      </div>
    </div>
  );
};

export default CalendarGrid;
