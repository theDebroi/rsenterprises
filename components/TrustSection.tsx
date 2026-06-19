import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';

/**
 * Trust / Clients / QA section – metrics and certifications.
 */
export const TrustSection: React.FC = () => {
  const metrics = [
    { value: '500+', label: 'Enterprise Partners Across Global Spaces' },
    { value: 'Millions', label: 'Meters Delivered Unconditionally' },
  ];

  const certifications = [
    { src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/ISO_9001-2015_logo.svg', alt: 'ISO 9001:2015' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Oeko-Tex_Standard_100_logo.svg', alt: 'OEKO‑TX' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/CE_Mark.svg', alt: 'CE Certification' },
  ];

  return (
    <SectionWrapper id="trust" className="py-24 bg-gray-50">
      <motion.h2
        className="text-center text-3xl md:text-4xl font-serif italic text-charcoal mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        Zero‑Defect Policy & Global Trust
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto items-center">
        {/* Metrics */}
        <div className="grid gap-8">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-5xl font-bold text-charcoal">{m.value}</p>
              <p className="text-base text-charcoal mt-2">{m.label}</p>
            </div>
          ))}
        </div>
        {/* Certifications */}
        <div className="flex flex-col items-center space-y-6">
          {certifications.map((c) => (
            <Image key={c.alt} src={c.src} alt={c.alt} width={120} height={80} className="object-contain" />
          ))}
        </div>
      </div>
      <motion.p
        className="mt-12 text-center text-lg text-charcoal"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {'Our commitment is absolute – every meter of elastic we ship meets rigorous performance standards, backed by ISO certification and the confidence of a half‑thousand enterprise partners.'}
      </motion.p>
    </SectionWrapper>
  );
};
