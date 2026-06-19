import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

/**
 * Premium corporate footer with structured link columns and fine-print.
 */
export const CorporateFooter: React.FC = () => (
  <footer className="bg-charcoal text-white pt-12 pb-6">
    <motion.div
      className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <h4 className="font-semibold mb-4">Solutions & Products</h4>
        <ul className="space-y-2 text-sm">
          <li><Link href="#products">Knitted Elastics</Link></li>
          <li><Link href="#products">Woven Webbing</Link></li>
          <li><Link href="#products">Jacquard Elastics</Link></li>
          <li><Link href="#products">Custom Engineering</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Manufacturing & Quality</h4>
        <ul className="space-y-2 text-sm">
          <li><Link href="#manufacturing">Facilities</Link></li>
          <li><Link href="#trust">Certifications</Link></li>
          <li><Link href="#process">Process</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Corporate Profile</h4>
        <ul className="space-y-2 text-sm">
          <li><Link href="#about">Heritage</Link></li>
          <li><Link href="#industries">Industries</Link></li>
          <li><Link href="#trust">Partners</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Partners & Supply Chain</h4>
        <ul className="space-y-2 text-sm">
          <li><Link href="#trust">Enterprise Partners</Link></li>
          <li><Link href="#process">Logistics</Link></li>
        </ul>
      </div>
    </motion.div>
    <div className="border-t border-gray-700 mt-8 pt-4 text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-6">
      <span>© 2026 R.S Enterprise. All rights reserved.</span>
      <div className="flex space-x-4 mt-2 md:mt-0">
        <Link href="/privacy" className="hover:underline">Privacy</Link>
        <span className="hidden md:inline">|</span>
        <Link href="/terms" className="hover:underline">Terms</Link>
        <span className="hidden md:inline">|</span>
        <span>India / English</span>
      </div>
    </div>
  </footer>
);
