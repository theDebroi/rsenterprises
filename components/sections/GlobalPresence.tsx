"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ThreeGlobe from "three-globe";



const countries = [
  "India",
  "UAE",
  "Germany",
  "France",
  "USA",
  "Japan",
  "Singapore",
  "Australia",
];



const locations = [
  { lat:28.6, lng:77.2, size:.5, color:"#C86B32" },
  { lat:25.2, lng:55.3, size:.4, color:"#C86B32" },
  { lat:51.5, lng:-0.1, size:.4, color:"#C86B32" },
  { lat:52.5, lng:13.4, size:.4, color:"#C86B32" },
  { lat:40.7, lng:-74, size:.4, color:"#C86B32" },
  { lat:35.6, lng:139.6, size:.4, color:"#C86B32" },
];






function GlobeModel(){


const globeRef =
useRef<any>(null);



useEffect(()=>{


if(!globeRef.current) return;



globeRef.current

.globeImageUrl(
"//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
)

.bumpImageUrl(
"//unpkg.com/three-globe/example/img/earth-topology.png"
)

.pointsData(locations)

.pointAltitude(0.06)

.pointRadius("size")

.pointColor("color");


},[]);




useFrame(()=>{


if(globeRef.current){

globeRef.current.rotation.y +=0.003;

}


});




return(

<primitive

ref={globeRef}

object={new ThreeGlobe()}

scale={2.8}

/>

);


}








function PremiumGlobe(){


return(

<div
className="
relative

flex
flex-col

items-center

justify-center
w-full
"
>



<div
className="
hidden md:block
w-full max-w-[820px]
h-[720px]
"
>


<Canvas

camera={{

position:[0,0,430],

fov:42

}}

>


<ambientLight intensity={2.5}/>


<directionalLight

position={[5,3,5]}

intensity={1.5}

/>


<GlobeModel/>


<OrbitControls

enableZoom={false}

enablePan={false}

enableRotate={false}

/>


</Canvas>


</div>







{/* COUNTRY LIST */}


<div
className="
flex

flex-wrap

justify-center

gap-x-8

gap-y-4

max-w-[650px]

md:border-t

border-black/10

pt-4
md:pt-8
w-full
"
>


{
countries.map((item)=>(


<span

key={item}

className="
uppercase

text-[10px] md:text-xs

tracking-[0.35em]

text-black/50

hover:text-[#C86B32]

transition
"

>

{item}

</span>


))

}


</div>




</div>


)

}










export default function GlobalReach(){


return(

<section
className="
min-h-screen

w-full

bg-[#F5F5F7]

px-8
lg:px-24

flex

items-center

overflow-hidden
"
>


<div
className="
w-full

grid

grid-cols-1

lg:grid-cols-[40%_60%]

items-center

gap-20
"
>



<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{duration:1}}

viewport={{once:true}}

>


<p
className="
uppercase

tracking-[0.45em]

text-xs

text-[#C86B32]

mb-8
"
>

Global Network

</p>



          <h2
            className="
              font-fjalla
              text-4xl
              md:text-[9rem]
              uppercase
              leading-[0.9]
            "
          >

Trusted

<br/>

Across

<br/>

Borders

</h2>




<p
className="
mt-10

max-w-lg

text-lg

leading-8

text-black/50
"
>

Supplying premium elastic tapes and webbing
solutions to international manufacturers.

</p>


</motion.div>






<motion.div

initial={{opacity:0,scale:.9}}

whileInView={{opacity:1,scale:1}}

transition={{duration:1}}

viewport={{once:true}}

className="
flex

justify-center
"

>


<PremiumGlobe/>


</motion.div>




</div>


</section>

)

}