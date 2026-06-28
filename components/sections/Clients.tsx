"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  { name: "Geox", logo: "/clients/geox.png" },
  { name: "Hush Puppies", logo: "/clients/hushpuppies.png" },
  { name: "Rieker", logo: "/clients/rieker.png" },
  { name: "Joseph Seibel", logo: "/clients/josef.png" },
  { name: "Bata", logo: "/clients/bata.png" },
  { name: "Clarks", logo: "/clients/clarks.png" },
  { name: "Bugatti", logo: "/clients/Bugatti.png" },
  { name: "Red Tape", logo: "/clients/redtape.png" },
  { name: "US Polo", logo: "/clients/uspolo.png" },
  { name: "Barbour", logo: "/clients/barbour.png" },
];

export default function ClientsSection() {
  return (
    <section
      id="clients"
      className="
        relative
        w-full
        min-h-screen
        bg-white
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >
      <div
        className="
          w-full
          max-w-7xl
          px-6
          flex
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-5 mb-8"
        >
          <span className="w-16 h-px bg-[#C86B32]" />

          <p className="text-xs uppercase tracking-[0.45em] font-semibold text-[#C86B32]">
            Global Partnerships
          </p>

          <span className="w-16 h-px bg-[#C86B32]" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            font-fjalla
            text-4xl
            md:text-6xl
            uppercase
            leading-none
            font-bold
          "
        >
          Trusted By
          <br />
          Global Footwear Brands
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="
            mt-8
            max-w-2xl
            text-lg
            leading-8
            text-black/50
          "
        >
          For over two decades, our premium elastic tapes and webbings have
          been trusted by leading international footwear manufacturers,
          delivering consistent quality, precision, and reliability.
        </motion.p>

        {/* Space */}
        <div className="h-32 md:h-40" />

        {/* Marquee */}
        <div className="relative w-full overflow-hidden py-8">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 z-20 h-full w-40 bg-gradient-to-r from-white to-transparent" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 z-20 h-full w-40 bg-gradient-to-l from-white to-transparent" />

          <motion.div
            className="flex w-max items-center gap-32"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="
                  flex
                  h-36
                  w-72
                  shrink-0
                  items-center
                  justify-center
                "
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={260}
                  height={120}
                  className="
                    h-20
                    md:h-24
                    w-auto
                    object-contain
                    opacity-80
                    grayscale
                    transition-all
                    duration-300
                    hover:opacity-100
                    hover:grayscale-0
                    hover:scale-110
                  "
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="
            mt-24
            text-sm
            uppercase
            tracking-[0.35em]
            text-black/35
          "
        >
          Proud Manufacturing Partner for International & Domestic Footwear
          Brands
        </motion.p>
      </div>
    </section>
  );
}