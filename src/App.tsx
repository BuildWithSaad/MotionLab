import Navbar from './components/layout/Navbar'
import ScrollProgress from './components/layout/ScrollProgress'
import BackToTop from './components/layout/BackToTop'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import IntroSection from './components/sections/IntroSection'
import AnimationGallery from './components/sections/AnimationGallery'
import HoverEffects from './components/sections/HoverEffects'
import AnimatedBackgrounds from './components/sections/AnimatedBackgrounds'
import TextAnimations from './components/sections/TextAnimations'
import ScrollRevealSection from './components/sections/ScrollRevealSection'
import ComponentLab from './components/sections/ComponentLab'

export default function App() {
  return (
    <div className="min-h-screen bg-surface-deep text-text-primary selection:bg-accent-violet selection:text-white">
      {/* Scroll Progress indicator at very top */}
      <ScrollProgress />

      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <HeroSection />
        <IntroSection />
        <AnimationGallery />
        <HoverEffects />
        <AnimatedBackgrounds />
        <TextAnimations />
        <ScrollRevealSection />
        <ComponentLab />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back-to-Top Button */}
      <BackToTop />
    </div>
  )
}
