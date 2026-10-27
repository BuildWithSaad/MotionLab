import SectionHeading from '../layout/SectionHeading'
import Accordion from '../interactive/Accordion'
import ModalDemo from '../interactive/Modal'
import TabbedShowcase from '../interactive/TabbedShowcase'
import FeedbackStateDemo from '../interactive/FeedbackStateDemo'

export default function ComponentLab() {
  return (
    <section id="lab" className="section-spacing bg-surface-deep relative">
      <div className="container-main">
        <SectionHeading
          title="Interactive Component Lab"
          subtitle="Real, working UI components demonstrating animated disclosure, modal dialogs, tab indicators, and asynchronous feedback states."
        />

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Card 1: Animated Accordion */}
          <div className="glass-card p-6 md:p-8 flex flex-col justify-between h-full border border-surface-border">
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-violet">
                Disclosure Animation
              </span>
              <h3 className="text-xl font-bold text-text-primary mt-1 mb-2">
                Fluid Animated Accordion
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Expands and collapses panels using CSS grid row interpolation. No arbitrary max-height values or JavaScript height polling required.
              </p>
            </div>

            <Accordion />
          </div>

          {/* Card 2: Accessible Modal */}
          <div className="glass-card p-6 md:p-8 flex flex-col justify-between h-full border border-surface-border">
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">
                Overlay &amp; Dialog
              </span>
              <h3 className="text-xl font-bold text-text-primary mt-1 mb-2">
                Accessible Scale-In Modal
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Coordinates a backdrop blur cross-fade with a springy dialog scale entrance. Handles focus restoration and Escape key dismissal natively.
              </p>
            </div>

            <ModalDemo />
          </div>

          {/* Card 3: Interactive Tabs */}
          <div className="glass-card p-6 md:p-8 flex flex-col justify-between h-full border border-surface-border">
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Navigation &amp; Views
              </span>
              <h3 className="text-xl font-bold text-text-primary mt-1 mb-2">
                Animated Tab Indicator
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Transitions active selection states with GPU-accelerated gradient pill indicators and fading content viewports.
              </p>
            </div>

            <TabbedShowcase />
          </div>

          {/* Card 4: Feedback States */}
          <div className="glass-card p-6 md:p-8 flex flex-col justify-between h-full border border-surface-border">
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-pink">
                Progress &amp; Feedback
              </span>
              <h3 className="text-xl font-bold text-text-primary mt-1 mb-2">
                Async Feedback Pipeline
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Communicates operation stages from idle initiation to spinning computation and completed checkmark confirmation.
              </p>
            </div>

            <FeedbackStateDemo />
          </div>
        </div>
      </div>
    </section>
  )
}
