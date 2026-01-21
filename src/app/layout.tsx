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
  title: "SmartPetLab | High-Tech Pet Care Reviews",
  description: "Expert reviews and guides on the latest smart pet technology, GPS trackers, automatic feeders, and wellness gadgets.",
};

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SmartPetLab",
              url: "https://smartpetlab.vercel.app",
              logo: "https://smartpetlab.vercel.app/logo.png",
              sameAs: [
                "https://twitter.com/smartpetlab",
                "https://facebook.com/smartpetlab",
              ],
            }),
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
