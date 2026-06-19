"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/sections/Contact";

function ContactPageContent() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product");

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#111111] flex flex-col font-['Marcellus',serif]">
      <Navbar />

      {/* Spacer to push all content cleanly below the fixed 96px navbar */}
      <div className="h-[96px] w-full" />

      {/* Main Content Container (Pushed below navbar, uses standard maximum width) */}
      <main className="flex-grow px-6 md:px-12 lg:px-24 py-12 max-w-[1200px] mx-auto w-full space-y-8">
        
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 mb-6 uppercase tracking-[0.2em] text-[10px] text-neutral-400 font-sans">
          <Link href="/" className="hover:text-[#C86B32] transition duration-300">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#C86B32]">Contact</span>
        </div>

        {/* HERO TITLE BLOCK (Proportional font size) */}
        <div className="border-b border-neutral-200 pb-8">
          <p className="text-[#C86B32] uppercase tracking-[0.35em] text-[10px] font-bold mb-3 font-sans">
            Get In Touch
          </p>
          <h1 className="font-['Rowdies',sans-serif] text-3xl md:text-5xl uppercase leading-tight tracking-tight mb-4 text-neutral-900">
            Start a Project
          </h1>
          <p className="text-xs md:text-sm leading-relaxed text-neutral-600 max-w-xl">
            Partner with R.S Enterprise for premium elastic tapes, webbing solutions, and custom large-scale B2B textile manufacturing.
          </p>
        </div>

        {/* SELECTED PRODUCT PREFILL NOTICE (Square layout) */}
        {product && (
          <div className="bg-white p-5 border border-neutral-200 rounded-none flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="uppercase tracking-[0.2em] text-[9px] font-bold text-neutral-400 font-sans">
              Selected Product Inquiry
            </span>
            <span className="font-['Rowdies',sans-serif] text-lg md:text-xl uppercase text-[#C86B32]">
              {decodeURIComponent(product)}
            </span>
          </div>
        )}

        {/* CONTACT SECTION FORM */}
        <div id="contact-form">
          <ContactCTA defaultProduct={product || undefined} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#faf9f6] flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-[#C86B32] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ContactPageContent />
    </Suspense>
  );
}