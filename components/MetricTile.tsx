import React from 'react';
import { motion } from 'framer-motion';

interface MetricTileProps {
  title: string;
  subtitle: string;
}

/**
 * Tile used in ManufacturingSection to display a metric.
 */
export const MetricTile: React.FC<MetricTileProps> = ({ title, subtitle }) => (
  <motion.div
    className="metric-tile min-w-[280px] p-8 bg-gray-100 rounded-lg flex flex-col items-center justify-center shadow-sm"
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.98 }}
  >
    <p className="text-5xl font-bold text-charcoal mb-2">{title}</p>
    <p className="text-sm text-charcoal text-center">{subtitle}</p>
  </motion.div>
);
