"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Fjalla_One } from "next/font/google";

const fjalla = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
});

const products = [
  {
    name: "Elastic Tape",
    img: "/product1.jpg",
  },
  {
    name: "Webbing Tape",
    img: "/product2.jpg",
  },
  {
    name: "Jacquard Elastic",
    img: "/product3.jpg",
  },
  {
    name: "Custom Solutions",
    img: "/product4.jpg",
  },
];

export default function CatalogSection() {
  return (
    <section className="bg-[#F5F5F7] text-[#080808] px-8 lg:px-20 py-28 overflow-hidden">

      {/* HEADER */}
      <div className="text-center mb-24">

        <p className="text-[#C86B32] text-xs uppercase tracking-[0.45em] mb-6">
          Our Catalogue
        </p>

        <h2
          className={`
            ${fjalla.className}
            text-6xl
            md:text-8xl
            uppercase
            leading-none
          `}
        >
          Engineered
          <br />
          Products
        </h2>

      </div>



      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 border-y border-black/10">

        {products.map((item, index) => (

          <motion.div
            key={item.name}
            initial={{ opacity:0, y:50 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{
              duration:0.8,
              delay:index * 0.15,
            }}
            viewport={{ once:true }}
            className="
              group
              relative
              px-8
              py-16
              border-black/10
              md:border-r
              last:border-r-0
            "
          >

            {/* IMAGE */}
            <div
              className="
                relative
                aspect-square
                overflow-hidden
                bg-zinc-200
                transition-all
                duration-700
                group-hover:-translate-y-8
                group-hover:shadow-2xl
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
                className={`
                  ${fjalla.className}
                  text-4xl
                  uppercase
                `}
              >
                {item.name}
              </h3>


              <button
                className="
                  mt-10
                  w-full
                  h-[80px]
                  border
                  border-black
                  uppercase
                  tracking-[0.3em]
                  text-xs
                  transition
                  duration-500
                  hover:bg-[#C86B32]
                  hover:border-[#C86B32]
                  hover:text-white
                "
              >
                Get Quote
              </button>


            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}