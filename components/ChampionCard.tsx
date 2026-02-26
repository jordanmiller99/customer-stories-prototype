'use client'

import Link from 'next/link'
import type { ChampionStory } from '@/data/champions'

interface ChampionCardProps {
  champion: ChampionStory
  priority?: boolean
}

const levelColors = {
  Gold: { bg: 'rgba(255, 200, 50, 0.15)', text: '#FFC832', border: 'rgba(255, 200, 50, 0.3)' },
  Green: { bg: 'rgba(0, 212, 170, 0.15)', text: '#00D4AA', border: 'rgba(0, 212, 170, 0.3)' },
}

export default function ChampionCard({ champion }: ChampionCardProps) {
  const level = levelColors[champion.championLevel]

  return (
    <Link
      href={`/champions/stories/${champion.slug}`}
      className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
      style={{
        backgroundColor: '#111127',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Portrait illustration placeholder */}
      <div
        className={`relative w-full aspect-[4/3] ${champion.portraitGradient} overflow-hidden`}
      >
        {/* Decorative overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, transparent 40%, rgba(17,17,39,0.8) 100%)',
          }}
        />

        {/* Company logo placeholder */}
        <div
          className="absolute top-4 right-4 w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold"
          style={{
            backgroundColor: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
            color: 'rgba(255,255,255,0.9)',
            fontSize: '9px',
            letterSpacing: '0.05em',
          }}
        >
          {champion.company
            .split(' ')
            .map((w) => w[0])
            .join('')
            .slice(0, 3)}
        </div>

        {/* Champion level badge */}
        <div
          className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-xs font-semibold"
          style={{
            backgroundColor: level.bg,
            color: level.text,
            border: `1px solid ${level.border}`,
            backdropFilter: 'blur(8px)',
            letterSpacing: '0.05em',
          }}
        >
          {champion.championLevel} Champion
        </div>

        {/* Abstract person silhouette suggestion */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 w-32 h-32 rounded-full opacity-20"
          style={{ background: 'rgba(255,255,255,0.3)' }}
        />
      </div>

      {/* Card body */}
      <div className="p-5 space-y-3">
        {/* Editorial headline */}
        <h2
          className="font-display text-lg leading-snug transition-colors duration-200"
          style={{
            color: '#F5F5F7',
            fontFamily: 'Georgia, "Times New Roman", serif',
          }}
        >
          <span
            className="group-hover:text-transparent bg-clip-text"
            style={{
              WebkitBackgroundClip: 'text',
              backgroundImage: 'linear-gradient(135deg, #F5F5F7, #7B61FF)',
            }}
          >
            {champion.editorialHeadline}
          </span>
        </h2>

        {/* Champion name and role */}
        <div className="pt-1 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
          <p className="text-sm font-semibold" style={{ color: '#F5F5F7' }}>
            {champion.name}
          </p>
          <p className="text-xs mt-0.5" style={{ color: '#6B6B80' }}>
            {champion.role}, {champion.company}
          </p>
        </div>
      </div>
    </Link>
  )
}
