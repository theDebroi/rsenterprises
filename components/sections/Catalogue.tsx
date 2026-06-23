"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";


const categories = [
  { name: "Elastic Tape", img: "/Product1.png", key: "elastic" },
  { name: "Webbing Tape", img: "/product2.png", key: "webbing" },
  { name: "Jacquard Elastic", img: "/product3.png", key: "jacquard" },
  { name: "Custom Solutions", img: "/product4.png", key: "custom" },
];


const productData: any = {

elastic:[
{name:"Binding Elastic Tape",img:"/elastic/binding.png"},
{name:"Foiled Textured Elastic",img:"/elastic/foiled.png"},
{name:"Furniture Elastic",img:"/elastic/furniture.png"},
{name:"HerringBone Elastic",img:"/elastic/herringBone.png"},
{name:"Multicolored Elastic",img:"/elastic/multicolored.png"},
{name:"Honeycomb Elastic Tape",img:"/elastic/honeycomb.png"},
{name:"Lurex Elastic",img:"/elastic/Lurex.png"},
{name:"Ribbed Elastic",img:"/elastic/ribbed.png"},
{name:"Sandwich Elastic",img:"/elastic/sandwitch.png"},
{name:"Laces Elastic",img:"/elastic/laces.png"},
],

webbing:[
{name:"Bag Straps",img:"/webbing/bag-staps.png"},
{name:"Excercise Belt",img:"/webbing/excercise.png"},
{name:"Binding Niwar",img:"/webbing/niwar.png"},
{name:"Cotton Tape",img:"/webbing/cotton-tape.png"},
{name:"Metallic Webbings",img:"/webbing/metallic.png"},
{name:"Nylon Belts",img:"/webbing/nylon.png"},
{name:"Parachute Belts",img:"/webbing/parachute.png"},
{name:"Polyester Webbing Tapes ",img:"/webbing/polyster-webbing.png"},
{name:"Reflector Tapes",img:"/webbing/reflector.png"},
{name:"Seat Belts",img:"/webbing/seat-belts.png"},
],

  jacquard:[
    {name:"Braided Elastic",img:"/custom/image.png"},
    {name:"Buckle Elastic",img:"/custom/image copy.png"},
    {name:"Dog Harness Belts",img:"/custom/image copy 2.png"},
    {name:"Elastic Cords",img:"/custom/image copy 3.png"},
    {name:"Jacquard belts",img:"/custom/image copy 4.png"},
    {name:"Lycra Elastic",img:"/custom/image copy 5.png"},
    {name:"Rainbow Elastic",img:"/custom/image copy 6.png"},
    {name:"Woolen Elastic",img:"/custom/image copy 7.png"},
    {name:"Woven Elastic",img:"/custom/image copy 8.png"},
    {name:"Woven Monofilament Elastic",img:"/custom/image copy 9.png"},
    {name:"Woven Shoulder Straps",img:"/custom/image copy 10.png"},
    {name:"Woven Surgical Elastic",img:"/custom/image copy 11.png"},
  ],

custom:[
{name:"Braided Elastic",img:"/custom/image.png"},
{name:"Buckle Elastic",img:"/custom/image copy.png"},
{name:"Dog Harness Belts",img:"/custom/image copy 2.png"},
{name:"Elastic Cords",img:"/custom/image copy 3.png"},
{name:"Jacquard belts",img:"/custom/image copy 4.png"},
{name:"Lycra Elastic",img:"/custom/image copy 5.png"},
{name:"Rainbow Elastic",img:"/custom/image copy 6.png"},
{name:"Woolen Elastic",img:"/custom/image copy 7.png"},
{name:"Woven Elastic",img:"/custom/image copy 8.png"},
{name:"Woven Monofilament Elastic",img:"/custom/image copy 9.png"},
{name:"Woven Shoulder Straps",img:"/custom/image copy 10.png"},
{name:"Woven Surgical Elastic",img:"/custom/image copy 11.png"},
],

};





export default function CatalogSection(){


const [active,setActive] = useState("elastic");

const productRef = useRef<HTMLDivElement>(null);



function openProducts(key:string){

setActive(key);


setTimeout(()=>{

productRef.current?.scrollIntoView({
behavior:"smooth",
block:"start",
});

},200);

}





return(

<section
id="catalogue"
className="w-full bg-[#F5F5F7] text-[#080808] py-20 premium-padding-container overflow-hidden"
>
  <div className="w-full py-8 md:py-16 flex flex-col items-center">



{/* HEADER */}


<div className="text-center mb-24">


<p className="text-[#C86B32] tracking-[0.45em] uppercase text-xs mb-6">

Our Catalogue

</p>



<h2 className="font-fjalla font-bold text-3xl md:text-6xl uppercase leading-none">

Engineered
<br />
Products

</h2>


</div>


<div style={{ height: "20px" }} />




{/* CATEGORY */}


<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full px-4 md:px-8">


{categories.map((item,index)=>(


<motion.div

key={item.key}

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{
duration:.7,
delay:index*.1
}}

onClick={()=>openProducts(item.key)}

className="group cursor-pointer p-4 md:p-8 border border-black/15 flex flex-col items-center justify-between bg-white shadow-sm hover:shadow-md transition-all duration-300"
>



<div className="relative w-full aspect-square overflow-hidden bg-white">


<Image

src={item.img}

alt={item.name}

fill

sizes="25vw"

className="object-cover transition-all duration-700 group-hover:scale-110"

/>


</div>



<h3 className="font-fjalla text-center uppercase text-[10px] sm:text-[11px] md:text-lg lg:text-xl mt-2 md:mt-8 tracking-wider font-bold">

{item.name}

</h3>



</motion.div>


))}


</div>









{/* SCROLL TARGET */}

<div ref={productRef} className="h-1"></div>



<div style={{ height: "40px" }} />



{/* PRODUCTS */}


<div className="mt-8 w-full px-4 md:px-8">



<div className="flex flex-col items-center justify-center mb-8 text-center" style={{ textAlign: "center" }}>



<h3 className="font-fjalla uppercase font-bold text-3xl md:text-5xl">

Collection

</h3>


<p className="uppercase tracking-[0.35em] text-xs text-[#C86B32] mt-3">

{active}

</p>

<div style={{ height: "20px" }} />




</div>









<AnimatePresence mode="wait">



<motion.div

key={active}

initial={{opacity:0,y:30}}

animate={{opacity:1,y:0}}

exit={{opacity:0}}

transition={{duration:.5}}

className="grid grid-cols-2 md:grid-cols-5 gap-x-3 md:gap-x-8 gap-y-6 md:gap-y-16"
>




{productData[active].map((item:any)=>{


const msg =
`Hello R.S Enterprise, I want quotation for ${item.name}`;


const url =
`https://wa.me/917455044231?text=${encodeURIComponent(msg)}`;




return(


<div key={item.name} className="group flex flex-col justify-between h-full">



<div className="relative w-full aspect-square overflow-hidden bg-white shadow-sm">



<Image

src={item.img}

alt={item.name}

fill

sizes="20vw"

className="object-cover transition duration-700 group-hover:scale-110"

/>



</div>





<h4 className="mt-2 md:mt-5 text-center uppercase tracking-[0.15em] text-[10px] md:text-xs font-bold min-h-[32px] flex items-center justify-center">

{item.name}

</h4>





<a

href={url}

target="_blank"

className="mt-2 md:mt-4 h-9 md:h-12 w-full border border-black/20 flex items-center justify-center uppercase tracking-[0.25em] text-[8px] md:text-[10px] transition duration-500 hover:bg-[#C86B32] hover:text-white hover:border-[#C86B32]"
>


Inquiry


</a>



</div>


)


})}




</motion.div>



</AnimatePresence>



</div>




  </div>
</section>

)

}