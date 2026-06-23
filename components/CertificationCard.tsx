"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Download, Eye, CheckCircle2, ShieldCheck } from "lucide-react";

interface CertificationCardProps {
  title: string;
  badge: string;
  product: string;
  material: string;
  application?: string;
  testingDate: string;
  status: string;
  badges: string[];
  pdfPath: string;
}

export default function CertificationCard({
  title,
  badge,
  product,
  material,
  application,
  testingDate,
  status,
  badges,
  pdfPath,
}: CertificationCardProps) {
  const handleView = () => {
    window.open(pdfPath, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-black/20"
      style={{ padding: "2.5rem" }}
    >
      {/* Decorative top accent line with brand color */}
      <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#C86B32] transition-all duration-500 group-hover:w-full" />

      <div className="w-full" style={{ width: "100%" }}>
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="relative w-20 h-12 flex items-center justify-center bg-white border border-black/5 rounded p-1 shadow-sm">
            <img src="/TUV-SUD.png" alt="TÜV SÜD Logo" className="max-h-full max-w-full object-contain" />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C86B32]/10 px-3 py-1 text-[11px] font-semibold tracking-wider uppercase text-[#C86B32]">
            <ShieldCheck size={12} className="inline" />
            {badge}
          </span>
        </div>

        {/* Title */}
        <div className="w-full flex items-center justify-center text-center mb-5" style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <h3 className="font-sans text-xl md:text-2xl font-bold tracking-tight text-[#111111] text-center" style={{ textAlign: "center" }}>
            {title}
          </h3>
        </div>

        {/* Details Table */}
        <div className="space-y-3 mb-6 text-sm border-b border-black/5 pb-5">
          <div className="flex justify-between">
            <span className="text-black/40 font-medium">Product</span>
            <span className="text-black/80 font-semibold">{product}</span>
          </div>
          <div className="flex justify-between items-start gap-4">
            <span className="text-black/40 font-medium">Material</span>
            <span className="text-black/80 font-semibold text-right max-w-[180px]">{material}</span>
          </div>
          {application && (
            <div className="flex justify-between">
              <span className="text-black/40 font-medium">Application</span>
              <span className="text-black/80 font-semibold">{application}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-black/40 font-medium">Testing Date</span>
            <span className="text-black/80 font-semibold">{testingDate}</span>
          </div>
          <div className="flex justify-between items-center pt-1">
            <span className="text-black/40 font-medium">Status</span>
            <span className="inline-flex items-center gap-1 text-[12px] font-bold text-emerald-600 uppercase bg-emerald-50 px-2 py-0.5 rounded">
              <CheckCircle2 size={12} className="stroke-[2.5]" />
              {status}
            </span>
          </div>
        </div>

        {/* Mini safety badges */}
        <div className="mb-8">
          <p className="text-[10px] tracking-wider uppercase text-black/30 font-semibold mb-3">Chemical Safety Standards</p>
          <div className="flex flex-wrap gap-2">
            {badges.map((label, idx) => (
              <span
                key={idx}
                className="inline-flex items-center text-[10px] font-bold text-black/60 bg-black/[0.04] px-2.5 py-1 rounded transition-colors hover:bg-black/[0.08]"
              >
                ✓ {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3 pt-4 w-full" style={{ width: "100%" }}>
        <button
          onClick={handleView}
          className="w-full flex items-center justify-center gap-2 rounded-none border border-black/15 bg-transparent text-xs font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-black hover:text-white hover:border-black cursor-pointer"
          style={{ width: "100%", height: "64px" }}
        >
          <Eye size={14} />
          View Report
        </button>
        <a
          href={pdfPath}
          download
          className="w-full flex items-center justify-center gap-2 rounded-none bg-[#C86B32] text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#A95523] shadow-sm hover:shadow"
          style={{ width: "100%", height: "64px", display: "flex" }}
        >
          <Download size={14} />
          Download PDF
        </a>
      </div>
    </motion.div>
  );
}
