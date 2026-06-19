"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

interface Product {
  name: string;
  description: string;
  img: string;
  specs: string[];
}

interface CategoryData {
  title: string;
  description: string;
  products: Product[];
}

const categoryData: Record<string, CategoryData> = {
  "elastic-tape": {
    title: "Elastic Tape",
    description: "Engineered for durability and consistent tension calibration. Our industrial elastic tapes are manufactured with high-grade heat-resistant latex/spandex thread cores and premium polyester/nylon yarns to serve the apparel, medical, and industrial sectors.",
    products: [
      {
        name: "Woven Elastic Tape",
        description: "Heavy-duty woven elastic designed for maximum width retention and durability. Ideal for heavy waistbands, luggage straps, and medical braces.",
        img: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800",
        specs: ["Widths: 10mm to 100mm", "Heat resistant rubber core", "Polyester / Nylon wrap"]
      },
      {
        name: "Knitted Elastic Tape",
        description: "Lightweight, soft, and breathable elastic with excellent stretch recovery. Best suited for intimates, casual wear, and medical disposable masks.",
        img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800",
        specs: ["Soft-touch finish", "Widths: 3mm to 50mm", "Spandex or natural latex cores"]
      },
      {
        name: "Printed / Sublimated Elastic",
        description: "Premium brand identity elastics with high-resolution custom logo printing. Colorfast, wash-proof, and soft against the skin.",
        img: "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=800",
        specs: ["Custom sublimation printing", "Wash-resistant dyes", "Apparel waistbands"]
      }
    ]
  },
  "webbing-tape": {
    title: "Webbing Tape",
    description: "High-tensile woven webbings designed for safety, industrial rigging, logistics, and premium military-spec gear. Constructed with high-tenacity polypropylene, polyester, and nylon yarns.",
    products: [
      {
        name: "Heavy-Duty Polyester Webbing",
        description: "Ultra-low stretch webbing with extreme tensile strength and UV resistance. Engineered for transport strapping, safety harness construction, and heavy rigging.",
        img: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=800",
        specs: ["High tensile load capacity", "Low water absorption", "UV and abrasion resistant"]
      },
      {
        name: "High-Tenacity Nylon Webbing",
        description: "Soft, flexible, and extremely strong webbing designed for heavy tactical gear, climbing harnesses, and safety tethers.",
        img: "https://images.unsplash.com/photo-1517462964-21fdcec3f25b?q=80&w=800",
        specs: ["Excellent shock absorption", "High breaking strength", "Military-spec options available"]
      },
      {
        name: "Polypropylene Webbing",
        description: "Lightweight, water-resistant, and cost-effective webbing. Perfect for outdoor bags, life jackets, dog leashes, and utility straps.",
        img: "https://images.unsplash.com/photo-1531844251246-9a1bfaae0d76?q=80&w=800",
        specs: ["Floats in water", "Chemical resistant", "A wide variety of stock colors"]
      }
    ]
  },
  "jacquard-elastic": {
    title: "Jacquard Elastic",
    description: "Premium woven elastic bands with textured, complex patterns and branded logos. Manufactured using high-tech computerized loom selectors for intricate designs that retain clarity under maximum stretch.",
    products: [
      {
        name: "Branded Logo Jacquard",
        description: "Authority waistband elastics for premium undergarments, athletic shorts, and activewear. Exact color matching and high-definition lettering.",
        img: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=800",
        specs: ["Custom computerized logo weaving", "Oeko-Tex certified yarns", "Non-roll structural edges"]
      },
      {
        name: "Patterned Geometric Elastic",
        description: "Intricately woven design patterns, including chevrons, stripes, and custom textures. Adds high visual and tactile value to garments.",
        img: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800",
        specs: ["Multi-color jacquard options", "Textured mesh weaves", "Garment accents"]
      },
      {
        name: "Double-Sided Jacquard",
        description: "Reversible elastic bands woven with complementary colors or designs on front and back. Perfect for unlined outerwear and sportswear.",
        img: "https://images.unsplash.com/photo-1475813669645-113ebd92e40a?q=80&w=800",
        specs: ["Reversible dual patterns", "Premium heavy-weight feel", "Ideal for collars and cuffs"]
      }
    ]
  },
  "custom-solutions": {
    title: "Custom Solutions",
    description: "Bespoke textile engineering for custom performance specifications, extreme environments, and specialty medical orthotics. We customize weave structures, core diameters, and finishes.",
    products: [
      {
        name: "Flame-Retardant Webbing & Elastic",
        description: "Specially treated fire-resistant webbing and elastic bands designed for protective industrial apparel, firefighter gear, and aerospace equipment.",
        img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=800",
        specs: ["Self-extinguishing fiber properties", "Certified fire protection standard", "Retains stretch under heat"]
      },
      {
        name: "Silicone-Coated Anti-Slip Elastic",
        description: "Elastic bands with wavy or continuous silicone gel backing. Prevents riding up and sliding in cycling apparel, medical braces, and sports socks.",
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800",
        specs: ["Medical-grade silicone coating", "Custom gel patterns", "Anti-skid grip durability"]
      },
      {
        name: "Orthopedic & Medical Webbings",
        description: "Hypoallergenic, skin-friendly, and breathable weaves designed for orthopedic supports, patient restraints, and compression braces.",
        img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800",
        specs: ["Hypoallergenic wash-friendly", "Breathable comfort structures", "High-recovery tension loops"]
      }
    ]
  }
};

interface PageProps {
  params: Promise<{ category: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const categorySlug = resolvedParams.category;
  const data = categoryData[categorySlug];

  if (!data) {
    return (
      <div className="min-h-screen bg-[#F5F5F7] text-[#080808] flex flex-col justify-between">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center p-8 mt-24">
          <h1 className="font-fjalla text-6xl uppercase text-[#C86B32] mb-6">Category Not Found</h1>
          <p className="text-neutral-500 mb-10">The category you are looking for does not exist.</p>
          <Link href="/" className="px-8 py-4 bg-black text-white uppercase text-xs tracking-widest hover:bg-[#C86B32] transition duration-300">
            Return Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#080808] flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6 md:px-[6vw] lg:px-[8vw] max-w-[1500px] mx-auto w-full">
        {/* BACK TO CATALOGUE */}
        <div className="mb-12">
          <Link href="/#catalogue" className="inline-flex items-center gap-3 text-neutral-500 hover:text-black transition-colors duration-300 uppercase tracking-widest text-[10px] font-bold">
            <ArrowLeft size={16} /> Back to Catalogue
          </Link>
        </div>

        {/* HERO TITLE */}
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-20 mb-20 border-b border-black/10 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#C86B32] text-xs uppercase tracking-[0.45em] mb-4 font-bold">
              Product Category
            </p>
            <h1 className="font-fjalla text-6xl md:text-8xl uppercase leading-none tracking-tight">
              {data.title}
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex items-end"
          >
            <p className="text-lg leading-8 text-neutral-500">
              {data.description}
            </p>
          </motion.div>
        </div>

        {/* PRODUCTS LIST */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {data.products.map((product, idx) => {
            const waMessage = `Hello R.S Enterprise, I am interested in obtaining a quote for ${data.title} - ${product.name}.`;
            const waUrl = `https://wa.me/919837050515?text=${encodeURIComponent(waMessage)}`;

            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="bg-white border border-black/5 flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {/* IMAGE */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={product.img}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>

                  {/* INFO */}
                  <div className="p-8">
                    <h3 className="font-fjalla text-3xl uppercase mb-4 group-hover:text-[#C86B32] transition-colors duration-300">
                      {product.name}
                    </h3>
                    
                    <p className="text-sm leading-6 text-neutral-500 mb-6">
                      {product.description}
                    </p>

                    {/* SPECS */}
                    <div className="space-y-2 border-t border-black/5 pt-6">
                      <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-400 mb-2">Technical Specifications</p>
                      {product.specs.map((spec) => (
                        <div key={spec} className="flex items-center gap-3 text-xs text-neutral-700">
                          <CheckCircle2 size={14} className="text-[#C86B32] shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTAS */}
                <div className="p-8 pt-0 grid grid-cols-1 gap-3">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-full
                      h-[56px]
                      bg-[#C86B32]
                      text-white
                      uppercase
                      tracking-[0.2em]
                      text-[10px]
                      font-bold
                      flex items-center justify-center
                      gap-2
                      transition
                      duration-500
                      hover:bg-black
                    "
                  >
                    Inquire on WhatsApp
                    <ArrowUpRight size={14} />
                  </a>

                  <Link
                    href={`/contact?product=${encodeURIComponent(product.name)}`}
                    className="
                      w-full
                      h-[56px]
                      border
                      border-black/20
                      text-black
                      uppercase
                      tracking-[0.2em]
                      text-[10px]
                      font-bold
                      flex items-center justify-center
                      transition
                      duration-500
                      hover:bg-black
                      hover:text-white
                    "
                  >
                    Request custom quote
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
