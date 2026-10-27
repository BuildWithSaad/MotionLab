import { useEffect, useState, useRef } from 'react'

/**
 * Provides a subtle, restrained parallax translation (max +/- 24px)
 * using requestAnimationFrame for 60fps compositor performance.
 * Respects prefers-reduced-motion by returning 0 offset.
 */
export function useParallax(speed: number = 0.08, maxOffset: number = 24) {
  const [offsetY, setOffsetY] = useState(0)
  const elementRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Check reduced-motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      setOffsetY(0)
      return
    }

    let ticking = false

    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (elementRef.current) {
            const rect = elementRef.current.getBoundingClientRect()
            const windowHeight = window.innerHeight
            // Element relative to viewport center
            const elementCenter = rect.top + rect.height / 2
            const viewportCenter = windowHeight / 2
            const distance = elementCenter - viewportCenter

            // Restrain calculation within [-maxOffset, maxOffset]
            const calculated = Math.max(-maxOffset, Math.min(maxOffset, -distance * speed))
            setOffsetY(calculated)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [speed, maxOffset])

  return { ref: elementRef, offsetY }
}
