"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";


const years = ["2006", "2010", "2015", "2018", "2022", "2026"];


const yearDetails: Record<string, { title: string; description: string }> = {

  "2006": {
    title: "18 Years Of\nTextile\nExcellence",
    description:
      "Since 2006, R.S Enterprise has been crafting premium elastic tapes and woven webbing solutions. From a small manufacturing unit to advanced industrial production, our journey represents precision, technology and trust.",
  },

  "2010": {
    title: "Expanding Our\nIndustrial\nCapacities",
    description:
      "By 2010, we expanded our machinery, introducing high-speed needle looms and increasing our production capacity.",
  },

  "2015": {
    title: "Standardized\nQuality Control\nLabs",
    description:
      "In 2015, we introduced quality control systems and advanced testing facilities.",
  },

  "2018": {
    title: "Global Export\nApparel Markets",
    description:
      "In 2018, we expanded internationally with premium textile solutions.",
  },

  "2022": {
    title: "Eco-Friendly\nSustainable Yarns",
    description:
      "By 2022, we adopted sustainable manufacturing methods and eco-friendly yarns.",
  },

  "2026": {
    title: "Innovative Narrow\nFabric Leadership",
    description:
      "Today, with 18+ years of expertise, we lead innovation in narrow fabrics.",
  },

};




export default function AboutSection() {

  const [activeYear, setActiveYear] = useState("2006");

  const content = yearDetails[activeYear];



  return (

    <section
      id="about"
      className="
        bg-[#F5F5F7]
        text-[#080808]

        overflow-hidden

        py-28
      "
    >


      {/* MAIN CENTER CONTAINER */}
      <div
        className="
          px-[5vw]
          lg:px-[7vw]
          grid
          grid-cols-1
          lg:grid-cols-[48%_52%]
          gap-10
          lg:gap-20
          w-full
        "
      >




        {/* IMAGE COLUMN FIX */}
        <div
          className="
            w-full

            flex
            justify-center
            items-center
          "
        >


          <motion.div

            initial={{
              opacity:0,
              x:-50
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:1
            }}

            viewport={{
              once:true
            }}


            className="
              relative


              w-[88%]
              max-w-[560px]


              h-[600px]


              rounded-[32px]


              overflow-hidden
            "
          >



            <Image

              src="/factory.jpg"

              alt="RS Enterprise Factory"

              fill

              priority

              sizes="560px"

              className="
                object-cover
              "

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








        {/* CONTENT COLUMN */}
        <div
          className="
            flex

            justify-center
            items-center
          "
        >


          <motion.div

            initial={{
              opacity:0,
              y:50
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:1
            }}

            viewport={{
              once:true
            }}

            className="
              max-w-[650px]
            "
          >



            <p
              className="
                mb-8

                text-xs

                font-bold

                uppercase

                tracking-[0.45em]

                text-[#C86B32]
              "
            >

              Our Legacy

            </p>




            <AnimatePresence mode="wait">


              <motion.div

                key={activeYear}


                initial={{
                  opacity:0,
                  y:20
                }}

                animate={{
                  opacity:1,
                  y:0
                }}

                exit={{
                  opacity:0,
                  y:-20
                }}

                transition={{
                  duration:.4
                }}

              >



                <h1
                  className="
                    font-fjalla


                    text-5xl
                    md:text-7xl
                    xl:text-8xl


                    uppercase


                    leading-none


                    font-bold
                  "
                >


                  {
                    content.title
                      .split("\n")
                      .map((line,index)=>(

                      <React.Fragment key={index}>

                        {line}

                        <br/>

                      </React.Fragment>

                    ))
                  }



                </h1>




                <p
                  className="
                    mt-12

                    text-lg

                    leading-8

                    text-black/55
                  "
                >


                  {content.description}


                </p>



              </motion.div>


            </AnimatePresence>






            <Link

              href="/#manufacturing"


              className="
                mt-14


                flex


                w-[260px]
                h-[85px]


                items-center
                justify-center


                bg-[#C86B32]


                text-white


                uppercase

                tracking-[0.3em]


                text-sm


                hover:bg-black


                transition-all
                duration-500
              "
            >

              Explore Journey →

            </Link>



          </motion.div>


        </div>





      </div>









      {/* TIMELINE */}
      <div
        className="
          max-w-[1450px]

          mx-auto


          mt-24


          px-10
          lg:px-24


          pt-12


          border-t
          border-black/10


          flex

          justify-between

          items-center

          gap-10

          flex-wrap
        "
      >



        <h2
          className="
            font-fjalla

            text-5xl

            text-[#C86B32]
          "
        >
          RS
        </h2>




        <div
          className="
            flex

            flex-wrap

            gap-12
          "
        >


          {years.map((year)=>(


            <button

              key={year}

              onClick={()=>setActiveYear(year)}


              className={`
                font-fjalla

                text-3xl

                transition-all

                ${
                  activeYear===year

                  ? "text-[#C86B32] scale-110"

                  : "text-black/50"
                }
              `}
            >


              {year}


            </button>



          ))}


        </div>


      </div>



    </section>

  );

}