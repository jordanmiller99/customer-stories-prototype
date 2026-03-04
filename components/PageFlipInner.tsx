'use client'

import { useEffect, useRef, useState } from 'react'
// eslint-disable-next-line @typescript-eslint/no-require-imports
const HTMLFlipBook = require('react-pageflip').default

interface Props {
  name: string
  role: string
  company: string
  onDone: () => void
}

export default function PageFlipInner({ name, role, company, onDone }: Props) {
  const bookRef = useRef<any>(null)
  const [dims, setDims] = useState({ w: 0, h: 0 })

  // Measure viewport on client only
  useEffect(() => {
    setDims({ w: window.innerWidth, h: window.innerHeight })
  }, [])

  // Auto-flip after a short pause, then signal done
  useEffect(() => {
    if (dims.w === 0) return
    const flip = setTimeout(() => {
      bookRef.current?.pageFlip().flipNext('bottom')
    }, 950)
    const done = setTimeout(onDone, 2600)
    return () => {
      clearTimeout(flip)
      clearTimeout(done)
    }
  }, [dims, onDone])

  if (dims.w === 0) return null

  // Split name into two lines at the last space for dramatic stacking
  const nameParts = name.split(' ')
  const firstName = nameParts.slice(0, -1).join(' ')
  const lastName  = nameParts[nameParts.length - 1]

  return (
    <HTMLFlipBook
      ref={bookRef}
      width={dims.w}
      height={dims.h}
      size="fixed"
      showCover={true}
      flippingTime={1100}
      maxShadowOpacity={0.7}
      drawShadow={true}
      usePortrait={true}
      startPage={0}
      style={{ userSelect: 'none' }}
      className=""
      mobileScrollSupport={false}
      clickEventForward={false}
      useMouseEvents={false}
      swipeDistance={0}
    >
      {/* ── PAGE 0: COVER ── */}
      <div
        style={{
          width: dims.w,
          height: dims.h,
          backgroundColor: '#1A1310',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Left spine */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: '5px', backgroundColor: '#C4722A',
        }} />

        {/* Dot-grid texture */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.05 }}>
          <defs>
            <pattern id="cg" patternUnits="userSpaceOnUse" width="28" height="28">
              <circle cx="14" cy="14" r="1.4" fill="#F6F1E9" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cg)" />
        </svg>

        {/* Amber horizontal accent */}
        <div style={{
          position: 'absolute', bottom: '18%', left: '8%', right: '8%',
          height: '1px', backgroundColor: '#C4722A', opacity: 0.25,
        }} />

        {/* Cover content */}
        <div style={{ textAlign: 'center', padding: '48px', position: 'relative', maxWidth: '800px' }}>
          {/* Masthead */}
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#C4722A', marginBottom: '56px',
          }}>
            AirOps &nbsp;&middot;&nbsp; Content Engineers
          </p>

          {/* Name — stacked, enormous */}
          <div style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontSize: 'clamp(3.5rem, 11vw, 9rem)',
            lineHeight: '0.88', letterSpacing: '-0.04em',
            color: '#F6F1E9', marginBottom: '48px',
          }}>
            <div>{firstName}</div>
            <div>{lastName}</div>
          </div>

          {/* Amber rule */}
          <div style={{
            width: '44px', height: '2px', backgroundColor: '#C4722A',
            margin: '0 auto 22px',
          }} />

          {/* Role credit */}
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'rgba(246,241,233,0.4)',
          }}>
            {role} &nbsp;/&nbsp; {company}
          </p>
        </div>
      </div>

      {/* ── PAGE 1: INSIDE COVER (cream) ── */}
      <div
        style={{
          width: dims.w,
          height: dims.h,
          backgroundColor: '#EDE5D8',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Horizontal paper lines */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.1 }}>
          <defs>
            <pattern id="bl" patternUnits="userSpaceOnUse" width="1" height="32">
              <line x1="0" y1="0" x2="1" y2="0" stroke="#1A1310" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bl)" />
        </svg>

        {/* Ghost AirOps watermark */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontSize: 'clamp(60px, 12vw, 140px)', letterSpacing: '-0.04em',
            color: '#1A1310', opacity: 0.05, userSelect: 'none',
          }}>
            AirOps
          </span>
        </div>
      </div>
    </HTMLFlipBook>
  )
}
