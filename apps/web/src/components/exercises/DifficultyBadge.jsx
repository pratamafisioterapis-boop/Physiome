
import React from 'react';
import { cn } from '@/lib/utils';

const DifficultyBadge = ({ level, className }) => {
  const getStyles = () => {
    switch (level?.toLowerCase()) {
      case 'beginner':
        return 'bg-[hsl(var(--success)/0.15)] text-[hsl(var(--success))] border-[hsl(var(--success)/0.3)]';
      case 'intermediate':
        return 'bg-[hsl(var(--warning)/0.15)] text-[hsl(var(--warning))] border-[hsl(var(--warning)/0.3)]';
      case 'advanced':
        return 'bg-[hsl(var(--destructive)/0.15)] text-[hsl(var(--destructive))] border-[hsl(var(--destructive)/0.3)]';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <span className={cn('inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border', getStyles(), className)}>
      {level || 'Unknown'}
    </span>
  );
};

export default DifficultyBadge;
