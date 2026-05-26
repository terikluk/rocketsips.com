// Deterministic star positions — no Math.random() to avoid SSR hydration mismatch
// [top%, left%, size(0=xs,1=sm,2=md), delay(s), animation, color]
const STARS: [number, number, number, number, string, string][] = [
  [5,   12,  0, 0.0, 'animate-twinkle',      'bg-white'],
  [12,  85,  1, 0.4, 'animate-twinkle-slow', 'bg-white'],
  [18,  33,  0, 1.1, 'animate-twinkle-fast', 'bg-white'],
  [25,  67,  1, 0.7, 'animate-twinkle',      'bg-cosmic-pink'],
  [31,  8,   0, 1.8, 'animate-twinkle-slow', 'bg-white'],
  [38,  50,  0, 0.3, 'animate-twinkle',      'bg-white'],
  [42,  91,  1, 2.1, 'animate-twinkle-fast', 'bg-cosmic-teal'],
  [49,  24,  0, 0.9, 'animate-twinkle-slow', 'bg-white'],
  [55,  76,  0, 1.4, 'animate-twinkle',      'bg-white'],
  [60,  41,  2, 0.2, 'animate-twinkle',      'bg-cosmic-star'],
  [67,  15,  0, 1.6, 'animate-twinkle-fast', 'bg-white'],
  [72,  58,  0, 0.8, 'animate-twinkle-slow', 'bg-white'],
  [78,  82,  1, 2.4, 'animate-twinkle',      'bg-cosmic-pink'],
  [83,  30,  0, 1.2, 'animate-twinkle',      'bg-white'],
  [89,  63,  0, 0.5, 'animate-twinkle-fast', 'bg-white'],
  [94,  5,   1, 1.9, 'animate-twinkle-slow', 'bg-cosmic-teal'],
  [7,   48,  0, 2.7, 'animate-twinkle',      'bg-white'],
  [14,  72,  0, 0.6, 'animate-twinkle-fast', 'bg-white'],
  [22,  19,  1, 1.3, 'animate-twinkle',      'bg-white'],
  [35,  88,  0, 2.0, 'animate-twinkle-slow', 'bg-white'],
  [47,  37,  0, 0.1, 'animate-twinkle',      'bg-white'],
  [53,  95,  1, 1.7, 'animate-twinkle-fast', 'bg-cosmic-star'],
  [62,  54,  0, 2.3, 'animate-twinkle',      'bg-white'],
  [70,  28,  0, 0.4, 'animate-twinkle-slow', 'bg-white'],
  [76,  71,  2, 1.0, 'animate-twinkle',      'bg-cosmic-pink'],
  [85,  44,  0, 2.6, 'animate-twinkle-fast', 'bg-white'],
  [91,  79,  0, 0.7, 'animate-twinkle',      'bg-white'],
  [97,  20,  1, 1.5, 'animate-twinkle-slow', 'bg-white'],
  [3,   60,  0, 2.2, 'animate-twinkle',      'bg-white'],
  [10,  97,  0, 0.9, 'animate-twinkle-fast', 'bg-cosmic-teal'],
  [20,  4,   1, 1.8, 'animate-twinkle',      'bg-white'],
  [28,  43,  0, 0.3, 'animate-twinkle-slow', 'bg-white'],
  [40,  66,  0, 2.5, 'animate-twinkle',      'bg-white'],
  [58,  11,  1, 1.1, 'animate-twinkle-fast', 'bg-white'],
  [65,  84,  0, 0.6, 'animate-twinkle',      'bg-white'],
  [80,  52,  0, 2.8, 'animate-twinkle-slow', 'bg-cosmic-star'],
  [87,  36,  1, 0.2, 'animate-twinkle',      'bg-white'],
  [93,  69,  0, 1.4, 'animate-twinkle-fast', 'bg-white'],
  [16,  56,  0, 1.9, 'animate-twinkle',      'bg-white'],
  [44,  22,  1, 0.8, 'animate-twinkle-slow', 'bg-white'],
  // second set — fills in the gaps
  [2,   38,  0, 1.3, 'animate-twinkle-fast', 'bg-white'],
  [9,   61,  0, 0.5, 'animate-twinkle',      'bg-white'],
  [15,  90,  1, 2.0, 'animate-twinkle-slow', 'bg-cosmic-pink'],
  [23,  47,  0, 0.8, 'animate-twinkle-fast', 'bg-white'],
  [29,  75,  0, 1.5, 'animate-twinkle',      'bg-white'],
  [34,  16,  2, 2.3, 'animate-twinkle-slow', 'bg-cosmic-teal'],
  [41,  83,  0, 0.2, 'animate-twinkle-fast', 'bg-white'],
  [48,  5,   0, 1.7, 'animate-twinkle',      'bg-white'],
  [56,  39,  1, 0.6, 'animate-twinkle-slow', 'bg-white'],
  [63,  68,  0, 2.1, 'animate-twinkle-fast', 'bg-white'],
  [69,  92,  0, 1.0, 'animate-twinkle',      'bg-cosmic-star'],
  [74,  23,  1, 0.4, 'animate-twinkle-slow', 'bg-white'],
  [81,  47,  0, 1.8, 'animate-twinkle-fast', 'bg-white'],
  [86,  78,  0, 2.5, 'animate-twinkle',      'bg-white'],
  [92,  34,  1, 0.9, 'animate-twinkle-slow', 'bg-cosmic-pink'],
  [96,  57,  0, 1.2, 'animate-twinkle-fast', 'bg-white'],
  [6,   26,  0, 2.8, 'animate-twinkle',      'bg-white'],
  [13,  53,  0, 0.3, 'animate-twinkle-slow', 'bg-white'],
  [19,  80,  1, 1.6, 'animate-twinkle-fast', 'bg-cosmic-teal'],
  [26,  10,  0, 2.4, 'animate-twinkle',      'bg-white'],
  [33,  62,  0, 0.7, 'animate-twinkle-slow', 'bg-white'],
  [39,  31,  2, 1.9, 'animate-twinkle-fast', 'bg-cosmic-star'],
  [46,  87,  0, 0.1, 'animate-twinkle',      'bg-white'],
  [52,  14,  0, 2.6, 'animate-twinkle-slow', 'bg-white'],
  [59,  45,  1, 1.3, 'animate-twinkle-fast', 'bg-white'],
  [66,  72,  0, 0.5, 'animate-twinkle',      'bg-cosmic-pink'],
  [71,  99,  0, 2.0, 'animate-twinkle-slow', 'bg-white'],
  [77,  18,  1, 0.8, 'animate-twinkle-fast', 'bg-white'],
  [84,  64,  0, 1.4, 'animate-twinkle',      'bg-white'],
  [90,  41,  0, 2.7, 'animate-twinkle-slow', 'bg-white'],
  [95,  86,  2, 0.2, 'animate-twinkle-fast', 'bg-cosmic-teal'],
  [4,   73,  0, 1.1, 'animate-twinkle',      'bg-white'],
  [11,  29,  0, 2.2, 'animate-twinkle-slow', 'bg-white'],
  [17,  96,  1, 0.6, 'animate-twinkle-fast', 'bg-white'],
  [24,  55,  0, 1.8, 'animate-twinkle',      'bg-cosmic-star'],
  [32,  7,   0, 0.4, 'animate-twinkle-slow', 'bg-white'],
  [37,  77,  1, 2.1, 'animate-twinkle-fast', 'bg-white'],
  [43,  49,  0, 0.9, 'animate-twinkle',      'bg-white'],
  [50,  93,  0, 1.5, 'animate-twinkle-slow', 'bg-cosmic-pink'],
  [57,  21,  0, 2.4, 'animate-twinkle-fast', 'bg-white'],
  [64,  58,  2, 0.3, 'animate-twinkle',      'bg-cosmic-teal'],
]

const SIZE_CLASS = ['w-0.5 h-0.5', 'w-1 h-1', 'w-1.5 h-1.5']

interface StarFieldProps {
  className?: string
  fixed?: boolean
}

export default function StarField({ className = '', fixed = false }: StarFieldProps) {
  const posClass = fixed ? 'fixed' : 'absolute'
  return (
    <div
      aria-hidden="true"
      className={`${posClass} inset-0 pointer-events-none z-0 overflow-hidden ${className}`}
    >
      {STARS.map(([top, left, size, delay, anim, color], i) => (
        <span
          key={i}
          className={`absolute rounded-full ${SIZE_CLASS[size]} ${anim} ${color} opacity-80`}
          style={{ top: `${top}%`, left: `${left}%`, animationDelay: `${delay}s` }}
        />
      ))}
    </div>
  )
}
