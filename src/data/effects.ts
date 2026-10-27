export type EffectCategory =
  | 'backgrounds'
  | 'text-entrances'
  | 'hover-effects'
  | 'scroll-effects'
  | 'interactive'

export interface EffectItem {
  id: string
  name: string
  definition: string
  category: EffectCategory
  categoryLabel: string
  cssTechnique: string
  codeSnippet: string
}

export const CATEGORIES: { id: EffectCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Effects' },
  { id: 'backgrounds', label: 'Backgrounds' },
  { id: 'text-entrances', label: 'Text & Entrances' },
  { id: 'hover-effects', label: 'Hover Effects' },
  { id: 'scroll-effects', label: 'Scroll Effects' },
  { id: 'interactive', label: 'Interactive' },
]

export const EFFECTS_DATA: EffectItem[] = [
  {
    id: 'gradient-bg',
    name: 'Animated Gradient Background',
    definition: 'A multi-stop color gradient that animates continuously across background-position, creating ambient atmosphere without video or heavy canvas scripts.',
    category: 'backgrounds',
    categoryLabel: 'Backgrounds',
    cssTechnique: 'background-size: 300% & @keyframes',
    codeSnippet: `.animated-bg {
  background: linear-gradient(135deg, #0a0e1a, #7c3aed, #22d3ee);
  background-size: 300% 300%;
  animation: gradient-shift 12s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
  },
  {
    id: 'floating-orbs',
    name: 'Floating Gradient Orbs',
    definition: 'Softly blurred radial gradient circles that drift using GPU-composited 3D transforms to create depth and modern glow.',
    category: 'backgrounds',
    categoryLabel: 'Backgrounds',
    cssTechnique: 'radial-gradient & translate3d()',
    codeSnippet: `.orb {
  position: absolute;
  border-radius: 9999px;
  filter: blur(60px);
  will-change: transform;
  animation: float 18s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(24px, -20px, 0) scale(1.05); }
}`,
  },
  {
    id: 'gradient-text',
    name: 'Gradient Text Clipping',
    definition: 'Uses background-clip: text combined with transparent text fill to apply multi-hue gradients directly to headlines.',
    category: 'text-entrances',
    categoryLabel: 'Text & Entrances',
    cssTechnique: '-webkit-background-clip: text',
    codeSnippet: `.gradient-heading {
  background: linear-gradient(135deg, #7c3aed, #22d3ee);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}`,
  },
  {
    id: 'fade-slide-entrance',
    name: 'Fade & Slide-Up Entrance',
    definition: 'A classic entrance animation that raises an element from a lower Y-position while bringing opacity from 0 to 1 with smooth cubic-bezier easing.',
    category: 'text-entrances',
    categoryLabel: 'Text & Entrances',
    cssTechnique: 'opacity + translate3d & fill-mode: both',
    codeSnippet: `@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 24px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.enter {
  animation: fadeInUp 500ms cubic-bezier(0.16, 1, 0.3, 1) both;
}`,
  },
  {
    id: 'staggered-cards',
    name: 'Staggered Entrance Sequence',
    definition: 'Applies incrementing animation-delay values to children elements, producing a polished, domino-style sequential reveal on load.',
    category: 'text-entrances',
    categoryLabel: 'Text & Entrances',
    cssTechnique: 'animation-delay orchestration',
    codeSnippet: `.card:nth-child(1) { animation-delay: 80ms; }
.card:nth-child(2) { animation-delay: 160ms; }
.card:nth-child(3) { animation-delay: 240ms; }

.card {
  animation: fadeInUp 400ms ease-out both;
}`,
  },
  {
    id: 'button-hover',
    name: 'Luminous Button Hover',
    definition: 'Micro-interaction combining subtle vertical lift, box-shadow glow expansion, and active press scale for tactile physical feedback.',
    category: 'hover-effects',
    categoryLabel: 'Hover Effects',
    cssTechnique: 'transform: translateY + box-shadow glow',
    codeSnippet: `.btn-glow {
  transition: transform 150ms ease, box-shadow 250ms ease;
}

.btn-glow:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 24px rgba(124, 58, 237, 0.4), 0 4px 12px rgba(0,0,0,0.3);
}

.btn-glow:active {
  transform: scale(0.98);
}`,
  },
  {
    id: 'card-lift',
    name: 'Card Elevation & Border Glow',
    definition: 'Elevates a container on hover using translateY while illuminating subtle border highlights and deepening ambient drop shadows.',
    category: 'hover-effects',
    categoryLabel: 'Hover Effects',
    cssTechnique: 'transform: translateY + border-color transition',
    codeSnippet: `.interactive-card {
  transition: transform 250ms cubic-bezier(0.16, 1, 0.3, 1),
              border-color 200ms ease,
              box-shadow 250ms ease;
}

.interactive-card:hover {
  transform: translateY(-6px);
  border-color: rgba(34, 211, 238, 0.35);
  box-shadow: 0 12px 30px -10px rgba(0, 0, 0, 0.5);
}`,
  },
  {
    id: 'image-zoom',
    name: 'Container Image Zoom & Overlay',
    definition: 'Scales an inner image with transform scale while keeping the outer card strictly clipped with overflow: hidden, revealing a gradient overlay.',
    category: 'hover-effects',
    categoryLabel: 'Hover Effects',
    cssTechnique: 'overflow: hidden + scale(1.08)',
    codeSnippet: `.card-media {
  overflow: hidden;
  border-radius: 0.75rem;
}

.card-media img, .card-media .media-canvas {
  transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1);
}

.card-media:hover .media-canvas {
  transform: scale(1.08);
}`,
  },
  {
    id: 'animated-underline',
    name: 'Expanding Animated Underline',
    definition: 'Generates an underline pseudo-element with scaleX(0) that smoothly expands to scaleX(1) from left-to-right on link hover or focus.',
    category: 'hover-effects',
    categoryLabel: 'Hover Effects',
    cssTechnique: '::after pseudo-element + transform: scaleX',
    codeSnippet: `.link-line {
  position: relative;
}

.link-line::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background: #22d3ee;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 250ms ease-out;
}

.link-line:hover::after {
  transform: scaleX(1);
}`,
  },
  {
    id: 'icon-movement',
    name: 'Icon Translation & Bounce',
    definition: 'Displaces an embedded arrow or icon on button hover to suggest forward progression, with instant keyboard focus parity.',
    category: 'hover-effects',
    categoryLabel: 'Hover Effects',
    cssTechnique: 'group-hover: translate-x-1.5',
    codeSnippet: `.btn-action:hover .icon {
  transform: translateX(4px);
  transition: transform 200ms ease;
}

.btn-action:focus-visible .icon {
  transform: translateX(4px);
}`,
  },
  {
    id: 'scroll-reveal-simulation',
    name: 'Scroll Viewport Trigger',
    definition: 'Detects when an element crosses an intersection threshold in the viewport and toggles enter states without scroll-event jank.',
    category: 'scroll-effects',
    categoryLabel: 'Scroll Effects',
    cssTechnique: 'IntersectionObserver + class toggle',
    codeSnippet: `const observer = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  }
}, { threshold: 0.15 });`,
  },
  {
    id: 'interactive-tabs',
    name: 'Animated Tab Indicator',
    definition: 'A sliding active indicator pill that smoothly shifts beneath or around active tab selections using CSS transitions.',
    category: 'interactive',
    categoryLabel: 'Interactive',
    cssTechnique: 'transition: transform & background-color',
    codeSnippet: `.tab-btn {
  transition: color 200ms ease, background-color 200ms ease;
}

.tab-btn[aria-selected="true"] {
  background: rgba(124, 58, 237, 0.2);
  color: #f1f5f9;
  border-color: rgba(124, 58, 237, 0.4);
}`,
  },
]
