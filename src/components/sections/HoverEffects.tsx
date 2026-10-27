import SectionHeading from '../layout/SectionHeading'
import TiltCard from '../demos/TiltCard'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function HoverEffects() {
  return (
    <section id="hover" className="section-spacing bg-surface-deep relative">
      <div className="container-main">
        <SectionHeading
          title="Interactive Hover Effects"
          subtitle="Tactile micro-interactions for buttons, links, cards, and preview media. Notice how hover states provide instant physical feedback without abrupt layout jumps."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* 1. Button Micro-Interactions */}
          <div className="glass-card p-6 flex flex-col justify-between border border-surface-border">
            <div>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-accent-violet/15 text-accent-violet border border-accent-violet/30">
                Buttons
              </span>
              <h3 className="text-base font-bold text-text-primary mt-3 mb-1.5">
                Elevated Action Buttons
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                Buttons lift slightly on hover (-2px) while casting an expanded ambient glow shadow and compressing on active click.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <button
                type="button"
                className="btn btn-primary w-full group text-xs py-2.5"
              >
                <span>Primary Action</span>
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                className="btn btn-secondary w-full group text-xs py-2.5"
              >
                <span>Secondary Shimmer</span>
                <Sparkles
                  size={14}
                  className="text-accent-cyan transition-transform duration-200 group-hover:rotate-12"
                />
              </button>
            </div>
          </div>

          {/* 2. Card Elevation & Border Light */}
          <div className="glass-card p-6 flex flex-col justify-between border border-surface-border">
            <div>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30">
                Containers
              </span>
              <h3 className="text-base font-bold text-text-primary mt-3 mb-1.5">
                Card Elevation &amp; Border Tint
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                Cards elevate using translateY(-6px) with an exponential drop shadow that mimics distance from the dark surface plane.
              </p>
            </div>

            <div
              tabIndex={0}
              role="region"
              aria-label="Interactive card elevation preview"
              className="p-4 rounded-xl bg-surface border border-surface-border shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-violet/20 hover:border-accent-cyan/50 focus-visible:outline-2 focus-visible:outline-accent-cyan cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-text-primary">Hover or Focus</span>
                <span className="text-[11px] text-accent-cyan font-mono">-6px lift</span>
              </div>
              <p className="text-xs text-text-muted leading-tight">
                Transforms only composite properties for constant 60 FPS motion.
              </p>
            </div>
          </div>

          {/* 3. Media Preview Zoom & Overlay */}
          <div className="glass-card p-6 flex flex-col justify-between border border-surface-border">
            <div>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                Media
              </span>
              <h3 className="text-base font-bold text-text-primary mt-3 mb-1.5">
                Image Zoom &amp; Overlay Reveal
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                The inner canvas scales to 108% while the outer frame enforces <code>overflow: hidden</code>, revealing badge metadata.
              </p>
            </div>

            <div
              tabIndex={0}
              role="region"
              aria-label="Image zoom preview card"
              className="group relative h-28 rounded-xl overflow-hidden border border-surface-border cursor-pointer focus-visible:outline-2 focus-visible:outline-accent-cyan select-none"
            >
              <div
                className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-110"
                style={{
                  background:
                    'linear-gradient(135deg, #1e1b4b 0%, #064e3b 50%, #0f172a 100%)',
                }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-white">
                <span className="font-semibold text-xs drop-shadow">scale(1.08)</span>
                <span className="text-[10px] bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Revealed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Row: Underlines & Optional Advanced 3D Tilt */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Animated Underlines & Navigation Links */}
          <div className="glass-card p-6 md:p-7 flex flex-col justify-between border border-surface-border">
            <div>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-amber-500/15 text-amber-400 border border-amber-500/30">
                Typography Links
              </span>
              <h3 className="text-lg font-bold text-text-primary mt-2 mb-1.5">
                Expanding Underline Transitions
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-5">
                Standard CSS text-decoration cannot be animated smoothly. Using an <code>::after</code> pseudo-element with <code>scaleX</code> allows fluid directional expansion.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-deep/60 border border-surface-border space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-muted">Left-to-right Origin:</span>
                <button
                  type="button"
                  className="group relative text-sm font-semibold text-text-primary hover:text-accent-cyan transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan rounded px-1"
                >
                  <span>Explore Design System</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-cyan scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              </div>

              <div className="flex items-center justify-between border-t border-surface-border/40 pt-3">
                <span className="text-xs text-text-muted">Center-out Origin:</span>
                <button
                  type="button"
                  className="group relative text-sm font-semibold text-text-primary hover:text-accent-violet transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet rounded px-1"
                >
                  <span>Browse Source Code</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-violet scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100 transition-transform duration-300 origin-center" />
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Effect: Restrained 3D Tilt Card */}
          <TiltCard />
        </div>
      </div>
    </section>
  )
}
