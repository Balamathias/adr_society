import Link from "next/link"
import { useState } from "react"

export function MainNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" }
  ]

  return (
    <nav className="bg-primary text-white">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 py-4">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="hover:text-gray-300 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="py-4"
          >
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {isMobileMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-primary">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 hover:bg-primary-dark"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

