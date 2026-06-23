import type { Metadata } from "next";
import "./globals.css";
import React from "react";


export const metadata: Metadata = {
  title: "R.S Enterprise — Elastic Tapes & Webbing Solutions",

  description:
    "High-performance elastic tapes and webbing solutions crafted with innovation, quality and precision since 2006.",

  keywords: [
    "elastic tape",
    "webbing",
    "textile manufacturer",
    "RS Enterprise",
    "India",
  ],

  icons: {
    icon: "/icon.png",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (

    <html
      lang="en"
      className="antialiased"
    >

      <head>

        <link
          rel="icon"
          href="/icon.png"
          type="image/png"
        />


        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />


        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />


        <link
          href="
          https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Puritan:wght@400;700&display=swap
          "
          rel="stylesheet"
        />


      </head>




      <body
        className="
          bg-[#e2e1dc]
          text-[#111]

          min-h-screen

          p-4
          md:p-8
          lg:p-10
        "
      >



        {/* WEBSITE OUTER CARD */}
        <main
          className="
            relative

            w-full

            min-h-screen

            rounded-[28px]

            border
            border-black/15

            bg-[#faf9f6]

            shadow-2xl

            overflow-hidden
          "
        >



          {/* CENTER ALIGNMENT FIX */}
          <div
            className="
              w-full

              mx-auto

              flex
              flex-col
            "
          >


            {children}


          </div>



        </main>



      </body>


    </html>

  );
}