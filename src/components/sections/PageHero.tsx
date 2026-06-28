import StarField from '@/components/ui/StarField'

interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundType: 'video' | 'gradient'
  videoSrc?: string
  ctaLabel?: string
  ctaHref?: string
  height?: 'full' | 'half' | 'short'
}

export default function PageHero({
  title,
  subtitle,
  backgroundType,
  videoSrc,
  ctaLabel,
  ctaHref,
  height = 'full',
}: PageHeroProps) {
  const heightClass = height === 'full' ? 'min-h-screen' : height === 'short' ? 'min-h-0 py-20 pt-32' : 'min-h-[60vh]'

  return (
    <section className={`relative flex items-center justify-center ${heightClass} overflow-hidden`}>
      {/* Background */}
      {backgroundType === 'video' && videoSrc ? (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-poster.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          {/* Gradient fallback layer (always rendered, shows if video fails) */}
          <div className="absolute inset-0 bg-cosmic-radial" />
          <StarField className="opacity-60" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-cosmic-radial" />
          <StarField className="opacity-70" />
        </>
      )}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-hero-overlay z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto pt-20">
        <h1
          className="font-display text-5xl sm:text-7xl lg:text-8xl text-gradient-pink-teal animate-fade-up leading-tight"
          style={{ animationFillMode: 'both' }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="font-serif text-lg sm:text-2xl text-cosmic-cream/85 mt-5 animate-fade-up leading-relaxed"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            {subtitle}
          </p>
        )}

        {ctaLabel && ctaHref && (
          <div
            className="mt-10 animate-fade-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            <a
              href={ctaHref}
              className="inline-block font-display text-xl sm:text-2xl text-white bg-cosmic-pink px-10 py-4 rounded-full animate-glow-pulse hover:scale-105 transition-transform"
            >
              {ctaLabel}
            </a>
          </div>
        )}

      </div>
    </section>
  )
}
