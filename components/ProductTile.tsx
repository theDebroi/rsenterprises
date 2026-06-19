import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProductTileProps {
  title: string;
  description: string;
  imageUrl: string;
}

/**
 * Expansive rectangular tile with subtle parallax hover zoom.
 */
export const ProductTile: React.FC<ProductTileProps> = ({ title, description, imageUrl }) => (
  <motion.div
    className="relative h-96 overflow-hidden rounded-lg shadow-lg border border-gray-200 bg-white cursor-pointer"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    style={{ perspective: '1000px' }}
  >
    <motion.div
      className="absolute inset-0"
      whileHover={{ scale: 1.08, rotate: 0.5 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <Image src={imageUrl} alt={title} fill style={{ objectFit: 'cover' }} />
    </motion.div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
    <div className="absolute bottom-4 left-4 text-white">
      <h3 className="text-xl font-serif italic">{title}</h3>
      <p className="text-sm mt-1 max-w-xs">{description}</p>
    </div>
  </motion.div>
);
