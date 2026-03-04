// Mid-article scene illustrations — editorial environment shots
// Each champion gets 2 scenes: one at Q4, one at Q7.
// Every scene uses a distinct risograph variation:
//   different ink emphasis, pattern type, and registration offset.
// viewBox 1200×420 — wide cinematic crop, like a magazine spread.

import { ComponentType } from 'react'

type SceneProps = { style?: React.CSSProperties }

const STONE = '#1A1310'
const AMBER = '#C4722A'
const SAGE  = '#7BAE8A'
const CREAM = '#F6F1E9'

// ─── Lucy Hoyle (Carta) ───────────────────────────────────────────────────────

// Scene A: Equity cap table / fintech data on screen — Carta context
function LucyScene_A({ style }: SceneProps) {
  return (
    <svg viewBox="0 0 1200 420" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block', ...style }} aria-hidden="true">
      <defs>
        <pattern id="lsa-grain" patternUnits="userSpaceOnUse" width="4" height="4">
          <circle cx="2" cy="2" r="0.7" fill={STONE} opacity="0.12" />
        </pattern>
      </defs>
      <rect width="1200" height="420" fill={CREAM} />
      <rect width="1200" height="420" fill="url(#lsa-grain)" />

      {/* Monitor frame */}
      <rect x="380" y="40" width="440" height="300" rx="8" fill={SAGE} opacity="0.4" transform="translate(6,7)" />
      <rect x="374" y="33" width="440" height="300" rx="8" fill={STONE} />
      <rect x="384" y="43" width="420" height="280" rx="4" fill="#0D1A12" />

      {/* Screen: cap table spreadsheet */}
      <rect x="394" y="53" width="400" height="20" fill="#1A3A24" />
      <rect x="398" y="57" width="60" height="12" rx="2" fill={SAGE} opacity="0.6" />
      <rect x="468" y="57" width="80" height="12" rx="2" fill={SAGE} opacity="0.4" />
      <rect x="558" y="57" width="70" height="12" rx="2" fill={SAGE} opacity="0.4" />
      <rect x="638" y="57" width="80" height="12" rx="2" fill={AMBER} opacity="0.5" />
      {/* Rows */}
      {[0,1,2,3,4,5,6,7,8].map(i => (
        <g key={i}>
          <rect x="394" y={78 + i*22} width="400" height="20" fill={i % 2 === 0 ? '#142A1A' : '#0D1A12'} />
          <rect x="398" y={82 + i*22} width="55" height="10" rx="1" fill={CREAM} opacity="0.15" />
          <rect x="468" y={82 + i*22} width="70" height="10" rx="1" fill={AMBER} opacity={0.15 + (i*0.03)} />
          <rect x="638" y={82 + i*22} width="60" height="10" rx="1" fill={SAGE} opacity="0.2" />
        </g>
      ))}
      {/* Amber highlighted row */}
      <rect x="394" y="166" width="400" height="20" fill={AMBER} opacity="0.2" />
      <rect x="398" y="170" width="55" height="10" rx="1" fill={AMBER} opacity="0.6" />

      {/* Screen: equity donut chart right side */}
      <circle cx="740" cy="190" r="55" stroke={SAGE} strokeWidth="18" fill="none" opacity="0.5" />
      <path d="M 740 135 A 55 55 0 0 1 795 190" stroke={AMBER} strokeWidth="18" fill="none" />
      <path d="M 740 135 A 55 55 0 0 0 685 190" stroke={CREAM} strokeWidth="18" fill="none" opacity="0.2" />

      {/* Monitor stand */}
      <rect x="574" y="333" width="52" height="20" rx="3" fill={STONE} />
      <rect x="540" y="353" width="120" height="10" rx="3" fill={STONE} />

      {/* Desk surface */}
      <rect x="0" y="360" width="1200" height="60" fill={STONE} opacity="0.08" />
      <rect x="0" y="360" width="1200" height="3" fill={AMBER} opacity="0.3" />

      {/* Coffee mug left */}
      <rect x="200" y="320" width="48" height="55" rx="6" fill={AMBER} opacity="0.5" transform="translate(4,5)" />
      <rect x="196" y="315" width="48" height="55" rx="6" fill={AMBER} />
      <rect x="244" y="332" width="14" height="20" rx="7" fill="none" stroke={AMBER} strokeWidth="3" />
      <rect x="200" y="315" width="48" height="12" rx="3" fill={STONE} opacity="0.2" />

      {/* Notebook */}
      <rect x="820" y="305" width="160" height="70" rx="4" fill={SAGE} opacity="0.4" transform="translate(4,5)" />
      <rect x="816" y="300" width="160" height="70" rx="4" fill="#4A8C5A" />
      <rect x="826" y="312" width="130" height="8" rx="1" fill={CREAM} opacity="0.3" />
      <rect x="826" y="326" width="110" height="8" rx="1" fill={CREAM} opacity="0.3" />
      <rect x="826" y="340" width="120" height="8" rx="1" fill={CREAM} opacity="0.3" />
      <rect x="816" y="300" width="8" height="70" rx="2" fill={SAGE} opacity="0.6" />

      {/* Amber bottom rule */}
      <rect x="0" y="414" width="1200" height="6" fill={AMBER} opacity="0.6" />
    </svg>
  )
}

// Scene B: Research system — policy documents, keyword tracking, dual monitors
function LucyScene_B({ style }: SceneProps) {
  return (
    <svg viewBox="0 0 1200 420" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block', ...style }} aria-hidden="true">
      <defs>
        <pattern id="lsb-dots" patternUnits="userSpaceOnUse" width="10" height="10">
          <circle cx="5" cy="5" r="1.5" fill={AMBER} opacity="0.18" />
        </pattern>
      </defs>
      <rect width="1200" height="420" fill={STONE} />
      <rect width="1200" height="420" fill="url(#lsb-dots)" />

      {/* Two monitors side by side */}
      {/* Left monitor — keyword tracking */}
      <rect x="160" y="40" width="380" height="290" rx="8" fill={SAGE} opacity="0.3" transform="translate(6,7)" />
      <rect x="154" y="33" width="380" height="290" rx="8" fill="#2A2420" />
      <rect x="164" y="43" width="360" height="270" rx="4" fill="#0D0B08" />

      {/* Keyword trend graph */}
      <polyline points="174,270 214,230 254,245 294,180 334,200 374,155 414,170 454,130 494,145"
        stroke={SAGE} strokeWidth="2.5" fill="none" />
      <polyline points="174,270 214,230 254,245 294,180 334,200 374,155 414,170 454,130 494,145"
        stroke={AMBER} strokeWidth="1" fill="none" opacity="0.5" transform="translate(3,4)" />
      {/* Axis */}
      <line x1="174" y1="80" x2="174" y2="290" stroke={CREAM} strokeWidth="0.8" opacity="0.2" />
      <line x1="174" y1="290" x2="514" y2="290" stroke={CREAM} strokeWidth="0.8" opacity="0.2" />
      {/* X-axis labels */}
      {['Jan','Mar','May','Jul','Sep'].map((m, i) => (
        <text key={m} x={182 + i*80} y="306" fontSize="12" fill={CREAM} opacity="0.35" fontFamily="monospace">{m}</text>
      ))}

      {/* Right monitor — policy document tracker */}
      <rect x="660" y="40" width="380" height="290" rx="8" fill={AMBER} opacity="0.3" transform="translate(6,7)" />
      <rect x="654" y="33" width="380" height="290" rx="8" fill="#2A2420" />
      <rect x="664" y="43" width="360" height="270" rx="4" fill="#0D0B08" />

      {/* Policy document rows */}
      <rect x="674" y="55" width="340" height="18" fill="#1A1208" />
      <rect x="678" y="59" width="120" height="10" rx="1" fill={AMBER} opacity="0.5" />
      <rect x="808" y="59" width="60" height="10" rx="1" fill={SAGE} opacity="0.4" />
      <rect x="878" y="59" width="80" height="10" rx="1" fill={CREAM} opacity="0.2" />
      {[0,1,2,3,4,5,6,7,8,9].map(i => (
        <g key={i}>
          <rect x="674" y={78 + i*22} width="340" height="20" fill={i % 2 === 0 ? '#120F08' : '#0D0B08'} />
          <rect x="678" y={83 + i*22} width="115" height="8" rx="1" fill={CREAM} opacity="0.12" />
          <rect x="808" y={83 + i*22} width="55" height="8" rx="1" fill={i < 4 ? AMBER : SAGE} opacity="0.25" />
          <circle cx="970" cy={87 + i*22} r="5" fill={i < 3 ? '#E85A40' : i < 6 ? AMBER : SAGE} opacity="0.6" />
        </g>
      ))}

      {/* Desk */}
      <rect x="0" y="358" width="1200" height="62" fill="#1A1208" />
      <rect x="0" y="358" width="1200" height="3" fill={AMBER} opacity="0.4" />

      {/* Amber rule */}
      <rect x="0" y="414" width="1200" height="6" fill={AMBER} opacity="0.6" />
    </svg>
  )
}

// ─── Connor Beaulieu (LegalZoom) ─────────────────────────────────────────────

// Scene A: Law books + workflow builder — regulated content context
function ConnorScene_A({ style }: SceneProps) {
  return (
    <svg viewBox="0 0 1200 420" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block', ...style }} aria-hidden="true">
      <defs>
        <pattern id="csa-grid" patternUnits="userSpaceOnUse" width="30" height="30">
          <line x1="0" y1="0" x2="30" y2="0" stroke={SAGE} strokeWidth="0.4" opacity="0.2" />
          <line x1="0" y1="0" x2="0" y2="30" stroke={SAGE} strokeWidth="0.4" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="1200" height="420" fill={CREAM} />
      <rect width="1200" height="420" fill="url(#csa-grid)" />

      {/* Bookshelf — law books */}
      <rect x="80" y="60" width="420" height="310" rx="4" fill={STONE} opacity="0.08" />
      <rect x="80" y="60" width="420" height="4" fill={STONE} opacity="0.2" />
      {/* Shelf lines */}
      <line x1="80" y1="180" x2="500" y2="180" stroke={STONE} strokeWidth="6" opacity="0.12" />
      <line x1="80" y1="300" x2="500" y2="300" stroke={STONE} strokeWidth="6" opacity="0.12" />

      {/* Books row 1 */}
      {[
        {x:88,w:28,h:110,fill:STONE},
        {x:118,w:20,h:100,fill:'#4A2A0A'},
        {x:140,w:32,h:115,fill:SAGE},
        {x:174,w:22,h:105,fill:AMBER},
        {x:198,w:28,h:112,fill:'#2A3D2A'},
        {x:228,w:18,h:98,fill:STONE},
        {x:248,w:30,h:110,fill:'#5A3A1A'},
        {x:280,w:24,h:115,fill:SAGE},
        {x:306,w:20,h:100,fill:AMBER},
        {x:328,w:28,h:108,fill:STONE},
        {x:358,w:18,h:95,fill:'#3A2A4A'},
        {x:378,w:26,h:112,fill:SAGE},
        {x:406,w:30,h:118,fill:AMBER},
        {x:438,w:22,h:105,fill:STONE},
        {x:462,w:28,h:110,fill:'#4A1A0A'},
      ].map((b,i) => (
        <g key={i}>
          <rect x={b.x+3} y={176-b.h+3} width={b.w} height={b.h} rx="1" fill={b.fill} opacity="0.4" />
          <rect x={b.x} y={176-b.h} width={b.w} height={b.h} rx="1" fill={b.fill} />
          <rect x={b.x+2} y={176-b.h+4} width={b.w-4} height="8" rx="0" fill={CREAM} opacity="0.1" />
        </g>
      ))}

      {/* Books row 2 */}
      {[
        {x:88,w:32,h:105,fill:'#2A3D2A'},
        {x:122,w:24,h:115,fill:AMBER},
        {x:148,w:28,h:100,fill:STONE},
        {x:178,w:20,h:110,fill:SAGE},
        {x:200,w:30,h:108,fill:'#4A2A0A'},
        {x:232,w:26,h:98,fill:STONE},
        {x:260,w:18,h:112,fill:AMBER},
        {x:280,w:32,h:105,fill:SAGE},
        {x:314,w:22,h:115,fill:STONE},
        {x:338,w:28,h:100,fill:'#3A1A2A'},
        {x:368,w:24,h:108,fill:AMBER},
        {x:394,w:18,h:96,fill:SAGE},
        {x:414,w:30,h:112,fill:STONE},
        {x:446,w:22,h:105,fill:AMBER},
        {x:470,w:20,h:115,fill:SAGE},
      ].map((b,i) => (
        <g key={i}>
          <rect x={b.x+3} y={296-b.h+3} width={b.w} height={b.h} rx="1" fill={b.fill} opacity="0.4" />
          <rect x={b.x} y={296-b.h} width={b.w} height={b.h} rx="1" fill={b.fill} />
        </g>
      ))}

      {/* Workflow diagram — right side */}
      <rect x="620" y="60" width="500" height="310" rx="6" fill={STONE} opacity="0.06" />
      {/* Nodes and arrows */}
      {[
        {x:650,y:120,label:'Monitor Reddit'},
        {x:820,y:120,label:'Auto-route'},
        {x:990,y:120,label:'AI Draft'},
        {x:820,y:240,label:'Human Review'},
        {x:990,y:240,label:'Publish'},
      ].map((n,i) => (
        <g key={i}>
          <rect x={n.x-3} y={n.y-3} width="136" height="46" rx="6" fill={SAGE} opacity="0.3" />
          <rect x={n.x} y={n.y} width="130" height="42" rx="6" fill={STONE} />
          <text x={n.x+65} y={n.y+26} textAnchor="middle" fontSize="13" fill={CREAM}
            opacity="0.8" fontFamily="monospace">{n.label}</text>
        </g>
      ))}
      {/* Arrows */}
      <line x1="780" y1="141" x2="820" y2="141" stroke={AMBER} strokeWidth="1.5" markerEnd="url(#arrow)" opacity="0.7" />
      <line x1="950" y1="141" x2="990" y2="141" stroke={AMBER} strokeWidth="1.5" opacity="0.7" />
      <line x1="885" y1="162" x2="885" y2="240" stroke={AMBER} strokeWidth="1.5" opacity="0.7" />
      <line x1="950" y1="261" x2="990" y2="261" stroke={AMBER} strokeWidth="1.5" opacity="0.7" />
      {/* Timer label */}
      <rect x="646" y="194" width="138" height="26" rx="4" fill={AMBER} opacity="0.15" />
      <text x="715" y="212" textAnchor="middle" fontSize="12" fill={AMBER}
        fontFamily="monospace" opacity="0.9">48h → 30 min</text>

      {/* Desk */}
      <rect x="0" y="370" width="1200" height="50" fill={STONE} opacity="0.06" />
      <rect x="0" y="370" width="1200" height="2" fill={AMBER} opacity="0.3" />
      <rect x="0" y="414" width="1200" height="6" fill={AMBER} opacity="0.6" />
    </svg>
  )
}

// Scene B: Reddit thread interface — community management, structured responses
function ConnorScene_B({ style }: SceneProps) {
  return (
    <svg viewBox="0 0 1200 420" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block', ...style }} aria-hidden="true">
      <defs>
        <pattern id="csb-dots" patternUnits="userSpaceOnUse" width="8" height="8">
          <circle cx="4" cy="4" r="1.2" fill={AMBER} opacity="0.2" />
        </pattern>
      </defs>
      <rect width="1200" height="420" fill={STONE} />
      <rect width="1200" height="420" fill="url(#csb-dots)" />

      {/* Browser / thread container */}
      <rect x="80" y="40" width="1040" height="330" rx="8" fill="#1A1208" />
      <rect x="80" y="40" width="1040" height="36" rx="8" fill="#2A2010" />
      {/* Browser dots */}
      <circle cx="104" cy="58" r="6" fill="#E85A40" opacity="0.7" />
      <circle cx="124" cy="58" r="6" fill={AMBER} opacity="0.7" />
      <circle cx="144" cy="58" r="6" fill={SAGE} opacity="0.7" />
      {/* URL bar */}
      <rect x="180" y="47" width="680" height="22" rx="11" fill={STONE} opacity="0.5" />
      <text x="300" y="62" fontSize="11" fill={CREAM} opacity="0.4" fontFamily="monospace">reddit.com/r/legaladvice</text>

      {/* Thread posts */}
      {[
        {y:95, upvotes:'2.4k', title:'Starting an LLC in California — where do I even begin?', indent:0, isAnswer:false},
        {y:155, upvotes:'891', title:'LegalZoom can walk you through the exact steps — the California registered agent requirement is what trips most people up first...', indent:40, isAnswer:true},
        {y:225, upvotes:'445', title:'Trademark question: can I use a name if it\'s not registered but someone is using it?', indent:0, isAnswer:false},
        {y:285, upvotes:'312', title:'Common law trademark rights exist even without registration. Here\'s what matters for your situation...', indent:40, isAnswer:true},
      ].map((p,i) => (
        <g key={i}>
          <rect x={100+p.indent} y={p.y} width={p.isAnswer ? 980-p.indent : 1000-p.indent} height="52"
            rx="4" fill={p.isAnswer ? '#1A2A18' : '#120F0A'} />
          {p.isAnswer && <rect x={100+p.indent} y={p.y} width="3" height="52" fill={SAGE} opacity="0.7" />}
          <circle cx={120+p.indent} cy={p.y+16} r="10" fill={p.isAnswer ? SAGE : '#5A3A1A'} opacity="0.5" />
          <text x={140+p.indent} y={p.y+20} fontSize="10" fill={CREAM} opacity="0.4" fontFamily="monospace">{p.upvotes} pts</text>
          <text x={200+p.indent} y={p.y+20} fontSize="12" fill={CREAM} opacity={p.isAnswer ? 0.85 : 0.6} fontFamily="sans-serif"
            style={{fontSize:'12px'}}>{p.title.slice(0,80)}{p.title.length > 80 ? '...' : ''}</text>
        </g>
      ))}

      <rect x="0" y="414" width="1200" height="6" fill={AMBER} opacity="0.6" />
    </svg>
  )
}

// ─── Vivian Hoang (Webflow) ───────────────────────────────────────────────────

// Scene A: Webflow designer interface — visual web building, content systems
function VivianScene_A({ style }: SceneProps) {
  return (
    <svg viewBox="0 0 1200 420" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block', ...style }} aria-hidden="true">
      <defs>
        <pattern id="vsa-grid" patternUnits="userSpaceOnUse" width="20" height="20">
          <line x1="0" y1="0" x2="20" y2="0" stroke={SAGE} strokeWidth="0.3" opacity="0.25" />
          <line x1="0" y1="0" x2="0" y2="20" stroke={SAGE} strokeWidth="0.3" opacity="0.25" />
        </pattern>
      </defs>
      <rect width="1200" height="420" fill="#EDE5D8" />
      <rect width="1200" height="420" fill="url(#vsa-grid)" />

      {/* Design canvas — main area */}
      <rect x="240" y="30" width="720" height="330" rx="6" fill={STONE} opacity="0.07" />
      <rect x="240" y="30" width="720" height="330" rx="6" stroke={SAGE} strokeWidth="1" fill="none" opacity="0.3" />

      {/* Webflow canvas content — hero mockup */}
      <rect x="260" y="50" width="680" height="120" rx="4" fill={STONE} opacity="0.85" />
      <rect x="280" y="70" width="200" height="18" rx="2" fill={CREAM} opacity="0.2" />
      <rect x="280" y="96" width="320" height="30" rx="2" fill={CREAM} opacity="0.12" />
      {/* Nav mockup */}
      <rect x="260" y="50" width="680" height="28" rx="4" fill={STONE} />
      <circle cx="290" cy="64" r="8" fill={SAGE} opacity="0.7" />
      {[0,1,2,3].map(i => (
        <rect key={i} x={400+i*70} y="58" width="50" height="10" rx="2" fill={CREAM} opacity="0.25" />
      ))}
      <rect x="840" y="55" width="80" height="18" rx="3" fill={AMBER} opacity="0.7" />

      {/* CMS collection preview */}
      <rect x="260" y="182" width="680" height="160" rx="4" fill={CREAM} opacity="0.08" />
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={270+i*225} y="192" width="210" height="140" rx="4" fill={CREAM} opacity="0.12" />
          <rect x={270+i*225} y="192" width="210" height="70" rx="4" fill={SAGE} opacity="0.2 " />
          <rect x={280+i*225} y="272" width="150" height="10" rx="2" fill={STONE} opacity="0.3" />
          <rect x={280+i*225} y="288" width="120" height="8" rx="2" fill={STONE} opacity="0.2" />
        </g>
      ))}

      {/* Left panel — navigator/layers */}
      <rect x="80" y="30" width="150" height="330" rx="4" fill={STONE} opacity="0.07" />
      <rect x="80" y="30" width="150" height="330" rx="4" stroke={SAGE} strokeWidth="0.5" fill="none" opacity="0.3" />
      {['Section', 'Container', 'Heading', 'Paragraph', 'Button', 'Image', 'Collection'].map((l,i) => (
        <g key={l}>
          <rect x="90" y={50+i*40} width="130" height="28" rx="3" fill={i===2 ? AMBER : STONE} opacity={i===2 ? 0.2 : 0.08} />
          <text x="100" y={69+i*40} fontSize="11" fill={i===2 ? AMBER : STONE} opacity="0.7" fontFamily="monospace">{l}</text>
        </g>
      ))}

      {/* Right panel — style properties */}
      <rect x="970" y="30" width="150" height="330" rx="4" fill={STONE} opacity="0.07" />
      <rect x="970" y="30" width="150" height="330" rx="4" stroke={SAGE} strokeWidth="0.5" fill="none" opacity="0.3" />
      {['Font', 'Size', 'Color', 'Margin', 'Padding', 'Display', 'Align'].map((p,i) => (
        <g key={p}>
          <text x="985" y={54+i*42} fontSize="10" fill={STONE} opacity="0.4" fontFamily="monospace">{p}</text>
          <rect x="985" y={58+i*42} width="120" height="18" rx="2" fill={STONE} opacity="0.08" />
          <rect x="985" y={58+i*42} width={40+i*10} height="18" rx="2" fill={SAGE} opacity="0.15" />
        </g>
      ))}

      <rect x="0" y="414" width="1200" height="6" fill={AMBER} opacity="0.6" />
    </svg>
  )
}

// Scene B: Analytics dashboard — AI search traffic, organic lift, AI-sourced signups
function VivianScene_B({ style }: SceneProps) {
  return (
    <svg viewBox="0 0 1200 420" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block', ...style }} aria-hidden="true">
      <defs>
        <pattern id="vsb-grain" patternUnits="userSpaceOnUse" width="5" height="5">
          <circle cx="2.5" cy="2.5" r="0.8" fill={AMBER} opacity="0.15" />
        </pattern>
      </defs>
      <rect width="1200" height="420" fill={STONE} />
      <rect width="1200" height="420" fill="url(#vsb-grain)" />

      {/* Stat cards */}
      {[
        {x:80, label:'AI Signups', value:'8%', sub:'↑ from 2% (Oct)', color:SAGE},
        {x:380, label:'Organic Lift', value:'+20%', sub:'within days of refresh', color:AMBER},
        {x:680, label:'Articles/Month', value:'48+', sub:'was 48/year', color:SAGE},
        {x:980, label:'AI Conversion', value:'6×', sub:'vs non-branded SEO', color:AMBER},
      ].map(card => (
        <g key={card.label}>
          <rect x={card.x+4} y="44" width="260" height="120" rx="8" fill={card.color} opacity="0.15" />
          <rect x={card.x} y="40" width="260" height="120" rx="8" fill="#1A1208" />
          <rect x={card.x} y="40" width="260" height="4" rx="2" fill={card.color} opacity="0.8" />
          <text x={card.x+20} y="72" fontSize="12" fill={CREAM} opacity="0.45" fontFamily="monospace">{card.label}</text>
          <text x={card.x+20} y="118" fontSize="44" fill={card.color} fontFamily="serif" fontStyle="italic">{card.value}</text>
          <text x={card.x+20} y="146" fontSize="11" fill={CREAM} opacity="0.35" fontFamily="monospace">{card.sub}</text>
        </g>
      ))}

      {/* Traffic trend graph */}
      <rect x="80" y="192" width="1040" height="190" rx="8" fill="#1A1208" />
      <rect x="80" y="192" width="1040" height="4" rx="2" fill={SAGE} opacity="0.6" />
      <text x="100" y="218" fontSize="11" fill={CREAM} opacity="0.4" fontFamily="monospace">Organic Traffic — Monthly (2024–2025)</text>

      {/* Chart */}
      <line x1="110" y1="360" x2="1100" y2="360" stroke={CREAM} strokeWidth="0.5" opacity="0.15" />
      {[0,1,2,3,4].map(i => (
        <line key={i} x1="110" y1={230+i*26} x2="1100" y2={230+i*26}
          stroke={CREAM} strokeWidth="0.3" opacity="0.1" />
      ))}

      {/* AI traffic area */}
      <path d="M 110 355 Q 250 350 350 345 Q 500 340 600 320 Q 700 295 800 260 Q 900 225 1000 205 Q 1050 195 1100 188 L 1100 360 L 110 360 Z"
        fill={AMBER} opacity="0.15" />
      <path d="M 110 355 Q 250 350 350 345 Q 500 340 600 320 Q 700 295 800 260 Q 900 225 1000 205 Q 1050 195 1100 188"
        stroke={AMBER} strokeWidth="2.5" fill="none" />

      {/* Organic SEO line */}
      <path d="M 110 345 Q 300 340 500 325 Q 650 315 800 290 Q 900 275 1000 260 Q 1050 252 1100 245"
        stroke={SAGE} strokeWidth="2" fill="none" />

      {/* Labels */}
      <circle cx="1090" cy="188" r="4" fill={AMBER} />
      <text x="1070" y="182" fontSize="10" fill={AMBER} opacity="0.8" fontFamily="monospace">AI</text>
      <circle cx="1090" cy="245" r="4" fill={SAGE} />
      <text x="1055" y="240" fontSize="10" fill={SAGE} opacity="0.8" fontFamily="monospace">Organic</text>

      <rect x="0" y="414" width="1200" height="6" fill={AMBER} opacity="0.6" />
    </svg>
  )
}

// ─── Brianna Chapman (Apollo.io) ──────────────────────────────────────────────

// Scene A: Community feed — LinkedIn posts with engagement, connection-first energy
function BriannaScene_A({ style }: SceneProps) {
  return (
    <svg viewBox="0 0 1200 420" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block', ...style }} aria-hidden="true">
      <defs>
        <pattern id="bsa-dots" patternUnits="userSpaceOnUse" width="12" height="12">
          <circle cx="6" cy="6" r="1.5" fill={SAGE} opacity="0.15" />
        </pattern>
      </defs>
      <rect width="1200" height="420" fill={CREAM} />
      <rect width="1200" height="420" fill="url(#bsa-dots)" />

      {/* LinkedIn-style feed posts */}
      {[
        {x:80, y:30, name:'Brianna C.', text:'CONNECTION OVER CONTENT. The posts that land are the ones that start with a real conversation, not a content calendar.', likes:'847', comments:'124', avatar:AMBER},
        {x:640, y:30, name:'Apollo User', text:'Just closed 3 deals this week using the Apollo sequence Brianna helped me build. The community > the tool.', likes:'412', comments:'88', avatar:SAGE},
        {x:80, y:230, name:'Brianna C.', text:'Your community is the best early warning system you have. Before we launched the new feature, we asked the community. They told us exactly what to build.', likes:'1.2k', comments:'203', avatar:AMBER},
        {x:640, y:230, name:'Apollo Community', text:'Monthly AMA this Thursday — bring your toughest outbound questions. Brianna + the team will be there.', likes:'658', comments:'91', avatar:STONE},
      ].map((p,i) => (
        <g key={i}>
          <rect x={p.x+4} y={p.y+4} width="520" height="180" rx="8" fill={SAGE} opacity="0.12" />
          <rect x={p.x} y={p.y} width="520" height="180" rx="8" fill={CREAM} />
          <rect x={p.x} y={p.y} width="520" height="180" rx="8" stroke={SAGE} strokeWidth="0.8" fill="none" opacity="0.3" />
          {/* Avatar */}
          <circle cx={p.x+30} cy={p.y+36} r="18" fill={p.avatar} opacity="0.8" />
          <text x={p.x+56} y={p.y+32} fontSize="12" fill={STONE} opacity="0.7" fontFamily="sans-serif" fontWeight="600">{p.name}</text>
          <text x={p.x+56} y={p.y+48} fontSize="10" fill={STONE} opacity="0.35" fontFamily="monospace">Community Manager · Apollo.io</text>
          {/* Post text */}
          <text x={p.x+20} y={p.y+78} fontSize="11" fill={STONE} opacity="0.6" fontFamily="sans-serif">
            {p.text.slice(0, 70)}
          </text>
          <text x={p.x+20} y={p.y+96} fontSize="11" fill={STONE} opacity="0.6" fontFamily="sans-serif">
            {p.text.slice(70, 140)}
          </text>
          <text x={p.x+20} y={p.y+114} fontSize="11" fill={STONE} opacity="0.6" fontFamily="sans-serif">
            {p.text.slice(140, 200)}
          </text>
          {/* Engagement */}
          <text x={p.x+25} y={p.y+162} fontSize="11" fill={AMBER} opacity="0.8" fontFamily="monospace">♥ {p.likes}</text>
          <text x={p.x+100} y={p.y+162} fontSize="11" fill={STONE} opacity="0.4" fontFamily="monospace">💬 {p.comments}</text>
        </g>
      ))}

      <rect x="0" y="414" width="1200" height="6" fill={AMBER} opacity="0.6" />
    </svg>
  )
}

// Scene B: Apollo.io interface — prospect network, community connections
function BriannaScene_B({ style }: SceneProps) {
  return (
    <svg viewBox="0 0 1200 420" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block', ...style }} aria-hidden="true">
      <defs>
        <pattern id="bsb-grain" patternUnits="userSpaceOnUse" width="4" height="4">
          <circle cx="2" cy="2" r="0.6" fill={AMBER} opacity="0.15" />
        </pattern>
      </defs>
      <rect width="1200" height="420" fill={STONE} />
      <rect width="1200" height="420" fill="url(#bsb-grain)" />

      {/* Network graph — connection nodes */}
      {[
        {cx:600, cy:210, r:22, fill:AMBER, label:'Brianna'},
        {cx:420, cy:120, r:14, fill:SAGE, label:'User A'},
        {cx:520, cy:80, r:12, fill:SAGE, label:'User B'},
        {cx:720, cy:90, r:16, fill:SAGE, label:'User C'},
        {cx:820, cy:150, r:13, fill:SAGE, label:'User D'},
        {cx:780, cy:280, r:15, fill:AMBER, label:'User E', opacity:0.6},
        {cx:640, cy:340, r:11, fill:SAGE, label:'User F'},
        {cx:460, cy:310, r:14, fill:SAGE, label:'User G'},
        {cx:360, cy:220, r:12, fill:AMBER, label:'User H', opacity:0.6},
        {cx:300, cy:140, r:10, fill:SAGE, label:'User I'},
        {cx:880, cy:270, r:12, fill:SAGE, label:'User J'},
        {cx:940, cy:180, r:14, fill:AMBER, label:'User K', opacity:0.5},
      ].map((n,i) => (
        <g key={i}>
          {i > 0 && <line x1="600" y1="210" x2={n.cx} y2={n.cy} stroke={CREAM} strokeWidth="0.8" opacity="0.12" />}
          <circle cx={n.cx} cy={n.cy} r={n.r} fill={n.fill} opacity={(n as any).opacity ?? 0.7} />
          <text x={n.cx} y={n.cy+n.r+14} textAnchor="middle" fontSize="9"
            fill={CREAM} opacity="0.35" fontFamily="monospace">{n.label}</text>
        </g>
      ))}

      {/* Cross-connections between nodes */}
      <line x1="420" y1="120" x2="520" y2="80" stroke={CREAM} strokeWidth="0.5" opacity="0.08" />
      <line x1="720" y1="90" x2="820" y2="150" stroke={CREAM} strokeWidth="0.5" opacity="0.08" />
      <line x1="460" y1="310" x2="640" y2="340" stroke={CREAM} strokeWidth="0.5" opacity="0.08" />

      {/* Apollo.io label */}
      <text x="600" y="210" textAnchor="middle" fontSize="10" fill={STONE}
        fontFamily="monospace" fontWeight="bold"></text>

      {/* Bottom label */}
      <rect x="80" y="370" width="300" height="30" rx="4" fill={AMBER} opacity="0.1" />
      <text x="100" y="390" fontSize="11" fill={AMBER} opacity="0.7" fontFamily="monospace">Community · Apollo.io</text>

      <rect x="0" y="414" width="1200" height="6" fill={AMBER} opacity="0.6" />
    </svg>
  )
}

// ─── Tim Metz (Animalz) ───────────────────────────────────────────────────────

// Scene A: Writer's desk — manuscript, world map, focused workspace
function TimScene_A({ style }: SceneProps) {
  return (
    <svg viewBox="0 0 1200 420" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block', ...style }} aria-hidden="true">
      <defs>
        <pattern id="tsa-lines" patternUnits="userSpaceOnUse" width="1" height="28">
          <line x1="0" y1="0" x2="1" y2="0" stroke={STONE} strokeWidth="0.6" opacity="0.08" />
        </pattern>
      </defs>
      <rect width="1200" height="420" fill="#EAE2D5" />
      <rect width="1200" height="420" fill="url(#tsa-lines)" />

      {/* World map sketch on wall — nomadic reference */}
      <rect x="200" y="20" width="520" height="280" rx="4" fill={STONE} opacity="0.04" />
      <rect x="200" y="20" width="520" height="280" rx="4" stroke={STONE} strokeWidth="1" fill="none" opacity="0.08" />
      {/* Simplified continent outlines */}
      {/* Europe */}
      <path d="M 360 80 Q 380 72 400 78 Q 415 88 410 100 Q 400 108 380 105 Q 362 100 360 80 Z"
        stroke={STONE} strokeWidth="1" fill="none" opacity="0.2" />
      {/* Africa */}
      <path d="M 375 110 Q 395 108 408 118 Q 418 140 415 170 Q 408 188 390 188 Q 372 185 368 165 Q 365 140 375 110 Z"
        stroke={STONE} strokeWidth="1" fill="none" opacity="0.2" />
      {/* Asia */}
      <path d="M 420 70 Q 500 65 540 75 Q 570 88 568 105 Q 555 118 520 120 Q 475 118 448 108 Q 420 96 420 70 Z"
        stroke={STONE} strokeWidth="1" fill="none" opacity="0.2" />
      {/* Americas */}
      <path d="M 270 90 Q 295 85 305 100 Q 310 120 300 155 Q 290 180 280 175 Q 268 165 265 140 Q 260 110 270 90 Z"
        stroke={STONE} strokeWidth="1" fill="none" opacity="0.2" />
      {/* City pins: Xi'an, Amsterdam, Beijing, etc. */}
      {[{cx:530,cy:98},{cx:378,cy:84},{cx:510,cy:82},{cx:395,cy:90},{cx:465,cy:108}].map((p,i) => (
        <g key={i}>
          <circle cx={p.cx} cy={p.cy} r="3" fill={AMBER} opacity="0.6" />
          <circle cx={p.cx} cy={p.cy} r="6" stroke={AMBER} strokeWidth="0.8" fill="none" opacity="0.3" />
        </g>
      ))}

      {/* Open laptop */}
      <rect x="620" y="180" width="420" height="260" rx="8" fill={STONE} opacity="0.07" />
      <rect x="640" y="160" width="380" height="240" rx="8" fill={STONE} opacity="0.7" />
      <rect x="650" y="170" width="360" height="220" rx="6" fill="#0D1810" />
      {/* Screen content — article in progress */}
      <rect x="660" y="182" width="340" height="18" fill="#142210" />
      <rect x="665" y="186" width="220" height="8" rx="1" fill={CREAM} opacity="0.3" />
      {[0,1,2,3,4,5,6,7].map(i => (
        <rect key={i} x="665" y={208+i*20} width={i%3===0 ? 330 : i%2===0 ? 280 : 310} height="8" rx="1"
          fill={CREAM} opacity={i===3 ? 0.4 : 0.18} />
      ))}
      {/* Cursor */}
      <rect x="665" y="368" width="2" height="14" fill={SAGE} opacity="0.8" />

      {/* Desk */}
      <rect x="0" y="355" width="1200" height="65" fill={STONE} opacity="0.07" />
      <rect x="0" y="355" width="1200" height="2" fill={AMBER} opacity="0.3" />

      {/* Coffee */}
      <rect x="160" y="300" width="46" height="58" rx="6" fill={AMBER} opacity="0.4" transform="translate(4,4)" />
      <rect x="156" y="296" width="46" height="58" rx="6" fill={AMBER} />
      <rect x="202" y="315" width="14" height="18" rx="7" fill="none" stroke={AMBER} strokeWidth="2.5" />
      {/* Steam */}
      <path d="M 168 290 Q 172 280 168 270" stroke={AMBER} strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4" />
      <path d="M 178 292 Q 182 278 178 266" stroke={AMBER} strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.3" />

      {/* Notebook */}
      <rect x="110" y="320" width="130" height="80" rx="4" fill={SAGE} opacity="0.5" transform="translate(4,4)" />
      <rect x="106" y="316" width="130" height="80" rx="4" fill={SAGE} />
      <rect x="106" y="316" width="8" height="80" rx="2" fill="#4A8C6A" />
      {[0,1,2,3,4].map(i => (
        <rect key={i} x="122" y={328+i*12} width={80+i*5} height="6" rx="1" fill={CREAM} opacity="0.35" />
      ))}

      <rect x="0" y="414" width="1200" height="6" fill={AMBER} />
    </svg>
  )
}

// Scene B: Podcast studio — microphone, waveform, Animalz pair-writing session
function TimScene_B({ style }: SceneProps) {
  return (
    <svg viewBox="0 0 1200 420" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block', ...style }} aria-hidden="true">
      <defs>
        <pattern id="tsb-dots" patternUnits="userSpaceOnUse" width="10" height="10">
          <circle cx="5" cy="5" r="1.5" fill={AMBER} opacity="0.15" />
        </pattern>
      </defs>
      <rect width="1200" height="420" fill={STONE} />
      <rect width="1200" height="420" fill="url(#tsb-dots)" />

      {/* Microphone */}
      <rect x="178" y="80" width="44" height="70" rx="22" fill={SAGE} opacity="0.35" transform="translate(5,5)" />
      <rect x="173" y="75" width="44" height="70" rx="22" fill={CREAM} opacity="0.9" />
      {/* Mic grille lines */}
      {[0,1,2,3,4].map(i => (
        <line key={i} x1="178" y1={88+i*12} x2="212" y2={88+i*12}
          stroke={STONE} strokeWidth="1" opacity="0.25" />
      ))}
      <rect x="190" y="145" width="10" height="40" rx="2" fill={CREAM} opacity="0.5" />
      <path d="M 160 185 Q 195 210 230 185" stroke={CREAM} strokeWidth="2" fill="none" opacity="0.4" />

      {/* Waveform */}
      {Array.from({length:60}).map((_,i) => {
        const h = 15 + Math.sin(i*0.4+1)*30 + Math.cos(i*0.7)*20
        return (
          <rect key={i} x={300+i*14} y={210-h/2} width="8" height={h} rx="2"
            fill={i%3===0 ? AMBER : SAGE} opacity={0.4+Math.sin(i)*0.3} />
        )
      })}

      {/* Track labels */}
      <text x="300" y="290" fontSize="11" fill={CREAM} opacity="0.3" fontFamily="monospace">The Animalz Content Marketing Podcast</text>
      <rect x="300" y="302" width="840" height="2" fill={SAGE} opacity="0.2" />

      {/* Screen — article draft with AI response */}
      <rect x="700" y="40" width="420" height="280" rx="8" fill="#1A1208" />
      <rect x="700" y="40" width="420" height="30" rx="8" fill="#2A2010" />
      <text x="720" y="60" fontSize="11" fill={CREAM} opacity="0.5" fontFamily="monospace">The Animalz AI Onion — draft v3</text>
      {[
        'Why 95% of AI projects die',
        '─────────────────────────',
        'Most AI initiatives start with the',
        'wrong layer. The outside of the onion',
        '— the interface — is visible. The',
        'center — the strategy — is invisible.',
        '',
        '// AI suggestion:',
        'Consider opening with a specific',
        'failure case before the framework.',
      ].map((line,i) => (
        <text key={i} x="720" y={90+i*18} fontSize={line.startsWith('//') ? 10 : 12}
          fill={line.startsWith('//') ? SAGE : line.startsWith('─') ? AMBER : CREAM}
          opacity={line.startsWith('//') ? 0.7 : 0.6}
          fontFamily="monospace" fontStyle={line.startsWith('//') ? 'italic' : 'normal'}>{line}</text>
      ))}

      <rect x="0" y="414" width="1200" height="6" fill={AMBER} />
    </svg>
  )
}

// ─── Lauren Shufran (Echo North) ─────────────────────────────────────────────

// Scene A: Shakespeare to B2B — books, editorial desk, throughline diagram
function LaurenScene_A({ style }: SceneProps) {
  return (
    <svg viewBox="0 0 1200 420" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block', ...style }} aria-hidden="true">
      <defs>
        <pattern id="lasa-grain" patternUnits="userSpaceOnUse" width="4" height="4">
          <circle cx="2" cy="2" r="0.6" fill={STONE} opacity="0.1" />
        </pattern>
      </defs>
      <rect width="1200" height="420" fill={CREAM} />
      <rect width="1200" height="420" fill="url(#lasa-grain)" />

      {/* Bookshelf — Shakespeare + B2B marketing mix */}
      <rect x="60" y="40" width="480" height="340" rx="4" fill={STONE} opacity="0.05" />
      {/* Shelf lines */}
      <line x1="60" y1="160" x2="540" y2="160" stroke={STONE} strokeWidth="8" opacity="0.1" />
      <line x1="60" y1="280" x2="540" y2="280" stroke={STONE} strokeWidth="8" opacity="0.1" />

      {/* Books row 1 — classic + literary */}
      {[
        {x:68,w:30,h:108,fill:'#4A1A0A',spine:'Complete Works'},
        {x:100,w:18,h:95,fill:STONE,spine:'Sonnets'},
        {x:120,w:26,h:112,fill:'#2A1A4A',spine:'Inter Arma'},
        {x:148,w:22,h:100,fill:SAGE,spine:'Rhetoric'},
        {x:172,w:28,h:108,fill:AMBER,spine:'Narrative'},
        {x:202,w:16,h:90,fill:STONE,spine:''},
        {x:220,w:32,h:115,fill:'#3A2A1A',spine:'The Bard'},
        {x:254,w:20,h:100,fill:SAGE,spine:'Form'},
        {x:276,w:28,h:108,fill:AMBER,spine:'Close Read'},
        {x:306,w:18,h:95,fill:STONE,spine:''},
        {x:326,w:30,h:112,fill:'#1A3A2A',spine:'B2B Copy'},
        {x:358,w:22,h:100,fill:AMBER,spine:'Strategy'},
        {x:382,w:26,h:108,fill:'#2A1A0A',spine:'Content'},
        {x:410,w:20,h:95,fill:SAGE,spine:''},
        {x:432,w:28,h:112,fill:STONE,spine:'Echo North'},
        {x:462,w:18,h:100,fill:AMBER,spine:''},
        {x:482,w:22,h:108,fill:'#4A3A2A',spine:''},
      ].map((b,i) => (
        <g key={i}>
          <rect x={b.x+3} y={156-b.h+3} width={b.w} height={b.h} rx="1" fill={b.fill} opacity="0.4" />
          <rect x={b.x} y={156-b.h} width={b.w} height={b.h} rx="1" fill={b.fill} />
          {b.spine && <text x={b.x+b.w/2} y={156-b.h/2} fontSize="6" fill={CREAM} opacity="0.3"
            textAnchor="middle" dominantBaseline="middle" transform={`rotate(-90, ${b.x+b.w/2}, ${156-b.h/2})`}>{b.spine}</text>}
        </g>
      ))}

      {/* Books row 2 */}
      {[
        {x:68,w:24,h:95,fill:'#2A3D4A'},
        {x:94,w:18,h:108,fill:AMBER},
        {x:114,w:30,h:100,fill:STONE},
        {x:146,w:22,h:112,fill:SAGE},
        {x:170,w:28,h:98,fill:'#3A2A1A'},
        {x:200,w:20,h:105,fill:AMBER},
        {x:222,w:26,h:95,fill:STONE},
        {x:250,w:18,h:108,fill:SAGE},
        {x:270,w:32,h:100,fill:'#4A1A0A'},
        {x:304,w:22,h:112,fill:AMBER},
        {x:328,w:18,h:95,fill:STONE},
        {x:348,w:28,h:105,fill:SAGE},
        {x:378,w:20,h:100,fill:'#2A1A4A'},
        {x:400,w:26,h:108,fill:AMBER},
        {x:428,w:18,h:95,fill:STONE},
        {x:448,w:30,h:112,fill:SAGE},
        {x:480,w:22,h:100,fill:AMBER},
      ].map((b,i) => (
        <rect key={i} x={b.x} y={276-b.h} width={b.w} height={b.h} rx="1" fill={b.fill} />
      ))}

      {/* Throughline diagram — right side */}
      <rect x="620" y="40" width="520" height="340" rx="6" fill={STONE} opacity="0.05" />

      {/* Echo North methodology */}
      <text x="640" y="75" fontSize="13" fill={AMBER} fontFamily="monospace" opacity="0.7" letterSpacing="2">ECHO NORTH · METHODOLOGY</text>
      <line x1="640" y1="85" x2="1120" y2="85" stroke={AMBER} strokeWidth="1" opacity="0.3" />

      {[
        {y:120, num:'01', title:'Find the Throughline', desc:'Uncover the narrative hiding in product data, customer stories, and founder vision'},
        {y:210, num:'02', title:'Build the Flagship', desc:'Create cornerstone assets — benchmark reports, definitive guides, whitepapers'},
        {y:300, num:'03', title:'Evangelize It', desc:'Propagate across blog, social, email, and sales enablement'},
      ].map(step => (
        <g key={step.num}>
          <text x="640" y={step.y} fontSize="32" fill={AMBER} fontFamily="serif" fontStyle="italic" opacity="0.25">{step.num}</text>
          <text x="690" y={step.y} fontSize="15" fill={STONE} fontFamily="sans-serif" opacity="0.8">{step.title}</text>
          <text x="690" y={step.y+20} fontSize="11" fill={STONE} fontFamily="monospace" opacity="0.4">{step.desc}</text>
          {step.num !== '03' && (
            <line x1="640" y1={step.y+30} x2="640" y2={step.y+85} stroke={AMBER} strokeWidth="1.5" opacity="0.25"
              strokeDasharray="4,4" />
          )}
        </g>
      ))}

      <rect x="0" y="414" width="1200" height="6" fill={AMBER} opacity="0.6" />
    </svg>
  )
}

// Scene B: Cornerstone content workshop — whiteboard with narrative arc, flagship asset skeleton
function LaurenScene_B({ style }: SceneProps) {
  return (
    <svg viewBox="0 0 1200 420" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block', ...style }} aria-hidden="true">
      <defs>
        <pattern id="lasb-dots" patternUnits="userSpaceOnUse" width="8" height="8">
          <circle cx="4" cy="4" r="1.2" fill={AMBER} opacity="0.2" />
        </pattern>
      </defs>
      <rect width="1200" height="420" fill={STONE} />
      <rect width="1200" height="420" fill="url(#lasb-dots)" />

      {/* Whiteboard */}
      <rect x="80" y="30" width="1040" height="320" rx="8" fill={SAGE} opacity="0.2" transform="translate(6,7)" />
      <rect x="74" y="23" width="1040" height="320" rx="8" fill="#F0EDE6" />
      <rect x="74" y="23" width="1040" height="6" rx="4" fill={SAGE} opacity="0.6" />

      {/* Whiteboard tray */}
      <rect x="74" y="337" width="1040" height="16" rx="4" fill="#D8D0C4" />
      <rect x="100" y="341" width="24" height="8" rx="2" fill={AMBER} opacity="0.6" />
      <rect x="130" y="341" width="24" height="8" rx="2" fill={SAGE} opacity="0.6" />
      <rect x="160" y="341" width="24" height="8" rx="2" fill={STONE} opacity="0.4" />

      {/* Whiteboard content — narrative arc diagram */}
      <text x="100" y="70" fontSize="13" fill={AMBER} fontFamily="monospace" opacity="0.7">FLAGSHIP ASSET: NARRATIVE SKELETON</text>
      <line x1="100" y1="78" x2="1090" y2="78" stroke={STONE} strokeWidth="0.8" opacity="0.15" />

      {/* Narrative arc curve */}
      <path d="M 100 280 Q 350 200 600 160 Q 750 145 900 170 Q 1000 188 1090 240"
        stroke={AMBER} strokeWidth="2.5" fill="none" opacity="0.7" />
      <path d="M 100 280 Q 350 200 600 160 Q 750 145 900 170 Q 1000 188 1090 240"
        stroke={SAGE} strokeWidth="1.2" fill="none" opacity="0.35" transform="translate(3,4)" />

      {/* Nodes on arc */}
      {[
        {x:100, y:280, label:'The Problem\n(what\'s true but unsaid)'},
        {x:350, y:205, label:'The Insight\n(your unique data/POV)'},
        {x:600, y:162, label:'The Flagship\n(cornerstone asset)'},
        {x:900, y:172, label:'Distribution\n(channels + formats)'},
        {x:1090, y:242, label:'Authority\n(citations + trust)'},
      ].map((node, i) => (
        <g key={i}>
          <circle cx={node.x} cy={node.y} r="10" fill={i===2 ? AMBER : SAGE} opacity="0.9" />
          <circle cx={node.x} cy={node.y} r="6" fill="#F0EDE6" />
          <text x={node.x} y={node.y-16} fontSize="10" textAnchor="middle"
            fill={STONE} opacity="0.6" fontFamily="monospace">{node.label.split('\n')[0]}</text>
          <text x={node.x} y={node.y-4} fontSize="9" textAnchor="middle"
            fill={STONE} opacity="0.4" fontFamily="monospace">{node.label.split('\n')[1]}</text>
        </g>
      ))}

      {/* Annotation notes */}
      <rect x="620" y="88" width="180" height="50" rx="4" fill={AMBER} opacity="0.15"
        transform="rotate(-1.5, 710, 113)" />
      <text x="636" y="110" fontSize="10" fill={STONE} opacity="0.6" fontFamily="monospace"
        transform="rotate(-1.5, 636, 110)">"The argument you're</text>
      <text x="636" y="124" fontSize="10" fill={STONE} opacity="0.6" fontFamily="monospace"
        transform="rotate(-1.5, 636, 124)"> nervous to say out loud"</text>

      <rect x="0" y="414" width="1200" height="6" fill={AMBER} opacity="0.6" />
    </svg>
  )
}

// ─── Export map ───────────────────────────────────────────────────────────────
export const SCENE_COMPONENTS: Record<string, [ComponentType<SceneProps>, ComponentType<SceneProps>]> = {
  'lucy-hoyle':       [LucyScene_A,    LucyScene_B],
  'connor-beaulieu':  [ConnorScene_A,  ConnorScene_B],
  'vivian-hoang':     [VivianScene_A,  VivianScene_B],
  'brianna-chapman':  [BriannaScene_A, BriannaScene_B],
  'tim-metz':         [TimScene_A,     TimScene_B],
  'lauren-shufran':   [LaurenScene_A,  LaurenScene_B],
}
