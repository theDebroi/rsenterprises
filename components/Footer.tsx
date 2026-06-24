"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";


const Linkedin = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.9V24h-5v-7.7c0-1.8 0-4.2-2.6-4.2s-3 2-3 4.1V24h-5V8z"/>
  </svg>
);


const Youtube = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M23 7.5s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C16.4 4 12 4 12 4s-4.4 0-7.7.2c-.5.1-1.5.1-2.4 1C1.2 5.9 1 7.5 1 7.5S.8 9.4.8 11.3v1.4c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2.1.9 2.6 1 1.9.2 7.5.2 7.5.2s4.4 0 7.7-.3c.5 0 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.4c0-1.9-.2-3.7-.2-3.7zM9.8 15.5v-7l6 3.5-6 3.5z"/>
  </svg>
);




export default function Footer(){

return(

<footer
className="
w-full
bg-[#F5F5F7]
text-[#080808]
border-t
border-black/10
premium-padding-container py-24 md:py-36
"
>


{/* TOP BAR */}
<div
className="
max-w-[1500px]

mx-auto

premium-padding-container

py-14

flex

flex-col
md:flex-row

justify-between
items-center

gap-8

border-b
border-black/10
"
>


{/* LOGO */}
<div
className="
flex
items-center
gap-12
"
>


<div
className="
relative

w-[160px]
h-[70px]
"
>

<Image

src="/icon.png"

alt="RS Enterprise Logo"

fill

priority

sizes="160px"

className="
object-contain
"

/>

</div>



{/* divider */}
<div
className="
hidden
md:block

h-12

w-px

bg-black/15
"
/>



</div>







{/* SOCIAL */}
<div
className="
flex
items-center
gap-4
"
>


<p
className="
text-neutral-500
text-sm
md:text-base
"
>
Be a part of our community
</p>



<a
href="#"
className="
w-9
h-9

rounded-md

bg-[#5b6e58]

text-white

flex
items-center
justify-center

hover:bg-[#485746]

transition
"
>

<Linkedin className="w-4 h-4"/>

</a>



<a
href="#"
className="
w-9
h-9

rounded-md

bg-[#5b6e58]

text-white

flex
items-center
justify-center

hover:bg-[#485746]

transition
"
>

<Youtube className="w-4 h-4"/>

</a>



</div>



</div>









{/* LINKS AREA */}
<div
className="
max-w-[1500px]

mx-auto

premium-padding-container

py-32
"
>


<div
className="
grid

grid-cols-1
sm:grid-cols-2
lg:grid-cols-5

gap-20
"
>



<FooterColumn
title="ABOUT RS"
links={[
  { name: "Overview", href: "/#about" },
  { name: "Our Journey", href: "/#about" },
  { name: "Manufacturing", href: "/#manufacturing" },
  { name: "Quality", href: "/#quality" },
]}
/>


<FooterColumn
title="PRODUCTS"
links={[
  { name: "Elastic Tape", href: "/#catalogue" },
  { name: "Webbing Tape", href: "/#catalogue" },
  { name: "Jacquard Elastic", href: "/#catalogue" },
  { name: "Custom Solutions", href: "/#manufacturing" },
]}
/>


<FooterColumn
title="RESOURCES"
links={[
  { name: "Catalogue", href: "/catalogue/company-catalogue.pdf" },
  { name: "Test Reports", href: "/#quality" },
]}
/>


<FooterColumn
title="CONTACT"
links={[
  { name: "Request Quote", href: "/#contact-form" },
  { name: "Contact Us", href: "/#contact-form" },
]}
/>


<FooterColumn
title="OTHERS"
links={[
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
]}
/>




</div>


</div>









{/* COPYRIGHT */}
<div
className="
bg-white/50

border-t
border-black/10
"
>


<div
className="
max-w-[1500px]

mx-auto

premium-padding-container

py-12
"
>


<p
className="
text-neutral-500
text-sm
"
>

© RS Enterprise 2026, All Rights Reserved.

</p>


</div>


</div>




</footer>

);

}







function FooterColumn({
title,
links,
}:{
title:string;
links:{ name: string; href: string }[];
}){


return(

<div>


<h3
className="
uppercase

font-bold

tracking-wide

text-neutral-600

mb-8
"
>

{title}

</h3>



<ul
className="
space-y-5
"
>


{links.map((item)=>(


<li
key={item.name}

className="
text-neutral-500

hover:text-[#C86B32]

cursor-pointer

transition

text-[15px]
"
>

<Link href={item.href}>
  {item.name}
</Link>

</li>


))}



</ul>



</div>


);

}