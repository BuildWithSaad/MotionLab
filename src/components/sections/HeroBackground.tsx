import { useEffect, useRef, useCallback } from 'react'

/* ─────────────────────────────────────────────────────────────
   HeroBackground — GPU-accelerated canvas animation
   • Aurora waves  • Particle constellation  • Shooting stars
   • Mouse-follow spotlight  • Cursor-reactive particles
   ──────────────────────────────────────────────────────────── */

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  hue: number
  pulseSpeed: number
  pulsePhase: number
}

interface ShootingStar {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  hue: number
}

const CONNECTION_DISTANCE = 160
const MOUSE_RADIUS = 250

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef(0)
  const mouseRef = useRef({ x: -9999, y: -9999, active: false })
  const particlesRef = useRef<Particle[]>([])
  const starsRef = useRef<ShootingStar[]>([])
  const sizeRef = useRef({ w: 0, h: 0 })
  const lastStarTime = useRef(0)

  // ── Build particles ──────────────────────────────────
  const buildParticles = useCallback((w: number, h: number) => {
    const count = w < 768 ? 40 : 80
    const arr: Particle[] = []
    for (let i = 0; i < count; i++) {
      const isViolet = Math.random() > 0.35
      arr.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2.4 + 1,
        opacity: Math.random() * 0.6 + 0.35,
        hue: isViolet ? 260 + Math.random() * 20 : 185 + Math.random() * 15,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulsePhase: Math.random() * Math.PI * 2,
      })
    }
    particlesRef.current = arr
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Bail on reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    // ── Sizing ──
    const resize = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      if (w === 0 || h === 0) return
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      sizeRef.current = { w, h }
      buildParticles(w, h)
    }

    resize()
    window.addEventListener('resize', resize)

    /* ── Mouse / touch tracking ─────────────────────────
       Listen on DOCUMENT level so pointer-events-none on
       parent wrappers doesn't block the events.           */
    const updateMouseFromEvent = (clientX: number, clientY: number) => {
      const r = canvas.getBoundingClientRect()
      const x = clientX - r.left
      const y = clientY - r.top
      // Only track if cursor is within the hero section bounds
      if (x >= 0 && x <= r.width && y >= 0 && y <= r.height) {
        mouseRef.current = { x, y, active: true }
      } else {
        mouseRef.current = { x: -9999, y: -9999, active: false }
      }
    }

    const onMouseMove = (e: MouseEvent) => updateMouseFromEvent(e.clientX, e.clientY)
    const onMouseLeave = () => { mouseRef.current = { x: -9999, y: -9999, active: false } }
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0]
      if (t) updateMouseFromEvent(t.clientX, t.clientY)
    }
    const onTouchEnd = () => { mouseRef.current = { x: -9999, y: -9999, active: false } }

    // Listen on document so events pass through pointer-events-none layers
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('touchmove', onTouchMove, { passive: true })
    document.addEventListener('touchend', onTouchEnd)

    // ── Aurora wave config ──
    const waves = [
      { yRatio: 0.22, amp: 0.10, wl: 700, speed: 0.0005, phase: 0,   hue: 268, sat: 85, lit: 50, opa: 0.14, thick: 0.28 },
      { yRatio: 0.50, amp: 0.08, wl: 550, speed:-0.0004, phase: 2.2,  hue: 188, sat: 90, lit: 55, opa: 0.10, thick: 0.24 },
      { yRatio: 0.38, amp: 0.12, wl: 900, speed: 0.0003, phase: 4.1,  hue: 250, sat: 75, lit: 38, opa: 0.12, thick: 0.32 },
      { yRatio: 0.66, amp: 0.06, wl: 420, speed: 0.0006, phase: 1.0,  hue: 320, sat: 80, lit: 50, opa: 0.07, thick: 0.16 },
    ]

    // ── DRAW: Mouse spotlight glow ──
    const drawMouseGlow = () => {
      const { x, y, active } = mouseRef.current
      if (!active) return

      const g = ctx.createRadialGradient(x, y, 0, x, y, 280)
      g.addColorStop(0, 'rgba(124, 58, 237, 0.12)')
      g.addColorStop(0.3, 'rgba(124, 58, 237, 0.06)')
      g.addColorStop(0.6, 'rgba(34, 211, 238, 0.03)')
      g.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.beginPath()
      ctx.arc(x, y, 280, 0, Math.PI * 2)
      ctx.fillStyle = g
      ctx.fill()
    }

    // ── DRAW: Aurora ──
    const drawAurora = (t: number) => {
      const { w, h } = sizeRef.current
      for (const wv of waves) {
        wv.phase += wv.speed
        ctx.beginPath()
        for (let x = -10; x <= w + 10; x += 5) {
          const p = x / wv.wl
          const y =
            h * wv.yRatio +
            Math.sin(p * Math.PI * 2 + wv.phase) * h * wv.amp +
            Math.sin(p * Math.PI * 3.7 + wv.phase * 0.7 + t * 0.00008) * h * wv.amp * 0.35
          if (x === -10) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.lineTo(w + 10, h + 10)
        ctx.lineTo(-10, h + 10)
        ctx.closePath()

        const grad = ctx.createLinearGradient(0, h * wv.yRatio - h * wv.thick * 0.5, 0, h * wv.yRatio + h * wv.thick)
        const c = `hsla(${wv.hue}, ${wv.sat}%, ${wv.lit}%`
        grad.addColorStop(0, `${c}, 0)`)
        grad.addColorStop(0.2, `${c}, ${wv.opa * 0.6})`)
        grad.addColorStop(0.45, `${c}, ${wv.opa})`)
        grad.addColorStop(0.7, `${c}, ${wv.opa * 0.5})`)
        grad.addColorStop(1, `${c}, 0)`)
        ctx.fillStyle = grad
        ctx.fill()
      }
    }

    // ── DRAW: Particles + connections ──
    const drawParticles = (t: number) => {
      const { w, h } = sizeRef.current
      const pts = particlesRef.current
      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      const mouseActive = mouseRef.current.active
      const connDist = w < 768 ? CONNECTION_DISTANCE * 0.6 : CONNECTION_DISTANCE

      // Update positions
      for (const p of pts) {
        if (mouseActive) {
          const dx = p.x - mx
          const dy = p.y - my
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < MOUSE_RADIUS && d > 1) {
            // Strong repulsion that's clearly visible
            const force = ((MOUSE_RADIUS - d) / MOUSE_RADIUS)
            const strength = force * force * 2.5  // quadratic falloff for snappy feel
            p.vx += (dx / d) * strength
            p.vy += (dy / d) * strength
          }
        }

        // Damping — heavier so particles feel floaty
        p.vx *= 0.96
        p.vy *= 0.96

        // Speed cap
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (speed > 4) {
          p.vx = (p.vx / speed) * 4
          p.vy = (p.vy / speed) * 4
        }

        p.x += p.vx
        p.y += p.vy

        // Wrap edges
        if (p.x < -30) p.x = w + 30
        if (p.x > w + 30) p.x = -30
        if (p.y < -30) p.y = h + 30
        if (p.y > h + 30) p.y = -30
      }

      // Draw connection lines — brighter near mouse
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < connDist) {
            let a = (1 - d / connDist) * 0.22

            // Brighten connections near cursor
            if (mouseActive) {
              const midX = (pts[i].x + pts[j].x) / 2
              const midY = (pts[i].y + pts[j].y) / 2
              const dMouse = Math.sqrt((midX - mx) ** 2 + (midY - my) ** 2)
              if (dMouse < MOUSE_RADIUS * 1.2) {
                a += (1 - dMouse / (MOUSE_RADIUS * 1.2)) * 0.25
              }
            }

            const avgH = (pts[i].hue + pts[j].hue) / 2
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `hsla(${avgH}, 75%, 68%, ${a})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      // Draw particles with glow
      for (const p of pts) {
        const pulse = Math.sin(t * p.pulseSpeed + p.pulsePhase) * 0.35 + 0.65
        let op = p.opacity * pulse
        let r = p.radius * (0.7 + pulse * 0.5)

        // Enlarge + brighten near cursor
        if (mouseActive) {
          const dMouse = Math.sqrt((p.x - mx) ** 2 + (p.y - my) ** 2)
          if (dMouse < MOUSE_RADIUS * 1.5) {
            const proximity = 1 - dMouse / (MOUSE_RADIUS * 1.5)
            op = Math.min(op + proximity * 0.4, 1)
            r *= 1 + proximity * 0.8
          }
        }

        // Outer glow
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 5)
        g.addColorStop(0, `hsla(${p.hue}, 85%, 75%, ${op * 0.55})`)
        g.addColorStop(0.4, `hsla(${p.hue}, 75%, 65%, ${op * 0.18})`)
        g.addColorStop(1, `hsla(${p.hue}, 60%, 50%, 0)`)
        ctx.beginPath()
        ctx.arc(p.x, p.y, r * 5, 0, Math.PI * 2)
        ctx.fillStyle = g
        ctx.fill()

        // Core dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 95%, 85%, ${op})`
        ctx.fill()
      }
    }

    // ── DRAW: Shooting stars ──
    const drawStars = (t: number) => {
      const { w, h } = sizeRef.current

      if (t - lastStarTime.current > 3000 + Math.random() * 4500) {
        const fromRight = Math.random() > 0.5
        starsRef.current.push({
          x: fromRight ? w + 10 : -10,
          y: Math.random() * h * 0.45,
          vx: (fromRight ? -1 : 1) * (Math.random() * 4 + 5),
          vy: Math.random() * 2 + 1,
          life: 0,
          maxLife: 70 + Math.random() * 50,
          hue: Math.random() > 0.5 ? 268 : 188,
        })
        lastStarTime.current = t
      }

      const ss = starsRef.current
      for (let i = ss.length - 1; i >= 0; i--) {
        const s = ss[i]
        s.x += s.vx
        s.y += s.vy
        s.life++
        const prog = s.life / s.maxLife
        const a = prog < 0.1 ? prog * 10 : prog > 0.7 ? (1 - prog) / 0.3 : 1

        const tl = 50
        const lg = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * tl * 0.5, s.y - s.vy * tl * 0.5)
        lg.addColorStop(0, `hsla(${s.hue}, 85%, 80%, ${a * 0.75})`)
        lg.addColorStop(1, `hsla(${s.hue}, 70%, 60%, 0)`)
        ctx.beginPath()
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(s.x - s.vx * tl * 0.5, s.y - s.vy * tl * 0.5)
        ctx.strokeStyle = lg
        ctx.lineWidth = 2
        ctx.lineCap = 'round'
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(s.x, s.y, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${s.hue}, 95%, 92%, ${a * 0.9})`
        ctx.fill()

        if (s.life >= s.maxLife) ss.splice(i, 1)
      }
    }

    // ── Animation loop ──
    const loop = (t: number) => {
      const { w, h } = sizeRef.current
      if (w === 0 || h === 0) {
        resize()
        rafRef.current = requestAnimationFrame(loop)
        return
      }

      ctx.clearRect(0, 0, w, h)
      drawAurora(t)
      drawMouseGlow()
      drawParticles(t)
      drawStars(t)

      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('touchmove', onTouchMove)
      document.removeEventListener('touchend', onTouchEnd)
    }
  }, [buildParticles])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
      }}
      aria-hidden="true"
    />
  )
}
