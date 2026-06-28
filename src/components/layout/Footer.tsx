import StarField from '@/components/ui/StarField'

const HOURS = [
  { day: 'Mon – Thu', time: '7 AM – 8 PM' },
  { day: 'Friday',    time: '7 AM – 9 PM' },
  { day: 'Saturday',  time: '9 AM – 9 PM' },
  { day: 'Sunday',    time: 'Closed'       },
]

export default function Footer() {
  return (
    <footer className="relative bg-cosmic-purple border-t border-white/10 overflow-hidden">
      <StarField />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-display text-2xl text-cosmic-pink">Shuttle Sips</span>
          </div>
          <p className="text-gradient-pink-teal font-display text-lg mb-4">
            Dirty Soda. Stellar Snacks.
          </p>
          <p className="font-sans text-sm text-cosmic-cream/60 leading-relaxed">
            Houston&rsquo;s most cosmic beverage experience. Come for the soda,
            stay for the vibes.
          </p>
        </div>

        {/* Hours */}
        <div>
          <h3 className="font-display text-xl text-cosmic-teal mb-4">Hours</h3>
          <dl className="space-y-2">
            {HOURS.map(({ day, time }) => (
              <div key={day} className="flex justify-between gap-4">
                <dt className="font-sans text-sm text-cosmic-cream/70">{day}</dt>
                <dd className={`font-sans text-sm font-medium ${time === 'Closed' ? 'text-cosmic-cream/40' : 'text-cosmic-cream'}`}>
                  {time}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="font-display text-xl text-cosmic-teal mb-4">Find Us</h3>
          <address className="not-italic font-sans text-sm text-cosmic-cream/70 leading-relaxed mb-4">
            123 Galaxy Way, Suite B<br />
            Houston, TX 77058
          </address>
          <p className="block font-sans text-sm text-cosmic-pink mb-4">
            (713) 555-0199
          </p>
          <div className="flex gap-4">
            <span className="font-sans text-sm text-cosmic-cream/40">Instagram ↗</span>
            <span className="font-sans text-sm text-cosmic-cream/40">Facebook ↗</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/10 py-4 text-center">
        <p className="font-sans text-xs text-cosmic-cream/30">
          Concept site designed &amp; built by{' '}
          <a
            href="https://yellowhammerstudios.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-cosmic-cream/60 transition-colors"
          >
            Yellowhammer Studios
          </a>
          {' '}— {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
