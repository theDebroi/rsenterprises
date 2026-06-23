"use client";

import React from "react";
import { motion } from "framer-motion";
import CatalogueCard from "../CatalogueCard";

export default function CataloguesSection() {
  const catalogues = [
    {
      category: "Elastic Tapes",
      title: "Elastic Tape Catalogue",
      description: "Explore our wide range of premium elastic tapes designed for footwear applications.",
      pdfPath: "/catalogues/Elastic-Catalogue.pdf",
    },
    {
      category: "Webbing Tapes",
      title: "Webbing Tape Catalogue",
      description: "Discover durable and high quality webbing tapes manufactured with precision.",
      pdfPath: "/catalogues/Webbing-Catalogue.pdf",
    },
    {
      category: "Shoe Laces",
      title: "Shoe Lace Catalogue",
      description: "Browse our collection of premium shoe laces available in multiple designs and specifications.",
      pdfPath: "/catalogues/Shoe-Lace-Catalogue.pdf",
    },
  ];

  return (
    <section
      id="product-catalogues"
      className="relative w-full bg-[#F5F5F7] py-24 text-[#080808] overflow-hidden"
    >
      <div className="w-full premium-padding-container">
        {/* Section Header */}
        <div className="w-full flex flex-col items-center justify-center text-center mb-20 mx-auto" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
            style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}
          >
            <span className="h-px w-12 bg-[#C86B32]" />
            <p className="text-xs tracking-[0.4em] uppercase text-[#C86B32] font-semibold text-center" style={{ textAlign: "center" }}>
              Product Literature
            </p>
            <span className="h-px w-12 bg-[#C86B32]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-fjalla text-3xl md:text-5xl uppercase leading-tight mb-6 font-bold text-center"
            style={{ textAlign: "center", width: "100%" }}
          >
            Explore Our Product Catalogues
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg leading-relaxed text-black/50 font-medium text-center max-w-[800px] mx-auto"
            style={{ textAlign: "center", maxWidth: "800px" }}
          >
            Download detailed catalogues of our premium footwear components.
          </motion.p>
        </div>

        <div style={{ height: "60px" }} />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {catalogues.map((cat, idx) => (
            <CatalogueCard key={idx} {...cat} />
          ))}
        </div>

        <div style={{ height: "60px" }} />
      </div>
    </section>
  );
}
