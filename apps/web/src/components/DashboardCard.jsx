
import React from 'react';
import { cn } from '@/lib/utils';

const DashboardCard = ({ icon: Icon, title, value, trend, trendLabel, className }) => {
  const isPositive = trend && trend > 0;
  
  return (
    <div className={cn(
      'bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-200',
      className
    )}>
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        {trend !== undefined && (
          <div className={cn(
            'flex items-center gap-1 text-sm font-medium',
            isPositive ? 'text-green-600' : 'text-red-600'
          )}>
            <span>{isPositive ? '↑' : '↓'}</span>
            <span>{Math.abs(trend)}%</span>
          </div>
        )}
      </div>
      
      <div>
        <p className="text-sm text-muted-foreground mb-1">{title}</p>
        <p className="text-3xl font-bold text-foreground">{value}</p>
        {trendLabel && (
          <p className="text-xs text-muted-foreground mt-2">{trendLabel}</p>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
