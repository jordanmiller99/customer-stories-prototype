'use client'

import { useEffect, useState } from 'react'

type Phase = 'cover' | 'turning' | 'done'

export default function PageReveal({
  children,
  issue = '01',
}: {
  children: React.ReactNode
  issue?: string
}) {
  const [phase, setPhase] = useState<Phase>('cover')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('turning'), 750)
    const t2 = setTimeout(() => setPhase('done'), 1750)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <>
      {/* Content — fades in as cover turns away */}
      <div
        style={{
          opacity: phase === 'cover' ? 0 : 1,
          transform: phase === 'cover' ? 'translateX(6px)' : 'none',
          transition:
            phase === 'cover'
              ? 'none'
              : 'opacity 0.65s ease 0.25s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.25s',
        }}
      >
        {children}
      </div>

      {/* Magazine cover — folds away to the right */}
      {phase !== 'done' && (
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: '#1A1310',
            transformOrigin: 'right center',
            transform:
              phase === 'turning'
                ? 'perspective(1600px) rotateY(-90deg)'
                : 'perspective(1600px) rotateY(0deg)',
            transition:
              phase === 'turning'
                ? 'transform 0.95s cubic-bezier(0.65, 0, 0.35, 1)'
                : 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Spine — right edge */}
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '6px',
              backgroundColor: '#C4722A',
            }}
          />

          {/* Subtle dot-grid texture on cover */}
          <svg
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              opacity: 0.06,
            }}
          >
            <defs>
              <pattern
                id="cover-dots"
                patternUnits="userSpaceOnUse"
                width="24"
                height="24"
              >
                <circle cx="12" cy="12" r="1.5" fill="#F6F1E9" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cover-dots)" />
          </svg>

          {/* Amber accent bar — horizontal */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              right: '6px',
              height: '1px',
              backgroundColor: '#C4722A',
              opacity: 0.2,
              transform: 'translateY(-80px)',
            }}
          />

          {/* Cover content */}
          <div
            style={{
              textAlign: 'center',
              padding: '48px',
              position: 'relative',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C4722A',
                marginBottom: '48px',
              }}
            >
              AirOps &nbsp;&middot;&nbsp; Content Engineers
            </p>

            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(4.5rem, 14vw, 11rem)',
                lineHeight: '0.82',
                letterSpacing: '-0.055em',
                color: '#F6F1E9',
                marginBottom: '56px',
              }}
            >
              No.&thinsp;{issue}
            </div>

            <div
              style={{
                width: '48px',
                height: '2px',
                backgroundColor: '#C4722A',
                margin: '0 auto',
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}
