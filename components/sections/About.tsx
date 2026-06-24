"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#F5F5F7] text-[#080808] overflow-hidden py-28"
    >
      {/* MAIN */}
      <div
        className="
          w-full
          premium-padding-container
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          lg:gap-20
          items-center
        "
      >
        {/* IMAGE */}
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              relative
              w-full
              aspect-square
              overflow-hidden
              
              shadow-2xl
            "
          >
            <Image
              src="/factory.jpg"
              alt="RS Enterprise Factory"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#C86B32]/10" />
          </motion.div>
        </div>

        {/* TEXT */}
        <div
          className="
            relative
            flex
            justify-start
            items-center
          "
        >
          {/* CENTER DIVIDER */}
          <div className="hidden lg:block absolute -left-10 top-[15%] h-[70%] w-px bg-black/15" />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-[720px]"
          >
            <p
              className="
                mb-10
                text-base
                md:text-lg
                font-bold
                uppercase
                tracking-[0.55em]
                text-[#C86B32]
              "
            >
              Our Legacy
            </p>

            <h1
              className="
                font-fjalla
                text-5xl
                md:text-6xl
                xl:text-7xl
                uppercase
                leading-[1.12]
                font-bold
              "
            >
              18 Years Of
              <br />
              Textile
              <br />
              Excellence
            </h1>
            <div style={{ height: "40px" }} />

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-8
                text-black/55
              "
            >
              Since 2006, R.S Enterprise has been crafting premium elastic tapes
              and woven webbing solutions. From a small manufacturing unit to
              advanced industrial production, our journey represents precision,
              technology and trust.
            </p>
            <div style={{ height: "40px" }} />

            <Link
              href="/#manufacturing"
              className="
                mt-12
                flex
                w-[310px]
                h-[100px]
                items-center
                justify-center
                bg-[#C86B32]
                text-white
                uppercase
                tracking-[0.35em]
                text-base
                hover:bg-black
                transition-all
                duration-500
                shadow-xl
                shadow-[#C86B32]/20
              "
            >
              Explore Journey →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}