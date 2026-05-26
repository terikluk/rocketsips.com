import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/sections/PageHero'
import CTASection from '@/components/sections/CTASection'
import DrinkCard from '@/components/drinks/DrinkCard'
import { featuredDrinks } from '@/lib/menu-data'
import Link from 'next/link'

const HERO_VIDEO = 'https://videos.pexels.com/video-files/3250490/3250490-hd_1920_1080_30fps.mp4'

const PERKS = [
  { emoji: '🚀', title: '16 Signature Drinks', desc: 'Every one named, every one legendary.' },
  { emoji: '🎨', title: 'Fully Customizable', desc: 'Mix, match, and make it yours.' },
  { emoji: '👨‍👩‍👧', title: 'Family Friendly', desc: 'Stellar drinks for every astronaut.' },
  { emoji: '📍', title: 'Huntsville Proud', desc: 'Born here. Made for here. Loved everywhere.' },
]

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <PageHero
        title="Dirty Soda. Stellar Snacks."
        subtitle="Huntsville's most cosmic beverage experience — 16 signature drinks and counting."
        backgroundType="video"
        videoSrc={HERO_VIDEO}
        ctaLabel="See the Menu"
        ctaHref="/menu"
        height="full"
      />

      {/* Featured Drinks */}
      <section className="py-20 px-4 bg-cosmic-navy starfield">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-sm text-cosmic-teal uppercase tracking-widest mb-2">
              Signature Sodas
            </p>
            <h2 className="font-display text-5xl sm:text-6xl text-gradient-pink-teal">
              Fan Favorites
            </h2>
            <p className="font-serif text-lg text-cosmic-cream/65 mt-3 max-w-xl mx-auto">
              These are the drinks that launched a thousand repeat orders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {featuredDrinks.slice(0, 3).map(drink => (
              <DrinkCard key={drink.id} drink={drink} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-block font-display text-xl text-cosmic-pink border border-cosmic-pink/50 px-8 py-3 rounded-full hover:bg-cosmic-pink hover:text-white transition-all"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Perks strip */}
      <section className="py-16 px-4 bg-cosmic-purple">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {PERKS.map(({ emoji, title, desc }) => (
            <div key={title}>
              <span className="text-4xl block mb-3 animate-float">{emoji}</span>
              <h3 className="font-display text-lg text-cosmic-cream">{title}</h3>
              <p className="font-sans text-sm text-cosmic-cream/55 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About snippet */}
      <section className="py-20 px-4 bg-cosmic-navy">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="relative flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-cosmic-pink via-purple-700 to-cosmic-teal opacity-20 blur-3xl absolute" />
            <span className="text-9xl relative z-10 animate-float">🚀</span>
          </div>

          {/* Text */}
          <div>
            <p className="font-sans text-sm text-cosmic-teal uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-cosmic-cream mb-5 leading-tight">
              Born in Huntsville.<br />
              <span className="text-gradient-pink-teal">Built for Orbit.</span>
            </h2>
            <p className="font-sans text-base text-cosmic-cream/70 leading-relaxed mb-4">
              Rocket Sips is Huntsville&rsquo;s love letter to the art of the dirty soda — a customizable,
              over-the-top, impossibly delicious carbonated creation that&rsquo;s equal parts science
              and magic. We&rsquo;re named after the rockets that put people on the moon,
              and we&rsquo;re aiming just as high with your taste buds.
            </p>
            <p className="font-sans text-base text-cosmic-cream/70 leading-relaxed mb-8">
              Every drink on our menu is named with love for this city, this state, and the
              adventurous spirit that makes Huntsville so special. Come find your orbit.
            </p>
            <Link
              href="/about"
              className="inline-block font-display text-lg text-cosmic-pink hover:text-cosmic-cream transition-colors"
            >
              Our Full Story
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready for Liftoff?"
        subtext="Come see us at 8415 Whitesburg Dr., Suite B, Huntsville, AL."
        ctaLabel="Get Directions"
        ctaHref="https://maps.google.com/maps?q=8415+Whitesburg+Dr,+Huntsville,+AL+35802"
        variant="gradient"
      />

      <Footer />
    </>
  )
}
