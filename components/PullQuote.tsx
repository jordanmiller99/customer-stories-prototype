interface PullQuoteProps {
  quote: string
  accentColor?: 'purple' | 'teal' | 'orange' | 'pink'
}

const accents = {
  purple: { color: '#7B61FF', borderColor: '#7B61FF', bg: 'rgba(123,97,255,0.06)' },
  teal: { color: '#00D4AA', borderColor: '#00D4AA', bg: 'rgba(0,212,170,0.06)' },
  orange: { color: '#FF6B35', borderColor: '#FF6B35', bg: 'rgba(255,107,53,0.06)' },
  pink: { color: '#FF3CAC', borderColor: '#FF3CAC', bg: 'rgba(255,60,172,0.06)' },
}

export default function PullQuote({ quote, accentColor = 'purple' }: PullQuoteProps) {
  const accent = accents[accentColor]

  return (
    <aside
      className="my-12 mx-auto max-w-2xl px-8 py-8 rounded-2xl relative"
      style={{ backgroundColor: accent.bg, border: `1px solid ${accent.borderColor}22` }}
      aria-label="Pull quote"
    >
      {/* Big decorative quotation mark */}
      <span
        className="absolute -top-4 left-6 text-7xl leading-none select-none font-display"
        style={{
          color: accent.color,
          opacity: 0.3,
          fontFamily: 'Georgia, "Times New Roman", serif',
        }}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <blockquote
        className="text-2xl leading-relaxed font-display italic relative z-10"
        style={{
          color: '#F5F5F7',
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
        }}
      >
        {quote}
      </blockquote>

      {/* Bottom accent bar */}
      <div
        className="mt-6 h-0.5 w-16 rounded-full"
        style={{ backgroundColor: accent.color }}
      />
    </aside>
  )
}
