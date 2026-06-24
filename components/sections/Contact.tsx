"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Mail, Phone, MapPin, Briefcase } from "lucide-react";

interface ContactCTAProps {
  defaultProduct?: string;
}

export default function ContactCTA({ defaultProduct }: ContactCTAProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectScope: "",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    let productParam = defaultProduct;
    if (!productParam && typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      productParam = params.get("product") || undefined;
    }

    if (productParam) {
      const normalized = productParam.toLowerCase();
      if (normalized.includes("elastic-tape") || normalized.includes("elastic tape")) {
        setFormData((prev) => ({ ...prev, projectScope: "elastic-tape" }));
      } else if (normalized.includes("webbing-tape") || normalized.includes("webbing tape")) {
        setFormData((prev) => ({ ...prev, projectScope: "webbing-tape" }));
      } else if (normalized.includes("jacquard")) {
        setFormData((prev) => ({ ...prev, projectScope: "jacquard-elastic" }));
      } else if (normalized.includes("custom") || normalized.includes("solutions")) {
        setFormData((prev) => ({ ...prev, projectScope: "custom-solutions" }));
      }
    }
  }, [defaultProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const categoryLabel = {
      "elastic-tape": "Elastic Tapes (Knitted/Woven)",
      "webbing-tape": "Webbing Tapes & Straps",
      "jacquard-elastic": "Jacquard Elastics",
      "custom-solutions": "Custom Solutions / OEM",
      "other": "Other / General Inquiry"
    }[formData.projectScope] || formData.projectScope || "General Inquiry";

    const msg = `Hello R.S Enterprise,\n\nI have submitted an inquiry via your website. Here are my details:\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Company:* ${formData.company}\n*Category:* ${categoryLabel}\n*Requirements:* ${formData.details}`;
    const waUrl = `https://wa.me/917455044231?text=${encodeURIComponent(msg)}`;

    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank");
    }
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        projectScope: "",
        details: "",
      });
    }, 1000);
  };

  return (
    <div id="contact-form" className="w-full bg-[#F5F5F7] text-[#080808] font-sans py-16 md:py-28 border-t border-black/10">
      <div className="w-full premium-padding-container grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">
        
        {/* Contact Details (Left Column) */}
        <div className="lg:col-span-1 space-y-8 md:space-y-10">
          <div>
            <h2 className="font-fjalla text-3xl md:text-7xl font-bold uppercase leading-none tracking-tight text-[#080808] mb-4 md:mb-6">
              LET'S CHAT
            </h2>
            <div style={{ height: "30px" }} />
            <p className="text-black/55 text-xs md:text-base leading-9 md:leading-7 max-w-sm">
              Have custom elastic tape requirements, or a specific webbing tape specification you need manufactured? Fill out the form or reach out directly, and our engineering team will get back to you within 24 hours.
            </p>
          </div>

          <div style={{ height: "50px" }} />
          <div className="space-y-6 pt-10 border-t border-black/10">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-none border border-black/10 flex items-center justify-center bg-white text-[#C86B32] shrink-0 mt-0.5 shadow-sm">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-[9px] md:text-[10px] tracking-widest uppercase text-neutral-400 font-sans">Sales Inquiry</h3>
                <a href="mailto:sales@rstapes.co.in" className="text-xs md:text-sm font-semibold hover:text-[#C86B32] transition duration-300 block mt-1 ">
                  sales@rstapes.co.in
                </a>
                <div style={{ height: "10px" }} />
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-none border border-black/10 flex items-center justify-center bg-white text-[#C86B32] shrink-0 mt-0.5 shadow-sm">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-[9px] md:text-[10px] tracking-widest uppercase text-neutral-400 font-sans">Call Operations</h3>
                <a href="tel:+917455044231" className="text-xs md:text-sm font-semibold hover:text-[#C86B32] transition duration-300 block mt-1">
                  +91 74550 44231
                </a>
                <a href="tel:+917455044232" className="text-xs md:text-sm font-semibold hover:text-[#C86B32] transition duration-300 block mt-1 mt-0.5">
                  +91 74550 44232
                </a>
              </div>
              
            </div>
            <div style={{ height: "10px" }} />
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-none border border-black/10 flex items-center justify-center bg-white text-[#C86B32] shrink-0 mt-0.5 shadow-sm">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-[9px] md:text-[10px] tracking-widest uppercase text-neutral-400 font-sans">Corporate Office</h3>
                <a 
                  href="https://www.google.com/maps/dir//RS+Enterprise,+%23112,+Sector+12-A+Halwai+ki+bagichi,+behind+Nirmal+Heights,+Building,+Agra,+Uttar+Pradesh+282002/@21.1648512,72.7908352,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39747799a303cbad:0x9ec76a167dae5e59!2m2!1d77.9794294!2d27.2026838?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm font-semibold text-neutral-800 hover:text-[#C86B32] transition duration-300 block mt-1 leading-relaxed"
                >
                  Plot No 112, Sector 12-A, Halwai ki Bagichi, Oppo. Basant garden, Agra-282010, U.P.
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-none border border-black/10 flex items-center justify-center bg-white text-[#C86B32] shrink-0 mt-0.5 shadow-sm">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-[9px] md:text-[10px] tracking-widest uppercase text-neutral-400 font-sans">Factory Unit</h3>
                <p className="text-xs md:text-sm font-semibold text-neutral-800 block mt-1 leading-relaxed">
                  #13 Sherjung, Agra-Mathura Road, Near Sherjung Dargah, Artoni, Agra-282001, U.P.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form / Success State (Right 2 Columns) */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="bg-white border border-black/5 p-8 md:p-12 text-center space-y-6 shadow-sm rounded-none"
              >
                <CheckCircle className="mx-auto text-emerald-500 w-14 h-14" />
                <h3 className="font-fjalla text-3xl uppercase tracking-tight text-neutral-900">
                  Inquiry Received
                </h3>
                <p className="text-neutral-500 max-w-md mx-auto text-sm leading-8">
                  Thank you for reaching out to R.S Enterprise. Our technical production team will review your tape specifications and get in touch with you shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-10 py-4 bg-black hover:bg-[#C86B32] text-white rounded-none text-xs uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-black text-neutral-400 mb-2 font-sans">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-[56px] px-5 bg-white border border-black/10 rounded-none text-sm focus:outline-none focus:border-[#C86B32] text-[#080808] font-sans transition duration-300 placeholder-neutral-300 focus:shadow-[0_0_15px_rgba(200,107,50,0.05)]"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-black text-neutral-400 mb-2 font-sans">
                      Corporate Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-[56px] px-5 bg-white border border-black/10 rounded-none text-sm focus:outline-none focus:border-[#C86B32] text-[#080808] font-sans transition duration-300 placeholder-neutral-300 focus:shadow-[0_0_15px_rgba(200,107,50,0.05)]"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-black text-neutral-400 mb-2 font-sans">
                      Company Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full h-[56px] px-5 bg-white border border-black/10 rounded-none text-sm focus:outline-none focus:border-[#C86B32] text-[#080808] font-sans transition duration-300 placeholder-neutral-300 focus:shadow-[0_0_15px_rgba(200,107,50,0.05)]"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-black text-neutral-400 mb-2 font-sans">
                      Inquiry Category
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formData.projectScope}
                        onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                        className="w-full h-[56px] px-5 bg-white border border-black/10 rounded-none text-sm focus:outline-none focus:border-[#C86B32] text-[#080808] font-sans transition duration-300 appearance-none cursor-pointer"
                      >
                        <option value="">Select Category</option>
                        <option value="elastic-tape">Elastic Tapes (Knitted/Woven)</option>
                        <option value="webbing-tape">Webbing Tapes & Straps</option>
                        <option value="jacquard-elastic">Jacquard Elastics</option>
                        <option value="custom-solutions">Custom Solutions / OEM</option>
                        <option value="other">Other / General Inquiry</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                        <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-black text-neutral-400 mb-2 font-sans">
                    Requirements Details
                  </label>
                  <textarea
                    rows={6}
                    required
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-5 py-4 bg-white border border-black/10 rounded-none text-sm focus:outline-none focus:border-[#C86B32] text-[#080808] resize-none font-sans transition duration-300 placeholder-neutral-300 focus:shadow-[0_0_15px_rgba(200,107,50,0.05)]"
                    placeholder="Tell us what size, width, stretch coefficient, or raw materials you require..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-[64px] bg-black hover:bg-[#C86B32] text-white font-bold rounded-none text-xs uppercase tracking-[0.25em] transition-all duration-500 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 shadow-md hover:shadow-lg active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}