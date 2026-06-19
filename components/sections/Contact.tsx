"use client";

import React from "react";
import { motion } from "framer-motion";
import { Fjalla_One } from "next/font/google";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Briefcase,
} from "lucide-react";


const fjalla = Fjalla_One({
  weight:"400",
  subsets:["latin"],
});


export default function ContactCTA(){

return(

<section
className="
w-full
bg-[#F5F5F7]
px-8
lg:px-24
py-40
text-[#080808]
"
>


<div
className="
max-w-[1500px]
mx-auto

grid
grid-cols-1
lg:grid-cols-[35%_65%]

gap-24
items-start
"
>




{/* LEFT */}


<div>


<h2
className={`
${fjalla.className}

text-7xl
uppercase
mb-12
`}
>
LET'S CHAT
</h2>


<p
className="
text-xl
leading-10
text-black/50
max-w-lg
"
>
Have custom elastic tape requirements or specific
webbing specifications? Send your details and our
manufacturing team will connect within 24 hours.
</p>



<div
className="
mt-14
pt-10
border-t
border-black/10
space-y-8
"
>


{[
[Mail,"General Inquiry","info@rsenterprise.com"],
[Briefcase,"Partnership","partners@rsenterprise.com"],
[Phone,"Call Operations","+91 98370 50515"],
[MapPin,"Corporate HQ","Agra, Uttar Pradesh"],
].map(([Icon,title,text]:any)=>(

<div
key={title}
className="
flex
gap-5
items-start
"
>

<Icon
size={22}
className="text-[#C86B32]"
/>

<div>

<h4 className="font-semibold">
{title}
</h4>

<p className="text-black/50">
{text}
</p>

</div>

</div>

))}


</div>


</div>









{/* RIGHT CARD */}


<motion.form

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
bg-white

rounded-[36px]

shadow-xl
shadow-black/5

border
border-black/5


p-12
lg:p-16


space-y-10
"
>





<div
className="
grid
grid-cols-1
md:grid-cols-2
gap-8
"
>


<input
placeholder="Your Name"
className="h-16 rounded-2xl bg-[#F5F5F7] px-6 outline-none border border-black/10"
/>


<input
placeholder="Corporate Email"
className="h-16 rounded-2xl bg-[#F5F5F7] px-6 outline-none border border-black/10"
/>


</div>





<div
className="
grid
grid-cols-1
md:grid-cols-2
gap-8
"
>


<input
placeholder="Company Name"
className="h-16 rounded-2xl bg-[#F5F5F7] px-6 outline-none border border-black/10"
/>



<select
className="
h-16
rounded-2xl
bg-[#F5F5F7]
px-6
outline-none
border
border-black/10
"
>

<option>Select Category</option>

<option>Elastic Tape</option>

<option>Webbing</option>

<option>Custom Manufacturing</option>

</select>


</div>





<textarea

placeholder="Tell us width, quantity, material or requirement..."

className="
w-full

h-[240px]

rounded-2xl

bg-[#F5F5F7]

p-6

resize-none

outline-none

border
border-black/10
"

/>





<button

className="
w-full

h-20

rounded-2xl

bg-black

text-white


uppercase
tracking-[0.35em]
text-xs


flex
items-center
justify-center
gap-4


hover:bg-[#C86B32]

transition
duration-500
"

>

<Send size={18}/>

Submit Inquiry


</button>





</motion.form>



</div>



</section>

)

}