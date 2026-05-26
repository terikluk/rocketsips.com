import Image from 'next/image'
import { MenuItem } from '@/lib/menu-data'

interface DrinkCardProps {
  drink: MenuItem
  variant?: 'default' | 'compact'
  showPrice?: boolean
  centerPrice?: boolean
}

const TAG_LABELS: Record<string, string> = {
  'fan-favorite':  '⭐ Fan Fave',
  'local-legend':  '📍 Local Legend',
  'high-energy':   '⚡ High Energy',
  'spicy':         '🌶️ Spicy',
  'mysterious':    '👽 Secret',
}

export default function DrinkCard({ drink, variant = 'default', showPrice = true, centerPrice = false }: DrinkCardProps) {
  const bandHeight = variant === 'compact' ? 'h-20' : 'h-48'

  return (
    <article className="drink-card relative rounded-2xl overflow-hidden flex flex-col cursor-pointer group">
      {/* Image or gradient band */}
      <div className={`${bandHeight} w-full relative overflow-hidden`}>
        <div className="card-shine" />
        {drink.imageSrc ? (
          <Image
            src={drink.imageSrc}
            alt={drink.name}
            fill
            className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${drink.gradient.from} ${drink.gradient.via ?? ''} ${drink.gradient.to} flex items-center justify-center`}>
            <span className="text-5xl group-hover:scale-125 transition-transform duration-300 select-none drop-shadow-lg">
              {drink.emoji}
            </span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-xl text-cosmic-cream group-hover:text-cosmic-pink transition-colors leading-tight">
          {drink.name}
        </h3>

        {variant === 'default' && (
          <p className="font-sans text-sm text-cosmic-cream/65 mt-2 leading-relaxed flex-1">
            {drink.description}
          </p>
        )}

        <div className={`flex items-center mt-3 flex-wrap gap-2 ${centerPrice ? 'justify-center' : 'justify-between'}`}>
          {showPrice && (
            <span className="inline-block bg-cosmic-pink/20 text-cosmic-pink border border-cosmic-pink/40 text-sm font-sans font-semibold px-3 py-1 rounded-full">
              {drink.price}
            </span>
          )}

          {drink.tags && drink.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {drink.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs font-sans text-cosmic-teal/80 bg-cosmic-teal/10 border border-cosmic-teal/20 px-2 py-0.5 rounded-full"
                >
                  {TAG_LABELS[tag] ?? tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
