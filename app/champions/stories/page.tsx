import type { Metadata } from 'next'
import Link from 'next/link'
import { getPublishedChampions } from '@/data/champions'
import ChampionCard from '@/components/ChampionCard'

export const metadata: Metadata = {
  title: 'Champion Stories',
  description:
    'Meet the marketers redefining what\'s possible with content engineering. Real stories, real careers, real results.',
  openGraph: {
    title: 'Champion Stories | AirOps',
    description:
      'Meet the marketers redefining what\'s possible with content engineering. Real stories, real careers, real results.',
    type: 'website',
  },
}

export default function ChampionsStoriesPage() {
  const champions = getPublishedChampions()

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>

      {/* Nav */}
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #d4e8da' }}
      >
        <a
          href="https://www.airops.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#000d05',
            textDecoration: 'none',
          }}
        >
          AirOps
        </a>

        <a
          href="https://www.airops.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-block btn-nav"
        >
          Start a Trial
        </a>
      </header>

      <main>
        {/* Hero — dark green */}
        <section
          className="px-6 pt-20 pb-24"
          style={{ backgroundColor: '#002910' }}
          aria-label="Hero"
        >
          <div className="max-w-4xl mx-auto">
            <div className="pill-label mb-8">Champion Stories</div>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                lineHeight: '1.0',
                letterSpacing: '-0.02em',
                color: '#ffffff',
                marginBottom: '24px',
              }}
            >
              Champion<br />Stories
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '18px',
                lineHeight: '1.6',
                color: 'rgba(255,255,255,0.65)',
                maxWidth: '480px',
              }}
            >
              Meet the marketers redefining what&rsquo;s possible with content engineering.
              Real stories, real careers, real results.
            </p>
          </div>
        </section>

        {/* Stories grid */}
        <section
          className="px-6 py-16"
          style={{ backgroundColor: '#F8FFFA', borderTop: '1px solid #d4e8da' }}
          aria-label="Champion stories"
        >
          <div className="max-w-7xl mx-auto">
            {/* Meta row */}
            <div
              className="flex items-center justify-between mb-8 pb-4"
              style={{ borderBottom: '1px solid #d4e8da' }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#4a6355',
                }}
              >
                {champions.length} Stories
              </p>
            </div>

            {/* Grid */}
            <div
              className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            >
              {champions.map((champion, i) => (
                <ChampionCard key={champion.slug} champion={champion} priority={i < 3} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="px-6 py-20 text-center"
          style={{ backgroundColor: '#ffffff', borderTop: '1px solid #d4e8da' }}
        >
          <div className="max-w-lg mx-auto">
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                letterSpacing: '-0.02em',
                lineHeight: '1.1',
                color: '#000d05',
                marginBottom: '12px',
              }}
            >
              You&rsquo;re next. Ready?
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '16px',
                color: '#4a6355',
                marginBottom: '32px',
              }}
            >
              Join the marketers building content operations that actually scale.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://www.airops.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Start a Trial
              </a>
              <a href="https://www.airops.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Enroll in Cohort
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer
        className="px-6 py-8 text-center"
        style={{ borderTop: '1px solid #d4e8da' }}
      >
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#4a6355',
          }}
        >
          &copy; {new Date().getFullYear()} AirOps. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
