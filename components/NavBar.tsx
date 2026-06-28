"use client";

import React, {
  useEffect,
  useState
} from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";


const links = [
  "Home",
  "About Us",
  "Products",
  "Infrastructure",
  "Quality",
  "Catalogue",
  "Contact Us",
];


export default function Navbar(){


const [scrollPos, setScrollPos] = useState(0);
const [heroUnpinned, setHeroUnpinned] = useState(false);
const [isMobile, setIsMobile] = useState(false);
const [viewportHeight, setViewportHeight] = useState(800);

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
    setViewportHeight(window.innerHeight);
  };
  checkMobile();
  window.addEventListener("resize", checkMobile);
  return () => window.removeEventListener("resize", checkMobile);
}, []);

useEffect(() => {
  const handleHeroUnpinned = (e: Event) => {
    const customEvent = e as CustomEvent;
    setHeroUnpinned(customEvent.detail?.unpinned ?? false);
  };
  window.addEventListener("hero-unpinned", handleHeroUnpinned);
  return () => window.removeEventListener("hero-unpinned", handleHeroUnpinned);
}, []);

useEffect(()=>{

const handle=()=>{

setScrollPos(window.scrollY);

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
    left-0
    right-0
    z-[99999]
    transition-all
    duration-500
    ${(isMobile ? (scrollPos >= viewportHeight) : heroUnpinned) ? "top-0" : "top-[-80px]"}
    bg-[#5b6e58]/95
    backdrop-blur-xl
    border-b
    border-white/10
    shadow-lg
  `}
>
  <div className="h-[64px] premium-padding-container flex items-center justify-between">
    {/* LOGO */}
    <a href="#" className="flex items-center gap-3 group">
      <div className="relative w-[90px] h-[80px] md:w-[100px] md:h-[100px]">
        <Image
          src="/icon.png"
          alt="R.S. Enterprise"
          fill
          priority
          sizes="(max-width: 768px) 150px, 180px"
          className="object-contain"
        />
      </div>
      <span className="font-sans text-[14px] md:text-[16px] font-black tracking-[0.25em] text-white transition-colors duration-300">
        RS ENTERPRISES
      </span>
    </a>


<nav

className="
hidden

lg:flex

items-center

gap-10
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

text-[12px]

tracking-[0.25em]

font-bold

text-white/80


transition


hover:text-white

after:absolute

after:left-0

after:-bottom-1.5

after:h-[1px]

after:w-0

after:bg-white


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

gap-2

h-[40px]

min-w-[160px]

px-6
ml-6


border
border-white


bg-white


text-[#5b6e58]


uppercase

tracking-[0.15em]

text-[11px]

font-bold


transition-all

duration-500


hover:bg-transparent

hover:text-white
"

>

Request Quote

<ArrowUpRight
size={13}
/>

</a>




</div>




</motion.header>

);

}