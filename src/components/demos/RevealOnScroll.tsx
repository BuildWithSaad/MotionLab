import { useEffect, useState, type ReactNode } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

interface RevealOnScrollProps {
  children: ReactNode
  animation?: 'fade-up' | 'slide-left' | 'slide-right' | 'scale-up'
  delay?: number
  replayKey?: number
  className?: string
}

export default function RevealOnScroll({
  children,
  animation = 'fade-up',
  delay = 0,
  replayKey = 0,
  className = '',
}: RevealOnScrollProps) {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px',
    freezeOnceVisible: false, // Allows re-triggering and replay
  })

  const [active, setActive] = useState(false)

  // Sync intersection state or handle manual replay
  useEffect(() => {
    if (isIntersecting) {
      setActive(true)
    }
  }, [isIntersecting])

  // When replayKey changes, momentarily reset to hidden then re-trigger
  useEffect(() => {
    if (replayKey > 0) {
      setActive(false)
      const timer = setTimeout(() => {
        setActive(true)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [replayKey])

  const getAnimationStyles = () => {
    if (active) {
      return 'opacity-100 translate-x-0 translate-y-0 scale-100'
    }

    switch (animation) {
      case 'fade-up':
        return 'opacity-0 translate-y-10 scale-100'
      case 'slide-left':
        return 'opacity-0 -translate-x-12 scale-100'
      case 'slide-right':
        return 'opacity-0 translate-x-12 scale-100'
      case 'scale-up':
        return 'opacity-0 translate-y-0 scale-90'
      default:
        return 'opacity-0 translate-y-10'
    }
  }

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: '700ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: active ? `${delay}ms` : '0ms',
      }}
      className={`transition-all will-change-[transform,opacity] ${getAnimationStyles()} ${className}`}
    >
      {children}
    </div>
  )
}
