"use client";

import React from "react";
import { motion } from "framer-motion";
import CertificationCard from "../CertificationCard";
import { Award, CheckCircle, Shield, Calendar } from "lucide-react";

export default function QualityCertifications() {
  const reports = [
    {
      title: "Elastic Tape Test Report",
      badge: "TÜV SÜD Certified",
      product: "Shoe Elastic",
      material: "80% Polyester Yarn, 20% Latex Rubber",
      testingDate: "May 2026",
      status: "All Tests Passed",
      pdfPath: "/reports/Elastic-Test-Report.pdf",
      badges: [
        "Heavy Metal Safe",
        "Formaldehyde Tested",
        "PAHs Compliant",
        "AZO Dye Safe",
        "Chemical Safety Verified",
      ],
    },
    {
      title: "Webbing Tape Test Report",
      badge: "TÜV SÜD Certified",
      product: "Webbing / Niwar Tape",
      material: "Polyester Yarn",
      application: "Shoe Accessories",
      testingDate: "May 2026",
      status: "All Tests Passed",
      pdfPath: "/reports/Webbing-Test-Report.pdf",
      badges: [
        "DMFu Tested",
        "Banned Amines Safe",
        "Organotin Tested",
        "Quinoline Passed",
        "Global Compliance",
      ],
    },
  ];

  const stats = [
    {
      value: "25+",
      label: "Quality Parameters Tested",
      icon: <Shield className="w-5 h-5 text-[#C86B32]" />,
    },
    {
      value: "100%",
      label: "Reports Passed",
      icon: <CheckCircle className="w-5 h-5 text-[#C86B32]" />,
    },
    {
      value: "TÜV SÜD",
      label: "Certified Testing",
      icon: <Award className="w-5 h-5 text-[#C86B32]" />,
    },
    {
      value: "2026",
      label: "Latest Compliance",
      icon: <Calendar className="w-5 h-5 text-[#C86B32]" />,
    },
  ];

  return (
    <section
      id="quality-reports"
      className="relative w-full bg-[#F5F5F7] py-24 text-[#080808] overflow-hidden"
    >
      <div className="w-full premium-padding-container mx-auto">
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
              Quality You Can Trust
            </p>
            <span className="h-px w-12 bg-[#C86B32]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-fjalla text-3xl md:text-5xl uppercase leading-tight mb-8 font-bold text-center"
            style={{ textAlign: "center", width: "100%" }}
          >
            Internationally Tested.<br className="hidden sm:inline" /> Globally Accepted.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg leading-relaxed text-black/50 font-medium text-center max-w-[800px] mx-auto"
            style={{ textAlign: "center", maxWidth: "800px" }}
          >
            Our products undergo strict quality and chemical safety testing through TÜV SÜD accredited laboratories, ensuring compliance with global footwear material standards.
          </motion.p>
        </div>

        <div style={{ height: "60px" }} />
        {/* Bottom Statistics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-black/10 pt-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 bg-white/40 backdrop-blur-sm rounded-xl border border-black/[0.04] transition-all duration-300 hover:bg-white hover:shadow-md"
              >
                <div className="mb-4 rounded-full bg-transparent p-3">
                  {stat.icon}
                </div>
                <div className="font-fjalla text-3xl md:text-4xl font-bold text-[#111111] mb-2 uppercase">
                  {stat.value}
                </div>
                <div className="text-xs font-bold tracking-wider text-black/40 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
