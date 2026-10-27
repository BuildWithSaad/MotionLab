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
  // 1. Animated Gradient Background
  {
    id: 'gradient-bg',
    name: '1. Animated Gradient Background',
    definition: 'A multi-stop color gradient animating across background-position, creating ambient atmosphere without video or heavy canvas scripts.',
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
  // 2. Floating Gradient Orbs
  {
    id: 'floating-orbs',
    name: '2. Floating Gradient Orbs',
    definition: 'Softly blurred radial gradient circles drifting via GPU-composited 3D transforms to create depth and modern glow.',
    category: 'backgrounds',
    categoryLabel: 'Backgrounds',
    cssTechnique: 'radial-gradient & translate3d()',
    codeSnippet: `.orb {
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
  // 3. Animated Grid Background
  {
    id: 'animated-grid',
    name: '3. Animated Grid Background',
    definition: 'A mathematical matrix of intersecting linear gradients with pulse opacity, providing technical visual texture.',
    category: 'backgrounds',
    categoryLabel: 'Backgrounds',
    cssTechnique: 'dual linear-gradient & opacity pulse',
    codeSnippet: `.grid-pattern {
  background-image:
    linear-gradient(rgba(34, 211, 238, 0.25) 1px, transparent 1px),
    linear-gradient(90deg, rgba(34, 211, 238, 0.25) 1px, transparent 1px);
  background-size: 32px 32px;
  animation: pulse-glow 4s ease-in-out infinite;
}`,
  },
  // 4. Gradient Text
  {
    id: 'gradient-text',
    name: '4. Gradient Text Clipping',
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
  // 5. Fade-In and Slide-Up Entrance
  {
    id: 'fade-slide-entrance',
    name: '5. Fade-In & Slide-Up Entrance',
    definition: 'Raises an element from a lower Y-position while interpolating opacity from 0 to 1 with cubic-bezier landing.',
    category: 'text-entrances',
    categoryLabel: 'Text & Entrances',
    cssTechnique: 'opacity + translate3d & fill-mode: both',
    codeSnippet: `@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 32px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.enter {
  animation: fadeInUp 600ms cubic-bezier(0.16, 1, 0.3, 1) both;
}`,
  },
  // 6. Staggered Entrance
  {
    id: 'staggered-entrance',
    name: '6. Staggered Sequence',
    definition: 'Applies incrementing animation-delay values to children elements, producing a domino-style sequential reveal.',
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
  // 7. Button Hover Animation
  {
    id: 'button-hover',
    name: '7. Button Hover & Press Feedback',
    definition: 'Micro-interaction combining vertical lift (-2px), box-shadow glow expansion, and active press scale(0.98).',
    category: 'hover-effects',
    categoryLabel: 'Hover Effects',
    cssTechnique: 'translateY(-2px) + box-shadow glow',
    codeSnippet: `.btn-glow {
  transition: transform 150ms ease, box-shadow 250ms ease;
}

.btn-glow:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 24px rgba(124, 58, 237, 0.4);
}

.btn-glow:active {
  transform: scale(0.98);
}`,
  },
  // 8. Card Lift and Shadow
  {
    id: 'card-lift',
    name: '8. Card Elevation & Shadow Depth',
    definition: 'Elevates a container on hover using translateY while illuminating subtle border highlights and deepening drop shadows.',
    category: 'hover-effects',
    categoryLabel: 'Hover Effects',
    cssTechnique: 'translateY(-6px) + shadow transition',
    codeSnippet: `.interactive-card {
  transition: transform 250ms cubic-bezier(0.16, 1, 0.3, 1),
              border-color 200ms ease,
              box-shadow 250ms ease;
}

.interactive-card:hover {
  transform: translateY(-6px);
  border-color: rgba(34, 211, 238, 0.4);
  box-shadow: 0 16px 32px -8px rgba(0, 0, 0, 0.5);
}`,
  },
  // 9. Image Zoom & Overlay Reveal
  {
    id: 'image-zoom',
    name: '9. Image Zoom & Overlay Reveal',
    definition: 'Scales inner media with transform scale while keeping outer container clipped, revealing badge overlays.',
    category: 'hover-effects',
    categoryLabel: 'Hover Effects',
    cssTechnique: 'overflow: hidden + scale(1.08)',
    codeSnippet: `.card-media {
  overflow: hidden;
  border-radius: 0.75rem;
}

.card-media:hover .media-canvas {
  transform: scale(1.08);
  transition: transform 400ms ease-out;
}`,
  },
  // 10. Animated Underline and Icon Movement
  {
    id: 'animated-underline-icon',
    name: '10. Animated Underline & Icon Nudge',
    definition: 'Expands a directional link underline via scaleX while translating forward arrow icons on hover and keyboard focus.',
    category: 'hover-effects',
    categoryLabel: 'Hover Effects',
    cssTechnique: 'scaleX(1) origin-left + translateX(4px)',
    codeSnippet: `.link-line::after {
  content: '';
  position: absolute;
  left: 0; bottom: -2px;
  width: 100%; height: 2px;
  background: #22d3ee;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 250ms ease-out;
}

.link-line:hover::after { transform: scaleX(1); }
.link-line:hover .icon { transform: translateX(4px); }`,
  },
  // 11. Scroll-Triggered Reveal
  {
    id: 'scroll-reveal',
    name: '11. Scroll-Triggered Reveal',
    definition: 'Uses IntersectionObserver to detect when an element crosses a viewport visibility threshold, firing an entrance transition.',
    category: 'scroll-effects',
    categoryLabel: 'Scroll Effects',
    cssTechnique: 'IntersectionObserver + active class',
    codeSnippet: `const observer = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('is-revealed');
  }
}, { threshold: 0.15 });`,
  },
  // 12. Scroll Progress Indicator
  {
    id: 'scroll-progress',
    name: '12. Scroll Progress Bar',
    definition: 'A top-pinned gradient bar that transforms along scaleX(progress) tracking document scroll from 0% to 100%.',
    category: 'scroll-effects',
    categoryLabel: 'Scroll Effects',
    cssTechnique: 'transform: scaleX(progress) origin-left',
    codeSnippet: `const progress = scrollTop / (docHeight - windowHeight);

// CSS
.progress-bar {
  transform-origin: left;
  transform: scaleX(var(--progress));
  will-change: transform;
}`,
  },
  // 13. Sticky Navigation with Scroll State
  {
    id: 'sticky-nav',
    name: '13. Sticky Navigation Transition',
    definition: 'A fixed navigation header that transitions from transparent to blurred glassmorphic surface with border when scrolled.',
    category: 'interactive',
    categoryLabel: 'Interactive',
    cssTechnique: 'backdrop-filter: blur + bg transition',
    codeSnippet: `.header-scrolled {
  background: rgba(10, 14, 26, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(148, 163, 184, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}`,
  },
  // 14. Parallax Movement
  {
    id: 'parallax-movement',
    name: '14. Multi-Layer Parallax Depth',
    definition: 'Moves foreground and background planes at contrasting velocities relative to scroll position to generate optical depth.',
    category: 'scroll-effects',
    categoryLabel: 'Scroll Effects',
    cssTechnique: 'translate3d(0, scroll * rate, 0)',
    codeSnippet: `// Multi-rate displacement
bgLayer.style.transform = \`translate3d(0, \${offset * 0.08}px, 0)\`;
midLayer.style.transform = \`translate3d(0, \${offset * 0.18}px, 0)\`;
fgLayer.style.transform = \`translate3d(0, \${offset * -0.12}px, 0)\`;`,
  },
  // 15. Animated Tabs & Category Filters
  {
    id: 'animated-tabs',
    name: '15. Animated Tabs & Category Filters',
    definition: 'A sliding active pill indicator and smooth panel cross-fade responding to tab or filter selections.',
    category: 'interactive',
    categoryLabel: 'Interactive',
    cssTechnique: 'active pill transform & opacity fade',
    codeSnippet: `.tab-pill {
  transition: transform 250ms cubic-bezier(0.16, 1, 0.3, 1),
              background 200ms ease;
}`,
  },
  // 16. Accordion Expansion and Collapse
  {
    id: 'accordion-animation',
    name: '16. Fluid Accordion Disclosure',
    definition: 'Expands and collapses variable-height disclosure panels using CSS grid-template-rows: 0fr to 1fr interpolation.',
    category: 'interactive',
    categoryLabel: 'Interactive',
    cssTechnique: 'grid-template-rows: 0fr -> 1fr',
    codeSnippet: `.accordion-panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 300ms ease-out;
}

.accordion-panel.is-open {
  grid-template-rows: 1fr;
}`,
  },
  // 17. Modal & Navigation Drawer Transitions
  {
    id: 'modal-drawer',
    name: '17. Modal & Drawer Overlay Transitions',
    definition: 'Coordinates a backdrop blur cross-fade with a springy dialog scale entrance and slide-in drawer layout context.',
    category: 'interactive',
    categoryLabel: 'Interactive',
    cssTechnique: 'scale(0.95) -> 1.0 + backdrop-blur',
    codeSnippet: `.modal-dialog {
  opacity: 0;
  transform: scale(0.95) translateY(16px);
  transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-dialog.open {
  opacity: 1;
  transform: scale(1) translateY(0);
}`,
  },
  // 18. Loading, Success and Feedback States
  {
    id: 'feedback-states',
    name: '18. Loading & Success State Machine',
    definition: 'Animates async operation progression through idle button, spinning loader bar, and confirming success checkmark.',
    category: 'interactive',
    categoryLabel: 'Interactive',
    cssTechnique: 'state machine transitions & stroke-dash',
    codeSnippet: `// State progression: idle -> loading -> success
.loader-spinner { animation: spin 1s linear infinite; }
.check-confirm { animation: fadeInUp 300ms ease-out; }`,
  },
  // 19. Pointer-Responsive 3D Card Tilt
  {
    id: 'tilt-card',
    name: '19. Pointer-Responsive 3D Tilt',
    definition: 'Calculates cursor coordinates relative to card center to apply perspective rotateX and rotateY with dynamic glare.',
    category: 'hover-effects',
    categoryLabel: 'Hover Effects',
    cssTechnique: 'perspective(800px) + rotateX/rotateY',
    codeSnippet: `const rotateX = -percentY * maxTilt;
const rotateY = percentX * maxTilt;

card.style.transform =
  \`perspective(800px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;`,
  },
  // 20. Mask or Clip-Path Reveal
  {
    id: 'clip-path-reveal',
    name: '20. Mask / Clip-Path Reveal',
    definition: 'Animates content emerging from a geometric polygon boundary using CSS clip-path interpolation.',
    category: 'text-entrances',
    categoryLabel: 'Text & Entrances',
    cssTechnique: 'clip-path: polygon() transition',
    codeSnippet: `.clipped-content {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  animation: maskSlide 600ms cubic-bezier(0.16, 1, 0.3, 1);
}`,
  },
  // 21. Scroll-Linked Animation (Continuous Property Change)
  {
    id: 'scroll-linked',
    name: '21. Continuous Scroll-Linked Property',
    definition: 'Unlike one-time reveals, this continuously modulates visual properties (angle, gauge width, scale) proportionally to scroll offset.',
    category: 'scroll-effects',
    categoryLabel: 'Scroll Effects',
    cssTechnique: 'continuous rAF scroll interpolation',
    codeSnippet: `// Continuous rotation and scale per scroll pixel
const angle = (scrollProgress * 360) % 360;
dial.style.transform = \`rotate(\${angle}deg) scale(\${0.85 + progress * 0.3})\`;`,
  },
  // 22. Page or View Transitions
  {
    id: 'view-transition',
    name: '22. Animated View & Panel Switcher',
    definition: 'A spatial cross-fade transition between two distinct layout modes (e.g. Card View vs. Metrics View) preserving context.',
    category: 'interactive',
    categoryLabel: 'Interactive',
    cssTechnique: 'directional slide-fade & layout switch',
    codeSnippet: `.view-container {
  display: flex;
  transition: opacity 250ms ease, transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
}`,
  },
]
