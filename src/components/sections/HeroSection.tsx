import { ArrowRight, Sparkles, Zap, Code2, ShieldCheck } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* 1. Smoothly animated gradient background */}
      <div
        className="absolute inset-0 -z-20 hero-gradient-bg pointer-events-none"
        aria-hidden="true"
      />

      {/* 2. Isolated floating gradient orbs container (strictly pointer-events-none & overflow-hidden) */}
      <div
        className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Violet luminous orb */}
        <div
          className="absolute rounded-full blur-3xl opacity-35"
          style={{
            width: 'min(480px, 80vw)',
            height: 'min(480px, 80vw)',
            top: '8%',
            left: '-4%',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.45) 0%, rgba(124, 58, 237, 0) 70%)',
            animation: 'float-slow 22s ease-in-out infinite',
            willChange: 'transform',
          }}
        />

        {/* Cyan luminous orb */}
        <div
          className="absolute rounded-full blur-3xl opacity-25"
          style={{
            width: 'min(420px, 75vw)',
            height: 'min(420px, 75vw)',
            bottom: '8%',
            right: '-4%',
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, rgba(34, 211, 238, 0) 70%)',
            animation: 'float-slow-alt 19s ease-in-out infinite',
            willChange: 'transform',
          }}
        />

        {/* Pink/Magenta accent orb */}
        <div
          className="absolute rounded-full blur-3xl opacity-15"
          style={{
            width: 'min(320px, 60vw)',
            height: 'min(320px, 60vw)',
            top: '52%',
            left: '38%',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.35) 0%, rgba(236, 72, 153, 0) 70%)',
            animation: 'float-slow-reverse 26s ease-in-out infinite',
            willChange: 'transform',
          }}
        />

        {/* Subtle geometric grid texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Hero Content with staggered entrance animations */}
      <div className="container-main text-center py-20 md:py-28 relative z-10 max-w-4xl">
        {/* Step 1: Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-surface-border bg-surface-glass text-xs font-medium text-text-secondary mb-6 backdrop-blur-md shadow-sm">
          <Sparkles size={13} className="text-accent-violet animate-pulse" />
          <span>Interactive Frontend Animation Playground</span>
        </div>

        {/* Step 2: Headline with gradient emphasis */}
        <h1 className="animate-fade-in-up animate-delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12] mb-6 text-text-primary">
          Master{' '}
          <span className="gradient-text font-black">Web Animations</span>
          <br className="hidden sm:inline" /> through Live Code
        </h1>

        {/* Step 3: Supporting text */}
        <p className="animate-fade-in-up animate-delay-200 text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-9 leading-relaxed">
          Explore hover effects, scroll reveals, micro-interactions and transitions — built with pure CSS and React. Learn the anatomy of fluid motion through hands-on interaction.
        </p>

        {/* Step 4: Staggered CTA Controls with refined micro-interactions */}
        <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#gallery"
            className="btn btn-primary group w-full sm:w-auto"
            aria-label="Explore animation gallery"
          >
            <span>Explore Effects</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-200 ease-out group-hover:translate-x-1"
            />
          </a>

          <a
            href="#lab"
            className="btn btn-secondary w-full sm:w-auto"
            aria-label="Jump to interactive component lab"
          >
            <span>Component Lab</span>
          </a>
        </div>

        {/* Step 5: Feature highlights pill row */}
        <div className="animate-fade-in-up animate-delay-400 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-6 border-t border-surface-border/60 text-xs text-text-muted">
          <span className="inline-flex items-center gap-1.5">
            <Zap size={14} className="text-accent-cyan" />
            60 FPS GPU-Accelerated
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Code2 size={14} className="text-accent-violet" />
            Zero Animation Libraries
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-emerald-400" />
            Reduced-Motion Compliant
          </span>
        </div>
      </div>

      {/* Bottom gradient fade into page flow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none -z-10"
        style={{
          background: 'linear-gradient(to top, var(--color-surface-deep), transparent)',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
