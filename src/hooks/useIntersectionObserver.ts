import { useEffect, useRef, useState, type RefObject } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  freezeOnceVisible?: boolean
}

/**
 * Tracks whether an element is visible in the viewport using IntersectionObserver.
 * Disconnects once visible (by default) to save performance.
 */
export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
  options: UseIntersectionObserverOptions = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0.15, rootMargin = '0px', freezeOnceVisible = true } = options
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Fallback if IntersectionObserver is not available or reduced-motion is requested
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (freezeOnceVisible) {
            observer.unobserve(node)
          }
        } else if (!freezeOnceVisible) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, freezeOnceVisible])

  return [ref, isVisible]
}
