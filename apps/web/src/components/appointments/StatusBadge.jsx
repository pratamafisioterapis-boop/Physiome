
import React from 'react';
import { cn } from '@/lib/utils';

const StatusBadge = ({ status, className }) => {
  const statusStyles = {
    'Scheduled': 'bg-status-scheduled',
    'Confirmed': 'bg-status-confirmed',
    'Completed': 'bg-status-completed',
    'Cancelled': 'bg-status-cancelled'
  };

  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
      statusStyles[status] || 'bg-muted text-muted-foreground border-border',
      className
    )}>
      {status}
    </span>
  );
};

export default StatusBadge;
