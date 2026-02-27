// Flat editorial illustration placeholders — one per champion
// Style inspired by Wired/New Yorker portrait illustration: limited palette, strong silhouette

type PortraitProps = { className?: string; style?: React.CSSProperties }

export function BriCallahanPortrait({ className, style }: PortraitProps) {
  return (
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      {/* Background */}
      <rect width="800" height="600" fill="#002910"/>
      {/* Yellow accent panel — bottom-left block */}
      <rect x="0" y="420" width="260" height="180" fill="#EEFF8C" opacity="0.18"/>
      {/* Thin vertical rule accent */}
      <rect x="680" y="0" width="2" height="600" fill="#EEFF8C" opacity="0.25"/>

      {/* Shoulders / body — yellow top */}
      <ellipse cx="400" cy="650" rx="220" ry="100" fill="#EEFF8C"/>
      {/* Neck */}
      <rect x="370" y="500" width="60" height="70" rx="6" fill="#EDBA8A"/>
      {/* Collar */}
      <polygon points="340,540 400,580 460,540 480,600 320,600" fill="#EEFF8C"/>

      {/* Hair — voluminous curly, distinctive shape */}
      <ellipse cx="400" cy="280" rx="160" ry="170" fill="#1C0E06"/>
      <circle cx="250" cy="320" r="90" fill="#1C0E06"/>
      <circle cx="550" cy="320" r="90" fill="#1C0E06"/>
      <circle cx="300" cy="200" r="80" fill="#1C0E06"/>
      <circle cx="500" cy="200" r="80" fill="#1C0E06"/>
      <circle cx="400" cy="140" r="85" fill="#1C0E06"/>
      <circle cx="350" cy="160" r="60" fill="#1C0E06"/>
      <circle cx="450" cy="160" r="60" fill="#1C0E06"/>

      {/* Face */}
      <ellipse cx="400" cy="390" rx="115" ry="130" fill="#EDBA8A"/>
      {/* Ears */}
      <ellipse cx="285" cy="390" rx="18" ry="26" fill="#EDBA8A"/>
      <ellipse cx="515" cy="390" rx="18" ry="26" fill="#EDBA8A"/>

      {/* Eyes */}
      <ellipse cx="362" cy="370" rx="18" ry="13" fill="white"/>
      <circle cx="365" cy="370" r="9" fill="#1C0E06"/>
      <circle cx="368" cy="367" r="3" fill="white"/>
      <ellipse cx="438" cy="370" rx="18" ry="13" fill="white"/>
      <circle cx="441" cy="370" r="9" fill="#1C0E06"/>
      <circle cx="444" cy="367" r="3" fill="white"/>

      {/* Glasses — EEFF8C yellow */}
      <rect x="336" y="360" width="44" height="28" rx="3" fill="none" stroke="#EEFF8C" strokeWidth="3.5"/>
      <rect x="420" y="360" width="44" height="28" rx="3" fill="none" stroke="#EEFF8C" strokeWidth="3.5"/>
      <line x1="380" y1="374" x2="420" y2="374" stroke="#EEFF8C" strokeWidth="3"/>
      <line x1="320" y1="370" x2="336" y2="370" stroke="#EEFF8C" strokeWidth="3"/>
      <line x1="464" y1="370" x2="480" y2="370" stroke="#EEFF8C" strokeWidth="3"/>

      {/* Nose */}
      <path d="M 390 400 Q 400 422 410 400" stroke="#C08050" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Smile */}
      <path d="M 372 440 Q 400 462 428 440" stroke="#A06038" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Blush */}
      <ellipse cx="330" cy="426" rx="20" ry="10" fill="#E08060" opacity="0.35"/>
      <ellipse cx="470" cy="426" rx="20" ry="10" fill="#E08060" opacity="0.35"/>

      {/* Small book — bottom right corner */}
      <rect x="640" y="510" width="70" height="52" rx="2" fill="#EEFF8C" opacity="0.8"/>
      <rect x="648" y="518" width="3" height="36" fill="#002910" opacity="0.4"/>
      <line x1="658" y1="526" x2="700" y2="526" stroke="#002910" strokeWidth="1.5" opacity="0.3"/>
      <line x1="658" y1="535" x2="700" y2="535" stroke="#002910" strokeWidth="1.5" opacity="0.3"/>
      <line x1="658" y1="544" x2="695" y2="544" stroke="#002910" strokeWidth="1.5" opacity="0.3"/>
    </svg>
  )
}

export function MarcusReidPortrait({ className, style }: PortraitProps) {
  return (
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      {/* Background — brand green */}
      <rect width="800" height="600" fill="#00622E"/>
      {/* Data grid lines in background */}
      {[100,200,300,400,500,600,700].map(x => (
        <line key={x} x1={x} y1="0" x2={x} y2="600" stroke="white" strokeWidth="0.5" opacity="0.07"/>
      ))}
      {[100,200,300,400,500].map(y => (
        <line key={y} x1="0" y1={y} x2="800" y2={y} stroke="white" strokeWidth="0.5" opacity="0.07"/>
      ))}
      {/* Accent bar chart suggestion — top right */}
      <rect x="600" y="80" width="24" height="120" fill="white" opacity="0.12"/>
      <rect x="634" y="110" width="24" height="90" fill="white" opacity="0.12"/>
      <rect x="668" y="60" width="24" height="140" fill="white" opacity="0.12"/>
      <rect x="702" y="90" width="24" height="110" fill="#EEFF8C" opacity="0.25"/>

      {/* Body / shoulders — dark */}
      <ellipse cx="400" cy="660" rx="240" ry="110" fill="#0A0A0A"/>
      {/* White shirt collar */}
      <polygon points="350,530 400,590 450,530 465,600 335,600" fill="white"/>
      {/* Dark jacket lapels */}
      <polygon points="350,530 335,600 200,600 260,520" fill="#0A0A0A"/>
      <polygon points="450,530 465,600 600,600 540,520" fill="#0A0A0A"/>
      {/* Neck */}
      <rect x="373" y="508" width="54" height="60" rx="5" fill="#C47A45"/>

      {/* Hair — short, close-cut */}
      <ellipse cx="400" cy="280" rx="130" ry="140" fill="#0F0A07"/>
      <ellipse cx="400" cy="200" rx="120" ry="70" fill="#0F0A07"/>
      {/* Hair hairline edge — slight forehead show */}
      <ellipse cx="400" cy="270" rx="118" ry="50" fill="#C47A45"/>

      {/* Face */}
      <ellipse cx="400" cy="370" rx="118" ry="130" fill="#C47A45"/>
      {/* Ears */}
      <ellipse cx="282" cy="368" rx="18" ry="26" fill="#C47A45"/>
      <ellipse cx="518" cy="368" rx="18" ry="26" fill="#C47A45"/>

      {/* Eyes — slightly skeptical */}
      <ellipse cx="360" cy="348" rx="17" ry="12" fill="white"/>
      <circle cx="363" cy="350" r="8" fill="#0A0A0A"/>
      <circle cx="366" cy="347" r="2.5" fill="white"/>
      <ellipse cx="440" cy="348" rx="17" ry="12" fill="white"/>
      <circle cx="443" cy="350" r="8" fill="#0A0A0A"/>
      <circle cx="446" cy="347" r="2.5" fill="white"/>
      {/* Slight skeptical brow */}
      <path d="M 342 334 Q 360 328 378 334" stroke="#0F0A07" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M 422 334 Q 440 329 458 335" stroke="#0F0A07" strokeWidth="3" fill="none" strokeLinecap="round"/>

      {/* Nose */}
      <path d="M 390 375 Q 400 395 410 375" stroke="#A05E28" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Neutral/slight smile */}
      <path d="M 376 420 Q 400 432 424 420" stroke="#8B4820" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* Subtle beard/stubble */}
      <ellipse cx="400" cy="450" rx="60" ry="30" fill="#8A5030" opacity="0.2"/>
    </svg>
  )
}

export function PriyaMenonPortrait({ className, style }: PortraitProps) {
  return (
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      {/* Background */}
      <rect width="800" height="600" fill="#004d22"/>
      {/* Subtle manuscript lines */}
      {[140,155,170,185,200,215,230,245,260].map((y, i) => (
        <line key={i} x1="60" y1={y} x2={i % 3 === 0 ? 300 : 280} y2={y} stroke="#EEFF8C" strokeWidth="0.8" opacity="0.15"/>
      ))}
      {/* Accent — thin yellow horizontal rule */}
      <rect x="0" y="540" width="800" height="2" fill="#EEFF8C" opacity="0.3"/>

      {/* Body */}
      <ellipse cx="400" cy="660" rx="220" ry="100" fill="#1C3A28"/>
      {/* Neck */}
      <rect x="374" y="505" width="52" height="60" rx="5" fill="#CC8850"/>
      {/* Collar / blouse */}
      <polygon points="360,540 400,570 440,540 460,600 340,600" fill="#EEFF8C" opacity="0.8"/>
      <polygon points="360,540 340,600 240,600 290,530" fill="#1C3A28"/>
      <polygon points="440,540 460,600 560,600 510,530" fill="#1C3A28"/>

      {/* Hair — long straight, falls to shoulders on both sides */}
      {/* Hair behind face */}
      <ellipse cx="400" cy="380" rx="160" ry="200" fill="#100805"/>
      {/* Long hair left side */}
      <path d="M 240 290 Q 210 420 220 580 Q 270 560 280 480 Q 290 380 290 300 Z" fill="#100805"/>
      {/* Long hair right side */}
      <path d="M 560 290 Q 590 420 580 580 Q 530 560 520 480 Q 510 380 510 300 Z" fill="#100805"/>
      {/* Top of hair */}
      <ellipse cx="400" cy="220" rx="130" ry="80" fill="#100805"/>
      {/* Side parts */}
      <rect x="270" y="200" width="260" height="120" fill="#100805"/>

      {/* Face */}
      <ellipse cx="400" cy="360" rx="110" ry="125" fill="#CC8850"/>
      {/* Ears */}
      <ellipse cx="290" cy="358" rx="16" ry="22" fill="#CC8850"/>
      <ellipse cx="510" cy="358" rx="16" ry="22" fill="#CC8850"/>

      {/* Eyes — thoughtful */}
      <ellipse cx="362" cy="340" rx="16" ry="11" fill="white"/>
      <circle cx="364" cy="341" r="8" fill="#100805"/>
      <circle cx="367" cy="338" r="2.5" fill="white"/>
      <ellipse cx="438" cy="340" rx="16" ry="11" fill="white"/>
      <circle cx="440" cy="341" r="8" fill="#100805"/>
      <circle cx="443" cy="338" r="2.5" fill="white"/>
      {/* Slight raised inner brow */}
      <path d="M 346 326 Q 363 320 378 325" stroke="#100805" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M 422 325 Q 437 320 454 326" stroke="#100805" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* Nose */}
      <path d="M 391 368 Q 400 386 409 368" stroke="#A06830" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Mouth — composed */}
      <path d="M 375 412 Q 400 424 425 412" stroke="#8B4E20" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    </svg>
  )
}

export function DeShawnOkaforPortrait({ className, style }: PortraitProps) {
  return (
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      {/* Background — near black green */}
      <rect width="800" height="600" fill="#001a0d"/>
      {/* Cycling wheel suggestion — large circle, background */}
      <circle cx="600" cy="500" r="220" fill="none" stroke="#00ff64" strokeWidth="1.5" opacity="0.15"/>
      <circle cx="600" cy="500" r="160" fill="none" stroke="#00ff64" strokeWidth="1" opacity="0.1"/>
      {/* Spokes */}
      {[0,45,90,135,180,225,270,315].map((angle, i) => (
        <line
          key={i}
          x1={600 + 10 * Math.cos(angle * Math.PI / 180)}
          y1={500 + 10 * Math.sin(angle * Math.PI / 180)}
          x2={600 + 218 * Math.cos(angle * Math.PI / 180)}
          y2={500 + 218 * Math.sin(angle * Math.PI / 180)}
          stroke="#00ff64" strokeWidth="1" opacity="0.1"
        />
      ))}
      {/* Neon green accent bar */}
      <rect x="0" y="0" width="8" height="600" fill="#00ff64" opacity="0.5"/>

      {/* Body — broad-shouldered, powerful */}
      <ellipse cx="400" cy="680" rx="260" ry="120" fill="#0A1A0D"/>
      {/* Neck */}
      <rect x="370" y="500" width="60" height="65" rx="5" fill="#6B3218"/>
      {/* Shirt/jacket */}
      <polygon points="345,540 400,590 455,540 480,600 320,600" fill="#0A2010"/>

      {/* Hair — close-cut, short */}
      <ellipse cx="400" cy="280" rx="128" ry="130" fill="#0A0604"/>
      <ellipse cx="400" cy="210" rx="120" ry="55" fill="#0A0604"/>

      {/* Face — confident, direct */}
      <ellipse cx="400" cy="370" rx="118" ry="128" fill="#6B3218"/>
      {/* Ears */}
      <ellipse cx="282" cy="368" rx="17" ry="24" fill="#6B3218"/>
      <ellipse cx="518" cy="368" rx="17" ry="24" fill="#6B3218"/>

      {/* Eyes — direct gaze */}
      <ellipse cx="358" cy="348" rx="17" ry="12" fill="white"/>
      <circle cx="361" cy="349" r="9" fill="#0A0604"/>
      <circle cx="364" cy="346" r="2.8" fill="white"/>
      <ellipse cx="442" cy="348" rx="17" ry="12" fill="white"/>
      <circle cx="445" cy="349" r="9" fill="#0A0604"/>
      <circle cx="448" cy="346" r="2.8" fill="white"/>
      {/* Confident level brows */}
      <path d="M 340 332 Q 358 326 378 330" stroke="#0A0604" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <path d="M 422 330 Q 442 326 460 332" stroke="#0A0604" strokeWidth="3.5" fill="none" strokeLinecap="round"/>

      {/* Nose */}
      <path d="M 388 376 L 382 400 Q 400 408 418 400 L 412 376" stroke="#4A1E08" strokeWidth="2" fill="none"/>
      {/* Mouth — slight confident smile */}
      <path d="M 372 428 Q 400 444 428 428" stroke="#3A1206" strokeWidth="3" fill="none" strokeLinecap="round"/>

      {/* Small neon green sticky note in corner — "Don't hire the problem away" reference */}
      <rect x="30" y="460" width="80" height="60" fill="#00ff64" opacity="0.15"/>
      <line x1="40" y1="476" x2="98" y2="476" stroke="#00ff64" strokeWidth="1" opacity="0.4"/>
      <line x1="40" y1="488" x2="94" y2="488" stroke="#00ff64" strokeWidth="1" opacity="0.4"/>
      <line x1="40" y1="500" x2="88" y2="500" stroke="#00ff64" strokeWidth="1" opacity="0.4"/>
    </svg>
  )
}

export function SofiaReyesPortrait({ className, style }: PortraitProps) {
  return (
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      {/* Background */}
      <rect width="800" height="600" fill="#003d1a"/>
      {/* Geometric accent — top right triangle */}
      <polygon points="800,0 800,280 560,0" fill="#EEFF8C" opacity="0.1"/>
      {/* Thin accent line */}
      <rect x="0" y="2" width="800" height="3" fill="#EEFF8C" opacity="0.4"/>

      {/* Body */}
      <ellipse cx="400" cy="670" rx="230" ry="110" fill="#0F2A18"/>
      {/* Neck */}
      <rect x="374" y="505" width="52" height="60" rx="5" fill="#C07840"/>
      {/* Collar — EEFF8C accent */}
      <polygon points="355,540 400,580 445,540 465,600 335,600" fill="#EEFF8C" opacity="0.9"/>
      <polygon points="355,540 335,600 230,600 285,528" fill="#0F2A18"/>
      <polygon points="445,540 465,600 570,600 515,528" fill="#0F2A18"/>

      {/* Hair — shoulder length, slightly wavy */}
      {/* Hair behind */}
      <ellipse cx="400" cy="350" rx="155" ry="185" fill="#3D2010"/>
      {/* Hair sides — falls to shoulders */}
      <path d="M 248 290 Q 235 400 245 540 Q 280 520 285 440 Q 292 360 295 285 Z" fill="#3D2010"/>
      <path d="M 552 290 Q 565 400 555 540 Q 520 520 515 440 Q 508 360 505 285 Z" fill="#3D2010"/>
      {/* Top of hair — slightly fuller */}
      <ellipse cx="400" cy="215" rx="138" ry="75" fill="#3D2010"/>
      <rect x="262" y="200" width="276" height="100" fill="#3D2010"/>
      {/* Hair highlight — subtle */}
      <path d="M 340 170 Q 380 155 400 158 Q 420 155 460 170" stroke="#6B3818" strokeWidth="3" fill="none" opacity="0.6"/>

      {/* Face */}
      <ellipse cx="400" cy="360" rx="112" ry="125" fill="#C07840"/>
      {/* Ears */}
      <ellipse cx="288" cy="358" rx="16" ry="22" fill="#C07840"/>
      <ellipse cx="512" cy="358" rx="16" ry="22" fill="#C07840"/>
      {/* Small earring detail */}
      <circle cx="288" cy="374" r="4" fill="#EEFF8C"/>
      <circle cx="512" cy="374" r="4" fill="#EEFF8C"/>

      {/* Eyes — creative, direct */}
      <ellipse cx="363" cy="340" rx="16" ry="11" fill="white"/>
      <circle cx="366" cy="341" r="8" fill="#1C0A04"/>
      <circle cx="369" cy="338" r="2.5" fill="white"/>
      <ellipse cx="437" cy="340" rx="16" ry="11" fill="white"/>
      <circle cx="440" cy="341" r="8" fill="#1C0A04"/>
      <circle cx="443" cy="338" r="2.5" fill="white"/>
      {/* Eyebrows — expressive, slightly arched */}
      <path d="M 346 324 Q 364 316 382 321" stroke="#2C1008" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M 418 321 Q 436 316 454 324" stroke="#2C1008" strokeWidth="3" fill="none" strokeLinecap="round"/>

      {/* Nose */}
      <path d="M 391 366 Q 400 382 409 366" stroke="#9A5520" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Mouth — confident smile */}
      <path d="M 373 408 Q 400 424 427 408" stroke="#7A3C14" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Upper lip detail */}
      <path d="M 373 408 Q 387 402 400 404 Q 413 402 427 408" stroke="#7A3C14" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

      {/* Small crossed utensils — bottom left */}
      <line x1="52" y1="540" x2="76" y2="564" stroke="#EEFF8C" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
      <line x1="72" y1="538" x2="48" y2="562" stroke="#EEFF8C" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
      <line x1="54" y1="542" x2="44" y2="532" stroke="#EEFF8C" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
      <line x1="70" y1="540" x2="80" y2="530" stroke="#EEFF8C" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
    </svg>
  )
}

export const PORTRAIT_COMPONENTS: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  'bri-callahan': BriCallahanPortrait,
  'marcus-reid': MarcusReidPortrait,
  'priya-menon': PriyaMenonPortrait,
  'deshawn-okafor': DeShawnOkaforPortrait,
  'sofia-reyes': SofiaReyesPortrait,
}
