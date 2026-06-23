"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const navigationLinks = [
  { name: "About", href: "/#about" },
  { name: "Quality", href: "/#quality" },
  { name: "Catalogue", href: "/#catalogue" },
  { name: "Contact", href: "/#contact-form" },
];

const productLinks = [
  { name: "Elastic Tape", href: "/#catalogue" },
  { name: "Webbing Tape", href: "/#catalogue" },
  { name: "Jacquard Elastic", href: "/#catalogue" },
  { name: "Custom Solutions", href: "/#catalogue" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#F5F5F7] text-[#080808] px-6 md:px-[6vw] lg:px-[8vw] pt-24 pb-12 overflow-hidden border-t border-black/5">
      <div className="max-w-[1500px] mx-auto">
        
        {/* TOP: BRAND LOGO & COMPACT TEXT */}
        <div className="mb-14 space-y-4">
          <div className="relative w-[240px] h-[75px] md:w-[320px] md:h-[100px]">
            <Image
              src="/icon.png"
              alt="R.S. Enterprise Logo"
              fill
              sizes="(max-width: 768px) 240px, 320px"
              className="object-contain"
            />
          </div>
          <h2
            className="
              font-sans
              text-xs
              md:text-sm
              font-bold
              uppercase
              tracking-[0.4em]
              text-neutral-400
            "
          >
            R.S ENTERPRISE
          </h2>
        </div>

        {/* MIDDLE: 3 CLEAN COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-black/10 pt-16 mb-20">
          
          {/* COLUMN 1: NAVIGATION */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400 mb-8">
              Navigation
            </h3>
            <ul className="space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base font-semibold hover:text-[#C86B32] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 2: PRODUCTS */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400 mb-8">
              Products
            </h3>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base font-semibold hover:text-[#C86B32] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CONTACT */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400 mb-8">
              Contact Operations
            </h3>
            <div className="space-y-4 text-base font-semibold">
              <p>
                <a 
                  href="https://www.google.com/maps/dir//RS+Enterprise,+%23112,+Sector+12-A+Halwai+ki+bagichi,+behind+Nirmal+Heights,+Building,+Agra,+Uttar+Pradesh+282002/@21.1648512,72.7908352,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39747799a303cbad:0x9ec76a167dae5e59!2m2!1d77.9794294!2d27.2026838?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C86B32] transition-colors duration-300 block leading-relaxed text-sm"
                >
                  Office: Plot No 112, Sector 12-A, Halwai ki Bagichi, Agra, U.P.
                </a>
              </p>
              <p className="text-neutral-500 font-normal leading-relaxed text-[13px] md:text-sm">
                Factory: #13 Sherjung, Agra-Mathura Road, Artoni, Agra, U.P.
              </p>
              <p>
                <a href="mailto:sales@rstapes.co.in" className="hover:text-[#C86B32] transition-colors duration-300 text-sm">
                  sales@rstapes.co.in
                </a>
              </p>
              <p className="flex flex-col gap-1 text-sm">
                <a href="tel:+917455044231" className="hover:text-[#C86B32] transition-colors duration-300">
                  +91 74550 44231
                </a>
                <a href="tel:+917455044232" className="hover:text-[#C86B32] transition-colors duration-300">
                  +91 74550 44232
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM: THIN DIVIDER & TEXT */}
        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs uppercase tracking-[0.2em] font-semibold text-neutral-400">
          <p>© R.S Enterprise</p>
          <p>Since 2006</p>
          <p>Precision Textile Manufacturing</p>
        </div>

      </div>
    </footer>
  );
}