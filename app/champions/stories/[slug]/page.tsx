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
import PageReveal from '@/components/PageReveal'
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
      images: [{ url: absoluteUrl(champion.ogImage), width: 1200, height: 630, alt: champion.name }],
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
const HERO_BG = '#1A1310'
const CREAM   = '#F6F1E9'
const ACCENT  = '#C4722A'
const INK     = '#1C1A14'
const MUTED   = '#5A4A38'
const RULE    = '#DDD4C2'

// Which Q&A indices get a pull quote after them
const PULL_QUOTE_AFTER = [2, 5, 8]

export default async function StoryPage({ params }: PageProps) {
  const { slug } = await params
  const champion = getChampionBySlug(slug)
  if (!champion) notFound()

  const { prev, next } = getAdjacentChampions(slug)
  const storyUrl = absoluteUrl(`/champions/stories/${slug}`)
  const Portrait = PORTRAIT_COMPONENTS[slug]

  return (
    <PageReveal
      pullQuote={champion.pullQuotes[0]}
      name={champion.name}
      role={champion.role}
    >
      <div style={{ minHeight: '100vh', backgroundColor: CREAM }}>

        {/* ── HEADER — dark, minimal, no CTA ── */}
        <header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            backgroundColor: HERO_BG,
            borderBottom: '1px solid rgba(255,255,255,0.06)',
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
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(246,241,233,0.4)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
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
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(246,241,233,0.2)',
            }}
          >
            AirOps
          </span>
        </header>

        {/* ── HERO — full bleed, portrait fills space ── */}
        <div
          style={{
            position: 'relative',
            backgroundColor: HERO_BG,
            minHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Portrait illustration */}
          {Portrait ? (
            <div style={{ flex: 1, position: 'relative', minHeight: '480px' }}>
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
            <div className={champion.portraitTint} style={{ flex: 1, minHeight: '480px' }} />
          )}

          {/* Risograph halftone texture overlay on hero */}
          <svg
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              opacity: 0.035,
              pointerEvents: 'none',
              mixBlendMode: 'screen',
            }}
          >
            <defs>
              <pattern id="hero-halftone" patternUnits="userSpaceOnUse" width="18" height="18">
                <circle cx="9" cy="9" r="4" fill="#F6F1E9" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-halftone)" />
          </svg>

          {/* Bottom gradient — stone to transparent */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(to top, ${HERO_BG} 0%, ${HERO_BG}F0 14%, ${HERO_BG}88 38%, transparent 68%)`,
            }}
          />

          {/* Amber spine — left edge */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '4px',
              height: '100%',
              backgroundColor: ACCENT,
              opacity: 0.8,
            }}
          />

          {/* Hero text block */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: 'clamp(32px, 5vw, 80px)',
            }}
          >
            {/* Series label */}
            <div
              className="issue-label"
              style={{ marginBottom: '22px' }}
            >
              Content Engineers / A Profile
            </div>

            {/* Headline — dramatic serif */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
                lineHeight: '0.98',
                letterSpacing: '-0.035em',
                color: CREAM,
                marginBottom: '30px',
                maxWidth: '15em',
              }}
            >
              {champion.editorialHeadline}
            </h1>

            {/* Byline — magazine credit style */}
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <strong style={{ color: CREAM, fontWeight: 600 }}>{champion.name}</strong>
              <span style={{ color: 'rgba(246,241,233,0.25)' }}>/</span>
              <span style={{ color: 'rgba(246,241,233,0.5)' }}>{champion.role}</span>
              <span style={{ color: 'rgba(246,241,233,0.25)' }}>/</span>
              <span style={{ color: 'rgba(246,241,233,0.5)' }}>{champion.company}</span>
              <span style={{ color: 'rgba(246,241,233,0.25)' }}>/</span>
              <span style={{ color: 'rgba(246,241,233,0.38)' }}>{formatDate(champion.publishDate)}</span>
            </div>
          </div>
        </div>

        {/* ── CONTENT — warm cream ── */}
        <main style={{ backgroundColor: CREAM }}>

          {/* Share row */}
          <div
            style={{
              maxWidth: '960px',
              margin: '0 auto',
              padding: '24px 40px',
              borderBottom: `1px solid ${RULE}`,
            }}
          >
            <ShareButtons url={storyUrl} title={champion.editorialHeadline} />
          </div>

          {/* ── EDITORIAL INTRO ── */}
          <section
            style={{
              maxWidth: '680px',
              margin: '0 auto',
              padding: '64px 40px 56px',
              borderBottom: `1px solid ${RULE}`,
            }}
            aria-label="Editorial introduction"
          >
            <p
              className="drop-cap-warm"
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: '1.3125rem',
                lineHeight: '1.85',
                color: INK,
                maxWidth: '60ch',
              }}
            >
              {champion.introParagraph}
            </p>
          </section>

          {/* ── Q + A DIVIDER — oversized display ── */}
          <div
            style={{
              maxWidth: '960px',
              margin: '0 auto',
              padding: '60px 40px 40px',
            }}
            aria-hidden="true"
          >
            {/* The letters */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                paddingBottom: '20px',
                borderBottom: `3px solid ${INK}`,
                marginBottom: '14px',
                gap: '0',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(100px, 18vw, 200px)',
                  lineHeight: '0.8',
                  letterSpacing: '-0.05em',
                  color: ACCENT,
                  marginRight: '8px',
                  /* Misregistration on the Q */
                  textShadow: `4px 6px 0 rgba(107,174,138,0.35), -2px -2px 0 rgba(107,174,138,0.18)`,
                }}
              >
                Q
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '32px',
                  color: RULE,
                  marginBottom: '8px',
                  marginRight: '8px',
                  lineHeight: '1',
                }}
              >
                +
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(100px, 18vw, 200px)',
                  lineHeight: '0.8',
                  letterSpacing: '-0.05em',
                  color: INK,
                }}
              >
                A
              </span>

              {/* Decorative rule on the right */}
              <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', paddingBottom: '10px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '4px',
                    backgroundColor: ACCENT,
                    alignSelf: 'flex-end',
                  }}
                />
              </div>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: MUTED,
              }}
            >
              {champion.name} in conversation
            </div>
          </div>

          {/* ── Q&A — two-column grid on desktop ── */}
          <article
            style={{
              maxWidth: '960px',
              margin: '0 auto',
              padding: '0 40px 80px',
            }}
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
                        width: '100vw',
                        marginLeft: 'calc(50% - 50vw)',
                        overflow: 'hidden',
                        maxHeight: '380px',
                        marginTop: '16px',
                        marginBottom: '16px',
                      }}
                      role="img"
                      aria-label={`Illustration: ${champion.name}`}
                    >
                      <Portrait style={{ width: '100%', display: 'block', maxHeight: '380px' }} />
                    </div>
                  )}

                  {/* ── Q&A item — two-column grid ── */}
                  <div className="qa-grid">

                    {/* Left column: ink-stamp Q. + question */}
                    <div>
                      <span
                        className="ink-stamp"
                        style={{ fontSize: 'clamp(52px, 8vw, 88px)', marginBottom: '12px' }}
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
                          margin: 0,
                        }}
                      >
                        {item.question}
                      </h2>
                    </div>

                    {/* Right column: answer */}
                    <div
                      style={{
                        paddingTop: '4px',
                      }}
                    >
                      <p
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '1.0625rem',
                          lineHeight: '1.85',
                          color: INK,
                          maxWidth: '60ch',
                          margin: 0,
                        }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>

                  {pullQuote && <PullQuote quote={pullQuote} accent={ACCENT} />}

                  {/* Second portrait break at Q7 */}
                  {index === 6 && Portrait && (
                    <div
                      style={{
                        width: '100vw',
                        marginLeft: 'calc(50% - 50vw)',
                        overflow: 'hidden',
                        maxHeight: '300px',
                        marginTop: '16px',
                        marginBottom: '16px',
                      }}
                      role="img"
                      aria-label={`Illustration: ${champion.name}`}
                    >
                      <Portrait
                        style={{
                          width: '100%',
                          display: 'block',
                          maxHeight: '300px',
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
              maxWidth: '960px',
              margin: '0 auto',
              padding: '32px 40px',
              borderTop: `1px solid ${RULE}`,
            }}
          >
            <ShareButtons url={storyUrl} title={champion.editorialHeadline} />
          </div>

          {/* CTA + story nav */}
          <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 40px' }}>
            <CTASection />
            <StoryNav prev={prev} next={next} />
          </div>
        </main>

        {/* ── FOOTER — dark, matches header ── */}
        <footer
          style={{
            backgroundColor: HERO_BG,
            borderTop: '1px solid rgba(255,255,255,0.06)',
            padding: '40px',
            textAlign: 'center',
          }}
        >
          {/* Amber rule */}
          <div
            style={{
              width: '40px',
              height: '2px',
              backgroundColor: ACCENT,
              margin: '0 auto 24px',
            }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '14px',
            }}
          >
            <Link
              href="/champions/stories"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(246,241,233,0.32)',
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
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(246,241,233,0.32)',
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
              color: 'rgba(246,241,233,0.16)',
            }}
          >
            &copy; {new Date().getFullYear()} AirOps
          </p>
        </footer>
      </div>
    </PageReveal>
  )
}
