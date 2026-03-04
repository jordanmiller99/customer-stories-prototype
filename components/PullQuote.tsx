interface PullQuoteProps {
  quote: string
  accent?: string
  ink?: string
  rule?: string
}

export default function PullQuote({
  quote,
  accent = '#C4722A',
  ink = '#1C1A14',
  rule = '#DDD4C2',
}: PullQuoteProps) {
  return (
    <aside
      style={{
        margin: '52px 0',
        padding: '40px 0',
        borderTop: `2px solid ${accent}`,
        borderBottom: `1px solid ${rule}`,
      }}
      aria-label="Pull quote"
    >
      {/* Decorative open-quote mark */}
      <div
        aria-hidden="true"
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: '72px',
          lineHeight: '1',
          color: accent,
          opacity: 0.35,
          marginBottom: '-16px',
          letterSpacing: '-0.02em',
          userSelect: 'none',
        }}
      >
        &ldquo;
      </div>

      <blockquote
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
          lineHeight: '1.3',
          letterSpacing: '-0.02em',
          color: ink,
          margin: 0,
          maxWidth: '24em',
        }}
      >
        {quote}
      </blockquote>
    </aside>
  )
}
