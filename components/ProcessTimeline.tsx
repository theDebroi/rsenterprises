import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';

/**
 * Process Timeline – blueprint styled vertical steps.
 */
export const ProcessTimeline: React.FC = () => {
  const steps = [
    { id: '01', title: 'Yarn Sourcing & Calibration', description: 'Precision‑selected fibers calibrated for tensile strength.' },
    { id: '02', title: 'High‑Density Precision Weaving', description: 'Automated looms weave with micron‑level accuracy.' },
    { id: '03', title: 'Tension & Quality Stress Testing', description: 'Micro‑vibration sensors validate elasticity.' },
    { id: '04', title: 'Automated Strategic Logistics & Packaging', description: 'AI‑driven routing ensures on‑time delivery.' },
  ];

  return (
    <SectionWrapper id="process" className="py-24">
      <motion.h2
        className="text-center text-3xl md:text-4xl font-serif italic text-charcoal mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        Our Technical Blueprint
      </motion.h2>
      <div className="relative max-w-3xl mx-auto grid grid-cols-1 gap-12">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="relative pl-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Counter circle */}
            <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-charcoal text-white flex items-center justify-center font-mono text-sm">
              {step.id}
            </div>
            {/* Dashed connector */}
            {index < steps.length - 1 && (
              <div className="absolute left-4 top-10 w-px h-12 bg-charcoal" style={{ borderLeft: '2px dashed #1d1d1f' }} />
            )}
            <h3 className="text-xl font-bold text-charcoal mb-2">{step.title}</h3>
            <p className="text-base text-charcoal leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
