import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

/**
 * Wraps a section with centered layout and Framer Motion reveal.
 */
export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = '', id }) => (
  <motion.section
    id={id}
    className={`max-w-5xl mx-auto px-6 py-20 md:py-32 ${className}`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    {children}
  </motion.section>
);
