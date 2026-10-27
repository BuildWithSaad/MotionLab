import { useState } from 'react'
import { Zap, Layers, Sparkles } from 'lucide-react'

interface TabDefinition {
  id: string
  label: string
  icon: typeof Zap
  badge: string
  headline: string
  description: string
  bullets: string[]
}

const TABS: TabDefinition[] = [
  {
    id: 'micro',
    label: 'Micro-Interactions',
    icon: Zap,
    badge: '100ms - 200ms',
    headline: 'Instant Feedback for Human Inputs',
    description:
      'Micro-interactions confirm state changes immediately. Buttons compress slightly on active click, icons nudge forward on hover, and toggles glide smoothly.',
    bullets: [
      'Tactile button compression: transform: scale(0.98)',
      'Directional icon hinting: translate-x-1',
      'Accessible focus rings: 2px offset cyan outline',
    ],
  },
  {
    id: 'layout',
    label: 'Layout Transitions',
    icon: Layers,
    badge: '250ms - 400ms',
    headline: 'Seamless Spatial Context',
    description:
      'When containers expand, drawers open, or panels switch, layout animations maintain spatial continuity so users never lose their place in the UI hierarchy.',
    bullets: [
      'Drawer translation: transform: translateX(0)',
      'Grid row expansion: grid-template-rows: 1fr',
      'Opacity blending: opacity: 1 with ease-out',
    ],
  },
  {
    id: 'physics',
    label: 'Timing & Curves',
    icon: Sparkles,
    badge: 'Cubic Bezier',
    headline: 'Natural Friction & Momentum',
    description:
      'Digital motion feels premium when it simulates real-world mass. Fast acceleration paired with exponential deceleration yields crisp, professional velocity.',
    bullets: [
      'Decelerate curve: cubic-bezier(0.16, 1, 0.3, 1)',
      'Reduced-motion fallback: duration 0.01ms',
      'Compositor execution: 60 FPS GPU threads',
    ],
  },
]

export default function TabbedShowcase() {
  const [activeTabId, setActiveTabId] = useState('micro')
  const activeTab = TABS.find((t) => t.id === activeTabId) || TABS[0]

  return (
    <div className="w-full rounded-2xl bg-surface-deep/70 border border-surface-border p-5 sm:p-6">
      {/* Tab Header with animated pill indicator */}
      <div
        role="tablist"
        aria-label="Component motion topics"
        className="flex flex-wrap sm:flex-nowrap gap-1.5 p-1 rounded-xl bg-surface-raised border border-surface-border mb-6"
      >
        {TABS.map((tab) => {
          const isSelected = activeTabId === tab.id
          const Icon = tab.icon

          return (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isSelected}
              aria-controls={`tabpanel-${tab.id}`}
              onClick={() => setActiveTabId(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent-cyan ${
                isSelected
                  ? 'bg-gradient-to-r from-accent-violet to-accent-cyan text-white shadow-md shadow-accent-violet/20'
                  : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
              }`}
            >
              <Icon size={14} className={isSelected ? 'text-white' : 'text-accent-cyan'} />
              <span>{tab.label}</span>
            </button>
          )
        })}
      </div>

      {/* Tab Content with fade-in-up animation */}
      <div
        key={activeTab.id}
        role="tabpanel"
        id={`tabpanel-${activeTab.id}`}
        aria-labelledby={`tab-${activeTab.id}`}
        className="animate-fade-in-up"
      >
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30">
            {activeTab.badge}
          </span>
          <span className="text-[11px] text-text-muted">Interactive Panel</span>
        </div>

        <h4 className="text-base sm:text-lg font-bold text-text-primary mb-2">
          {activeTab.headline}
        </h4>

        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
          {activeTab.description}
        </p>

        <ul className="space-y-1.5 pt-2 border-t border-surface-border/50">
          {activeTab.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs font-mono text-text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
