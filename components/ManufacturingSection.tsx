import React, { useEffect, useRef } from 'react';
// // Image import removed (unused)  // removed unused import
import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';
import { MetricTile } from './MetricTile';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Manufacturing Excellence – horizontal scroll showcase.
 */
export const ManufacturingSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = containerRef.current?.querySelectorAll('.metric-tile') as NodeListOf<HTMLElement>;
      if (sections) {
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            end: () => `+=${containerRef.current?.offsetWidth}`,
          },
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="manufacturing" className="overflow-hidden py-24">
      <motion.h2
        className="text-center text-3xl md:text-4xl font-serif italic text-charcoal mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        Manufacturing Excellence
      </motion.h2>
      <div ref={containerRef} className="flex gap-8" style={{ width: 'max-content' }}>
        <MetricTile title="80+" subtitle="High‑Speed Needle Looms" />
        <MetricTile title="100k m/day" subtitle="Scalable Production Throughput" />
        <MetricTile title="ISO 9001:2015" subtitle="Quality Calibration Controls" />
      </div>
    </SectionWrapper>
  );
};
