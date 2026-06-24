"use client";

import React from "react";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="bg-[#faf9f6] text-[#111111] font-sans min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className="pt-[160px] pb-24 premium-padding-container flex-1 max-w-[1000px] mx-auto w-full">
        <Link href="/" className="inline-flex items-center gap-2 text-neutral-500 hover:text-[#C86B32] transition font-bold uppercase tracking-wider text-xs mb-8">
          <ArrowLeft size={14} /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-neutral-600 leading-relaxed border-t border-black/10 pt-8">
          <p>Last updated: June 2026</p>
          <p>
            At RS Enterprises, we value the confidentiality of corporate and user communications. This policy governs how we collect, store, and utilize data when you request quotes, download catalogs, or contact our engineering units.
          </p>
          <h2 className="text-xl font-bold uppercase tracking-wide text-[#111111] mt-8">Information Collection</h2>
          <p>
            We collect contact info, corporate details, and technical product requirements solely to prepare and furnish custom product quotes. We do not sell or lease communications profiles to third-party marketing services.
          </p>
          <h2 className="text-xl font-bold uppercase tracking-wide text-[#111111] mt-8">Data Protection</h2>
          <p>
            All quote submissions, catalog downloads, and custom requests are secured with standard encryption tools. Only authorized client-success personnel have clearance to review technical fabric parameters.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
