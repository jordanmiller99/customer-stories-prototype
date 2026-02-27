'use client'

import { useRef, useState, useCallback } from 'react'
import type { ChampionStory } from '@/data/champions'
import ChampionCard from './ChampionCard'

interface ChampionCarouselProps {
  champions: ChampionStory[]
  title?: string
}

export default function ChampionCarousel({
  champions,
  title = 'More Champion Stories',
}: ChampionCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollability = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: direction === 'left' ? -(el.clientWidth * 0.75) : el.clientWidth * 0.75, behavior: 'smooth' })
  }

  return (
    <section className="py-16" aria-label="Champion Stories carousel">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8 pb-4" style={{ borderBottom: '1px solid #d4e8da' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '28px',
              letterSpacing: '-0.01em',
              color: '#000d05',
            }}
          >
            {title}
          </h2>

          {/* Nav arrows */}
          <div className="hidden md:flex gap-2">
            {(['left', 'right'] as const).map((dir) => {
              const active = dir === 'left' ? canScrollLeft : canScrollRight
              return (
                <button
                  key={dir}
                  onClick={() => scroll(dir)}
                  disabled={!active}
                  aria-label={`Scroll ${dir}`}
                  className="w-9 h-9 flex items-center justify-center transition-colors duration-150 disabled:opacity-30"
                  style={{
                    backgroundColor: 'transparent',
                    border: '1px solid #d4e8da',
                    borderRadius: 0,
                    color: '#4a6355',
                    cursor: active ? 'pointer' : 'not-allowed',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d={dir === 'left' ? 'M10 12L6 8l4-4' : 'M6 4l4 4-4 4'}
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )
            })}
          </div>
        </div>

        <div className="relative">
          {/* Right fade */}
          {canScrollRight && (
            <div
              className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to left, #F8FFFA, transparent)' }}
            />
          )}

          <div
            ref={scrollRef}
            onScroll={checkScrollability}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {champions.map((champion) => (
              <div key={champion.slug} className="flex-none w-72 snap-start">
                <ChampionCard champion={champion} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
