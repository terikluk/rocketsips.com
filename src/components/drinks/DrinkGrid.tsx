'use client'

import { useState } from 'react'
import DrinkCard from './DrinkCard'
import { signatureDrinks } from '@/lib/menu-data'

type Filter = 'all' | 'fan-favorite' | 'local-legend' | 'high-energy' | 'mysterious'

const FILTERS: { label: string; value: Filter }[] = [
  { label: '✨ All',           value: 'all'          },
  { label: '⭐ Fan Faves',     value: 'fan-favorite'  },
  { label: '📍 Local Legends', value: 'local-legend'  },
  { label: '⚡ High Energy',   value: 'high-energy'   },
  { label: '👽 Mysterious',    value: 'mysterious'    },
]

export default function DrinkGrid() {
  const [active, setActive] = useState<Filter>('all')

  const filtered = active === 'all'
    ? signatureDrinks
    : signatureDrinks.filter(d => d.tags?.includes(active))

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {FILTERS.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            className={`font-sans text-sm px-4 py-2 rounded-full border transition-all ${
              active === value
                ? 'bg-cosmic-pink text-white border-cosmic-pink'
                : 'bg-transparent text-cosmic-cream/70 border-white/20 hover:border-cosmic-pink/50 hover:text-cosmic-cream'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filtered.map(drink => (
          <DrinkCard key={drink.id} drink={drink} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center font-sans text-cosmic-cream/50 mt-8 text-lg">
          No drinks match that filter. Try another! 🚀
        </p>
      )}
    </div>
  )
}
