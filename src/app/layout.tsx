import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "ADR Society - Ahmadu Bello University, Zaria",
  description: "Alternative Dispute Resolution Society at Ahmadu Bello University, promoting peaceful resolutions through education and practice",
  keywords: "ADR, law, mediation, arbitration, dispute resolution, law school, Ahmadu Bello University",
  authors: [{ name: "ADR Society" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}