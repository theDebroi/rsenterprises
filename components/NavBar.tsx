"use client";

import React, {
  useEffect,
  useState
} from "react";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";


const links = [
  "Products",
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

top-0
left-0

z-[9999]

w-full

transition-all
duration-500


${
scrolled
?

`
bg-[#f7f3ea]/90
backdrop-blur-xl
border-b
border-black/10
`

:

`
bg-transparent
`

}

`}

>


<div

className="

h-[96px]

px-[7vw]

flex

items-center

justify-between

"

>





{/* LOGO */}

<a

href="#"

className="
group
"

>


<div

className="
flex
items-end
gap-4
"

>



<h1

className="
text-[34px]

leading-none

font-black

tracking-[-0.08em]

text-[#080808]
"

>

R.S

</h1>





<div

className="
pb-1
"

>


<p

className="
text-[10px]

tracking-[0.45em]

font-black

text-[#080808]

"

>

ENTERPRISE

</p>



<p

className="
mt-1

text-[8px]

tracking-[0.35em]

uppercase

text-neutral-500

"

>

Since 2006

</p>


</div>



</div>


</a>









{/* CENTER LINKS */}


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

href={`#${item.toLowerCase()}`}


className="
relative

uppercase

text-[11px]

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
href="#contact"

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

text-[10px]

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