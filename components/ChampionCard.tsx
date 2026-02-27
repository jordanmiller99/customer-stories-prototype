'use client'

import Link from 'next/link'
import type { ChampionStory } from '@/data/champions'

interface ChampionCardProps {
  champion: ChampionStory
  priority?: boolean
}

export default function ChampionCard({ champion }: ChampionCardProps) {
  return (
    <Link
      href={`/champions/stories/${champion.slug}`}
      className="group block overflow-hidden transition-shadow duration-200 hover:shadow-lg"
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #d4e8da',
        borderRadius: 0,
        textDecoration: 'none',
      }}
    >
      {/* Portrait area */}
      <div
        className={`relative w-full ${champion.portraitTint} overflow-hidden`}
        style={{ aspectRatio: '4/3' }}
        role="img"
        aria-label={`Portrait placeholder for ${champion.name}`}
      >
        {/* Initials — editorial placeholder */}
        <div className="absolute inset-0 flex items-end p-5">
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '80px',
              lineHeight: 1,
              color: 'rgba(255,255,255,0.12)',
              letterSpacing: '-0.03em',
              userSelect: 'none',
            }}
            aria-hidden="true"
          >
            {champion.name.split(' ').map((w) => w[0]).join('')}
          </span>
        </div>

        {/* Level pill */}
        <div className="absolute top-3 left-3 pill-label">
          {champion.championLevel} Champion
        </div>
      </div>

      {/* Card body */}
      <div className="p-5" style={{ borderTop: '1px solid #d4e8da' }}>
        {/* Editorial headline */}
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: '18px',
            lineHeight: '1.25',
            letterSpacing: '-0.01em',
            color: '#000d05',
            marginBottom: '14px',
          }}
        >
          {champion.editorialHeadline}
        </h2>

        {/* Byline */}
        <div style={{ borderTop: '1px solid #d4e8da', paddingTop: '12px' }}>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              fontWeight: 600,
              color: '#000d05',
              marginBottom: '2px',
            }}
          >
            {champion.name}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.04em',
              color: '#4a6355',
            }}
          >
            {champion.role}, {champion.company}
          </p>
        </div>

        {/* Green reveal bar on hover */}
        <div
          className="mt-4 h-px transition-all duration-300 w-0 group-hover:w-full"
          style={{ backgroundColor: '#00ff64' }}
          aria-hidden="true"
        />
      </div>
    </Link>
  )
}
