# MotionLab — Interactive Animation Playground

MotionLab is an interactive, responsive playground designed for teaching website animations, UI effects, micro-interactions, and frontend visual polish through live code. Built with React, TypeScript, and Tailwind CSS v4.

---

## ✨ Features

- **Hero Section**: Hardware-accelerated gradient background, 3 floating luminous radial orbs, gradient text clipping, staggered entrance animations, and micro-interaction CTA buttons.
- **Interactive Animation Gallery**: Data-driven catalogue of 12 distinct motion patterns across 5 categories (*Backgrounds*, *Text & Entrances*, *Hover Effects*, *Scroll Effects*, *Interactive*).
- **Expandable "How It Works" Code Drawers**: Direct access to production-ready CSS/React snippets with one-click copy feedback.
- **Spotlight Showcases**:
  - **Hover Effects**: Tactile button elevations, card lifts, image zoom with overlay reveal, expanding underline links, and an **Advanced Restrained 3D Tilt Card**.
  - **Animated Backgrounds**: Speed-controlled gradient shifts, luminous radial orb theme switchers, and pulsing cyber grids.
  - **Text Animations**: Dynamic typewriter reveals, **Clip-Path Polygon Mask Reveals**, and multi-stop gradient cyclers.
  - **Scroll-Driven Reveals**: `IntersectionObserver`-powered entrance effects (Fade Up, Slide Left, Slide Right, Scale Up) with zero idle CPU cost and restrained parallax layers.
- **Component Lab**:
  - Fluid animated accordion using modern CSS grid row interpolation (`grid-template-rows: 0fr → 1fr`).
  - Accessible scale-in modal dialog with backdrop blur, `Escape` key dismissal, body scroll-lock, and focus restoration.
  - Interactive multi-panel tabs with animated sliding gradient pill indicators.
  - Async feedback state machine advancing from idle to progress tracking and completed checkmark confirmation.
- **Accessibility & Performance**:
  - Full `@media (prefers-reduced-motion: reduce)` support.
  - 100% compositor-accelerated animations (`transform` and `opacity`).
  - WCAG 44px mobile touch targets and high-contrast 2px cyan keyboard focus rings.
  - Zero horizontal overflow across all device viewports (360px to 1440px+).

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Zero Heavy Animation Dependencies**: Pure CSS transitions, keyframes, and React state.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/BuildWithSaad/MotionLab.git

# Navigate into project directory
cd MotionLab

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Type Checking & Production Build

```bash
# Run TypeScript type check
npx tsc --noEmit

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📄 License

MIT © [BuildWithSaad](https://github.com/BuildWithSaad)
