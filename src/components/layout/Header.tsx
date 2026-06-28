'use client'

import { useState } from 'react'
import Link from 'next/link'
import DemoBanner from '@/components/layout/DemoBanner'

const NAV_LINKS = [
  { label: 'Menu',    href: '/menu'    },
  { label: 'About',   href: '/about'   },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cosmic-navy/90 backdrop-blur-md border-b border-white/10">
      <DemoBanner />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          onClick={() => setOpen(false)}
        >
          <span className="font-lobster text-3xl text-gradient-pink-teal">
            Shuttle Sips
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="font-sans text-sm font-semibold tracking-wide text-white hover:text-cosmic-pink transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="md:hidden text-cosmic-cream text-2xl p-1"
          onClick={() => setOpen(prev => !prev)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-cosmic-purple border-b border-white/10 flex flex-col p-6 gap-5">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="font-display text-2xl text-cosmic-cream hover:text-cosmic-pink transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
