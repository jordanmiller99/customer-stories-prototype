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
    const amount = el.clientWidth * 0.75
    el.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="py-16" aria-label="Champion Stories carousel">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header row */}
        <div className="flex items-center justify-between mb-8">
          <h2
            className="text-2xl font-semibold"
            style={{ color: '#F5F5F7', fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            {title}
          </h2>

          {/* Nav arrows (desktop) */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30"
              style={{
                backgroundColor: canScrollLeft ? 'rgba(123,97,255,0.2)' : 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(123,97,255,0.3)',
                color: '#7B61FF',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30"
              style={{
                backgroundColor: canScrollRight ? 'rgba(123,97,255,0.2)' : 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(123,97,255,0.3)',
                color: '#7B61FF',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll container */}
        <div className="relative">
          {/* Left fade */}
          {canScrollLeft && (
            <div
              className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none hidden md:block"
              style={{ background: 'linear-gradient(to right, #0B0B1A, transparent)' }}
            />
          )}

          <div
            ref={scrollRef}
            onScroll={checkScrollability}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {champions.map((champion) => (
              <div
                key={champion.slug}
                className="flex-none w-72 snap-start"
              >
                <ChampionCard champion={champion} />
              </div>
            ))}
          </div>

          {/* Right fade */}
          {canScrollRight && (
            <div
              className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to left, #0B0B1A, transparent)' }}
            />
          )}
        </div>
      </div>
    </section>
  )
}
