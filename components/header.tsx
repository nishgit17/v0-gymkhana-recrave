"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold tracking-tight">Gymkhana</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#" className="hover:text-accent transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Services
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block bg-accent text-accent-foreground px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#" className="hover:text-accent transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Services
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Contact
            </a>
            <button className="bg-accent text-accent-foreground px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity w-full">
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
