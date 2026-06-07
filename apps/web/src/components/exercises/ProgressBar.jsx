
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const ProgressBar = ({ progress = 0, className, barClassName, showLabel = false }) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));
  
  return (
    <div className={cn("w-full flex items-center gap-3", className)}>
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${clampedProgress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={cn("h-full bg-primary rounded-full", barClassName)}
        />
      </div>
      {showLabel && (
        <span className="text-xs font-medium text-muted-foreground tabular-nums shrink-0">
          {Math.round(clampedProgress)}%
        </span>
      )}
    </div>
  );
};

export default ProgressBar;
