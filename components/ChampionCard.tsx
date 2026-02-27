'use client'

import Link from 'next/link'
import type { ChampionStory } from '@/data/champions'
import { PORTRAIT_COMPONENTS } from '@/components/portraits/ChampionPortraits'

interface ChampionCardProps {
  champion: ChampionStory
  priority?: boolean
}

export default function ChampionCard({ champion }: ChampionCardProps) {
  const Portrait = PORTRAIT_COMPONENTS[champion.slug]

  return (
    <Link
      href={`/champions/stories/${champion.slug}`}
      className="group block overflow-hidden transition-shadow duration-200 hover:shadow-xl"
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #d4e8da',
        borderRadius: 0,
        textDecoration: 'none',
      }}
    >
      {/* Portrait illustration — fills top of card */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4/3' }}>
        {Portrait ? (
          <Portrait className="w-full h-full object-cover" />
        ) : (
          <div className={`w-full h-full ${champion.portraitTint}`} />
        )}
      </div>

      {/* Card body */}
      <div className="p-5" style={{ borderTop: '1px solid #d4e8da' }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: '19px',
            lineHeight: '1.25',
            letterSpacing: '-0.01em',
            color: '#000d05',
            marginBottom: '14px',
          }}
        >
          {champion.editorialHeadline}
        </h2>

        <div style={{ borderTop: '1px solid #d4e8da', paddingTop: '12px' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 600, color: '#000d05', marginBottom: '2px' }}>
            {champion.name}
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.04em', color: '#4a6355' }}>
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
