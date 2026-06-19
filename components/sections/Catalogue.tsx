"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    name: "Elastic Tape",
    img: "/Product1.png",
    slug: "elastic-tape"
  },
  {
    name: "Webbing Tape",
    img: "/product2.png",
    slug: "webbing-tape"
  },
  {
    name: "Jacquard Elastic",
    img: "/product3.png",
    slug: "jacquard-elastic"
  },
  {
    name: "Custom Solutions",
    img: "/product4.png",
    slug: "custom-solutions"
  },
];

export default function CatalogSection() {
  return (
    <section id="catalogue" className="bg-[#F5F5F7] text-[#080808] px-8 lg:px-20 py-28 overflow-hidden">

      {/* HEADER */}
      <div className="text-center mb-24">

        <p className="text-[#C86B32] text-xs uppercase tracking-[0.45em] mb-6">
          Our Catalogue
        </p>

        <h2
          className="
            font-fjalla
            text-6xl
            md:text-8xl
            uppercase
            leading-none
          "
        >
          Engineered
          <br />
          Products
        </h2>

      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 border-y border-black/10">

        {products.map((item, index) => {
          const waMessage = `Hello R.S Enterprise, I am interested in obtaining a quote for ${item.name}.`;
          const waUrl = `https://wa.me/919837050515?text=${encodeURIComponent(waMessage)}`;

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
                group
                relative
                px-8
                py-16
                border-black/10
                md:border-r
                last:border-r-0
                flex flex-col justify-between
              "
            >
              <div>
                {/* IMAGE */}
                <div
                  className="
                    relative
                    aspect-square
                    overflow-hidden
                    bg-zinc-200
                    transition-all
                    duration-700
                    group-hover:-translate-y-4
                    group-hover:shadow-xl
                  "
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes="25vw"
                    className="
                      object-cover
                      grayscale
                      transition-all
                      duration-700
                      group-hover:scale-110
                      group-hover:grayscale-0
                    "
                  />
                </div>

                {/* TEXT */}
                <div className="mt-10 text-center">
                  <h3
                    className="
                      font-fjalla
                      text-4xl
                      uppercase
                    "
                  >
                    {item.name}
                  </h3>
                </div>
              </div>

              {/* CTAS */}
              <div className="mt-10">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full
                    h-[56px]
                    bg-[#C86B32]
                    text-white
                    uppercase
                    tracking-[0.2em]
                    text-[10px]
                    font-bold
                    flex items-center justify-center
                    transition
                    duration-500
                    hover:bg-black
                  "
                >
                  WhatsApp Inquiry
                </a>
              </div>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}