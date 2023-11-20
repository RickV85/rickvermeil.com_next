import type { Metadata } from "next";
import {
  Inter,
  Bitter,
  Permanent_Marker,
  Baloo_Chettan_2,
  Dosis,
  Passion_One,
} from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const bitter = Bitter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bitter",
});

export const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-permanent-marker",
});

export const baloo = Baloo_Chettan_2({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-baloo",
});

export const dosis = Dosis({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dosis",
});

export const passionOne = Passion_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-passion-one",
});

export const metadata: Metadata = {
  title: "Rick Vermeil | Software Engineer",
  description:
    "Specializing in React.js, Next.js, JavaScript, TypeScript, Node.js and other modern development tools. Explore my portfolio to see software projects, my resume, and learn about my personal interests in climbing, mountain biking, and snowboarding.",
  keywords:
    "Rick Vermeil, Frontend Developer, Software Engineer, React, Next.js, JavaScript, TypeScript, Node.js, Climbing, Mountain Biking, Snowboarding",
  robots: "index, follow",
  other: {
    author: "Rick Vermeil",
    favicon: "Icons8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${inter.className}
        ${bitter.variable}
        ${permanentMarker.variable}
        ${baloo.variable}
        ${dosis.variable}
        ${passionOne.variable}
      `}
    >
      <body className="flex flex-col items-center">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
