// Risograph photo treatment
// Each portrait uses the real headshot with SVG filter pipeline:
//   1. Desaturate to grayscale
//   2. Contrast boost (gamma)
//   3. Duotone color mapping via feComponentTransfer (shadow ink → highlight ink)
//   4. Misregistration layer: same photo, second ink color, offset by a few px
//   5. Halftone dot texture overlay
//   6. Fine grain overlay
// Each champion uses a different "ink" pair — same editorial series, distinct print runs.

import { ComponentType } from 'react'

type PortraitProps = {
  className?: string
  style?: React.CSSProperties
}

// Parse hex color to [r, g, b] in 0–1 range
function rgb(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  return [r, g, b]
}

// Risograph palette
const STONE = '#1A1310'
const AMBER = '#C4722A'
const SAGE  = '#7BAE8A'
const CREAM = '#F6F1E9'

type RisoConfig = {
  src: string
  // Duotone: grayscale 0 (shadows) → shadow color, 1 (highlights) → highlight color
  shadow: string
  highlight: string
  // Misregistration: second ink printed slightly offset
  misreg: string
  misregOffset: [number, number]
  misregOpacity: number
  // Background fill (shows behind image if it has transparency / short height)
  background: string
  // Editorial accent color (spine + bottom rule)
  accent: string
}

const CONFIGS: Record<string, RisoConfig> = {
  'lucy-hoyle': {
    src: '/portraits/lucy-hoyle.png',
    shadow: STONE,
    highlight: CREAM,
    misreg: AMBER,
    misregOffset: [5, 6],
    misregOpacity: 0.45,
    background: CREAM,
    accent: AMBER,
  },
  'connor-beaulieu': {
    src: '/portraits/connor-beaulieu.jpeg',
    shadow: STONE,
    highlight: SAGE,
    misreg: AMBER,
    misregOffset: [4, 6],
    misregOpacity: 0.4,
    background: '#0D0F0D',
    accent: AMBER,
  },
  'vivian-hoang': {
    src: '/portraits/vivian-hoang.jpeg',
    shadow: STONE,
    highlight: CREAM,
    misreg: SAGE,
    misregOffset: [-4, 5],
    misregOpacity: 0.42,
    background: '#C8B898',
    accent: SAGE,
  },
  'brianna-chapman': {
    src: '/portraits/brianna-chapman.jpeg',
    shadow: STONE,
    highlight: AMBER,
    misreg: SAGE,
    misregOffset: [5, 4],
    misregOpacity: 0.38,
    background: '#F0EBE0',
    accent: AMBER,
  },
  'tim-metz': {
    src: '/portraits/tim-metz.jpeg',
    shadow: STONE,
    highlight: SAGE,
    misreg: AMBER,
    misregOffset: [4, 5],
    misregOpacity: 0.42,
    background: '#7A6A9A',
    accent: AMBER,
  },
  'lauren-shufran': {
    src: '/portraits/lauren-shufran.jpg',
    shadow: STONE,
    highlight: CREAM,
    misreg: SAGE,
    misregOffset: [4, 5],
    misregOpacity: 0.4,
    background: '#A8B8A0',
    accent: SAGE,
  },
}

function RisographPortrait({
  slug,
  config,
  className,
  style,
}: {
  slug: string
  config: RisoConfig
  className?: string
  style?: React.CSSProperties
}) {
  // Unique IDs so multiple portraits on the same page don't clash
  const fMain    = `rp-main-${slug}`
  const fMisreg  = `rp-misreg-${slug}`
  const pHalf    = `rp-ht-${slug}`
  const pGrain   = `rp-gr-${slug}`

  const [s0, s1, s2] = rgb(config.shadow)
  const [h0, h1, h2] = rgb(config.highlight)
  const [m0, m1, m2] = rgb(config.misreg)
  const [mx, my]     = config.misregOffset

  const tv = (a: number, b: number) => `${a.toFixed(4)} ${b.toFixed(4)}`

  return (
    <svg
      viewBox="0 0 480 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{ width: '100%', height: '100%', display: 'block', ...style }}
    >
      <defs>
        {/* ── Halftone dot texture ── */}
        <pattern id={pHalf} patternUnits="userSpaceOnUse" width="8" height="8">
          <circle cx="4" cy="4" r="1.6" fill="#000000" />
        </pattern>

        {/* ── Fine grain ── */}
        <pattern id={pGrain} patternUnits="userSpaceOnUse" width="3" height="3">
          <circle cx="1.5" cy="1.5" r="0.55" fill="#000000" />
        </pattern>

        {/* ── Main duotone filter ──
            Desaturate → contrast boost → map to shadow/highlight ink colors */}
        <filter
          id={fMain}
          x="0%" y="0%" width="100%" height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feColorMatrix type="saturate" values="0" result="gray" />
          <feComponentTransfer in="gray" result="boosted">
            <feFuncR type="gamma" amplitude="1.3" exponent="0.76" offset="-0.06" />
            <feFuncG type="gamma" amplitude="1.3" exponent="0.76" offset="-0.06" />
            <feFuncB type="gamma" amplitude="1.3" exponent="0.76" offset="-0.06" />
          </feComponentTransfer>
          <feComponentTransfer in="boosted">
            <feFuncR type="table" tableValues={tv(s0, h0)} />
            <feFuncG type="table" tableValues={tv(s1, h1)} />
            <feFuncB type="table" tableValues={tv(s2, h2)} />
          </feComponentTransfer>
        </filter>

        {/* ── Misregistration filter ──
            Same pipeline but maps to the second ink color (slightly softer contrast) */}
        <filter
          id={fMisreg}
          x="-5%" y="-5%" width="110%" height="110%"
          colorInterpolationFilters="sRGB"
        >
          <feColorMatrix type="saturate" values="0" result="gray" />
          <feComponentTransfer in="gray" result="boosted">
            <feFuncR type="gamma" amplitude="1.15" exponent="0.82" offset="-0.04" />
            <feFuncG type="gamma" amplitude="1.15" exponent="0.82" offset="-0.04" />
            <feFuncB type="gamma" amplitude="1.15" exponent="0.82" offset="-0.04" />
          </feComponentTransfer>
          <feComponentTransfer in="boosted">
            <feFuncR type="table" tableValues={tv(s0, m0)} />
            <feFuncG type="table" tableValues={tv(s1, m1)} />
            <feFuncB type="table" tableValues={tv(s2, m2)} />
          </feComponentTransfer>
        </filter>
      </defs>

      {/* Background */}
      <rect width="480" height="560" fill={config.background} />

      {/* Misregistration layer — offset by a few px, blends as color fringing */}
      <image
        href={config.src}
        width="480" height="560"
        preserveAspectRatio="xMidYMin slice"
        filter={`url(#${fMisreg})`}
        transform={`translate(${mx},${my})`}
        opacity={config.misregOpacity}
      />

      {/* Main duotone photo */}
      <image
        href={config.src}
        width="480" height="560"
        preserveAspectRatio="xMidYMin slice"
        filter={`url(#${fMain})`}
      />

      {/* Halftone texture — adds print grain quality */}
      <rect width="480" height="560" fill={`url(#${pHalf})`} opacity="0.07" />

      {/* Fine grain overlay */}
      <rect width="480" height="560" fill={`url(#${pGrain})`} opacity="0.18" />

      {/* Editorial amber spine */}
      <rect x="16" y="0" width="3" height="560" fill={config.accent} opacity="0.55" />

      {/* Bottom rule */}
      <rect x="0" y="548" width="480" height="4" fill={config.accent} opacity="0.85" />
    </svg>
  )
}

// Factory: create a portrait component for each slug
function makePortrait(slug: string): ComponentType<PortraitProps> {
  const config = CONFIGS[slug]
  function Portrait({ className, style }: PortraitProps) {
    return (
      <RisographPortrait
        slug={slug}
        config={config}
        className={className}
        style={style}
      />
    )
  }
  Portrait.displayName = `Portrait_${slug}`
  return Portrait
}

export const PORTRAIT_COMPONENTS: Record<string, ComponentType<PortraitProps>> = {
  'lucy-hoyle':      makePortrait('lucy-hoyle'),
  'connor-beaulieu': makePortrait('connor-beaulieu'),
  'vivian-hoang':    makePortrait('vivian-hoang'),
  'brianna-chapman': makePortrait('brianna-chapman'),
  'tim-metz':        makePortrait('tim-metz'),
  'lauren-shufran':  makePortrait('lauren-shufran'),
}
