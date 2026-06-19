"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Fjalla_One } from "next/font/google";

const fjalla = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
});

const years = ["2006", "2010", "2015", "2018", "2022", "2026"];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#F5F5F7] text-[#080808] overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] min-h-screen gap-10 lg:gap-20">

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative h-[520px] lg:h-auto overflow-hidden"
        >
          <Image
            src="/factory.jpg"
            alt="RS Enterprise Factory"
            fill
            priority
            sizes="(max-width:768px) 100vw, 48vw"
            className="object-cover grayscale"
          />

          <div className="absolute inset-0 bg-[#C86B32]/10" />
        </motion.div>


        {/* CONTENT SIDE */}
        <div className="relative flex items-center px-8 lg:pl-10 lg:pr-24 py-24">

          {/* CENTER DIVIDER */}
          <div className="hidden lg:block absolute -left-10 top-[22%] h-[55%] w-px bg-black/20" />


          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <p className="mb-8 text-xs font-bold uppercase tracking-[0.45em] text-[#C86B32]">
              Our Legacy
            </p>


            <h1
              className={`
                ${fjalla.className}
                text-6xl
                md:text-8xl
                uppercase
                leading-[1]
              `}
            >
              18 Years Of
              <br />
              Textile
              <br />
              Excellence
            </h1>


            <p className="mt-10 max-w-xl text-lg leading-8 text-black/55">
              Since 2006, R.S Enterprise has been crafting premium
              elastic tapes and woven webbing solutions. From a small
              manufacturing unit to advanced industrial production,
              our journey represents precision, technology and trust.
            </p>


            <button
              className="
                mt-14
    bg-[#C86B32]
    w-[260px]
    h-[90px]
    text-white
    text-sm
    uppercase
    tracking-[0.3em]
    transition-all
    duration-500
    hover:bg-black
    hover:w-[285px]
    shadow-xl
    shadow-[#C86B32]/20
              "
            >
              Explore Journey →
            </button>

          </motion.div>

        </div>

      </div>



      {/* TIMELINE */}

      <div className="border-t border-black/10 px-10 lg:px-20 py-12">

        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <h2
            className={`
              ${fjalla.className}
              text-5xl
              text-[#C86B32]
            `}
          >
            RS
          </h2>


          <div className="hidden md:flex items-center gap-16">

            {years.map((year, index) => (
              <div
                key={year}
                className="relative"
              >

                <p
                  className={`
                    ${fjalla.className}
                    text-3xl
                    ${
                      index === 0
                        ? "text-[#C86B32]"
                        : "text-black/60"
                    }
                  `}
                >
                  {year}
                </p>


                <span className="absolute -left-8 top-1/2 h-px w-4 bg-black/30" />

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}