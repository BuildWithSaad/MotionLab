import { useState } from 'react'
import SectionHeading from '../layout/SectionHeading'
import RevealOnScroll from '../demos/RevealOnScroll'
import { useParallaxContainer } from '../../hooks/useParallax'
import {
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  Maximize2,
  RotateCcw,
  Layers,
  Compass,
  Cpu,
  Eye,
  Sliders,
} from 'lucide-react'

export default function ScrollRevealSection() {
  const [globalReplayKey, setGlobalReplayKey] = useState(0)
  const [cardReplays, setCardReplays] = useState<Record<number, number>>({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  })

  // Hook calculating multi-layer parallax offsets and continuous scroll-linked progress
  const {
    ref: parallaxContainerRef,
    offsetSlow,
    offsetMedium,
    offsetOpposite,
    progress,
    scrollAngle,
  } = useParallaxContainer()

  const replayCard = (id: number) => {
    setCardReplays((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
  }

  const replayAll = () => {
    setGlobalReplayKey((k) => k + 1)
  }

  return (
    <section id="scroll" className="section-spacing bg-surface relative overflow-hidden">
      <div className="container-main">
        {/* Section Heading & Replay Control */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <SectionHeading
            title="Scroll-Driven Reveals & Parallax"
            subtitle="Demonstrating one-time viewport-triggered reveals, multi-layered depth parallax, and continuous scroll-linked property interpolation."
            className="mb-0"
          />

          <button
            type="button"
            onClick={replayAll}
            className="btn btn-secondary self-start md:self-auto text-xs py-2 px-4 shrink-0 shadow-sm"
            aria-label="Replay all reveal animations"
          >
            <RotateCcw size={14} className="text-accent-cyan" />
            <span>Replay All Reveals</span>
          </button>
        </div>

        {/* 1. Viewport-Triggered Reveals Grid (Effect 11) */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan flex items-center gap-1.5">
              <Eye size={13} />
              <span>IntersectionObserver Viewport Triggers</span>
            </span>
            <span className="text-xs text-text-muted">Threshold: 15% Viewport Entry</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Fade Up */}
            <RevealOnScroll
              animation="fade-up"
              delay={0}
              replayKey={globalReplayKey + cardReplays[1]}
            >
              <div className="glass-card p-6 h-full flex flex-col justify-between border border-surface-border hover:border-accent-violet/40 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-accent-violet/15 flex items-center justify-center text-accent-violet">
                      <ArrowUp size={18} />
                    </div>
                    <button
                      type="button"
                      onClick={() => replayCard(1)}
                      className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-text-muted hover:text-text-primary transition-colors"
                      title="Replay this card"
                    >
                      <RotateCcw size={12} />
                    </button>
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-1">Fade &amp; Slide Up</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Element rises 40px while fading from 0 to 1 upon crossing viewport threshold.
                  </p>
                </div>
                <div className="pt-4 mt-2 border-t border-surface-border/40 flex items-center justify-between text-[11px] font-mono text-accent-violet">
                  <span>translateY(40px)</span>
                  <span className="text-emerald-400">Active</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* 2. Slide Left */}
            <RevealOnScroll
              animation="slide-left"
              delay={120}
              replayKey={globalReplayKey + cardReplays[2]}
            >
              <div className="glass-card p-6 h-full flex flex-col justify-between border border-surface-border hover:border-accent-cyan/40 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-accent-cyan/15 flex items-center justify-center text-accent-cyan">
                      <ArrowLeft size={18} />
                    </div>
                    <button
                      type="button"
                      onClick={() => replayCard(2)}
                      className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-text-muted hover:text-text-primary transition-colors"
                      title="Replay this card"
                    >
                      <RotateCcw size={12} />
                    </button>
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-1">Slide In Left</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Horizontal translation from the left with cubic-bezier deceleration landing.
                  </p>
                </div>
                <div className="pt-4 mt-2 border-t border-surface-border/40 flex items-center justify-between text-[11px] font-mono text-accent-cyan">
                  <span>translateX(-48px)</span>
                  <span className="text-emerald-400">Active</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* 3. Slide Right */}
            <RevealOnScroll
              animation="slide-right"
              delay={240}
              replayKey={globalReplayKey + cardReplays[3]}
            >
              <div className="glass-card p-6 h-full flex flex-col justify-between border border-surface-border hover:border-accent-pink/40 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-accent-pink/15 flex items-center justify-center text-accent-pink">
                      <ArrowRight size={18} />
                    </div>
                    <button
                      type="button"
                      onClick={() => replayCard(3)}
                      className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-text-muted hover:text-text-primary transition-colors"
                      title="Replay this card"
                    >
                      <RotateCcw size={12} />
                    </button>
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-1">Slide In Right</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Counter-lateral entrance to balance directional flow across alternating cards.
                  </p>
                </div>
                <div className="pt-4 mt-2 border-t border-surface-border/40 flex items-center justify-between text-[11px] font-mono text-accent-pink">
                  <span>translateX(48px)</span>
                  <span className="text-emerald-400">Active</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* 4. Scale Up */}
            <RevealOnScroll
              animation="scale-up"
              delay={360}
              replayKey={globalReplayKey + cardReplays[4]}
            >
              <div className="glass-card p-6 h-full flex flex-col justify-between border border-surface-border hover:border-emerald-500/40 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400">
                      <Maximize2 size={18} />
                    </div>
                    <button
                      type="button"
                      onClick={() => replayCard(4)}
                      className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-text-muted hover:text-text-primary transition-colors"
                      title="Replay this card"
                    >
                      <RotateCcw size={12} />
                    </button>
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-1">Scale Snap</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Expands from 0.90 to 1.0 with zero translation, anchoring visual focus.
                  </p>
                </div>
                <div className="pt-4 mt-2 border-t border-surface-border/40 flex items-center justify-between text-[11px] font-mono text-emerald-400">
                  <span>scale(0.90) → 1.0</span>
                  <span className="text-emerald-400">Active</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* 2. Interactive Multi-Layer Parallax Showcase (Effect 14) & Continuous Scroll-Linked Stage (Effect 21) */}
        <div ref={parallaxContainerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Parallax Stage (Effect 14) */}
          <div className="glass-card p-6 sm:p-7 rounded-2xl border border-surface-border relative overflow-hidden flex flex-col justify-between min-h-[380px]">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-accent-violet/15 text-accent-violet border border-accent-violet/30">
                  Effect 14 — Layered Parallax
                </span>
                <span className="text-[11px] font-mono text-text-muted">Multi-Rate Scroll Depth</span>
              </div>

              <h3 className="text-lg font-bold text-text-primary mb-2">
                Multi-Layered Scroll Parallax
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                Scroll the page to watch background, midground, and foreground planes displace at three distinct physical velocities, creating authentic visual depth.
              </p>
            </div>

            {/* Visual Parallax Stage */}
            <div className="relative h-48 rounded-xl overflow-hidden border border-surface-border bg-surface-deep select-none">
              {/* Background Layer: Slow displacement */}
              <div
                className="absolute inset-0 transition-transform duration-75 ease-out opacity-25"
                style={{
                  transform: `translate3d(0, ${offsetSlow}px, 0)`,
                  backgroundImage: `
                    linear-gradient(rgba(124, 58, 237, 0.4) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(124, 58, 237, 0.4) 1px, transparent 1px)
                  `,
                  backgroundSize: '28px 28px',
                }}
              />

              {/* Midground Layer: Medium displacement card */}
              <div
                className="absolute inset-x-8 top-8 rounded-lg p-3 bg-surface-raised/90 border border-accent-violet/30 shadow-lg transition-transform duration-75 ease-out"
                style={{
                  transform: `translate3d(0, ${offsetMedium}px, 0)`,
                }}
              >
                <div className="flex items-center justify-between text-xs font-semibold text-text-primary mb-1">
                  <span className="flex items-center gap-1.5">
                    <Layers size={13} className="text-accent-violet" />
                    <span>Midground Card</span>
                  </span>
                  <span className="text-[10px] font-mono text-accent-violet">Rate: 0.18</span>
                </div>
                <p className="text-[11px] text-text-secondary">
                  Translates with medium scroll momentum ({offsetMedium}px).
                </p>
              </div>

              {/* Foreground Layer: Opposite displacement pill */}
              <div
                className="absolute right-6 bottom-5 rounded-full px-3 py-1 bg-accent-cyan text-surface-deep font-bold text-xs shadow-xl transition-transform duration-75 ease-out flex items-center gap-1.5"
                style={{
                  transform: `translate3d(0, ${offsetOpposite}px, 0)`,
                }}
              >
                <span>Foreground: {offsetOpposite}px</span>
              </div>
            </div>

            {/* Telemetry Bar */}
            <div className="mt-4 pt-3 border-t border-surface-border/50 flex flex-wrap items-center justify-between text-[11px] font-mono text-text-muted">
              <span>BG Layer: <strong className="text-accent-violet">{offsetSlow}px</strong></span>
              <span>Midground: <strong className="text-accent-cyan">{offsetMedium}px</strong></span>
              <span>Foreground: <strong className="text-emerald-400">{offsetOpposite}px</strong></span>
            </div>
          </div>

          {/* Continuous Scroll-Linked Animation Stage (Effect 21) */}
          <div className="glass-card p-6 sm:p-7 rounded-2xl border border-surface-border relative overflow-hidden flex flex-col justify-between min-h-[380px]">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30">
                  Effect 21 — Scroll-Linked
                </span>
                <span className="text-[11px] font-mono text-text-muted">Continuous Interpolation</span>
              </div>

              <h3 className="text-lg font-bold text-text-primary mb-2">
                Continuous Scroll Property Interpolation
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                Unlike one-time entry triggers, this property recalculates continuously on every scroll frame, driving continuous rotation, scale, and gauge expansion.
              </p>
            </div>

            {/* Visual Continuous Dial Stage */}
            <div className="relative h-48 rounded-xl overflow-hidden border border-surface-border bg-surface-deep flex items-center justify-center select-none p-4">
              {/* Rotating Compass Ring */}
              <div
                className="relative w-32 h-32 rounded-full border-2 border-dashed border-accent-cyan/40 flex items-center justify-center transition-transform duration-75 ease-out"
                style={{
                  transform: `rotate(${scrollAngle}deg)`,
                }}
              >
                {/* Orbital pointer pin */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-cyan shadow-md shadow-accent-cyan/50" />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-violet shadow-md shadow-accent-violet/50" />
              </div>

              {/* Inner Scale & Value Dial */}
              <div
                className="absolute rounded-full w-20 h-20 bg-surface-raised border border-surface-border flex flex-col items-center justify-center shadow-lg transition-transform duration-75 ease-out"
                style={{
                  transform: `scale(${0.85 + progress * 0.3})`,
                }}
              >
                <Compass size={18} className="text-accent-cyan mb-0.5" />
                <span className="text-xs font-mono font-bold text-text-primary">
                  {scrollAngle}&deg;
                </span>
              </div>
            </div>

            {/* Continuous Progress Bar & Readout */}
            <div className="mt-4 pt-3 border-t border-surface-border/50">
              <div className="flex items-center justify-between text-[11px] font-mono text-text-muted mb-1.5">
                <span>Section Scroll Progress:</span>
                <span className="text-accent-cyan font-bold">{Math.round(progress * 100)}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-surface-deep overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent-violet to-accent-cyan transition-all duration-75 ease-out"
                  style={{ width: `${Math.round(progress * 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3. Architectural Insight Card */}
        <div className="p-6 md:p-7 rounded-xl bg-surface-deep/80 border border-surface-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan shrink-0 mt-0.5">
              <Cpu size={22} />
            </div>
            <div>
              <h4 className="text-base font-semibold text-text-primary mb-1">
                IntersectionObserver vs. Continuous Scroll-Linked Animation
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-3xl">
                <strong>IntersectionObserver</strong> operates asynchronously in browser layout intervals to toggle CSS classes only when an element enters a visibility threshold. <strong>Scroll-linked animations</strong> sample scroll position per animation frame via <code className="text-accent-cyan">requestAnimationFrame</code> or native CSS scroll timelines to continuously modulate values like rotation, scale, or parallax position.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-stretch md:self-auto justify-end text-xs font-mono text-text-muted bg-surface-raised px-4 py-2.5 rounded-lg border border-surface-border shrink-0">
            <Sliders size={14} className="text-accent-cyan" />
            <span>Dual Engine Architecture</span>
          </div>
        </div>
      </div>
    </section>
  )
}
