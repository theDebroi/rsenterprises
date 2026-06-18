"use client";

import dynamic from "next/dynamic";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/NavBar";

// Dynamically import to ensure GSAP/canvas only runs client-side
const HeroSection = dynamic(() => import("@/components/HeroSection"), {
  ssr: false,
});

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <main>
        <Navbar />
        <HeroSection />
      </main>
    </SmoothScroll>
  );
}
