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
// Long flowing blonde/golden hair, warm smile, tortoiseshell statement earrings, green silk blouse, circle pendant
function LucyHoylePortrait({ className, style }: PortraitProps = {}) {
  return (
    <svg viewBox="0 0 480 560" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      className={className} style={{ width: '100%', height: '100%', display: 'block', ...style }}>
      <defs>
        <pattern id="lh-dots" patternUnits="userSpaceOnUse" width="6" height="6">
          <circle cx="3" cy="3" r="1.2" fill={AMBER} opacity="0.35" />
        </pattern>
        <pattern id="lh-grain" patternUnits="userSpaceOnUse" width="4" height="4">
          <circle cx="2" cy="2" r="0.6" fill={STONE} opacity="0.12" />
        </pattern>
      </defs>

      <rect width="480" height="560" fill={CREAM} />
      <rect width="480" height="560" fill="url(#lh-grain)" />
      <rect x="16" y="0" width="3" height="560" fill={AMBER} opacity="0.5" />

      {/* Body — deep green silk blouse (Carta green) */}
      <ellipse cx="244" cy="490" rx="165" ry="100" fill={SAGE} opacity="0.6" transform="translate(5,6)" />
      <ellipse cx="244" cy="490" rx="165" ry="100" fill="#3A7A4A" />
      {/* V-neck suggestion */}
      <path d="M 215 380 L 240 420 L 265 380" stroke="#2A6A3A" strokeWidth="3" fill="none" />

      {/* Neck */}
      <rect x="213" y="320" width="32" height="65" rx="8" fill={SAGE} opacity="0.3" transform="translate(3,4)" />
      <rect x="213" y="320" width="32" height="65" rx="8" fill={CREAM} />

      {/* Hair — long flowing blonde, swept right, very voluminous */}
      {/* Misreg shadow */}
      <path d="M 145 178 Q 118 310 128 445 Q 148 515 195 535 L 285 535 Q 332 515 352 445 Q 362 310 335 178 Q 295 135 240 126 Q 188 135 145 178 Z"
        fill={AMBER} opacity="0.45" transform="translate(5,7)" />
      {/* Main hair mass */}
      <path d="M 145 178 Q 118 310 128 445 Q 148 515 195 535 L 285 535 Q 332 515 352 445 Q 362 310 335 178 Q 295 135 240 126 Q 188 135 145 178 Z"
        fill="#CFA040" />
      {/* Lighter golden highlight layer */}
      <path d="M 155 185 Q 135 290 140 420 Q 155 380 162 310 Q 168 240 165 188 Z"
        fill="#E8C060" opacity="0.4" />
      <path d="M 300 188 Q 308 240 312 310 Q 318 380 330 420 Q 335 290 318 185 Z"
        fill="#E8C060" opacity="0.35" />
      {/* Halftone texture on hair sides */}
      <ellipse cx="168" cy="310" rx="32" ry="65" fill="url(#lh-dots)" opacity="0.5" />
      <ellipse cx="312" cy="310" rx="32" ry="65" fill="url(#lh-dots)" opacity="0.5" />
      {/* Swept-right volume on left side */}
      <path d="M 128 200 Q 110 280 118 380 Q 128 340 135 270 Q 140 210 140 200 Z"
        fill="#CFA040" />

      {/* Face — rounded, warm complexion */}
      <ellipse cx="244" cy="218" rx="93" ry="115" fill={SAGE} opacity="0.3" transform="translate(4,5)" />
      <ellipse cx="240" cy="213" rx="93" ry="115" fill={CREAM} />
      <ellipse cx="240" cy="213" rx="93" ry="115" fill="url(#lh-grain)" opacity="0.5" />

      {/* Eyes — blue, friendly */}
      <ellipse cx="210" cy="200" rx="14" ry="9" fill={STONE} />
      <ellipse cx="270" cy="200" rx="14" ry="9" fill={STONE} />
      {/* Blue iris */}
      <circle cx="212" cy="200" r="5" fill="#4A6A9A" opacity="0.7" />
      <circle cx="272" cy="200" r="5" fill="#4A6A9A" opacity="0.7" />
      <circle cx="210" cy="198" r="2.5" fill={CREAM} opacity="0.7" />
      <circle cx="270" cy="198" r="2.5" fill={CREAM} opacity="0.7" />
      {/* Lids */}
      <path d="M 196 196 Q 210 190 224 194" stroke={STONE} strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M 257 194 Q 270 190 284 196" stroke={STONE} strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.7" />

      {/* Nose */}
      <path d="M 238 214 Q 234 240 229 248 Q 237 254 251 248 Q 246 240 242 214 Z" fill={AMBER} opacity="0.3" />

      {/* Warm smile — slightly asymmetric, genuine */}
      <path d="M 217 270 Q 240 288 263 270" stroke={STONE} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M 220 272 Q 240 284 260 272" stroke={AMBER} strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5" />
      {/* Teeth */}
      <path d="M 222 273 Q 240 284 258 273 Q 258 280 240 282 Q 222 280 222 273 Z" fill={CREAM} opacity="0.6" />

      {/* Cheek blush */}
      <ellipse cx="198" cy="248" rx="22" ry="12" fill={AMBER} opacity="0.12" />
      <ellipse cx="282" cy="248" rx="22" ry="12" fill={AMBER} opacity="0.12" />

      {/* Tortoiseshell statement earrings — cluster drops */}
      <circle cx="150" cy="220" r="7" fill="#6A3A18" />
      <ellipse cx="150" cy="236" rx="5" ry="8" fill="#8A5A28" />
      <ellipse cx="145" cy="248" rx="4" ry="6" fill="#6A3A18" opacity="0.8" />
      <ellipse cx="155" cy="246" rx="3.5" ry="5" fill="#A07040" opacity="0.9" />
      <circle cx="332" cy="220" r="7" fill="#6A3A18" />
      <ellipse cx="332" cy="236" rx="5" ry="8" fill="#8A5A28" />
      <ellipse cx="327" cy="248" rx="4" ry="6" fill="#6A3A18" opacity="0.8" />
      <ellipse cx="337" cy="246" rx="3.5" ry="5" fill="#A07040" opacity="0.9" />

      {/* Circle pendant necklace */}
      <path d="M 215 350 Q 240 362 265 350" stroke={CREAM} strokeWidth="1" fill="none" opacity="0.5" />
      <circle cx="240" cy="360" r="9" stroke={CREAM} strokeWidth="1.5" fill="none" opacity="0.6" />

      <rect x="0" y="548" width="480" height="4" fill={AMBER} opacity="0.6" />
    </svg>
  )
}

// ─── Connor Beaulieu ──────────────────────────────────────────────────────────
// Young, athletic, short dark hair, strong jaw/cheekbones, dark jacket over white Henley shirt
// B&W outdoor/winter vibe — forest background
function ConnorBeaulieuPortrait({ className, style }: PortraitProps = {}) {
  return (
    <svg viewBox="0 0 480 560" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      className={className} style={{ width: '100%', height: '100%', display: 'block', ...style }}>
      <defs>
        <pattern id="cb-hatch" patternUnits="userSpaceOnUse" width="6" height="6">
          <line x1="0" y1="0" x2="6" y2="6" stroke={SAGE} strokeWidth="0.5" opacity="0.2" />
        </pattern>
        <pattern id="cb-grain" patternUnits="userSpaceOnUse" width="3" height="3">
          <circle cx="1.5" cy="1.5" r="0.5" fill={CREAM} opacity="0.08" />
        </pattern>
      </defs>

      {/* Background — dark stone, winter/forest mood */}
      <rect width="480" height="560" fill={STONE} />
      <rect width="480" height="560" fill="url(#cb-hatch)" />
      {/* Subtle forest tree lines in bg */}
      {[60,90,110,140,160,200,380,400,420,450].map((x,i) => (
        <line key={i} x1={x} y1="0" x2={x+i%3*8-4} y2="420" stroke={SAGE} strokeWidth={0.5+i%2*0.3} opacity="0.08" />
      ))}

      {/* Dark jacket — very dark, fills shoulders/body */}
      <path d="M 50 520 Q 60 440 80 400 Q 120 370 180 360 L 240 355 L 300 360 Q 360 370 400 400 Q 420 440 430 520 Z"
        fill={SAGE} opacity="0.2" transform="translate(5,6)" />
      <path d="M 50 520 Q 60 440 80 400 Q 120 370 180 360 L 240 355 L 300 360 Q 360 370 400 400 Q 420 440 430 520 Z"
        fill="#0A0C0A" />
      {/* Jacket lapels */}
      <path d="M 180 360 Q 215 380 240 420 Q 265 380 300 360 Q 275 355 240 353 Q 205 355 180 360 Z"
        fill="#1A2218" />

      {/* White Henley shirt visible at collar */}
      <path d="M 210 368 Q 240 384 270 368 Q 265 358 240 355 Q 215 358 210 368 Z"
        fill={CREAM} opacity="0.85" />
      {/* Henley placket buttons */}
      <circle cx="240" cy="362" r="2" fill={STONE} opacity="0.4" />
      <circle cx="240" cy="370" r="2" fill={STONE} opacity="0.4" />

      {/* Neck — strong */}
      <rect x="213" y="310" width="32" height="60" rx="8" fill={SAGE} opacity="0.2" transform="translate(3,4)" />
      <rect x="210" y="307" width="32" height="60" rx="8" fill="#C8A880" />

      {/* Hair — short, dark, clean cut, slight texture on top */}
      <ellipse cx="244" cy="168" rx="100" ry="82" fill={SAGE} opacity="0.2" transform="translate(4,5)" />
      <ellipse cx="240" cy="163" rx="100" ry="82" fill="#1A0C08" />
      {/* Hair top — slight quiff/natural wave */}
      <path d="M 148 185 Q 155 132 240 122 Q 325 132 332 185 Q 295 155 240 148 Q 185 155 148 185 Z"
        fill="#1A0C08" />
      {/* Side fade — clean barbered look */}
      <path d="M 150 195 Q 155 175 168 170" stroke="#1A0C08" strokeWidth="14" strokeLinecap="round" fill="none" />
      <path d="M 330 195 Q 325 175 312 170" stroke="#1A0C08" strokeWidth="14" strokeLinecap="round" fill="none" />

      {/* Face — angular, strong jaw, defined cheekbones */}
      <path d="M 160 192 Q 158 256 168 295 Q 182 342 240 368 Q 298 342 312 295 Q 322 256 320 192 Q 298 144 240 138 Q 182 144 160 192 Z"
        fill={SAGE} opacity="0.2" transform="translate(4,5)" />
      <path d="M 157 188 Q 155 252 165 291 Q 179 338 240 364 Q 301 338 315 291 Q 325 252 323 188 Q 300 140 240 134 Q 180 140 157 188 Z"
        fill="#C8A880" />
      <path d="M 157 188 Q 155 252 165 291 Q 179 338 240 364 Q 301 338 315 291 Q 325 252 323 188 Q 300 140 240 134 Q 180 140 157 188 Z"
        fill="url(#cb-grain)" opacity="0.6" />

      {/* Strong jaw — angular chin */}
      <path d="M 185 320 Q 205 360 240 375 Q 275 360 295 320"
        fill={SAGE} opacity="0.15" />

      {/* Eyes — dark, direct, with defined brows */}
      <ellipse cx="207" cy="200" rx="14" ry="9" fill={STONE} />
      <ellipse cx="273" cy="200" rx="14" ry="9" fill={STONE} />
      <circle cx="210" cy="199" r="4.5" fill="#2A2A2A" />
      <circle cx="276" cy="199" r="4.5" fill="#2A2A2A" />
      <circle cx="208" cy="197" r="2.5" fill={CREAM} opacity="0.55" />
      <circle cx="274" cy="197" r="2.5" fill={CREAM} opacity="0.55" />
      {/* Strong defined brows */}
      <path d="M 192 186 Q 208 180 224 184" stroke={STONE} strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M 257 184 Q 272 180 288 186" stroke={STONE} strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Amber brow misreg */}
      <path d="M 194 189 Q 208 183 222 186" stroke={AMBER} strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.35" />
      <path d="M 259 186 Q 274 183 286 189" stroke={AMBER} strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.35" />

      {/* Nose — straight, defined */}
      <path d="M 237 214 Q 233 240 229 246 Q 238 252 251 246 Q 247 240 243 214 Z" fill={AMBER} opacity="0.25" />

      {/* Light expression — subtle, confident */}
      <path d="M 218 266 Q 240 276 262 266" stroke={STONE} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M 221 268 Q 240 275 259 268" stroke={AMBER} strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.35" />

      {/* 5 o'clock shadow hint */}
      <path d="M 175 270 Q 200 310 240 330 Q 280 310 305 270 Q 290 295 240 308 Q 190 295 175 270 Z"
        fill={STONE} opacity="0.08" />

      <rect x="0" y="548" width="480" height="4" fill={AMBER} />
      <rect x="0" y="0" width="4" height="560" fill={AMBER} opacity="0.5" />
    </svg>
  )
}

// ─── Vivian Hoang ─────────────────────────────────────────────────────────────
// Shorter dark hair (just past shoulders, neat), East Asian features, warm genuine smile,
// dark navy ribbed top, delicate necklace, sparkle accent, wooden/warm background
function VivianHoangPortrait({ className, style }: PortraitProps = {}) {
  return (
    <svg viewBox="0 0 480 560" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      className={className} style={{ width: '100%', height: '100%', display: 'block', ...style }}>
      <defs>
        <pattern id="vh-halftone" patternUnits="userSpaceOnUse" width="7" height="7">
          <circle cx="3.5" cy="3.5" r="1.3" fill={SAGE} opacity="0.28" />
        </pattern>
        <pattern id="vh-grain" patternUnits="userSpaceOnUse" width="3" height="3">
          <circle cx="1.5" cy="1.5" r="0.5" fill={STONE} opacity="0.1" />
        </pattern>
        <pattern id="vh-wood" patternUnits="userSpaceOnUse" width="40" height="8">
          <line x1="0" y1="4" x2="40" y2="4" stroke={AMBER} strokeWidth="0.4" opacity="0.12" />
          <line x1="0" y1="0" x2="40" y2="0" stroke={AMBER} strokeWidth="0.2" opacity="0.06" />
        </pattern>
      </defs>

      {/* Background — warm wood-grain texture */}
      <rect width="480" height="560" fill="#C8A870" opacity="0.3" />
      <rect width="480" height="560" fill="#D4B880" opacity="0.2" />
      <rect width="480" height="560" fill="url(#vh-wood)" />
      <rect width="480" height="560" fill="url(#vh-grain)" />

      {/* Shoulders — dark navy ribbed top */}
      <ellipse cx="244" cy="498" rx="175" ry="100" fill={SAGE} opacity="0.3" transform="translate(5,6)" />
      <ellipse cx="240" cy="492" rx="175" ry="100" fill="#1A2744" />
      {/* Ribbed texture */}
      {[0,1,2,3,4,5,6,7,8].map(i => (
        <line key={i} x1={90 + i*30} y1="420" x2={90 + i*25} y2="560" stroke="#253558" strokeWidth="8" opacity="0.4" />
      ))}

      {/* Neck */}
      <rect x="215" y="322" width="30" height="58" rx="8" fill={SAGE} opacity="0.2" transform="translate(3,4)" />
      <rect x="212" y="318" width="30" height="58" rx="8" fill="#E8C8A8" />

      {/* Hair — shoulder-length, straight, very dark, neat */}
      {/* Misreg */}
      <path d="M 155 168 Q 148 250 152 360 Q 162 410 195 430 L 195 380 Q 168 310 170 230 Q 175 185 192 165 Z"
        fill={STONE} opacity="0.4" transform="translate(4,5)" />
      <path d="M 325 168 Q 312 185 310 230 Q 312 310 285 380 L 285 430 Q 318 410 328 360 Q 332 250 325 168 Z"
        fill={STONE} opacity="0.4" transform="translate(4,5)" />
      {/* Main hair panels — note: shorter, ends around upper chest */}
      <path d="M 155 168 Q 148 250 152 360 Q 162 410 195 430 L 195 380 Q 168 310 170 230 Q 175 185 192 165 Z"
        fill="#0D0B0A" />
      <path d="M 325 168 Q 312 185 310 230 Q 312 310 285 380 L 285 430 Q 318 410 328 360 Q 332 250 325 168 Z"
        fill="#0D0B0A" />
      {/* Hair top */}
      <path d="M 157 178 Q 185 132 240 124 Q 295 132 323 178 Q 288 152 240 146 Q 192 152 157 178 Z"
        fill="#0D0B0A" />
      {/* Hair sheen highlight */}
      <path d="M 162 184 Q 158 260 162 340 Q 168 290 172 230 Q 175 196 172 184 Z"
        fill={SAGE} opacity="0.12" />

      {/* Face — round-oval, warm, East Asian features */}
      <ellipse cx="244" cy="212" rx="90" ry="106" fill={SAGE} opacity="0.22" transform="translate(4,5)" />
      <ellipse cx="240" cy="208" rx="90" ry="106" fill="#E8C8A8" />
      <ellipse cx="240" cy="208" rx="90" ry="106" fill="url(#vh-halftone)" opacity="0.35" />
      <ellipse cx="240" cy="208" rx="90" ry="106" fill="url(#vh-grain)" opacity="0.4" />

      {/* Eyes — almond-shaped, warm dark brown, genuine smile crinkle */}
      <path d="M 196 200 Q 210 191 225 199 Q 210 208 196 200 Z" fill={STONE} />
      <path d="M 255 199 Q 270 191 284 200 Q 270 208 255 199 Z" fill={STONE} />
      <circle cx="213" cy="199" r="2.8" fill={CREAM} opacity="0.55" />
      <circle cx="272" cy="199" r="2.8" fill={CREAM} opacity="0.55" />
      {/* Smile-squint — eyes slightly narrowed from big smile */}
      <path d="M 196 197 Q 211 190 225 196" stroke={STONE} strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M 256 196 Q 270 190 284 197" stroke={STONE} strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.5" />
      {/* Slight undereye smile crinkle */}
      <path d="M 197 206 Q 210 210 222 207" stroke={AMBER} strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.25" />
      <path d="M 258 207 Q 270 210 283 206" stroke={AMBER} strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.25" />

      {/* Nose — delicate, button */}
      <path d="M 238 214 Q 235 234 232 240 Q 239 245 248 240 Q 245 234 242 214 Z" fill={AMBER} opacity="0.22" />

      {/* Big genuine smile — wide, warm */}
      <path d="M 214 260 Q 240 280 266 260" stroke={STONE} strokeWidth="2.8" strokeLinecap="round" fill="none" />
      <path d="M 218 263 Q 240 278 262 263 Q 262 272 240 275 Q 218 272 218 263 Z"
        fill={CREAM} opacity="0.65" />
      {/* Dimple hints */}
      <circle cx="216" cy="262" r="3" fill={AMBER} opacity="0.15" />
      <circle cx="264" cy="262" r="3" fill={AMBER} opacity="0.15" />
      {/* Cheek blush */}
      <ellipse cx="196" cy="248" rx="24" ry="13" fill={AMBER} opacity="0.1" />
      <ellipse cx="284" cy="248" rx="24" ry="13" fill={AMBER} opacity="0.1" />

      {/* Delicate chain necklace */}
      <path d="M 212 342 Q 240 356 268 342" stroke="#C8B080" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />

      {/* Sparkle accent detail on top */}
      <path d="M 278 318 L 280 310 L 282 318 L 290 320 L 282 322 L 280 330 L 278 322 L 270 320 Z"
        fill={AMBER} opacity="0.75" />

      <rect x="0" y="548" width="480" height="4" fill={AMBER} opacity="0.7" />
    </svg>
  )
}

// ─── Brianna Chapman ──────────────────────────────────────────────────────────
// Long dark brown hair with caramel/amber ombre highlights (balayage), very glamorous,
// white blazer, polished and confident, delicate necklace, strong brows, full lips
function BriannaChapmanPortrait({ className, style }: PortraitProps = {}) {
  return (
    <svg viewBox="0 0 480 560" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      className={className} style={{ width: '100%', height: '100%', display: 'block', ...style }}>
      <defs>
        <pattern id="bc-dots" patternUnits="userSpaceOnUse" width="9" height="9">
          <circle cx="4.5" cy="4.5" r="1.5" fill={SAGE} opacity="0.18" />
        </pattern>
        <pattern id="bc-grain" patternUnits="userSpaceOnUse" width="3" height="3">
          <circle cx="1.5" cy="1.5" r="0.5" fill={STONE} opacity="0.08" />
        </pattern>
      </defs>

      {/* Background — clean white/light */}
      <rect width="480" height="560" fill="#F2EEE8" />
      <rect width="480" height="560" fill="url(#bc-dots)" />
      <rect width="480" height="560" fill="url(#bc-grain)" />

      {/* White blazer */}
      <ellipse cx="244" cy="495" rx="180" ry="105" fill={SAGE} opacity="0.2" transform="translate(5,6)" />
      <ellipse cx="240" cy="490" rx="180" ry="105" fill="#E8E4DE" />
      {/* Blazer lapels — V shape */}
      <path d="M 170 390 L 240 440 L 310 390 Q 290 380 240 378 Q 190 380 170 390 Z"
        fill="#F0ECEC" />
      {/* Lapel shadow */}
      <path d="M 192 395 L 240 438 L 240 440 Q 215 425 192 395 Z" fill={SAGE} opacity="0.12" />
      <path d="M 288 395 L 240 438 L 240 440 Q 265 425 288 395 Z" fill={SAGE} opacity="0.12" />
      {/* Blazer collar */}
      <path d="M 170 390 Q 200 370 240 365 Q 280 370 310 390" stroke="#D8D4CE" strokeWidth="2" fill="none" opacity="0.6" />

      {/* Neck */}
      <rect x="215" y="318" width="30" height="58" rx="8" fill={SAGE} opacity="0.2" transform="translate(3,4)" />
      <rect x="212" y="315" width="30" height="58" rx="8" fill="#D8A880" />

      {/* Hair — long, voluminous, dark brown with caramel/amber ombre highlights */}
      {/* Deep shadow/misreg layer */}
      <path d="M 142 175 Q 118 300 125 450 Q 145 525 195 545 L 285 545 Q 335 525 355 450 Q 362 300 338 175 Q 298 130 240 120 Q 182 130 142 175 Z"
        fill={STONE} opacity="0.5" transform="translate(5,7)" />
      {/* Dark brown base hair */}
      <path d="M 142 175 Q 118 300 125 450 Q 145 525 195 545 L 285 545 Q 335 525 355 450 Q 362 300 338 175 Q 298 130 240 120 Q 182 130 142 175 Z"
        fill="#2A1A08" />
      {/* Ombre caramel highlight — mid lengths downward */}
      <path d="M 128 310 Q 120 400 130 460 Q 150 520 190 542 L 190 480 Q 152 430 148 360 Q 145 330 138 315 Z"
        fill="#8A5020" opacity="0.6" />
      <path d="M 352 310 Q 362 330 355 360 Q 350 430 290 480 L 290 542 Q 330 520 350 460 Q 360 400 352 310 Z"
        fill="#8A5020" opacity="0.6" />
      {/* Golden amber tips */}
      <path d="M 132 420 Q 128 470 138 510 Q 160 540 195 548 L 195 500 Q 162 480 148 448 Q 138 430 132 420 Z"
        fill={AMBER} opacity="0.45" />
      <path d="M 348 420 Q 342 430 332 448 Q 318 480 285 500 L 285 548 Q 320 540 342 510 Q 352 470 348 420 Z"
        fill={AMBER} opacity="0.45" />
      {/* Highlight sheen — lighter center parting area */}
      <path d="M 205 128 Q 220 148 240 152 Q 240 148 240 130 Q 225 122 205 128 Z"
        fill="#6A3A18" opacity="0.4" />
      <path d="M 240 130 Q 255 122 275 128 Q 258 148 240 152 Q 240 148 240 130 Z"
        fill="#6A3A18" opacity="0.4" />

      {/* Face — oval, warm brown complexion, glamorous */}
      <ellipse cx="244" cy="215" rx="94" ry="115" fill={SAGE} opacity="0.2" transform="translate(4,5)" />
      <ellipse cx="240" cy="210" rx="94" ry="115" fill="#D8A880" />
      <ellipse cx="240" cy="210" rx="94" ry="115" fill="url(#bc-grain)" opacity="0.4" />

      {/* Eyes — dark, glamorous, defined */}
      <ellipse cx="208" cy="198" rx="15" ry="9.5" fill={STONE} />
      <ellipse cx="272" cy="198" rx="15" ry="9.5" fill={STONE} />
      <circle cx="211" cy="197" r="5" fill="#1A0808" />
      <circle cx="275" cy="197" r="5" fill="#1A0808" />
      <circle cx="209" cy="195" r="2.5" fill={CREAM} opacity="0.55" />
      <circle cx="273" cy="195" r="2.5" fill={CREAM} opacity="0.55" />
      {/* Strong defined brows — groomed, arched */}
      <path d="M 192 183 Q 208 176 226 181" stroke={STONE} strokeWidth="2.8" strokeLinecap="round" fill="none" />
      <path d="M 255 181 Q 272 176 288 183" stroke={STONE} strokeWidth="2.8" strokeLinecap="round" fill="none" />
      {/* Lash line */}
      <path d="M 193 200 Q 208 194 223 198" stroke={STONE} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M 258 198 Q 272 194 287 200" stroke={STONE} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* Nose — refined */}
      <path d="M 238 213 Q 234 238 230 244 Q 238 250 250 244 Q 246 238 242 213 Z" fill={AMBER} opacity="0.25" />

      {/* Lips — full, defined */}
      <path d="M 215 268 Q 240 286 265 268" stroke={STONE} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Upper lip cupid's bow */}
      <path d="M 216 268 Q 228 262 240 266 Q 252 262 264 268" stroke={STONE} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Lip fill */}
      <path d="M 216 268 Q 228 262 240 265 Q 252 262 264 268 Q 264 278 240 282 Q 216 278 216 268 Z"
        fill={AMBER} opacity="0.25" />

      {/* Cheekbone highlight */}
      <ellipse cx="195" cy="244" rx="26" ry="14" fill={AMBER} opacity="0.1" />
      <ellipse cx="285" cy="244" rx="26" ry="14" fill={AMBER} opacity="0.1" />

      {/* Delicate necklace */}
      <path d="M 212 345 Q 240 358 268 345" stroke={CREAM} strokeWidth="1" fill="none" opacity="0.5" />

      <rect x="0" y="548" width="480" height="4" fill={AMBER} opacity="0.7" />
      <rect x="16" y="0" width="3" height="560" fill={AMBER} opacity="0.4" />
    </svg>
  )
}

// ─── Tim Metz ─────────────────────────────────────────────────────────────────
// Short dark brown hair, lean angular face, light hazel eyes, warm open smile showing teeth,
// beige/tan crew-neck sweater — purple Animalz background
function TimMetzPortrait({ className, style }: PortraitProps = {}) {
  return (
    <svg viewBox="0 0 480 560" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      className={className} style={{ width: '100%', height: '100%', display: 'block', ...style }}>
      <defs>
        <pattern id="tm-dots" patternUnits="userSpaceOnUse" width="9" height="9">
          <circle cx="4.5" cy="4.5" r="1.5" fill={AMBER} opacity="0.18" />
        </pattern>
        <pattern id="tm-grain" patternUnits="userSpaceOnUse" width="3" height="3">
          <circle cx="1.5" cy="1.5" r="0.5" fill={STONE} opacity="0.1" />
        </pattern>
      </defs>

      {/* Background — Animalz purple echo as warm sage-lavender */}
      <rect width="480" height="560" fill="#8A7AA8" opacity="0.5" />
      <rect width="480" height="560" fill="#C8B8D8" opacity="0.25" />
      <rect width="480" height="560" fill="url(#tm-dots)" opacity="0.6" />

      {/* Shoulders — beige/tan crew-neck sweater */}
      <ellipse cx="244" cy="496" rx="175" ry="102" fill={SAGE} opacity="0.3" transform="translate(5,6)" />
      <ellipse cx="240" cy="490" rx="175" ry="102" fill="#C8A882" />
      {/* Sweater knit texture */}
      {[0,1,2,3,4,5,6].map(i => (
        <line key={i} x1={72 + i*52} y1="430" x2={72 + i*50} y2="560" stroke="#B89060" strokeWidth="14" opacity="0.2" />
      ))}
      {/* Crew neck collar */}
      <path d="M 205 385 Q 240 395 275 385 Q 265 375 240 372 Q 215 375 205 385 Z"
        fill="#B89060" opacity="0.6" />

      {/* Neck */}
      <rect x="215" y="318" width="30" height="60" rx="7" fill={SAGE} opacity="0.18" transform="translate(3,4)" />
      <rect x="212" y="315" width="30" height="60" rx="7" fill="#D4B08A" />

      {/* Hair — short, dark brown, natural slightly textured top, clean sides */}
      {/* Misreg */}
      <path d="M 152 180 Q 155 132 240 122 Q 325 132 328 180 Q 308 155 240 148 Q 172 155 152 180 Z"
        fill={STONE} opacity="0.35" transform="translate(4,5)" />
      <path d="M 152 180 Q 155 132 240 122 Q 325 132 328 180 Q 308 155 240 148 Q 172 155 152 180 Z"
        fill="#2C1E12" />
      <ellipse cx="240" cy="158" rx="92" ry="52" fill="#2C1E12" />
      {/* Slight peak/natural texture on top */}
      <path d="M 185 148 Q 218 140 250 145 Q 280 140 308 152 Q 280 148 240 145 Q 200 142 185 148 Z"
        fill="#1A1208" opacity="0.5" />
      {/* Clean side temples */}
      <path d="M 160 190 Q 165 172 178 168" stroke="#2C1E12" strokeWidth="11" strokeLinecap="round" fill="none" />
      <path d="M 320 190 Q 315 172 302 168" stroke="#2C1E12" strokeWidth="11" strokeLinecap="round" fill="none" />
      {/* Slight receding hairline */}
      <path d="M 163 192 Q 172 178 188 174" stroke="#2C1E12" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M 317 192 Q 308 178 292 174" stroke="#2C1E12" strokeWidth="5" strokeLinecap="round" fill="none" />

      {/* Face — lean, angular, defined cheekbones */}
      <path d="M 170 198 Q 168 258 175 298 Q 186 348 240 376 Q 294 348 305 298 Q 312 258 310 198 Q 290 150 240 144 Q 190 150 170 198 Z"
        fill={SAGE} opacity="0.2" transform="translate(4,5)" />
      <path d="M 167 194 Q 165 254 172 294 Q 183 344 240 372 Q 297 344 308 294 Q 315 254 313 194 Q 292 146 240 140 Q 188 146 167 194 Z"
        fill="#D4B08A" />
      <path d="M 167 194 Q 165 254 172 294 Q 183 344 240 372 Q 297 344 308 294 Q 315 254 313 194 Q 292 146 240 140 Q 188 146 167 194 Z"
        fill="url(#tm-grain)" opacity="0.4" />

      {/* Eyes — light hazel/green-brown, slightly deep-set */}
      <ellipse cx="207" cy="205" rx="14" ry="8.5" fill={STONE} />
      <ellipse cx="272" cy="205" rx="14" ry="8.5" fill={STONE} />
      {/* Hazel iris */}
      <circle cx="210" cy="204" r="5" fill="#6A8060" opacity="0.75" />
      <circle cx="275" cy="204" r="5" fill="#6A8060" opacity="0.75" />
      <circle cx="208" cy="202" r="2.5" fill={CREAM} opacity="0.65" />
      <circle cx="273" cy="202" r="2.5" fill={CREAM} opacity="0.65" />
      {/* Brows — natural, not too thick */}
      <path d="M 193 191 Q 209 185 222 189" stroke={STONE} strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M 258 189 Q 271 185 285 191" stroke={STONE} strokeWidth="2.2" strokeLinecap="round" fill="none" />

      {/* Nose — straight, angular */}
      <path d="M 238 220 Q 234 243 230 249 Q 238 255 250 249 Q 246 243 242 220 Z" fill={AMBER} opacity="0.25" />

      {/* Warm open smile — genuine, slightly wide, shows teeth */}
      <path d="M 215 272 Q 240 292 265 272" stroke={STONE} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Teeth */}
      <path d="M 220 273 Q 240 288 260 273 Q 260 282 240 285 Q 220 282 220 273 Z"
        fill={CREAM} opacity="0.75" />
      {/* Smile crinkle at corners */}
      <path d="M 213 272 Q 208 265 210 258" stroke={STONE} strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.3" />
      <path d="M 267 272 Q 272 265 270 258" stroke={STONE} strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.3" />

      {/* Cheek line from smile */}
      <path d="M 182 250 Q 188 270 185 285" stroke={AMBER} strokeWidth="0.8" fill="none" opacity="0.2" />
      <path d="M 298 250 Q 292 270 295 285" stroke={AMBER} strokeWidth="0.8" fill="none" opacity="0.2" />

      <rect x="0" y="548" width="480" height="4" fill={AMBER} />
    </svg>
  )
}

// ─── Lauren Shufran ───────────────────────────────────────────────────────────
// Short side-swept brownish hair (with lighter highlight/streak), strong features,
// warm half-smile, tattoo-covered arms (visible), black sleeveless top,
// more casual/outdoorsy vibe (beach context), small stud earring — they/them
function LaurenShufranPortrait({ className, style }: PortraitProps = {}) {
  return (
    <svg viewBox="0 0 480 560" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      className={className} style={{ width: '100%', height: '100%', display: 'block', ...style }}>
      <defs>
        <pattern id="ls-dots" patternUnits="userSpaceOnUse" width="8" height="8">
          <circle cx="4" cy="4" r="1.4" fill={AMBER} opacity="0.25" />
        </pattern>
        <pattern id="ls-grain" patternUnits="userSpaceOnUse" width="3" height="3">
          <circle cx="1.5" cy="1.5" r="0.55" fill={STONE} opacity="0.12" />
        </pattern>
      </defs>

      {/* Background — coastal/outdoor atmosphere, light sage-grey sky */}
      <rect width="480" height="560" fill="#B8C8B8" opacity="0.5" />
      <rect width="480" height="560" fill="#C8D4C8" opacity="0.3" />
      <rect width="480" height="560" fill="url(#ls-dots)" opacity="0.4" />
      {/* Horizon line */}
      <rect x="0" y="320" width="480" height="240" fill="#8A9870" opacity="0.3" />
      <rect x="0" y="318" width="480" height="4" fill={SAGE} opacity="0.3" />

      {/* Shoulders/torso — black sleeveless top, athletic build */}
      <ellipse cx="244" cy="498" rx="192" ry="108" fill={SAGE} opacity="0.25" transform="translate(5,6)" />
      <ellipse cx="240" cy="492" rx="192" ry="108" fill="#0A0A0A" />

      {/* Arms — sleeveless, muscular */}
      <path d="M 58 380 Q 52 430 60 510 L 102 510 Q 100 455 108 400 Z" fill="#0A0A0A" />
      <path d="M 422 380 Q 428 400 420 455 Q 418 510 378 510 L 378 510 Q 380 455 372 400 Z" fill="#0A0A0A" />

      {/* Arm skin — athletic arms visible */}
      <path d="M 60 340 Q 55 380 58 420 L 102 420 Q 106 380 106 340 Z" fill="#C8A888" />
      <path d="M 374 340 Q 374 380 378 420 L 422 420 Q 425 380 420 340 Z" fill="#C8A888" />

      {/* Tattoo on right arm — botanical floral (visible in photo on left arm) */}
      <path d="M 65 360 Q 72 350 80 355 Q 86 365 80 372 Q 72 378 65 371 Q 62 364 65 360 Z"
        stroke={SAGE} strokeWidth="0.9" fill="none" opacity="0.6" />
      <path d="M 80 374 Q 86 384 84 396 Q 78 404 72 395 Q 68 384 72 374"
        stroke={SAGE} strokeWidth="0.9" fill="none" opacity="0.6" />
      <path d="M 64 394 Q 70 405 75 413" stroke={SAGE} strokeWidth="0.8" fill="none" opacity="0.4" />
      <circle cx="78" cy="380" r="4" stroke={SAGE} strokeWidth="0.8" fill="none" opacity="0.5" />
      <circle cx="68" cy="390" r="3" stroke={SAGE} strokeWidth="0.7" fill="none" opacity="0.45" />

      {/* Tattoo on left arm — ancient art/text (from the other photo) */}
      <rect x="380" y="358" width="36" height="44" rx="2" stroke={AMBER} strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M 386 370 Q 390 365 396 370 Q 400 378 395 383 Q 388 386 384 381 Q 382 374 386 370 Z"
        stroke={AMBER} strokeWidth="0.8" fill="none" opacity="0.45" />
      <path d="M 382 388 L 414 388" stroke={AMBER} strokeWidth="0.6" opacity="0.35" />
      <path d="M 382 393 L 410 393" stroke={AMBER} strokeWidth="0.6" opacity="0.35" />
      <path d="M 382 398 L 408 398" stroke={AMBER} strokeWidth="0.6" opacity="0.35" />

      {/* Neck */}
      <rect x="211" y="312" width="36" height="68" rx="8" fill={SAGE} opacity="0.18" transform="translate(3,4)" />
      <rect x="207" y="308" width="36" height="68" rx="8" fill="#C8A888" />

      {/* Hair — short, side-swept, brownish with lighter streak/highlight on one side */}
      {/* Base short hair shape */}
      <ellipse cx="244" cy="162" rx="100" ry="72" fill={SAGE} opacity="0.2" transform="translate(4,5)" />
      <ellipse cx="240" cy="157" rx="100" ry="72" fill="#4A3018" />
      {/* Side-swept detail — swept right (to viewer's left) */}
      <path d="M 148 178 Q 168 148 210 138 Q 240 133 278 140 Q 310 148 325 175"
        fill="#4A3018" />
      {/* Lighter golden/amber streak — distinctive highlight */}
      <path d="M 188 142 Q 210 134 238 136 Q 225 138 205 148 Q 196 152 188 142 Z"
        fill="#C8901A" opacity="0.6" />
      {/* Side undercut — very short on sides */}
      <path d="M 153 182 Q 157 164 168 160" stroke="#2A1A08" strokeWidth="14" strokeLinecap="round" fill="none" />
      <path d="M 327 182 Q 323 164 312 160" stroke="#2A1A08" strokeWidth="12" strokeLinecap="round" fill="none" />
      {/* Swept top direction */}
      <path d="M 172 164 Q 205 148 245 144 Q 278 148 304 162"
        stroke="#6A4820" strokeWidth="1" fill="none" opacity="0.3" />

      {/* Face — strong, defined, warm expression */}
      <path d="M 163 196 Q 161 255 170 293 Q 181 340 240 368 Q 299 340 310 293 Q 319 255 317 196 Q 296 148 240 142 Q 184 148 163 196 Z"
        fill={SAGE} opacity="0.2" transform="translate(4,5)" />
      <path d="M 160 192 Q 158 251 167 289 Q 178 336 240 364 Q 302 336 313 289 Q 322 251 320 192 Q 298 144 240 138 Q 182 144 160 192 Z"
        fill="#C8A888" />
      <path d="M 160 192 Q 158 251 167 289 Q 178 336 240 364 Q 302 336 313 289 Q 322 251 320 192 Q 298 144 240 138 Q 182 144 160 192 Z"
        fill="url(#ls-grain)" opacity="0.45" />

      {/* Eyes — dark, intelligent, warm half-smile quality */}
      <ellipse cx="207" cy="200" rx="14" ry="9" fill={STONE} />
      <ellipse cx="273" cy="200" rx="14" ry="9" fill={STONE} />
      <circle cx="204" cy="199" r="5" fill="#2A1A10" />
      <circle cx="270" cy="199" r="5" fill="#2A1A10" />
      <circle cx="202" cy="197" r="2.5" fill={CREAM} opacity="0.6" />
      <circle cx="268" cy="197" r="2.5" fill={CREAM} opacity="0.6" />
      {/* Brows — natural, expressive */}
      <path d="M 193 186 Q 208 180 222 184" stroke={STONE} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M 258 184 Q 272 180 287 186" stroke={STONE} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M 195 189 Q 208 184 220 187" stroke={AMBER} strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.35" />
      <path d="M 260 187 Q 273 184 285 189" stroke={AMBER} strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.35" />

      {/* Nose — defined, straight */}
      <path d="M 237 216 Q 233 240 228 247 Q 237 253 252 247 Q 247 240 243 216 Z" fill={AMBER} opacity="0.25" />

      {/* Expression — warm half-smile, slight knowing quality */}
      <path d="M 218 268 Q 240 278 262 268" stroke={STONE} strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M 220 269 Q 240 276 260 269" stroke={AMBER} strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.4" />
      {/* Slight smile asymmetry — right side slightly higher */}
      <path d="M 262 268 Q 266 264 265 258" stroke={STONE} strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.3" />

      {/* Small stud earring */}
      <circle cx="160" cy="223" r="3.5" fill={STONE} opacity="0.7" />
      <circle cx="160" cy="223" r="2" fill={AMBER} opacity="0.6" />

      {/* Amber spine */}
      <rect x="0" y="0" width="4" height="560" fill={AMBER} opacity="0.5" />
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
