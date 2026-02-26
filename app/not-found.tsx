import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: '#0B0B1A' }}
    >
      {/* Decorative gradient orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7B61FF, transparent)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-md">
        <p
          className="text-sm uppercase tracking-widest mb-4 font-medium"
          style={{ color: '#7B61FF' }}
        >
          404
        </p>
        <h1
          className="font-display text-5xl mb-6 leading-tight"
          style={{
            color: '#F5F5F7',
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
          }}
        >
          This story hasn&rsquo;t been written yet
        </h1>
        <p className="text-base mb-10" style={{ color: '#6B6B80', lineHeight: '1.7' }}>
          The page you&rsquo;re looking for doesn&rsquo;t exist. But there are plenty of real
          stories worth reading.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/champions/stories"
            className="px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #7B61FF, #FF3CAC)',
              color: '#fff',
            }}
          >
            See all champion stories
          </Link>
          <a
            href="https://www.airops.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
            style={{
              backgroundColor: 'rgba(255,255,255,0.06)',
              color: '#F5F5F7',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            Go to AirOps
          </a>
        </div>
      </div>
    </div>
  )
}
