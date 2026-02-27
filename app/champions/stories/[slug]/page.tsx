import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  getChampionBySlug,
  getPublishedChampions,
  getAdjacentChampions,
} from '@/data/champions'
import { formatDate, absoluteUrl } from '@/lib/utils'
import PullQuote from '@/components/PullQuote'
import ShareButtons from '@/components/ShareButtons'
import StoryNav from '@/components/StoryNav'
import CTASection from '@/components/CTASection'
import { PORTRAIT_COMPONENTS } from '@/components/portraits/ChampionPortraits'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const champions = getPublishedChampions()
  return champions.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const champion = getChampionBySlug(slug)
  if (!champion) return {}

  const title = `${champion.editorialHeadline} | Champion Stories`
  const description = champion.introParagraph.slice(0, 160)
  const url = absoluteUrl(`/champions/stories/${slug}`)

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      publishedTime: champion.publishDate,
      images: [{ url: absoluteUrl(champion.ogImage), width: 1200, height: 630, alt: `${champion.name} — ${champion.editorialHeadline}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteUrl(champion.ogImage)],
    },
  }
}

const PULL_QUOTE_AFTER = [2, 5, 8]

export default async function StoryPage({ params }: PageProps) {
  const { slug } = await params
  const champion = getChampionBySlug(slug)
  if (!champion) notFound()

  const { prev, next } = getAdjacentChampions(slug)
  const storyUrl = absoluteUrl(`/champions/stories/${slug}`)
  const Portrait = PORTRAIT_COMPONENTS[slug]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>

      {/* Nav */}
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #d4e8da' }}
      >
        <Link href="/champions/stories" className="link-mono inline-flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Champion Stories
        </Link>

        <a href="https://www.airops.com" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block btn-nav">
          Start a Trial
        </a>
      </header>

      {/* Hero — full-width portrait + overlaid headline */}
      <div className="relative w-full overflow-hidden" style={{ maxHeight: '70vh', minHeight: '400px' }}>
        {/* Portrait illustration — full bleed */}
        {Portrait ? (
          <Portrait className="w-full" style={{ display: 'block' }} />
        ) : (
          <div className={`w-full ${champion.portraitTint}`} style={{ aspectRatio: '16/9' }} />
        )}

        {/* Gradient overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
          }}
          aria-hidden="true"
        />

        {/* Overlaid headline + byline */}
        <div className="absolute bottom-0 left-0 right-0 px-8 pb-10 max-w-4xl mx-auto" style={{ left: 0, right: 0 }}>
          <div className="max-w-3xl mx-auto">
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(2rem, 5vw, 3.75rem)',
                lineHeight: '1.05',
                letterSpacing: '-0.025em',
                color: '#ffffff',
                marginBottom: '16px',
                textShadow: '0 2px 20px rgba(0,0,0,0.5)',
              }}
            >
              {champion.editorialHeadline}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 600, color: '#ffffff' }}>
                  {champion.name}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'rgba(255,255,255,0.65)', marginLeft: '12px', letterSpacing: '0.05em' }}>
                  {champion.role}, {champion.company} &middot; {formatDate(champion.publishDate)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-2xl mx-auto px-6 pb-24">

        {/* Share + divider */}
        <div className="py-6" style={{ borderBottom: '1px solid #d4e8da' }}>
          <ShareButtons url={storyUrl} title={champion.editorialHeadline} />
        </div>

        {/* Editorial intro — with drop cap */}
        <section
          className="py-10"
          style={{ borderBottom: '1px solid #d4e8da' }}
          aria-label="Editorial introduction"
        >
          <p
            className="drop-cap"
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '20px',
              lineHeight: '1.75',
              color: '#1a2e1f',
            }}
          >
            {champion.introParagraph}
          </p>
        </section>

        {/* Q + A header */}
        <div
          className="flex items-baseline gap-4 py-8"
          style={{ borderBottom: '2px solid #000d05' }}
          aria-hidden="true"
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '64px',
              lineHeight: 1,
              letterSpacing: '-0.04em',
              color: '#008c44',
            }}
          >
            Q
          </span>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '20px',
              color: '#d4e8da',
              marginBottom: '4px',
            }}
          >
            +
          </span>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '64px',
              lineHeight: 1,
              letterSpacing: '-0.04em',
              color: '#000d05',
            }}
          >
            A
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#4a6355',
              marginBottom: '6px',
            }}
          >
            {champion.name}
          </span>
        </div>

        {/* Q&A */}
        <article aria-label="Interview Q&A">
          {champion.qa.map((item, index) => {
            const pullQuoteIdx = PULL_QUOTE_AFTER.indexOf(index)
            const pullQuote = pullQuoteIdx !== -1 ? champion.pullQuotes[pullQuoteIdx] : null

            return (
              <div key={index}>
                {/* Mid-story portrait break at Q4 */}
                {index === 3 && Portrait && (
                  <div
                    className="w-full overflow-hidden -mx-6 my-10"
                    style={{ width: 'calc(100% + 48px)' }}
                    role="img"
                    aria-label={`Illustration for ${champion.name}`}
                  >
                    <Portrait className="w-full" style={{ maxHeight: '280px', objectFit: 'cover', display: 'block' }} />
                  </div>
                )}

                {/* Q&A item */}
                <div className="py-8" style={{ borderBottom: '1px solid #d4e8da' }}>
                  {/* Large decorative Q */}
                  <div className="flex gap-4 items-start mb-3">
                    <span className="qa-question-label" aria-hidden="true">Q.</span>
                    <h2
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontStyle: 'italic',
                        fontSize: '18px',
                        lineHeight: '1.4',
                        color: '#000d05',
                        paddingTop: '14px',
                        flex: 1,
                      }}
                    >
                      {item.question}
                    </h2>
                  </div>

                  {/* Answer */}
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '17px',
                      lineHeight: '1.75',
                      color: '#1a2e1f',
                      paddingLeft: '0',
                    }}
                  >
                    {item.answer}
                  </p>
                </div>

                {pullQuote && <PullQuote quote={pullQuote} />}

                {/* Second portrait break at Q7 */}
                {index === 6 && Portrait && (
                  <div
                    className="w-full overflow-hidden -mx-6 my-10"
                    style={{ width: 'calc(100% + 48px)' }}
                    role="img"
                    aria-label={`Second illustration for ${champion.name}`}
                  >
                    <Portrait className="w-full" style={{ maxHeight: '220px', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
                  </div>
                )}
              </div>
            )
          })}
        </article>

        {/* Bottom share */}
        <div className="py-8" style={{ borderTop: '1px solid #d4e8da' }}>
          <ShareButtons url={storyUrl} title={champion.editorialHeadline} />
        </div>

        <CTASection />
        <StoryNav prev={prev} next={next} />
      </main>

      <footer className="px-6 py-8 text-center" style={{ borderTop: '1px solid #d4e8da' }}>
        <div className="flex items-center justify-center gap-4 mb-2">
          <Link href="/champions/stories" className="link-mono">Champion Stories</Link>
          <span style={{ color: '#d4e8da' }}>&middot;</span>
          <a href="https://www.airops.com" target="_blank" rel="noopener noreferrer" className="link-mono">AirOps</a>
        </div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#4a6355' }}>
          &copy; {new Date().getFullYear()} AirOps
        </p>
      </footer>
    </div>
  )
}
