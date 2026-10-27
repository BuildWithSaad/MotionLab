import { Eye, Sliders, Code } from 'lucide-react'
import SectionHeading from '../layout/SectionHeading'

const FEATURES = [
  {
    icon: Eye,
    title: 'Live Previews',
    description: 'Every effect runs in real time — not a screenshot. See exactly how each animation behaves.',
  },
  {
    icon: Sliders,
    title: 'Interactive Controls',
    description: 'Toggle, trigger and tweak effects to understand how they respond to parameters and user input.',
  },
  {
    icon: Code,
    title: 'Production Patterns',
    description: 'Built with CSS transforms, transitions and React state — the same techniques you will use in real projects.',
  },
]

export default function IntroSection() {
  return (
    <section id="intro" className="section-spacing bg-surface-deep">
      <div className="container-main">
        <SectionHeading
          title="What is MotionLab?"
          subtitle="A hands-on workshop for frontend motion design. Scroll, hover, click and explore — every section teaches a technique through a working example."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="glass-card p-6 md:p-8 transition-all group"
              style={{
                transitionDuration: 'var(--duration-normal)',
                transitionTimingFunction: 'var(--ease-smooth)',
              }}
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-accent-violet-soft mb-5">
                <Icon size={20} className="text-accent-violet" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
