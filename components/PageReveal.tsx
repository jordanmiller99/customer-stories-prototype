'use client'

import { useEffect, useState } from 'react'

type Phase = 'cover' | 'turning' | 'done'

export default function PageReveal({
  children,
  pullQuote,
  name,
  role,
}: {
  children: React.ReactNode
  pullQuote: string
  name: string
  role: string
}) {
  const [phase, setPhase] = useState<Phase>('cover')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('turning'), 900)
    const t2 = setTimeout(() => setPhase('done'), 2200)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <>
      {/* Content beneath — fades in as the page turns away */}
      <div
        style={{
          opacity: phase === 'cover' ? 0 : 1,
          transition:
            phase === 'cover' ? 'none' : 'opacity 0.45s ease 0.35s',
        }}
      >
        {children}
      </div>

      {/* Shadow cast on the content as the page turns over it */}
      {phase === 'turning' && (
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9998,
            background:
              'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 40%, transparent 75%)',
            animation: 'page-shadow-fade 1.3s ease forwards',
            pointerEvents: 'none',
          }}
        />
      )}

      {/* ── 3D PAGE FLIP ── */}
      {phase !== 'done' && (
        // Perspective container — fixed, does not move, establishes 3D space
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            perspective: '1400px',
            // Perspective origin slightly right of center — natural reader viewpoint
            perspectiveOrigin: '62% 48%',
            pointerEvents: phase === 'turning' ? 'none' : 'auto',
          }}
        >
          {/* The page itself — rotates around its LEFT edge (spine) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              transformStyle: 'preserve-3d',
              transformOrigin: 'left center',
              transform:
                phase === 'turning' ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transition:
                phase === 'turning'
                  ? 'transform 1.15s cubic-bezier(0.4, 0, 0.15, 1)'
                  : 'none',
            }}
          >

            {/* ── FRONT FACE — the magazine cover ── */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backfaceVisibility: 'hidden',
                backgroundColor: '#1A1310',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '48px',
                overflow: 'hidden',
              }}
            >
              {/* Left spine — the binding edge */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '6px',
                  backgroundColor: '#C4722A',
                }}
              />

              {/* Right-edge lift gradient — simulates page starting to peel */}
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  bottom: 0,
                  width: '80px',
                  background:
                    'linear-gradient(to right, transparent, rgba(0,0,0,0.25))',
                  pointerEvents: 'none',
                }}
              />

              {/* Dot-grid texture */}
              <svg
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  opacity: 0.055,
                  pointerEvents: 'none',
                }}
              >
                <defs>
                  <pattern
                    id="cover-grid"
                    patternUnits="userSpaceOnUse"
                    width="28"
                    height="28"
                  >
                    <circle cx="14" cy="14" r="1.4" fill="#F6F1E9" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cover-grid)" />
              </svg>

              {/* Cover text */}
              <div
                style={{
                  textAlign: 'center',
                  maxWidth: '680px',
                  position: 'relative',
                }}
              >
                {/* Masthead */}
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#C4722A',
                    marginBottom: '52px',
                  }}
                >
                  AirOps &nbsp;&middot;&nbsp; Content Engineers
                </p>

                {/* Pull quote — the cover story teaser */}
                <blockquote
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(1.75rem, 4.5vw, 3.75rem)',
                    lineHeight: '1.15',
                    letterSpacing: '-0.035em',
                    color: '#F6F1E9',
                    margin: '0 0 52px',
                  }}
                >
                  &ldquo;{pullQuote}&rdquo;
                </blockquote>

                {/* Amber rule */}
                <div
                  style={{
                    width: '40px',
                    height: '2px',
                    backgroundColor: '#C4722A',
                    margin: '0 auto 20px',
                  }}
                />

                {/* Credit line */}
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.09em',
                    textTransform: 'uppercase',
                    color: 'rgba(246,241,233,0.42)',
                  }}
                >
                  {name} &nbsp;/&nbsp; {role}
                </p>
              </div>
            </div>

            {/* ── BACK FACE — inside of the cover page, revealed mid-turn ── */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backfaceVisibility: 'hidden',
                // Must be mirrored (it's the back of the front face)
                transform: 'rotateY(180deg)',
                backgroundColor: '#F0E8DC',
                overflow: 'hidden',
              }}
            >
              {/* Paper texture lines — like unprinted newsprint */}
              <svg
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  opacity: 0.12,
                }}
              >
                <defs>
                  <pattern
                    id="back-lines"
                    patternUnits="userSpaceOnUse"
                    width="1"
                    height="28"
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                      stroke="#1A1310"
                      strokeWidth="0.8"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#back-lines)" />
              </svg>

              {/* Faint AirOps watermark — centered */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(80px, 14vw, 160px)',
                    letterSpacing: '-0.04em',
                    color: '#1A1310',
                    opacity: 0.06,
                    userSelect: 'none',
                  }}
                >
                  AirOps
                </span>
              </div>

              {/* Right-edge shadow — the binding fold as it closes */}
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  bottom: 0,
                  width: '60px',
                  background:
                    'linear-gradient(to right, transparent, rgba(26,19,16,0.18))',
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
