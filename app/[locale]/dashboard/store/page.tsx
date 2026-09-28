'use client';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

export default function StorePage() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-24 px-6 text-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <ShoppingBag size={64} className="text-cyan-400" />
      </motion.div>
      <h2 className="text-2xl font-extrabold text-white">Store</h2>
      <p className="text-slate-400">Coming soon — spend your coins on heart refills and power-ups!</p>
    </div>
  );
}
