import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "R.S Enterprise — Elastic Tapes & Webbing Solutions",
  description:
    "High-performance elastic tapes and webbing solutions crafted with innovation, quality and precision since 2006.",
  keywords: ["elastic tape", "webbing", "textile manufacturer", "RS Enterprise", "India"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-[#faf9f6] text-[#111]">{children}</body>
    </html>
  );
}
