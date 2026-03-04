// Risograph / screen-print portrait illustrations
// Visual approach: limited 3-ink palette (stone, amber, sage), halftone shadow
// patterns, intentional color misregistration on key shapes, grain texture overlay.
// Each portrait is a different "print run" of the same editorial series.

import { ComponentType } from 'react'

type PortraitProps = {
  className?: string
  style?: React.CSSProperties
}

// Risograph portrait palette
const STONE  = '#1A1310'
const AMBER  = '#C4722A'
const SAGE   = '#7BAE8A'
const CREAM  = '#F6F1E9'

// ─── Lucy Hoyle ──────────────────────────────────────────────────────────────
// Long flowing blonde/golden hair, warm smile, gold statement earrings, green top
function LucyHoylePortrait({ className, style }: PortraitProps = {}) {
  return (
    <svg viewBox="0 0 480 560" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <pattern id="lh-dots" patternUnits="userSpaceOnUse" width="6" height="6">
          <circle cx="3" cy="3" r="1.2" fill={AMBER} opacity="0.35" />
        </pattern>
        <pattern id="lh-grain" patternUnits="userSpaceOnUse" width="4" height="4">
          <circle cx="2" cy="2" r="0.6" fill={STONE} opacity="0.12" />
        </pattern>
      </defs>

      {/* Background */}
      <rect width="480" height="560" fill={CREAM} />
      <rect width="480" height="560" fill="url(#lh-grain)" />

      {/* Amber vertical rule */}
      <rect x="16" y="0" width="3" height="560" fill={AMBER} opacity="0.5" />

      {/* Body — green silk blouse (Carta green echo) */}
      <ellipse cx="244" cy="490" rx="165" ry="100" fill={SAGE} opacity="0.6" transform="translate(5,6)" />
      <ellipse cx="244" cy="490" rx="165" ry="100" fill="#3A7A4A" />

      {/* Neck */}
      <rect x="213" y="320" width="32" height="60" rx="8" fill={SAGE} opacity="0.4" transform="translate(3,4)" />
      <rect x="213" y="320" width="32" height="60" rx="8" fill={CREAM} />

      {/* Hair — long flowing blonde, fills behind face */}
      <path d="M 148 180 Q 130 300 140 430 Q 160 500 200 520 L 280 520 Q 320 500 340 430 Q 350 300 332 180 Q 290 140 240 130 Q 190 140 148 180 Z"
        fill={AMBER} opacity="0.5" transform="translate(4,6)" />
      <path d="M 148 180 Q 130 300 140 430 Q 160 500 200 520 L 280 520 Q 320 500 340 430 Q 350 300 332 180 Q 290 140 240 130 Q 190 140 148 180 Z"
        fill="#D4A843" />
      {/* Hair highlights */}
      <path d="M 165 190 Q 150 310 158 420 Q 170 370 175 290 Q 178 240 175 190 Z"
        fill={AMBER} opacity="0.3" />
      <path d="M 290 190 Q 305 240 308 290 Q 312 370 320 420 Q 328 310 315 190 Z"
        fill={AMBER} opacity="0.3" />
      <ellipse cx="175" cy="300" rx="30" ry="60" fill="url(#lh-dots)" opacity="0.5" />
      <ellipse cx="305" cy="300" rx="30" ry="60" fill="url(#lh-dots)" opacity="0.5" />

      {/* Face */}
      <ellipse cx="244" cy="215" rx="92" ry="112" fill={SAGE} opacity="0.35" transform="translate(4,5)" />
      <ellipse cx="240" cy="210" rx="92" ry="112" fill={CREAM} />

      {/* Eyes */}
      <ellipse cx="210" cy="200" rx="14" ry="9" fill={STONE} />
      <ellipse cx="270" cy="200" rx="14" ry="9" fill={STONE} />
      <circle cx="207" cy="199" r="4" fill={CREAM} />
      <circle cx="267" cy="199" r="4" fill={CREAM} />
      <ellipse cx="210" cy="195" rx="16" ry="5" fill={STONE} opacity="0.7" />
      <ellipse cx="270" cy="195" rx="16" ry="5" fill={STONE} opacity="0.7" />

      {/* Nose */}
      <path d="M 237 210 Q 233 240 228 248 Q 236 254 252 248 Q 247 240 243 210 Z" fill={AMBER} opacity="0.35" />

      {/* Smile */}
      <path d="M 218 270 Q 240 286 262 270" stroke={STONE} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M 220 272 Q 240 283 260 272" stroke={AMBER} strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />

      {/* Gold statement earrings */}
      <circle cx="152" cy="218" r="7" fill={AMBER} />
      <ellipse cx="152" cy="232" rx="5" ry="9" fill={AMBER} opacity="0.9" />
      <circle cx="330" cy="218" r="7" fill={AMBER} />
      <ellipse cx="330" cy="232" rx="5" ry="9" fill={AMBER} opacity="0.9" />

      {/* Circle pendant necklace */}
      <circle cx="240" cy="355" r="10" stroke={AMBER} strokeWidth="2" fill="none" opacity="0.7" />

      {/* Face grain overlay */}
      <ellipse cx="240" cy="210" rx="92" ry="112" fill="url(#lh-grain)" opacity="0.6" />

      {/* Bottom amber rule */}
      <rect x="0" y="548" width="480" height="4" fill={AMBER} opacity="0.6" />
    </svg>
  )
}

// ─── Connor Beaulieu ──────────────────────────────────────────────────────────
// Artistic interpretation — legal/data visual language, dark stone palette
function ConnorBeaulieuPortrait({ className, style }: PortraitProps = {}) {
  return (
    <svg viewBox="0 0 480 560" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <pattern id="cb-grid" patternUnits="userSpaceOnUse" width="24" height="24">
          <line x1="0" y1="0" x2="24" y2="0" stroke={SAGE} strokeWidth="0.5" opacity="0.3" />
          <line x1="0" y1="0" x2="0" y2="24" stroke={SAGE} strokeWidth="0.5" opacity="0.3" />
        </pattern>
        <pattern id="cb-dots" patternUnits="userSpaceOnUse" width="8" height="8">
          <circle cx="4" cy="4" r="1.5" fill={AMBER} opacity="0.25" />
        </pattern>
      </defs>

      {/* Background — dark stone */}
      <rect width="480" height="560" fill={STONE} />
      <rect width="480" height="560" fill="url(#cb-grid)" />

      {/* Document lines — LegalZoom reference */}
      <rect x="340" y="60" width="80" height="10" rx="2" fill={CREAM} opacity="0.06" />
      <rect x="340" y="78" width="64" height="10" rx="2" fill={CREAM} opacity="0.06" />
      <rect x="340" y="96" width="72" height="10" rx="2" fill={CREAM} opacity="0.06" />
      <rect x="340" y="114" width="55" height="10" rx="2" fill={CREAM} opacity="0.06" />

      {/* Shoulders */}
      <ellipse cx="244" cy="500" rx="170" ry="95" fill={SAGE} opacity="0.4" transform="translate(4,5)" />
      <ellipse cx="240" cy="495" rx="170" ry="95" fill="#2A3D30" />

      {/* Neck */}
      <rect x="216" y="318" width="28" height="55" rx="7" fill={CREAM} opacity="0.85" transform="translate(3,4)" />
      <rect x="213" y="315" width="28" height="55" rx="7" fill="#D4B090" />

      {/* Hair — short dark professional */}
      <ellipse cx="244" cy="170" rx="98" ry="80" fill={SAGE} opacity="0.3" transform="translate(4,5)" />
      <ellipse cx="240" cy="165" rx="98" ry="80" fill={STONE} />
      <path d="M 145 185 Q 145 130 240 120 Q 335 130 335 185 Q 335 140 240 132 Q 145 140 145 185 Z"
        fill={STONE} />

      {/* Face */}
      <ellipse cx="244" cy="218" rx="93" ry="108" fill={SAGE} opacity="0.3" transform="translate(4,5)" />
      <ellipse cx="240" cy="214" rx="93" ry="108" fill="#D4B090" />
      <ellipse cx="240" cy="214" rx="93" ry="108" fill="url(#cb-dots)" opacity="0.4" />

      {/* Eyes */}
      <ellipse cx="208" cy="202" rx="13" ry="8" fill={STONE} />
      <ellipse cx="272" cy="202" rx="13" ry="8" fill={STONE} />
      <circle cx="205" cy="201" r="3.5" fill={CREAM} opacity="0.7" />
      <circle cx="269" cy="201" r="3.5" fill={CREAM} opacity="0.7" />
      <path d="M 195 188 Q 210 183 224 187" stroke={CREAM} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M 258 187 Q 272 183 287 188" stroke={CREAM} strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Nose */}
      <path d="M 238 215 Q 234 238 230 245 Q 238 250 250 245 Q 246 238 242 215 Z" fill={AMBER} opacity="0.3" />

      {/* Expression */}
      <path d="M 220 268 Q 240 278 260 268" stroke={STONE} strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Amber accent lines */}
      <rect x="0" y="548" width="480" height="4" fill={AMBER} />
      <rect x="0" y="0" width="4" height="560" fill={AMBER} opacity="0.5" />
    </svg>
  )
}

// ─── Vivian Hoang ─────────────────────────────────────────────────────────────
// Long straight black hair, East Asian features, dark navy ribbed top, delicate necklace + sparkle, warm smile
function VivianHoangPortrait({ className, style }: PortraitProps = {}) {
  return (
    <svg viewBox="0 0 480 560" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <pattern id="vh-halftone" patternUnits="userSpaceOnUse" width="7" height="7">
          <circle cx="3.5" cy="3.5" r="1.3" fill={SAGE} opacity="0.3" />
        </pattern>
        <pattern id="vh-grain" patternUnits="userSpaceOnUse" width="3" height="3">
          <circle cx="1.5" cy="1.5" r="0.5" fill={STONE} opacity="0.1" />
        </pattern>
      </defs>

      {/* Background — warm off-white */}
      <rect width="480" height="560" fill="#EDE5D8" />
      <rect width="480" height="560" fill="url(#vh-grain)" />

      {/* Webflow-inspired diamond */}
      <path d="M 390 80 L 420 110 L 390 140 L 360 110 Z" fill={SAGE} opacity="0.15" />
      <path d="M 396 86 L 414 110 L 396 134 L 378 110 Z" stroke={SAGE} strokeWidth="1" fill="none" opacity="0.3" />

      {/* Shoulders — dark navy ribbed top */}
      <ellipse cx="244" cy="498" rx="175" ry="100" fill={SAGE} opacity="0.4" transform="translate(5,6)" />
      <ellipse cx="240" cy="492" rx="175" ry="100" fill="#1A2744" />
      {[0,1,2,3,4,5,6,7,8].map(i => (
        <line key={i} x1={90 + i*30} y1="420" x2={90 + i*25} y2="560" stroke="#253558" strokeWidth="8" opacity="0.4" />
      ))}

      {/* Neck */}
      <rect x="215" y="322" width="30" height="58" rx="8" fill={SAGE} opacity="0.25" transform="translate(3,4)" />
      <rect x="212" y="318" width="30" height="58" rx="8" fill="#E8C8A8" />

      {/* Hair — long straight, very dark */}
      <path d="M 148 165 Q 140 300 145 480 Q 160 530 200 540 L 200 480 Q 168 350 170 220 Q 178 175 195 160 Z"
        fill={STONE} opacity="0.5" transform="translate(4,5)" />
      <path d="M 332 165 Q 320 175 310 220 Q 312 350 280 480 L 280 540 Q 320 530 335 480 Q 340 300 332 165 Z"
        fill={STONE} opacity="0.5" transform="translate(4,5)" />
      <path d="M 148 165 Q 140 300 145 480 Q 160 530 200 540 L 200 480 Q 168 350 170 220 Q 178 175 195 160 Z"
        fill="#0D0B0A" />
      <path d="M 332 165 Q 320 175 310 220 Q 312 350 280 480 L 280 540 Q 320 530 335 480 Q 340 300 332 165 Z"
        fill="#0D0B0A" />
      <path d="M 150 175 Q 180 130 240 122 Q 300 130 330 175 Q 290 150 240 145 Q 190 150 150 175 Z"
        fill="#0D0B0A" />
      {/* Hair sheen */}
      <path d="M 155 180 Q 150 280 155 380 Q 162 320 165 250 Q 168 200 165 180 Z"
        fill={SAGE} opacity="0.15" />

      {/* Face */}
      <ellipse cx="244" cy="215" rx="90" ry="108" fill={SAGE} opacity="0.25" transform="translate(4,5)" />
      <ellipse cx="240" cy="210" rx="90" ry="108" fill="#E8C8A8" />
      <ellipse cx="240" cy="210" rx="90" ry="108" fill="url(#vh-halftone)" opacity="0.4" />

      {/* Eyes — almond-shaped */}
      <path d="M 196 200 Q 210 192 224 200 Q 210 208 196 200 Z" fill={STONE} />
      <path d="M 256 200 Q 270 192 284 200 Q 270 208 256 200 Z" fill={STONE} />
      <circle cx="212" cy="199" r="3" fill={CREAM} opacity="0.6" />
      <circle cx="272" cy="199" r="3" fill={CREAM} opacity="0.6" />
      <path d="M 197 196 Q 210 191 223 196" stroke={STONE} strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M 257 196 Q 270 191 283 196" stroke={STONE} strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* Nose */}
      <path d="M 238 215 Q 235 235 232 242 Q 239 246 248 242 Q 245 235 242 215 Z" fill={AMBER} opacity="0.25" />

      {/* Warm smile */}
      <path d="M 218 264 Q 240 280 262 264" stroke={STONE} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M 222 266 Q 240 278 258 266" stroke={AMBER} strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* Delicate necklace */}
      <path d="M 210 340 Q 240 355 270 340" stroke={AMBER} strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7" />

      {/* Sparkle accent (from photo detail on top) */}
      <path d="M 278 320 L 280 312 L 282 320 L 290 322 L 282 324 L 280 332 L 278 324 L 270 322 Z"
        fill={AMBER} opacity="0.8" />

      {/* Face grain */}
      <ellipse cx="240" cy="210" rx="90" ry="108" fill="url(#vh-grain)" opacity="0.5" />

      <rect x="0" y="548" width="480" height="4" fill={AMBER} opacity="0.7" />
    </svg>
  )
}

// ─── Brianna Chapman ──────────────────────────────────────────────────────────
// Artistic interpretation — community/connection visual language, Apollo.io context
function BriannaChapmanPortrait({ className, style }: PortraitProps = {}) {
  return (
    <svg viewBox="0 0 480 560" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <pattern id="bc-dots" patternUnits="userSpaceOnUse" width="10" height="10">
          <circle cx="5" cy="5" r="1.8" fill={SAGE} opacity="0.2" />
        </pattern>
        <pattern id="bc-grain" patternUnits="userSpaceOnUse" width="4" height="4">
          <circle cx="2" cy="2" r="0.6" fill={STONE} opacity="0.1" />
        </pattern>
      </defs>

      <rect width="480" height="560" fill={CREAM} />
      <rect width="480" height="560" fill="url(#bc-dots)" />

      {/* Apollo connection nodes — background detail */}
      <circle cx="380" cy="90" r="6" stroke={AMBER} strokeWidth="1.5" fill="none" opacity="0.3" />
      <circle cx="420" cy="70" r="4" stroke={AMBER} strokeWidth="1.5" fill="none" opacity="0.3" />
      <circle cx="400" cy="115" r="5" stroke={AMBER} strokeWidth="1.5" fill="none" opacity="0.3" />
      <line x1="380" y1="90" x2="420" y2="70" stroke={AMBER} strokeWidth="0.8" opacity="0.2" />
      <line x1="380" y1="90" x2="400" y2="115" stroke={AMBER} strokeWidth="0.8" opacity="0.2" />
      <line x1="420" y1="70" x2="400" y2="115" stroke={AMBER} strokeWidth="0.8" opacity="0.2" />

      {/* Shoulders */}
      <ellipse cx="244" cy="495" rx="168" ry="98" fill={SAGE} opacity="0.4" transform="translate(5,6)" />
      <ellipse cx="240" cy="490" rx="168" ry="98" fill="#3D2D1A" />

      {/* Neck */}
      <rect x="215" y="318" width="30" height="60" rx="8" fill={SAGE} opacity="0.25" transform="translate(3,4)" />
      <rect x="212" y="315" width="30" height="60" rx="8" fill="#D4A87A" />

      {/* Hair — medium dark, warm */}
      <path d="M 150 180 Q 138 280 142 420 Q 155 490 195 515 Q 165 430 162 320 Q 162 230 168 185 Z"
        fill={STONE} opacity="0.5" transform="translate(4,5)" />
      <path d="M 330 180 Q 318 185 318 320 Q 315 430 285 515 Q 325 490 338 420 Q 342 280 330 180 Z"
        fill={STONE} opacity="0.5" transform="translate(4,5)" />
      <path d="M 150 180 Q 138 280 142 420 Q 155 490 195 515 Q 165 430 162 320 Q 162 230 168 185 Z" fill="#2A1A0A" />
      <path d="M 330 180 Q 318 185 318 320 Q 315 430 285 515 Q 325 490 338 420 Q 342 280 330 180 Z" fill="#2A1A0A" />
      <path d="M 152 188 Q 182 138 240 130 Q 298 138 328 188 Q 290 158 240 152 Q 190 158 152 188 Z" fill="#2A1A0A" />

      {/* Face */}
      <ellipse cx="244" cy="215" rx="92" ry="110" fill={SAGE} opacity="0.25" transform="translate(4,5)" />
      <ellipse cx="240" cy="210" rx="92" ry="110" fill="#D4A87A" />
      <ellipse cx="240" cy="210" rx="92" ry="110" fill="url(#bc-grain)" opacity="0.5" />

      {/* Eyes */}
      <ellipse cx="209" cy="200" rx="13" ry="8" fill={STONE} />
      <ellipse cx="271" cy="200" rx="13" ry="8" fill={STONE} />
      <circle cx="206" cy="199" r="3.5" fill={CREAM} opacity="0.65" />
      <circle cx="268" cy="199" r="3.5" fill={CREAM} opacity="0.65" />
      <path d="M 196 192 Q 210 187 222 192" stroke={STONE} strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M 258 192 Q 272 187 284 192" stroke={STONE} strokeWidth="2.2" strokeLinecap="round" fill="none" />

      {/* Nose */}
      <path d="M 237 215 Q 234 238 230 244 Q 238 250 250 244 Q 246 238 243 215 Z" fill={AMBER} opacity="0.28" />

      {/* Warm smile */}
      <path d="M 217 266 Q 240 282 263 266" stroke={STONE} strokeWidth="2.5" strokeLinecap="round" fill="none" />

      <rect x="0" y="548" width="480" height="4" fill={AMBER} opacity="0.7" />
      <rect x="16" y="0" width="3" height="560" fill={AMBER} opacity="0.4" />
    </svg>
  )
}

// ─── Tim Metz ─────────────────────────────────────────────────────────────────
// Short dark brown hair, slightly lean/angular face, light eyes (hazel), warm open smile, beige sweater
function TimMetzPortrait({ className, style }: PortraitProps = {}) {
  return (
    <svg viewBox="0 0 480 560" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <pattern id="tm-dots" patternUnits="userSpaceOnUse" width="9" height="9">
          <circle cx="4.5" cy="4.5" r="1.6" fill={AMBER} opacity="0.2" />
        </pattern>
        <pattern id="tm-grain" patternUnits="userSpaceOnUse" width="3" height="3">
          <circle cx="1.5" cy="1.5" r="0.5" fill={STONE} opacity="0.1" />
        </pattern>
      </defs>

      <rect width="480" height="560" fill="#E8E0D5" />
      <rect width="480" height="560" fill="url(#tm-grain)" />
      <rect width="480" height="560" fill="url(#tm-dots)" opacity="0.7" />

      {/* Shoulders — beige/tan sweater */}
      <ellipse cx="244" cy="496" rx="172" ry="100" fill={SAGE} opacity="0.35" transform="translate(5,6)" />
      <ellipse cx="240" cy="490" rx="172" ry="100" fill="#C8A882" />
      {[0,1,2,3,4,5].map(i => (
        <line key={i} x1={80 + i*50} y1="430" x2={80 + i*48} y2="560" stroke="#B89060" strokeWidth="12" opacity="0.25" />
      ))}

      {/* Neck */}
      <rect x="215" y="318" width="30" height="58" rx="7" fill={SAGE} opacity="0.2" transform="translate(3,4)" />
      <rect x="212" y="315" width="30" height="58" rx="7" fill="#D4B08A" />

      {/* Hair — short dark brown, slight quiff peak, slightly receding temples */}
      <path d="M 152 178 Q 155 130 240 122 Q 325 130 328 178 Q 310 158 240 152 Q 170 158 152 178 Z"
        fill={STONE} opacity="0.4" transform="translate(4,5)" />
      <path d="M 152 178 Q 155 130 240 122 Q 325 130 328 178 Q 310 158 240 152 Q 170 158 152 178 Z"
        fill="#2C1E12" />
      <ellipse cx="240" cy="160" rx="90" ry="50" fill="#2C1E12" />
      <path d="M 155 185 Q 170 165 240 158 Q 310 165 325 185" fill="#2C1E12" />
      {/* Receding temple hairline */}
      <path d="M 162 190 Q 170 175 185 172" stroke="#2C1E12" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M 318 190 Q 310 175 295 172" stroke="#2C1E12" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Face — lean, slightly angular jaw */}
      <path d="M 170 200 Q 168 260 175 300 Q 185 350 240 380 Q 295 350 305 300 Q 312 260 310 200 Q 290 150 240 145 Q 190 150 170 200 Z"
        fill={SAGE} opacity="0.25" transform="translate(4,5)" />
      <path d="M 167 196 Q 165 256 172 296 Q 182 346 240 376 Q 298 346 308 296 Q 315 256 313 196 Q 292 147 240 142 Q 188 147 167 196 Z"
        fill="#D4B08A" />
      <path d="M 167 196 Q 165 256 172 296 Q 182 346 240 376 Q 298 346 308 296 Q 315 256 313 196 Q 292 147 240 142 Q 188 147 167 196 Z"
        fill="url(#tm-grain)" opacity="0.4" />

      {/* Eyes — light hazel, slightly deep set */}
      <ellipse cx="208" cy="204" rx="13" ry="8" fill={STONE} />
      <ellipse cx="272" cy="204" rx="13" ry="8" fill={STONE} />
      <circle cx="211" cy="202" r="4.5" fill="#5A7A5A" opacity="0.7" />
      <circle cx="275" cy="202" r="4.5" fill="#5A7A5A" opacity="0.7" />
      <circle cx="209" cy="201" r="2.5" fill={CREAM} opacity="0.7" />
      <circle cx="273" cy="201" r="2.5" fill={CREAM} opacity="0.7" />
      <path d="M 195 190 Q 210 185 222 189" stroke={STONE} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M 258 189 Q 270 185 285 190" stroke={STONE} strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Nose */}
      <path d="M 238 218 Q 234 242 230 248 Q 238 254 250 248 Q 246 242 242 218 Z" fill={AMBER} opacity="0.28" />

      {/* Warm open smile, slightly asymmetric */}
      <path d="M 218 272 Q 240 288 262 272" stroke={STONE} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M 222 274 Q 240 286 258 274" stroke={AMBER} strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5" />
      {/* Teeth suggestion */}
      <path d="M 223 274 Q 240 285 257 274 Q 257 280 240 282 Q 223 280 223 274 Z"
        fill={CREAM} opacity="0.7" />

      <rect x="0" y="548" width="480" height="4" fill={AMBER} />
    </svg>
  )
}

// ─── Lauren Shufran ───────────────────────────────────────────────────────────
// Short slicked-back dark hair (pompadour/quiff), strong defined features,
// tattoo-covered arms (ancient relief on right, botanical on left), black sleeveless top,
// intense direct gaze, small stud earring — they/them
function LaurenShufranPortrait({ className, style }: PortraitProps = {}) {
  return (
    <svg viewBox="0 0 480 560" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <pattern id="ls-dots" patternUnits="userSpaceOnUse" width="8" height="8">
          <circle cx="4" cy="4" r="1.4" fill={AMBER} opacity="0.3" />
        </pattern>
        <pattern id="ls-grain" patternUnits="userSpaceOnUse" width="3" height="3">
          <circle cx="1.5" cy="1.5" r="0.55" fill={STONE} opacity="0.15" />
        </pattern>
      </defs>

      {/* Dark dramatic background */}
      <rect width="480" height="560" fill={STONE} />
      <rect width="480" height="560" fill="url(#ls-dots)" opacity="0.5" />

      {/* Shoulders — wide, athletic, black sleeveless */}
      <ellipse cx="244" cy="496" rx="190" ry="105" fill={SAGE} opacity="0.3" transform="translate(5,6)" />
      <ellipse cx="240" cy="490" rx="190" ry="105" fill="#0A0A0A" />

      {/* Arms — sleeveless reveals arms */}
      <path d="M 65 400 Q 60 450 70 510 L 110 510 Q 108 460 112 410 Z" fill="#0A0A0A" />
      <path d="M 415 400 Q 420 450 410 510 L 370 510 Q 372 460 368 410 Z" fill="#0A0A0A" />

      {/* Right arm tattoo — ancient relief/Mesopotamian (framed art piece with Arabic script) */}
      <rect x="68" y="415" width="40" height="50" rx="3" stroke={AMBER} strokeWidth="1.2" fill="none" opacity="0.6" />
      <path d="M 75 430 Q 80 425 90 430 Q 95 440 88 445 Q 80 450 75 443 Z"
        stroke={AMBER} strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M 72 452 L 108 452" stroke={AMBER} strokeWidth="0.6" opacity="0.4" />
      <path d="M 72 458 L 103 458" stroke={AMBER} strokeWidth="0.6" opacity="0.4" />
      <path d="M 72 464 L 100 464" stroke={AMBER} strokeWidth="0.6" opacity="0.4" />

      {/* Left arm tattoo — botanical/floral */}
      <path d="M 375 425 Q 380 415 390 420 Q 395 430 388 438 Q 380 445 373 438 Q 370 430 375 425 Z"
        stroke={SAGE} strokeWidth="0.9" fill="none" opacity="0.5" />
      <path d="M 388 440 Q 395 450 392 462 Q 386 470 380 462 Q 376 450 380 440"
        stroke={SAGE} strokeWidth="0.9" fill="none" opacity="0.5" />
      <path d="M 373 460 Q 380 472 385 480 Q 380 475 370 478"
        stroke={SAGE} strokeWidth="0.7" fill="none" opacity="0.4" />
      <circle cx="384" cy="445" r="4" stroke={SAGE} strokeWidth="0.7" fill="none" opacity="0.4" />
      <circle cx="376" cy="455" r="3" stroke={SAGE} strokeWidth="0.7" fill="none" opacity="0.4" />

      {/* Neck */}
      <rect x="212" y="315" width="36" height="65" rx="8" fill={SAGE} opacity="0.2" transform="translate(3,4)" />
      <rect x="208" y="310" width="36" height="65" rx="8" fill="#C8A888" />

      {/* Hair — very short, slicked back pompadour/quiff */}
      <ellipse cx="244" cy="165" rx="98" ry="75" fill={SAGE} opacity="0.25" transform="translate(4,5)" />
      <ellipse cx="240" cy="160" rx="98" ry="75" fill="#1A0F08" />
      <path d="M 155 175 Q 175 140 240 132 Q 285 135 310 148" stroke="#1A0F08" strokeWidth="18" strokeLinecap="round" fill="none" />
      {/* Swept direction */}
      <path d="M 170 168 Q 200 152 240 148 Q 275 150 305 162"
        stroke={SAGE} strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.2" />
      {/* Undercut sides — closely cropped */}
      <path d="M 158 188 Q 162 170 175 168" stroke="#1A0F08" strokeWidth="12" strokeLinecap="round" fill="none" />
      <path d="M 322 188 Q 318 170 305 168" stroke="#1A0F08" strokeWidth="12" strokeLinecap="round" fill="none" />

      {/* Face — strong, defined */}
      <path d="M 168 200 Q 166 258 174 296 Q 185 344 240 372 Q 295 344 306 296 Q 314 258 312 200 Q 292 150 240 144 Q 188 150 168 200 Z"
        fill={SAGE} opacity="0.25" transform="translate(4,5)" />
      <path d="M 165 196 Q 163 254 171 292 Q 182 340 240 368 Q 298 340 309 292 Q 317 254 315 196 Q 294 147 240 141 Q 186 147 165 196 Z"
        fill="#C8A888" />
      <path d="M 165 196 Q 163 254 171 292 Q 182 340 240 368 Q 298 340 309 292 Q 317 254 315 196 Q 294 147 240 141 Q 186 147 165 196 Z"
        fill="url(#ls-grain)" opacity="0.5" />

      {/* Eyes — dark, direct, intense */}
      <ellipse cx="208" cy="202" rx="14" ry="9" fill={STONE} />
      <ellipse cx="272" cy="202" rx="14" ry="9" fill={STONE} />
      <circle cx="205" cy="200" r="5" fill="#2A1A1A" />
      <circle cx="269" cy="200" r="5" fill="#2A1A1A" />
      <circle cx="203" cy="198" r="2.5" fill={CREAM} opacity="0.65" />
      <circle cx="267" cy="198" r="2.5" fill={CREAM} opacity="0.65" />
      {/* Strong brows */}
      <path d="M 193 188 Q 210 182 224 186" stroke={STONE} strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M 256 186 Q 270 182 287 188" stroke={STONE} strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M 196 191 Q 210 185 222 188" stroke={AMBER} strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4" />
      <path d="M 258 188 Q 272 185 285 191" stroke={AMBER} strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* Nose */}
      <path d="M 237 218 Q 233 244 228 250 Q 237 257 252 250 Q 247 244 243 218 Z" fill={AMBER} opacity="0.3" />

      {/* Composed, direct expression */}
      <path d="M 218 268 Q 240 274 262 268" stroke={STONE} strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Small stud earring */}
      <circle cx="162" cy="225" r="4" fill={AMBER} opacity="0.8" />

      {/* Amber spine */}
      <rect x="0" y="0" width="4" height="560" fill={AMBER} opacity="0.6" />
      <rect x="0" y="548" width="480" height="4" fill={AMBER} />
    </svg>
  )
}

// ─── Export map ───────────────────────────────────────────────────────────────
export const PORTRAIT_COMPONENTS: Record<string, ComponentType<PortraitProps>> = {
  'lucy-hoyle':       LucyHoylePortrait,
  'connor-beaulieu':  ConnorBeaulieuPortrait,
  'vivian-hoang':     VivianHoangPortrait,
  'brianna-chapman':  BriannaChapmanPortrait,
  'tim-metz':         TimMetzPortrait,
  'lauren-shufran':   LaurenShufranPortrait,
}
