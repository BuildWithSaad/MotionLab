import { useState, useEffect, useRef } from 'react'
import { X, Sparkles, CheckCircle, ExternalLink } from 'lucide-react'

export default function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)

  // Handle opening modal & focusing
  const handleOpen = () => {
    setIsOpen(true)
  }

  // Handle closing & returning focus to trigger
  const handleClose = () => {
    setIsOpen(false)
    setTimeout(() => {
      triggerRef.current?.focus()
    }, 50)
  }

  // Keyboard Escape listener & body scroll lock
  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    // Focus the close button when opened
    closeBtnRef.current?.focus()

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <div className="flex flex-col items-start gap-4">
      <div className="p-4 rounded-xl bg-surface-deep/60 border border-surface-border w-full">
        <p className="text-xs text-text-secondary leading-relaxed mb-4">
          Modals combine backdrop opacity blending, scale-in surface transitions, body scroll-locking, and focus retention for a tactile, accessible overlay experience.
        </p>

        <button
          ref={triggerRef}
          type="button"
          onClick={handleOpen}
          className="btn btn-primary text-xs py-2.5 px-5 shadow-lg shadow-accent-violet/20"
        >
          <Sparkles size={14} />
          <span>Open Interactive Modal</span>
        </button>
      </div>

      {/* Modal Backdrop & Dialog Container */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop overlay */}
        <div
          onClick={handleClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          aria-hidden="true"
        />

        {/* Modal Dialog Card */}
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          className={`relative z-10 w-full max-w-lg rounded-2xl bg-surface-raised border border-surface-border p-6 sm:p-8 shadow-2xl shadow-black/60 transition-all duration-300 ease-out ${
            isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-4 opacity-0'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-surface-border">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-accent-violet/20 text-accent-violet flex items-center justify-center">
                <Sparkles size={16} />
              </span>
              <h3 id="modal-title" className="text-lg font-bold text-text-primary">
                Accessible Modal Transition
              </h3>
            </div>

            <button
              ref={closeBtnRef}
              type="button"
              onClick={handleClose}
              aria-label="Close dialog"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-white/5 transition-colors focus-visible:outline-2 focus-visible:outline-accent-cyan cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body Content */}
          <div id="modal-desc" className="space-y-3 text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
            <p>
              This dialog demonstrates four essential animation and UX principles working in harmony:
            </p>
            <ul className="space-y-2 list-none pt-1">
              <li className="flex items-start gap-2">
                <CheckCircle size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Backdrop cross-fade:</strong> Smooth blur filter transition without jumping.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Card scale &amp; slide:</strong> Enters from scale(0.95) with subtle vertical momentum.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Keyboard accessibility:</strong> Closes on Escape, traps background scroll, and returns focus.</span>
              </li>
            </ul>
          </div>

          {/* Footer CTAs */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-surface-border">
            <button
              type="button"
              onClick={handleClose}
              className="btn btn-secondary text-xs py-2 px-4"
            >
              Close (Esc)
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="btn btn-primary text-xs py-2 px-4"
            >
              <span>Understood</span>
              <ExternalLink size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
