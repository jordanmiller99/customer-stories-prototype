interface PullQuoteProps {
  quote: string
}

export default function PullQuote({ quote }: PullQuoteProps) {
  return (
    <aside
      className="my-12"
      style={{
        borderLeft: '4px solid #008c44',
        paddingLeft: '28px',
        paddingTop: '4px',
        paddingBottom: '4px',
      }}
      aria-label="Pull quote"
    >
      <blockquote
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)',
          lineHeight: '1.4',
          color: '#000d05',
          letterSpacing: '-0.01em',
          margin: 0,
        }}
      >
        {quote}
      </blockquote>
    </aside>
  )
}
