import { Heart } from 'lucide-react'

const FOOTER_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Hover Effects', href: '#hover' },
  { label: 'Backgrounds', href: '#backgrounds' },
  { label: 'Text', href: '#text' },
  { label: 'Scroll', href: '#scroll' },
  { label: 'Component Lab', href: '#lab' },
]

export default function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface-deep">
      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <a
              href="#hero"
              className="group inline-flex items-center mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan rounded-lg transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              aria-label="MotionLab Home"
            >
              <img
                src="/logo.png"
                alt="MotionLab"
                className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-all duration-300 drop-shadow-[0_2px_12px_rgba(34,211,238,0.18)] group-hover:drop-shadow-[0_4px_22px_rgba(124,58,237,0.4)]"
              />
            </a>
            <p className="text-sm text-text-secondary max-w-xs leading-relaxed">
              An interactive playground for learning website animations, UI effects, and micro-interactions through live demonstrations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {FOOTER_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    style={{ transitionDuration: 'var(--duration-fast)' }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">About</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              MotionLab is a workshop resource for students learning frontend animation and visual polish. Every effect on this page is built with CSS and React — no animation libraries required.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} MotionLab. Built for learning.
          </p>
          <p className="text-xs text-text-muted flex items-center gap-1">
            Made with <Heart size={12} className="text-accent-pink" /> using React, Vite &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
