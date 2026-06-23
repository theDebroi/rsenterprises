"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award } from "lucide-react";

export default function QualitySection() {
  return (
    <section
      id="quality"
      className="
        relative
        w-screen
        bg-[#F5F5F7]
        py-36
        text-[#080808]
        overflow-hidden
      "
    >

      <motion.div
        initial={{ opacity:0, y:40 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:.8 }}
        viewport={{ once:true }}

        className="
          relative
          left-1/2
          -translate-x-1/2

          w-full
          max-w-[900px]

          flex
          flex-col
          items-center
          justify-center
          text-center
        "
      >


        {/* LABEL */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-6
            mb-12
            w-full
          "
        >

          <span className="h-px w-28 bg-[#C86B32]" />

          <p
            className="
              text-xs
              tracking-[0.5em]
              uppercase
              text-[#C86B32]
            "
          >
            Quality Assurance
          </p>

          <span className="h-px w-28 bg-[#C86B32]" />

        </div>



        <ShieldCheck
          size={70}
          strokeWidth={1}
          className="
            text-[#C86B32]
            mb-10
          "
        />



        <h2
          className="
            font-fjalla
            text-3xl
            md:text-5xl
            uppercase
            leading-[0.95]
            text-center
            font-bold
          "
        >

          ISO 9001:2015

          <br/>

          Certified

        </h2>



        <p
          className="
            mt-10

            max-w-[700px]

            text-center
            text-lg
            leading-9
            text-black/50
          "
        >

          Manufacturing high performance elastic tapes and webbings
          with certified quality systems and precision control.

        </p>




        {/* BADGES */}

        <div
          className="
            mt-12

            flex
            items-center
            justify-center
            gap-8
          "
        >


          <div
            className="
              h-16
              px-10

              bg-white
              border
              border-black/10

              flex
              items-center
              justify-center
              gap-3
            "
          >

            <Award
              size={22}
              className="text-[#C86B32]"
            />

            MSME Udyam

          </div>



          <div
            className="
              h-16
              px-10
              bg-white
              border
              border-black/10

              flex
              items-center
              justify-center
            "
          >

            Export Ready

          </div>


        </div>


      </motion.div>


    </section>
  );
}