"use client";

import React from "react";
import { motion } from "framer-motion";
import { Fjalla_One } from "next/font/google";
import { ArrowUpRight } from "lucide-react";


const fjalla = Fjalla_One({
  weight:"400",
  subsets:["latin"],
});


export default function ContactCTA(){


return(

<section
className="
min-h-screen
w-full

bg-[#080808]
text-white

flex
items-center
justify-center

px-8

overflow-hidden
"
>


<motion.div

initial={{
opacity:0,
y:60
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
max-w-[1200px]

mx-auto

text-center
"
>


<p
className="
text-[#C86B32]

uppercase

tracking-[0.5em]

text-xs

mb-10
"
>

Start A Partnership

</p>





<h2

className={`
${fjalla.className}

text-6xl
md:text-[10rem]

uppercase

leading-[0.9]
`}
>


Let's Build

<br/>

Something

<br/>

Exceptional


</h2>





<p
className="
mx-auto

mt-12

max-w-2xl

text-lg

leading-9

text-white/50
"
>

From custom elastic development to large scale
manufacturing, R.S Enterprise delivers precision
engineered textile solutions for ambitious brands.


</p>






<button

className="
group

mt-16

h-24

px-20

bg-[#C86B32]

text-white

uppercase

tracking-[0.3em]

text-xs

flex

items-center

gap-6

mx-auto

transition-all

duration-500

hover:bg-white

hover:text-black
"
>


Request Quote


<ArrowUpRight

className="
transition

group-hover:translate-x-2

group-hover:-translate-y-2
"

/>


</button>






{/* LOWER LINE */}

<div
className="
mt-28

border-t

border-white/10

pt-10

flex

justify-between

text-white/40

uppercase

tracking-[0.25em]

text-xs
"
>


<span>
Since 2006
</span>


<span>
Agra, India
</span>


<span>
Global Supply
</span>


</div>



</motion.div>


</section>

)

}