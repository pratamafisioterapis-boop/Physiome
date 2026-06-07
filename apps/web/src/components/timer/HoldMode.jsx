
import React from 'react';
import { motion } from 'framer-motion';

const HoldMode = ({ remainingTime, totalTime, stage }) => {
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const progress = totalTime > 0 ? (totalTime - remainingTime) / totalTime : 0;
  const dashoffset = circumference - progress * circumference;

  return (
    <div className="relative flex items-center justify-center my-8">
      {/* Background Circle */}
      <svg className="w-72 h-72 transform -rotate-90">
        <circle
          cx="144"
          cy="144"
          r={radius}
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          className="text-white/10"
        />
        {/* Progress Circle */}
        <motion.circle
          cx="144"
          cy="144"
          r={radius}
          stroke="currentColor"
          strokeWidth="12"
          fill="transparent"
          strokeDasharray={circumference}
          animate={{ strokeDashoffset: dashoffset }}
          transition={{ duration: 1, ease: "linear" }}
          className={stage === 'PREPARE' ? 'text-orange-400' : stage === 'WORK' ? 'text-[hsl(var(--timer-work))]' : 'text-[hsl(var(--timer-rest))]'}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-7xl text-timer-display text-white drop-shadow-lg font-extrabold">{remainingTime}</span>
        <span className="text-sm font-medium text-white/70 uppercase tracking-widest mt-1">
          {stage === 'WORK' ? 'Hold' : 'Secs'}
        </span>
      </div>
    </div>
  );
};

export default HoldMode;
