import Link from 'next/link'
import type { ChampionStory } from '@/data/champions'

interface StoryNavProps {
  prev: ChampionStory | null
  next: ChampionStory | null
}

export default function StoryNav({ prev, next }: StoryNavProps) {
  return (
    <nav
      className="border-t py-10"
      style={{ borderColor: '#d4e8da' }}
      aria-label="Story navigation"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          {prev ? (
            <Link href={`/champions/stories/${prev.slug}`} className="nav-link">
              <span
                className="flex items-center gap-1"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#4a6355',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Previous
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '15px',
                  color: '#000d05',
                  lineHeight: '1.3',
                }}
              >
                {prev.editorialHeadline}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: '#4a6355',
                  letterSpacing: '0.04em',
                }}
              >
                {prev.name}
              </span>
            </Link>
          ) : <div />}
        </div>

        <div>
          {next ? (
            <Link href={`/champions/stories/${next.slug}`} className="nav-link text-right">
              <span
                className="flex items-center justify-end gap-1"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#4a6355',
                }}
              >
                Next
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '15px',
                  color: '#000d05',
                  lineHeight: '1.3',
                }}
              >
                {next.editorialHeadline}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: '#4a6355',
                  letterSpacing: '0.04em',
                }}
              >
                {next.name}
              </span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </nav>
  )
}
