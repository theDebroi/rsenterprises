"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineData = [
  {
    year: "2006",
    title: "The Beginning",
    description: "Started as a trading business specializing in premium elastic tapes for the footwear industry."
  },
  {
    year: "2008",
    title: "First Manufacturing Unit",
    description: "Established our first in-house production facility with two weaving machines for webbing tapes."
  },
  {
    year: "2012",
    title: "Industry Recognition",
    description: "Expanded our product portfolio and became a trusted supplier to leading footwear manufacturers through innovative designs and consistent quality."
  },
  {
    year: "2015",
    title: "Elastic Manufacturing",
    description: "Started manufacturing elastic tapes, strengthening our capabilities in narrow woven products."
  },
  {
    year: "2020",
    title: "Production Expansion",
    description: "Expanded manufacturing capacity to produce a comprehensive range of elastic tapes for diverse industrial applications."
  },
  {
    year: "2024",
    title: "Innovation Milestone",
    description: "Became one of the first manufacturers in North India to produce elastic tapes up to 400 mm width."
  },
  {
    year: "2025",
    title: "A New Chapter",
    description: "Expanded into our second manufacturing unit, strengthening our production capabilities with 45+ advanced machines dedicated to manufacturing premium elastic tapes, webbing tapes, and shoe laces."
  }
];

export default function CompanyTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section 
      ref={sectionRef} 
      id="timeline" 
      className="relative bg-[#F5F5F7] text-[#080808] py-32 premium-padding-container overflow-hidden border-b border-black/5"
    >
      <div className="w-full flex flex-col items-center">
        
        {/* Header - Centered with spacing */}
        <div className="w-full text-center mb-32">
          <p className="text-[#C86B32] tracking-[0.4em] uppercase text-xs mb-8 font-bold">
            Our Journey
          </p>
          <h2 className="font-fjalla font-bold text-5xl md:text-8xl uppercase leading-none tracking-tight">
            Company Timeline
          </h2>
        </div>

        {/* Timeline container */}
        <div className="relative w-full">
          
          {/* Base Background Line */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 -bottom-0 w-[2px] bg-black/10" />
          
          {/* Animated Scroll Progress Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 w-[2px] bg-[#C86B32] origin-top"
          />

          <div className="space-y-12 md:space-y-0">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative min-h-[280px] flex items-center pl-12 md:pl-0 ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Circle Dot Indicator */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#C86B32] z-20 shadow-sm" />

                  {/* Card wrapper */}
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.7 }}
                    className="w-full md:w-[42%] md:px-8 flex flex-col items-center text-center"
                  >
                    {/* Enlarged background year */}
                    <span className="font-fjalla text-7xl md:text-8xl font-black tracking-[-0.08em] text-[#C86B32]/10 block leading-none select-none">
                      {item.year}
                    </span>

                    {/* Title overlapping slightly */}
                    <h3 className="font-fjalla text-2xl md:text-3xl uppercase font-bold tracking-tight text-[#080808] mt-[-15px] md:mt-[-20px] mb-4">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base leading-relaxed text-black/50">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
