"use client"

import Link from "next/link"
import { MobileNav } from "./mobile-nav"
import { useEffect, useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()
  
  // Pages with light backgrounds that need dark text
  const lightBgPages = ['/gallery', '/about', '/members', '/resources', '/blog', '/contact']
  const isLightBgPage = lightBgPages.includes(pathname)
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  })

  // Either we're on a light background page or we've scrolled down
  const useDarkText = isLightBgPage || isScrolled

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isLightBgPage 
          ? "bg-background border-b shadow-sm py-3" 
          : "bg-transparent py-6"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/" className="flex items-center space-x-2">
            <span className={`text-2xl font-bold ${useDarkText ? 'text-primary' : 'text-white text-shadow'}`}>
              ADR Society
            </span>
          </Link>
        </motion.div>
        <MobileNav />
        <nav className="hidden md:flex items-center space-x-6">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Events", href: "/events" },
            { name: "Members", href: "/members" },
            { name: "Resources", href: "/resources" },
            { name: "Blog", href: "/blog" },
            { name: "Contact", href: "/contact" }
          ].map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
            >
              <Link 
                href={item.href} 
                className={`text-sm font-medium transition-all duration-200 hover:scale-110 inline-block ${
                  useDarkText
                    ? 'text-foreground hover:text-primary' 
                    : 'text-white hover:text-white text-shadow-sm hover:text-glow'
                }`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          >
            <Link href="/join" className="bg-primary text-white hover:bg-accent px-4 py-2 rounded-md shadow-md transition-all hover:shadow-lg">
              Join Now
            </Link>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  )
} 