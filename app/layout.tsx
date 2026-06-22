import type { Metadata } from "next"; // Wait, Metadata is type import, let's keep it clean
import "./globals.css";
import React from 'react';

export const metadata: Metadata = {
  title: "R.S Enterprise — Elastic Tapes & Webbing Solutions",
  description:
    "High-performance elastic tapes and webbing solutions crafted with innovation, quality and precision since 2006.",
  keywords: ["elastic tape", "webbing", "textile manufacturer", "RS Enterprise", "India"],
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className="antialiased"
    >
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Marcellus&family=Playfair+Display:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#faf9f6] text-[#111]">{children}</body>
    </html>
  );
}
