"use client";

import React from 'react';
import { AboutSection } from '@/components/AboutSection';
import { ManufacturingSection } from '@/components/ManufacturingSection';
import { ProductsSection } from '@/components/ProductsSection';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { IndustriesGrid } from '@/components/IndustriesGrid';
import { TrustSection } from '@/components/TrustSection';
import { CorporateFooter } from '@/components/CorporateFooter';
import { motion } from 'framer-motion';

/**
 * R.S Enterprise premium corporate profile page.
 */
export default function ProfilePage() {
  return (
    <motion.main
      className="bg-bgOffWhite text-charcoal font-sans overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <AboutSection />
      <ManufacturingSection />
      <ProductsSection />
      <ProcessTimeline />
      <IndustriesGrid />
      <TrustSection />
      <CorporateFooter />
    </motion.main>
  );
}
