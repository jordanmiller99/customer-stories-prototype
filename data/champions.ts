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
      'Bri Callahan spent eight years teaching AP Literature in a Chicago public school before she ever touched a content brief. She still assigns herself summer reading lists. These days she runs content operations at Paragon Financial, a fintech startup with outsized ambitions, and has become one of the sharper thinkers in the room on how language works at scale. Her desk has a laminated card that reads: "Would Hemingway use an em dash here? No. Move on."',
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
        question: 'Your path to content leadership is unusual — you taught AP Literature for eight years. What made you leave the classroom?',
        answer:
          "Restlessness, mostly. I'd become very good at teaching, but public schools were getting harder to work in — resources shrinking while expectations grew. A former student connected me with a startup that needed someone who could write and think structurally about language. I said yes thinking it was temporary. That was nine years ago. The surprise was that teaching and content strategy use exactly the same muscles: you're always thinking about how to transfer knowledge from someone who has it to someone who needs it.",
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
        question: "What's the career lesson that took you longest to learn?",
        answer:
          "That asking for help isn't the same as being unprepared. I spent years trying to figure everything out before I said anything, which meant I spent a lot of time stuck. Now I hire people who ask good questions faster than they find their own answers. The people who ask early are usually the ones learning fastest.",
      },
      {
        question: 'Are there other areas of your life where you think in systems?',
        answer:
          "My whole kitchen runs on a mise en place philosophy. I meal prep on Sundays like I'm running a pop-up restaurant. Same logic: respect for future-me, who is tired and hungry and does not want to make decisions.",
      },
    ],
    pullQuotes: [
      "I run a content factory that also has a soul.",
      "The bar got raised. That's good for people who actually care about writing.",
      "Teaching and content strategy use exactly the same muscles.",
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
      "Marcus Reid has a rule: he will not attend a webinar with the word 'revolutionary' in the title. He runs SEO at Terrace Commerce, a mid-market outdoor furniture brand, and has seen enough trend cycles to maintain a healthy skepticism about anything that promises to change everything. He came to content engineering not because he believed the pitch, but because the data changed his priors. One dataset later, he was building a 40-slide internal presentation.",
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
        question: 'You describe yourself as a skeptic. What does it actually take to change your mind?',
        answer:
          "Data, always data. When AI overviews started appearing in search results, I noticed traffic behaving in ways the old models couldn't explain. I started pulling apart which content was surviving and why. What I found changed my approach entirely — not because someone sold me on a philosophy, but because the numbers stopped making sense until I started looking at them differently. I'm still skeptical. I just updated my priors.",
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
          "We got cited in an AI overview for a search term with half a million monthly searches. For outdoor furniture. It took seven months of deliberate work to get there. When I saw it I genuinely called my wife over to the laptop. She thought I was showing her something much more interesting.",
      },
      {
        question: "What's the biggest win you're most proud of?",
        answer:
          "We rebuilt our buying guides from scratch: not just for keywords, but mapping every real question a buyer has — the functional, the taste, the anxiety questions about weather and durability. The traffic impact was good. The conversion impact was better. Customer service told me basic ticket questions went down.",
      },
      {
        question: 'How did your team respond when you started doing things differently?',
        answer:
          "My manager took the 40-slide deck and said 'do it.' The content team was harder. I had to avoid the energy of 'everything you've been doing is wrong.' What worked was asking questions: what do you wish you knew before writing this piece? That opened the door.",
      },
      {
        question: "What's the career advice you find yourself giving most often?",
        answer:
          "Get your data first. Spend real time understanding what's actually performing before you try to change anything. Most people diagnose the problem they want to solve rather than the one in front of them. The content I'm most proud of came from sitting with uncomfortable data for a few weeks, finding the two or three pieces doing most of the work, and asking why. That diagnostic work is not glamorous. But it is the work.",
      },
      {
        question: "What's something you're obsessed with outside of work?",
        answer:
          "Competitive disc golf. This is funnier if you've seen me, because I'm a very large person. But it rewards obsessive attention to micro-details, and I am built for that. I track every round on a spreadsheet. My wife has a rule that I'm not allowed to bring it to dinner.",
      },
    ],
    pullQuotes: [
      "I'm still skeptical. I just updated my priors.",
      "It took seven months of deliberate work to get there. For outdoor furniture.",
      "Most people diagnose the problem they want to solve, not the one in front of them.",
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
      "Priya Menon spent four years as a freelance content strategist before she built herself into a full-time job she didn't know she wanted. Working across B2B SaaS clients, she started developing content workflows partly out of necessity and partly out of intellectual curiosity. When Lattice Labs saw her process deck, they didn't offer her a project. They offered her the head of content role. She accepted, then spent three days figuring out if she'd made a mistake. She hadn't.",
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
        question: 'What moment in your career made you rethink how you were working?',
        answer:
          "Burnout. Third client project of a hard quarter, delivering good work and barely sleeping. I started auditing my own process the way I'd audit a client's workflow. What I found was that everything ran on my memory and personal effort — I had good instincts but no real architecture underneath them. That gap between what I thought I was doing and what I was actually doing was uncomfortable to see clearly. It was also the most useful thing I've ever learned about my own work.",
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
          "I was brought in to do things differently, so the friction was different. But I had to earn trust with writers who worried that more process meant less creative freedom. I showed by example that the framework makes creative work better: less mental energy on structure means more for the parts that actually require creativity.",
      },
      {
        question: "What's something about content work that took you a long time to really understand?",
        answer:
          "That the quality of your thinking before you write matters more than anything you do while writing. I spent years trying to improve my writing. What I should have been improving was the preparation: the research, the structural thinking, the clarity about who I was writing for and what I needed them to understand. The writing itself got much easier once I stopped shortcutting that part.",
      },
      {
        question: 'What would you be doing if you were not in marketing?',
        answer:
          "I got a master's in comparative literature. I'd probably be teaching somewhere, or writing criticism. I read constantly — mostly literary fiction and books about linguistics or translation theory. How meaning gets constructed across languages informs how I think about content more than any marketing book I've read.",
      },
    ],
    pullQuotes: [
      "I got hired into a head of content role because of a workflow document. Not a portfolio, not a writing sample.",
      "Good content doesn't expire the way an ad campaign does.",
      "The quality of your thinking before you write matters more than anything you do while writing.",
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
    editorialHeadline: "The VP Who Doesn't Hire Problems Away",
    introParagraph:
      "DeShawn Okafor keeps a sticky note on his monitor that says 'Don't hire the problem away.' It's a philosophy from his first startup job, and the lens through which he approaches every constraint his growth team hits. When his content team at Wellpath Technologies was falling behind demand, he rebuilt the system instead of adding headcount — and tripled output in a quarter. Six months later he was promoted to VP of Growth. The sticky note is still there.",
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
        question: "That sticky note on your monitor — 'Don't hire the problem away.' Where does that philosophy come from?",
        answer:
          "My first startup job, a growth role at a company with more ambition than budget. Every time we hit a constraint, leadership's reflex was to hire around it. Half those hires didn't stick because the underlying problem was process, not people. I internalized that hard. Now my first question when something isn't working is: is this a people problem or a design problem? Ninety percent of the time it's design. That's good news, because design you can fix.",
      },
      {
        question: 'What are you most excited about in the future of marketing?',
        answer:
          "Personalization at depth — not in the creepy surveillance way, but in the meaningful 'this was written for your exact situation' way. Healthcare is a category where that really matters. A nurse practitioner and a practice administrator have completely different needs. Content engineering lets you build for both without doubling your workload.",
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
          "We built a resource library for independent practice operators, a segment we'd always wanted to serve but never had bandwidth for. In six months: 80 pieces of useful operational content. It became our biggest source of qualified pipeline for that segment — more than paid ads or outbound. And it's still working today.",
      },
      {
        question: 'How did your team respond when you started doing things differently?',
        answer:
          "My content lead was immediately into it. My CEO wanted a proof of concept first. So we ran a quarter-long test: same team, new methodology, measure everything. The numbers made the argument for us.",
      },
      {
        question: "What's the hardest part of your job that nobody talks about?",
        answer:
          "Translating outcomes into decisions in real time, with incomplete information. The numbers can tell you what's working, but they rarely tell you exactly why — and the 'why' is what you need to make the next decision. I've gotten more comfortable sitting in that uncertainty without rushing to fill it. The best call I've made this year came from waiting two more weeks before deciding. The worst ones came from deciding too fast.",
      },
      {
        question: "What's something you're obsessed with outside of work?",
        answer:
          "Endurance cycling. Long-distance, not racing. I did a 200-mile ride last summer. There's a problem-solving that happens at hour four when you're tired and have to figure out how to keep going. That mental pattern is very similar to a hard quarter when everything's behind. Break it down, find the next landmark, keep pedaling.",
      },
    ],
    pullQuotes: [
      "Ninety percent of the time it's a design problem. That's good news, because design you can fix.",
      "We didn't just publish three times as many pieces. We published three times as many that cleared compliance review.",
      "The best call I've made this year came from waiting two more weeks before deciding.",
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
      "Sofia Reyes ran her content agency for six years the traditional way: hire writers, pitch clients, deliver briefs, repeat. It worked, up to a point. She was making money, clients were happy, and she was working 60-hour weeks. Then she rebuilt her entire methodology, doubled her client roster in six months, and started going home at five. She tells people the systems didn't save her agency. They saved her.",
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
        question: 'After six years of running your agency the traditional way, what made you rebuild it?',
        answer:
          "An honest conversation I couldn't win. A client needed faster turnarounds than my process could deliver — not unreasonably, just faster than I was built for. I remember sitting with that feedback and realizing I had two choices: make an excuse that might satisfy her briefly, or actually fix the problem. Fixing it meant admitting my agency had been running on individual talent rather than real systems. That realization was uncomfortable for about thirty seconds. And clarifying for much longer.",
      },
      {
        question: 'What are you most excited about in the future of marketing?',
        answer:
          "Agencies that think like engineers are going to have a serious competitive advantage. The shops still operating like it's fifteen years ago — a creative director and some writers and a lot of personality — that model isn't dead but it's getting harder to make profitable. The agencies that survive are building systems.",
      },
      {
        question: 'What are you most nervous about in the future of marketing?',
        answer:
          "Clients who think process is a shortcut. It's not. It still requires craft, judgment, and strategy at every step. I've had conversations with potential clients who only want to talk about production speed. Volume is the wrong goal. Systematic quality is the goal.",
      },
      {
        question: "What's something you've accomplished that you never thought possible before?",
        answer:
          "I took two weeks off completely last summer. No email, no Slack. The business didn't just survive, it ran exactly as it should have. I came back to no disasters, happy clients, and a team that had made good decisions in my absence. That felt like success in a way revenue numbers never quite have.",
      },
      {
        question: "What's the biggest win you're most proud of?",
        answer:
          "We rebuilt a tech company's content operation from scratch in four months. Good writers, terrible processes. We built a framework specific to their audience, trained their team, and handed it back. Six months later traffic was up 140% and they'd created a full-time content engineering role internally. When clients build internal capability because of your work, that's the real win.",
      },
      {
        question: 'How did your team respond when you started doing things differently?',
        answer:
          "My team had healthy skepticism: 'Is this another thing Sofia's excited about for three weeks?' What changed their minds was involving them before implementation. I invited them to break the workflow, find the flaws, tell me what was missing. They found real things. We fixed them. By launch it was as much their process as mine.",
      },
      {
        question: "What do you know now that you wish you'd known when you started the agency?",
        answer:
          "That process is a form of care for your team. When I was running everything on talent and hustle, I thought structure would make the work feel less creative. What I found was the opposite — the best creative work in my agency happens when people aren't burning mental energy on logistics. Systems aren't about control. They're about protecting the space where good thinking happens.",
      },
      {
        question: 'What would you be doing if you were not in marketing?',
        answer:
          "Running a restaurant. Small, specific menu, obsessive about sourcing. I spent a summer working for a chef who ran his kitchen like a conductor: every station knew exactly what to do, everything moved like one organism. I've thought about that kitchen a lot while building this agency.",
      },
    ],
    pullQuotes: [
      "The systems didn't save my agency. They saved me.",
      "When clients build internal capability because of your work, that's the real win.",
      "Systems aren't about control. They're about protecting the space where good thinking happens.",
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
