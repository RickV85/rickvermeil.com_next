import type { Metadata } from 'next'
import { Inter, Bitter } from 'next/font/google'
import './globals.css'
import { inject } from '@vercel/analytics';
 
inject();

const inter = Inter({ subsets: ['latin'] })

export const bitter = Bitter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bitter'
})

export const metadata: Metadata = {
  title: 'Rick Vermeil | Software Engineer',
  description: 'Specializing in React.js, Next.js, JavaScript, TypeScript, Node.js and other modern development tools. Explore my portfolio to see software projects, my resume, and learn about my personal interests in climbing, mountain biking, and snowboarding.',
  keywords: 'Rick Vermeil, Frontend Developer, Software Engineer, React, Next.js, JavaScript, TypeScript, Node.js, Climbing, Mountain Biking, Snowboarding',
  robots: "index, follow",
  other: {
    author: "Rick Vermeil",
    favicon: "Icons8"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} ${bitter.variable}`}>
      <body >{children}</body>
    </html>
  )
}
