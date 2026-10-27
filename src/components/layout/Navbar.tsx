import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '../../utils/cn'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Hover', href: '#hover' },
  { label: 'Backgrounds', href: '#backgrounds' },
  { label: 'Text', href: '#text' },
  { label: 'Scroll', href: '#scroll' },
  { label: 'Lab', href: '#lab' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  // Close on Escape
  useEffect(() => {
    if (!menuOpen) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all',
        scrolled
          ? 'bg-surface-deep/90 backdrop-blur-md border-b border-surface-border shadow-lg shadow-black/20'
          : 'bg-transparent'
      )}
      style={{ transitionDuration: 'var(--duration-normal)' }}
    >
      <nav className="container-main flex items-center justify-between h-16 md:h-18" aria-label="Main navigation">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="gradient-text">Motion</span>
          <span className="text-text-primary">Lab</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-0.5 lg:gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="px-2 py-1.5 lg:px-3 lg:py-2 text-xs lg:text-sm font-medium text-text-secondary rounded-md transition-colors hover:text-text-primary hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
                style={{ transitionDuration: 'var(--duration-fast)' }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle with WCAG 44px touch target */}
        <button
          className="md:hidden flex items-center justify-center min-w-[44px] min-h-[44px] rounded-md text-text-secondary hover:text-text-primary hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity md:hidden',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        style={{ transitionDuration: 'var(--duration-normal)', top: 0 }}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        className={cn(
          'fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-surface border-l border-surface-border shadow-2xl shadow-black/50 transition-transform md:hidden z-50',
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        style={{ transitionDuration: 'var(--duration-normal)', transitionTimingFunction: 'var(--ease-smooth)' }}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-surface-border">
          <span className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Menu</span>
          <button
            onClick={closeMenu}
            className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-md text-text-secondary hover:text-text-primary hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan cursor-pointer"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <ul className="flex flex-col px-3 py-4 gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={closeMenu}
                className="block px-4 py-3 min-h-[44px] text-base font-medium text-text-secondary rounded-lg transition-colors hover:text-text-primary hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
