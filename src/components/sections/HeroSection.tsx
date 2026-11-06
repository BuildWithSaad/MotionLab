import { useRef, useEffect, useState } from 'react'
import { ArrowRight, Sparkles, Zap, Code2, ShieldCheck } from 'lucide-react'
import HeroBackground from './HeroBackground'

export default function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  // ── Smooth parallax tilt on mouse move ──
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    let target = { x: 0, y: 0 }
    let current = { x: 0, y: 0 }
    let raf = 0

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      current.x = lerp(current.x, target.x, 0.08)
      current.y = lerp(current.y, target.y, 0.08)
      setTilt({ x: current.x, y: current.y })
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    const onMove = (e: MouseEvent) => {
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      // Normalise to -1 ... 1
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      target = { x: nx, y: ny }
    }
    const onLeave = () => { target = { x: 0, y: 0 } }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{ isolation: 'isolate' }}
    >
      {/* 1. Animated gradient base */}
      <div
        className="absolute inset-0 hero-gradient-bg pointer-events-none"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      />

      {/* 2. Canvas background */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      >
        <HeroBackground />
      </div>

      {/* 3. Floating orbs */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: 2 }}
        aria-hidden="true"
      >
        <div
          className="absolute rounded-full blur-3xl opacity-20"
          style={{
            width: 'min(480px, 80vw)',
            height: 'min(480px, 80vw)',
            top: '5%',
            left: '-6%',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.5) 0%, rgba(124, 58, 237, 0) 70%)',
            animation: 'float-slow 22s ease-in-out infinite',
            willChange: 'transform',
          }}
        />
        <div
          className="absolute rounded-full blur-3xl opacity-15"
          style={{
            width: 'min(420px, 75vw)',
            height: 'min(420px, 75vw)',
            bottom: '5%',
            right: '-6%',
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.45) 0%, rgba(34, 211, 238, 0) 70%)',
            animation: 'float-slow-alt 19s ease-in-out infinite',
            willChange: 'transform',
          }}
        />
      </div>

      {/* 4. Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none hero-noise"
        style={{ zIndex: 3 }}
        aria-hidden="true"
      />

      {/* 5. Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 4,
          background:
            'radial-gradient(ellipse 75% 65% at 50% 45%, transparent 0%, rgba(10, 14, 26, 0.5) 100%)',
        }}
        aria-hidden="true"
      />

      {/* ═══ Hero Content with parallax tilt ═══ */}
      <div
        ref={contentRef}
        className="container-main text-center py-20 md:py-28 max-w-4xl"
        style={{
          zIndex: 10,
          position: 'relative',
          transform: `translate3d(${tilt.x * -8}px, ${tilt.y * -5}px, 0)`,
          willChange: 'transform',
        }}
      >
        {/* ── Animated gradient-border badge ── */}
        <div className="animate-fade-in-up inline-block mb-7">
          <div className="hero-badge-border rounded-full p-px">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-deep/80 backdrop-blur-xl text-xs font-medium text-text-secondary">
              <Sparkles size={13} className="text-accent-violet hero-icon-spin" />
              <span>Interactive Frontend Animation Playground</span>
            </div>
          </div>
        </div>

        {/* ── Headline with shimmer ── */}
        <h1 className="animate-fade-in-up animate-delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12] mb-6 text-text-primary">
          Master{' '}
          <span className="hero-shimmer-text font-black">Web Animations</span>
          <br className="hidden sm:inline" /> through Live Code
        </h1>

        {/* ── Subtext ── */}
        <p className="animate-fade-in-up animate-delay-200 text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          Explore hover effects, scroll reveals, micro-interactions and transitions — built with pure CSS and React. Learn the anatomy of fluid motion through hands-on interaction.
        </p>

        {/* ── CTAs with glow ring ── */}
        <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <div className="relative w-full sm:w-auto group">
            {/* Animated glow behind primary button */}
            <div
              className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(139,92,246,0.5), rgba(34,211,238,0.4))',
              }}
              aria-hidden="true"
            />
            <a
              href="#gallery"
              className="btn btn-primary group/btn relative w-full sm:w-auto"
              aria-label="Explore animation gallery"
            >
              <span>Explore Effects</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-200 ease-out group-hover/btn:translate-x-1"
              />
            </a>
          </div>

          <a
            href="#lab"
            className="btn btn-secondary w-full sm:w-auto"
            aria-label="Jump to interactive component lab"
          >
            <span>Component Lab</span>
          </a>
        </div>

        {/* ── Feature pills with animated separator ── */}
        <div className="animate-fade-in-up animate-delay-400">
          {/* Animated gradient line */}
          <div className="hero-gradient-line mx-auto mb-5" />

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-text-muted">
            <span className="inline-flex items-center gap-1.5 hero-pill">
              <Zap size={14} className="text-accent-cyan" />
              60 FPS GPU-Accelerated
            </span>
            <span className="inline-flex items-center gap-1.5 hero-pill">
              <Code2 size={14} className="text-accent-violet" />
              Zero Animation Libraries
            </span>
            <span className="inline-flex items-center gap-1.5 hero-pill">
              <ShieldCheck size={14} className="text-emerald-400" />
              Reduced-Motion Compliant
            </span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          zIndex: 5,
          background: 'linear-gradient(to top, var(--color-surface-deep), transparent)',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
