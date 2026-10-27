import { useState } from 'react'
import { Code2, Copy, Check, ChevronDown } from 'lucide-react'
import type { EffectItem } from '../../data/effects'
import {
  GradientBgPreview,
  FloatingOrbsPreview,
  AnimatedGridPreview,
  GradientTextPreview,
  FadeSlidePreview,
  StaggeredCardsPreview,
  ButtonHoverPreview,
  CardLiftPreview,
  ImageZoomPreview,
  AnimatedUnderlineIconPreview,
  ScrollRevealPreview,
  ScrollProgressPreview,
  StickyNavPreview,
  ParallaxPreview,
  InteractiveTabsPreview,
  AccordionPreview,
  ModalDrawerPreview,
  FeedbackStatesPreview,
  TiltCardMiniPreview,
  ClipPathMiniPreview,
  ScrollLinkedMiniPreview,
  ViewTransitionPreview,
} from './GalleryPreviews'

interface DemoCardProps {
  effect: EffectItem
}

export default function DemoCard({ effect }: DemoCardProps) {
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)

  // Copy code helper
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(effect.codeSnippet)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // Category badge color mapping
  const categoryStyles: Record<string, string> = {
    backgrounds: 'bg-accent-violet/15 text-accent-violet border-accent-violet/30',
    'text-entrances': 'bg-accent-cyan/15 text-accent-cyan border-accent-cyan/30',
    'hover-effects': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    'scroll-effects': 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    interactive: 'bg-accent-pink/15 text-accent-pink border-accent-pink/30',
  }

  // Map effect ID to live visual preview component (all 22 effects)
  const renderPreview = () => {
    switch (effect.id) {
      case 'gradient-bg':
        return <GradientBgPreview />
      case 'floating-orbs':
        return <FloatingOrbsPreview />
      case 'animated-grid':
        return <AnimatedGridPreview />
      case 'gradient-text':
        return <GradientTextPreview />
      case 'fade-slide-entrance':
        return <FadeSlidePreview />
      case 'staggered-entrance':
        return <StaggeredCardsPreview />
      case 'button-hover':
        return <ButtonHoverPreview />
      case 'card-lift':
        return <CardLiftPreview />
      case 'image-zoom':
        return <ImageZoomPreview />
      case 'animated-underline-icon':
        return <AnimatedUnderlineIconPreview />
      case 'scroll-reveal':
        return <ScrollRevealPreview />
      case 'scroll-progress':
        return <ScrollProgressPreview />
      case 'sticky-nav':
        return <StickyNavPreview />
      case 'parallax-movement':
        return <ParallaxPreview />
      case 'animated-tabs':
        return <InteractiveTabsPreview />
      case 'accordion-animation':
        return <AccordionPreview />
      case 'modal-drawer':
        return <ModalDrawerPreview />
      case 'feedback-states':
        return <FeedbackStatesPreview />
      case 'tilt-card':
        return <TiltCardMiniPreview />
      case 'clip-path-reveal':
        return <ClipPathMiniPreview />
      case 'scroll-linked':
        return <ScrollLinkedMiniPreview />
      case 'view-transition':
        return <ViewTransitionPreview />
      default:
        return null
    }
  }

  return (
    <article className="glass-card flex flex-col justify-between overflow-hidden border border-surface-border transition-all duration-300 hover:border-surface-border/80 hover:shadow-xl hover:shadow-black/20">
      {/* Top Header */}
      <div className="p-5 pb-3">
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span
            className={`text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${
              categoryStyles[effect.category] || 'bg-white/10 text-white border-white/20'
            }`}
          >
            {effect.categoryLabel}
          </span>
          <span className="text-[11px] font-mono text-text-muted truncate max-w-[180px]">
            {effect.cssTechnique}
          </span>
        </div>

        <h3 className="text-base font-bold text-text-primary tracking-tight mb-1.5">
          {effect.name}
        </h3>

        <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
          {effect.definition}
        </p>
      </div>

      {/* Live Preview Area */}
      <div className="px-5 py-2">
        <div className="rounded-lg bg-surface-deep/50 p-1">
          {renderPreview()}
        </div>
      </div>

      {/* Footer & Code Drawer Toggle */}
      <div className="p-5 pt-3">
        <div className="flex items-center justify-between pt-2 border-t border-surface-border/60">
          <button
            onClick={() => setShowCode(!showCode)}
            className="flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-2 focus-visible:outline-accent-cyan rounded px-2 py-1"
            aria-expanded={showCode}
            aria-controls={`code-${effect.id}`}
          >
            <Code2 size={14} className={showCode ? 'text-accent-cyan' : 'text-text-muted'} />
            <span>{showCode ? 'Hide Code' : 'How It Works'}</span>
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${showCode ? 'rotate-180' : ''}`}
            />
          </button>

          {showCode && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-xs text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-2 focus-visible:outline-accent-cyan rounded px-2 py-1"
              aria-label="Copy code snippet"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>Copy</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Collapsible Code Box */}
        {showCode && (
          <div
            id={`code-${effect.id}`}
            className="mt-3 p-3 rounded-md bg-surface-deep/90 border border-surface-border text-xs font-mono text-text-secondary overflow-x-auto"
          >
            <pre className="text-[11px] leading-relaxed text-cyan-200/90 whitespace-pre">
              <code>{effect.codeSnippet}</code>
            </pre>
          </div>
        )}
      </div>
    </article>
  )
}
