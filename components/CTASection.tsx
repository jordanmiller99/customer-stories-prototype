'use client'

export default function CTASection() {
  return (
    <section
      className="my-16 px-8 py-12"
      style={{ backgroundColor: '#002910', borderRadius: 0 }}
    >
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          color: '#ffffff',
          marginBottom: '12px',
        }}
      >
        You&rsquo;re next.<br />Ready?
      </h2>

      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '16px',
          color: 'rgba(255,255,255,0.6)',
          marginBottom: '32px',
          maxWidth: '380px',
        }}
      >
        Join the marketers redefining content engineering.
      </p>

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <a
          href="https://www.airops.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-150"
          style={{
            display: 'inline-block',
            backgroundColor: '#00ff64',
            color: '#000d05',
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            fontSize: '14px',
            padding: '12px 24px',
            borderRadius: 0,
            textDecoration: 'none',
          }}
          onMouseOver={e => (e.currentTarget.style.backgroundColor = '#00e55a')}
          onMouseOut={e => (e.currentTarget.style.backgroundColor = '#00ff64')}
        >
          Start a Trial
        </a>
        <a
          href="https://www.airops.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            backgroundColor: 'transparent',
            color: '#ffffff',
            fontFamily: 'var(--font-sans)',
            fontWeight: 500,
            fontSize: '14px',
            padding: '12px 24px',
            borderRadius: 0,
            border: '1px solid rgba(255,255,255,0.3)',
            textDecoration: 'none',
          }}
        >
          Enroll in Cohort
        </a>
      </div>
    </section>
  )
}
