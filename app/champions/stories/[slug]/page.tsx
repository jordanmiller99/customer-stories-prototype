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

  const title = `${champion.editorialHeadline} | Content Engineers`
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
      images: [{ url: absoluteUrl(champion.ogImage), width: 1200, height: 630, alt: `${champion.name}: ${champion.editorialHeadline}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteUrl(champion.ogImage)],
    },
  }
}

// Editorial palette
const HERO_BG   = '#1A1310'
const CREAM     = '#F6F1E9'
const ACCENT    = '#C4722A'
const INK       = '#1C1A14'
const MUTED     = '#5A4A38'
const RULE      = '#DDD4C2'

const PULL_QUOTE_AFTER = [2, 5, 8]

export default async function StoryPage({ params }: PageProps) {
  const { slug } = await params
  const champion = getChampionBySlug(slug)
  if (!champion) notFound()

  const { prev, next } = getAdjacentChampions(slug)
  const storyUrl = absoluteUrl(`/champions/stories/${slug}`)
  const Portrait = PORTRAIT_COMPONENTS[slug]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: CREAM }}>

      {/* Dark header — minimal, no CTA above fold */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backgroundColor: HERO_BG,
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 32px',
        }}
      >
        <Link
          href="/champions/stories"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(246,241,233,0.45)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'color 0.15s',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Content Engineers
        </Link>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(246,241,233,0.22)',
          }}
        >
          AirOps
        </span>
      </header>

      {/* HERO — full bleed, dark, dramatic */}
      <div
        style={{
          position: 'relative',
          backgroundColor: HERO_BG,
          minHeight: '88vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Portrait illustration — fills the hero */}
        {Portrait ? (
          <div style={{ flex: 1, position: 'relative', minHeight: '400px' }}>
            <Portrait
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                display: 'block',
              }}
            />
          </div>
        ) : (
          <div
            className={champion.portraitTint}
            style={{ flex: 1, minHeight: '400px' }}
          />
        )}

        {/* Bottom gradient for text legibility */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to top, ${HERO_BG} 0%, ${HERO_BG}E6 18%, ${HERO_BG}80 42%, transparent 70%)`,
          }}
        />

        {/* Thin amber rule accent — left edge */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '3px',
            height: '100%',
            backgroundColor: ACCENT,
            opacity: 0.7,
          }}
        />

        {/* Hero text — sits at the bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: 'clamp(32px, 5vw, 72px)',
          }}
        >
          {/* Series tag */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: ACCENT,
              marginBottom: '20px',
            }}
          >
            Content Engineers / A Profile
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(2.5rem, 6.5vw, 5.25rem)',
              lineHeight: '1.0',
              letterSpacing: '-0.03em',
              color: CREAM,
              marginBottom: '28px',
              maxWidth: '16em',
            }}
          >
            {champion.editorialHeadline}
          </h1>

          {/* Byline — magazine credit line */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
            }}
          >
            <span style={{ color: CREAM, fontWeight: 600 }}>{champion.name}</span>
            <span style={{ color: 'rgba(246,241,233,0.25)' }}>/</span>
            <span style={{ color: 'rgba(246,241,233,0.5)' }}>{champion.role}</span>
            <span style={{ color: 'rgba(246,241,233,0.25)' }}>/</span>
            <span style={{ color: 'rgba(246,241,233,0.5)' }}>{champion.company}</span>
            <span style={{ color: 'rgba(246,241,233,0.25)' }}>/</span>
            <span style={{ color: 'rgba(246,241,233,0.4)' }}>{formatDate(champion.publishDate)}</span>
          </div>
        </div>
      </div>

      {/* CONTENT — warm cream */}
      <main style={{ backgroundColor: CREAM }}>

        {/* Share + thin rule */}
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            padding: '24px 32px',
            borderBottom: `1px solid ${RULE}`,
          }}
        >
          <ShareButtons url={storyUrl} title={champion.editorialHeadline} />
        </div>

        {/* Editorial intro with drop cap */}
        <section
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            padding: '56px 32px 52px',
            borderBottom: `1px solid ${RULE}`,
          }}
          aria-label="Editorial introduction"
        >
          <p
            className="drop-cap-warm"
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '1.25rem',
              lineHeight: '1.85',
              color: INK,
              maxWidth: '62ch',
            }}
          >
            {champion.introParagraph}
          </p>
        </section>

        {/* Q + A section divider — large display, asymmetric */}
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            padding: '52px 32px 36px',
          }}
          aria-hidden="true"
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: '0',
              paddingBottom: '18px',
              borderBottom: `2px solid ${INK}`,
              marginBottom: '12px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(88px, 14vw, 160px)',
                lineHeight: '0.82',
                letterSpacing: '-0.045em',
                color: ACCENT,
                marginRight: '10px',
              }}
            >
              Q
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '28px',
                color: RULE,
                marginBottom: '6px',
                marginRight: '10px',
                letterSpacing: '-0.01em',
              }}
            >
              +
            </span>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(88px, 14vw, 160px)',
                lineHeight: '0.82',
                letterSpacing: '-0.045em',
                color: INK,
              }}
            >
              A
            </span>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: MUTED,
            }}
          >
            {champion.name} in conversation
          </div>
        </div>

        {/* Q&A */}
        <article
          style={{ maxWidth: '720px', margin: '0 auto', padding: '0 32px 64px' }}
          aria-label="Interview Q&A"
        >
          {champion.qa.map((item, index) => {
            const pullQuoteIdx = PULL_QUOTE_AFTER.indexOf(index)
            const pullQuote = pullQuoteIdx !== -1 ? champion.pullQuotes[pullQuoteIdx] : null

            return (
              <div key={index}>
                {/* Mid-story portrait break at Q4 */}
                {index === 3 && Portrait && (
                  <div
                    style={{
                      margin: '52px -32px',
                      overflow: 'hidden',
                      maxHeight: '340px',
                    }}
                    role="img"
                    aria-label={`Illustration: ${champion.name}`}
                  >
                    <Portrait
                      style={{
                        width: '100%',
                        display: 'block',
                        maxHeight: '340px',
                      }}
                    />
                  </div>
                )}

                {/* Q&A item */}
                <div
                  style={{
                    paddingTop: '44px',
                    paddingBottom: '44px',
                    borderBottom: `1px solid ${RULE}`,
                  }}
                >
                  {/* Question with large Q. prefix */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '14px',
                      alignItems: 'flex-start',
                      marginBottom: '22px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontStyle: 'italic',
                        fontSize: '52px',
                        lineHeight: '1',
                        letterSpacing: '-0.03em',
                        color: ACCENT,
                        marginTop: '-2px',
                        flexShrink: 0,
                        userSelect: 'none',
                      }}
                      aria-hidden="true"
                    >
                      Q.
                    </span>
                    <h2
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontStyle: 'italic',
                        fontSize: '1.125rem',
                        lineHeight: '1.5',
                        color: INK,
                        paddingTop: '13px',
                        margin: 0,
                      }}
                    >
                      {item.question}
                    </h2>
                  </div>

                  {/* Answer */}
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.0625rem',
                      lineHeight: '1.82',
                      color: INK,
                      maxWidth: '62ch',
                      margin: 0,
                    }}
                  >
                    {item.answer}
                  </p>
                </div>

                {pullQuote && <PullQuote quote={pullQuote} accent={ACCENT} ink={INK} rule={RULE} />}

                {/* Second portrait break at Q7 */}
                {index === 6 && Portrait && (
                  <div
                    style={{
                      margin: '52px -32px',
                      overflow: 'hidden',
                      maxHeight: '280px',
                    }}
                    role="img"
                    aria-label={`Illustration: ${champion.name}`}
                  >
                    <Portrait
                      style={{
                        width: '100%',
                        display: 'block',
                        maxHeight: '280px',
                        objectPosition: 'top',
                      }}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </article>

        {/* Bottom share */}
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            padding: '32px 32px',
            borderTop: `1px solid ${RULE}`,
          }}
        >
          <ShareButtons url={storyUrl} title={champion.editorialHeadline} />
        </div>

        {/* CTA + nav */}
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 32px' }}>
          <CTASection />
          <StoryNav prev={prev} next={next} />
        </div>
      </main>

      {/* Footer — dark, matches header */}
      <footer
        style={{
          backgroundColor: HERO_BG,
          borderTop: '1px solid rgba(255,255,255,0.07)',
          padding: '36px 32px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '12px',
          }}
        >
          <Link
            href="/champions/stories"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.09em',
              textTransform: 'uppercase',
              color: 'rgba(246,241,233,0.35)',
              textDecoration: 'none',
            }}
          >
            Content Engineers
          </Link>
          <span style={{ color: 'rgba(246,241,233,0.12)' }}>&middot;</span>
          <a
            href="https://www.airops.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.09em',
              textTransform: 'uppercase',
              color: 'rgba(246,241,233,0.35)',
              textDecoration: 'none',
            }}
          >
            AirOps
          </a>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'rgba(246,241,233,0.18)',
          }}
        >
          &copy; {new Date().getFullYear()} AirOps
        </p>
      </footer>
    </div>
  )
}
