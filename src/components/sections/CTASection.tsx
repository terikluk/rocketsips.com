interface CTASectionProps {
  headline: string
  subtext?: string
  ctaLabel: string
  ctaHref: string
  variant?: 'pink' | 'teal' | 'gradient'
}

export default function CTASection({
  headline,
  subtext,
  ctaLabel,
  ctaHref,
  variant = 'gradient',
}: CTASectionProps) {
  const bgClass = {
    gradient: 'bg-gradient-to-r from-cosmic-pink via-purple-700 to-cosmic-teal',
    pink:     'bg-cosmic-pink',
    teal:     'bg-cosmic-teal',
  }[variant]

  const textClass = variant === 'teal' ? 'text-cosmic-navy' : 'text-white'
  const subtextClass = variant === 'teal' ? 'text-cosmic-navy/70' : 'text-white/80'
  const btnClass = variant === 'teal'
    ? 'bg-cosmic-navy text-white hover:bg-cosmic-navy/80'
    : 'bg-white text-cosmic-navy hover:bg-white/90'

  return (
    <section className={`py-20 px-4 text-center ${bgClass}`}>
      <div className="max-w-3xl mx-auto">
        <h2 className={`font-display text-4xl sm:text-6xl ${textClass} leading-tight`}>
          {headline}
        </h2>
        {subtext && (
          <p className={`font-serif text-xl mt-4 ${subtextClass}`}>{subtext}</p>
        )}
        <a
          href={ctaHref}
          className={`inline-block mt-8 font-display text-xl px-10 py-4 rounded-full transition-all
            hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.35)] ${btnClass}`}
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  )
}
