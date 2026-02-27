export interface ChampionStory {
  name: string
  slug: string
  company: string
  role: string
  championLevel: 'Gold' | 'Green'
  editorialHeadline: string
  introParagraph: string
  qa: Array<{
    question: string
    answer: string
  }>
  pullQuotes: string[]
  heroIllustration: string
  detailIllustrations: string[]
  companyLogo: string
  ogImage: string
  publishDate: string
  published: boolean
  portraitTint: string
}

export const champions: ChampionStory[] = [
  {
    name: 'Bri Callahan',
    slug: 'bri-callahan',
    company: 'Paragon Financial',
    role: 'Head of Content',
    championLevel: 'Green',
    editorialHeadline: 'How Bri Went from Shakespeare to LLMs',
    introParagraph:
      'Bri Callahan spent eight years teaching AP Literature in a Chicago public school before she ever touched a content brief. She still assigns herself summer reading lists. These days she runs content operations at Paragon Financial, a fintech startup with outsized ambitions, and credits a single AirOps cohort for reshaping how she thinks about language at scale. Her desk has a laminated card that reads: "Would Hemingway use an em dash here? No. Move on."',
    qa: [
      {
        question: 'How do you describe what you do for work?',
        answer:
          "I run a content factory that also has a soul. We're a small team at a fintech startup, which means I'm writing, editing, briefing, prompting, and arguing with legal about what counts as a claim. The systems are what make all of it possible without losing my mind.",
      },
      {
        question: 'How has that changed in the last three years?',
        answer:
          "Three years ago I was proud of my quality, but I was exhausted. Now I think about content the way a composer thinks about arrangements: structures and patterns I set up once, and the work flows through them. The craft is still there. It just doesn't have to be heroic every time.",
      },
      {
        question: 'When did you first learn about content engineering?',
        answer:
          "I stumbled into a webinar thinking it was about AI tools. The framing was different: inputs, outputs, feedback loops, systems. I'm a former English teacher. I love how language works at the level of structure. Something clicked, and I signed up for the cohort the next morning.",
      },
      {
        question: 'What are you most excited about in the future of marketing?',
        answer:
          "The death of the commodity blog post. The only content that'll matter is content that's genuinely useful, specific, or surprising. Vague thought leadership is over. Generic listicles are over. The bar got raised, and that's good for people who actually care about writing.",
      },
      {
        question: 'What are you most nervous about in the future of marketing?',
        answer:
          "The race to the bottom before everyone accepts the bar is higher. There will be a period where companies flood the zone with cheap content. I worry about young content people starting their careers in that environment and learning the wrong lessons from it.",
      },
      {
        question: "What's something you've accomplished that you never thought possible before?",
        answer:
          "We published 40 pieces of genuinely good, legally-compliant, brand-consistent fintech content in one quarter. With two people. I remember sending our CEO the analytics report and he replied: 'How?' I said: 'Systems.' He's been in my corner ever since.",
      },
      {
        question: "What's the biggest win you're most proud of?",
        answer:
          "A content series called 'First Dollar' that tells stories of first-gen entrepreneurs navigating fintech. I designed the whole thing as a system: interview template, editorial structure, SEO framework, distribution checklist. We could produce an episode in two days. It ranked on page one for five competitive terms within three months.",
      },
      {
        question: 'How did your team respond when you started doing things differently?',
        answer:
          "My CEO came around fast when I showed him metrics. My contractor was the harder sell. She worried I was automating her out of a job. I explained that the goal was to stop doing the boring parts so she could focus on what actually uses her brain. Now she's one of the biggest advocates.",
      },
      {
        question: "What advice would you give someone just getting started?",
        answer:
          "Start with one workflow, not your whole operation. Pick the thing you do the most that drives you the most insane. For me it was meta descriptions. I built a system for that first, got comfortable, then expanded. If you try to engineer everything at once you'll just create chaos and blame the methodology.",
      },
      {
        question: 'Are there other areas of your life where you think in systems?',
        answer:
          "My whole kitchen runs on a mise en place philosophy. I meal prep on Sundays like I'm running a pop-up restaurant. Same logic: respect for future-me, who is tired and hungry and does not want to make decisions.",
      },
    ],
    pullQuotes: [
      "I run a content factory that also has a soul.",
      'The bar got raised. That\'s good for people who actually care about writing.',
      'Start with one workflow, not your whole operation.',
    ],
    heroIllustration: '/illustrations/placeholder-hero.svg',
    detailIllustrations: [
      '/illustrations/placeholder-detail-1.svg',
      '/illustrations/placeholder-detail-2.svg',
    ],
    companyLogo: '/logos/placeholder-logo.svg',
    ogImage: '/og/bri-callahan.png',
    publishDate: '2025-01-14',
    published: true,
    portraitTint: 'portrait-tint-1',
  },
  {
    name: 'Marcus Reid',
    slug: 'marcus-reid',
    company: 'Terrace Commerce',
    role: 'Senior SEO Manager',
    championLevel: 'Gold',
    editorialHeadline: 'The Skeptic Who Became the Evangelist',
    introParagraph:
      "Marcus Reid has a rule: he will not attend a webinar with the word 'revolutionary' in the title. He runs SEO at Terrace Commerce, a mid-market outdoor furniture brand, and has seen enough trend cycles to maintain a healthy skepticism about anything that promises to change everything. He came to content engineering not because he believed the pitch, but because citation data in AirOps made him curious. One dataset later, he was building a 40-slide internal presentation.",
    qa: [
      {
        question: 'How do you describe what you do for work?',
        answer:
          "I make sure our content gets found by the right people at the right moment. My job sits at the intersection of writing, data, and distribution. Increasingly it's about understanding not just search engines but AI systems, because that's where buying journeys start now.",
      },
      {
        question: 'How has that changed in the last three years?',
        answer:
          "What's changed is what counts as a 'good' piece of content. Three years ago I could tell you a word count and feel okay about it. Now the question is whether the content is something an AI model would confidently cite. That's a much harder bar and a much more interesting problem.",
      },
      {
        question: 'When did you first learn about content engineering?',
        answer:
          "I did not have a lightning bolt moment. I got a demo of AirOps because someone on LinkedIn was talking about citation tracking, and I am a sucker for new data. When I saw that you could see which content was getting cited by AI models and why, something shifted. Not a philosophy, a metric I could act on.",
      },
      {
        question: 'What are you most excited about in the future of marketing?',
        answer:
          "Specificity winning. The content that matters for outdoor furniture isn't '10 tips for a beautiful backyard.' It's specific and helpful, written for humans solving an actual problem. That content gets cited and shared. The SEO work I'm most proud of has always been the specific, useful stuff.",
      },
      {
        question: 'What are you most nervous about in the future of marketing?',
        answer:
          "Attribution getting harder. If someone reads five AI summaries drawing on content I created and then buys my product, I won't see that journey in any analytics tool I have today. My finance team isn't ready for that conversation yet. Neither am I.",
      },
      {
        question: "What's something you've accomplished that you never thought possible before?",
        answer:
          "We got cited in an AI overview for a search term with half a million monthly searches. For outdoor furniture. It took seven months of deliberate content engineering work to get there. When I saw it I genuinely called my wife over to the laptop. She thought I was showing her something much more interesting.",
      },
      {
        question: "What's the biggest win you're most proud of?",
        answer:
          "We rebuilt our buying guides from scratch: not just for keywords, but mapping every real question a buyer has, the functional, the taste, the anxiety questions about weather and durability. The traffic impact was good. The conversion impact was better. Customer service told me basic ticket questions went down.",
      },
      {
        question: 'How did your team respond when you started doing things differently?',
        answer:
          "My manager took the 40-slide deck and said 'do it.' The content team was harder. I had to avoid the energy of 'everything you've been doing is wrong.' What worked was asking questions: what do you wish you knew before writing this piece? That opened the door.",
      },
      {
        question: "What advice would you give someone just getting started?",
        answer:
          "Get your data first. Spend a few weeks looking at what's actually performing: what's getting cited, what's converting. You'll find two or three pieces doing ten times the work of everything else. That tells you more about what good content engineering looks like for your situation than any framework. Build from evidence.",
      },
      {
        question: "What's something you're obsessed with outside of work?",
        answer:
          "Competitive disc golf. This is funnier if you've seen me, because I'm a very large person. But it rewards obsessive attention to micro-details, and I am built for that. I track every round on a spreadsheet. My wife has a rule that I'm not allowed to bring it to dinner.",
      },
    ],
    pullQuotes: [
      "Not a philosophy. A metric I could act on.",
      "It took seven months of deliberate content engineering work. For outdoor furniture.",
      'Build from evidence, not from theory.',
    ],
    heroIllustration: '/illustrations/placeholder-hero.svg',
    detailIllustrations: [
      '/illustrations/placeholder-detail-1.svg',
      '/illustrations/placeholder-detail-2.svg',
    ],
    companyLogo: '/logos/placeholder-logo.svg',
    ogImage: '/og/marcus-reid.png',
    publishDate: '2025-01-28',
    published: true,
    portraitTint: 'portrait-tint-2',
  },
  {
    name: 'Priya Menon',
    slug: 'priya-menon',
    company: 'Lattice Labs',
    role: 'Head of Content',
    championLevel: 'Gold',
    editorialHeadline: 'She Built the Workflow That Got Her Hired',
    introParagraph:
      "Priya Menon spent four years as a freelance content strategist before she built herself into a full-time job she didn't know she wanted. Working across B2B SaaS clients, she started developing content engineering workflows partly out of necessity and partly out of intellectual curiosity. When Lattice Labs saw her process deck, they didn't offer her a project. They offered her the head of content role. She accepted, then spent three days figuring out if she'd made a mistake. She hadn't.",
    qa: [
      {
        question: 'How do you describe what you do for work?',
        answer:
          "I build and run the content engine for a B2B SaaS company. But if I had to boil it down: I'm in the business of making information accessible to the people who need it. The engineering part is how I make that scalable enough to be worth doing.",
      },
      {
        question: 'How has that changed in the last three years?',
        answer:
          "When I was freelancing, I thought of myself as a writer who was pretty good at strategy. Now I think of myself as a systems designer who writes. It's a complete reframe. The output still has to be good writing. But the architecture that produces it is what I spend most of my time on.",
      },
      {
        question: 'When did you first learn about content engineering?',
        answer:
          "I was on my third client project of the quarter, burning through every evening. A friend sent me a link more as a joke than anything: 'this sounds very you.' She was right. Reading it felt like someone had named a thing I'd been doing instinctively but never had a framework for. By Monday I had rebuilt two client workflows.",
      },
      {
        question: 'What are you most excited about in the future of marketing?',
        answer:
          "The legitimacy of content as infrastructure. For a long time content was the nice-to-have, cut when times were tight. Good content doesn't expire the way an ad campaign does. I want to be part of establishing that understanding more broadly.",
      },
      {
        question: 'What are you most nervous about in the future of marketing?',
        answer:
          "Homogenization. When everyone uses similar tools, you can end up with content that's competent but interchangeable. The thing I push hardest on is distinctiveness: what does this piece say that only Lattice Labs could say? That still requires genuine human thought. You can't engineer your way to it.",
      },
      {
        question: "What's something you've accomplished that you never thought possible before?",
        answer:
          "I got hired into a head of content role because of a workflow document. Not a portfolio, not a writing sample. A process deck I made for my own freelance operation that a founder saw in a Slack community. Three weeks later they offered me the job. Still the strangest and best career story I have.",
      },
      {
        question: "What's the biggest win you're most proud of?",
        answer:
          "We built a content hub with 60+ pieces that all connect and cross-reference each other in meaningful ways. Not just internal links for SEO. Actual conceptual scaffolding. Our sales team started sending it to prospects instead of the product one-pager. That told me everything.",
      },
      {
        question: 'How did your team respond when you started doing things differently?',
        answer:
          "I was brought in to do things differently, so the friction was different. But I had to earn trust with writers who worried content engineering meant less creative freedom. I showed by example that the framework makes creative work better: less mental energy on structure means more for the parts that require creativity.",
      },
      {
        question: "What advice would you give someone just getting started?",
        answer:
          "Document your current process before you try to improve it. Write down exactly what you do to produce one piece of content, every step, every decision. You'll see where the waste is and where the actual craft lives. Those are the two things you need to know before you can build anything better.",
      },
      {
        question: 'What would you be doing if you were not in marketing?',
        answer:
          "I got a master's in comparative literature. I'd probably be teaching somewhere, or writing criticism. I read constantly, mostly literary fiction and books about linguistics or translation theory. How meaning gets constructed across languages informs how I think about content more than any marketing book I've read.",
      },
    ],
    pullQuotes: [
      "I got hired into a head of content role because of a workflow document. Not a portfolio, not a writing sample.",
      "Good content doesn't expire the way an ad campaign does.",
      "Document your current process before you try to improve it. You can't engineer what you can't see.",
    ],
    heroIllustration: '/illustrations/placeholder-hero.svg',
    detailIllustrations: [
      '/illustrations/placeholder-detail-1.svg',
      '/illustrations/placeholder-detail-2.svg',
    ],
    companyLogo: '/logos/placeholder-logo.svg',
    ogImage: '/og/priya-menon.png',
    publishDate: '2025-02-11',
    published: true,
    portraitTint: 'portrait-tint-3',
  },
  {
    name: 'DeShawn Okafor',
    slug: 'deshawn-okafor',
    company: 'Wellpath Technologies',
    role: 'VP of Growth',
    championLevel: 'Green',
    editorialHeadline: "He Tripled Output Without Adding a Single Hire",
    introParagraph:
      "DeShawn Okafor keeps a sticky note on his monitor that says 'Don't hire the problem away.' It's a philosophy from his first startup job, and the lens through which he evaluated AirOps when his content team at Wellpath Technologies was falling behind demand. Instead of adding headcount, he built a content engineering system that tripled the team's output in a quarter. Six months later he was promoted to VP of Growth. The sticky note is still there.",
    qa: [
      {
        question: 'How do you describe what you do for work?',
        answer:
          "I find efficient paths from zero to revenue. What I'm doing every day is asking: what's the constraint? Sometimes it's sales, sometimes product. A lot of the time, it's content. We can have the best product in healthcare tech and still lose to a competitor whose content reaches the right buyer first.",
      },
      {
        question: 'How has that changed in the last three years?',
        answer:
          "I used to think of content as something my team produced. Now I think of it as something we engineer. Production is reactive: someone asks for a piece, a writer makes it. Engineering is proactive: you map the buyer journey, identify the gaps, build the infrastructure to fill them. Same outcomes, completely different path.",
      },
      {
        question: 'When did you first learn about content engineering?',
        answer:
          "I was at a growth conference, expecting another AI hype talk. The speaker opened with: 'What's the cost of one good piece of content versus ten mediocre ones?' Then showed actual data. I texted my content lead mid-session: 'Can you get into the AirOps cohort this quarter?' She did. We both ended up going.",
      },
      {
        question: 'What are you most excited about in the future of marketing?',
        answer:
          "Personalization at depth, not in the creepy surveillance way, but in the meaningful 'this was written for your exact situation' way. Healthcare is a category where that really matters. A nurse practitioner and a practice administrator have completely different needs. Content engineering lets you build for both without doubling your workload.",
      },
      {
        question: 'What are you most nervous about in the future of marketing?',
        answer:
          "Content in regulated industries getting harder before it gets easier. Every claim matters, compliance review takes time, and a lot of companies will fall behind because their review processes weren't built for modern production speeds. We're solving it at Wellpath. It's a real challenge.",
      },
      {
        question: "What's something you've accomplished that you never thought possible before?",
        answer:
          "Tripling our content output in a quarter without adding headcount. I want to be precise: we didn't just publish three times as many pieces. We published three times as many pieces that met our quality bar and cleared compliance review. Anyone can flood the zone with garbage. Doing it at quality and speed is the accomplishment.",
      },
      {
        question: "What's the biggest win you're most proud of?",
        answer:
          "We built a resource library for independent practice operators, a segment we'd always wanted to serve but never had bandwidth for. In six months: 80 pieces of useful operational content. It became our biggest source of qualified pipeline for that segment, more than paid ads or outbound. And it's still working today.",
      },
      {
        question: 'How did your team respond when you started doing things differently?',
        answer:
          "My content lead was immediately into it. My CEO wanted a proof of concept first. So we ran a quarter-long test: same team, new methodology, measure everything. The numbers made the argument for us.",
      },
      {
        question: "What advice would you give someone just getting started?",
        answer:
          "Don't make the case in the abstract. Run a test. Pick one content type, one audience segment, one quarter. Document your baseline, apply the methodology, measure the output. If it's right for your team, the results will do the persuading. If they don't, you've learned something valuable without betting everything on it.",
      },
      {
        question: "What's something you're obsessed with outside of work?",
        answer:
          "Endurance cycling. Long-distance, not racing. I did a 200-mile ride last summer. There's a problem-solving that happens at hour four when you're tired and have to figure out how to keep going. That mental pattern is very similar to a hard quarter when everything's behind. Break it down, find the next landmark, keep pedaling.",
      },
    ],
    pullQuotes: [
      "We didn't just publish three times as many pieces. We published three times as many pieces that met our quality bar and cleared compliance review.",
      "Don't make the case in the abstract. Run a test.",
      "That content is still working today.",
    ],
    heroIllustration: '/illustrations/placeholder-hero.svg',
    detailIllustrations: [
      '/illustrations/placeholder-detail-1.svg',
      '/illustrations/placeholder-detail-2.svg',
    ],
    companyLogo: '/logos/placeholder-logo.svg',
    ogImage: '/og/deshawn-okafor.png',
    publishDate: '2025-02-25',
    published: true,
    portraitTint: 'portrait-tint-4',
  },
  {
    name: 'Sofia Reyes',
    slug: 'sofia-reyes',
    company: 'Groundwork Agency',
    role: 'Founder',
    championLevel: 'Gold',
    editorialHeadline: 'The Agency Owner Who Rewrote the Business Model',
    introParagraph:
      "Sofia Reyes ran her content agency for six years the traditional way: hire writers, pitch clients, deliver briefs, repeat. It worked, up to a point. She was making money, clients were happy, and she was working 60-hour weeks. Then she rebuilt her entire methodology around content engineering, doubled her client roster in six months, and started going home at five. She tells people content engineering didn't save her agency. It saved her.",
    qa: [
      {
        question: 'How do you describe what you do for work?',
        answer:
          "I run a boutique content engineering agency. We help mid-market B2B companies build content operations that actually scale. What we're selling isn't content, it's the infrastructure to produce content consistently and well. Our best engagements are the ones where the client eventually doesn't need us anymore.",
      },
      {
        question: 'How has that changed in the last three years?',
        answer:
          "Three years ago, we were a content production agency. Entirely dependent on the hours of my team. If a writer got sick, a client felt it immediately. Now we're a systems agency. The workflows don't depend on any one person's skills. I can take on twice as many clients with the same team size.",
      },
      {
        question: 'When did you first learn about content engineering?',
        answer:
          "I had a difficult conversation with a client about turnaround times. It forced me to look honestly at my processes. I went looking for better frameworks. My first reaction was defensive: 'I already do all this.' My second reaction, a week later: 'I do parts of this, but not the systematic version.' That gap was where all the improvement lived.",
      },
      {
        question: 'What are you most excited about in the future of marketing?',
        answer:
          "Agencies that think like engineers are going to have a serious competitive advantage. The shops still operating like it's fifteen years ago, a creative director and some writers and a lot of personality, that model isn't dead but it's getting harder to make profitable. The agencies that survive are building systems.",
      },
      {
        question: 'What are you most nervous about in the future of marketing?',
        answer:
          "Clients who think content engineering is a shortcut. It's not. It still requires craft, judgment, and strategy at every step. I've had conversations with potential clients who only want to talk about production speed. Volume is the wrong goal. Systematic quality is the goal.",
      },
      {
        question: "What's something you've accomplished that you never thought possible before?",
        answer:
          "I took two weeks off completely last summer. No email, no Slack. The business didn't just survive, it ran exactly as it should have. I came back to no disasters, happy clients, and a team that had made good decisions in my absence. That felt like success in a way revenue numbers never quite have.",
      },
      {
        question: "What's the biggest win you're most proud of?",
        answer:
          "We rebuilt a tech company's content operation from scratch in four months. Good writers, terrible processes. We built a content engineering framework specific to their audience, trained their team, and handed it back. Six months later traffic was up 140% and they'd created a full-time content engineering role internally.",
      },
      {
        question: 'How did your team respond when you started doing things differently?',
        answer:
          "My team had healthy skepticism: 'Is this another thing Sofia's excited about for three weeks?' What changed their minds was involving them before implementation. I invited them to break the workflow, find the flaws, tell me what was missing. They found real things. We fixed them. By launch it was as much their process as mine.",
      },
      {
        question: "What advice would you give someone just getting started?",
        answer:
          "Be honest about what you're actually producing versus what you think you're producing. That gap is where content engineering lives. Most teams believe they have more consistency and quality control than they do. Read everything you've published in the last six months before you try to fix anything. You can't fix what you can't see.",
      },
      {
        question: 'What would you be doing if you were not in marketing?',
        answer:
          "Running a restaurant. Small, specific menu, obsessive about sourcing. I spent a summer working for a chef who ran his kitchen like a conductor: every station knew exactly what to do, everything moved like one organism. I've thought about that kitchen a lot while building this agency.",
      },
    ],
    pullQuotes: [
      "Content engineering didn't save my agency. It saved me.",
      "When clients build internal capability because of your work, that's the real win.",
      "Be honest about what you're actually producing versus what you think you're producing.",
    ],
    heroIllustration: '/illustrations/placeholder-hero.svg',
    detailIllustrations: [
      '/illustrations/placeholder-detail-1.svg',
      '/illustrations/placeholder-detail-2.svg',
    ],
    companyLogo: '/logos/placeholder-logo.svg',
    ogImage: '/og/sofia-reyes.png',
    publishDate: '2025-03-10',
    published: true,
    portraitTint: 'portrait-tint-5',
  },
]

export function getChampionBySlug(slug: string): ChampionStory | undefined {
  return champions.find((c) => c.slug === slug && c.published)
}

export function getPublishedChampions(): ChampionStory[] {
  return champions.filter((c) => c.published)
}

export function getAdjacentChampions(slug: string): {
  prev: ChampionStory | null
  next: ChampionStory | null
} {
  const published = getPublishedChampions()
  const idx = published.findIndex((c) => c.slug === slug)
  return {
    prev: idx > 0 ? published[idx - 1] : null,
    next: idx < published.length - 1 ? published[idx + 1] : null,
  }
}
