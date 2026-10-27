import SectionHeading from '../layout/SectionHeading'
import RevealOnScroll from '../demos/RevealOnScroll'
import { useParallax } from '../../hooks/useParallax'
import { Eye, ArrowUp, ArrowLeft, ArrowRight, Maximize2, Cpu } from 'lucide-react'

export default function ScrollRevealSection() {
  const { ref: parallaxRef, offsetY } = useParallax(0.06, 20)

  return (
    <section id="scroll" className="section-spacing bg-surface relative overflow-hidden">
      {/* Restrained decorative parallax element behind content */}
      <div
        ref={parallaxRef}
        className="absolute -right-20 top-1/4 w-96 h-96 rounded-full blur-3xl bg-accent-violet/10 pointer-events-none select-none -z-10 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(0, ${offsetY}px, 0)`,
          willChange: 'transform',
        }}
        aria-hidden="true"
      />

      <div className="container-main">
        <SectionHeading
          title="Scroll-Driven Reveals & Parallax"
          subtitle="IntersectionObserver triggers entrance effects seamlessly as elements enter the viewport without costly window scroll event listeners."
        />

        {/* Grid of 4 entrance animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* 1. Fade Up */}
          <RevealOnScroll animation="fade-up" delay={0}>
            <div className="glass-card p-6 h-full flex flex-col justify-between border border-surface-border hover:border-accent-violet/40 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-accent-violet/15 flex items-center justify-center text-accent-violet mb-4">
                  <ArrowUp size={20} />
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2">Fade &amp; Slide Up</h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Default reveal pattern. Moves up 32px while interpolating opacity from 0 to 1.
                </p>
              </div>
              <span className="text-[11px] font-mono text-accent-violet mt-4">translateY(32px)</span>
            </div>
          </RevealOnScroll>

          {/* 2. Slide Left */}
          <RevealOnScroll animation="slide-left" delay={120}>
            <div className="glass-card p-6 h-full flex flex-col justify-between border border-surface-border hover:border-accent-cyan/40 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-accent-cyan/15 flex items-center justify-center text-accent-cyan mb-4">
                  <ArrowLeft size={20} />
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2">Slide In Left</h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Enters from the left. Ideal for asymmetric feature grids or side-by-side callouts.
                </p>
              </div>
              <span className="text-[11px] font-mono text-accent-cyan mt-4">translateX(-32px)</span>
            </div>
          </RevealOnScroll>

          {/* 3. Slide Right */}
          <RevealOnScroll animation="slide-right" delay={240}>
            <div className="glass-card p-6 h-full flex flex-col justify-between border border-surface-border hover:border-accent-pink/40 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-accent-pink/15 flex items-center justify-center text-accent-pink mb-4">
                  <ArrowRight size={20} />
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2">Slide In Right</h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Enters from the right to balance directional layout flow across alternating sections.
                </p>
              </div>
              <span className="text-[11px] font-mono text-accent-pink mt-4">translateX(32px)</span>
            </div>
          </RevealOnScroll>

          {/* 4. Scale Up */}
          <RevealOnScroll animation="scale-up" delay={360}>
            <div className="glass-card p-6 h-full flex flex-col justify-between border border-surface-border hover:border-emerald-500/40 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 mb-4">
                  <Maximize2 size={20} />
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2">Scale Reveal</h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Gently scales from 0.95 to 1.0 with zero translation, creating a punchy focal snap.
                </p>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 mt-4">scale(0.95) → 1.0</span>
            </div>
          </RevealOnScroll>
        </div>

        {/* Architectural Insight Card */}
        <RevealOnScroll animation="fade-up" delay={150}>
          <div className="p-6 md:p-8 rounded-xl bg-surface-deep/80 border border-surface-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan shrink-0 mt-0.5">
                <Cpu size={24} />
              </div>
              <div>
                <h4 className="text-base font-semibold text-text-primary mb-1">
                  Why IntersectionObserver over window.onscroll?
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">
                  Traditional scroll listeners fire dozens of times per second and can cause scroll jank by forcing synchronous layout recalibration. <code className="text-accent-cyan text-xs">IntersectionObserver</code> runs asynchronously in browser rendering internals and disconnects once triggered for maximum battery and CPU efficiency.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-stretch md:self-auto justify-end text-xs font-mono text-text-muted bg-surface-raised px-4 py-2.5 rounded-lg border border-surface-border shrink-0">
              <Eye size={14} className="text-emerald-400" />
              <span>Zero Idle CPU Cost</span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
