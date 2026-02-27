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
      images: [
        {
          url: absoluteUrl(champion.ogImage),
          width: 1200,
          height: 630,
          alt: `${champion.name} — ${champion.editorialHeadline}`,
        },
      ],
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

        <a
          href="https://www.airops.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-block btn-nav"
        >
          Start a Trial
        </a>
      </header>

      <main className="max-w-2xl mx-auto px-6 pb-24">

        {/* Story header */}
        <section className="pt-16 pb-10" style={{ borderBottom: '1px solid #d4e8da' }}>
          <div className="pill-label mb-6">
            {champion.championLevel} Champion
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              lineHeight: '1.05',
              letterSpacing: '-0.02em',
              color: '#000d05',
              marginBottom: '24px',
            }}
          >
            {champion.editorialHeadline}
          </h1>

          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#000d05',
                  marginBottom: '3px',
                }}
              >
                {champion.name}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.05em',
                  color: '#4a6355',
                }}
              >
                {champion.role}, {champion.company} &middot; {formatDate(champion.publishDate)}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <ShareButtons url={storyUrl} title={champion.editorialHeadline} />
          </div>
        </section>

        {/* Hero portrait */}
        <div
          className={`w-full ${champion.portraitTint}`}
          style={{ aspectRatio: '3/2', marginTop: '40px', marginBottom: '40px' }}
          role="img"
          aria-label={`Portrait illustration for ${champion.name}`}
        >
          <div className="w-full h-full flex items-end p-8">
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(80px, 15vw, 140px)',
                lineHeight: 1,
                color: 'rgba(255,255,255,0.1)',
                letterSpacing: '-0.04em',
                userSelect: 'none',
              }}
              aria-hidden="true"
            >
              {champion.name.split(' ').map((w) => w[0]).join('')}
            </span>
          </div>
        </div>

        {/* Editorial intro */}
        <section
          className="pb-10"
          style={{ borderBottom: '1px solid #d4e8da' }}
          aria-label="Editorial introduction"
        >
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '20px',
              lineHeight: '1.7',
              color: '#1a2e1f',
            }}
          >
            {champion.introParagraph}
          </p>
        </section>

        {/* Q&A */}
        <article aria-label="Interview Q&A" className="pt-10">
          {champion.qa.map((item, index) => {
            const pullQuoteIdx = PULL_QUOTE_AFTER.indexOf(index)
            const pullQuote = pullQuoteIdx !== -1 ? champion.pullQuotes[pullQuoteIdx] : null

            return (
              <div key={index}>
                {index === 3 && (
                  <div
                    className={`w-full ${champion.portraitTint} mb-10`}
                    style={{ aspectRatio: '21/9' }}
                    role="img"
                    aria-label={`Illustration for ${champion.name}`}
                  />
                )}

                <div
                  className="mb-10 pb-10"
                  style={{ borderBottom: '1px solid #d4e8da' }}
                >
                  <h2
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#008c44',
                      marginBottom: '14px',
                    }}
                  >
                    {item.question}
                  </h2>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '17px',
                      lineHeight: '1.75',
                      color: '#000d05',
                    }}
                  >
                    {item.answer}
                  </p>
                </div>

                {pullQuote && <PullQuote quote={pullQuote} />}

                {index === 6 && (
                  <div
                    className={`w-full ${champion.portraitTint} mb-10`}
                    style={{ aspectRatio: '21/9', opacity: 0.7 }}
                    role="img"
                    aria-label={`Second illustration for ${champion.name}`}
                  />
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

      <footer
        className="px-6 py-8 text-center"
        style={{ borderTop: '1px solid #d4e8da' }}
      >
        <div
          className="flex items-center justify-center gap-4 mb-2"
        >
          <Link href="/champions/stories" className="link-mono">
            Champion Stories
          </Link>
          <span aria-hidden="true" style={{ color: '#d4e8da' }}>&middot;</span>
          <a href="https://www.airops.com" target="_blank" rel="noopener noreferrer" className="link-mono">
            AirOps
          </a>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#4a6355',
          }}
        >
          &copy; {new Date().getFullYear()} AirOps
        </p>
      </footer>
    </div>
  )
}
