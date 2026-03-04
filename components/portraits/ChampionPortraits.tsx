// Risograph / screen-print portrait illustrations
// Visual approach: limited 3-ink palette (stone, amber, sage), halftone shadow
// patterns, intentional color misregistration on key shapes, grain texture overlay.
// Each portrait is a different "print run" of the same editorial series.

type PortraitProps = { className?: string; style?: React.CSSProperties }

// Shared risograph palette
const STONE  = '#1A1310'   // key plate — hair, outlines, dark areas
const AMBER  = '#C4722A'   // warm ink — faces, skin tones
const SAGE   = '#7BAE8A'   // cool ink — shadow register, accents
const CREAM  = '#F6F1E9'   // paper / highlights

// ─── BRI CALLAHAN ────────────────────────────────────────────────────────────
// Teacher turned content lead. Big curly hair, round glasses, warm and bookish.
export function BriCallahanPortrait({ className, style }: PortraitProps) {
  return (
    <svg
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <defs>
        {/* Halftone shadow dots */}
        <pattern id="ht-bri" patternUnits="userSpaceOnUse" width="11" height="11">
          <circle cx="5.5" cy="5.5" r="2.8" fill={STONE} />
        </pattern>
        {/* Fine grain noise */}
        <pattern id="grain-bri" patternUnits="userSpaceOnUse" width="5" height="5">
          <rect x="1" y="0" width="1" height="1" fill={STONE} opacity="0.3" />
          <rect x="4" y="2" width="1" height="1" fill={STONE} opacity="0.2" />
          <rect x="0" y="4" width="1" height="1" fill={STONE} opacity="0.25" />
          <rect x="3" y="3" width="1" height="1" fill={STONE} opacity="0.18" />
        </pattern>
        {/* Face clipping path for halftone shadow area */}
        <clipPath id="face-clip-bri">
          <ellipse cx="400" cy="358" rx="118" ry="132" />
        </clipPath>
        {/* Hair clip */}
        <clipPath id="hair-clip-bri">
          <ellipse cx="400" cy="255" rx="168" ry="178" />
        </clipPath>
      </defs>

      {/* Paper background */}
      <rect width="800" height="600" fill={STONE} />

      {/* Sage ink blob — left background wash */}
      <ellipse cx="100" cy="380" rx="200" ry="260" fill={SAGE} opacity="0.13" />

      {/* Amber ink wash — top-right */}
      <ellipse cx="680" cy="120" rx="220" ry="180" fill={AMBER} opacity="0.1" />

      {/* Halftone dot field — upper right quadrant, creates depth */}
      <rect x="480" y="0" width="320" height="320" fill="url(#ht-bri)" opacity="0.07" />

      {/* ── BODY / SHOULDERS ── */}
      {/* Sage registration shadow (offset +5px, +6px) */}
      <ellipse cx="405" cy="686" rx="235" ry="115" fill={SAGE} opacity="0.45" />
      {/* Amber primary body */}
      <ellipse cx="400" cy="680" rx="235" ry="115" fill={AMBER} />

      {/* Blouse collar — cream */}
      <polygon points="350,530 400,588 450,530 472,610 328,610" fill={CREAM} opacity="0.92" />
      {/* Collar shadow register — sage */}
      <polygon points="354,534 404,592 453,533 474,612 330,612" fill={SAGE} opacity="0.25" />

      {/* Neck */}
      <rect x="372" y="502" width="56" height="68" rx="6" fill={AMBER} />

      {/* ── HAIR — voluminous curls ── */}
      {/* Sage shadow register (offset) */}
      <g transform="translate(5, 7)">
        <ellipse cx="400" cy="258" rx="168" ry="175" fill={SAGE} opacity="0.35" />
        <circle cx="238" cy="316" r="98" fill={SAGE} opacity="0.3" />
        <circle cx="562" cy="316" r="98" fill={SAGE} opacity="0.3" />
        <circle cx="400" cy="138" r="92" fill={SAGE} opacity="0.3" />
      </g>
      {/* Stone primary hair */}
      <ellipse cx="400" cy="258" rx="168" ry="175" fill={STONE} />
      <circle cx="238" cy="316" r="98" fill={STONE} />
      <circle cx="562" cy="316" r="98" fill={STONE} />
      <circle cx="310" cy="178" r="82" fill={STONE} />
      <circle cx="490" cy="178" r="82" fill={STONE} />
      <circle cx="400" cy="138" r="92" fill={STONE} />
      <circle cx="348" cy="155" r="62" fill={STONE} />
      <circle cx="452" cy="155" r="62" fill={STONE} />
      {/* Subtle amber highlight on hair crown */}
      <ellipse cx="400" cy="162" rx="80" ry="50" fill={AMBER} opacity="0.12" />

      {/* ── FACE ── */}
      {/* Sage misregistration shadow — offset */}
      <ellipse cx="404" cy="362" rx="118" ry="132" fill={SAGE} opacity="0.6" />
      {/* Amber primary face */}
      <ellipse cx="400" cy="358" rx="118" ry="132" fill={AMBER} />

      {/* Halftone shadow — right side of face */}
      <rect
        x="430" y="260" width="100" height="240"
        fill="url(#ht-bri)" opacity="0.28"
        clipPath="url(#face-clip-bri)"
      />

      {/* Ears */}
      <ellipse cx="282" cy="358" rx="18" ry="26" fill={AMBER} />
      <ellipse cx="518" cy="358" rx="18" ry="26" fill={AMBER} />

      {/* ── GLASSES — cream frames, ink-stamp style ── */}
      {/* Sage misregistration of glasses */}
      <rect x="335" y="358" width="47" height="30" rx="4" fill="none" stroke={SAGE} strokeWidth="5" opacity="0.45" transform="translate(3,4)" />
      <rect x="418" y="358" width="47" height="30" rx="4" fill="none" stroke={SAGE} strokeWidth="5" opacity="0.45" transform="translate(3,4)" />
      {/* Amber primary glasses */}
      <rect x="335" y="358" width="47" height="30" rx="4" fill="none" stroke={AMBER} strokeWidth="2" opacity="0.4" />
      {/* Stone key glasses */}
      <rect x="335" y="358" width="47" height="30" rx="4" fill="none" stroke={STONE} strokeWidth="4" />
      <rect x="418" y="358" width="47" height="30" rx="4" fill="none" stroke={STONE} strokeWidth="4" />
      <line x1="382" y1="373" x2="418" y2="373" stroke={STONE} strokeWidth="3.5" />
      <line x1="318" y1="369" x2="335" y2="369" stroke={STONE} strokeWidth="3.5" />
      <line x1="465" y1="369" x2="482" y2="369" stroke={STONE} strokeWidth="3.5" />

      {/* ── EYES ── */}
      <ellipse cx="358" cy="373" rx="14" ry="10" fill={STONE} />
      <ellipse cx="441" cy="373" rx="14" ry="10" fill={STONE} />
      <circle cx="362" cy="370" r="3.5" fill={CREAM} />
      <circle cx="445" cy="370" r="3.5" fill={CREAM} />

      {/* Nose */}
      <path d="M 392 400 Q 400 420 408 400" stroke={STONE} strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Smile */}
      <path d="M 375 440 Q 400 460 425 440" stroke={STONE} strokeWidth="3.5" fill="none" strokeLinecap="round" />

      {/* ── PROP: small stack of books — bottom left ── */}
      <rect x="44" y="482" width="88" height="14" rx="2" fill={CREAM} opacity="0.85" />
      <rect x="48" y="466" width="80" height="14" rx="2" fill={SAGE} opacity="0.7" />
      <rect x="44" y="452" width="84" height="12" rx="2" fill={AMBER} opacity="0.65" />
      {/* Book spines — vertical lines */}
      <line x1="60" y1="452" x2="60" y2="496" stroke={STONE} strokeWidth="1.5" opacity="0.5" />
      <line x1="76" y1="466" x2="76" y2="496" stroke={STONE} strokeWidth="1.5" opacity="0.5" />

      {/* Grain overlay */}
      <rect width="800" height="600" fill="url(#grain-bri)" opacity="0.55" />
    </svg>
  )
}

// ─── MARCUS REID ─────────────────────────────────────────────────────────────
// Data skeptic, SEO lead. Short close-cut hair, strong jaw, slight skeptical brow.
export function MarcusReidPortrait({ className, style }: PortraitProps) {
  return (
    <svg
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <pattern id="ht-marcus" patternUnits="userSpaceOnUse" width="10" height="10">
          <circle cx="5" cy="5" r="2.4" fill={STONE} />
        </pattern>
        <pattern id="grain-marcus" patternUnits="userSpaceOnUse" width="5" height="5">
          <rect x="2" y="0" width="1" height="1" fill={STONE} opacity="0.28" />
          <rect x="0" y="3" width="1" height="1" fill={STONE} opacity="0.22" />
          <rect x="4" y="4" width="1" height="1" fill={STONE} opacity="0.2" />
          <rect x="1" y="2" width="1" height="1" fill={STONE} opacity="0.16" />
        </pattern>
        <clipPath id="face-clip-marcus">
          <ellipse cx="400" cy="366" rx="122" ry="136" />
        </clipPath>
      </defs>

      <rect width="800" height="600" fill={STONE} />

      {/* Sage background wash — diagonal */}
      <ellipse cx="650" cy="480" rx="280" ry="240" fill={SAGE} opacity="0.11" />
      <ellipse cx="150" cy="100" rx="180" ry="150" fill={AMBER} opacity="0.08" />

      {/* Bar-chart data marks — top right corner, his SEO world */}
      <rect x="620" y="60" width="22" height="110" fill={CREAM} opacity="0.08" />
      <rect x="652" y="88" width="22" height="82" fill={SAGE} opacity="0.12" />
      <rect x="684" y="44" width="22" height="126" fill={CREAM} opacity="0.06" />
      <rect x="716" y="72" width="22" height="98" fill={AMBER} opacity="0.1" />
      {/* Baseline */}
      <line x1="614" y1="172" x2="744" y2="172" stroke={CREAM} strokeWidth="1" opacity="0.12" />

      {/* ── BODY ── */}
      <g transform="translate(5, 6)">
        <ellipse cx="400" cy="686" rx="248" ry="118" fill={SAGE} opacity="0.4" />
      </g>
      <ellipse cx="400" cy="680" rx="248" ry="118" fill={STONE} />

      {/* Shirt collar — cream */}
      <polygon points="352,528 400,596 448,528 468,614 332,614" fill={CREAM} opacity="0.85" />
      {/* Jacket lapels — stone */}
      <polygon points="352,528 332,614 208,614 268,524" fill={STONE} />
      <polygon points="448,528 468,614 592,614 532,524" fill={STONE} />

      {/* Neck */}
      <rect x="374" y="505" width="52" height="62" rx="5" fill={AMBER} />

      {/* ── HAIR — short, close-cropped ── */}
      {/* Sage register (offset) */}
      <g transform="translate(4, 5)">
        <ellipse cx="400" cy="270" rx="135" ry="145" fill={SAGE} opacity="0.3" />
        <ellipse cx="400" cy="196" rx="126" ry="68" fill={SAGE} opacity="0.3" />
      </g>
      <ellipse cx="400" cy="270" rx="135" ry="145" fill={STONE} />
      <ellipse cx="400" cy="196" rx="126" ry="68" fill={STONE} />
      {/* Hairline edge (slight forehead show) */}
      <ellipse cx="400" cy="268" rx="122" ry="52" fill={AMBER} opacity="0.9" />

      {/* ── FACE ── */}
      {/* Sage misregistration */}
      <ellipse cx="405" cy="370" rx="122" ry="136" fill={SAGE} opacity="0.55" />
      {/* Amber primary */}
      <ellipse cx="400" cy="366" rx="122" ry="136" fill={AMBER} />

      {/* Halftone — right face shadow */}
      <rect
        x="440" y="268" width="110" height="250"
        fill="url(#ht-marcus)" opacity="0.3"
        clipPath="url(#face-clip-marcus)"
      />

      {/* Ears */}
      <ellipse cx="278" cy="364" rx="19" ry="28" fill={AMBER} />
      <ellipse cx="522" cy="364" rx="19" ry="28" fill={AMBER} />

      {/* ── EYES — slightly skeptical ── */}
      <ellipse cx="360" cy="344" rx="18" ry="13" fill={STONE} />
      <ellipse cx="440" cy="344" rx="18" ry="13" fill={STONE} />
      <circle cx="364" cy="341" r="4" fill={CREAM} />
      <circle cx="444" cy="341" r="4" fill={CREAM} />

      {/* Skeptical brows — slightly knit */}
      <path d="M 338 328 Q 360 320 384 326" stroke={STONE} strokeWidth="4.5" fill="none" strokeLinecap="round" />
      <path d="M 416 326 Q 440 320 462 328" stroke={STONE} strokeWidth="4.5" fill="none" strokeLinecap="round" />

      {/* Nose */}
      <path d="M 390 374 Q 400 396 410 374" stroke={STONE} strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Neutral, thinking expression */}
      <path d="M 378 420 Q 400 430 422 420" stroke={STONE} strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Stubble halftone */}
      <ellipse cx="400" cy="460" rx="65" ry="32" fill="url(#ht-marcus)" opacity="0.22" />

      {/* Grain */}
      <rect width="800" height="600" fill="url(#grain-marcus)" opacity="0.5" />
    </svg>
  )
}

// ─── PRIYA MENON ─────────────────────────────────────────────────────────────
// Systems designer. Long straight dark hair, composed expression, literary.
export function PriyaMenonPortrait({ className, style }: PortraitProps) {
  return (
    <svg
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <pattern id="ht-priya" patternUnits="userSpaceOnUse" width="10" height="10">
          <circle cx="5" cy="5" r="2.2" fill={STONE} />
        </pattern>
        <pattern id="grain-priya" patternUnits="userSpaceOnUse" width="5" height="5">
          <rect x="0" y="1" width="1" height="1" fill={STONE} opacity="0.26" />
          <rect x="3" y="0" width="1" height="1" fill={STONE} opacity="0.2" />
          <rect x="2" y="4" width="1" height="1" fill={STONE} opacity="0.22" />
          <rect x="4" y="3" width="1" height="1" fill={STONE} opacity="0.17" />
        </pattern>
        <clipPath id="face-clip-priya">
          <ellipse cx="400" cy="356" rx="114" ry="128" />
        </clipPath>
      </defs>

      <rect width="800" height="600" fill={STONE} />

      {/* Amber glow — right side */}
      <ellipse cx="680" cy="300" rx="240" ry="300" fill={AMBER} opacity="0.09" />

      {/* Manuscript lines — subtle background texture (her literary background) */}
      {[148, 162, 176, 190, 204, 218, 232, 246].map((y, i) => (
        <line
          key={i}
          x1="52"
          y1={y}
          x2={i % 4 === 0 ? 240 : i % 4 === 2 ? 210 : 228}
          y2={y}
          stroke={CREAM}
          strokeWidth="0.9"
          opacity="0.1"
        />
      ))}

      {/* ── BODY ── */}
      <g transform="translate(4, 5)">
        <ellipse cx="400" cy="686" rx="228" ry="108" fill={SAGE} opacity="0.4" />
      </g>
      <ellipse cx="400" cy="680" rx="228" ry="108" fill="#1C3A28" />

      {/* Blouse collar */}
      <polygon points="356,534 400,572 444,534 462,610 338,610" fill={AMBER} opacity="0.75" />
      <polygon points="356,534 338,610 232,610 290,526" fill="#1C3A28" />
      <polygon points="444,534 462,610 568,610 510,526" fill="#1C3A28" />

      {/* Neck */}
      <rect x="375" y="503" width="50" height="62" rx="5" fill={AMBER} />

      {/* ── HAIR — long straight, falls to shoulders ── */}
      {/* Behind face: stone mass */}
      <ellipse cx="400" cy="360" rx="162" ry="210" fill={STONE} />
      {/* Long side curtains */}
      <path d="M 238 285 Q 210 420 218 584 Q 268 562 276 476 Q 286 376 290 298 Z" fill={STONE} />
      <path d="M 562 285 Q 590 420 582 584 Q 532 562 524 476 Q 514 376 510 298 Z" fill={STONE} />
      {/* Top of hair */}
      <ellipse cx="400" cy="218" rx="134" ry="82" fill={STONE} />
      <rect x="268" y="198" width="264" height="118" fill={STONE} />
      {/* Sage hair highlight — soft streak */}
      <path
        d="M 338 168 Q 380 148 400 152 Q 420 148 462 168"
        stroke={SAGE}
        strokeWidth="6"
        fill="none"
        opacity="0.2"
      />

      {/* ── FACE ── */}
      <ellipse cx="404" cy="360" rx="114" ry="128" fill={SAGE} opacity="0.55" />
      <ellipse cx="400" cy="356" rx="114" ry="128" fill={AMBER} />

      {/* Halftone — left face shadow */}
      <rect
        x="286" y="254" width="120" height="240"
        fill="url(#ht-priya)" opacity="0.25"
        clipPath="url(#face-clip-priya)"
      />

      {/* Ears */}
      <ellipse cx="286" cy="355" rx="16" ry="23" fill={AMBER} />
      <ellipse cx="514" cy="355" rx="16" ry="23" fill={AMBER} />

      {/* ── EYES — thoughtful, precise ── */}
      <ellipse cx="361" cy="336" rx="17" ry="12" fill={STONE} />
      <ellipse cx="439" cy="336" rx="17" ry="12" fill={STONE} />
      <circle cx="365" cy="333" r="3.5" fill={CREAM} />
      <circle cx="443" cy="333" r="3.5" fill={CREAM} />

      {/* Brows — slightly raised inner corners (thoughtful) */}
      <path d="M 343 320 Q 362 314 378 318" stroke={STONE} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M 422 318 Q 438 314 457 320" stroke={STONE} strokeWidth="3.5" fill="none" strokeLinecap="round" />

      {/* Nose */}
      <path d="M 391 365 Q 400 382 409 365" stroke={STONE} strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Composed mouth */}
      <path d="M 376 408 Q 400 420 424 408" stroke={STONE} strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Grain */}
      <rect width="800" height="600" fill="url(#grain-priya)" opacity="0.52" />
    </svg>
  )
}

// ─── DESHAWN OKAFOR ───────────────────────────────────────────────────────────
// VP of Growth. Broad-shouldered, direct gaze, confident.
export function DeShawnOkaforPortrait({ className, style }: PortraitProps) {
  return (
    <svg
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <pattern id="ht-deshawn" patternUnits="userSpaceOnUse" width="10" height="10">
          <circle cx="5" cy="5" r="2.6" fill={STONE} />
        </pattern>
        <pattern id="grain-deshawn" patternUnits="userSpaceOnUse" width="5" height="5">
          <rect x="1" y="1" width="1" height="1" fill={STONE} opacity="0.3" />
          <rect x="3" y="0" width="1" height="1" fill={STONE} opacity="0.24" />
          <rect x="0" y="3" width="1" height="1" fill={STONE} opacity="0.2" />
          <rect x="4" y="4" width="1" height="1" fill={STONE} opacity="0.18" />
        </pattern>
        <clipPath id="face-clip-deshawn">
          <ellipse cx="400" cy="368" rx="122" ry="136" />
        </clipPath>
      </defs>

      <rect width="800" height="600" fill={STONE} />

      {/* Cycling wheel — background motif (his hobby) */}
      <circle cx="620" cy="490" r="224" fill="none" stroke={SAGE} strokeWidth="2" opacity="0.1" />
      <circle cx="620" cy="490" r="162" fill="none" stroke={SAGE} strokeWidth="1" opacity="0.07" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <line
          key={i}
          x1={620 + 10 * Math.cos((angle * Math.PI) / 180)}
          y1={490 + 10 * Math.sin((angle * Math.PI) / 180)}
          x2={620 + 222 * Math.cos((angle * Math.PI) / 180)}
          y2={490 + 222 * Math.sin((angle * Math.PI) / 180)}
          stroke={SAGE}
          strokeWidth="1"
          opacity="0.07"
        />
      ))}

      {/* Amber wash — upper left */}
      <ellipse cx="120" cy="120" rx="200" ry="180" fill={AMBER} opacity="0.09" />

      {/* Sticky note — left corner ("Don't hire the problem away") */}
      <rect x="32" y="456" width="86" height="72" fill={AMBER} opacity="0.16" />
      <line x1="42" y1="472" x2="106" y2="472" stroke={CREAM} strokeWidth="1.2" opacity="0.35" />
      <line x1="42" y1="486" x2="102" y2="486" stroke={CREAM} strokeWidth="1.2" opacity="0.35" />
      <line x1="42" y1="500" x2="96" y2="500" stroke={CREAM} strokeWidth="1.2" opacity="0.35" />

      {/* ── BODY — broad-shouldered ── */}
      <g transform="translate(5, 6)">
        <ellipse cx="400" cy="690" rx="268" ry="128" fill={SAGE} opacity="0.4" />
      </g>
      <ellipse cx="400" cy="684" rx="268" ry="128" fill={STONE} />

      {/* Shirt */}
      <polygon points="348,534 400,598 452,534 476,616 324,616" fill="#0A2010" />

      {/* Neck */}
      <rect x="372" y="502" width="56" height="66" rx="5" fill={AMBER} />

      {/* ── HAIR — very short, close-cropped ── */}
      <g transform="translate(4, 5)">
        <ellipse cx="400" cy="278" rx="132" ry="138" fill={SAGE} opacity="0.3" />
        <ellipse cx="400" cy="206" rx="124" ry="60" fill={SAGE} opacity="0.3" />
      </g>
      <ellipse cx="400" cy="278" rx="132" ry="138" fill={STONE} />
      <ellipse cx="400" cy="206" rx="124" ry="60" fill={STONE} />

      {/* ── FACE ── */}
      <ellipse cx="405" cy="372" rx="122" ry="136" fill={SAGE} opacity="0.52" />
      <ellipse cx="400" cy="368" rx="122" ry="136" fill={AMBER} />

      {/* Halftone — right side shadow */}
      <rect
        x="442" y="262" width="108" height="260"
        fill="url(#ht-deshawn)" opacity="0.32"
        clipPath="url(#face-clip-deshawn)"
      />

      {/* Ears */}
      <ellipse cx="278" cy="368" rx="18" ry="27" fill={AMBER} />
      <ellipse cx="522" cy="368" rx="18" ry="27" fill={AMBER} />

      {/* ── EYES — direct gaze ── */}
      <ellipse cx="360" cy="348" rx="18" ry="13" fill={STONE} />
      <ellipse cx="440" cy="348" rx="18" ry="13" fill={STONE} />
      <circle cx="364" cy="344" r="4" fill={CREAM} />
      <circle cx="444" cy="344" r="4" fill={CREAM} />

      {/* Confident level brows */}
      <path d="M 336 330 Q 360 322 382 328" stroke={STONE} strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M 418 328 Q 440 322 464 330" stroke={STONE} strokeWidth="5" fill="none" strokeLinecap="round" />

      {/* Nose — structured */}
      <path d="M 388 376 L 382 402 Q 400 412 418 402 L 412 376" stroke={STONE} strokeWidth="2.5" fill="none" />

      {/* Slight confident smile */}
      <path d="M 374 430 Q 400 448 426 430" stroke={STONE} strokeWidth="3.5" fill="none" strokeLinecap="round" />

      {/* Grain */}
      <rect width="800" height="600" fill="url(#grain-deshawn)" opacity="0.54" />
    </svg>
  )
}

// ─── SOFIA REYES ─────────────────────────────────────────────────────────────
// Agency founder. Shoulder-length wavy hair, earrings, confident + creative.
export function SofiaReyesPortrait({ className, style }: PortraitProps) {
  return (
    <svg
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <pattern id="ht-sofia" patternUnits="userSpaceOnUse" width="10" height="10">
          <circle cx="5" cy="5" r="2.3" fill={STONE} />
        </pattern>
        <pattern id="grain-sofia" patternUnits="userSpaceOnUse" width="5" height="5">
          <rect x="0" y="0" width="1" height="1" fill={STONE} opacity="0.28" />
          <rect x="2" y="3" width="1" height="1" fill={STONE} opacity="0.22" />
          <rect x="4" y="1" width="1" height="1" fill={STONE} opacity="0.2" />
          <rect x="1" y="4" width="1" height="1" fill={STONE} opacity="0.17" />
        </pattern>
        <clipPath id="face-clip-sofia">
          <ellipse cx="400" cy="358" rx="116" ry="130" />
        </clipPath>
      </defs>

      <rect width="800" height="600" fill={STONE} />

      {/* Geometric accent — top-right triangle (agency founder energy) */}
      <polygon points="800,0 800,300 540,0" fill={AMBER} opacity="0.07" />

      {/* Sage pool — bottom left */}
      <ellipse cx="100" cy="520" rx="220" ry="160" fill={SAGE} opacity="0.12" />

      {/* Crossed utensils — small, bottom right corner */}
      <line x1="696" y1="526" x2="726" y2="556" stroke={CREAM} strokeWidth="3.5" strokeLinecap="round" opacity="0.6" />
      <line x1="722" y1="524" x2="692" y2="554" stroke={CREAM} strokeWidth="3.5" strokeLinecap="round" opacity="0.6" />
      <line x1="698" y1="528" x2="686" y2="516" stroke={CREAM} strokeWidth="3.5" strokeLinecap="round" opacity="0.6" />
      <line x1="720" y1="526" x2="732" y2="514" stroke={CREAM} strokeWidth="3.5" strokeLinecap="round" opacity="0.6" />

      {/* Thin amber rule — top */}
      <rect x="0" y="0" width="800" height="3" fill={AMBER} opacity="0.4" />

      {/* ── BODY ── */}
      <g transform="translate(4, 5)">
        <ellipse cx="400" cy="686" rx="238" ry="112" fill={SAGE} opacity="0.38" />
      </g>
      <ellipse cx="400" cy="680" rx="238" ry="112" fill="#0F2A18" />

      {/* Collar */}
      <polygon points="355,532 400,578 445,532 464,612 336,612" fill={AMBER} opacity="0.8" />
      <polygon points="355,532 336,612 228,612 286,526" fill="#0F2A18" />
      <polygon points="445,532 464,612 572,612 514,526" fill="#0F2A18" />

      {/* Neck */}
      <rect x="375" y="504" width="50" height="62" rx="5" fill={AMBER} />

      {/* ── HAIR — shoulder-length, slightly wavy ── */}
      {/* Sage shadow register */}
      <g transform="translate(4, 6)">
        <ellipse cx="400" cy="348" rx="158" ry="192" fill={SAGE} opacity="0.32" />
        <path d="M 244 288 Q 228 410 238 552 Q 278 530 282 442 Q 290 356 294 282 Z" fill={SAGE} opacity="0.28" />
        <path d="M 556 288 Q 572 410 562 552 Q 522 530 518 442 Q 510 356 506 282 Z" fill={SAGE} opacity="0.28" />
      </g>
      {/* Stone primary hair */}
      <ellipse cx="400" cy="348" rx="158" ry="192" fill={STONE} />
      <path d="M 244 288 Q 228 410 238 552 Q 278 530 282 442 Q 290 356 294 282 Z" fill={STONE} />
      <path d="M 556 288 Q 572 410 562 552 Q 522 530 518 442 Q 510 356 506 282 Z" fill={STONE} />
      <ellipse cx="400" cy="212" rx="140" ry="78" fill={STONE} />
      <rect x="260" y="196" width="280" height="108" fill={STONE} />
      {/* Hair highlight */}
      <path
        d="M 336 172 Q 380 154 400 157 Q 420 154 464 172"
        stroke={SAGE}
        strokeWidth="5"
        fill="none"
        opacity="0.18"
      />

      {/* ── FACE ── */}
      <ellipse cx="404" cy="362" rx="116" ry="130" fill={SAGE} opacity="0.58" />
      <ellipse cx="400" cy="358" rx="116" ry="130" fill={AMBER} />

      {/* Halftone — right shadow */}
      <rect
        x="436" y="256" width="106" height="244"
        fill="url(#ht-sofia)" opacity="0.26"
        clipPath="url(#face-clip-sofia)"
      />

      {/* Ears */}
      <ellipse cx="284" cy="357" rx="16" ry="23" fill={AMBER} />
      <ellipse cx="516" cy="357" rx="16" ry="23" fill={AMBER} />
      {/* Earrings — amber circles */}
      <circle cx="284" cy="374" r="5" fill={AMBER} />
      <circle cx="516" cy="374" r="5" fill={AMBER} />
      {/* Earring misregistration — sage */}
      <circle cx="286" cy="376" r="5" fill={SAGE} opacity="0.45" />
      <circle cx="518" cy="376" r="5" fill={SAGE} opacity="0.45" />
      {/* Earring key ring */}
      <circle cx="284" cy="374" r="5" fill="none" stroke={STONE} strokeWidth="2" />
      <circle cx="516" cy="374" r="5" fill="none" stroke={STONE} strokeWidth="2" />

      {/* ── EYES — creative, direct ── */}
      <ellipse cx="362" cy="338" rx="17" ry="12" fill={STONE} />
      <ellipse cx="438" cy="338" rx="17" ry="12" fill={STONE} />
      <circle cx="366" cy="335" r="3.5" fill={CREAM} />
      <circle cx="442" cy="335" r="3.5" fill={CREAM} />

      {/* Brows — expressive, slightly arched */}
      <path d="M 344 322 Q 362 314 380 318" stroke={STONE} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M 420 318 Q 438 314 456 322" stroke={STONE} strokeWidth="3.5" fill="none" strokeLinecap="round" />

      {/* Nose */}
      <path d="M 391 365 Q 400 382 409 365" stroke={STONE} strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Confident smile */}
      <path d="M 374 407 Q 400 422 426 407" stroke={STONE} strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Upper lip */}
      <path d="M 374 407 Q 387 400 400 402 Q 413 400 426 407" stroke={STONE} strokeWidth="1.8" fill="none" strokeLinecap="round" />

      {/* Grain */}
      <rect width="800" height="600" fill="url(#grain-sofia)" opacity="0.52" />
    </svg>
  )
}

export const PORTRAIT_COMPONENTS: Record<
  string,
  React.ComponentType<{ className?: string; style?: React.CSSProperties }>
> = {
  'bri-callahan':   BriCallahanPortrait,
  'marcus-reid':    MarcusReidPortrait,
  'priya-menon':    PriyaMenonPortrait,
  'deshawn-okafor': DeShawnOkaforPortrait,
  'sofia-reyes':    SofiaReyesPortrait,
}
