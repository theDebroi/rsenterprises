"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  {
    value: "35+",
    text: "Advanced Machines",
  },
  {
    value: "100K+",
    text: "Meters Daily Capacity",
  },
  {
    value: "18+",
    text: "Years Experience",
  },
];


export default function ManufacturingSection() {
  return (
    <section
      id="manufacturing"
      className="
        w-full
        min-h-screen
        bg-[#F5F5F7]
        text-[#080808]
        overflow-hidden
      "
    >


      {/* HEADING */}

      <div
        className="
          w-full
          text-center
          pt-32
          pb-20
        "
      >

        <p
          className="
            text-[#C86B32]
            uppercase
            tracking-[0.45em]
            text-xs
            mb-6
          "
        >
          Infrastructure
        </p>


        <h2
          className="
            font-fjalla
            text-3xl
            md:text-5xl
            uppercase
            leading-none
            font-bold
          "
        >
          Precision
          <br />
          Manufacturing
        </h2>


      </div>

      <div style={{ height: "60px" }} />




      {/* FACTORY PHOTO WITH EDGE PADDING */}
      <div className="w-full premium-padding-container">
        <motion.div
          initial={{
            opacity:0,
            y:60,
          }}
          whileInView={{
            opacity:1,
            y:0,
          }}
          transition={{
            duration:1,
          }}
          viewport={{
            once:true,
          }}
          className="
            relative
            w-full
            h-[300px]
            md:h-[650px]
            overflow-hidden
            shadow-lg
          "
        >
          <Image
            src="/factory.jpg"
            alt="Manufacturing"
            fill
            sizes="(max-width: 1024px) 100vw, 85vw"
            className="object-cover"
          />
          <div
            className="
              absolute
              inset-0
              bg-[#C86B32]/10
            "
          />
        </motion.div>
      </div>






      {/* STATS */}

      <div style={{ height: "50px" }} />
      <div
        className="
          w-full
          px-10
          py-20
          font-bold

          grid
          grid-cols-1
          md:grid-cols-3
          gap-10
        "
      >

        {stats.map((item)=>(

          <div
            key={item.text}
            className="
              text-center
            "
          >

            <h3
              className="
                font-fjalla
                text-4xl
                md:text-7xl
                text-[#C86B32]
              "
            >

              {item.value}

            </h3>


            <p
              className="
                mt-3
                uppercase
                tracking-[0.25em]
                text-xs
                text-black/50
              "
            >

              {item.text}

            </p>


          </div>


        ))}

      </div>


    </section>
  );
}