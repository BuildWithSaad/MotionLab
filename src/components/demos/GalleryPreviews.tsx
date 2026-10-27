import { useState } from 'react'
import {
  Play,
  Pause,
  RotateCcw,
  ArrowRight,
  Sparkles,
  Eye,
} from 'lucide-react'

// 1. Gradient Background Preview
export function GradientBgPreview() {
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <div className="relative w-full h-36 rounded-lg overflow-hidden border border-surface-border flex flex-col justify-between p-3 select-none">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(135deg, #0f1629 0%, #3b0764 35%, #083344 70%, #0f1629 100%)',
          backgroundSize: '300% 300%',
          animation: isPlaying ? 'gradient-shift 8s ease infinite' : 'none',
        }}
      />
      <div className="flex items-center justify-between text-xs text-text-secondary bg-surface-deep/60 backdrop-blur-sm px-2.5 py-1 rounded-md self-start border border-white/5">
        <span>300% CSS gradient</span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[11px] text-text-muted">Pure CSS keyframes</span>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center gap-1 text-xs px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-text-primary transition-colors focus-visible:outline-2 focus-visible:outline-accent-cyan"
          aria-label={isPlaying ? 'Pause gradient animation' : 'Play gradient animation'}
        >
          {isPlaying ? <Pause size={12} /> : <Play size={12} />}
          <span>{isPlaying ? 'Pause' : 'Play'}</span>
        </button>
      </div>
    </div>
  )
}

// 2. Floating Orbs Preview
export function FloatingOrbsPreview() {
  const [activePalette, setActivePalette] = useState<'cyan-violet' | 'pink-violet'>('cyan-violet')

  return (
    <div className="relative w-full h-36 rounded-lg overflow-hidden border border-surface-border bg-surface-deep/80 flex flex-col justify-between p-3 select-none">
      {/* Orb 1 */}
      <div
        className="absolute rounded-full blur-xl opacity-40 pointer-events-none"
        style={{
          width: '90px',
          height: '90px',
          top: '10%',
          left: '15%',
          background: activePalette === 'cyan-violet' ? '#7c3aed' : '#ec4899',
          animation: 'float-slow 6s ease-in-out infinite',
        }}
      />
      {/* Orb 2 */}
      <div
        className="absolute rounded-full blur-xl opacity-40 pointer-events-none"
        style={{
          width: '80px',
          height: '80px',
          bottom: '10%',
          right: '15%',
          background: '#22d3ee',
          animation: 'float-slow-alt 7s ease-in-out infinite',
        }}
      />

      <div className="flex items-center justify-between text-xs text-text-secondary z-10">
        <span className="bg-surface-deep/70 px-2 py-0.5 rounded border border-white/5 text-[11px]">
          Blurred Radial Orbs
        </span>
      </div>

      <div className="flex items-center justify-between z-10">
        <span className="text-[11px] text-text-muted">translate3d GPU drift</span>
        <button
          onClick={() => setActivePalette(p => p === 'cyan-violet' ? 'pink-violet' : 'cyan-violet')}
          className="text-xs px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-text-primary transition-colors focus-visible:outline-2 focus-visible:outline-accent-cyan"
        >
          Toggle Glow
        </button>
      </div>
    </div>
  )
}

// 3. Gradient Text Preview
export function GradientTextPreview() {
  const [styleMode, setStyleMode] = useState<number>(0)
  const styles = [
    'linear-gradient(135deg, #7c3aed, #22d3ee)',
    'linear-gradient(135deg, #ec4899, #8b5cf6)',
    'linear-gradient(135deg, #f59e0b, #ec4899)',
  ]

  return (
    <div className="w-full h-36 rounded-lg border border-surface-border bg-surface-raised/40 flex flex-col justify-between p-3 select-none">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <span
          className="text-2xl font-black tracking-tight"
          style={{
            background: styles[styleMode],
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Visual Polish
        </span>
        <span className="text-xs text-text-muted mt-1">background-clip: text</span>
      </div>

      <div className="flex items-center justify-between border-t border-surface-border/40 pt-2">
        <span className="text-[11px] text-text-muted">Click to change gradient:</span>
        <button
          onClick={() => setStyleMode((styleMode + 1) % styles.length)}
          className="text-xs px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-text-primary transition-colors focus-visible:outline-2 focus-visible:outline-accent-cyan"
        >
          Next Gradient
        </button>
      </div>
    </div>
  )
}

// 4. Fade & Slide Entrance Preview
export function FadeSlidePreview() {
  const [key, setKey] = useState(0)

  return (
    <div className="w-full h-36 rounded-lg border border-surface-border bg-surface-raised/40 flex flex-col justify-between p-3 select-none">
      <div className="flex-1 flex items-center justify-center">
        <div
          key={key}
          className="animate-fade-in-up px-4 py-2 rounded-lg bg-surface-raised border border-accent-violet/30 shadow-lg text-center"
        >
          <p className="text-sm font-semibold text-text-primary">Content Arrived</p>
          <p className="text-xs text-text-muted">translateY(20px) → 0</p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-surface-border/40 pt-2">
        <span className="text-[11px] text-text-muted">Replay trigger:</span>
        <button
          onClick={() => setKey(k => k + 1)}
          className="flex items-center gap-1 text-xs px-2.5 py-1 rounded bg-accent-violet/20 hover:bg-accent-violet/30 text-accent-violet transition-colors focus-visible:outline-2 focus-visible:outline-accent-cyan"
        >
          <RotateCcw size={12} />
          <span>Replay</span>
        </button>
      </div>
    </div>
  )
}

// 5. Staggered Sequence Preview
export function StaggeredCardsPreview() {
  const [key, setKey] = useState(0)

  return (
    <div className="w-full h-36 rounded-lg border border-surface-border bg-surface-raised/40 flex flex-col justify-between p-3 select-none">
      <div key={key} className="flex-1 flex items-center justify-center gap-2">
        <div
          className="animate-fade-in-up flex-1 py-2 px-1 text-center bg-surface-raised border border-surface-border rounded text-[11px] font-medium text-text-secondary"
          style={{ animationDelay: '0ms' }}
        >
          Card 1<br /><span className="text-[10px] text-text-muted">0ms</span>
        </div>
        <div
          className="animate-fade-in-up flex-1 py-2 px-1 text-center bg-surface-raised border border-surface-border rounded text-[11px] font-medium text-text-secondary"
          style={{ animationDelay: '120ms' }}
        >
          Card 2<br /><span className="text-[10px] text-text-muted">120ms</span>
        </div>
        <div
          className="animate-fade-in-up flex-1 py-2 px-1 text-center bg-surface-raised border border-surface-border rounded text-[11px] font-medium text-text-secondary"
          style={{ animationDelay: '240ms' }}
        >
          Card 3<br /><span className="text-[10px] text-text-muted">240ms</span>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-surface-border/40 pt-2">
        <span className="text-[11px] text-text-muted">Sequential delays:</span>
        <button
          onClick={() => setKey(k => k + 1)}
          className="flex items-center gap-1 text-xs px-2.5 py-1 rounded bg-accent-violet/20 hover:bg-accent-violet/30 text-accent-violet transition-colors focus-visible:outline-2 focus-visible:outline-accent-cyan"
        >
          <RotateCcw size={12} />
          <span>Run Sequence</span>
        </button>
      </div>
    </div>
  )
}

// 6. Button Hover Preview
export function ButtonHoverPreview() {
  const [clicked, setClicked] = useState(false)

  return (
    <div className="w-full h-36 rounded-lg border border-surface-border bg-surface-raised/40 flex flex-col justify-between p-3 select-none">
      <div className="flex-1 flex flex-col items-center justify-center gap-2">
        <button
          onClick={() => {
            setClicked(true)
            setTimeout(() => setClicked(false), 1200)
          }}
          className="btn btn-primary text-xs py-2 px-4 shadow-md transition-all active:scale-95"
        >
          <span>{clicked ? 'Clicked! ✓' : 'Hover & Click Me'}</span>
        </button>
        <span className="text-[10px] text-text-muted">Hover for -2px lift + shadow glow</span>
      </div>

      <div className="flex items-center justify-between border-t border-surface-border/40 pt-2">
        <span className="text-[11px] text-text-muted">Focus visible support:</span>
        <span className="text-[11px] text-accent-cyan">Tab-friendly</span>
      </div>
    </div>
  )
}

// 7. Card Lift Preview
export function CardLiftPreview() {
  return (
    <div className="w-full h-36 rounded-lg border border-surface-border bg-surface-raised/40 flex items-center justify-center p-3 select-none">
      <div
        tabIndex={0}
        role="region"
        aria-label="Hover demo card"
        className="w-full max-w-[240px] p-3 rounded-lg bg-surface border border-surface-border shadow transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-violet/20 hover:border-accent-cyan/40 focus-visible:outline-2 focus-visible:outline-accent-cyan cursor-pointer"
      >
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-semibold text-text-primary">Interactive Card</span>
          <span className="text-[10px] text-accent-cyan">Hover me</span>
        </div>
        <p className="text-[11px] text-text-muted leading-tight">
          Lifts -8px and deepens colored ambient shadow.
        </p>
      </div>
    </div>
  )
}

// 8. Image Zoom Preview
export function ImageZoomPreview() {
  return (
    <div className="w-full h-36 rounded-lg border border-surface-border bg-surface-raised/40 flex items-center justify-center p-3 select-none">
      <div
        tabIndex={0}
        role="region"
        aria-label="Zoom demo card"
        className="group relative w-full h-full rounded-md overflow-hidden border border-surface-border bg-surface-deep cursor-pointer focus-visible:outline-2 focus-visible:outline-accent-cyan"
      >
        {/* CSS Canvas pattern acting as image */}
        <div
          className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-110"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.4) 0%, transparent 60%),
              linear-gradient(45deg, #0f1629 25%, #161d35 75%)
            `,
          }}
        />
        {/* Shading overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />

        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-xs text-white">
          <span className="font-semibold text-xs drop-shadow">scale(1.1) inside clip</span>
          <span className="text-[10px] bg-white/20 backdrop-blur-sm px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Revealed!
          </span>
        </div>
      </div>
    </div>
  )
}

// 9. Animated Underline Preview
export function AnimatedUnderlinePreview() {
  return (
    <div className="w-full h-36 rounded-lg border border-surface-border bg-surface-raised/40 flex flex-col justify-around p-3 select-none">
      <div className="flex flex-col items-center justify-center gap-3">
        {/* Left-to-right underline */}
        <button
          className="group relative text-sm font-medium text-text-primary hover:text-accent-cyan transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan rounded px-1"
        >
          <span>Left-to-Right Expansion</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-cyan scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100 transition-transform duration-300 origin-left" />
        </button>

        {/* Center-out underline */}
        <button
          className="group relative text-sm font-medium text-text-primary hover:text-accent-violet transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet rounded px-1"
        >
          <span>Center-Out Expansion</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-violet scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100 transition-transform duration-300 origin-center" />
        </button>
      </div>

      <div className="text-center text-[11px] text-text-muted">
        Hover or tab over links to preview
      </div>
    </div>
  )
}

// 10. Icon Movement Preview
export function IconMovementPreview() {
  return (
    <div className="w-full h-36 rounded-lg border border-surface-border bg-surface-raised/40 flex flex-col items-center justify-center gap-3 p-3 select-none">
      <div className="flex items-center gap-3">
        {/* Forward arrow shift */}
        <button className="group flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-md bg-surface border border-surface-border hover:border-accent-cyan text-text-primary transition-all focus-visible:outline-2 focus-visible:outline-accent-cyan">
          <span>Continue</span>
          <ArrowRight
            size={14}
            className="text-accent-cyan transition-transform duration-200 group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5"
          />
        </button>

        {/* Rotate icon */}
        <button className="group flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-md bg-surface border border-surface-border hover:border-accent-violet text-text-primary transition-all focus-visible:outline-2 focus-visible:outline-accent-violet">
          <Sparkles
            size={14}
            className="text-accent-violet transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110"
          />
          <span>Sparkle</span>
        </button>
      </div>

      <span className="text-[11px] text-text-muted">Micro-motion on icon child elements</span>
    </div>
  )
}

// 11. Scroll Viewport Simulation Preview
export function ScrollRevealPreview() {
  const [inView, setInView] = useState(true)

  return (
    <div className="w-full h-36 rounded-lg border border-surface-border bg-surface-raised/40 flex flex-col justify-between p-3 select-none">
      <div className="flex-1 flex items-center justify-center">
        <div
          className={`transition-all duration-500 ease-out px-4 py-2 rounded bg-surface-deep border ${
            inView
              ? 'opacity-100 translate-y-0 scale-100 border-accent-cyan/40'
              : 'opacity-0 translate-y-6 scale-95 border-transparent'
          }`}
        >
          <div className="flex items-center gap-2 text-xs font-semibold text-text-primary">
            <Eye size={14} className="text-accent-cyan" />
            <span>Target Element</span>
          </div>
          <span className="text-[10px] text-text-muted">
            {inView ? 'Intersecting (visible)' : 'Offscreen (hidden)'}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-surface-border/40 pt-2">
        <span className="text-[11px] text-text-muted">Simulate scroll trigger:</span>
        <button
          onClick={() => setInView(!inView)}
          className="text-xs px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-text-primary transition-colors focus-visible:outline-2 focus-visible:outline-accent-cyan"
        >
          {inView ? 'Hide (Exit View)' : 'Reveal (Enter View)'}
        </button>
      </div>
    </div>
  )
}

// 12. Interactive Tabs Preview
export function InteractiveTabsPreview() {
  const [tab, setTab] = useState<'css' | 'react'>('css')

  return (
    <div className="w-full h-36 rounded-lg border border-surface-border bg-surface-raised/40 flex flex-col justify-between p-3 select-none">
      {/* Tab Header */}
      <div className="flex p-0.5 rounded-lg bg-surface-deep border border-surface-border text-xs">
        <button
          onClick={() => setTab('css')}
          className={`flex-1 py-1 rounded-md transition-all duration-200 font-medium ${
            tab === 'css'
              ? 'bg-accent-violet text-white shadow-sm'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          CSS Engine
        </button>
        <button
          onClick={() => setTab('react')}
          className={`flex-1 py-1 rounded-md transition-all duration-200 font-medium ${
            tab === 'react'
              ? 'bg-accent-violet text-white shadow-sm'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          React State
        </button>
      </div>

      {/* Tab Content with fade transition */}
      <div className="flex-1 flex items-center justify-center text-center p-2">
        {tab === 'css' ? (
          <p className="text-xs text-text-secondary animate-fade-in-up">
            Compositor transforms run independently on GPU threads.
          </p>
        ) : (
          <p className="text-xs text-text-secondary animate-fade-in-up">
            Declarative state drives active animation classes cleanly.
          </p>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-surface-border/40 pt-2 text-[11px] text-text-muted">
        <span>Active pill sliding state</span>
        <span className="text-accent-cyan">Interactive</span>
      </div>
    </div>
  )
}
