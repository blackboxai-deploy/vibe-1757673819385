import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hello World - Simple Next.js App',
  description: 'A simple Hello World page built with Next.js and Tailwind CSS',
  keywords: ['hello world', 'nextjs', 'tailwind', 'react'],
  authors: [{ name: 'BLACKBOX.AI' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen`}>
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  )
}