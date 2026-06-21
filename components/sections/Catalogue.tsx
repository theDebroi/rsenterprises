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
{name:"Multicolored Elastic",img:"/elastic/Multicolored.png"},
{name:"Honeycomb Elastic Tape",img:"/elastic/Honeycomb.png"},
{name:"Lurex Elastic",img:"/elastic/lurex.png"},
{name:"Ribbed Elastic",img:"/elastic/ribbed.png"},
{name:"Sandwich Elastic",img:"/elastic/sandwitch.png"},
{name:"Laces Elastic",img:"/elastic/laces.png"},
],

webbing:[
{name:"Nylon Webbing",img:"/web1.jpg"},
{name:"Polyester Webbing",img:"/web2.jpg"},
{name:"Bag Webbing",img:"/web3.jpg"},
{name:"Safety Webbing",img:"/web4.jpg"},
{name:"Colored Webbing",img:"/web5.jpg"},
],

jacquard:[
{name:"Logo Jacquard",img:"/jac1.jpg"},
{name:"Fashion Elastic",img:"/jac2.jpg"},
{name:"Pattern Elastic",img:"/jac3.jpg"},
{name:"Designer Tape",img:"/jac4.jpg"},
{name:"Premium Jacquard",img:"/jac5.jpg"},
],

custom:[
{name:"Custom Width Tape",img:"/custom1.jpg"},
{name:"Brand Label Elastic",img:"/custom2.jpg"},
{name:"Special Material",img:"/custom3.jpg"},
{name:"OEM Production",img:"/custom4.jpg"},
{name:"Custom Colors",img:"/custom5.jpg"},
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
className="w-full bg-[#F5F5F7] text-[#080808] py-32 overflow-hidden"
>



{/* HEADER */}


<div className="text-center mb-24">


<p className="text-[#C86B32] tracking-[0.45em] uppercase text-xs mb-6">

Our Catalogue

</p>



<h2 className="font-fjalla text-6xl md:text-8xl uppercase leading-none">

Engineered

<br/>

Products

</h2>


</div>







{/* CATEGORY */}


<div className="grid grid-cols-1 md:grid-cols-4 border-y border-black/10">


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

className="group cursor-pointer p-10 md:border-r border-black/10 last:border-r-0"
>



<div className="relative aspect-square overflow-hidden bg-white">


<Image

src={item.img}

alt={item.name}

fill

sizes="25vw"

className="object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"

/>


</div>



<h3 className="font-fjalla text-center uppercase text-4xl mt-8">

{item.name}

</h3>



</motion.div>


))}


</div>









{/* SCROLL TARGET */}

<div ref={productRef} className="h-1"></div>









{/* PRODUCTS */}


<div className="mt-40 px-6 lg:px-20">



<div className="flex justify-between items-center mb-16">



<h3 className="font-fjalla uppercase text-6xl">

Collection

</h3>



<p className="uppercase tracking-[0.35em] text-xs text-[#C86B32]">

{active}

</p>



</div>









<AnimatePresence mode="wait">



<motion.div

key={active}

initial={{opacity:0,y:30}}

animate={{opacity:1,y:0}}

exit={{opacity:0}}

transition={{duration:.5}}

className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-16"
>




{productData[active].map((item:any)=>{


const msg =
`Hello R.S Enterprise, I want quotation for ${item.name}`;


const url =
`https://wa.me/919837050515?text=${encodeURIComponent(msg)}`;




return(


<div key={item.name} className="group">



<div className="relative aspect-square overflow-hidden bg-white shadow-sm">



<Image

src={item.img}

alt={item.name}

fill

sizes="20vw"

className="object-cover grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0"

/>



</div>





<h4 className="mt-5 text-center uppercase tracking-[0.15em] text-xs font-bold">

{item.name}

</h4>





<a

href={url}

target="_blank"

className="mt-4 h-12 w-full border border-black/20 flex items-center justify-center uppercase tracking-[0.25em] text-[10px] transition duration-500 hover:bg-[#C86B32] hover:text-white hover:border-[#C86B32]"
>


Inquiry


</a>



</div>


)


})}




</motion.div>



</AnimatePresence>



</div>




</section>

)

}