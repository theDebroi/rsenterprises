import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';
import { ScaleIcon, StarIcon, GlobeAltIcon, ShieldCheckIcon, HeartIcon } from '@heroicons/react/24/outline';

/**
 * Industries Served – minimalist icon grid.
 */
export const IndustriesGrid: React.FC = () => {
  const industries = [
    { name: 'Fashion & Intimate Apparel', Icon: ScaleIcon },
    { name: 'High‑Performance Sportswear', Icon: StarIcon },
    { name: 'Medical Grade Compression', Icon: HeartIcon },
    { name: 'Tactical / Defense', Icon: ShieldCheckIcon },
    { name: 'Industrial Logistics', Icon: GlobeAltIcon },
  ];

  return (
    <SectionWrapper id="industries" className="py-24">
      <motion.h2
        className="text-center text-3xl md:text-4xl font-serif italic text-charcoal mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        Industries Served
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto">
        {industries.map((item) => (
          <motion.div
            key={item.name}
            className="flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <item.Icon className="h-12 w-12 text-amberCopper mb-4" />
            <p className="text-base text-charcoal font-medium">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
