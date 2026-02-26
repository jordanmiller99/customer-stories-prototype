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
  portraitGradient: string
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
      'Bri Callahan spent eight years teaching AP Literature in a Chicago public school before she ever touched a content brief. She still assigns herself summer reading lists. These days, she runs content operations at Paragon Financial, a fintech startup with 60 employees and outsized ambitions, and she credits a single AirOps cohort session for reshaping how she thinks about language at scale. Her desk has a small laminated card that reads: "Would Hemingway use an em dash here? No. Move on."',
    qa: [
      {
        question: 'How do you describe what you do for work?',
        answer:
          "I tell people I run a content factory that also has a soul. Which sounds like a contradiction, but that's the whole point. We're a small team at a fintech startup, which means I'm writing, editing, briefing, prompting, reviewing, and occasionally arguing with our legal team about what counts as a claim. The systems I've built are what make it possible to do all of that without losing my mind.",
      },
      {
        question: 'How has that changed in the last three years?',
        answer:
          "Three years ago, I was still doing everything manually. Every brief was a Google Doc I'd written from scratch. Every article outline was something I agonized over for an hour. I was proud of the quality, but I was also constantly exhausted. Now I think about content the way a composer thinks about arrangements: there are structures and patterns that I set up once, and then the work flows through them. The craft is still there. It just doesn't have to be heroic every single time.",
      },
      {
        question: 'When did you first learn about content engineering? What was that moment like?',
        answer:
          "Honestly, I stumbled into a webinar about it thinking it was going to be about AI tools, which I was pretty skeptical of at the time. But the framing was different from anything I'd heard before. It wasn't about replacing writers. It was about thinking like an engineer: inputs, outputs, feedback loops, systems. I sat up straighter. I'm a former English teacher. I love systems. I love how language works at the level of structure. Something clicked, and I signed up for the cohort the next morning.",
      },
      {
        question: 'What are you most excited about in the future of marketing?',
        answer:
          "The death of the commodity blog post. I know that sounds harsh, but I mean it in the best way. The only content that's going to matter going forward is content that's genuinely useful, specific, or surprising. Vague thought leadership is over. Generic listicles are over. The bar got raised, and I think that's genuinely good for people who care about writing. It's a better environment for the kind of work I want to make.",
      },
      {
        question: 'What are you most nervous about in the future of marketing?',
        answer:
          "The race to the bottom that happens before everyone accepts the bar is higher. There's going to be a period, probably a few years, where a lot of companies flood the zone with garbage content because it's cheap to produce. It'll feel like you're shouting into a void. I worry about young content people who are starting their careers in that environment and learning the wrong lessons from it.",
      },
      {
        question: "What's something you've accomplished that you never thought would have been possible before?",
        answer:
          "We published 40 pieces of genuinely good, legally-compliant, brand-consistent fintech content in one quarter. With two people. One of those people was me. The other was a part-time contractor who mostly handled distribution. That would have taken a team of six two years ago, and it still would have been messier. I remember sending our CEO the analytics report and he replied: 'How?' And I said, 'Systems.' He's been in my corner ever since.",
      },
      {
        question: "What's the biggest win or project you're most proud of since adopting content engineering?",
        answer:
          "We built a content series called 'First Dollar' that tells stories of first-gen entrepreneurs navigating fintech products. I designed the whole thing as a system: interview template, editorial structure, SEO framework, distribution checklist. We could produce an episode in two days. It ranked on the first page for five competitive terms within three months, and more importantly, it actually mattered to people. We got emails about it. Real emails, not form submissions.",
      },
      {
        question: 'How did your team or manager respond when you started doing things differently?',
        answer:
          "My CEO was curious but skeptical at first. He's a finance guy; he wanted metrics. So I gave him metrics. I showed him the time-per-piece before and after, the traffic numbers, the conversion assist data. He came around fast. My contractor was the harder sell, actually. She was worried I was trying to automate her out of a job. I had to spend a real conversation explaining that the goal was for her to stop doing the boring parts so she could focus on the stuff that actually uses her brain. Now she's one of the biggest advocates for the process.",
      },
      {
        question: "What advice would you give someone just getting started with content engineering?",
        answer:
          "Start with one workflow, not your whole operation. Pick the thing you do the most that also drives you the most insane. For me it was writing meta descriptions. I was writing probably 15 a week and hating every one. I built a system for that first, got comfortable with the approach, and then expanded from there. If you try to engineer everything at once you'll just create chaos and blame the methodology. One thing, make it work, then build.",
      },
      {
        question: "Are there other areas of your life where you think in systems or processes?",
        answer:
          "My whole kitchen runs on a mise en place philosophy that would make a chef cry. I meal prep on Sundays like I'm running a pop-up restaurant. My friends think it's excessive. I think it's just respect for future-me, who is tired and hungry and does not want to make decisions. Same logic applies to content workflows, honestly.",
      },
    ],
    pullQuotes: [
      "I tell people I run a content factory that also has a soul. Which sounds like a contradiction, but that's the whole point.",
      'The only content that matters going forward is content that is genuinely useful, specific, or surprising. Vague thought leadership is over.',
      'Start with one workflow, not your whole operation. Pick the thing you do the most that also drives you the most insane.',
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
    portraitGradient: 'portrait-gradient-1',
  },
  {
    name: 'Marcus Reid',
    slug: 'marcus-reid',
    company: 'Terrace Commerce',
    role: 'Senior SEO Manager',
    championLevel: 'Gold',
    editorialHeadline: 'The Skeptic Who Became the Evangelist',
    introParagraph:
      'Marcus Reid has a rule: he will not attend a webinar that includes the word "revolutionary" in the title. He runs SEO at Terrace Commerce, a mid-market e-commerce brand that sells outdoor furniture, and he has seen enough trend cycles to maintain a healthy skepticism about anything that promises to change everything. He came to content engineering not because he believed the pitch, but because the citation data in AirOps made him curious. One dataset later, he was building a 40-slide internal presentation about why his company needed to change how it thought about content entirely.',
    qa: [
      {
        question: 'How do you describe what you do for work?',
        answer:
          "I make sure our content gets found by the right people at the right moment. That sounds simple, but the 'right people at the right moment' part is doing a lot of work in that sentence. My job sits at the intersection of writing, data, and distribution, and increasingly it's about understanding not just search engines but AI systems, because those are where a lot of people are starting their buying journeys now.",
      },
      {
        question: 'How has that changed in the last three years?',
        answer:
          "The technical foundation of SEO hasn't changed that much. What's changed is what counts as a 'good' piece of content. Three years ago I could tell you a word count and a keyword density and feel okay about it. Now the question is whether the content is something an AI model would confidently cite. That's a much harder bar to clear, and it's a much more interesting problem. I'm genuinely more engaged with my work than I've been in a decade.",
      },
      {
        question: 'When did you first learn about content engineering? What was that moment like?',
        answer:
          "I want to be honest: I did not have a lightning bolt moment. I was doing competitive research and kept seeing the term. I read a few things about it, felt like a lot of it was rebranding things I already knew, and moved on. Then I got a demo of AirOps specifically because someone on LinkedIn was talking about citation tracking, and I am a sucker for new data. When I saw that you could actually see which content was getting cited by AI models and why, something shifted. That was the moment. Not a philosophy, but a metric I could act on.",
      },
      {
        question: 'What are you most excited about in the future of marketing?',
        answer:
          "Specificity winning. I sell outdoor furniture. The content that is going to matter for us is not '10 tips for a beautiful backyard.' It's the stuff that is genuinely specific and helpful, written for actual humans who are trying to solve an actual problem. That kind of content is going to get cited. It's going to get shared. The SEO work I'm most proud of in my career has always been the specific, useful stuff, and now the whole ecosystem is rewarding that instinct.",
      },
      {
        question: 'What are you most nervous about in the future of marketing?',
        answer:
          "Attribution getting harder. If someone reads five AI-generated summaries that are all drawing on content I created, and then they buy my product, I'm not going to see that journey clearly in any analytics tool I have today. The way I think about ROI is going to have to change, and I'm not sure the tools are ready for that conversation yet. My finance team definitely isn't.",
      },
      {
        question: "What's something you've accomplished that you never thought would have been possible before?",
        answer:
          "We got cited in an AI overview for a search term that has a half-million monthly searches. Not a brand mention, not a link, but an actual citation in the response. For outdoor furniture. I didn't think that was a category where that would happen to us. It took about seven months of deliberate content engineering work to get there, and when I saw it I genuinely called my wife over to the laptop to look at it. She thought I was going to show her something much more interesting.",
      },
      {
        question: "What's the biggest win or project you're most proud of since adopting content engineering?",
        answer:
          "We rebuilt our buying guides from scratch using a content engineering approach. Instead of just writing for keywords, we mapped out every real question someone has when they're buying outdoor furniture: the functional questions, the taste questions, the anxiety questions about weather and durability and cost. We built content that actually answered those questions at depth. The traffic impact was good. The conversion impact was better. The thing I'm most proud of is that someone from our customer service team told me the number of basic questions they get in tickets went down, because people were finding the answers in the guides.",
      },
      {
        question: 'How did your team or manager respond when you started doing things differently?',
        answer:
          "My manager was the easy part. I brought her a 40-slide deck with data and she said 'do it.' What was harder was the content team, who had been writing in one way for a long time and were suspicious of a new framework from the SEO guy. I had to be careful not to come in with the energy of 'everything you've been doing is wrong.' The approach that worked was starting with questions: what do you wish you knew before you wrote this piece? What parts of this did you feel like you were guessing at? That opened the door.",
      },
      {
        question: "What advice would you give someone just getting started with content engineering?",
        answer:
          "Get your data first. Before you change anything about how you're creating content, spend a few weeks looking at what's actually performing. What's getting cited? What's getting organic clicks? What's converting? You'll probably find two or three pieces that are doing ten times the work of everything else, and that'll tell you more about what good content engineering looks like for your specific situation than any framework will. Build from evidence, not from theory.",
      },
      {
        question: "What's something you're obsessed with outside of work?",
        answer:
          "I play competitive disc golf. This is funnier if you've seen me, because I'm a very large person and disc golf is not usually a sport associated with large people. But it's a sport that rewards obsessive attention to micro-details, and I am built for that. I track every round on a spreadsheet. My wife has a rule that I'm not allowed to bring the spreadsheet to dinner.",
      },
    ],
    pullQuotes: [
      "That was the moment. Not a philosophy, but a metric I could act on.",
      "I didn't think that was a category where that would happen to us. It took seven months of deliberate content engineering work to get there.",
      'Build from evidence, not from theory. The data will tell you what good content engineering looks like for your specific situation.',
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
    portraitGradient: 'portrait-gradient-2',
  },
  {
    name: 'Priya Menon',
    slug: 'priya-menon',
    company: 'Lattice Labs',
    role: 'Head of Content',
    championLevel: 'Gold',
    editorialHeadline: 'She Built the Workflow That Got Her Hired',
    introParagraph:
      'Priya Menon spent four years as a freelance content strategist before she built herself into a full-time job she didn\'t know she wanted. Working with a handful of clients across B2B SaaS, she started developing her own content engineering workflows partly out of necessity (she had too many clients and not enough hours) and partly out of genuine intellectual curiosity. When Lattice Labs saw her process deck, they didn\'t offer her a project. They offered her the head of content role. She accepted, then spent three days figuring out if she had made a mistake. She hadn\'t.',
    qa: [
      {
        question: 'How do you describe what you do for work?',
        answer:
          "I build and run the content engine for a B2B SaaS company in the project intelligence space. Which means I'm responsible for the full picture: strategy, production, distribution, performance. But if I had to boil it down to one thing, I'd say I'm in the business of making information accessible to the people who need it. The engineering part is how I make that scalable enough to be worth doing.",
      },
      {
        question: 'How has that changed in the last three years?',
        answer:
          "When I was freelancing, I thought of myself as a writer who was pretty good at strategy. Now I think of myself as a systems designer who writes. That sounds like a small semantic shift, but it's actually a complete reframe of how I approach every project. The output still has to be good writing. But the architecture that produces the writing is what I spend most of my time on.",
      },
      {
        question: 'When did you first learn about content engineering? What was that moment like?',
        answer:
          "I was on my third client project that quarter, burning through every evening trying to keep up. I was doing good work but I was doing it in the least efficient way possible. A friend sent me a link to an article about content engineering, more as a joke than anything, like 'this sounds very you.' And she was right. Reading it felt like someone had named a thing I'd been doing instinctively but never had a framework for. I went deep on it that weekend. By Monday I had rebuilt two of my client workflows.",
      },
      {
        question: 'What are you most excited about in the future of marketing?',
        answer:
          "The legitimacy of content as infrastructure. For a long time content was treated like the nice-to-have part of marketing: you did it if you had budget, you cut it when times were tight. What I see now is companies starting to realize that their content assets are genuinely durable infrastructure, the same way their product is. Good content doesn't expire the way an ad campaign does. I want to be part of establishing that understanding more broadly.",
      },
      {
        question: 'What are you most nervous about in the future of marketing?',
        answer:
          "Homogenization. When everyone is using similar tools and similar frameworks, you can end up with content that's competent but interchangeable. The thing I push hardest on with my team is distinctiveness. What does this piece say that only Lattice Labs could say? What's the specific perspective here? That's not something you can engineer your way to. It still requires genuine human thought, and I worry that some teams are going to use efficiency as an excuse to skip that part.",
      },
      {
        question: "What's something you've accomplished that you never thought would have been possible before?",
        answer:
          "I got hired into a head of content role because of a workflow document. Not a portfolio, not a writing sample. A process deck I made for my own freelance operation that one of the Lattice Labs founders happened to see because I'd shared it in a Slack community. He asked if he could share it internally. Three weeks later they offered me the job. I still think that's the strangest and best career story I have.",
      },
      {
        question: "What's the biggest win or project you're most proud of since adopting content engineering?",
        answer:
          "We built an interactive content hub around the theme of 'project intelligence for modern teams.' The engineering piece was a structured content layer that let us create 60+ pieces of content that all connected and cross-referenced each other in meaningful ways. Not just internal links for SEO. Actual conceptual scaffolding. A reader who starts at any entry point ends up understanding the broader problem better by the time they leave. Our sales team started sending it to prospects instead of the product one-pager. That told me everything I needed to know.",
      },
      {
        question: 'How did your team or manager respond when you started doing things differently?',
        answer:
          "I was brought in specifically to do things differently, so I didn't have the same organizational friction that a lot of people face. But I did have to earn trust with the writers on my team. A couple of them were worried that content engineering meant less creative freedom. What I tried to demonstrate, by example, was that the framework makes the creative work better. You don't spend your mental energy on the structural stuff, so you have more of it for the parts that actually require creativity. It took about a quarter for that to feel real to them.",
      },
      {
        question: "What advice would you give someone just getting started with content engineering?",
        answer:
          "Document your current process before you try to improve it. This sounds tedious but it's critical. You can't engineer what you can't see. Write down exactly what you do to produce one piece of content, every step, every decision. When you do that, two things happen: you see where the waste is, and you see where the actual craft lives. Those are the two things you need to know before you can build anything better.",
      },
      {
        question: 'What would you be doing if you were not in marketing?',
        answer:
          "I got a master's in comparative literature, which is the degree you get when you want to read for a living but can't commit to academia. I'd probably be teaching somewhere. Maybe writing criticism. I still read constantly, mostly literary fiction and the occasional very nerdy book about linguistics or translation theory. I think about how meaning gets constructed across languages and contexts in a way that informs how I think about content more than any marketing book I've read.",
      },
    ],
    pullQuotes: [
      "I got hired into a head of content role because of a workflow document. Not a portfolio, not a writing sample.",
      'Good content doesn\'t expire the way an ad campaign does. Content assets are genuinely durable infrastructure.',
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
    portraitGradient: 'portrait-gradient-3',
  },
  {
    name: 'DeShawn Okafor',
    slug: 'deshawn-okafor',
    company: 'Wellpath Technologies',
    role: 'VP of Growth',
    championLevel: 'Green',
    editorialHeadline: "He Tripled Output Without Adding a Single Hire",
    introParagraph:
      "DeShawn Okafor keeps a sticky note on his monitor that says 'Don't hire the problem away.' It's a philosophy he picked up from a mentor during his first startup job, and it's the lens through which he evaluated AirOps when his content team at Wellpath Technologies was falling behind demand. Instead of adding headcount, he built a content engineering system that tripled the team's output in a quarter. Six months later he was promoted to VP of Growth. The sticky note is still there.",
    qa: [
      {
        question: 'How do you describe what you do for work?',
        answer:
          "I find efficient paths from zero to revenue. That sounds like a lot of buzzwords, but the thing I'm actually doing every day is asking: what's the constraint? Sometimes the constraint is the sales team. Sometimes it's the product. A lot of the time, it's content. We can have the best product in healthcare tech and still lose to a competitor whose content reaches the right buyer first. So I spend a lot of time on content.",
      },
      {
        question: 'How has that changed in the last three years?',
        answer:
          "I used to think of content as something my team produced. Now I think of it as something my team engineers. The distinction matters. Production is reactive and linear: someone asks for a piece, a writer makes it, it goes out. Engineering is proactive and systematic: you map the buyer journey, identify the content gaps, build the infrastructure to fill them, and measure what's working. I still care about the same outcomes. The path to them is completely different.",
      },
      {
        question: 'When did you first learn about content engineering? What was that moment like?',
        answer:
          "I was at a growth marketing conference, sitting through what I thought was going to be another AI hype talk. The speaker opened with a question: 'What's the cost of one good piece of content versus ten mediocre ones?' And they proceeded to show data. Actual data, not anecdotes. That got my attention. By the end of the session I had texted my content lead: 'Can you get into the AirOps cohort this quarter?' She said she'd look into it. She did. We both ended up going.",
      },
      {
        question: 'What are you most excited about in the future of marketing?',
        answer:
          "Personalization at depth. Not in the creepy 'we know what you searched for' way, but in the meaningful 'this content was written for your exact situation' way. Healthcare is a category where that really matters. A nurse practitioner looking for clinical content and a practice administrator looking for operational content have completely different needs. Content engineering lets you build for both without doubling your workload. We're just scratching the surface of what that can look like.",
      },
      {
        question: 'What are you most nervous about in the future of marketing?',
        answer:
          "Content in regulated industries is going to get harder before it gets easier. Healthcare, finance, legal: these are spaces where you can't just let an AI run free. Every claim matters. Compliance review takes time. I think a lot of companies in regulated verticals are going to fall behind because their content velocity is bottlenecked by review processes that weren't built for modern production speeds. We're solving that at Wellpath, but it's a real challenge.",
      },
      {
        question: "What's something you've accomplished that you never thought would have been possible before?",
        answer:
          "Tripling our content output in a quarter without adding headcount. I want to be precise about what that means: we didn't just publish three times as many pieces. We published three times as many pieces that met our quality bar and cleared compliance review. That's the hard part. Anyone can flood the zone with garbage. Doing it at quality and speed is the actual accomplishment, and I couldn't have told you it was possible before we did it.",
      },
      {
        question: "What's the biggest win or project you're most proud of since adopting content engineering?",
        answer:
          "We built a resource library for independent practice operators, a segment we'd always wanted to serve but had never had the bandwidth to produce enough content for. In six months we produced 80 pieces of genuinely useful operational content. It became our biggest source of qualified pipeline for that segment. More than paid ads, more than outbound. And the payoff compounds: that content is still working every day, we're not paying to run it again.",
      },
      {
        question: 'How did your team or manager respond when you started doing things differently?',
        answer:
          "My content lead was the one who really made it work. She's brilliant and she'd been frustrated with our old process, so when I brought her the idea she was immediately into it. My CEO was supportive but wanted a proof of concept before we committed. So we ran a quarter-long test: same team, new methodology, measure everything. The numbers were good enough that there wasn't much to debate after that.",
      },
      {
        question: "What advice would you give someone just getting started with content engineering?",
        answer:
          "Don't try to make the case for it in the abstract. Run a test. Pick one content type, one audience segment, one quarter. Document your baseline. Apply the methodology. Measure the output. If the methodology is right for your team, the results will do the persuading for you. If they don't, you've learned something valuable without having bet everything on it. Growth people understand pilots. Lead with that.",
      },
      {
        question: "What's something you're obsessed with outside of work?",
        answer:
          "I'm deep into endurance cycling. Not racing, just long-distance. I did a 200-mile ride last summer and I'm already planning something longer for this year. There's a kind of problem-solving that happens at hour four of a long ride when you're tired and you have to figure out how to keep going. That mental pattern is really similar to what happens in a hard quarter when everything is behind. You break it down, you find the next landmark, and you keep pedaling.",
      },
    ],
    pullQuotes: [
      "We didn't just publish three times as many pieces. We published three times as many pieces that met our quality bar and cleared compliance review.",
      "Don't try to make the case for it in the abstract. Run a test. The results will do the persuading for you.",
      "That content is still working every day. We're not paying to run it again.",
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
    portraitGradient: 'portrait-gradient-4',
  },
  {
    name: 'Sofia Reyes',
    slug: 'sofia-reyes',
    company: 'Groundwork Agency',
    role: 'Founder',
    championLevel: 'Gold',
    editorialHeadline: 'The Agency Owner Who Rewrote the Business Model',
    introParagraph:
      "Sofia Reyes ran her content agency for six years the traditional way: hire writers, pitch clients, deliver briefs, repeat. It worked, up to a point. She was making money, her clients were happy, and she was also working 60-hour weeks and turning down new business because she couldn't take it on. Then she rebuilt her entire methodology around content engineering, doubled her client roster in six months, and went home at five o'clock. She tells people that content engineering didn't save her agency. It saved her.",
    qa: [
      {
        question: 'How do you describe what you do for work?',
        answer:
          "I run a boutique content engineering agency. We help mid-market B2B companies build content operations that actually scale. What we're selling isn't content; it's the infrastructure to produce content consistently and well. Our best engagements are the ones where the client eventually doesn't need us anymore because we've built something that runs without us. I know that sounds like bad business, but it's how I think about the work.",
      },
      {
        question: 'How has that changed in the last three years?',
        answer:
          "Three years ago, we were a content production agency. Good writers, decent strategy, entirely dependent on the hours of my team. If a writer got sick or quit, a client felt it immediately. Now we're a systems agency. The workflows we build for clients don't depend on any one person's skills. The quality is more consistent, the output is more reliable, and I can take on twice as many clients with the same team size. That last part is what changed my business.",
      },
      {
        question: 'When did you first learn about content engineering? What was that moment like?',
        answer:
          "I had a difficult conversation with a client who was unhappy about turnaround times. I was right and they were wrong about the underlying issue, but the conversation forced me to look honestly at my processes. I went looking for better frameworks and found content engineering. My first reaction was defensive: 'I already do all this.' My second reaction, a week later after really sitting with it, was: 'I do parts of this, but not the systematic version.' That gap between what I thought I was doing and what I was actually doing was where all the improvement lived.",
      },
      {
        question: 'What are you most excited about in the future of marketing?',
        answer:
          "Agencies that think like engineers are going to have a serious competitive advantage. I see a lot of shops that are still operating exactly the way agencies operated fifteen years ago: a creative director, some writers, and a lot of personality. That model isn't dead, but it's getting harder to make profitable. The agencies that survive and grow are going to be the ones that build systems and treat content as infrastructure. I already see it in the clients who want to hire us: they're asking better questions.",
      },
      {
        question: 'What are you most nervous about in the future of marketing?',
        answer:
          "Clients who think content engineering is a shortcut. It's not. It's a better way of working, but it still requires craft, judgment, and strategy at every step. I've had conversations with potential clients who want to talk about how fast they can produce content after implementing our methodology. That question makes me nervous. Volume is the wrong goal. Systematic quality is the goal. When I talk to those clients, I'm very honest about what we can and can't do, and sometimes that means I don't close the deal.",
      },
      {
        question: "What's something you've accomplished that you never thought would have been possible before?",
        answer:
          "I took two weeks off completely last summer. No email, no Slack, no calls. For the first time since I started the agency. The business didn't just survive; it ran exactly as it should have. That was the proof point for me that we'd actually built something: not content, but a self-sustaining system. I came back to no disasters, happy clients, and a team that had made good decisions in my absence. That felt like success in a way that revenue numbers never quite have.",
      },
      {
        question: "What's the biggest win or project you're most proud of since adopting content engineering?",
        answer:
          "We rebuilt a tech company's entire content operation from the ground up in four months. They had good writers and terrible processes: everything was ad hoc, nothing was documented, quality was inconsistent, and they were constantly behind on their publishing calendar. We came in, mapped everything, built a content engineering framework specific to their audience and their product, trained their team, and handed it back. Six months later their traffic was up 140% and they'd added a full-time content engineering role to their team. When clients build internal capability because of your work, that's the thing I'm most proud of.",
      },
      {
        question: 'How did your team or manager respond when you started doing things differently?',
        answer:
          "My team had questions, mostly because they'd seen me try to fix things before. I've been honest with my team for years about what's working and what isn't, so there was some healthy skepticism: 'Is this another new thing Sofia's excited about for three weeks?' What changed their minds was that I showed them the workflow before I asked them to use it. I invited them to break it, to find the flaws, to tell me what was missing. They found some real things. We fixed them. By the time we implemented it, it was as much their process as mine.",
      },
      {
        question: "What advice would you give someone just getting started with content engineering?",
        answer:
          "Be honest about what you're actually producing versus what you think you're producing. That gap is where content engineering lives. Most teams I work with believe they have more consistency and quality control than they do. The first thing I do with any new client is read everything they've published in the last six months without telling them what I'm looking for. The patterns I find are usually illuminating and sometimes uncomfortable. You can't fix what you can't see, and most teams are more comfortable with assumptions than with audits.",
      },
      {
        question: 'What would you be doing if you were not in marketing?',
        answer:
          "I spent a summer in college working at a restaurant where the chef ran the kitchen like a conductor. Every station knew exactly what to do, everyone had their mise en place, and the whole thing moved like one organism. I've thought about that kitchen a lot while building my agency. If I weren't doing this, I'd probably be running a restaurant. Small, specific menu, obsessive about sourcing. Probably too small to be profitable. I'd be happy and broke.",
      },
    ],
    pullQuotes: [
      "Content engineering didn't save my agency. It saved me.",
      "When clients build internal capability because of your work, that's the thing I'm most proud of.",
      "Be honest about what you're actually producing versus what you think you're producing. That gap is where content engineering lives.",
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
    portraitGradient: 'portrait-gradient-5',
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
