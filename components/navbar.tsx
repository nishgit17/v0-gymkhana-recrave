"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-black/40 backdrop-blur-sm border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-yellow-400">Gymkhana</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-white hover:text-yellow-400 transition-colors">
              Home
            </Link>
            <Link href="#" className="text-white hover:text-yellow-400 transition-colors">
              About
            </Link>
            <Link href="#" className="text-white hover:text-yellow-400 transition-colors">
              Events
            </Link>
            <Link href="#" className="text-white hover:text-yellow-400 transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:block">
            <Link
              href="/register"
              className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Register to Contribute
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-yellow-400 hover:text-yellow-300">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="#" className="block text-white hover:text-yellow-400 py-2">
              Home
            </Link>
            <Link href="#" className="block text-white hover:text-yellow-400 py-2">
              About
            </Link>
            <Link href="#" className="block text-white hover:text-yellow-400 py-2">
              Events
            </Link>
            <Link href="#" className="block text-white hover:text-yellow-400 py-2">
              Contact
            </Link>
            <Link
              href="/register"
              className="block w-full px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-center mt-4"
            >
              Register to Contribute
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
