import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: '#002910' }}
    >
      <div className="max-w-md">
        <div className="pill-label mb-6 mx-auto" style={{ width: 'fit-content' }}>
          404
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            color: '#ffffff',
            marginBottom: '16px',
          }}
        >
          This story hasn&rsquo;t been written yet
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '16px',
            lineHeight: '1.6',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '40px',
          }}
        >
          The page you&rsquo;re looking for doesn&rsquo;t exist. But there are plenty of real stories worth reading.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/champions/stories"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              fontSize: '14px',
              backgroundColor: '#00ff64',
              color: '#000d05',
              padding: '12px 24px',
              borderRadius: 0,
              textDecoration: 'none',
            }}
          >
            See all champion stories
          </Link>
          <a
            href="https://www.airops.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              fontSize: '14px',
              backgroundColor: 'transparent',
              color: '#ffffff',
              padding: '12px 24px',
              borderRadius: 0,
              border: '1px solid rgba(255,255,255,0.3)',
              textDecoration: 'none',
            }}
          >
            Go to AirOps
          </a>
        </div>
      </div>
    </div>
  )
}
