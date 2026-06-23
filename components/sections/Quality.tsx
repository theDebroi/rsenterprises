"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Eye,
  Download,
  CheckCircle2,
} from "lucide-react";

export default function QualitySection() {
  return (
    <section
      id="quality"
      className="
        relative
        w-full
        min-h-screen
        bg-[#F5F5F7]
        py-28
        text-[#080808]
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}

        className="
          mx-auto
          max-w-[900px]
          px-6
          w-full

          flex
          flex-col
          items-center
          justify-center
          text-center
        "
      >


        {/* LABEL */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-6
            mb-10
            w-full
          "
        >

          <span className="h-px w-24 bg-[#C86B32]" />

          <p
            className="
              text-xs
              tracking-[0.45em]
              uppercase
              text-[#C86B32]
            "
          >
            Quality Assurance
          </p>

          <span className="h-px w-24 bg-[#C86B32]" />

        </div>





        {/* ICON */}

        <ShieldCheck
          size={68}
          strokeWidth={1.2}
          className="
            text-[#C86B32]
            mb-8
          "
        />





        {/* TITLE */}

        <h2
          className="
            font-fjalla
            text-4xl
            md:text-6xl
            uppercase
            leading-none
            font-bold
          "
        >
          ISO 9001:2015
          <br />
          Certified
        </h2>





        {/* TEXT */}

        <p
          className="
            mt-8
            max-w-[700px]

            text-lg
            leading-8
            text-black/50
          "
        >

          Manufacturing high performance elastic tapes and webbings
          with certified quality systems and precision control.

        </p>






        {/* PREMIUM MSME CERTIFICATE CARD */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-black/20 mt-16 w-full max-w-[540px]"
          style={{ padding: "2.5rem" }}
        >
          {/* Decorative top accent line with brand color */}
          <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#C86B32] transition-all duration-500 group-hover:w-full" />

          <div className="w-full text-left" style={{ width: "100%" }}>
            {/* Header */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="relative w-20 h-12 flex items-center justify-center bg-white border border-black/5 rounded p-1 shadow-sm">
                <Image
                  src="/msme-logo.png"
                  alt="MSME Logo"
                  width={50}
                  height={50}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C86B32]/10 px-3 py-1 text-[11px] font-semibold tracking-wider uppercase text-[#C86B32]">
                <ShieldCheck size={12} className="inline" />
                Udyam Registered
              </span>
            </div>

            {/* Title */}
            <div className="w-full flex items-center justify-start mb-5" style={{ width: "100%", display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
              <h3 className="font-sans text-xl md:text-2xl font-bold tracking-tight text-[#111111] text-left">
                MSME Registration Certificate
              </h3>
            </div>

            {/* Details Table */}
            <div className="space-y-3 mb-6 text-sm border-b border-black/5 pb-5 w-full">
              <div className="flex justify-between">
                <span className="text-black/40 font-medium">Enterprise Name</span>
                <span className="text-black/80 font-semibold text-right">M/S R. S. Enterprise</span>
              </div>
              <div className="flex justify-between items-start gap-4">
                <span className="text-black/40 font-medium">Registration No.</span>
                <span className="text-black/80 font-semibold text-right">UDYAM-UP-01-0028008</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/40 font-medium">Enterprise Type</span>
                <span className="text-black/80 font-semibold text-right">Micro Enterprise</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/40 font-medium">Sector / Activity</span>
                <span className="text-black/80 font-semibold text-right">Manufacturing (Elastic & Webbings)</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-black/40 font-medium">Status</span>
                <span className="inline-flex items-center gap-1 text-[12px] font-bold text-emerald-600 uppercase bg-emerald-50 px-2 py-0.5 rounded">
                  <CheckCircle2 size={12} className="stroke-[2.5]" />
                  Verified & Active
                </span>
              </div>
            </div>

            {/* Mini details/accreditations */}
            <div className="mb-8">
              <p className="text-[10px] tracking-wider uppercase text-black/30 font-semibold mb-3">Accreditations & Government Standards</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center text-[10px] font-bold text-black/60 bg-black/[0.04] px-2.5 py-1 rounded transition-colors hover:bg-black/[0.08]">
                  ✓ Govt. of India Registered
                </span>
                <span className="inline-flex items-center text-[10px] font-bold text-black/60 bg-black/[0.04] px-2.5 py-1 rounded transition-colors hover:bg-black/[0.08]">
                  ✓ Ministry of MSME Compliant
                </span>
                <span className="inline-flex items-center text-[10px] font-bold text-black/60 bg-black/[0.04] px-2.5 py-1 rounded transition-colors hover:bg-black/[0.08]">
                  ✓ ISO 9001:2015 Standards
                </span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 pt-4 w-full" style={{ width: "100%" }}>
            <a
              href="/tests/MSME%20Certificate%20RS.pdf"
              target="_blank"
              className="w-full flex items-center justify-center gap-2 rounded-none border border-black/15 bg-transparent text-xs font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-black hover:text-white hover:border-black cursor-pointer"
              style={{ width: "100%", height: "54px", display: "flex" }}
            >
              <Eye size={14} />
              View Certificate
            </a>
            <a
              href="/tests/MSME%20Certificate%20RS.pdf"
              download="MSME-Certificate-RS.pdf"
              className="w-full flex items-center justify-center gap-2 rounded-none bg-[#C86B32] text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#A95523] shadow-sm hover:shadow"
              style={{ width: "100%", height: "54px", display: "flex" }}
            >
              <Download size={14} />
              Download PDF
            </a>
          </div>
        </motion.div>



      </motion.div>

    </section>
  );
}