import { useState, useMemo } from 'react'
import SectionHeading from '../layout/SectionHeading'
import DemoCard from '../demos/DemoCard'
import { CATEGORIES, EFFECTS_DATA, type EffectCategory } from '../../data/effects'
import { Filter } from 'lucide-react'

export default function AnimationGallery() {
  const [activeCategory, setActiveCategory] = useState<EffectCategory | 'all'>('all')

  // Filter effects based on active category
  const filteredEffects = useMemo(() => {
    if (activeCategory === 'all') {
      return EFFECTS_DATA
    }
    return EFFECTS_DATA.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="gallery" className="section-spacing bg-surface relative">
      <div className="container-main">
        {/* Section Heading */}
        <SectionHeading
          title="Interactive Animation Gallery"
          subtitle="A comprehensive collection of core frontend motion patterns. Filter by category, test the live visual demos, and inspect the code behind each effect."
        />

        {/* Category Filters Bar */}
        <div className="mb-10 flex flex-wrap items-center gap-2" role="tablist" aria-label="Effect categories">
          <div className="flex items-center gap-1.5 text-xs text-text-muted mr-2 py-1">
            <Filter size={14} className="text-accent-cyan" />
            <span className="font-semibold uppercase tracking-wider">Filter:</span>
          </div>

          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id
            const count =
              cat.id === 'all'
                ? EFFECTS_DATA.length
                : EFFECTS_DATA.filter((e) => e.category === cat.id).length

            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent-cyan ${
                  isSelected
                    ? 'bg-gradient-to-r from-accent-violet to-accent-cyan text-white shadow-md shadow-accent-violet/25 scale-[1.02]'
                    : 'bg-surface-raised/80 text-text-secondary hover:text-text-primary hover:bg-surface-raised border border-surface-border'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? 'bg-white/25 text-white' : 'bg-black/30 text-text-muted'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Results Counter Info */}
        <div className="mb-6 flex items-center justify-between text-xs text-text-muted">
          <span>
            Showing <strong className="text-text-primary">{filteredEffects.length}</strong> {filteredEffects.length === 1 ? 'demonstration' : 'demonstrations'}
          </span>
          {activeCategory !== 'all' && (
            <button
              onClick={() => setActiveCategory('all')}
              className="text-accent-cyan hover:underline transition-colors focus-visible:outline-none"
            >
              Reset to All
            </button>
          )}
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEffects.map((effect) => (
            <DemoCard key={effect.id} effect={effect} />
          ))}
        </div>
      </div>
    </section>
  )
}
