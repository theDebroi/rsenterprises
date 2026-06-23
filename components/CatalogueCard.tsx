"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Download, Eye } from "lucide-react";

interface CatalogueCardProps {
  category: string;
  title: string;
  description: string;
  pdfPath: string;
}

export default function CatalogueCard({
  category,
  title,
  description,
  pdfPath,
}: CatalogueCardProps) {
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
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-black/10 bg-gradient-to-b from-white to-black/[0.01] shadow-sm transition-all duration-300 hover:shadow-xl hover:border-black/20"
      style={{ padding: "2.5rem" }}
    >
      {/* Dynamic top bar reveal */}
      <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#C86B32] transition-all duration-500 group-hover:w-full" />

      <div className="w-full" style={{ width: "100%" }}>
        {/* Category Label and Icon */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C86B32] bg-[#C86B32]/10 px-2.5 py-1 rounded">
            {category}
          </span>
          <div className="text-black/30 group-hover:text-[#C86B32] transition-colors duration-300">
            <BookOpen size={24} strokeWidth={1.5} />
          </div>
        </div>

        {/* Title */}
        <div className="w-full flex items-center justify-center text-center mb-3" style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <h3 className="font-sans text-xl font-bold tracking-tight text-[#111111] group-hover:text-[#C86B32] transition-colors duration-300 text-center" style={{ textAlign: "center" }}>
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-black/50 mb-8 font-medium text-center" style={{ textAlign: "center" }}>
          {description}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3 pt-4 w-full" style={{ width: "100%" }}>
        <button
          onClick={handleView}
          className="w-full flex items-center justify-center gap-2 rounded-none border border-black/15 bg-transparent text-xs font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-black hover:text-white hover:border-black cursor-pointer"
          style={{ width: "100%", height: "64px" }}
        >
          <Eye size={14} />
          View
        </button>
        <a
          href={pdfPath}
          download
          className="w-full flex items-center justify-center gap-2 rounded-none bg-black text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#C86B32] shadow-sm hover:shadow"
          style={{ width: "100%", height: "64px", display: "flex" }}
        >
          <Download size={14} />
          Download
        </a>
      </div>
    </motion.div>
  );
}
