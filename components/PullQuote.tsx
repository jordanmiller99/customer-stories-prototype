interface PullQuoteProps {
  quote: string
  accent?: string
}

export default function PullQuote({
  quote,
  accent = '#C4722A',
}: PullQuoteProps) {
  return (
    <aside
      aria-label="Pull quote"
      style={{
        /* Full-bleed breakout from the content column */
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
        padding: '72px clamp(32px, 8vw, 140px)',
        backgroundColor: '#1A1310',
        position: 'relative',
        marginTop: '64px',
        marginBottom: '64px',
        overflow: 'hidden',
      }}
    >
      {/* Halftone dot texture in background */}
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.07,
          pointerEvents: 'none',
        }}
      >
        <defs>
          <pattern
            id="pq-halftone"
            patternUnits="userSpaceOnUse"
            width="14"
            height="14"
          >
            <circle cx="7" cy="7" r="3" fill="#F6F1E9" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pq-halftone)" />
      </svg>

      {/* Amber bottom rule */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '4px',
          backgroundColor: accent,
        }}
      />

      {/* Misregistered open-quote mark */}
      <div
        aria-hidden="true"
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: 'clamp(100px, 18vw, 200px)',
          lineHeight: '1',
          position: 'absolute',
          top: '-20px',
          left: 'clamp(20px, 6vw, 100px)',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        {/* Sage misregistration layer */}
        <span
          style={{
            position: 'absolute',
            color: '#7BAE8A',
            opacity: 0.35,
            transform: 'translate(5px, 6px)',
          }}
        >
          &ldquo;
        </span>
        {/* Amber primary layer */}
        <span style={{ color: accent, opacity: 0.22, position: 'relative' }}>
          &ldquo;
        </span>
      </div>

      {/* Quote text */}
      <blockquote
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)',
          lineHeight: '1.2',
          letterSpacing: '-0.03em',
          color: '#F6F1E9',
          margin: 0,
          maxWidth: '22em',
          position: 'relative',
        }}
      >
        {quote}
      </blockquote>
    </aside>
  )
}
