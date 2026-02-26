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
    <div style={{ minHeight: '100vh', backgroundColor: '#0B0B1A' }}>
      {/* Top nav */}
      <header
        className="sticky top-0 z-50 px-6 py-4 flex items-center justify-between"
        style={{
          backgroundColor: 'rgba(11,11,26,0.9)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <Link
          href="https://www.airops.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold tracking-wide transition-opacity hover:opacity-70"
          style={{ color: '#7B61FF', letterSpacing: '0.05em' }}
        >
          AirOps
        </Link>

        <div className="flex items-center gap-4">
          <a
            href="https://www.airops.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-xs px-4 py-2 rounded-full font-medium transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #7B61FF, #FF3CAC)',
              color: '#fff',
            }}
          >
            Start a Trial
          </a>
        </div>
      </header>

      <main>
        {/* Hero section */}
        <section
          className="relative px-6 pt-24 pb-20 text-center overflow-hidden"
          aria-label="Hero"
        >
          {/* Background gradient orbs */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-15 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #7B61FF, transparent)' }}
            aria-hidden="true"
          />
          <div
            className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{ backgroundColor: '#FF3CAC' }}
            aria-hidden="true"
          />
          <div
            className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{ backgroundColor: '#00D4AA' }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Kicker label */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8 uppercase tracking-widest"
              style={{
                backgroundColor: 'rgba(123,97,255,0.15)',
                color: '#7B61FF',
                border: '1px solid rgba(123,97,255,0.25)',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: '#7B61FF' }}
                aria-hidden="true"
              />
              By AirOps
            </div>

            <h1
              className="font-display mb-6 leading-tight"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                color: '#F5F5F7',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                letterSpacing: '-0.02em',
              }}
            >
              Champion Stories
            </h1>

            <p
              className="text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ color: '#C7C7CC', lineHeight: '1.7' }}
            >
              Meet the marketers redefining what&rsquo;s possible with content engineering.
              Real stories, real careers, real results.
            </p>

            {/* Decorative divider */}
            <div className="mt-10 flex items-center justify-center gap-3">
              <div className="h-px w-16 rounded-full" style={{ backgroundColor: 'rgba(123,97,255,0.4)' }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#7B61FF' }} />
              <div className="h-px w-16 rounded-full" style={{ backgroundColor: 'rgba(123,97,255,0.4)' }} />
            </div>
          </div>
        </section>

        {/* Stories grid */}
        <section
          className="max-w-7xl mx-auto px-6 pb-24"
          aria-label="Champion stories collection"
        >
          {/* Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm" style={{ color: '#6B6B80' }}>
              {champions.length} {champions.length === 1 ? 'story' : 'stories'}
            </p>
          </div>

          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            }}
          >
            {champions.map((champion, i) => (
              <ChampionCard key={champion.slug} champion={champion} priority={i < 3} />
            ))}
          </div>
        </section>

        {/* Bottom CTA banner */}
        <section
          className="border-t px-6 py-16 text-center"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <div className="max-w-xl mx-auto">
            <h2
              className="text-3xl font-display mb-4"
              style={{
                color: '#F5F5F7',
                fontFamily: 'Georgia, "Times New Roman", serif',
              }}
            >
              You&rsquo;re next. Ready?
            </h2>
            <p className="mb-8" style={{ color: '#6B6B80' }}>
              Join the marketers building content operations that actually scale.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://www.airops.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #7B61FF, #FF3CAC)',
                  color: '#fff',
                }}
              >
                Start a Trial
              </a>
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
                Enroll in Cohort
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer
        className="px-6 py-8 text-center text-xs border-t"
        style={{
          color: '#6B6B80',
          borderColor: 'rgba(255,255,255,0.05)',
        }}
      >
        <p>&copy; {new Date().getFullYear()} AirOps. All rights reserved.</p>
      </footer>
    </div>
  )
}
