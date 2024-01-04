import type { Metadata } from "next";
import {
  Inter,
  Bitter,
  Permanent_Marker,
  Baloo_Chettan_2,
  Dosis,
  Passion_One,
  Raleway,
  Fugaz_One
} from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const bitter = Bitter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bitter",
  preload: true
});

export const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-permanent-marker",
  preload: true
});

export const baloo = Baloo_Chettan_2({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-baloo",
  preload: true
});

export const dosis = Dosis({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dosis",
  preload: true
});

export const passionOne = Passion_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-passion-one",
  preload: true
});

export const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  preload: true
});

export const fugazOne = Fugaz_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-fugaz",
  preload: true
})

export const metadata: Metadata = {
  title: "Rick Vermeil | Software Developer",
  description:
    "Specializing in React.js, Next.js, JavaScript, TypeScript, Node.js and other modern development tools. Explore my portfolio to see software projects, my resume, and learn about my personal interests in climbing, mountain biking, and snowboarding.",
  keywords:
    "Rick Vermeil, Frontend Developer, Software Developer, React, Next.js, JavaScript, TypeScript, Node.js, Climbing, Mountain Biking, Snowboarding",
  robots: "index, follow",
  openGraph: {
    title: "Rick Vermeil Portfolio Site",
    description:
      "Specializing in React.js, Next.js, JavaScript, TypeScript, Node.js and other modern development tools. Explore my portfolio to see software projects, my resume, and learn about my personal interests in climbing, mountain biking, and snowboarding.",
    url: "https://www.rickvermeil.com",
    type: "website",
    images: "https://www.rickvermeil.com/crestprofilepic_webres.webp",
    locale: "en_US",
  },
  other: {
    author: "Rick Vermeil",
    favicon: "Icons8",
    canonical: "https://www.rickvermeil.com/",
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
        ${raleway.variable}
        ${fugazOne.variable}
      `}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
