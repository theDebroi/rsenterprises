"use client";

import React from "react";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="bg-[#faf9f6] text-[#111111] font-sans min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className="pt-[160px] pb-24 premium-padding-container flex-1 max-w-[1000px] mx-auto w-full">
        <Link href="/" className="inline-flex items-center gap-2 text-neutral-500 hover:text-[#C86B32] transition font-bold uppercase tracking-wider text-xs mb-8">
          <ArrowLeft size={14} /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
          Terms of Service
        </h1>
        <div className="space-y-6 text-neutral-600 leading-relaxed border-t border-black/10 pt-8">
          <p>Last updated: June 2026</p>
          <p>
            Welcome to the RS Enterprises digital portal. By viewing our narrow fabric manufacturing catalogs, submitting quote requests, or accessing our facility maps, you agree to comply with the terms set forth herein.
          </p>
          <h2 className="text-xl font-bold uppercase tracking-wide text-[#111111] mt-8">Intellectual Property</h2>
          <p>
            All custom patterns, jacquard logos, textile specifications, and engineering drafts showcased on this portal are the proprietary property of RS Enterprises or our licensed partners. Unauthorized reproduction is strictly prohibited.
          </p>
          <h2 className="text-xl font-bold uppercase tracking-wide text-[#111111] mt-8">Quote Specifications</h2>
          <p>
            Product quote estimates and custom engineering solutions provided via this site are provisional guidelines. Binding technical specs are subject to final contract review and material stress lab results.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
