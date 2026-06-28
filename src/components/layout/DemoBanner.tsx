export default function DemoBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-cosmic-pink via-cosmic-purple to-cosmic-teal text-white text-center py-2 px-4">
      <p className="font-sans text-xs sm:text-sm font-medium tracking-wide">
        Portfolio Demo &mdash; Concept site designed &amp; built by{' '}
        <a
          href="https://yellowhammerstudios.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-white/80 transition-colors font-semibold"
        >
          Yellowhammer Studios
        </a>
        . Not a real business.
      </p>
    </div>
  )
}
