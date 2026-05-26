import type { Metadata } from 'next'
import { Inter, Playfair_Display, Boogaloo, Sansita } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const boogaloo = Boogaloo({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-boogaloo',
  display: 'swap',
})

const sansita = Sansita({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-sansita',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rocket Sips | Dirty Soda. Stellar Snacks.',
  description:
    "Huntsville, AL's favorite space-themed dirty soda shop. 16 signature drinks, cosmic vibes, stellar snacks. 8415 Whitesburg Dr., Suite B.",
  keywords: ['dirty soda', 'Huntsville AL', 'rocket sips', 'specialty drinks', 'soda shop'],
  openGraph: {
    title: 'Rocket Sips | Dirty Soda. Stellar Snacks.',
    description: "Huntsville AL's most cosmic beverage experience.",
    siteName: 'Rocket Sips',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${boogaloo.variable} ${sansita.variable}`}>
      <body className="bg-cosmic-navy text-cosmic-cream font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
