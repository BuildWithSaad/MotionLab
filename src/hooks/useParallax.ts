import { useEffect, useState, useRef } from 'react'

interface ParallaxData {
  offsetSlow: number      // ~0.08 speed (background shapes)
  offsetMedium: number    // ~0.16 speed (midground cards)
  offsetOpposite: number  // ~-0.12 speed (counter-moving foreground)
  progress: number        // 0.0 to 1.0 progress through element's viewport journey
  scrollAngle: number     // 0 to 360 degrees continuous rotation
}

/**
 * High-performance scroll hook computing multi-layer parallax offsets and continuous
 * scroll-linked rotation/progress with requestAnimationFrame and prefers-reduced-motion fallback.
 */
export function useParallaxContainer() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [data, setData] = useState<ParallaxData>({
    offsetSlow: 0,
    offsetMedium: 0,
    offsetOpposite: 0,
    progress: 0,
    scrollAngle: 0,
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      return
    }

    let ticking = false

    function update() {
      if (!containerRef.current) {
        ticking = false
        return
      }

      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Progress: 0 when element top enters viewport bottom, 1 when element bottom exits viewport top
      const totalDistance = windowHeight + rect.height
      const currentPos = windowHeight - rect.top
      const rawProgress = Math.max(0, Math.min(1, currentPos / totalDistance))

      // Center distance: 0 when element center aligns with viewport center
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = windowHeight / 2
      const distanceFromCenter = elementCenter - viewportCenter

      // Restrained offsets with safe maximum clamps (+/- 45px)
      const slow = Math.max(-30, Math.min(30, -distanceFromCenter * 0.08))
      const medium = Math.max(-50, Math.min(50, -distanceFromCenter * 0.18))
      const opposite = Math.max(-40, Math.min(40, distanceFromCenter * 0.12))
      const angle = (rawProgress * 360) % 360

      setData({
        offsetSlow: Math.round(slow * 10) / 10,
        offsetMedium: Math.round(medium * 10) / 10,
        offsetOpposite: Math.round(opposite * 10) / 10,
        progress: Math.round(rawProgress * 100) / 100,
        scrollAngle: Math.round(angle),
      })

      ticking = false
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return { ref: containerRef, ...data }
}
