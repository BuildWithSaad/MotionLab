import { useState, useEffect } from 'react'
import SectionHeading from '../layout/SectionHeading'
import { RotateCcw, Sparkles, Scissors } from 'lucide-react'

export default function TextAnimations() {
  // 1. Typewriter state
  const phrases = [
    'Motion communicates hierarchy.',
    'Animations should feel physical.',
    '60 FPS compositor smoothness.',
  ]
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let charIndex = 0
    const targetText = phrases[phraseIndex]
    setDisplayedText('')

    const interval = setInterval(() => {
      if (charIndex < targetText.length) {
        setDisplayedText(targetText.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(interval)
      }
    }, 45)

    return () => clearInterval(interval)
  }, [phraseIndex])


  // 2. Clip-path reveal key
  const [clipKey, setClipKey] = useState(0)

  // 3. Gradient text palette
  const [gradientIdx, setGradientIdx] = useState(0)
  const gradients = [
    'linear-gradient(135deg, #7c3aed, #22d3ee)',
    'linear-gradient(135deg, #ec4899, #8b5cf6)',
    'linear-gradient(135deg, #10b981, #06b6d4)',
  ]

  return (
    <section id="text" className="section-spacing bg-surface-deep relative">
      <div className="container-main">
        <SectionHeading
          title="Text &amp; Entrance Animations"
          subtitle="Explore character typing, clip-path mask reveals, and gradient clipping. Typography animations focus user attention on crucial ideas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Typewriter Animation */}
          <div className="glass-card flex flex-col justify-between overflow-hidden border border-surface-border">
            <div className="p-6">
              <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-accent-violet/15 text-accent-violet border border-accent-violet/30">
                Typewriter
              </span>
              <h3 className="text-lg font-bold text-text-primary mt-2 mb-1">
                Character-by-Character
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                Reveals characters with dynamic typing cadence and a blinking cursor.
              </p>

              {/* Live Canvas */}
              <div className="h-32 rounded-xl bg-surface-raised border border-surface-border p-4 flex flex-col justify-center">
                <p className="font-mono text-sm sm:text-base font-semibold text-text-primary">
                  <span>{displayedText}</span>
                  <span className="inline-block w-2 h-4 bg-accent-cyan ml-1 animate-pulse align-middle" />
                </p>
              </div>
            </div>

            <div className="p-4 bg-surface-raised/60 border-t border-surface-border flex items-center justify-between text-xs">
              <span className="text-text-muted">Next Phrase:</span>
              <button
                type="button"
                onClick={() => setPhraseIndex((phraseIndex + 1) % phrases.length)}
                className="btn btn-primary text-xs py-1.5 px-3"
              >
                <RotateCcw size={12} />
                <span>Next Line</span>
              </button>
            </div>
          </div>

          {/* Card 2: Clip-Path Mask Reveal (Advanced Effect) */}
          <div className="glass-card flex flex-col justify-between overflow-hidden border border-surface-border">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30">
                  Advanced Effect
                </span>
                <span className="text-[11px] font-mono text-text-muted flex items-center gap-1">
                  <Scissors size={12} className="text-accent-cyan" />
                  <span>clip-path mask</span>
                </span>
              </div>
              <h3 className="text-lg font-bold text-text-primary mt-2 mb-1">
                Clip-Path Mask Slide
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                Reveals text by shifting out of a clipped polygon boundary.
              </p>

              {/* Live Canvas */}
              <div className="h-32 rounded-xl bg-surface-raised border border-surface-border p-4 flex items-center justify-center overflow-hidden">
                <div
                  key={clipKey}
                  className="animate-fade-in-up text-center"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                  }}
                >
                  <h4 className="text-xl sm:text-2xl font-black text-text-primary tracking-tight">
                    Clipped Reveal
                  </h4>
                  <p className="text-xs text-accent-cyan font-mono mt-1">
                    polygon(0 0, 100% 0, 100% 100%, 0 100%)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-surface-raised/60 border-t border-surface-border flex items-center justify-between text-xs">
              <span className="text-text-muted">Re-trigger Mask:</span>
              <button
                type="button"
                onClick={() => setClipKey((k) => k + 1)}
                className="btn btn-secondary text-xs py-1.5 px-3"
              >
                <RotateCcw size={12} />
                <span>Replay Mask</span>
              </button>
            </div>
          </div>

          {/* Card 3: Gradient Typography */}
          <div className="glass-card flex flex-col justify-between overflow-hidden border border-surface-border">
            <div className="p-6">
              <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                Background Clip
              </span>
              <h3 className="text-lg font-bold text-text-primary mt-2 mb-1">
                Gradient Headline Clipping
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                High-contrast multi-color stops mapped cleanly to text glyphs.
              </p>

              {/* Live Canvas */}
              <div className="h-32 rounded-xl bg-surface-raised border border-surface-border p-4 flex flex-col items-center justify-center text-center">
                <h4
                  className="text-2xl sm:text-3xl font-extrabold tracking-tight transition-all duration-300"
                  style={{
                    background: gradients[gradientIdx],
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Frontend Motion
                </h4>
                <span className="text-[11px] text-text-muted mt-2 font-mono">
                  Theme #{gradientIdx + 1}
                </span>
              </div>
            </div>

            <div className="p-4 bg-surface-raised/60 border-t border-surface-border flex items-center justify-between text-xs">
              <span className="text-text-muted">Palette Cycler:</span>
              <button
                type="button"
                onClick={() => setGradientIdx((gradientIdx + 1) % gradients.length)}
                className="btn btn-secondary text-xs py-1.5 px-3"
              >
                <Sparkles size={12} className="text-accent-cyan" />
                <span>Cycle Gradient</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
