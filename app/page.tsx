"use client";

import dynamic from "next/dynamic";

import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

import Navbar from "@/components/NavBar";
import AboutSection from "@/components/sections/About";
import CatalogSection from "@/components/sections/Catalogue";
import QualitySection from "@/components/sections/Quality";
import Footer from "@/components/Footer";
import ManufacturingSection from "@/components/sections/Manufacturing";
import GlobalReach from "@/components/sections/GlobalPresence";
import { Contact } from "lucide-react";
import ContactCTA from "@/components/sections/Contact";


const HeroSection = dynamic(
  () => import("@/components/HeroSection"),
  {
    ssr: false,
  }
);


export default function Home() {
  return (
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

        <AboutSection />

        <CatalogSection />

        <QualitySection />

        <ManufacturingSection />

        <GlobalReach />

        <ContactCTA />

        <Footer />


      </main>

    </SmoothScroll>
  );
}