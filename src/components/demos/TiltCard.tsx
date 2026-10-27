import { useState, useRef, type MouseEvent } from 'react'
import { Layers, Sparkles } from 'lucide-react'

export default function TiltCard() {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [transformStyle, setTransformStyle] = useState<string>('perspective(800px) rotateX(0deg) rotateY(0deg)')
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    // Check reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Center coordinates (-1 to 1)
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const percentX = (x - centerX) / centerX
    const percentY = (y - centerY) / centerY

    // Restrained max tilt: 7 degrees
    const maxTilt = 7
    const rotateX = -percentY * maxTilt
    const rotateY = percentX * maxTilt

    setTransformStyle(
      `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`
    )
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTransformStyle('perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      role="region"
      aria-label="3D Tilt demonstration card"
      className="relative rounded-2xl p-6 sm:p-7 border border-surface-border bg-gradient-to-br from-surface-raised via-surface to-surface-deep cursor-pointer select-none transition-transform duration-150 ease-out focus-visible:outline-2 focus-visible:outline-accent-cyan shadow-xl"
      style={{
        transform: transformStyle,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      {/* Glare overlay on hover */}
      <div
        className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 ${
          isHovered ? 'opacity-30' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(34, 211, 238, 0.25) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="flex items-center justify-between mb-4">
        <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-accent-violet/15 text-accent-violet border border-accent-violet/30">
          Advanced Effect
        </span>
        <span className="text-[11px] font-mono text-accent-cyan flex items-center gap-1">
          <Sparkles size={12} />
          <span>Restrained 3D Tilt</span>
        </span>
      </div>

      <div className="w-10 h-10 rounded-xl bg-accent-violet/20 flex items-center justify-center text-accent-violet mb-3">
        <Layers size={20} />
      </div>

      <h4 className="text-base sm:text-lg font-bold text-text-primary mb-1">
        Pointer-Linked Perspective
      </h4>

      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
        Calculates cursor coordinates relative to the card center to apply subtle <code>rotateX</code> and <code>rotateY</code> transforms with 800px perspective.
      </p>

      <div className="pt-3 border-t border-surface-border/50 flex items-center justify-between text-xs text-text-muted">
        <span>Max tilt clamped to &plusmn;7&deg;</span>
        <span className="text-emerald-400">Zero Gyro/Mobile Jitter</span>
      </div>
    </div>
  )
}
