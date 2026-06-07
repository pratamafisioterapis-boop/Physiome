
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const RepetitionMode = ({ currentReps, targetReps, onIncrement }) => {
  const isComplete = currentReps >= targetReps;

  return (
    <div className="flex flex-col items-center justify-center my-8 space-y-8">
      <div className="text-center">
        <motion.div 
          key={currentReps}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-[8rem] leading-none text-timer-display font-extrabold text-white drop-shadow-lg"
        >
          {currentReps}
        </motion.div>
        <div className="text-xl font-medium text-white/70 uppercase tracking-widest mt-2">
          of {targetReps} Reps
        </div>
      </div>

      <Button 
        onClick={onIncrement} 
        disabled={isComplete}
        className={`w-48 h-48 rounded-full shadow-2xl transition-all duration-300 ${
          isComplete 
            ? 'bg-success/50 text-white/50 cursor-not-allowed' 
            : 'bg-[hsl(var(--timer-work))] hover:bg-[hsl(var(--timer-work))]/90 text-[hsl(var(--timer-background))] hover:scale-105 active:scale-95'
        }`}
      >
        <div className="flex flex-col items-center justify-center">
          <Plus className="w-16 h-16 mb-2" />
          <span className="text-2xl font-bold">Log Rep</span>
        </div>
      </Button>
    </div>
  );
};

export default RepetitionMode;
