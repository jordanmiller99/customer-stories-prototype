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
          alt: `${champion.name} - ${champion.editorialHeadline}`,
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

const accentCycle = ['purple', 'teal', 'orange', 'pink'] as const

export default async function StoryPage({ params }: PageProps) {
  const { slug } = await params
  const champion = getChampionBySlug(slug)
  if (!champion) notFound()

  const { prev, next } = getAdjacentChampions(slug)
  const storyUrl = absoluteUrl(`/champions/stories/${slug}`)

  // Distribute pull quotes across the Q&A (at roughly Q3, Q6, Q9)
  const pullQuotePositions = [2, 5, 8]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0B0B1A' }}>
      {/* Top nav */}
      <header
        className="sticky top-0 z-50 px-6 py-4 flex items-center justify-between"
        style={{
          backgroundColor: 'rgba(11,11,26,0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <Link
          href="/champions/stories"
          className="inline-flex items-center gap-2 text-sm transition-all duration-200 hover:gap-3"
          style={{ color: '#7B61FF' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Champion Stories
        </Link>

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
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-24">
        {/* Hero section */}
        <section className="pt-16 pb-12">
          {/* Level badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 uppercase tracking-widest"
            style={{
              backgroundColor:
                champion.championLevel === 'Gold'
                  ? 'rgba(255,200,50,0.12)'
                  : 'rgba(0,212,170,0.12)',
              color: champion.championLevel === 'Gold' ? '#FFC832' : '#00D4AA',
              border: `1px solid ${champion.championLevel === 'Gold' ? 'rgba(255,200,50,0.25)' : 'rgba(0,212,170,0.25)'}`,
            }}
          >
            {champion.championLevel} Champion
          </div>

          {/* Headline */}
          <h1
            className="font-display leading-tight mb-6"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              color: '#F5F5F7',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '-0.02em',
            }}
          >
            {champion.editorialHeadline}
          </h1>

          {/* Byline */}
          <div className="flex items-center gap-4 pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="flex-1">
              <p className="font-semibold text-base" style={{ color: '#F5F5F7' }}>
                {champion.name}
              </p>
              <p className="text-sm" style={{ color: '#6B6B80' }}>
                {champion.role}, {champion.company} &middot; {formatDate(champion.publishDate)}
              </p>
            </div>
          </div>

          {/* Share buttons (top) */}
          <div className="pt-5">
            <ShareButtons url={storyUrl} title={champion.editorialHeadline} />
          </div>
        </section>

        {/* Hero illustration placeholder */}
        <div
          className={`relative w-full rounded-2xl overflow-hidden mb-12 ${champion.portraitGradient}`}
          style={{ aspectRatio: '16/7' }}
          role="img"
          aria-label={`Illustration for ${champion.name}'s story`}
        >
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.15)' }}
          >
            <div className="text-center">
              <div
                className="text-6xl font-display font-bold opacity-30 mb-2"
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  color: '#fff',
                }}
                aria-hidden="true"
              >
                {champion.name.split(' ').map(w => w[0]).join('')}
              </div>
              <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {champion.company}
              </p>
            </div>
          </div>
        </div>

        {/* Editorial intro */}
        <section
          className="mb-12 pb-12"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
          aria-label="Editorial introduction"
        >
          <p
            className="text-xl leading-relaxed font-display italic"
            style={{
              color: '#C7C7CC',
              fontFamily: 'Georgia, "Times New Roman", serif',
              lineHeight: '1.75',
            }}
          >
            {champion.introParagraph}
          </p>
        </section>

        {/* Q&A sections */}
        <article aria-label="Q&A interview">
          {champion.qa.map((item, index) => {
            const pullQuoteIndex = pullQuotePositions.indexOf(index)
            const pullQuote = pullQuoteIndex !== -1
              ? champion.pullQuotes[pullQuoteIndex]
              : null

            return (
              <div key={index}>
                {/* Detail illustration placeholder at index 3 */}
                {index === 3 && (
                  <div
                    className={`relative w-full rounded-xl overflow-hidden mb-8 ${champion.portraitGradient}`}
                    style={{ aspectRatio: '21/9', opacity: 0.7 }}
                    role="img"
                    aria-label={`Illustration ${1} for ${champion.name}'s story`}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1))',
                      }}
                    />
                  </div>
                )}

                {/* Question */}
                <div className="mb-8">
                  <h2
                    className="text-lg font-bold mb-4 leading-snug"
                    style={{ color: '#7B61FF' }}
                  >
                    {item.question}
                  </h2>

                  <p
                    className="text-base leading-relaxed"
                    style={{ color: '#C7C7CC', lineHeight: '1.8' }}
                  >
                    {item.answer}
                  </p>
                </div>

                {/* Pull quote after this Q&A if applicable */}
                {pullQuote && (
                  <PullQuote
                    quote={pullQuote}
                    accentColor={accentCycle[pullQuoteIndex % accentCycle.length]}
                  />
                )}

                {/* Second detail illustration after index 6 */}
                {index === 6 && (
                  <div
                    className={`relative w-full rounded-xl overflow-hidden mb-8 ${champion.portraitGradient}`}
                    style={{ aspectRatio: '21/9', opacity: 0.6 }}
                    role="img"
                    aria-label={`Illustration ${2} for ${champion.name}'s story`}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(225deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1))',
                      }}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </article>

        {/* Share buttons (bottom) */}
        <div
          className="py-8 border-t border-b"
          style={{ borderColor: 'rgba(255,255,255,0.07)' }}
        >
          <ShareButtons url={storyUrl} title={champion.editorialHeadline} />
        </div>

        {/* CTA section */}
        <CTASection />

        {/* Story navigation */}
        <StoryNav prev={prev} next={next} />
      </main>

      <footer
        className="px-6 py-8 text-center text-xs border-t"
        style={{
          color: '#6B6B80',
          borderColor: 'rgba(255,255,255,0.05)',
        }}
      >
        <div className="flex items-center justify-center gap-4 mb-2">
          <Link
            href="/champions/stories"
            className="transition-colors hover:text-white"
            style={{ color: '#6B6B80' }}
          >
            Champion Stories
          </Link>
          <span aria-hidden="true">&middot;</span>
          <a
            href="https://www.airops.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
            style={{ color: '#6B6B80' }}
          >
            AirOps
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} AirOps. All rights reserved.</p>
      </footer>
    </div>
  )
}
