import { useState } from 'react'
import SectionHeading from '../layout/SectionHeading'

export default function AnimatedBackgrounds() {
  const [gradientSpeed, setGradientSpeed] = useState<'slow' | 'normal' | 'paused'>('normal')
  const [orbTheme, setOrbTheme] = useState<'violet' | 'cyan'>('violet')
  const [gridActive, setGridActive] = useState<boolean>(true)

  const getGradientDuration = () => {
    switch (gradientSpeed) {
      case 'slow':
        return '24s'
      case 'normal':
        return '12s'
      case 'paused':
        return '0s'
    }
  }

  return (
    <section id="backgrounds" className="section-spacing bg-surface relative">
      <div className="container-main">
        <SectionHeading
          title="Animated Background Systems"
          subtitle="Three distinct background motion techniques. Each panel is completely isolated with its own boundary and live interactive controls."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Panel 1: Shifting Gradient */}
          <div className="glass-card flex flex-col justify-between overflow-hidden border border-surface-border">
            <div className="p-6">
              <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-accent-violet/15 text-accent-violet border border-accent-violet/30">
                CSS Keyframes
              </span>
              <h3 className="text-lg font-bold text-text-primary mt-2 mb-1">
                Multi-Stop Gradient Shift
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                Animates <code>background-position</code> across a 300% canvas.
              </p>

              {/* Live Canvas */}
              <div className="relative h-36 rounded-xl overflow-hidden border border-surface-border flex items-center justify-center select-none">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(135deg, #090d1a 0%, #4c1d95 30%, #0e7490 70%, #090d1a 100%)',
                    backgroundSize: '300% 300%',
                    animation:
                      gradientSpeed !== 'paused'
                        ? `gradient-shift ${getGradientDuration()} ease infinite`
                        : 'none',
                  }}
                />
                <span className="relative z-10 text-xs font-mono font-medium px-2.5 py-1 rounded bg-black/50 text-white backdrop-blur-sm border border-white/10">
                  Speed: {gradientSpeed.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="p-4 bg-surface-raised/60 border-t border-surface-border flex items-center justify-between text-xs">
              <span className="text-text-muted">Animation Speed:</span>
              <div className="flex items-center gap-1">
                {(['slow', 'normal', 'paused'] as const).map((spd) => (
                  <button
                    key={spd}
                    type="button"
                    onClick={() => setGradientSpeed(spd)}
                    className={`px-2 py-1 rounded capitalize text-[11px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-accent-cyan ${
                      gradientSpeed === spd
                        ? 'bg-accent-violet text-white font-semibold'
                        : 'bg-white/5 text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {spd}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Panel 2: Floating Luminous Orbs */}
          <div className="glass-card flex flex-col justify-between overflow-hidden border border-surface-border">
            <div className="p-6">
              <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30">
                3D Compositor
              </span>
              <h3 className="text-lg font-bold text-text-primary mt-2 mb-1">
                Luminous Radial Orbs
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                Blurred radial gradients animated with GPU-friendly <code>translate3d</code>.
              </p>

              {/* Live Canvas */}
              <div className="relative h-36 rounded-xl overflow-hidden border border-surface-border bg-surface-deep flex items-center justify-center select-none">
                <div
                  className="absolute rounded-full blur-xl opacity-45 pointer-events-none"
                  style={{
                    width: '90px',
                    height: '90px',
                    top: '15%',
                    left: '15%',
                    background: orbTheme === 'violet' ? '#7c3aed' : '#22d3ee',
                    animation: 'float-slow 8s ease-in-out infinite',
                  }}
                />
                <div
                  className="absolute rounded-full blur-xl opacity-40 pointer-events-none"
                  style={{
                    width: '80px',
                    height: '80px',
                    bottom: '15%',
                    right: '15%',
                    background: orbTheme === 'violet' ? '#ec4899' : '#3b82f6',
                    animation: 'float-slow-alt 7s ease-in-out infinite',
                  }}
                />
                <span className="relative z-10 text-xs font-mono font-medium px-2.5 py-1 rounded bg-black/50 text-white backdrop-blur-sm border border-white/10">
                  Theme: {orbTheme === 'violet' ? 'Violet Neon' : 'Cyan Deep'}
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="p-4 bg-surface-raised/60 border-t border-surface-border flex items-center justify-between text-xs">
              <span className="text-text-muted">Orb Color Theme:</span>
              <button
                type="button"
                onClick={() => setOrbTheme(orbTheme === 'violet' ? 'cyan' : 'violet')}
                className="btn btn-secondary text-xs py-1 px-3"
              >
                Toggle Theme
              </button>
            </div>
          </div>

          {/* Panel 3: Perspective Grid Overlay */}
          <div className="glass-card flex flex-col justify-between overflow-hidden border border-surface-border">
            <div className="p-6">
              <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                Geometry
              </span>
              <h3 className="text-lg font-bold text-text-primary mt-2 mb-1">
                Pulsing Vector Grid
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                Two orthogonal linear-gradients producing a clean blueprint matrix.
              </p>

              {/* Live Canvas */}
              <div className="relative h-36 rounded-xl overflow-hidden border border-surface-border bg-surface-deep flex items-center justify-center select-none">
                {gridActive && (
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(34, 211, 238, 0.4) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(34, 211, 238, 0.4) 1px, transparent 1px)
                      `,
                      backgroundSize: '24px 24px',
                    }}
                  />
                )}
                <span className="relative z-10 text-xs font-mono font-medium px-2.5 py-1 rounded bg-black/50 text-white backdrop-blur-sm border border-white/10">
                  Grid State: {gridActive ? 'ACTIVE' : 'MUTED'}
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="p-4 bg-surface-raised/60 border-t border-surface-border flex items-center justify-between text-xs">
              <span className="text-text-muted">Grid Visibility:</span>
              <button
                type="button"
                onClick={() => setGridActive(!gridActive)}
                className={`text-xs py-1 px-3 rounded font-medium transition-colors focus-visible:outline-2 focus-visible:outline-accent-cyan ${
                  gridActive
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-white/10 text-text-muted'
                }`}
              >
                {gridActive ? 'Disable Grid' : 'Enable Grid'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
