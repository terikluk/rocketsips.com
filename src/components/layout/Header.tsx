'use client'

import { useState } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Menu',    href: '/menu'    },
  { label: 'About',   href: '/about'   },
  { label: 'Contact', href: '/contact', pink: true },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cosmic-navy/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          onClick={() => setOpen(false)}
        >
          <div
            aria-label="Rocket Sips"
            className="h-10 w-40"
            style={{
              background: 'linear-gradient(135deg, #FF3D7F 0%, #c44dff 50%, #00E5FF 100%)',
              WebkitMaskImage: 'url(/images/logo.png)',
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'left center',
              maskImage: 'url(/images/logo.png)',
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'left center',
              filter: 'drop-shadow(0 0 6px rgba(0,0,0,1)) drop-shadow(0 0 12px rgba(0,0,0,0.9)) drop-shadow(2px 0 0 white) drop-shadow(-2px 0 0 white) drop-shadow(0 2px 0 white) drop-shadow(0 -2px 0 white)',
            }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href, pink }) => (
            <Link
              key={href}
              href={href}
              className={`font-sans text-sm font-semibold tracking-wide transition-colors ${pink ? 'text-cosmic-pink hover:text-cosmic-pink/70' : 'text-cosmic-cream/90 hover:text-cosmic-pink'}`}
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
          <a
            href="tel:2567639699"
            className="font-display text-2xl text-cosmic-pink mt-2"
            onClick={() => setOpen(false)}
          >
            Call Us
          </a>
        </nav>
      )}
    </header>
  )
}
