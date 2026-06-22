"use client";

import React from "react";
import { Navigation } from "lucide-react";

export default function MapSection() {
  const mapUrl =
    "https://www.google.com/maps/dir//RS+Enterprise,+%23112,+Sector+12-A+Halwai+ki+bagichi,+behind+Nirmal+Heights,+Building,+Agra,+Uttar+Pradesh+282002/@21.1648512,72.7908352,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39747799a303cbad:0x9ec76a167dae5e59!2m2!1d77.9794294!2d27.2026838?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D";

  const embedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.916327339794!2d77.9768544769062!3d27.20268377648356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747799a303cbad%3A0x9ec76a167dae5e59!2sRS%20Enterprise!5e0!3m2!1sen!2sin!4v1719000000000!5m2!1sen!2sin";

  return (
    <section
      id="map-section"
      className="w-full bg-[#F5F5F7] text-[#080808] py-16 md:py-24 border-t border-black/10 overflow-hidden"
    >
      <div className="w-full px-6 md:px-8 lg:px-20 max-w-[1400px] mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[#C86B32] tracking-[0.45em] uppercase text-xs mb-3 font-semibold">
              Find Our Facility
            </p>
            <h2 className="font-fjalla text-4xl md:text-6xl uppercase leading-none tracking-tight">
              Corporate Headquarters
            </h2>
          </div>
          <div>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#C86B32] text-white px-6 py-4 text-xs uppercase tracking-widest font-bold transition duration-300 hover:bg-black shadow-lg"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>

        {/* MAP CONTAINER */}
        <div className="relative w-full h-[400px] md:h-[500px] border border-black/15 bg-white shadow-sm overflow-hidden">
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[15%] contrast-[110%]"
          />
        </div>

        {/* ADDRESS INFO BAR */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-black/10 text-xs md:text-sm uppercase tracking-[0.15em] font-bold text-neutral-500 font-sans">
          <div>
            <span className="text-[#C86B32] block mb-1">HQ Address</span>
            <span className="text-[#080808]">
              #112, Sector 12-A Halwai ki bagichi, behind Nirmal Heights, Agra, UP, India
            </span>
          </div>
          <div className="md:text-right">
            <span className="text-[#C86B32] block mb-1">Operational Hours</span>
            <span className="text-[#080808]">Mon - Sat: 09:00 AM - 07:00 PM (IST)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
