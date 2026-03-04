// Mid-article scene illustrations — editorial environment shots
// Each champion gets 2 scenes: one at Q4, one at Q7.
// Every scene uses a distinct risograph variation:
//   different ink emphasis, pattern type, and registration offset.
// viewBox 1200×420 — wide cinematic crop, like a magazine spread.

type SceneProps = { style?: React.CSSProperties }

const STONE = '#1A1310'
const AMBER = '#C4722A'
const SAGE  = '#7BAE8A'
const CREAM = '#F6F1E9'

// ─── BRI CALLAHAN ─────────────────────────────────────────────────────────
// Scene A: Bookshelf — amber dominant, cross-hatch texture, warm and literary
export function BriScene_A({ style }: SceneProps) {
  const books = [
    // [x, y, w, h, fill, opacity]
    [30,  228, 26, 82, AMBER, 1],   [58,  240, 18, 70, SAGE,  1],
    [78,  232, 30, 78, CREAM, 0.85],[110, 218, 22, 92, AMBER, 0.9],
    [134, 238, 16, 72, STONE, 1],   [152, 226, 28, 84, SAGE,  0.8],
    [182, 234, 20, 76, AMBER, 0.7], [204, 220, 24, 90, CREAM, 0.9],
    [230, 242, 18, 68, SAGE,  1],   [250, 228, 32, 82, AMBER, 1],
    [284, 236, 20, 74, CREAM, 0.8], [306, 224, 26, 86, SAGE,  0.9],
    [334, 238, 22, 72, AMBER, 0.85],[358, 230, 18, 80, STONE, 1],
    [378, 242, 28, 68, SAGE,  0.7], [408, 222, 24, 88, AMBER, 1],
    [434, 236, 16, 74, CREAM, 0.9], [452, 228, 30, 82, SAGE,  0.8],
    [484, 240, 20, 70, AMBER, 0.9], [506, 224, 26, 86, CREAM, 0.85],
    [534, 234, 22, 76, SAGE,  1],   [558, 218, 28, 92, AMBER, 0.9],
    [588, 238, 18, 72, STONE, 1],   [608, 226, 24, 84, AMBER, 0.7],
    [634, 232, 20, 78, SAGE,  0.85],[656, 242, 16, 68, CREAM, 0.9],
    [674, 220, 30, 90, AMBER, 1],   [706, 234, 22, 76, SAGE,  0.8],
    [730, 228, 26, 82, CREAM, 0.9], [758, 238, 18, 72, AMBER, 0.85],
    [778, 224, 28, 86, SAGE,  0.9], [808, 232, 20, 78, AMBER, 0.7],
    [830, 240, 24, 70, CREAM, 0.85],[856, 218, 30, 92, SAGE,  1],
    [888, 234, 18, 76, AMBER, 0.9], [908, 226, 26, 84, STONE, 1],
    [936, 238, 22, 72, CREAM, 0.8], [960, 222, 28, 88, AMBER, 1],
    [990, 232, 20, 78, SAGE,  0.85],[1012,240, 24, 70, AMBER, 0.9],
    [1038,226, 18, 84, CREAM, 0.9], [1058,234, 30, 76, SAGE,  0.8],
    [1090,220, 22, 90, AMBER, 1],   [1114,238, 26, 72, STONE, 1],
    [1142,228, 20, 82, SAGE,  0.85],[1164,240, 28, 70, AMBER, 0.9],
    // Top shelf books
    [40,  118, 22, 72, SAGE,  0.9], [64,  126, 18, 64, AMBER, 1],
    [84,  112, 28, 78, CREAM, 0.85],[114, 120, 20, 70, SAGE,  0.8],
    [136, 108, 26, 82, AMBER, 0.9], [164, 118, 16, 72, STONE, 1],
    [182, 124, 30, 66, CREAM, 0.85],[214, 112, 22, 78, AMBER, 0.9],
    [238, 118, 18, 72, SAGE,  0.8], [258, 106, 28, 84, AMBER, 1],
    [288, 120, 20, 70, CREAM, 0.9], [310, 114, 26, 76, SAGE,  0.85],
    [338, 108, 24, 82, AMBER, 0.8], [364, 118, 18, 72, STONE, 1],
    [384, 122, 28, 68, SAGE,  0.9], [414, 110, 22, 80, AMBER, 1],
    [438, 116, 20, 74, CREAM, 0.85],[460, 124, 16, 66, SAGE,  0.8],
  ] as const

  return (
    <svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
      <defs>
        {/* Cross-hatch pattern — Bri's literary warmth */}
        <pattern id="bri-hatch-a" patternUnits="userSpaceOnUse" width="8" height="8">
          <line x1="0" y1="8" x2="8" y2="0" stroke={STONE} strokeWidth="0.7" opacity="0.6" />
          <line x1="-2" y1="2" x2="2" y2="-2" stroke={STONE} strokeWidth="0.7" opacity="0.6" />
          <line x1="6" y1="10" x2="10" y2="6" stroke={STONE} strokeWidth="0.7" opacity="0.6" />
        </pattern>
        <pattern id="bri-dots-a" patternUnits="userSpaceOnUse" width="10" height="10">
          <circle cx="5" cy="5" r="2" fill={STONE} />
        </pattern>
        <clipPath id="bri-shelf-clip">
          <rect x="0" y="0" width="1200" height="420" />
        </clipPath>
      </defs>

      {/* Background */}
      <rect width="1200" height="420" fill={STONE} />

      {/* Ambient amber wash — upper right */}
      <ellipse cx="950" cy="80" rx="400" ry="250" fill={AMBER} opacity="0.08" />
      {/* Sage wash — lower left */}
      <ellipse cx="200" cy="380" rx="350" ry="180" fill={SAGE} opacity="0.1" />

      {/* Shelf planks */}
      <rect x="0" y="310" width="1200" height="10" fill="#2A1E18" />
      <rect x="0" y="198" width="1200" height="10" fill="#2A1E18" />
      <rect x="0" y="100" width="550"  height="10" fill="#2A1E18" />

      {/* Books */}
      {books.map(([x, y, w, h, fill, op], i) => (
        <g key={i}>
          {/* Sage misregistration behind each book */}
          <rect x={x + 2} y={y + 3} width={w} height={h} fill={SAGE} opacity={0.2} />
          <rect x={x} y={y} width={w} height={h} fill={fill} opacity={op} />
          {/* Spine line */}
          <line x1={x + 3} y1={y} x2={x + 3} y2={y + h} stroke={STONE} strokeWidth="1" opacity="0.3" />
        </g>
      ))}

      {/* Coffee mug — right side, on bottom shelf */}
      <rect x="1060" y="274" width="38" height="36" rx="3" fill={CREAM} opacity="0.85" />
      <rect x="1063" y="274" width="32" height="4" rx="1" fill={AMBER} opacity="0.7" />
      <rect x="1098" y="284" width="12" height="16" rx="6" fill="none" stroke={CREAM} strokeWidth="3" opacity="0.7" />
      {/* Steam */}
      <path d="M 1072 270 Q 1068 262 1072 254" stroke={CREAM} strokeWidth="1.5" fill="none" opacity="0.35" strokeLinecap="round" />
      <path d="M 1080 268 Q 1076 259 1080 250" stroke={CREAM} strokeWidth="1.5" fill="none" opacity="0.35" strokeLinecap="round" />
      <path d="M 1088 270 Q 1084 261 1088 252" stroke={CREAM} strokeWidth="1.5" fill="none" opacity="0.35" strokeLinecap="round" />

      {/* Small plant — top right (sage circles) */}
      <ellipse cx="1140" cy="82" rx="28" ry="20" fill={SAGE} opacity="0.7" />
      <ellipse cx="1118" cy="90" rx="18" ry="14" fill={SAGE} opacity="0.6" />
      <ellipse cx="1160" cy="88" rx="16" ry="12" fill={SAGE} opacity="0.55" />
      <rect x="1130" y="96" width="18" height="12" rx="2" fill={AMBER} opacity="0.6" />

      {/* Desk lamp silhouette */}
      <rect x="720" y="155" width="6" height="45" fill={CREAM} opacity="0.5" />
      <path d="M 723 155 Q 760 130 770 108" stroke={CREAM} strokeWidth="5" fill="none" opacity="0.5" strokeLinecap="round" />
      <ellipse cx="772" cy="105" rx="24" ry="10" fill={AMBER} opacity="0.5" />
      <ellipse cx="772" cy="105" rx="24" ry="10" fill={AMBER} opacity="0.2" transform="scale(1.6) translate(-168, -40)" />

      {/* Cross-hatch overlay — adds texture to dark areas */}
      <rect x="0" y="320" width="1200" height="100" fill="url(#bri-hatch-a)" opacity="0.08" />
      <rect x="550" y="0" width="650" height="100" fill="url(#bri-dots-a)" opacity="0.04" />

      {/* Amber bottom rule */}
      <rect x="0" y="416" width="1200" height="4" fill={AMBER} opacity="0.5" />
    </svg>
  )
}

// Scene B: Open notebook/journal — sage dominant, minimal line-work
export function BriScene_B({ style }: SceneProps) {
  return (
    <svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
      <defs>
        <pattern id="bri-fineline" patternUnits="userSpaceOnUse" width="1" height="20">
          <line x1="0" y1="0" x2="1" y2="0" stroke={CREAM} strokeWidth="0.6" opacity="0.35" />
        </pattern>
        <pattern id="bri-dots-b" patternUnits="userSpaceOnUse" width="12" height="12">
          <circle cx="6" cy="6" r="1.8" fill={SAGE} />
        </pattern>
      </defs>

      {/* Background */}
      <rect width="1200" height="420" fill="#0F0C0A" />

      {/* Large sage ink wash — left half */}
      <ellipse cx="300" cy="210" rx="420" ry="280" fill={SAGE} opacity="0.12" />
      {/* Amber wash — right */}
      <ellipse cx="950" cy="300" rx="360" ry="200" fill={AMBER} opacity="0.08" />

      {/* ── Open journal spread — centered ── */}
      {/* Journal shadow/register (sage offset) */}
      <rect x="162" y="68" width="876" height="284" rx="3" fill={SAGE} opacity="0.25" transform="translate(5,6)" />
      {/* Left page */}
      <rect x="162" y="68" width="436" height="284" rx="3" fill={CREAM} opacity="0.9" />
      {/* Right page */}
      <rect x="602" y="68" width="436" height="284" rx="3" fill={CREAM} opacity="0.87" />
      {/* Spine shadow */}
      <rect x="594" y="68" width="16" height="284" fill={STONE} opacity="0.25" />
      <line x1="602" y1="68" x2="602" y2="352" stroke={STONE} strokeWidth="1" opacity="0.4" />

      {/* Left page — ruled lines and writing marks */}
      <rect x="162" y="68" width="436" height="284" fill="url(#bri-fineline)" opacity="0.6" />
      {/* Writing: horizontal marks suggesting text */}
      {[110, 130, 150, 170, 190, 210, 230, 250, 270, 290].map((y, i) => (
        <rect key={i} x={200} y={y} width={i % 4 === 3 ? 260 : 340} height="2" rx="1" fill={STONE} opacity="0.18" />
      ))}
      {/* Drop cap on left page */}
      <text x="196" y="148" fontFamily="Georgia, serif" fontStyle="italic" fontSize="72" fill={AMBER} opacity="0.7">B</text>
      {/* Amber annotation mark */}
      <rect x="196" y="280" width="120" height="3" rx="1" fill={AMBER} opacity="0.5" />
      <rect x="196" y="290" width="80" height="3" rx="1" fill={AMBER} opacity="0.3" />

      {/* Right page — more sparse, with a big quote mark */}
      <text x="624" y="192" fontFamily="Georgia, serif" fontStyle="italic" fontSize="140" fill={SAGE} opacity="0.15">&ldquo;</text>
      {[130, 150, 170, 190, 250, 270, 290, 310].map((y, i) => (
        <rect key={i} x={640} y={y} width={i % 3 === 0 ? 320 : 380} height="2" rx="1" fill={STONE} opacity="0.14" />
      ))}
      {/* Misregistered annotation — sage offset */}
      <rect x="642" y="325" width="200" height="3" rx="1" fill={SAGE} opacity="0.35" transform="translate(3,3)" />
      <rect x="642" y="325" width="200" height="3" rx="1" fill={AMBER} opacity="0.5" />

      {/* Dot pattern — background depth */}
      <rect x="0" y="0" width="160" height="420" fill="url(#bri-dots-b)" opacity="0.06" />
      <rect x="1040" y="0" width="160" height="420" fill="url(#bri-dots-b)" opacity="0.06" />

      {/* Sage spine line — left edge */}
      <rect x="0" y="0" width="4" height="420" fill={SAGE} opacity="0.5" />
    </svg>
  )
}

// ─── MARCUS REID ──────────────────────────────────────────────────────────
// Scene A: Data / analytics dashboard — sage dominant, grid-based
export function MarcusScene_A({ style }: SceneProps) {
  const bars = [
    [80, 260, 36, 60],  [128, 220, 36, 100], [176, 244, 36, 76],
    [224, 196, 36, 124],[272, 232, 36, 88],  [320, 208, 36, 112],
    [368, 252, 36, 68], [416, 180, 36, 140], [464, 220, 36, 100],
  ] as const

  return (
    <svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
      <defs>
        <pattern id="marc-grid" patternUnits="userSpaceOnUse" width="40" height="40">
          <line x1="40" y1="0" x2="40" y2="40" stroke={CREAM} strokeWidth="0.4" opacity="0.12" />
          <line x1="0" y1="40" x2="40" y2="40" stroke={CREAM} strokeWidth="0.4" opacity="0.12" />
        </pattern>
        <pattern id="marc-dots" patternUnits="userSpaceOnUse" width="8" height="8">
          <circle cx="4" cy="4" r="1.5" fill={SAGE} />
        </pattern>
      </defs>

      <rect width="1200" height="420" fill={STONE} />

      {/* Grid background */}
      <rect width="1200" height="420" fill="url(#marc-grid)" />

      {/* Sage ambient */}
      <ellipse cx="300" cy="180" rx="500" ry="300" fill={SAGE} opacity="0.1" />

      {/* ── Monitor frame — left panel ── */}
      {/* Sage register shadow */}
      <rect x="54" y="44" width="544" height="346" rx="8" fill={SAGE} opacity="0.3" transform="translate(4,5)" />
      <rect x="54" y="44" width="544" height="346" rx="8" fill="#0D1A12" opacity="0.95" />
      <rect x="54" y="44" width="544" height="346" rx="8" fill="none" stroke={SAGE} strokeWidth="2" opacity="0.5" />
      {/* Screen bezel */}
      <rect x="66" y="56" width="520" height="322" rx="4" fill="#0A1510" />

      {/* ── Bar chart inside monitor ── */}
      {/* Chart baseline */}
      <line x1="68" y1="320" x2="572" y2="320" stroke={SAGE} strokeWidth="1" opacity="0.5" />
      {/* Y-axis */}
      <line x1="72" y1="80" x2="72" y2="320" stroke={SAGE} strokeWidth="1" opacity="0.3" />

      {bars.map(([x, y, w, h], i) => (
        <g key={i}>
          {/* Sage misregistration */}
          <rect x={x + 2} y={y + 3} width={w} height={h} fill={SAGE} opacity="0.3" />
          {/* Amber fill for highlighted bar */}
          <rect x={x} y={y} width={w} height={h}
            fill={i === 7 ? AMBER : SAGE} opacity={i === 7 ? 0.9 : 0.55} />
          {/* Value dot on top */}
          <circle cx={x + w / 2} cy={y} r="3" fill={i === 7 ? AMBER : SAGE} opacity="0.8" />
        </g>
      ))}

      {/* Line chart overlay */}
      <polyline
        points={bars.map(([x, y, w]) => `${x + w / 2},${y}`).join(' ')}
        fill="none" stroke={AMBER} strokeWidth="2" opacity="0.5"
        strokeDasharray="6,4"
      />

      {/* Chart label */}
      <rect x="80" y="72" width="140" height="10" rx="2" fill={CREAM} opacity="0.12" />
      <rect x="80" y="88" width="100" height="8" rx="2" fill={CREAM} opacity="0.08" />

      {/* Metric callout — top right of monitor */}
      <rect x="400" y="72" width="160" height="80" rx="4" fill={SAGE} opacity="0.12" />
      <rect x="412" y="84" width="80" height="12" rx="2" fill={SAGE} opacity="0.4" />
      <rect x="412" y="102" width="130" height="30" rx="2" fill={AMBER} opacity="0.2" />
      <rect x="416" y="108" width="60" height="18" rx="1" fill={AMBER} opacity="0.4" />

      {/* ── Right panel: line graph ── */}
      <rect x="628" y="44" width="544" height="170" rx="6" fill="#0D1A12" opacity="0.9" />
      <rect x="628" y="44" width="544" height="170" rx="6" fill="none" stroke={SAGE} strokeWidth="1.5" opacity="0.4" />
      {/* Sparkline */}
      <polyline
        points="648,180 700,140 760,160 820,100 880,120 940,80 1000,95 1060,70 1120,88 1156,65"
        fill="none" stroke={SAGE} strokeWidth="2.5" opacity="0.7"
      />
      {/* Area under line */}
      <polygon
        points="648,180 700,140 760,160 820,100 880,120 940,80 1000,95 1060,70 1120,88 1156,65 1156,200 648,200"
        fill={SAGE} opacity="0.07"
      />
      {/* Highlight point */}
      <circle cx="1060" cy="70" r="5" fill={AMBER} opacity="0.9" />
      <circle cx="1060" cy="70" r="10" fill={AMBER} opacity="0.2" />

      {/* Stats row — bottom right */}
      {[0, 1, 2, 3].map(i => (
        <g key={i}>
          <rect x={628 + i * 138} y={232} width={124} height={80} rx="4" fill={SAGE} opacity={0.07 + i * 0.02} />
          <rect x={640 + i * 138} y={244} width={60} height="8" rx="2" fill={SAGE} opacity="0.35" />
          <rect x={640 + i * 138} y={258} width={90} height="22" rx="2" fill={i === 2 ? AMBER : CREAM} opacity={i === 2 ? 0.3 : 0.1} />
          <rect x={640 + i * 138} y={286} width={70} height="7" rx="2" fill={CREAM} opacity="0.08" />
        </g>
      ))}

      {/* Dot pattern — depth */}
      <rect x="0" y="360" width="1200" height="60" fill="url(#marc-dots)" opacity="0.12" />

      {/* Amber right edge accent */}
      <rect x="1196" y="0" width="4" height="420" fill={AMBER} opacity="0.5" />
    </svg>
  )
}

// Scene B: Disc golf in a park — sage dominant, outdoors, motion
export function MarcusScene_B({ style }: SceneProps) {
  return (
    <svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
      <defs>
        <pattern id="marc-grass" patternUnits="userSpaceOnUse" width="16" height="10">
          <path d="M 0 10 Q 4 0 8 10 Q 12 0 16 10" fill="none" stroke={SAGE} strokeWidth="1" opacity="0.3" />
        </pattern>
        <pattern id="marc-sky-dots" patternUnits="userSpaceOnUse" width="20" height="20">
          <circle cx="10" cy="10" r="1" fill={CREAM} />
        </pattern>
      </defs>

      {/* Sky — deep sage */}
      <rect width="1200" height="420" fill="#0A1A12" />
      {/* Sky gradient suggestion */}
      <rect width="1200" height="220" fill={SAGE} opacity="0.08" />
      {/* Amber horizon glow */}
      <ellipse cx="600" cy="280" rx="700" ry="120" fill={AMBER} opacity="0.07" />

      {/* Horizon line */}
      <rect x="0" y="278" width="1200" height="2" fill={SAGE} opacity="0.3" />

      {/* Ground */}
      <rect x="0" y="280" width="1200" height="140" fill={SAGE} opacity="0.12" />
      <rect x="0" y="360" width="1200" height="60" fill={SAGE} opacity="0.1" />

      {/* Grass texture */}
      <rect x="0" y="280" width="1200" height="140" fill="url(#marc-grass)" />

      {/* Trees — silhouettes in stone */}
      {/* Far left tree */}
      <ellipse cx="120" cy="220" rx="60" ry="80" fill={STONE} opacity="0.7" />
      <ellipse cx="120" cy="220" rx="60" ry="80" fill={SAGE} opacity="0.15" />
      <rect x="112" y="280" width="16" height="50" fill={STONE} opacity="0.8" />
      {/* Mid trees */}
      <ellipse cx="380" cy="210" rx="50" ry="70" fill={STONE} opacity="0.65" />
      <ellipse cx="380" cy="210" rx="50" ry="70" fill={SAGE} opacity="0.12" />
      <rect x="373" y="275" width="14" height="45" fill={STONE} opacity="0.7" />
      {/* Right tree group */}
      <ellipse cx="980" cy="205" rx="70" ry="90" fill={STONE} opacity="0.6" />
      <ellipse cx="980" cy="205" rx="70" ry="90" fill={SAGE} opacity="0.1" />
      <rect x="972" y="290" width="16" height="50" fill={STONE} opacity="0.7" />
      <ellipse cx="1080" cy="225" rx="45" ry="60" fill={STONE} opacity="0.55" />
      <rect x="1073" y="282" width="14" height="40" fill={STONE} opacity="0.65" />

      {/* ── Disc golfer silhouette — center-left ── */}
      {/* Body (sage register offset) */}
      <g transform="translate(3,4)">
        <ellipse cx="560" cy="234" rx="22" ry="28" fill={SAGE} opacity="0.3" />
        <rect x="545" y="258" width="30" height="50" rx="4" fill={SAGE} opacity="0.3" />
      </g>
      {/* Stone primary */}
      <ellipse cx="560" cy="234" rx="22" ry="28" fill={STONE} />
      <rect x="545" y="258" width="30" height="50" rx="4" fill={STONE} opacity="0.95" />
      {/* Throwing arm extended */}
      <line x1="575" y1="248" x2="640" y2="232" stroke={STONE} strokeWidth="10" strokeLinecap="round" />
      {/* Amber accent on figure */}
      <ellipse cx="560" cy="234" rx="12" ry="14" fill={AMBER} opacity="0.15" />

      {/* ── Flying disc — amber, mid-air ── */}
      <ellipse cx="720" cy="198" rx="28" ry="10" fill={AMBER} opacity="0.9" />
      {/* Sage misregistration */}
      <ellipse cx="723" cy="201" rx="28" ry="10" fill={SAGE} opacity="0.4" />
      {/* Motion trail */}
      <ellipse cx="680" cy="208" rx="18" ry="6" fill={AMBER} opacity="0.3" />
      <ellipse cx="650" cy="216" rx="10" ry="4" fill={AMBER} opacity="0.15" />

      {/* Disc golf basket — far right */}
      <rect x="940" y="248" width="6" height="50" fill={CREAM} opacity="0.5" />
      <ellipse cx="943" cy="248" rx="22" ry="8" fill={CREAM} opacity="0.4" />
      {/* Chain suggestion */}
      {[-14,-7,0,7,14].map(offset => (
        <line key={offset} x1={943 + offset} y1={228} x2={943 + offset * 0.4} y2={248}
          stroke={CREAM} strokeWidth="1.5" opacity="0.35" />
      ))}

      {/* Sky dots — stars/atmosphere */}
      <rect x="0" y="0" width="1200" height="278" fill="url(#marc-sky-dots)" opacity="0.06" />

      {/* Amber thin top rule */}
      <rect x="0" y="0" width="1200" height="3" fill={AMBER} opacity="0.5" />
    </svg>
  )
}

// ─── PRIYA MENON ──────────────────────────────────────────────────────────
// Scene A: Writing desk — amber + cream, literary, warm
export function PriyaScene_A({ style }: SceneProps) {
  return (
    <svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
      <defs>
        <pattern id="priya-fine" patternUnits="userSpaceOnUse" width="5" height="5">
          <rect x="1" y="0" width="1" height="1" fill={STONE} opacity="0.25" />
          <rect x="3" y="3" width="1" height="1" fill={STONE} opacity="0.18" />
        </pattern>
        <pattern id="priya-ruled" patternUnits="userSpaceOnUse" width="1" height="22">
          <line x1="0" y1="0" x2="1" y2="0" stroke={STONE} strokeWidth="0.6" opacity="0.3" />
        </pattern>
      </defs>

      <rect width="1200" height="420" fill="#120D08" />
      {/* Amber warm ambient */}
      <ellipse cx="400" cy="200" rx="600" ry="350" fill={AMBER} opacity="0.09" />
      <ellipse cx="900" cy="380" rx="400" ry="200" fill={SAGE} opacity="0.07" />

      {/* ── Desk surface ── */}
      {/* Sage register */}
      <rect x="0" y="282" width="1200" height="18" fill={SAGE} opacity="0.2" transform="translate(3,4)" />
      <rect x="0" y="282" width="1200" height="18" fill={AMBER} opacity="0.7" />
      <rect x="0" y="300" width="1200" height="120" fill={AMBER} opacity="0.2" />

      {/* ── Desk lamp — far left ── */}
      <rect x="60" y="140" width="8" height="148" fill={CREAM} opacity="0.4" />
      <path d="M 64 140 Q 110 100 128 74" stroke={CREAM} strokeWidth="6" fill="none" opacity="0.4" strokeLinecap="round" />
      {/* Lamp head */}
      <ellipse cx="132" cy="70" rx="32" ry="14" fill={AMBER} opacity="0.55" />
      {/* Light cone */}
      <polygon points="110,84 154,84 180,280 84,280" fill={AMBER} opacity="0.04" />

      {/* ── Open notebook — center ── */}
      {/* Shadow */}
      <rect x="282" y="148" width="520" height="136" rx="4" fill={STONE} opacity="0.5" transform="translate(6,8)" />
      {/* Left page */}
      <rect x="282" y="148" width="258" height="136" fill={CREAM} opacity="0.92" />
      {/* Right page */}
      <rect x="542" y="148" width="260" height="136" fill={CREAM} opacity="0.88" />
      {/* Spine */}
      <rect x="536" y="148" width="10" height="136" fill={STONE} opacity="0.2" />
      {/* Ruled lines on left page */}
      <rect x="282" y="148" width="258" height="136" fill="url(#priya-ruled)" opacity="0.5" />
      {/* Writing marks — left */}
      {[175, 197, 219, 241, 263].map((y, i) => (
        <rect key={i} x={300} y={y} width={i % 3 === 2 ? 180 : 220} height="2.5" rx="1" fill={STONE} opacity="0.2" />
      ))}
      {/* Right page — cleaner, with amber underline */}
      {[175, 197, 219, 241, 263].map((y, i) => (
        <rect key={i} x={558} y={y} width={i % 4 === 1 ? 160 : 210} height="2.5" rx="1" fill={STONE} opacity="0.15" />
      ))}
      <rect x="558" y="238" width="190" height="3" rx="1" fill={AMBER} opacity="0.5" />
      <rect x="558" y="242" width="140" height="3" rx="1" fill={AMBER} opacity="0.3" />

      {/* ── Pen / pencil ── */}
      <rect x="810" y="162" width="6" height="120" rx="3" fill={CREAM} opacity="0.7" transform="rotate(-12, 813, 222)" />
      <polygon points="813,282 807,298 819,298" fill={AMBER} opacity="0.7" transform="rotate(-12, 813, 290)" />

      {/* ── Stack of books — right ── */}
      {[
        [880, 220, 200, 24, AMBER, 0.7] as const,
        [892, 196, 185, 24, SAGE,  0.65] as const,
        [876, 172, 195, 24, CREAM, 0.8] as const,
        [888, 150, 178, 22, AMBER, 0.5] as const,
      ].map(([x, y, w, h, fill, op], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={h} rx="2" fill={fill} opacity={op} />
          <line x1={x + 6} y1={y} x2={x + 6} y2={y + (h as number)} stroke={STONE} strokeWidth="1" opacity="0.25" />
        </g>
      ))}

      {/* ── Tea/coffee cup — far right ── */}
      <rect x="1090" y="242" width="44" height="40" rx="4" fill={CREAM} opacity="0.75" />
      <rect x="1094" y="242" width="36" height="5" rx="1" fill={SAGE} opacity="0.5" />
      <rect x="1134" y="252" width="14" height="20" rx="7" fill="none" stroke={CREAM} strokeWidth="3" opacity="0.6" />
      {/* Steam */}
      <path d="M 1104 238 Q 1100 228 1104 218" stroke={CREAM} strokeWidth="1.5" fill="none" opacity="0.3" strokeLinecap="round" />
      <path d="M 1114 236 Q 1110 226 1114 216" stroke={CREAM} strokeWidth="1.5" fill="none" opacity="0.3" strokeLinecap="round" />

      {/* Small plant — left of lamp */}
      <ellipse cx="180" cy="274" rx="20" ry="14" fill={SAGE} opacity="0.6" />
      <ellipse cx="164" cy="278" rx="12" ry="8"  fill={SAGE} opacity="0.5" />
      <rect x="174" y="282" width="12" height="14" rx="2" fill={AMBER} opacity="0.45" />

      {/* Grain overlay */}
      <rect width="1200" height="420" fill="url(#priya-fine)" opacity="0.55" />

      {/* Sage left rule */}
      <rect x="0" y="0" width="3" height="420" fill={SAGE} opacity="0.55" />
    </svg>
  )
}

// Scene B: Systems / workflow diagram — stone dominant, structured, abstract
export function PriyaScene_B({ style }: SceneProps) {
  const nodes = [
    [200, 100, 180, 60, CREAM, 0.88],
    [500, 100, 180, 60, SAGE,  0.7],
    [800, 100, 180, 60, AMBER, 0.6],
    [350, 230, 180, 60, SAGE,  0.65],
    [650, 230, 180, 60, CREAM, 0.8],
    [200, 360, 180, 60, AMBER, 0.55],
    [500, 360, 180, 60, SAGE,  0.6],
    [800, 360, 180, 60, CREAM, 0.75],
  ] as const

  const arrows = [
    [380, 130, 500, 130],   // node0 → node1
    [680, 130, 800, 130],   // node1 → node2
    [290, 160, 350, 230],   // node0 ↓ node3
    [590, 160, 590, 230],   // node1 ↓ node4 (rough)
    [890, 160, 890, 310],   // node2 ↓ (down)
    [440, 260, 500, 290],   // node3 → node4 area
    [290, 390, 500, 390],   // node5 → node6
    [680, 390, 800, 390],   // node6 → node7
  ] as const

  return (
    <svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
      <defs>
        <pattern id="priya-grid" patternUnits="userSpaceOnUse" width="50" height="50">
          <line x1="50" y1="0" x2="50" y2="50" stroke={CREAM} strokeWidth="0.3" opacity="0.08" />
          <line x1="0" y1="50" x2="50" y2="50" stroke={CREAM} strokeWidth="0.3" opacity="0.08" />
        </pattern>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={SAGE} opacity="0.5" />
        </marker>
      </defs>

      <rect width="1200" height="420" fill={STONE} />
      <rect width="1200" height="420" fill="url(#priya-grid)" />

      {/* Sage ambient — center */}
      <ellipse cx="600" cy="210" rx="550" ry="260" fill={SAGE} opacity="0.07" />

      {/* Connector lines */}
      {arrows.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={SAGE} strokeWidth="1.5" opacity="0.4"
          strokeDasharray="6,4"
          markerEnd="url(#arrow)"
        />
      ))}

      {/* Nodes */}
      {nodes.map(([x, y, w, h, fill, op], i) => (
        <g key={i}>
          {/* Sage register */}
          <rect x={x + 3} y={y + 4} width={w} height={h} rx="4" fill={SAGE} opacity="0.2" />
          <rect x={x} y={y} width={w} height={h} rx="4" fill={fill} opacity={op} />
          {/* Inner content lines */}
          <rect x={x + 12} y={y + 18} width={w - 24} height="6" rx="2" fill={STONE} opacity="0.2" />
          <rect x={x + 12} y={y + 30} width={w - 40} height="4" rx="2" fill={STONE} opacity="0.15" />
        </g>
      ))}

      {/* Labels — tiny amber marks */}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x + 14} cy={y + 14} r="5"
          fill={i % 3 === 0 ? AMBER : SAGE} opacity="0.7" />
      ))}

      {/* Amber highlight — connects node1 and node4 (the "key path") */}
      <line x1="590" y1="160" x2="740" y2="230" stroke={AMBER} strokeWidth="2" opacity="0.4" strokeDasharray="8,4" />

      {/* Title block — top left */}
      <rect x="30" y="30" width="140" height="8" rx="3" fill={CREAM} opacity="0.15" />
      <rect x="30" y="46" width="100" height="6" rx="3" fill={CREAM} opacity="0.1" />

      {/* Amber right accent */}
      <rect x="1196" y="0" width="4" height="420" fill={AMBER} opacity="0.45" />
    </svg>
  )
}

// ─── DESHAWN OKAFOR ────────────────────────────────────────────────────────
// Scene A: Strategy whiteboard — stone + cream, bold marks
export function DeShawnScene_A({ style }: SceneProps) {
  return (
    <svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
      <defs>
        <pattern id="desk-dots" patternUnits="userSpaceOnUse" width="12" height="12">
          <circle cx="6" cy="6" r="1.8" fill={STONE} />
        </pattern>
      </defs>

      <rect width="1200" height="420" fill={STONE} />

      {/* Amber ambient — warm office light */}
      <ellipse cx="600" cy="100" rx="700" ry="200" fill={AMBER} opacity="0.07" />
      <ellipse cx="300" cy="380" rx="400" ry="160" fill={SAGE} opacity="0.08" />

      {/* ── Whiteboard — large, center-right ── */}
      {/* Board shadow */}
      <rect x="98" y="32" width="860" height="316" rx="6" fill={STONE} opacity="0.6" transform="translate(6,8)" />
      {/* Board surface */}
      <rect x="98" y="32" width="860" height="316" rx="6" fill={CREAM} opacity="0.92" />
      {/* Board frame */}
      <rect x="98" y="32" width="860" height="316" rx="6" fill="none" stroke={STONE} strokeWidth="8" opacity="0.5" />
      {/* Board tray */}
      <rect x="98" y="348" width="860" height="14" rx="2" fill={STONE} opacity="0.4" />

      {/* ── Diagram on whiteboard ── */}
      {/* Three columns header */}
      <line x1="380" y1="60" x2="380" y2="340" stroke={STONE} strokeWidth="1.5" opacity="0.2" />
      <line x1="660" y1="60" x2="660" y2="340" stroke={STONE} strokeWidth="1.5" opacity="0.2" />

      {/* Column headers */}
      <rect x="116" y="62" width="240" height="24" rx="3" fill={AMBER} opacity="0.4" />
      <rect x="396" y="62" width="240" height="24" rx="3" fill={SAGE} opacity="0.35" />
      <rect x="676" y="62" width="240" height="24" rx="3" fill={STONE} opacity="0.2" />

      {/* Bullet items */}
      {[0, 1, 2, 3].map(i => ([
        <rect key={`a${i}`} x={130} y={108 + i * 52} width={220} height={10} rx="2" fill={STONE} opacity={0.18 - i * 0.02} />,
        <rect key={`b${i}`} x={410} y={108 + i * 52} width={200} height={10} rx="2" fill={STONE} opacity={0.18 - i * 0.02} />,
        <rect key={`c${i}`} x={690} y={108 + i * 52} width={210} height={10} rx="2" fill={STONE} opacity={0.18 - i * 0.02} />,
        <circle key={`da${i}`} cx={124} cy={113 + i * 52} r="4" fill={AMBER} opacity="0.5" />,
        <circle key={`db${i}`} cx={404} cy={113 + i * 52} r="4" fill={SAGE} opacity="0.5" />,
        <circle key={`dc${i}`} cx={684} cy={113 + i * 52} r="4" fill={STONE} opacity="0.35" />,
      ]))}

      {/* Amber highlight box — key insight */}
      <rect x="116" y="264" width="720" height="56" rx="4" fill={AMBER} opacity="0.12" />
      <rect x="116" y="264" width="720" height="56" rx="4" fill="none" stroke={AMBER} strokeWidth="2" opacity="0.3" />
      <rect x="130" y="278" width="400" height="10" rx="2" fill={AMBER} opacity="0.3" />
      <rect x="130" y="295" width="280" height="8" rx="2" fill={AMBER} opacity="0.2" />

      {/* ── Hand / arm reaching to write ── */}
      <path d="M 970 180 Q 1020 160 1050 200 Q 1080 240 1060 280 Q 1050 310 1010 320 Q 980 326 960 300 Q 940 270 970 180 Z"
        fill={STONE} opacity="0.7" />
      {/* Sage register */}
      <path d="M 973 183 Q 1023 163 1053 203 Q 1083 243 1063 283 Q 1053 313 1013 323"
        fill={SAGE} opacity="0.2" />
      {/* Marker in hand */}
      <rect x="1048" y="268" width="8" height="44" rx="4" fill={AMBER} opacity="0.7" transform="rotate(-30, 1052, 290)" />

      {/* Sticky notes — bottom of board */}
      <rect x="850" y="270" width="70" height="60" rx="2" fill={AMBER} opacity="0.5" />
      <rect x="928" y="270" width="70" height="60" rx="2" fill={SAGE} opacity="0.5" />
      {[0, 1].map(i => ([
        <rect key={`s${i}a`} x={856 + i * 78} y={286} width={52} height="5" rx="1" fill={STONE} opacity="0.25" />,
        <rect key={`s${i}b`} x={856 + i * 78} y={298} width={44} height="5" rx="1" fill={STONE} opacity="0.2" />,
        <rect key={`s${i}c`} x={856 + i * 78} y={310} width={48} height="5" rx="1" fill={STONE} opacity="0.18" />,
      ]))}

      {/* Dot texture outside board */}
      <rect x="0" y="360" width="1200" height="60" fill="url(#desk-dots)" opacity="0.06" />

      {/* Left amber rule */}
      <rect x="0" y="0" width="4" height="420" fill={AMBER} opacity="0.5" />
    </svg>
  )
}

// Scene B: Cycling — sage + stone, outdoor motion, horizon
export function DeShawnScene_B({ style }: SceneProps) {
  return (
    <svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
      <defs>
        <pattern id="deshawn-sky" patternUnits="userSpaceOnUse" width="24" height="24">
          <circle cx="12" cy="12" r="0.8" fill={CREAM} />
        </pattern>
      </defs>

      {/* Deep outdoor background */}
      <rect width="1200" height="420" fill="#080E0A" />

      {/* Sky */}
      <rect width="1200" height="270" fill="#0A1810" />
      <rect width="1200" height="270" fill="url(#deshawn-sky)" opacity="0.08" />

      {/* Amber dawn/dusk on horizon */}
      <ellipse cx="600" cy="270" rx="800" ry="80" fill={AMBER} opacity="0.12" />
      <ellipse cx="600" cy="270" rx="400" ry="40" fill={AMBER} opacity="0.1" />

      {/* Horizon line */}
      <rect x="0" y="268" width="1200" height="2" fill={AMBER} opacity="0.3" />

      {/* Ground / road */}
      <rect x="0" y="270" width="1200" height="150" fill={SAGE} opacity="0.08" />

      {/* Road — perspective lines converging */}
      <polygon points="540,270 660,270 1200,420 0,420" fill={STONE} opacity="0.5" />
      <polygon points="564,270 636,270 900,420 300,420" fill={STONE} opacity="0.3" />
      {/* Road center line */}
      {[0, 1, 2, 3, 4, 5, 6].map(i => (
        <rect key={i} x={592 - i * 20} y={272 + i * 22} width={16 + i * 10} height={10 + i * 2} rx="1"
          fill={AMBER} opacity={0.25 - i * 0.02} />
      ))}

      {/* Distant hills */}
      <ellipse cx="200" cy="270" rx="300" ry="80" fill={SAGE} opacity="0.15" />
      <ellipse cx="900" cy="268" rx="350" ry="70" fill={SAGE} opacity="0.12" />

      {/* ── Cyclist — stone silhouette, center ── */}
      {/* Sage register offset */}
      <g transform="translate(4, 5)" opacity="0.3">
        {/* Wheel back */}
        <circle cx="490" cy="300" r="58" fill="none" stroke={SAGE} strokeWidth="8" />
        {/* Wheel front */}
        <circle cx="620" cy="300" r="58" fill="none" stroke={SAGE} strokeWidth="8" />
        {/* Frame */}
        <polygon points="490,300 555,220 620,300 555,300 490,300" fill={SAGE} opacity="0.6" />
      </g>
      {/* Stone primary */}
      {/* Back wheel */}
      <circle cx="490" cy="300" r="58" fill="none" stroke={STONE} strokeWidth="9" />
      <circle cx="490" cy="300" r="10" fill={STONE} />
      {[0, 60, 120, 180, 240, 300].map(angle => (
        <line key={angle}
          x1={490 + 10 * Math.cos(angle * Math.PI / 180)}
          y1={300 + 10 * Math.sin(angle * Math.PI / 180)}
          x2={490 + 54 * Math.cos(angle * Math.PI / 180)}
          y2={300 + 54 * Math.sin(angle * Math.PI / 180)}
          stroke={STONE} strokeWidth="2" opacity="0.7"
        />
      ))}
      {/* Front wheel */}
      <circle cx="630" cy="300" r="58" fill="none" stroke={STONE} strokeWidth="9" />
      <circle cx="630" cy="300" r="10" fill={STONE} />
      {[30, 90, 150, 210, 270, 330].map(angle => (
        <line key={angle}
          x1={630 + 10 * Math.cos(angle * Math.PI / 180)}
          y1={300 + 10 * Math.sin(angle * Math.PI / 180)}
          x2={630 + 54 * Math.cos(angle * Math.PI / 180)}
          y2={300 + 54 * Math.sin(angle * Math.PI / 180)}
          stroke={STONE} strokeWidth="2" opacity="0.7"
        />
      ))}
      {/* Bike frame */}
      <polygon points="490,300 558,218 630,300 558,300 490,300" fill={STONE} opacity="0.8" />
      {/* Handlebars */}
      <path d="M 630 300 Q 660 255 650 240" stroke={STONE} strokeWidth="7" fill="none" strokeLinecap="round" />
      <line x1="640" y1="238" x2="662" y2="242" stroke={STONE} strokeWidth="5" strokeLinecap="round" />
      {/* Seat */}
      <path d="M 558 218 Q 548 200 530 196" stroke={STONE} strokeWidth="6" fill="none" strokeLinecap="round" />
      <line x1="520" y1="194" x2="542" y2="197" stroke={STONE} strokeWidth="5" strokeLinecap="round" />
      {/* Rider */}
      <ellipse cx="556" cy="188" rx="20" ry="24" fill={STONE} />
      <path d="M 556 210 Q 590 222 640 240" stroke={STONE} strokeWidth="12" fill="none" strokeLinecap="round" />
      {/* Amber accent on rider */}
      <ellipse cx="556" cy="188" rx="10" ry="12" fill={AMBER} opacity="0.15" />

      {/* Motion blur lines — speed */}
      {[180, 200, 220, 240, 260].map((y, i) => (
        <line key={y} x1={0} y1={y} x2={380 - i * 30} y2={y}
          stroke={SAGE} strokeWidth="1.5" opacity={0.12 - i * 0.01} />
      ))}

      {/* Amber bottom accent */}
      <rect x="0" y="417" width="1200" height="3" fill={AMBER} opacity="0.45" />
    </svg>
  )
}

// ─── SOFIA REYES ──────────────────────────────────────────────────────────
// Scene A: Restaurant kitchen — amber dominant, warm, organized chaos
export function SofiaScene_A({ style }: SceneProps) {
  return (
    <svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
      <defs>
        <pattern id="sofia-steam" patternUnits="userSpaceOnUse" width="20" height="30">
          <path d="M 10 30 Q 6 20 10 10 Q 14 0 10 -5" fill="none" stroke={CREAM} strokeWidth="1.2" opacity="0.2" />
        </pattern>
      </defs>

      <rect width="1200" height="420" fill="#110A06" />
      {/* Amber kitchen glow */}
      <ellipse cx="400" cy="150" rx="600" ry="280" fill={AMBER} opacity="0.12" />
      <ellipse cx="900" cy="300" rx="400" ry="200" fill={SAGE} opacity="0.07" />

      {/* ── Counter / prep surface ── */}
      <rect x="0" y="288" width="1200" height="132" fill={AMBER} opacity="0.15" />
      <rect x="0" y="288" width="1200" height="10" fill={AMBER} opacity="0.5" />

      {/* ── Stove / burners — left center ── */}
      <rect x="60" y="188" width="340" height="200" rx="4" fill={STONE} opacity="0.8" />
      <rect x="60" y="188" width="340" height="200" rx="4" fill="none" stroke={AMBER} strokeWidth="2" opacity="0.3" />
      {/* Burners */}
      {[[140, 230], [280, 230], [140, 310], [280, 310]].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="38" fill="none" stroke={STONE} strokeWidth="6" />
          <circle cx={cx} cy={cy} r="28" fill="none" stroke={STONE} strokeWidth="3" />
          <circle cx={cx} cy={cy} r="14" fill={STONE} />
          {/* Flame — amber rings for hot burners */}
          {(i === 0 || i === 3) && (
            <>
              <circle cx={cx} cy={cy} r="42" fill={AMBER} opacity="0.12" />
              <circle cx={cx} cy={cy} r="48" fill={AMBER} opacity="0.06" />
            </>
          )}
        </g>
      ))}

      {/* ── Pot on front-left burner ── */}
      <ellipse cx="140" cy="198" rx="48" ry="16" fill={STONE} opacity="0.9" />
      <rect x="96" y="148" width="88" height="52" rx="4" fill={STONE} opacity="0.85" />
      <ellipse cx="140" cy="148" rx="46" ry="14" fill={STONE} opacity="0.7" />
      {/* Pot handles */}
      <rect x="84" y="162" width="14" height="10" rx="3" fill={STONE} opacity="0.8" />
      <rect x="182" y="162" width="14" height="10" rx="3" fill={STONE} opacity="0.8" />
      {/* Steam from pot */}
      <rect x="110" y="100" width="60" height="50" fill="url(#sofia-steam)" opacity="0.8" />

      {/* ── Pan on back-right burner ── */}
      <ellipse cx="280" cy="224" rx="38" ry="12" fill={AMBER} opacity="0.55" />
      <rect x="248" y="194" width="64" height="32" rx="4" fill={AMBER} opacity="0.5" />
      {/* Pan handle */}
      <rect x="308" y="204" width="50" height="8" rx="4" fill={AMBER} opacity="0.4" />

      {/* ── Mise en place — right side ── */}
      {/* Cutting board */}
      <rect x="450" y="248" width="220" height="40" rx="3" fill={AMBER} opacity="0.4" />
      <rect x="450" y="248" width="220" height="40" rx="3" fill="none" stroke={AMBER} strokeWidth="1.5" opacity="0.5" />
      {/* Knife */}
      <rect x="510" y="240" width="4" height="56" rx="2" fill={CREAM} opacity="0.65" transform="rotate(8, 512, 268)" />
      <rect x="510" y="240" width="4" height="14" rx="1" fill={STONE} opacity="0.7" transform="rotate(8, 512, 247)" />

      {/* Herb/vegetable groupings — sage circles */}
      <ellipse cx="490" cy="262" rx="18" ry="12" fill={SAGE} opacity="0.7" />
      <ellipse cx="520" cy="266" rx="14" ry="10" fill={SAGE} opacity="0.6" />
      <ellipse cx="548" cy="260" rx="16" ry="11" fill={SAGE} opacity="0.65" />

      {/* Bowls — mise en place */}
      {[[700, 268, 50, 20], [780, 272, 44, 18], [852, 266, 52, 22]].map(([cx, cy, rx, ry], i) => (
        <g key={i}>
          <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={CREAM} opacity="0.7" />
          <ellipse cx={cx} cy={cy - 4} rx={rx - 4} ry={ry - 4} fill={[AMBER, SAGE, CREAM][i]} opacity="0.5" />
        </g>
      ))}

      {/* ── Shelving above — pots and ingredients ── */}
      <rect x="0" y="0" width="1200" height="8" fill={AMBER} opacity="0.3" />
      <rect x="0" y="80" width="1200" height="8" fill={STONE} opacity="0.5" />
      {/* Hanging pots */}
      {[900, 980, 1060, 1140].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="8" x2={x} y2="62" stroke={STONE} strokeWidth="3" opacity="0.6" />
          <ellipse cx={x} cy="72" rx="28" ry="10" fill={STONE} opacity="0.7" />
          <rect x={x - 26} y="44" width="52" height="28" rx="3" fill={STONE} opacity="0.65" />
        </g>
      ))}

      {/* Amber top rule */}
      <rect x="0" y="0" width="1200" height="3" fill={AMBER} opacity="0.6" />
    </svg>
  )
}

// Scene B: Agency team — collaborative, stone + amber, multiple figures
export function SofiaScene_B({ style }: SceneProps) {
  // Each figure: [cx, color, accent]
  const figures = [
    [220, AMBER, SAGE],
    [380, SAGE,  AMBER],
    [540, CREAM, SAGE],
    [700, SAGE,  AMBER],
    [860, AMBER, SAGE],
    [1020, CREAM, AMBER],
  ] as const

  return (
    <svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
      <defs>
        <pattern id="sofia-dots" patternUnits="userSpaceOnUse" width="14" height="14">
          <circle cx="7" cy="7" r="2.2" fill={STONE} />
        </pattern>
      </defs>

      <rect width="1200" height="420" fill={STONE} />

      {/* Amber ambient — warm meeting room */}
      <ellipse cx="600" cy="180" rx="700" ry="280" fill={AMBER} opacity="0.08" />
      <ellipse cx="200" cy="380" rx="350" ry="140" fill={SAGE} opacity="0.08" />

      {/* ── Conference table — long, centered ── */}
      {/* Sage register */}
      <ellipse cx="604" cy="334" rx="504" ry="36" fill={SAGE} opacity="0.25" />
      {/* Amber primary table */}
      <ellipse cx="600" cy="328" rx="500" ry="34" fill={AMBER} opacity="0.35" />
      <rect x="102" y="294" width="996" height="36" rx="4" fill={AMBER} opacity="0.3" />
      {/* Table edge shadow */}
      <rect x="102" y="328" width="996" height="8" rx="2" fill={STONE} opacity="0.4" />

      {/* Papers / laptops on table */}
      {[180, 350, 520, 680, 840, 1000].map((x, i) => (
        <g key={i}>
          {i % 2 === 0
            ? <rect x={x} y={278} width={88} height={60} rx="3" fill={CREAM} opacity="0.55" />
            : <rect x={x} y={280} width={80} height={40} rx="6" fill={STONE} opacity="0.5" />
          }
        </g>
      ))}

      {/* ── Figures around table ── */}
      {figures.map(([cx, fill, accent], i) => (
        <g key={i}>
          {/* Sage register offset */}
          <g transform="translate(3,4)">
            <ellipse cx={cx} cy={246} rx={22} ry={26} fill={SAGE} opacity="0.25" />
            <rect x={cx - 30} y={268} width={60} height={30} rx="4" fill={SAGE} opacity="0.2" />
          </g>
          {/* Head */}
          <ellipse cx={cx} cy={246} rx={22} ry={26} fill={fill} opacity={0.85} />
          {/* Body */}
          <rect x={cx - 30} y={268} width={60} height={30} rx="4" fill={fill} opacity={0.6} />
          {/* Accent mark */}
          <ellipse cx={cx} cy={246} rx={10} ry={12} fill={accent} opacity="0.2" />
        </g>
      ))}

      {/* Speech / idea marks above the group */}
      <circle cx="380" cy="178" r="24" fill="none" stroke={AMBER} strokeWidth="2" opacity="0.3" />
      <circle cx="700" cy="165" r="18" fill="none" stroke={SAGE} strokeWidth="2" opacity="0.3" />
      <circle cx="860" cy="172" r="20" fill="none" stroke={CREAM} strokeWidth="2" opacity="0.25" />
      {/* Idea lines */}
      {[380, 700, 860].map(cx => (
        <line key={cx} x1={cx} y1={cx === 380 ? 202 : cx === 700 ? 183 : 192}
          x2={cx} y2={220} stroke={CREAM} strokeWidth="1.5" opacity="0.2" strokeDasharray="3,3" />
      ))}

      {/* Dot texture — depth on floor */}
      <rect x="0" y="360" width="1200" height="60" fill="url(#sofia-dots)" opacity="0.07" />

      {/* Amber right rule */}
      <rect x="1196" y="0" width="4" height="420" fill={AMBER} opacity="0.5" />
    </svg>
  )
}

// ─── EXPORT MAP ────────────────────────────────────────────────────────────
export const SCENE_COMPONENTS: Record<
  string,
  [React.ComponentType<SceneProps>, React.ComponentType<SceneProps>]
> = {
  'bri-callahan':   [BriScene_A,    BriScene_B],
  'marcus-reid':    [MarcusScene_A, MarcusScene_B],
  'priya-menon':    [PriyaScene_A,  PriyaScene_B],
  'deshawn-okafor': [DeShawnScene_A,DeShawnScene_B],
  'sofia-reyes':    [SofiaScene_A,  SofiaScene_B],
}
