import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          navy:   '#0D0B2B',
          pink:   '#FF3D7F',
          teal:   '#00E5FF',
          cream:  '#FFF8F0',
          purple: '#1A0A3C',
          star:   '#FFD700',
        },
      },
      fontFamily: {
        brand:   ['var(--font-sansita)', 'sans-serif'],
        lobster: ['var(--font-lobster)', 'cursive'],
        display: ['var(--font-boogaloo)', 'cursive'],
        serif:   ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.2', transform: 'scale(0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 12px #FF3D7F55' },
          '50%':      { boxShadow: '0 0 36px #FF3D7FCC, 0 0 72px #00E5FF44' },
        },
        'card-shine': {
          '0%':   { transform: 'translateX(-100%) skewX(-15deg)' },
          '100%': { transform: 'translateX(300%) skewX(-15deg)' },
        },
      },
      animation: {
        twinkle:        'twinkle 2.8s ease-in-out infinite',
        'twinkle-slow': 'twinkle 4.2s ease-in-out infinite',
        'twinkle-fast': 'twinkle 1.6s ease-in-out infinite',
        float:          'float 4s ease-in-out infinite',
        'fade-up':      'fade-up 0.7s ease-out forwards',
        'glow-pulse':   'glow-pulse 2.2s ease-in-out infinite',
        'card-shine':   'card-shine 0.6s ease-out forwards',
      },
      backgroundImage: {
        'cosmic-radial': 'radial-gradient(ellipse at top, #1A0A3C 0%, #0D0B2B 65%)',
        'hero-overlay':  'linear-gradient(to bottom, rgba(13,11,43,0.65) 0%, rgba(13,11,43,0.3) 50%, rgba(13,11,43,0.92) 100%)',
        'pink-teal':     'linear-gradient(135deg, #FF3D7F, #00E5FF)',
        'purple-pink':   'linear-gradient(135deg, #1A0A3C, #FF3D7F)',
      },
    },
  },
  plugins: [],
}

export default config
