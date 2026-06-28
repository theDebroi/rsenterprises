"use client";

import dynamic from "next/dynamic";

import CustomCursor from "../components/CustomCursor";
import SmoothScroll from "../components/SmoothScroll";

import Navbar from "../components/NavBar";

import AboutSection from "../components/sections/About";
import CompanyTimeline from "../components/sections/Timeline";
import CatalogSection from "../components/sections/Catalogue";
import QualitySection from "../components/sections/Quality";
import QualityCertifications from "../components/sections/QualityCertifications";
import CataloguesSection from "../components/sections/CataloguesSection";
import ManufacturingSection from "../components/sections/Manufacturing";
import ContactCTA from "../components/sections/Contact";
import MapSection from "../components/sections/MapSection";
import ClientsSection from "@/components/sections/Clients";

import Footer from "../components/Footer";

// HERO CLIENT IMPORT

const HeroSection = dynamic(
  () => import("../components/HeroSection"),
  {
    ssr:false,
  }
);

// GLOBAL REACH CLIENT IMPORT
const GlobalReach = dynamic(
  () => import("../components/sections/GlobalPresence"),
  {
    ssr:false,
  }
);





export default function Home() {


return(

<SmoothScroll>


<CustomCursor />



<main

className="
relative

w-full

min-h-screen

overflow-hidden

bg-[#F5F5F7]
"

>



<Navbar />



<HeroSection />





<SectionGap />


<AboutSection />



<SectionGap />


<CompanyTimeline />


<SectionGap />


<CatalogSection />

<SectionGap />


<CataloguesSection />



<SectionGap />


<QualitySection />



<SectionGap />


<QualityCertifications />




<SectionGap />

<ClientsSection />





<SectionGap />




<GlobalReach />








<SectionGap />


<ContactCTA />




<SectionGap />


<MapSection />




<SectionGap />


<Footer />





</main>




</SmoothScroll>


);


}









/* 
 PREMIUM APPLE STYLE SECTION SEPARATOR
*/



function SectionGap(){


return(


<section

className="
w-full

h-[220px]

bg-[#F5F5F7]


flex

items-center

justify-center
"

>



<div

className="
relative

w-[75%]

flex

items-center

justify-center
"

>




<div

className="
absolute

h-px

w-full


bg-gradient-to-r


from-transparent

via-black/15

to-transparent

"

/>




<div

className="
w-3

h-3

rounded-full


bg-[#C86B32]


shadow-[0_0_30px_rgba(200,107,50,0.35)]
"

/>




</div>





</section>


)


}