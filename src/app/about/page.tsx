import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/sections/PageHero'
import StarField from '@/components/ui/StarField'
import Link from 'next/link'

const VALUES = [
  {
    emoji: '🌌',
    title: 'Cosmic Creativity',
    desc: "We don't do boring. Every drink is a small act of imagination — named, crafted, and served with a personality.",
  },
  {
    emoji: '📍',
    title: 'Local Pride',
    desc: "From Moontown Magic to Gate 9, our menu is a love letter to Huntsville and the Gulf Coast communities we call home.",
  },
  {
    emoji: '👨‍👩‍👧‍👦',
    title: 'Family First',
    desc: 'Little astronauts get their own special drinks. Everyone belongs in our orbit — kids, parents, and everyone in between.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />

      <PageHero
        title="We&apos;re Rocket Sips"
        subtitle="Space-themed. Huntsville-born. Absurdly delicious."
        backgroundType="gradient"
        height="half"
      />

      {/* Brand story */}
      <section className="py-20 px-4 bg-cosmic-navy">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-sm text-cosmic-teal uppercase tracking-widest mb-4">Our Origin Story</p>
          <h2 className="font-display text-4xl sm:text-5xl text-cosmic-cream mb-8 leading-tight">
            Born in the{' '}
            <span className="text-gradient-pink-teal">Rocket City.</span>
          </h2>
          <div className="space-y-5 font-sans text-base text-cosmic-cream/75 leading-relaxed">
            <p>
              Huntsville, Alabama didn&rsquo;t just launch rockets — it launched a culture of bold thinking,
              big dreams, and a refusal to settle for ordinary. That same spirit is what Rocket Sips
              is built on. We opened our doors at 8415 Whitesburg Dr. to bring something the
              Rocket City had never seen: a dirty soda shop that takes the craft seriously and the
              vibes even more seriously.
            </p>
            <p>
              Every drink on our menu is named with intention. The Moontown Magic nods to
              Huntsville&rsquo;s beloved amphitheater. The Gulf, 30A, and PCB honor the Gulf Coast
              communities that so many of us escape to each summer. Area 51 stays classified.
              Eggbeater Jesus remains unexplained. That&rsquo;s just how we roll.
            </p>
            <p>
              We believe a great soda can be a whole experience — a conversation starter, a memory
              maker, a small piece of joy in the middle of a Tuesday. We&rsquo;re family-friendly,
              absurdly creative, and deeply committed to making Huntsville proud, one cup at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-cosmic-purple starfield">
        <StarField />
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="font-display text-4xl text-cosmic-cream text-center mb-12">What We&rsquo;re About</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map(({ title, desc }) => (
              <div
                key={title}
                className="bg-cosmic-navy/50 border border-white/10 rounded-2xl p-8 text-center hover:border-cosmic-pink/30 transition-colors"
              >
                <h3 className="font-display text-2xl text-gradient-pink-teal mb-3">{title}</h3>
                <p className="font-sans text-sm text-cosmic-cream/65 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find us */}
      <section className="py-16 px-4 bg-cosmic-navy">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-4xl text-cosmic-cream mb-4">Come Visit the Launchpad</h2>
          <address className="not-italic font-sans text-lg text-cosmic-cream/70 mb-2">
            8415 Whitesburg Dr., Suite B<br />
            Huntsville, AL 35802
          </address>
          <a
            href="tel:2567639699"
            className="block font-sans text-cosmic-pink text-lg mb-8 hover:text-cosmic-cream transition-colors"
          >
            (256) 763-9699
          </a>
          <Link
            href="/contact"
            className="inline-block font-display text-xl text-cosmic-pink border border-cosmic-pink/50 px-8 py-3 rounded-full hover:bg-cosmic-pink hover:text-white transition-all"
          >
            Hours & Directions →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
