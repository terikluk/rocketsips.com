export type DrinkCategory = 'signature' | 'kids' | 'snack'

export interface DrinkGradient {
  from: string
  via?: string
  to: string
}

export interface MenuItem {
  id: string
  name: string
  description: string
  price: string
  emoji: string
  category: DrinkCategory
  gradient: DrinkGradient
  tags?: string[]
  featured?: boolean
  imageSrc?: string
}

export const menuItems: MenuItem[] = [
  // ── Signature Sodas ──────────────────────────────────────────
  {
    id: 'the-mall',
    name: 'The Mall',
    description: 'Classic vibes, elevated. A smooth, crowd-pleasing blend that takes you back.',
    price: '$5.50+',
    emoji: '🛍️✨',
    category: 'signature',
    gradient: { from: 'from-purple-500', via: 'via-pink-400', to: 'to-rose-400' },
    tags: ['fan-favorite'],
    featured: true,
    imageSrc: '/images/the_mall.jpg',
  },
  {
    id: '30a',
    name: '30A',
    description: 'Coastal bliss in a cup. Coconut, peach, Sprite, and a cloud of cream.',
    price: '$5.50+',
    emoji: '🌊🏖️',
    category: 'signature',
    gradient: { from: 'from-sky-400', via: 'via-blue-400', to: 'to-cyan-300' },
    tags: ['local-legend'],
    featured: true,
    imageSrc: '/images/30a.jpg',
  },
  {
    id: 'eggbeater-jesus',
    name: 'Eggbeater Jesus',
    description: 'Legendary. Inexplicable. We can\'t explain it but you will order it twice.',
    price: '$5.50+',
    emoji: '😇🥚',
    category: 'signature',
    gradient: { from: 'from-amber-300', via: 'via-yellow-400', to: 'to-orange-300' },
    tags: ['fan-favorite', 'local-legend'],
    featured: true,
    imageSrc: '/images/eggbeater_jesus.jpg',
  },
  {
    id: 'the-block-party',
    name: 'The Block Party',
    description: 'Everyone\'s invited. Bold, fun, and made to share the love.',
    price: '$5.50+',
    emoji: '🎉🏘️',
    category: 'signature',
    gradient: { from: 'from-orange-400', via: 'via-red-400', to: 'to-pink-500' },
    tags: ['fan-favorite'],
    featured: true,
    imageSrc: '/images/block_party.jpg',
  },
  {
    id: 'baker-and-able',
    name: 'Baker & Able',
    description: 'Sweet, capable, and surprisingly sophisticated. A dynamic duo in every sip.',
    price: '$5.50+',
    emoji: '🧁☕',
    category: 'signature',
    gradient: { from: 'from-amber-600', via: 'via-orange-500', to: 'to-yellow-400' },
    imageSrc: '/images/baker_and_abel.jpg',
  },
  {
    id: 'space-cowboy',
    name: 'Space Cowboy',
    description: 'Mountain Dew meets coconut cream and caramel drizzle. Yeehaw from orbit.',
    price: '$5.50+',
    emoji: '🤠🚀',
    category: 'signature',
    gradient: { from: 'from-yellow-400', via: 'via-lime-400', to: 'to-green-500' },
    tags: ['fan-favorite'],
    featured: true,
    imageSrc: '/images/space_cowboy.jpg',
  },
  {
    id: 'was-that-thunder',
    name: 'Was That Thunder?',
    description: 'Storm in a cup. Ginger beer base with a jolt of citrus and electric lime.',
    price: '$5.50+',
    emoji: '⚡🌩️',
    category: 'signature',
    gradient: { from: 'from-slate-600', via: 'via-blue-700', to: 'to-indigo-800' },
    imageSrc: '/images/was_that_thunder.jpg',
  },
  {
    id: 'space-force',
    name: 'Space Force',
    description: 'Maximum power. Energy booster base with triple layers of cosmic flavor.',
    price: '$7.00+',
    emoji: '🛸💥',
    category: 'signature',
    gradient: { from: 'from-red-500', via: 'via-orange-500', to: 'to-yellow-500' },
    tags: ['high-energy'],
    featured: true,
    imageSrc: '/images/space_force.jpg',
  },
  {
    id: 'the-gulf',
    name: 'The Gulf',
    description: 'Warm, deep, and unforgettable. Blue raspberry, cream, and a hint of citrus.',
    price: '$5.50+',
    emoji: '🌅🌊',
    category: 'signature',
    gradient: { from: 'from-teal-500', via: 'via-cyan-500', to: 'to-blue-600' },
    tags: ['local-legend'],
    imageSrc: '/images/the_gulf.jpg',
  },
  {
    id: 'pcb',
    name: 'PCB',
    description: 'Panama City Beach in a cup. Strawberry, hibiscus, lemonade, sparkles.',
    price: '$5.50+',
    emoji: '👑🌺',
    category: 'signature',
    gradient: { from: 'from-pink-400', via: 'via-rose-400', to: 'to-fuchsia-500' },
    tags: ['local-legend'],
    imageSrc: '/images/pcb.jpg',
  },
  {
    id: 'gate-9',
    name: 'Gate 9',
    description: 'Redstone Arsenal energy. Bold, no-nonsense, and ready for liftoff.',
    price: '$5.50+',
    emoji: '🛫🎯',
    category: 'signature',
    gradient: { from: 'from-gray-700', via: 'via-slate-600', to: 'to-blue-800' },
    tags: ['local-legend'],
    imageSrc: '/images/gate_9.jpg',
  },
  {
    id: 'ditto',
    name: 'Ditto',
    description: 'So good you\'ll order it again. And again. And again.',
    price: '$5.50+',
    emoji: '🔄💜',
    category: 'signature',
    gradient: { from: 'from-violet-500', via: 'via-purple-500', to: 'to-fuchsia-600' },
    tags: ['fan-favorite'],
    imageSrc: '/images/ditto.jpg',
  },
  {
    id: 'lilys-brew',
    name: "Lily's Brew",
    description: 'Delicate and dreamy. Floral notes, light cream, and something magical.',
    price: '$5.50+',
    emoji: '🌸🍵',
    category: 'signature',
    gradient: { from: 'from-pink-300', via: 'via-rose-300', to: 'to-purple-300' },
    imageSrc: '/images/lilys_brew.jpg',
  },
  {
    id: 'moontown-magic',
    name: 'Moontown Magic',
    description: 'A nod to Huntsville\'s own Moontown Amphitheater. Blue raspberry, lemon, coconut.',
    price: '$5.50+',
    emoji: '🌙✨',
    category: 'signature',
    gradient: { from: 'from-blue-600', via: 'via-cyan-500', to: 'to-teal-400' },
    tags: ['local-legend'],
    featured: true,
    imageSrc: '/images/moontown_magic.jpg',
  },
  {
    id: 'the-campout',
    name: 'The Campout',
    description: 'Root beer, toasted marshmallow syrup, vanilla cream. S\'mores vibes, zero campfire.',
    price: '$5.50+',
    emoji: '🏕️🔥',
    category: 'signature',
    gradient: { from: 'from-amber-800', via: 'via-orange-700', to: 'to-yellow-600' },
    imageSrc: '/images/the_campout.jpg',
  },
  {
    id: 'area-51',
    name: 'Area 51',
    description: 'Top secret rotating formula. Classified carbonation. You didn\'t see this.',
    price: '$5.50+',
    emoji: '👽🛸',
    category: 'signature',
    gradient: { from: 'from-green-400', via: 'via-emerald-500', to: 'to-teal-600' },
    tags: ['mysterious'],
    imageSrc: '/images/area_51.jpg',
  },

  // ── Kids Drinks ──────────────────────────────────────────────
  {
    id: 'the-starlet',
    name: 'The Starlet',
    description: 'Strawberry Sprite with whipped cream and rainbow gummies. Pure stardom.',
    price: '$1.50+',
    emoji: '⭐🍓',
    category: 'kids',
    gradient: { from: 'from-pink-300', to: 'to-rose-300' },
  },
  {
    id: 'hays-gator',
    name: "Hays Gator",
    description: 'Lime soda with gummies on top. The coolest drink in the solar system.',
    price: '$1.50+',
    emoji: '🐊💚',
    category: 'kids',
    gradient: { from: 'from-green-400', to: 'to-lime-300' },
  },
  {
    id: 'shark-attack',
    name: 'Shark Attack',
    description: 'Blue raspberry Sprite with shark gummies. Chomp.',
    price: '$1.50+',
    emoji: '🦈💙',
    category: 'kids',
    gradient: { from: 'from-blue-400', via: 'via-cyan-400', to: 'to-sky-300' },
  },

  // ── Snacks ───────────────────────────────────────────────────
  {
    id: 'frosted-sugar-cookie',
    name: 'Frosted Sugar Cookie',
    description: 'Classic sugar cookie with dreamy frosting.',
    price: '$3.00',
    emoji: '🍪🌟',
    category: 'snack',
    gradient: { from: 'from-yellow-200', to: 'to-pink-200' },
  },
  {
    id: 'chocolate-chip-cookie',
    name: 'Chocolate Chip Cookie',
    description: 'Warm, gooey, perfect. No notes.',
    price: '$3.00',
    emoji: '🍪🍫',
    category: 'snack',
    gradient: { from: 'from-amber-700', to: 'to-yellow-600' },
  },
  {
    id: 'caramel-crispix',
    name: 'Caramel Crispix',
    description: 'Sweet caramel crunch mix. Dangerous. You will eat the whole bag.',
    price: '$3.00',
    emoji: '🍮✨',
    category: 'snack',
    gradient: { from: 'from-amber-400', to: 'to-orange-400' },
  },
  {
    id: 'soft-pretzel-bites',
    name: 'Soft Pretzel Bites',
    description: 'Warm bites with cinnamon butter or cheese dip. Savory meets stellar.',
    price: '$3.00',
    emoji: '🥨🧀',
    category: 'snack',
    gradient: { from: 'from-amber-600', to: 'to-yellow-500' },
  },
]

export const signatureDrinks = menuItems.filter(i => i.category === 'signature')
export const kidsDrinks = menuItems.filter(i => i.category === 'kids')
export const snacks = menuItems.filter(i => i.category === 'snack')
export const featuredDrinks = menuItems.filter(i => i.featured === true)
