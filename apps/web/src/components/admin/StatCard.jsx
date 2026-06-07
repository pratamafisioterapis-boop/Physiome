
import React from 'react';
import { cn } from '@/lib/utils';

const StatCard = ({ title, value, icon: Icon, className }) => {
  return (
    <div className={cn("admin-card flex items-center gap-4", className)}>
      {Icon && (
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      )}
      <div>
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <h3 className="text-2xl font-bold text-foreground tracking-tight">{value}</h3>
      </div>
    </div>
  );
};

export default StatCard;
