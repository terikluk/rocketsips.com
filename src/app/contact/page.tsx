import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/sections/PageHero'

const HOURS = [
  { day: 'Monday – Thursday', time: '7 AM – 8 PM' },
  { day: 'Friday',            time: '7 AM – 9 PM' },
  { day: 'Saturday',          time: '9 AM – 9 PM' },
  { day: 'Sunday',            time: 'Closed'       },
]

export default function ContactPage() {
  return (
    <>
      <Header />

      <PageHero
        title="Find the Launchpad"
        subtitle="123 Galaxy Way, Suite B · Houston, TX 77058"
        backgroundType="gradient"
        height="half"
      />

      {/* Hours + Map */}
      <section className="py-20 px-4 bg-cosmic-navy">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Hours & Contact */}
          <div>
            <h2 className="font-display text-3xl text-cosmic-cream mb-6">Hours</h2>
            <dl className="space-y-3 mb-8">
              {HOURS.map(({ day, time }) => (
                <div key={day} className="flex justify-between gap-4 border-b border-white/10 pb-3">
                  <dt className="font-sans text-base text-cosmic-cream/70">{day}</dt>
                  <dd className={`font-display text-lg ${time === 'Closed' ? 'text-cosmic-cream/35' : 'text-cosmic-cream'}`}>
                    {time}
                  </dd>
                </div>
              ))}
            </dl>

            <h2 className="font-display text-3xl text-cosmic-cream mb-4">Contact</h2>
            <address className="not-italic font-sans text-base text-cosmic-cream/70 leading-relaxed mb-3">
              123 Galaxy Way, Suite B<br />
              Houston, TX 77058
            </address>
            <p className="font-display text-2xl text-cosmic-pink mb-6">
              (713) 555-0199
            </p>
          </div>

          {/* Map */}
          <div className="aspect-square sm:aspect-video rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-95.12%2C29.52%2C-95.06%2C29.59&layer=mapnik"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) saturate(0.7)' }}
              loading="lazy"
              title="Shuttle Sips location map"
            />
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-16 px-4 bg-cosmic-purple text-center">
        <h2 className="font-display text-4xl text-cosmic-cream mb-3">Follow the Mission</h2>
        <p className="font-sans text-cosmic-cream/60 mb-8">Stay up to date with new drinks, specials, and cosmic happenings.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="inline-block font-display text-xl text-white/40 bg-white/10 px-8 py-3 rounded-full cursor-default">
            @shuttlesips on Instagram
          </span>
          <span className="inline-block font-display text-xl text-white/40 bg-white/10 px-8 py-3 rounded-full cursor-default">
            Shuttle Sips on Facebook
          </span>
        </div>
      </section>

      <Footer />
    </>
  )
}
