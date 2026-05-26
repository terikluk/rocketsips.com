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
        subtitle="8415 Whitesburg Dr., Suite B · Huntsville, AL 35802"
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
              8415 Whitesburg Dr., Suite B<br />
              Huntsville, AL 35802
            </address>
            <a
              href="tel:2567639699"
              className="block font-display text-2xl text-cosmic-pink hover:text-cosmic-cream transition-colors mb-6"
            >
              (256) 763-9699
            </a>
            <a
              href="https://maps.google.com/maps?q=8415+Whitesburg+Dr,+Huntsville,+AL+35802"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-sans text-sm text-cosmic-teal border border-cosmic-teal/40 px-5 py-2.5 rounded-full hover:bg-cosmic-teal/10 transition-colors"
            >
              Open in Google Maps ↗
            </a>
          </div>

          {/* Map embed */}
          <div className="aspect-square sm:aspect-video rounded-2xl overflow-hidden border border-white/10">
            <iframe
              title="Rocket Sips location map"
              src="https://maps.google.com/maps?q=8415+Whitesburg+Dr,+Huntsville,+AL+35802&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-16 px-4 bg-cosmic-purple text-center">
        <h2 className="font-display text-4xl text-cosmic-cream mb-3">Follow the Mission</h2>
        <p className="font-sans text-cosmic-cream/60 mb-8">Stay up to date with new drinks, specials, and cosmic happenings.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://instagram.com/rocketsips"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-display text-xl text-white bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-8 py-3 rounded-full hover:scale-105 transition-transform"
          >
            @rocketsips on Instagram
          </a>
          <a
            href="https://facebook.com/rocketsips"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-display text-xl text-white bg-blue-700 px-8 py-3 rounded-full hover:scale-105 transition-transform"
          >
            Rocket Sips on Facebook
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
