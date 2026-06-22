"use client";

import React from "react";
import Link from "next/link";

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
        
        {/* TOP: HUGE BRAND TYPOGRAPHY */}
        <div className="mb-20">
          <h2
            className="
              font-fjalla
              text-[12vw]
              md:text-[8rem]
              lg:text-[10rem]
              uppercase
              leading-[0.8]
              tracking-[-0.04em]
            "
          >
            R.S
            <br />
            ENTERPRISE
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
                  className="hover:text-[#C86B32] transition-colors duration-300 block"
                >
                  Agra, Uttar Pradesh, India
                </a>
              </p>
              <p>
                <a href="mailto:info@rsenterprise.com" className="hover:text-[#C86B32] transition-colors duration-300">
                  info@rsenterprise.com
                </a>
              </p>
              <p>
                <a href="tel:+447455044231" className="hover:text-[#C86B32] transition-colors duration-300">
                  074550 44231
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