import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { inject } from '@vercel/analytics';
 
inject();

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rick Vermeil | Software Engineer',
  description: 'Specializing in React.js, Next.js, JavaScript, TypeScript, Node.js and other modern development tools. Explore my portfolio to see software projects, my resume, and learn about my personal interests in climbing, mountain biking, and snowboarding.',
  keywords: 'Rick Vermeil, Frontend Developer, Software Engineer, React, Next.js, JavaScript, TypeScript, Node.js, Climbing, Mountain Biking, Snowboarding',
  robots: "index, follow",
  other: {
    author: "Rick Vermeil",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
