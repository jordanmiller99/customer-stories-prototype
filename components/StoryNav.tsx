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
      style={{ borderColor: 'rgba(255,255,255,0.07)' }}
      aria-label="Story navigation"
    >
      <div className="grid grid-cols-2 gap-4">
        {/* Previous */}
        <div>
          {prev ? (
            <Link
              href={`/champions/stories/${prev.slug}`}
              className="group flex flex-col gap-1 p-4 rounded-xl transition-all duration-200 hover:scale-[1.01]"
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <span className="text-xs uppercase tracking-widest flex items-center gap-1" style={{ color: '#6B6B80' }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Previous story
              </span>
              <span
                className="text-sm font-medium leading-snug group-hover:text-transparent transition-colors"
                style={{
                  color: '#F5F5F7',
                  backgroundImage: 'linear-gradient(135deg, #F5F5F7, #7B61FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'inherit',
                }}
              >
                {prev.editorialHeadline}
              </span>
              <span className="text-xs" style={{ color: '#6B6B80' }}>
                {prev.name}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Next */}
        <div>
          {next ? (
            <Link
              href={`/champions/stories/${next.slug}`}
              className="group flex flex-col gap-1 p-4 rounded-xl transition-all duration-200 hover:scale-[1.01] text-right"
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <span className="text-xs uppercase tracking-widest flex items-center justify-end gap-1" style={{ color: '#6B6B80' }}>
                Next story
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span
                className="text-sm font-medium leading-snug"
                style={{ color: '#F5F5F7' }}
              >
                {next.editorialHeadline}
              </span>
              <span className="text-xs" style={{ color: '#6B6B80' }}>
                {next.name}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </nav>
  )
}
