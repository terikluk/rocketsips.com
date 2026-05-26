import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/sections/PageHero'
import CTASection from '@/components/sections/CTASection'
import DrinkCard from '@/components/drinks/DrinkCard'
import DrinkGrid from '@/components/drinks/DrinkGrid'
import { kidsDrinks, snacks } from '@/lib/menu-data'

const SODA_BASES = [
  'Coke', 'Diet Coke', 'Coke Zero',
  'Sprite', 'Sprite Zero',
  'Dr. Pepper', 'Dr. Pepper Zero',
  'Mountain Dew', 'Diet Mountain Dew',
  'Rootbeer', 'Diet Rootbeer',
  'Fresca', 'Soda Water', 'Water',
]

const ADD_INS = [
  { label: 'Flavors',                    price: '+$0.65' },
  { label: 'Fresh Fruit (Lemon, Lime)',  price: '+$0.65' },
  { label: 'Cream (Vanilla, Coconut)',   price: '+$0.65' },
  { label: 'Cold Foam / Whipped Cream',  price: '+$0.65' },
  { label: 'Sparkles & Gummies',         price: '+$0.65' },
  { label: 'Fruit Purees (Straw/Rasp/Mango)', price: '+$0.85' },
]

const BOOSTERS = [
  { name: 'Rocket Fuel',         imageSrc: '/images/rocket_fuel.png' },
  { name: "It's Rocket Science", imageSrc: '/images/its_rocket_science.png' },
  { name: 'Dark Matter',         imageSrc: '/images/dark_matter.png' },
]

const SIZES = [
  { label: 'Kids',   oz: '12 oz', price: '$1.50+' },
  { label: 'Small',  oz: '16 oz', price: '$2.50+' },
  { label: 'Medium', oz: '24 oz', price: '$3.00+' },
  { label: 'Large',  oz: '32 oz', price: '$3.50+' },
]

export default function MenuPage() {
  return (
    <>
      <Header />

      <PageHero
        title="The Launchpad Menu"
        subtitle="16 Signature Sodas + Stellar Snacks. Choose your orbit."
        backgroundType="gradient"
        height="short"
      />

      {/* Soda Bases */}
      <section className="py-12 px-4 bg-cosmic-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl text-cosmic-cream mb-2">Soda Bases</h2>
          <p className="font-sans text-sm text-cosmic-cream/55 mb-6">Pick your foundation, then we build the magic.</p>
          <p className="font-sans text-cosmic-cream/75 leading-relaxed">
            {SODA_BASES.join(' · ')}
          </p>
        </div>
      </section>

      {/* Signature Sodas */}
      <section className="py-16 px-4 bg-cosmic-navy starfield">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-sans text-sm text-cosmic-teal uppercase tracking-widest mb-2">The Main Event</p>
            <h2 className="font-display text-4xl sm:text-5xl text-gradient-pink-teal">
              Signature Dirty Sodas
            </h2>
            <p className="font-serif text-base text-cosmic-cream/60 mt-2">
              Every drink tells a story. What&rsquo;s yours?
            </p>
          </div>
          <DrinkGrid />
        </div>
      </section>

      {/* Sizing */}
      <section className="py-12 px-4 bg-cosmic-purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl text-cosmic-cream mb-8">Pick Your Size</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SIZES.map(({ label, oz, price }) => (
              <div
                key={label}
                className="bg-cosmic-navy/60 border border-white/10 rounded-2xl p-6 text-center hover:border-cosmic-pink/40 transition-colors"
              >
                <p className="font-display text-2xl text-cosmic-pink">{label}</p>
                <p className="font-sans text-sm text-cosmic-cream/60 mt-1">{oz}</p>
                <p className="font-display text-lg text-cosmic-cream mt-2">{price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boosters */}
      <section className="py-14 px-4 bg-cosmic-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl text-cosmic-cream mb-2">Energy Boosters</h2>
          <p className="font-sans text-sm text-cosmic-cream/55 mb-8">Add +$2.00 for lift-off speed</p>
          <div className="flex flex-wrap justify-center gap-6">
            {BOOSTERS.map(({ name, imageSrc }) => (
              <div
                key={name}
                className="drink-card relative rounded-2xl overflow-hidden flex flex-col cursor-pointer group w-44"
              >
                <div className="h-48 w-full relative overflow-hidden">
                  <div className="card-shine" />
                  <Image src={imageSrc} alt={name} fill className="object-contain p-3 group-hover:scale-105 transition-transform duration-500" sizes="176px" />
                </div>
                <div className="p-4 flex flex-col items-center gap-1">
                  <p className="font-display text-lg text-cosmic-cream text-center group-hover:text-cosmic-pink transition-colors">{name}</p>
                  <p className="font-sans text-xs text-cosmic-teal">+$2.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customize Add-ins */}
      <section className="py-14 px-4 bg-cosmic-purple">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl text-cosmic-cream text-center mb-8">Make It Yours</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ADD_INS.map(({ label, price }) => (
              <div
                key={label}
                className="flex justify-between items-center bg-cosmic-navy/50 border border-white/10 rounded-xl px-5 py-3"
              >
                <span className="font-sans text-sm text-cosmic-cream/80">{label}</span>
                <span className="font-sans text-sm font-semibold text-cosmic-teal">{price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kids Drinks */}
      <section className="py-16 px-4 bg-cosmic-navy starfield">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="font-sans text-sm text-cosmic-teal uppercase tracking-widest mb-2">For Little Astronauts</p>
          <h2 className="font-display text-4xl text-cosmic-cream mb-3">Kids&rsquo; Drinks</h2>
          <p className="font-serif text-sm text-cosmic-cream/55 mb-10">
            All come with whipped cream and gummies. Obviously.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {kidsDrinks.map(drink => (
              <DrinkCard key={drink.id} drink={drink} centerPrice />
            ))}
          </div>
        </div>
      </section>

      {/* Snacks */}
      <section className="py-16 px-4 bg-cosmic-purple">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-sm text-cosmic-teal uppercase tracking-widest mb-2">Snack Time</p>
          <h2 className="font-display text-4xl text-cosmic-cream mb-3">Stellar Snacks</h2>
          <p className="font-serif text-sm text-cosmic-cream/55 mb-10">
            $3.00 each. Because you deserve a treat.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {snacks.map(drink => (
              <DrinkCard key={drink.id} drink={drink} centerPrice />
            ))}
          </div>
          <p className="font-sans text-xs text-cosmic-cream/40 mt-6">
            Pretzel bites available with Cinnamon Butter (+$1.50) or Cheese Dip (+$1.50)
          </p>
        </div>
      </section>

      <CTASection
        headline="Can&apos;t Decide?"
        subtext="Our crew loves helping you find your perfect drink. Give us a call!"
        ctaLabel="📞 Call Us"
        ctaHref="tel:2567639699"
        variant="pink"
      />

      <Footer />
    </>
  )
}
