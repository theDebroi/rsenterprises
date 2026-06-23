"use client";

import React, {
  useEffect,
  useState
} from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";


const links = [
  "Manufacturing",
  "Quality",
  "Catalogue",
  "Contact",
];


export default function Navbar(){


const [scrolled,setScrolled] =
useState(false);



useEffect(()=>{

const handle=()=>{

setScrolled(
window.scrollY>40
);

};


window.addEventListener(
"scroll",
handle
);


return()=>{

window.removeEventListener(
"scroll",
handle
);

};


},[]);




return(

<motion.header

initial={{
y:-40,
opacity:0
}}

animate={{
y:0,
opacity:1
}}

transition={{
duration:1,
ease:"easeOut"
}}








  className={`
    fixed
    top-4
    left-4
    right-4
    md:top-6
    md:left-6
    md:right-6
    lg:top-8
    lg:left-8
    lg:right-8
    z-[9999]
    transition-all
    duration-500
    rounded-2xl
    ${
      scrolled
        ? `
          bg-[#f7f3ea]/90
          backdrop-blur-xl
          border
          border-black/10
          shadow-lg
        `
        : `
          bg-[#f7f3ea]/20
          backdrop-blur-sm
          border
          border-black/5
        `
    }
  `}
>
  <div className="h-[96px] px-[5vw] flex items-center justify-between">
    {/* LOGO */}
    <a href="#" className="group">
      <div className="relative w-[210px] h-[68px] md:w-[270px] md:h-[88px]">
        <Image
          src="/icon.png"
          alt="R.S. Enterprise"
          fill
          priority
          sizes="(max-width: 768px) 210px, 270px"
          className="object-contain"
        />
      </div>
    </a>


<nav

className="
hidden

lg:flex

items-center

gap-14
"

>


{

links.map((item)=>(


<a

key={item}

href={item === "Contact" ? "/#contact-form" : `/#${item.toLowerCase()}`}


className="
relative

uppercase

text-[14px]

tracking-[0.28em]

font-bold

text-neutral-600


transition


hover:text-[#080808]

after:absolute

after:left-0

after:-bottom-2

after:h-[1px]

after:w-0

after:bg-[#c86b32]


after:transition-all


hover:after:w-full

"

>

{item}


</a>


))


}


</nav>








{/* RIGHT CTA */}


<a
href="/#contact-form"

className="
hidden
md:flex

items-center
justify-center

gap-3

h-[56px]

min-w-[210px]

px-12
ml-6


border
border-[#080808]


bg-[#080808]


text-white


uppercase

tracking-[0.18em]

text-[12px]

font-black


transition-all

duration-500


hover:bg-transparent

hover:text-[#080808]

hover:px-14
"

>

Request Quote

<ArrowUpRight
size={15}
/>

</a>




</div>






{/* THREAD LINE */}

<motion.div

animate={{

scaleX:[
0,
1,
0
]

}}

transition={{

duration:5,

repeat:Infinity,

ease:"easeInOut"

}}

className="

origin-left

h-[1px]

bg-gradient-to-r

from-transparent

via-[#c86b32]

to-transparent

"

/>




</motion.header>

);

}