"use client";

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import { motion } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowUpRight,
  Download,
} from "lucide-react";



const FRAME_FOLDER =
  "/Elastic_tape_forms_RS_logo_202606190411_000";

const FRAME_PREFIX =
  "Elastic_tape_forms_RS_logo_202606190411_";

const TOTAL_FRAMES = 100;



export default function HeroSection() {

  const heroRef =
    useRef<HTMLDivElement>(null);

  const canvasRef =
    useRef<HTMLCanvasElement>(null);


  const images =
    useRef<HTMLImageElement[]>([]);

  const currentFrame =
    useRef(0);

  const targetFrame =
    useRef(0);


  const [ready, setReady] =
    useState(false);



  // ===============================
  // LOAD FRAMES
  // ===============================

  useEffect(() => {

    const loaded:
      HTMLImageElement[] = [];


    let count = 0;


    for (
      let i = 0;
      i < TOTAL_FRAMES;
      i++
    ) {

      const img =
        new Image();


      const num =
        String(i)
          .padStart(3, "0");


      img.src =
        `${FRAME_FOLDER}/${FRAME_PREFIX}${num}.jpg`;



      img.onload = () => {

        count++;


        if (
          count === TOTAL_FRAMES
        ) {

          images.current =
            loaded;


          setReady(true);

        }

      };


      loaded[i] = img;

    }


  }, []);









  // ===============================
  // CANVAS
  // ===============================

  useEffect(() => {


    if (!ready) return;


    const canvas =
      canvasRef.current!;


    const ctx =
      canvas.getContext("2d")!;



    const resize = () => {


      const dpr =
        window.devicePixelRatio || 1;


      canvas.width =
        window.innerWidth * dpr;


      canvas.height =
        window.innerHeight * dpr;



      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

    };


    resize();


    window.addEventListener(
      "resize",
      resize
    );



    let raf:number;



    const draw = () => {


      // smoother interpolation

      currentFrame.current +=

        (
          targetFrame.current -
          currentFrame.current

        ) * 0.05;



      const index =

        Math.round(
          currentFrame.current
        );



      const img =
        images.current[index];



      if (img) {


        ctx.clearRect(
          0,
          0,
          innerWidth,
          innerHeight
        );



        // slightly bigger animation

        const scale =

          Math.max(

            innerWidth /
              img.width,

            innerHeight /
              img.height

          ) * 1.08;



        const w =
          img.width *
          scale;


        const h =
          img.height *
          scale;




        ctx.drawImage(

          img,

          (innerWidth-w)/2,

          (innerHeight-h)/2,

          w,

          h

        );


      }



      raf =
        requestAnimationFrame(draw);


    };



    draw();



    return()=>{

      cancelAnimationFrame(
        raf
      );

      window.removeEventListener(
        "resize",
        resize
      );

    };


  }, [ready]);










  // ===============================
  // SCROLL CONTROL
  // ===============================


  useEffect(()=>{


    if(!ready)return;


    gsap.registerPlugin(
      ScrollTrigger
    );



    const ctx =
      gsap.context(()=>{


        ScrollTrigger.create({

          trigger:
            heroRef.current,


          start:
            "top top",


          end:
            "+=9000",


          pin:true,


          scrub:3,


          anticipatePin:1,


          onUpdate(self){


            targetFrame.current =

              self.progress *

              (TOTAL_FRAMES-1);


          }


        });


      },heroRef);



    return()=>ctx.revert();



  },[ready]);











return (

<section

ref={heroRef}

className="
relative
h-screen
overflow-hidden
bg-[#f7f3ea]
"

>




{/* TEXTILE BACKGROUND */}

<div

className="
absolute
inset-0

opacity-[0.035]
"

style={{

backgroundImage:

`
linear-gradient(
90deg,
#000 1px,
transparent 1px
),
linear-gradient(
#000 1px,
transparent 1px
)
`,

backgroundSize:
"45px 45px"

}}

/>








{/* MAIN ANIMATION */}

<canvas

ref={canvasRef}

className="
absolute
inset-0

w-full
h-full

z-[1]
"

/>








{/* SOFT READABILITY GRADIENT */}

<div

className="
absolute
inset-0
z-[2]

bg-gradient-to-r

from-[#f7f3ea]/80

via-[#f7f3ea]/20

to-transparent

"

/>









{/* CONTENT */}

<motion.div

initial={{

opacity:0,

y:35

}}

animate={{

opacity:1,

y:0

}}

transition={{

duration:1,

ease:"easeOut"

}}



className="
absolute

z-10

left-[7vw]

top-[55%]

-translate-y-1/2

max-w-[460px]

"

>







{/* LABEL */}


<div

className="
flex
items-center

gap-4

mb-8
"

>


<div

className="
w-12
h-[1.5px]

bg-[#c86b32]
"

/>


<p

className="
text-[10px]

tracking-[0.35em]

uppercase

font-bold

text-neutral-600

"

>

Since 2006

</p>


</div>








{/* TITLE */}


<h1

className="
uppercase

font-black

text-[#080808]

tracking-[-0.04em]

leading-[0.95]

mb-7
"


style={{

fontSize:

"clamp(2.8rem,4.5vw,5.2rem)"

}}

>


Engineering

<br/>

Every Thread

<br/>


<span

className="
text-[#c86b32]
"

>

With Precision

</span>


</h1>








{/* DESCRIPTION */}


<p

className="
text-[16px]

leading-[1.8]

text-neutral-600

mb-10

"

>


Premium elastic tapes and webbing
solutions crafted through advanced
textile engineering.


</p>









{/* BUTTONS */}

<div

className="
flex

gap-4

"

>



<button

className="
h-[56px]

min-w-[170px]

px-7

bg-[#080808]

text-white

flex
items-center
justify-center

gap-3

uppercase

tracking-[0.18em]

text-[11px]

font-bold

transition-all

hover:-translate-y-1

hover:shadow-xl

"

>


Contact


<ArrowUpRight

size={17}

/>


</button>









<button

className="
h-[56px]

min-w-[170px]

px-7

border

border-black/20

bg-white/30

backdrop-blur

flex

items-center

justify-center

gap-3


uppercase

tracking-[0.18em]

text-[11px]

font-bold

transition-all


hover:-translate-y-1

hover:bg-black

hover:text-white

"

>


Catalogue


<Download

size={16}

/>


</button>



</div>





</motion.div>









{/* SCROLL */}

<div

className="
absolute

bottom-10

left-[7vw]

z-10


uppercase

tracking-[0.35em]

text-[10px]

font-bold

text-neutral-500

"

>

Scroll to explore

</div>






</section>

);

}