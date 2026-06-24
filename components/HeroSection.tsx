"use client";

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowUpRight,
  Download,
} from "lucide-react";


const FRAME_FOLDER =
"/New-Video-RS_frames";

const FRAME_PREFIX =
"frame_";

const TOTAL_FRAMES = 240;


export default function HeroSection(){


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


const [ready,setReady] =
useState(false);

const [progress,setProgress] =
useState(0);

const [isMobile, setIsMobile] = useState(false);

const [scrollPos, setScrollPos] = useState(0);

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };
  checkMobile();
  window.addEventListener("resize", checkMobile);
  return () => window.removeEventListener("resize", checkMobile);
}, []);

useEffect(() => {
  const handleScroll = () => {
    setScrollPos(window.scrollY);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

// LOAD IMAGES

useEffect(()=>{
  if (isMobile) {
    setReady(true);
    return;
  }

const loaded:HTMLImageElement[]=[];


let count=0;


for(let i=0;i<TOTAL_FRAMES;i++){


const img =
new Image();


const num =
String(i + 1).padStart(3,"0");


img.src =
`${FRAME_FOLDER}/${FRAME_PREFIX}${num}.jpg`;



img.onload=()=>{


count++;


setProgress(
Math.round(
(count/TOTAL_FRAMES)*100
)
);



if(count===TOTAL_FRAMES){

images.current =
loaded;


setTimeout(()=>{

setReady(true);

},600);

}


};



loaded[i]=img;


}



},[]);









// CANVAS RENDER

useEffect(()=>{
  if(!ready || isMobile)return;

const canvas =
canvasRef.current!;


const ctx =
canvas.getContext("2d")!;



const resize=()=>{


const dpr =
window.devicePixelRatio || 1;

const rect = canvas.getBoundingClientRect();

canvas.width =
rect.width*dpr;


canvas.height =
rect.height*dpr;



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



const render=()=>{


// faster smooth animation

currentFrame.current +=

(
targetFrame.current -
currentFrame.current

)*0.12;



const index =
Math.round(
currentFrame.current
);



const img =
images.current[index];



if(img){

const dpr = window.devicePixelRatio || 1;
const w_canvas = canvas.width / dpr;
const h_canvas = canvas.height / dpr;

ctx.clearRect(
0,
0,
w_canvas,
h_canvas
);



const scale =

Math.max(

w_canvas/img.width,

h_canvas/img.height

)*1.12;



const w =
img.width*scale;


const h =
img.height*scale;



ctx.drawImage(

img,

(w_canvas-w)/2,

(h_canvas-h)/2,

w,

h

);



}



raf =
requestAnimationFrame(render);


};



render();



return()=>{

cancelAnimationFrame(raf);

window.removeEventListener(
"resize",
resize
);

};


},[ready, isMobile]);









// GSAP SCROLL


useEffect(()=>{
  if(!ready || isMobile)return;


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


// faster completion

end:
"+=4500",


pin:true,


scrub:1.2,


anticipatePin:1,


onUpdate(self){


targetFrame.current =

self.progress *

(TOTAL_FRAMES-1);


},

onLeave() {
  window.dispatchEvent(new CustomEvent("hero-unpinned", { detail: { unpinned: true } }));
},

onEnterBack() {
  window.dispatchEvent(new CustomEvent("hero-unpinned", { detail: { unpinned: false } }));
}


});


},heroRef);



return()=>ctx.revert();


},[ready, isMobile]);










return(

<>



{/* LOADER */}

<AnimatePresence>

{!ready && (

<motion.div

initial={{
opacity:1
}}

exit={{

opacity:0,

transition:{
duration:.8
}

}}

className="
fixed
inset-0
z-[99999]

bg-white

flex
items-center
justify-center
"

>


<div className="text-center flex flex-col items-center">


<div className="relative w-[450px] h-[200px] mb-0 flex items-center justify-center">
  <img
    src="/icon.png"
    alt="R.S. Enterprise Logo"
    className="max-h-full max-w-full object-contain animate-pulse"
  />
</div>



<div

className="
mt-0

w-[300px]

h-[20px]

bg-white/10

overflow-hidden
"

>


<motion.div

animate={{

width:
`${progress}%`

}}

className="
h-full

bg-[#c86b32]
"

/>


</div>




<p

className="
mt-2

text-neutral-400

text-[14px]
font-bold

tracking-[0.35em]
"

>

WEAVING {progress}%

</p>



</div>



</motion.div>

)}

</AnimatePresence>









<section

ref={heroRef}

className="
relative
h-screen
overflow-hidden
bg-white
"

>




{/* textile texture */}

<div

className="
absolute

inset-0

opacity-[0.025]
"

style={{

backgroundImage:
`
linear-gradient(90deg,#000 1px,transparent 1px),
linear-gradient(#000 1px,transparent 1px)
`,

backgroundSize:
"45px 45px"

}}

/>








{/* MAIN FRAME ANIMATION */}

{!isMobile && (
  <canvas
    ref={canvasRef}
    className={`absolute left-0 w-full transition-all duration-500 z-[1] ${
      scrollPos < 50 ? "top-[64px] h-[calc(100%-64px)]" : "top-0 h-full"
    }`}
  />
)}







{/* soft overlay */}

<div

className={`
absolute
left-0
right-0
bottom-0
z-[2]
bg-gradient-to-r
from-white/55
via-transparent
to-transparent
transition-all
duration-500
${scrollPos < 50 ? "top-[64px]" : "top-0"}
`}

/>










{/* TEXT */}

<motion.div

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

className={`
absolute
z-10
left-[7vw]
bottom-0
flex
flex-col
justify-center
max-w-[480px]
transition-all
duration-500
${scrollPos < 50 ? "top-[64px]" : "top-0"}
`}

>



<p

className="
mb-8

uppercase

tracking-[0.45em]

text-[15px] md:text-[18px]

font-extrabold

text-[#c86b32]
"

>

SINCE 2006

</p>





<h1

className="
uppercase

font-black

leading-[1.05]

tracking-[-0.04em]

mb-8
"

style={{

fontSize:
"clamp(2.6rem,4vw,4.8rem)"

}}

>


Engineering

<br/>

Every Thread

<br/>


<span className="text-[#c86b32]">

With Precision

</span>



</h1>






<p

className="
text-[19px] md:text-[22px]

leading-[1.8]

text-neutral-800

font-medium

mb-12
"

>

Premium elastic tapes and webbing
solutions engineered with precision
manufacturing.

</p>








{/* BUTTONS */}

  <div className="flex items-center gap-3 flex-wrap max-w-full">
    <a
      href="/#contact-form"
      className="h-[52px] min-w-[145px] px-5 bg-black text-white uppercase text-[10px] tracking-[0.12em] font-bold flex items-center justify-center gap-2 transition hover:-translate-y-1 hover:bg-[#c86b32] duration-300"
    >
      Contact
      <ArrowUpRight size={15} />
    </a>

    <a
      href="/catalogue/company-catalogue.pdf"
      download="company-catalogue.pdf"
      className="h-[52px] min-w-[145px] px-5 border border-black/20 bg-white/30 backdrop-blur-md uppercase text-[10px] tracking-[0.12em] font-bold flex items-center justify-center gap-2 transition hover:bg-black hover:text-white hover:-translate-y-1 duration-300"
    >
      Catalogue
      <Download size={14} />
    </a>
  </div>



</motion.div>







</section>



</>

);

}