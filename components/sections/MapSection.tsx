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
      <div className="w-full premium-padding-container flex flex-col items-center justify-center">
        {/* Section Header: Centered */}
        <div className="w-full flex flex-col items-center justify-center text-center mb-12 gap-4">
          <p className="text-[#C86B32] tracking-[0.45em] uppercase text-base md:text-lg font-semibold text-center">
            Find Our Facility
          </p>
          <h2 className="font-fjalla font-bold text-3xl md:text-5xl uppercase leading-none tracking-tight text-center">
            Corporate Headquarters
          </h2>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#C86B32] text-white px-6 py-4 text-xs uppercase tracking-widest font-bold transition duration-300 hover:bg-black shadow-lg mt-4"
          >
            <Navigation className="w-4 h-4" />
            Get Directions
          </a>
        </div>

        <div style={{ height: "40px" }} />

        {/* MAP CONTAINER: Centered and Rounded */}
        <div className="w-full flex justify-center items-center mx-auto">
          <div className="relative w-full max-w-[1000px] h-[400px] md:h-[500px] border border-black/15 bg-white shadow-sm overflow-hidden rounded-2xl mx-auto">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* ADDRESS INFO BAR: Centered */}
        <div className="w-full flex justify-center items-center mt-8 mx-auto">
          <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-black/10 text-xs md:text-sm uppercase tracking-[0.15em] font-bold text-neutral-500 font-sans text-center mx-auto">
            <div>
              <span className="text-[#C86B32] block mb-1">Corporate Office</span>
              <span className="text-[#080808] normal-case font-semibold">
                Plot No 112, Sector 12-A, Halwai ki Bagichi, Oppo. Basant garden, Agra-282010, U.P.
              </span>
            </div>
            <div className="md:text-right text-center">
              <span className="text-[#C86B32] block mb-1">Factory Unit</span>
              <span className="text-[#080808] normal-case font-semibold">
                #13 Sherjung, Agra-Mathura Road, Near Sherjung Dargah, Artoni, Agra-282001, U.P.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
