import type { ReactNode } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

interface RevealOnScrollProps {
  children: ReactNode
  animation?: 'fade-up' | 'slide-left' | 'slide-right' | 'scale-up'
  delay?: number
  className?: string
}

export default function RevealOnScroll({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
}: RevealOnScrollProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.12,
  })

  const getAnimationStyles = () => {
    if (isVisible) {
      return 'opacity-100 translate-x-0 translate-y-0 scale-100'
    }

    switch (animation) {
      case 'fade-up':
        return 'opacity-0 translate-y-8 scale-100'
      case 'slide-left':
        return 'opacity-0 -translate-x-8 scale-100'
      case 'slide-right':
        return 'opacity-0 translate-x-8 scale-100'
      case 'scale-up':
        return 'opacity-0 translate-y-0 scale-95'
      default:
        return 'opacity-0 translate-y-8'
    }
  }

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: '650ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all ${getAnimationStyles()} ${className}`}
    >
      {children}
    </div>
  )
}
