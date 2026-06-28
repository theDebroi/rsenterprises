"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function QualitySection() {
  return (
    <section
      id="quality"
      className="
        relative
        w-full
        bg-[#F5F5F7]
        py-16
        md:py-20
        text-[#080808]
        overflow-hidden

        flex
        justify-center
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          w-full
          max-w-[900px]
          px-6

          flex
          flex-col
          items-center
          text-center
        "
      >
        {/* LABEL */}
        <div className="flex items-center justify-center gap-6 mb-10 w-full">
          <span className="h-px w-24 bg-[#C86B32]" />

          <p className="text-xs tracking-[0.45em] uppercase text-[#C86B32]">
            Quality Assurance
          </p>

          <span className="h-px w-24 bg-[#C86B32]" />
        </div>

        {/* ICON */}
        <ShieldCheck
          size={68}
          strokeWidth={1.2}
          className="text-[#C86B32] mb-8"
        />

        {/* TITLE */}
        <h2 className="font-fjalla text-4xl md:text-6xl uppercase leading-none font-bold">
          ISO 9001:2015
          <br />
          Certified
        </h2>

        {/* TEXT */}
        <p className="mt-8 max-w-[700px] text-lg leading-8 text-black/50">
          Manufacturing high performance elastic tapes and webbings with
          certified quality systems and precision control.
        </p>

        {/* Certificate Card */}
      </motion.div>
    </section>
  );
}