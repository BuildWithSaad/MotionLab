import { useState } from 'react'
import { ChevronDown, Sparkles } from 'lucide-react'

interface AccordionItem {
  id: string
  title: string
  content: string
  tag: string
}

const ACCORDION_ITEMS: AccordionItem[] = [
  {
    id: 'spring-physics',
    title: 'Why use CSS cubic-bezier over linear easing?',
    tag: 'Motion Curves',
    content:
      'Natural physical objects accelerate and decelerate gradually due to friction and inertia. Linear easing feels robotic, while cubic-bezier(0.16, 1, 0.3, 1) provides rapid initial acceleration followed by an organic, decelerating landing.',
  },
  {
    id: 'gpu-layers',
    title: 'Which CSS properties trigger GPU compositor layers?',
    tag: 'Performance',
    content:
      'Only transform (translate3d, scale, rotate) and opacity are fully composited by the GPU without triggering document layout recalculation or repainting. Animating width, height, top, left, or margin causes layout thrashing.',
  },
  {
    id: 'reduced-motion',
    title: 'How does prefers-reduced-motion protect users?',
    tag: 'Accessibility',
    content:
      'Vestibular disorders can trigger motion sickness, vertigo, and migraines from rapid movement or parallax. By querying @media (prefers-reduced-motion: reduce), websites can immediately disable large-scale movement while retaining functional visual state changes.',
  },
]

export default function Accordion() {
  const [openId, setOpenId] = useState<string | null>('spring-physics')

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="w-full space-y-3">
      {ACCORDION_ITEMS.map((item) => {
        const isOpen = openId === item.id

        return (
          <div
            key={item.id}
            className={`rounded-xl border transition-colors duration-200 overflow-hidden ${
              isOpen
                ? 'bg-surface-raised border-accent-violet/40 shadow-lg shadow-black/20'
                : 'bg-surface-deep/60 border-surface-border hover:border-surface-border/80'
            }`}
          >
            <h3>
              <button
                type="button"
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
                aria-controls={`accordion-panel-${item.id}`}
                id={`accordion-btn-${item.id}`}
                className="w-full px-5 py-4 flex items-center justify-between text-left gap-4 focus-visible:outline-2 focus-visible:outline-accent-cyan cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs px-2 py-0.5 rounded font-mono bg-accent-violet/10 text-accent-violet border border-accent-violet/20">
                    {item.tag}
                  </span>
                  <span className="text-sm font-semibold text-text-primary">
                    {item.title}
                  </span>
                </div>

                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center bg-white/5 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-accent-violet/20 text-accent-cyan' : 'text-text-muted'
                  }`}
                >
                  <ChevronDown size={16} />
                </div>
              </button>
            </h3>

            {/* Fluid height transition via modern CSS grid */}
            <div
              id={`accordion-panel-${item.id}`}
              role="region"
              aria-labelledby={`accordion-btn-${item.id}`}
              className="grid transition-all duration-300 ease-in-out"
              style={{
                gridTemplateRows: isOpen ? '1fr' : '0fr',
              }}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-surface-border/40">
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      <div className="pt-2 flex items-center gap-2 text-xs text-text-muted">
        <Sparkles size={13} className="text-accent-violet" />
        <span>Smooth expansion powered by CSS grid transition (no fixed height hardcoding)</span>
      </div>
    </div>
  )
}
