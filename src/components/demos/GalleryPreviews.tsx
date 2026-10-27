import { useState, useRef, type MouseEvent } from 'react'
import {
  Play,
  Pause,
  RotateCcw,
  ArrowRight,
  ChevronDown,
  X,
  CheckCircle2,
  Loader2,
  Layers,
  LayoutGrid,
  BarChart3,
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
          onClick={() => setActivePalette((p) => (p === 'cyan-violet' ? 'pink-violet' : 'cyan-violet'))}
          className="text-xs px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-text-primary transition-colors focus-visible:outline-2 focus-visible:outline-accent-cyan"
        >
          Toggle Glow
        </button>
      </div>
    </div>
  )
}

// 3. Animated Grid Background Preview
export function AnimatedGridPreview() {
  const [active, setActive] = useState(true)

  return (
    <div className="relative w-full h-36 rounded-lg overflow-hidden border border-surface-border bg-surface-deep flex flex-col justify-between p-3 select-none">
      {active && (
        <div
          className="absolute inset-0 opacity-30 transition-opacity duration-300"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
          }}
        />
      )}
      <span className="text-xs text-text-secondary bg-surface-deep/70 backdrop-blur-sm px-2.5 py-0.5 rounded-md self-start border border-white/5 z-10">
        Geometric Matrix
      </span>

      <div className="flex items-center justify-between z-10">
        <span className="text-[11px] text-text-muted">Intersecting gradients</span>
        <button
          onClick={() => setActive(!active)}
          className="text-xs px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-text-primary transition-colors focus-visible:outline-2 focus-visible:outline-accent-cyan"
        >
          {active ? 'Mute Grid' : 'Activate Grid'}
        </button>
      </div>
    </div>
  )
}

// 4. Gradient Text Preview
export function GradientTextPreview() {
  const [styleMode, setStyleMode] = useState<number>(0)
  const styles = [
    'linear-gradient(135deg, #7c3aed, #22d3ee)',
    'linear-gradient(135deg, #ec4899, #8b5cf6)',
    'linear-gradient(135deg, #10b981, #06b6d4)',
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
        <span className="text-[11px] text-text-muted">Multi-stop gradient:</span>
        <button
          onClick={() => setStyleMode((styleMode + 1) % styles.length)}
          className="text-xs px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-text-primary transition-colors focus-visible:outline-2 focus-visible:outline-accent-cyan"
        >
          Cycle Gradient
        </button>
      </div>
    </div>
  )
}

// 5. Fade & Slide Entrance Preview
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
          <p className="text-xs text-text-muted">translateY(24px) → 0</p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-surface-border/40 pt-2">
        <span className="text-[11px] text-text-muted">Replay trigger:</span>
        <button
          onClick={() => setKey((k) => k + 1)}
          className="flex items-center gap-1 text-xs px-2.5 py-1 rounded bg-accent-violet/20 hover:bg-accent-violet/30 text-accent-violet transition-colors focus-visible:outline-2 focus-visible:outline-accent-cyan"
        >
          <RotateCcw size={12} />
          <span>Replay</span>
        </button>
      </div>
    </div>
  )
}

// 6. Staggered Sequence Preview
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
        <span className="text-[11px] text-text-muted">Sequential delay:</span>
        <button
          onClick={() => setKey((k) => k + 1)}
          className="flex items-center gap-1 text-xs px-2.5 py-1 rounded bg-accent-violet/20 hover:bg-accent-violet/30 text-accent-violet transition-colors focus-visible:outline-2 focus-visible:outline-accent-cyan"
        >
          <RotateCcw size={12} />
          <span>Run Sequence</span>
        </button>
      </div>
    </div>
  )
}

// 7. Button Hover Preview
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
        <span className="text-[10px] text-text-muted">Hover for lift + shadow expansion</span>
      </div>

      <div className="flex items-center justify-between border-t border-surface-border/40 pt-2">
        <span className="text-[11px] text-text-muted">Keyboard Accessible:</span>
        <span className="text-[11px] text-accent-cyan">Tab parity</span>
      </div>
    </div>
  )
}

// 8. Card Lift Preview
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
          <span className="text-[10px] text-accent-cyan font-mono">-6px lift</span>
        </div>
        <p className="text-[11px] text-text-muted leading-tight">
          Lifts vertically and deepens ambient colored shadow.
        </p>
      </div>
    </div>
  )
}

// 9. Image Zoom Preview
export function ImageZoomPreview() {
  return (
    <div className="w-full h-36 rounded-lg border border-surface-border bg-surface-raised/40 flex items-center justify-center p-3 select-none">
      <div
        tabIndex={0}
        role="region"
        aria-label="Zoom demo card"
        className="group relative w-full h-full rounded-md overflow-hidden border border-surface-border bg-surface-deep cursor-pointer focus-visible:outline-2 focus-visible:outline-accent-cyan"
      >
        <div
          className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-110"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.4) 0%, transparent 60%),
              linear-gradient(45deg, #0f1629 25%, #161d35 75%)
            `,
          }}
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-xs text-white">
          <span className="font-semibold text-xs drop-shadow">scale(1.1)</span>
          <span className="text-[10px] bg-white/20 backdrop-blur-sm px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Revealed!
          </span>
        </div>
      </div>
    </div>
  )
}

// 10. Animated Underline & Icon Nudge Preview
export function AnimatedUnderlineIconPreview() {
  return (
    <div className="w-full h-36 rounded-lg border border-surface-border bg-surface-raised/40 flex flex-col justify-around p-3 select-none">
      <div className="flex flex-col items-center justify-center gap-2.5">
        <button className="group flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md bg-surface border border-surface-border hover:border-accent-cyan text-text-primary transition-all">
          <span>Forward Action</span>
          <ArrowRight
            size={13}
            className="text-accent-cyan transition-transform duration-200 group-hover:translate-x-1"
          />
        </button>

        <button className="group relative text-xs font-semibold text-text-primary hover:text-accent-cyan transition-colors px-1">
          <span>Expanding Underline</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </button>
      </div>

      <div className="text-center text-[10px] text-text-muted">
        scaleX(1) origin-left &amp; icon translateX
      </div>
    </div>
  )
}

// 11. Genuine Scroll-Triggered Reveal (Inside Scrollable Mini Viewport)
export function ScrollRevealPreview() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const [revealed, setRevealed] = useState(false)

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const top = scrollContainerRef.current.scrollTop
      if (top > 40) {
        setRevealed(true)
      } else {
        setRevealed(false)
      }
    }
  }

  const reset = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0
      setRevealed(false)
    }
  }

  return (
    <div className="w-full h-36 rounded-lg border border-surface-border bg-surface-raised/40 flex flex-col justify-between p-3 select-none">
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto rounded bg-surface-deep/80 border border-surface-border p-2 space-y-4"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="p-2 text-center text-[11px] text-text-muted bg-surface rounded">
          &darr; Scroll down this container &darr;
        </div>

        <div
          className={`p-3 rounded text-center transition-all duration-500 ease-out border ${
            revealed
              ? 'opacity-100 translate-y-0 scale-100 bg-accent-violet/20 border-accent-cyan/50'
              : 'opacity-0 translate-y-6 scale-90 border-transparent'
          }`}
        >
          <span className="text-xs font-bold text-text-primary">Target Revealed!</span>
          <p className="text-[10px] text-accent-cyan">Threshold met via scroll</p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-surface-border/40 pt-2 text-xs">
        <span className="text-[10px] text-text-muted">Status: {revealed ? 'Revealed' : 'Offscreen'}</span>
        <button
          onClick={reset}
          className="text-[11px] px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-text-primary flex items-center gap-1"
        >
          <RotateCcw size={10} />
          <span>Reset</span>
        </button>
      </div>
    </div>
  )
}

// 12. Scroll Progress Bar Preview
export function ScrollProgressPreview() {
  const [scrollPercent, setScrollPercent] = useState(0)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const pct = Math.min(100, Math.round((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100))
    setScrollPercent(pct)
  }

  return (
    <div className="w-full h-36 rounded-lg border border-surface-border bg-surface-raised/40 flex flex-col justify-between p-3 select-none">
      {/* Mini Progress Bar at Top */}
      <div className="w-full h-1.5 rounded-full bg-surface-deep overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent-violet to-accent-cyan transition-all duration-75"
          style={{ width: `${scrollPercent}%` }}
        />
      </div>

      {/* Mini scroll container */}
      <div
        onScroll={handleScroll}
        className="flex-1 my-2 overflow-y-auto rounded bg-surface-deep/80 border border-surface-border p-2 text-[11px] text-text-muted space-y-3"
      >
        <p>Scroll down to test the live progress bar:</p>
        <p>Document viewport height calculation: scrollTop / docHeight.</p>
        <p>Transforms scaleX(0 to 1) along horizontal axis.</p>
        <p className="text-accent-cyan font-semibold">End of scroll container reached!</p>
      </div>

      <div className="flex items-center justify-between border-t border-surface-border/40 pt-2 text-[11px] font-mono text-text-muted">
        <span>Progress: <strong className="text-accent-cyan">{scrollPercent}%</strong></span>
        <span>scaleX({(scrollPercent / 100).toFixed(2)})</span>
      </div>
    </div>
  )
}

// 13. Sticky Nav Preview
export function StickyNavPreview() {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrolled(e.currentTarget.scrollTop > 20)
  }

  return (
    <div className="w-full h-36 rounded-lg border border-surface-border bg-surface-raised/40 flex flex-col justify-between p-3 select-none">
      <div
        onScroll={handleScroll}
        className="relative flex-1 overflow-y-auto rounded bg-surface-deep border border-surface-border"
      >
        {/* Sticky Mini Header */}
        <div
          className={`sticky top-0 z-10 p-2 flex items-center justify-between text-xs transition-all duration-200 ${
            scrolled
              ? 'bg-surface-raised/90 backdrop-blur-md border-b border-surface-border shadow-md'
              : 'bg-transparent'
          }`}
        >
          <span className="font-bold gradient-text">MotionLab</span>
          <span className="text-[10px] text-text-muted font-mono">{scrolled ? 'Scrolled' : 'Top'}</span>
        </div>

        <div className="p-3 text-[11px] text-text-secondary space-y-4">
          <p>Scroll this pane to test sticky transition:</p>
          <p className="text-text-muted">Header shifts from transparent to blurred glass with bottom border.</p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-surface-border/40 pt-2 text-[11px] text-text-muted">
        <span>Scroll State: <strong className={scrolled ? 'text-accent-cyan' : 'text-text-muted'}>{scrolled ? 'Scrolled' : 'Initial'}</strong></span>
        <span>backdrop-blur-md</span>
      </div>
    </div>
  )
}

// 14. Parallax Depth Preview
export function ParallaxPreview() {
  const [sliderVal, setSliderVal] = useState(50)

  // Displacements based on slider
  const bgOffset = ((sliderVal - 50) / 50) * -15
  const fgOffset = ((sliderVal - 50) / 50) * 20

  return (
    <div className="w-full h-36 rounded-lg border border-surface-border bg-surface-raised/40 flex flex-col justify-between p-3 select-none">
      <div className="relative flex-1 rounded bg-surface-deep border border-surface-border overflow-hidden flex items-center justify-center">
        {/* BG Plane */}
        <div
          className="absolute inset-0 opacity-20 transition-transform duration-75"
          style={{
            transform: `translate3d(0, ${bgOffset}px, 0)`,
            backgroundImage: `radial-gradient(circle, #7c3aed 1px, transparent 1px)`,
            backgroundSize: '16px 16px',
          }}
        />

        {/* FG Plane */}
        <div
          className="relative z-10 px-3 py-1.5 rounded-lg bg-surface-raised/90 border border-accent-cyan/40 shadow-lg text-xs font-semibold text-text-primary transition-transform duration-75 flex items-center gap-1.5"
          style={{
            transform: `translate3d(0, ${fgOffset}px, 0)`,
          }}
        >
          <Layers size={13} className="text-accent-cyan" />
          <span>Multi-Rate Depth ({fgOffset.toFixed(0)}px)</span>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-surface-border/40 pt-2 text-xs">
        <span className="text-[10px] text-text-muted">Simulate Scroll:</span>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderVal}
          onChange={(e) => setSliderVal(Number(e.target.value))}
          className="w-28 accent-cyan-400 cursor-pointer"
        />
      </div>
    </div>
  )
}

// 15. Animated Tabs Preview
export function InteractiveTabsPreview() {
  const [tab, setTab] = useState<'css' | 'react'>('css')

  return (
    <div className="w-full h-36 rounded-lg border border-surface-border bg-surface-raised/40 flex flex-col justify-between p-3 select-none">
      <div className="flex p-0.5 rounded-lg bg-surface-deep border border-surface-border text-xs">
        <button
          onClick={() => setTab('css')}
          className={`flex-1 py-1 rounded-md transition-all duration-200 font-medium ${
            tab === 'css' ? 'bg-accent-violet text-white shadow-sm' : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          CSS Engine
        </button>
        <button
          onClick={() => setTab('react')}
          className={`flex-1 py-1 rounded-md transition-all duration-200 font-medium ${
            tab === 'react' ? 'bg-accent-violet text-white shadow-sm' : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          React State
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center text-center p-2">
        <p className="text-xs text-text-secondary animate-fade-in-up">
          {tab === 'css'
            ? 'Compositor transforms run on GPU threads.'
            : 'Declarative state drives active CSS transitions.'}
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-surface-border/40 pt-2 text-[11px] text-text-muted">
        <span>Active pill sliding state</span>
        <span className="text-accent-cyan">Interactive</span>
      </div>
    </div>
  )
}

// 16. Accordion Preview
export function AccordionPreview() {
  const [open, setOpen] = useState(true)

  return (
    <div className="w-full h-36 rounded-lg border border-surface-border bg-surface-raised/40 flex flex-col justify-between p-3 select-none">
      <div className="rounded border border-surface-border bg-surface-deep overflow-hidden">
        <button
          onClick={() => setOpen(!open)}
          className="w-full p-2 flex items-center justify-between text-xs font-semibold text-text-primary hover:bg-white/5 transition-colors"
        >
          <span>Fluid Disclosure</span>
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${open ? 'rotate-180 text-accent-cyan' : 'text-text-muted'}`}
          />
        </button>
        <div
          className="grid transition-all duration-300 ease-out"
          style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
        >
          <div className="overflow-hidden">
            <p className="p-2 pt-0 text-[11px] text-text-secondary border-t border-surface-border/40">
              Interpolates grid-template-rows from 0fr to 1fr smoothly.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-surface-border/40 pt-2 text-[11px] text-text-muted">
        <span>CSS Grid 0fr → 1fr</span>
        <button onClick={() => setOpen(!open)} className="text-accent-cyan hover:underline">
          Toggle
        </button>
      </div>
    </div>
  )
}

// 17. Modal / Drawer Preview
export function ModalDrawerPreview() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="relative w-full h-36 rounded-lg border border-surface-border bg-surface-raised/40 flex flex-col justify-between p-3 select-none">
      <div className="flex-1 flex items-center justify-center">
        <button
          onClick={() => setModalOpen(true)}
          className="btn btn-primary text-xs py-1.5 px-3"
        >
          Trigger Modal
        </button>
      </div>

      {/* Mini Modal Overlay */}
      {modalOpen && (
        <div className="absolute inset-0 rounded-lg bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 z-20">
          <div className="bg-surface-raised border border-surface-border rounded-lg p-3 text-center shadow-xl animate-fade-in-up w-full">
            <div className="flex items-center justify-between mb-1 text-xs font-bold text-text-primary">
              <span>Scale-In Dialog</span>
              <button onClick={() => setModalOpen(false)} className="text-text-muted hover:text-white">
                <X size={13} />
              </button>
            </div>
            <p className="text-[10px] text-text-secondary">scale(0.95) &rarr; scale(1.0)</p>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between border-t border-surface-border/40 pt-2 text-[11px] text-text-muted">
        <span>Backdrop cross-fade + scale</span>
        <span className="text-accent-cyan">Dialog</span>
      </div>
    </div>
  )
}

// 18. Feedback State Machine Preview
export function FeedbackStatesPreview() {
  const [state, setState] = useState<'idle' | 'loading' | 'success'>('idle')

  const trigger = () => {
    setState('loading')
    setTimeout(() => {
      setState('success')
    }, 1200)
  }

  return (
    <div className="w-full h-36 rounded-lg border border-surface-border bg-surface-raised/40 flex flex-col justify-between p-3 select-none">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        {state === 'idle' && (
          <button onClick={trigger} className="btn btn-secondary text-xs py-1.5 px-3">
            <span>Trigger Async</span>
          </button>
        )}

        {state === 'loading' && (
          <div className="flex items-center gap-1.5 text-xs text-accent-cyan font-medium animate-pulse">
            <Loader2 size={14} className="animate-spin" />
            <span>Processing...</span>
          </div>
        )}

        {state === 'success' && (
          <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold animate-fade-in-up">
            <CheckCircle2 size={14} />
            <span>Success! (100%)</span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-surface-border/40 pt-2 text-[11px] text-text-muted">
        <span>State: <strong className="text-text-primary capitalize">{state}</strong></span>
        {state !== 'idle' && (
          <button onClick={() => setState('idle')} className="text-accent-cyan hover:underline">
            Reset
          </button>
        )}
      </div>
    </div>
  )
}

// 19. Pointer-Responsive 3D Tilt Preview
export function TiltCardMiniPreview() {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [transform, setTransform] = useState('perspective(600px) rotateX(0deg) rotateY(0deg)')

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const rotX = -(y / (rect.height / 2)) * 8
    const rotY = (x / (rect.width / 2)) * 8
    setTransform(`perspective(600px) rotateX(${rotX.toFixed(1)}deg) rotateY(${rotY.toFixed(1)}deg) scale3d(1.02, 1.02, 1.02)`)
  }

  const handleLeave = () => {
    setTransform('perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
  }

  return (
    <div className="w-full h-36 rounded-lg border border-surface-border bg-surface-raised/40 flex items-center justify-center p-3 select-none">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
        className="w-full max-w-[220px] p-3 rounded-lg bg-surface border border-surface-border shadow-md transition-transform duration-100 ease-out cursor-pointer text-center"
        style={{ transform, transformStyle: 'preserve-3d' }}
      >
        <span className="text-xs font-bold text-text-primary">Move Mouse Over Me</span>
        <p className="text-[10px] text-accent-cyan mt-1">&plusmn;8&deg; 3D perspective</p>
      </div>
    </div>
  )
}

// 20. Clip-Path Polygon Mask Preview
export function ClipPathMiniPreview() {
  const [key, setKey] = useState(0)

  return (
    <div className="w-full h-36 rounded-lg border border-surface-border bg-surface-raised/40 flex flex-col justify-between p-3 select-none">
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <div
          key={key}
          className="animate-fade-in-up text-center"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
        >
          <span className="text-base font-black text-text-primary tracking-tight">
            Mask Emergence
          </span>
          <p className="text-[10px] text-accent-cyan font-mono mt-0.5">polygon() clip mask</p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-surface-border/40 pt-2 text-xs">
        <span className="text-[11px] text-text-muted">Geometric mask:</span>
        <button
          onClick={() => setKey((k) => k + 1)}
          className="text-xs px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-text-primary flex items-center gap-1"
        >
          <RotateCcw size={11} />
          <span>Replay Mask</span>
        </button>
      </div>
    </div>
  )
}

// 21. Continuous Scroll-Linked Animation Preview
export function ScrollLinkedMiniPreview() {
  const [angle, setAngle] = useState(45)

  return (
    <div className="w-full h-36 rounded-lg border border-surface-border bg-surface-raised/40 flex flex-col justify-between p-3 select-none">
      <div className="flex-1 flex items-center justify-center gap-4">
        {/* Continuous Rotating Dial */}
        <div
          className="w-16 h-16 rounded-full border-2 border-dashed border-accent-cyan/60 flex items-center justify-center transition-transform duration-75"
          style={{ transform: `rotate(${angle}deg)` }}
        >
          <div className="w-3 h-3 rounded-full bg-accent-violet shadow" />
        </div>

        <div className="text-left">
          <span className="text-xs font-mono font-bold text-accent-cyan">{angle}&deg; Rotation</span>
          <p className="text-[10px] text-text-muted">Continuous per-pixel update</p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-surface-border/40 pt-2 text-xs">
        <span className="text-[10px] text-text-muted">Drag to simulate scroll:</span>
        <input
          type="range"
          min="0"
          max="360"
          value={angle}
          onChange={(e) => setAngle(Number(e.target.value))}
          className="w-24 accent-cyan-400 cursor-pointer"
        />
      </div>
    </div>
  )
}

// 22. View & Panel Switcher Preview (Phase B item 22)
export function ViewTransitionPreview() {
  const [view, setView] = useState<'cards' | 'metrics'>('cards')

  return (
    <div className="w-full h-36 rounded-lg border border-surface-border bg-surface-raised/40 flex flex-col justify-between p-3 select-none">
      {/* View Switcher Header */}
      <div className="flex items-center justify-between pb-1 border-b border-surface-border/40">
        <span className="text-[11px] text-text-muted">Spatial Switcher:</span>
        <div className="flex items-center gap-1 p-0.5 rounded bg-surface-deep border border-surface-border">
          <button
            onClick={() => setView('cards')}
            className={`p-1 rounded text-xs transition-colors ${
              view === 'cards' ? 'bg-accent-violet text-white' : 'text-text-muted hover:text-white'
            }`}
            title="Card View"
          >
            <LayoutGrid size={12} />
          </button>
          <button
            onClick={() => setView('metrics')}
            className={`p-1 rounded text-xs transition-colors ${
              view === 'metrics' ? 'bg-accent-violet text-white' : 'text-text-muted hover:text-white'
            }`}
            title="Metrics View"
          >
            <BarChart3 size={12} />
          </button>
        </div>
      </div>

      {/* Animated Viewport */}
      <div className="flex-1 flex items-center justify-center overflow-hidden p-2">
        {view === 'cards' ? (
          <div className="animate-fade-in-up flex items-center gap-2 w-full justify-center">
            <div className="p-2 rounded bg-surface border border-surface-border text-[10px] text-text-primary">
              Card A
            </div>
            <div className="p-2 rounded bg-surface border border-surface-border text-[10px] text-text-primary">
              Card B
            </div>
          </div>
        ) : (
          <div className="animate-fade-in-up flex flex-col gap-1 w-full text-center">
            <span className="text-xs font-mono font-bold text-emerald-400">FPS: 60 Composited</span>
            <span className="text-[10px] text-text-muted">GPU Memory: 2.1 MB</span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-surface-border/40 pt-1.5 text-[11px] text-text-muted">
        <span>Active View: <strong className="text-text-primary capitalize">{view}</strong></span>
        <span className="text-accent-cyan">Cross-Fade</span>
      </div>
    </div>
  )
}
