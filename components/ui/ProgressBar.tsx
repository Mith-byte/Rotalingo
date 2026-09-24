'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number; // 0 to 1
  className?: string;
}

export default function ProgressBar({ progress, className = '' }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(1, progress));

  return (
    <div className={`relative h-3 bg-slate-800 rounded-full overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full"
        style={{
          background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
        }}
        initial={{ width: 0 }}
        animate={{ width: `${clamped * 100}%` }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
      {/* Shine overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-full" />
    </div>
  );
}
