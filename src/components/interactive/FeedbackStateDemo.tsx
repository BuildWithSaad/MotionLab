import { useState, useEffect, useRef } from 'react'
import { Loader2, CheckCircle2, RotateCcw, Play, Info } from 'lucide-react'

type OperationState = 'idle' | 'loading' | 'success'

export default function FeedbackStateDemo() {
  const [state, setState] = useState<OperationState>('idle')
  const [progress, setProgress] = useState(0)
  const timerRef = useRef<number | null>(null)
  const progressIntervalRef = useRef<number | null>(null)

  // Start simulated action
  const handleStart = () => {
    setState('loading')
    setProgress(0)

    // Simulate progress increments
    progressIntervalRef.current = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
          return 95
        }
        return prev + 15
      })
    }, 200)

    // Complete after 1600ms
    timerRef.current = window.setTimeout(() => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
      setProgress(100)
      setState('success')
    }, 1600)
  }

  // Reset to idle
  const handleReset = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
    setState('idle')
    setProgress(0)
  }

  // Clean up timers
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
    }
  }, [])

  return (
    <div className="w-full rounded-2xl bg-surface-deep/70 border border-surface-border p-5 sm:p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-accent-pink/15 text-accent-pink border border-accent-pink/30">
            State Machine
          </span>
          <span className="text-[11px] font-mono text-text-muted">Idle → Busy → Done</span>
        </div>

        <h4 className="text-base font-bold text-text-primary mb-1">
          Loading-to-Success Feedback
        </h4>

        <p className="text-xs text-text-secondary leading-relaxed mb-5">
          Interactive interfaces must communicate pending operations transparently. Below is a client-side simulation demonstrating state progression without mock server falsification.
        </p>

        {/* Live Simulation Card */}
        <div className="rounded-xl bg-surface-raised border border-surface-border p-4 mb-4">
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="font-semibold text-text-primary">Simulated Pipeline:</span>
            <span
              className={`font-mono text-[11px] font-semibold uppercase px-2 py-0.5 rounded ${
                state === 'idle'
                  ? 'bg-white/10 text-text-secondary'
                  : state === 'loading'
                  ? 'bg-amber-500/15 text-amber-400'
                  : 'bg-emerald-500/15 text-emerald-400'
              }`}
            >
              {state}
            </span>
          </div>

          {/* Progress Bar Container */}
          <div className="w-full h-2 rounded-full bg-surface-deep overflow-hidden mb-3">
            <div
              className={`h-full transition-all duration-200 ease-out ${
                state === 'success'
                  ? 'bg-emerald-400'
                  : 'bg-gradient-to-r from-accent-violet to-accent-cyan'
              }`}
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Simulated operation progress"
            />
          </div>

          {/* Animated Status Area */}
          <div className="min-h-[36px] flex items-center justify-center text-xs">
            {state === 'idle' && (
              <span className="text-text-muted text-[11px]">
                Click &ldquo;Trigger Simulation&rdquo; to test
              </span>
            )}

            {state === 'loading' && (
              <div className="flex items-center gap-2 text-accent-cyan animate-pulse">
                <Loader2 size={15} className="animate-spin" />
                <span className="font-medium">Computing simulated frames ({progress}%)...</span>
              </div>
            )}

            {state === 'success' && (
              <div className="flex items-center gap-2 text-emerald-400 animate-fade-in-up">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span className="font-semibold">Simulated Sequence Complete (100%)</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Controls & Disclaimer */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          {state !== 'loading' ? (
            <button
              type="button"
              onClick={handleStart}
              className="btn btn-primary text-xs py-2 px-4 shadow-md flex-1"
            >
              <Play size={14} />
              <span>{state === 'success' ? 'Run Again' : 'Trigger Simulation'}</span>
            </button>
          ) : (
            <button
              type="button"
              disabled
              className="btn btn-secondary text-xs py-2 px-4 opacity-50 cursor-not-allowed flex-1"
            >
              <Loader2 size={14} className="animate-spin" />
              <span>Processing...</span>
            </button>
          )}

          {state !== 'idle' && (
            <button
              type="button"
              onClick={handleReset}
              className="btn btn-secondary text-xs py-2 px-3 text-text-muted hover:text-text-primary"
              aria-label="Reset simulation"
            >
              <RotateCcw size={14} />
              <span>Reset</span>
            </button>
          )}
        </div>

        <p className="flex items-center gap-1.5 text-[11px] text-text-muted">
          <Info size={12} className="shrink-0 text-accent-violet" />
          <span>Pure client-side demonstration with zero backend dependencies.</span>
        </p>
      </div>
    </div>
  )
}
