'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'

// Load the flipbook only on the client — it requires window/canvas APIs
const PageFlipInner = dynamic(() => import('./PageFlipInner'), { ssr: false })

export default function PageReveal({
  children,
  name,
  role,
  company,
}: {
  children: React.ReactNode
  name: string
  role: string
  company: string
}) {
  const [flipped, setFlipped] = useState(false)

  return (
    <>
      {/* Article — already rendered, fades in as the page turns */}
      <div
        style={{
          opacity: flipped ? 1 : 0,
          transition: flipped ? 'opacity 0.5s ease' : 'none',
        }}
      >
        {children}
      </div>

      {/* Flipbook overlay — sits on top, removed from DOM after flip */}
      {!flipped && (
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            // Prevent any click-through while cover is showing
            pointerEvents: 'auto',
          }}
        >
          <PageFlipInner
            name={name}
            role={role}
            company={company}
            onDone={() => setFlipped(true)}
          />
        </div>
      )}
    </>
  )
}
