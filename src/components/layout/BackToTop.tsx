import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { cn } from '../../utils/cn'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let ticking = false

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          setVisible(window.scrollY > 500)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-6 right-6 z-40 flex items-center justify-center w-11 h-11 rounded-full',
        'bg-surface-raised border border-surface-border shadow-lg shadow-black/30',
        'text-text-secondary hover:text-text-primary hover:border-accent-violet hover:shadow-accent-violet/20',
        'transition-all focus-visible:outline-2 focus-visible:outline-accent-cyan',
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      )}
      style={{
        transitionDuration: 'var(--duration-normal)',
        transitionTimingFunction: 'var(--ease-smooth)',
      }}
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} />
    </button>
  )
}
