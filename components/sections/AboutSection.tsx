"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { Fjalla_One } from "next/font/google";


const fjalla = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
});


const stats = [
  { end: 18, suffix: "+", label: "Years Experience" },
  { end: 35, suffix: "+", label: "Machines" },
  { end: 100, suffix: "K+", label: "Meters / Day" },
];


const ease: [number, number, number, number] =
[0.16, 1, 0.3, 1];


const reveal = (delay = 0) => ({
  initial:{
    y:40,
    opacity:0,
  },
  transition:{
    duration:1,
    ease,
    delay,
  },
});



function Counter({
  end,
  suffix,
  label
}:{
  end:number;
  suffix:string;
  label:string;
}){


const ref =
useRef<HTMLDivElement>(null);


const view =
useInView(ref,{
once:true
});



useEffect(()=>{

if(!view || !ref.current)
return;


const el =
ref.current.querySelector(".num");


const obj={
value:0
};


gsap.to(obj,{
value:end,
duration:2,
ease:"power4.out",

onUpdate(){
if(el){
el.textContent=
Math.round(obj.value).toString();
}
}

})


},[view,end]);



return (

<div
ref={ref}
className="text-center"
>

<h3
className={`
${fjalla.className}
text-5xl
md:text-7xl
`}
>

<span className="num">
0
</span>

<span className="text-[#C86B32]">
{suffix}
</span>

</h3>


<p
className="
mt-3
text-xs
tracking-[0.25em]
uppercase
text-black/40
"
>

{label}

</p>


</div>

)

}





export default function AboutSection(){


const ref =
useRef<HTMLElement>(null);


const view =
useInView(ref,{
once:true,
margin:"-100px"
});



return (

<section
ref={ref}
id="about"
className="
bg-[#F5F5F7]
px-6
py-24
overflow-hidden
"
>


<div
className="
max-w-[1300px]
mx-auto
text-center
"
>



<motion.p

{...reveal()}

animate={
view?
{
y:0,
opacity:1
}:{}
}

className="
uppercase
tracking-[0.45em]
text-[#C86B32]
text-xs
mb-5
"

>

Since 2006

</motion.p>





<motion.h1

{...reveal(.1)}

animate={
view?
{
y:0,
opacity:1
}:{}
}

className={`
${fjalla.className}
text-[14vw]
md:text-[8vw]
leading-[0.9]
tracking-tight
`}
>

TEXTILE
<br/>
EXCELLENCE

</motion.h1>





<motion.p

{...reveal(.2)}

animate={
view?
{
y:0,
opacity:1
}:{}
}

className="
mx-auto
mt-8
max-w-2xl
text-lg
leading-8
text-black/50
"

>

R.S Enterprise engineers premium elastic tapes and
woven webbing solutions using advanced machinery,
precision manufacturing and years of craftsmanship.

</motion.p>






<motion.div

{...reveal(.3)}

animate={
view?
{
y:0,
opacity:1
}:{}
}

className="
relative
mt-14
mx-auto
max-w-6xl
h-[520px]
rounded-[40px]
overflow-hidden
shadow-xl
"

>


<Image

src="https://images.unsplash.com/photo-1581093458791-9d15482442f6?q=80&w=2000"

alt="factory"

fill

className="
object-cover
"

/>



<div
className="
absolute
bottom-8
left-1/2
-translate-x-1/2
bg-white/80
backdrop-blur-xl
rounded-full
px-12
py-6
flex
gap-14
shadow-xl
"
>


{
stats.map((s)=>(
<Counter
key={s.label}
{...s}
/>
))
}


</div>


</motion.div>






<motion.button

{...reveal(.4)}

animate={
view?
{
y:0,
opacity:1
}:{}
}

className="
mt-14
px-20
py-6
rounded-full
bg-black
text-white
uppercase
tracking-[0.25em]
text-sm
hover:scale-105
duration-500
"

>

Explore Manufacturing

</motion.button>



</div>


</section>


)

}