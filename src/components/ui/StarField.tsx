// Deterministic star positions — no Math.random() to avoid SSR hydration mismatch
const STARS: [number, number, number, number, string][] = [
  // [top%, left%, size(0=sm,1=md), delay(s), animation]
  [5,   12,  0, 0.0, 'animate-twinkle'],
  [12,  85,  1, 0.4, 'animate-twinkle-slow'],
  [18,  33,  0, 1.1, 'animate-twinkle-fast'],
  [25,  67,  1, 0.7, 'animate-twinkle'],
  [31,  8,   0, 1.8, 'animate-twinkle-slow'],
  [38,  50,  0, 0.3, 'animate-twinkle'],
  [42,  91,  1, 2.1, 'animate-twinkle-fast'],
  [49,  24,  0, 0.9, 'animate-twinkle-slow'],
  [55,  76,  0, 1.4, 'animate-twinkle'],
  [60,  41,  1, 0.2, 'animate-twinkle'],
  [67,  15,  0, 1.6, 'animate-twinkle-fast'],
  [72,  58,  0, 0.8, 'animate-twinkle-slow'],
  [78,  82,  1, 2.4, 'animate-twinkle'],
  [83,  30,  0, 1.2, 'animate-twinkle'],
  [89,  63,  0, 0.5, 'animate-twinkle-fast'],
  [94,  5,   1, 1.9, 'animate-twinkle-slow'],
  [7,   48,  0, 2.7, 'animate-twinkle'],
  [14,  72,  0, 0.6, 'animate-twinkle-fast'],
  [22,  19,  1, 1.3, 'animate-twinkle'],
  [35,  88,  0, 2.0, 'animate-twinkle-slow'],
  [47,  37,  0, 0.1, 'animate-twinkle'],
  [53,  95,  1, 1.7, 'animate-twinkle-fast'],
  [62,  54,  0, 2.3, 'animate-twinkle'],
  [70,  28,  0, 0.4, 'animate-twinkle-slow'],
  [76,  71,  1, 1.0, 'animate-twinkle'],
  [85,  44,  0, 2.6, 'animate-twinkle-fast'],
  [91,  79,  0, 0.7, 'animate-twinkle'],
  [97,  20,  1, 1.5, 'animate-twinkle-slow'],
  [3,   60,  0, 2.2, 'animate-twinkle'],
  [10,  97,  0, 0.9, 'animate-twinkle-fast'],
  [20,  4,   1, 1.8, 'animate-twinkle'],
  [28,  43,  0, 0.3, 'animate-twinkle-slow'],
  [40,  66,  0, 2.5, 'animate-twinkle'],
  [58,  11,  1, 1.1, 'animate-twinkle-fast'],
  [65,  84,  0, 0.6, 'animate-twinkle'],
  [80,  52,  0, 2.8, 'animate-twinkle-slow'],
  [87,  36,  1, 0.2, 'animate-twinkle'],
  [93,  69,  0, 1.4, 'animate-twinkle-fast'],
  [16,  56,  0, 1.9, 'animate-twinkle'],
  [44,  22,  1, 0.8, 'animate-twinkle-slow'],
]

interface StarFieldProps {
  className?: string
}

export default function StarField({ className = '' }: StarFieldProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none z-0 overflow-hidden ${className}`}
    >
      {STARS.map(([top, left, size, delay, anim], i) => (
        <span
          key={i}
          className={`absolute rounded-full bg-white ${anim} ${size === 1 ? 'w-1 h-1' : 'w-0.5 h-0.5'}`}
          style={{ top: `${top}%`, left: `${left}%`, animationDelay: `${delay}s` }}
        />
      ))}
    </div>
  )
}
