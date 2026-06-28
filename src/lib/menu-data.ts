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
    id: 'the-galleria',
    name: 'The Galleria',
    description: 'Sprite with white peach, raspberry & coconut cream. Glam vibes, zero boring.',
    price: '$5.50+',
    emoji: '💎✨',
    category: 'signature',
    gradient: { from: 'from-purple-500', via: 'via-pink-400', to: 'to-rose-400' },
    tags: ['fan-favorite'],
    featured: true,
    imageSrc: '/images/the_mall.png',
  },
  {
    id: 'the-boardwalk',
    name: 'The Boardwalk',
    description: 'Sprite with coconut, pineapple & hibiscus cream. Kemah nights in every sip.',
    price: '$5.50+',
    emoji: '🎡🌴',
    category: 'signature',
    gradient: { from: 'from-sky-400', via: 'via-blue-400', to: 'to-cyan-300' },
    tags: ['local-legend'],
    featured: true,
    imageSrc: '/images/30a.png',
  },
  {
    id: 'the-divinity',
    name: 'The Divinity',
    description: 'Sprite with fresh lemon, honey & cold foam. Legendary. Inexplicable. You will order it twice.',
    price: '$5.50+',
    emoji: '😇✨',
    category: 'signature',
    gradient: { from: 'from-amber-300', via: 'via-yellow-400', to: 'to-orange-300' },
    tags: ['fan-favorite', 'local-legend'],
    featured: true,
    imageSrc: '/images/eggbeater_jesus.png',
  },
  {
    id: 'the-montrose',
    name: 'The Montrose',
    description: 'Dr. Pepper with blackberry, lime & vanilla cream. Bold enough for the arts district.',
    price: '$5.50+',
    emoji: '🎨🎉',
    category: 'signature',
    gradient: { from: 'from-orange-400', via: 'via-red-400', to: 'to-pink-500' },
    tags: ['fan-favorite'],
    featured: true,
    imageSrc: '/images/block_party.png',
  },
  {
    id: 'sugar-land',
    name: 'Sugar Land',
    description: 'Dr. Pepper with caramel, brown sugar & vanilla cream. Sweet enough to rename a city after.',
    price: '$5.50+',
    emoji: '🧁🍯',
    category: 'signature',
    gradient: { from: 'from-amber-600', via: 'via-orange-500', to: 'to-yellow-400' },
    imageSrc: '/images/baker_and_abel.png',
  },
  {
    id: 'space-cowboy',
    name: 'Space Cowboy',
    description: 'Dr. Pepper with pomegranate, cinnamon & vanilla cream. Yeehaw from orbit.',
    price: '$5.50+',
    emoji: '🤠🚀',
    category: 'signature',
    gradient: { from: 'from-yellow-400', via: 'via-lime-400', to: 'to-green-500' },
    tags: ['fan-favorite'],
    featured: true,
    imageSrc: '/images/space_cowboy.png',
  },
  {
    id: 'flash-flood',
    name: 'Flash Flood',
    description: 'Coke with blueberry, pomegranate & fresh lime. Storm in a cup — you\'ll feel it.',
    price: '$5.50+',
    emoji: '⚡🌧️',
    category: 'signature',
    gradient: { from: 'from-slate-600', via: 'via-blue-700', to: 'to-indigo-800' },
    imageSrc: '/images/was_that_thunder.png',
  },
  {
    id: 'copy-that-houston',
    name: 'Copy That, Houston',
    description: 'Coke with cherry, fresh lime & energy booster. Houston, we have liftoff.',
    price: '$7.00+',
    emoji: '📡🛸',
    category: 'signature',
    gradient: { from: 'from-red-500', via: 'via-orange-500', to: 'to-yellow-500' },
    tags: ['high-energy'],
    featured: true,
    imageSrc: '/images/space_force.png',
  },
  {
    id: 'galveston-bay',
    name: 'Galveston Bay',
    description: 'Coke with coconut, caramel & sea salt cream. Deep and warm, just like the bay.',
    price: '$5.50+',
    emoji: '🐚🌅',
    category: 'signature',
    gradient: { from: 'from-teal-500', via: 'via-cyan-500', to: 'to-blue-600' },
    tags: ['local-legend'],
    imageSrc: '/images/the_gulf.png',
  },
  {
    id: 'kemah-sunset',
    name: 'Kemah Sunset',
    description: 'Mt. Dew with mango, passion fruit & hibiscus cream. Golden hour in a cup.',
    price: '$5.50+',
    emoji: '🌺🎡',
    category: 'signature',
    gradient: { from: 'from-pink-400', via: 'via-rose-400', to: 'to-fuchsia-500' },
    tags: ['local-legend'],
    imageSrc: '/images/pcb.png',
  },
  {
    id: 'terminal-b',
    name: 'Terminal B',
    description: 'Mt. Dew with cranberry, cherry & raspberry. Bold enough to miss your flight for.',
    price: '$5.50+',
    emoji: '✈️🎯',
    category: 'signature',
    gradient: { from: 'from-gray-700', via: 'via-slate-600', to: 'to-blue-800' },
    tags: ['local-legend'],
    imageSrc: '/images/gate_9.png',
  },
  {
    id: 'the-nebula',
    name: 'The Nebula',
    description: 'Mt. Dew with blueberry, blackberry & lavender cream. Deep space has never tasted this good.',
    price: '$5.50+',
    emoji: '🌌💫',
    category: 'signature',
    gradient: { from: 'from-violet-500', via: 'via-purple-500', to: 'to-fuchsia-600' },
    tags: ['fan-favorite'],
    imageSrc: '/images/ditto.png',
  },
  {
    id: 'moon-garden',
    name: 'Moon Garden',
    description: 'Root beer with rose syrup, vanilla & cold foam. Delicate, dreamy, and totally magical.',
    price: '$5.50+',
    emoji: '🌸🌙',
    category: 'signature',
    gradient: { from: 'from-pink-300', via: 'via-rose-300', to: 'to-purple-300' },
    imageSrc: '/images/lilys_brew.png',
  },
  {
    id: 'stardust-palace',
    name: 'Stardust Palace',
    description: 'Root beer with butterscotch, vanilla & cold foam. A love letter to the night sky.',
    price: '$5.50+',
    emoji: '🏰✨',
    category: 'signature',
    gradient: { from: 'from-blue-600', via: 'via-cyan-500', to: 'to-teal-400' },
    tags: ['local-legend'],
    featured: true,
    imageSrc: '/images/moontown_magic.png',
  },
  {
    id: 'lost-pines',
    name: 'Lost Pines',
    description: 'Root beer with toasted marshmallow, chocolate drizzle & graham cold foam. No campfire required.',
    price: '$5.50+',
    emoji: '🏕️🌲',
    category: 'signature',
    gradient: { from: 'from-amber-800', via: 'via-orange-700', to: 'to-yellow-600' },
    imageSrc: '/images/the_campout.png',
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
    imageSrc: '/images/area_51.png',
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
    imageSrc: '/images/starlet.png',
  },
  {
    id: 'hays-gator',
    name: "Hay's Gator",
    description: 'Lime soda with gummies on top. The coolest drink in the solar system.',
    price: '$1.50+',
    emoji: '🐊💚',
    category: 'kids',
    gradient: { from: 'from-green-400', to: 'to-lime-300' },
    imageSrc: '/images/hays_gator.png',
  },
  {
    id: 'shark-attack',
    name: 'Shark Attack',
    description: 'Blue raspberry Sprite with shark gummies. Chomp.',
    price: '$1.50+',
    emoji: '🦈💙',
    category: 'kids',
    gradient: { from: 'from-blue-400', via: 'via-cyan-400', to: 'to-sky-300' },
    imageSrc: '/images/shark_attack.png',
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
    imageSrc: '/images/frosted_sugar_cookie.png',
  },
  {
    id: 'chocolate-chip-cookie',
    name: 'Chocolate Chip Cookie',
    description: 'Warm, gooey, perfect. No notes.',
    price: '$3.00',
    emoji: '🍪🍫',
    category: 'snack',
    gradient: { from: 'from-amber-700', to: 'to-yellow-600' },
    imageSrc: '/images/chocolate_chip_cookie.png',
  },
  {
    id: 'caramel-crispix',
    name: 'Caramel Crispix',
    description: 'Sweet caramel crunch mix. Dangerous. You will eat the whole bag.',
    price: '$3.00',
    emoji: '🍮✨',
    category: 'snack',
    gradient: { from: 'from-amber-400', to: 'to-orange-400' },
    imageSrc: '/images/caramel_crispix.png',
  },
  {
    id: 'soft-pretzel-bites',
    name: 'Soft Pretzel Bites',
    description: 'Warm bites with cinnamon butter or cheese dip. Savory meets stellar.',
    price: '$3.00',
    emoji: '🥨🧀',
    category: 'snack',
    gradient: { from: 'from-amber-600', to: 'to-yellow-500' },
    imageSrc: '/images/pretzel_bites.png',
  },
]

export const signatureDrinks = menuItems.filter(i => i.category === 'signature')
export const kidsDrinks = menuItems.filter(i => i.category === 'kids')
export const snacks = menuItems.filter(i => i.category === 'snack')
export const featuredDrinks = menuItems.filter(i => i.featured === true)
