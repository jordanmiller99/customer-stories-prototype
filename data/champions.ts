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
    name: 'Lucy Hoyle',
    slug: 'lucy-hoyle',
    company: 'Carta',
    role: 'Senior Content Engineer',
    championLevel: 'Gold',
    editorialHeadline: 'The Content Engineer Who Trained Both the LLMs and the Humans',
    introParagraph:
      "Lucy Hoyle has a theory about AI in content: the problem isn't the models. It's that we haven't caught up to them yet. As Senior Content Engineer at Carta — the equity management platform that runs cap tables for half of Silicon Valley — she's spent the last two years doing something most content teams haven't figured out: building research systems that track policy shifts and SEO patterns simultaneously, and then convincing her colleagues to actually use them. She thinks the next frontier in content engineering isn't automation. It's upskilling.",
    qa: [
      {
        question: 'How do you describe what you do for work?',
        answer:
          "I'm a content engineer at a fintech company, which means I build and run the systems that make our content operation scalable and citable. That includes everything from research workflows that track regulatory and policy conversations to the infrastructure that gets a piece through legal review without everyone losing their mind. The engineering part is real: I think about architecture as much as I think about writing.",
      },
      {
        question: 'How has your work changed in the last two years?',
        answer:
          "The tools changed first, and then the questions changed. Two years ago I was asking: how do we produce more? Now I ask: how do we produce content that gets cited by AI systems? That's a completely different optimization problem. It requires specificity, structured data, authoritative sourcing. It pushed our whole team to get more rigorous, which honestly was overdue.",
      },
      {
        question: "You've talked about needing to train both the LLMs and the humans. What do you mean by that?",
        answer:
          "There's so much we can automate with AI now, but there's still a lot it can't do on its own. As we train LLMs on our brand voice and our content patterns, we also need to upskill the humans working alongside those models. The writers and editors who thrive are the ones learning to think like engineers: not just producing content, but designing the systems it flows through. That takes deliberate investment. You can't just hand someone a tool and expect transformation.",
      },
      {
        question: 'Carta sits at the intersection of equity management and the startup ecosystem — not the easiest content territory. How do you handle that?',
        answer:
          "With a lot of respect for legal. Genuinely. Our content lives in a world of cap table mechanics, 409A valuations, and fund administration — all of it regulated, all of it high-stakes for founders making real financial decisions. We can't get things wrong. What AirOps gave us was a way to accelerate approvals: instead of exporting drafts and emailing them around, legal and subject matter experts can just jump in and leave comments directly. That sounds like a small thing. It cut our review time in half.",
      },
      {
        question: 'What are you most excited about in the future of content marketing?',
        answer:
          "The fact that AI search is forcing an honesty reckoning. If you want your content cited by AI systems, it has to be accurate, specific, and useful. Vague thought leadership doesn't survive that filter. Generic how-to content doesn't either. The companies that invested in real depth — real research, real subject matter expertise — are going to look very smart very soon.",
      },
      {
        question: 'What are you most nervous about?',
        answer:
          "That teams will chase the wrong optimization. There's a temptation to focus purely on structured data and schema and technical SEO signals — treat getting cited by AI like an engineering problem to be solved. But the foundation is still quality. An AI system cites content that's genuinely useful. You can't engineer your way around that part.",
      },
      {
        question: "What's the biggest win you're most proud of?",
        answer:
          "We built a research system that tracks policy discussions and SEO patterns simultaneously — not two separate workflows, one unified system. Carta operates in a space where regulatory changes can shift what founders need to know overnight. Being able to surface those shifts in our content pipeline before competitors even noticed them was a real competitive advantage. It took months to build and about two weeks to prove its value.",
      },
      {
        question: 'How did you get your team to actually adopt new workflows?',
        answer:
          "AirOps is more customizable, scalable, personalized, and human than any tool we've used in the past. Now we can add more creativity to our content. That was the sell, eventually — not the efficiency argument, but the creative one. When people realized that the system was handling the tedious structural work, they had more mental energy for the parts that actually required good thinking. That's a pitch that lands with writers.",
      },
      {
        question: "What's the career lesson that took you longest to learn?",
        answer:
          "That the title 'content' undersells the work. I spent years apologizing for not being an engineer or a data scientist. Then I realized: I build systems, I think in pipelines, I model information architecture. I just do it with language instead of code. When I started owning that framing, the conversations I had with technical colleagues got much better. They started treating content as infrastructure. Because it is.",
      },
    ],
    pullQuotes: [
      "As we train LLMs, we also need to upskill the humans working alongside them.",
      "The companies that invested in real depth are going to look very smart very soon.",
      "I build systems, I think in pipelines, I model information architecture. I just do it with language instead of code.",
    ],
    heroIllustration: '/illustrations/placeholder-hero.svg',
    detailIllustrations: [
      '/illustrations/placeholder-detail-1.svg',
      '/illustrations/placeholder-detail-2.svg',
    ],
    companyLogo: '/logos/placeholder-logo.svg',
    ogImage: '/og/lucy-hoyle.png',
    publishDate: '2025-01-14',
    published: true,
    portraitTint: 'portrait-tint-1',
  },
  {
    name: 'Connor Beaulieu',
    slug: 'connor-beaulieu',
    company: 'LegalZoom',
    role: 'Senior SEO/AEO Manager',
    championLevel: 'Gold',
    editorialHeadline: "The Regulated Marketer Who Built a 30-Minute Reddit Machine",
    introParagraph:
      "Connor Beaulieu runs SEO and AEO at LegalZoom, which means he spends his days thinking about how a legal technology company earns trust from people who are, by definition, anxious and skeptical. He's also the person who turned LegalZoom's Reddit strategy — previously a 48-hour, five-person operation — into something two people can run in under thirty minutes. He'll tell you the speed isn't the point. The point is that human review stayed in the loop the entire time. At a legal company, that's not a nice-to-have.",
    qa: [
      {
        question: 'How do you describe what you do for work?',
        answer:
          "I make sure LegalZoom shows up in the right places when people have legal questions — which is most of the time, because legal questions live at every major life event. My job is both traditional SEO and increasingly what's being called AEO: answer engine optimization. That means thinking about how our content gets surfaced by AI systems, not just Google. The audience is different. The structure of good content is different. The optimization is different.",
      },
      {
        question: 'How has your work changed as AI search has become real?',
        answer:
          "It's raised the bar for specificity in ways I'm genuinely excited about. AI systems don't surface vague legal overviews. They surface specific, structured, authoritative answers. That's pushed us to go deeper on particular legal topics rather than spreading thin across every possible search term. The content I'm most proud of at LegalZoom has always been the specific, actionable stuff. Now the algorithm agrees.",
      },
      {
        question: "You built LegalZoom's Reddit workflow from scratch. Walk me through what that looked like.",
        answer:
          "It went from 48 hours and five people to under 30 minutes with one and a half people. The old process was almost entirely manual: someone monitoring Reddit, routing posts to a subject matter expert, drafting a response, getting it reviewed, posting it. Each step was a handoff, each handoff was a delay. We rebuilt it so the monitoring, routing, and initial drafting are automated, and human review is one focused step rather than five disconnected ones. We never post anything to production that is AI-generated without a human signing off. The stakes are too high at a legal company. But we got the human review down to the part that actually requires a human.",
      },
      {
        question: 'That tension between speed and compliance shows up in regulated industries a lot. How do you think about it?',
        answer:
          "I think about it as a design problem. The old instinct is to say: compliance requires slowness, so we're slow. The better question is: what part of the process actually requires human judgment, and what part is just friction that we haven't engineered out yet? At LegalZoom, the human judgment part is: is this response accurate, is it on-brand, does it give the right person the right advice. The friction part was everything else. We kept the judgment, removed the friction.",
      },
      {
        question: 'What does content for a legal audience require that other industries don\'t?',
        answer:
          "You need it to be shorter, punchier, more to the point, the structure needs to be different. Legal audiences are stressed. They're searching because something is happening in their lives — starting a business, dealing with an estate, navigating a dispute. They don't need a 2,000-word explainer, they need a clear answer to a specific question, fast. The content engineering challenge is producing that at scale without losing accuracy or empathy.",
      },
      {
        question: "What's the win you're most proud of?",
        answer:
          "Getting other people excited about the possibilities in this space. After making a couple of custom workflows for other teams, I had people asking questions, getting involved, thinking of ways automation could help them scale their initiatives. When a compliance team is actively asking you to build workflows for them instead of reluctantly approving yours, you've done something right. That culture shift is harder than any technical build.",
      },
      {
        question: 'What are you most excited about in the future of content marketing?',
        answer:
          "AEO becoming a real discipline. Right now a lot of teams are treating it as SEO with some schema sprinkled on top. It's actually a different mindset: you're writing for systems that synthesize and cite, not just rank and link. The teams that figure out how to consistently get cited by AI overviews for high-intent queries are going to have a massive advantage. We're still in early innings.",
      },
      {
        question: "What's the hardest thing about working in SEO that nobody tells you upfront?",
        answer:
          "That the most important diagnostic work is the least glamorous work. Get your data first. Spend real time understanding what's actually performing before you try to change anything. Most people diagnose the problem they want to solve rather than the one in front of them. The wins I'm most proud of came from sitting with uncomfortable data for a few weeks and asking: why is this working? That question is not exciting. But it is the work.",
      },
    ],
    pullQuotes: [
      "We kept the judgment, removed the friction.",
      "We never post anything AI-generated without a human signing off. The stakes are too high.",
      "When a compliance team is actively asking you to build workflows, you've done something right.",
    ],
    heroIllustration: '/illustrations/placeholder-hero.svg',
    detailIllustrations: [
      '/illustrations/placeholder-detail-1.svg',
      '/illustrations/placeholder-detail-2.svg',
    ],
    companyLogo: '/logos/placeholder-logo.svg',
    ogImage: '/og/connor-beaulieu.png',
    publishDate: '2025-01-28',
    published: true,
    portraitTint: 'portrait-tint-2',
  },
  {
    name: 'Vivian Hoang',
    slug: 'vivian-hoang',
    company: 'Webflow',
    role: 'SEO Lead',
    championLevel: 'Gold',
    editorialHeadline: "The System Builder Who Makes Herself Unnecessary",
    introParagraph:
      "Vivian Hoang keeps a question on a Post-it near her monitor: 'How can I build a system that does this without me?' She's the SEO Lead at Webflow — the no-code platform that lets designers build production websites — and she's applied that question to everything from content refreshes to FAQ generation to the question of how AI search is changing where Webflow's customers come from. By June 2025, 8% of Webflow's total new signups were coming from AI, up from 2% eight months earlier. Those converts were coming in six times hotter than traditional SEO traffic. Vivian built the system that tracked it and the content strategy that accelerated it.",
    qa: [
      {
        question: 'How do you describe what you do for work?',
        answer:
          "I run SEO and increasingly AEO at Webflow. The job is to make sure people find us when they're looking for a website-building solution — but the definition of 'find' is changing. It used to mean Google. Now it means AI search, too, and the two have meaningfully different requirements. My job is making sure we show up in both places for the right searches, with content that actually answers what people are asking.",
      },
      {
        question: 'How did you start thinking about AI search differently than traditional SEO?',
        answer:
          "We had an early data signal that something was changing. AI-sourced signups were converting at a dramatically higher rate than our organic SEO traffic. That's a sign of intent: someone who finds you through an AI answer was asking a more specific question. They already understand they have a problem. Your content convinced an AI system to vouch for you. That's a very different relationship than a keyword match.",
      },
      {
        question: "Webflow's content refresh was famously manual. What was it like before you automated it?",
        answer:
          "Extremely manual. Refreshing our content required hours of keyword research, competitor analysis, and CMS updates for every article. We were doing maybe 48 refreshes a year that way — and the backlog was enormous. Our content was aging, AI search was favoring fresh material, and we physically couldn't keep up. It prevented us from scaling effectively and responding quickly to AI search changes.",
      },
      {
        question: 'What changed after you built the system?',
        answer:
          "AirOps has given me a new superpower — automation that scales. We went from manually refreshing just 48 articles a year to automating dozens each month. It's powerful seeing immediate results like a 20% lift in organic traffic within days of a refresh. That's not marginal improvement. That's compounding quickly enough to matter to the business.",
      },
      {
        question: "Tell me about the FAQ project — 'keeping humans at the center' while adding FAQs to hundreds of posts.",
        answer:
          "The temptation with scale is to just generate and publish. We made a deliberate choice not to do that. Every FAQ we added went through a human review layer — not because we didn't trust the AI output, but because the FAQ is a direct answer to a real question someone is asking. If it's wrong or robotic, it damages trust. We built the system to generate and format, but the editorial call on every piece stayed human. That's actually the interesting design challenge: figuring out where human judgment adds the most value and protecting that space.",
      },
      {
        question: 'What does Webflow being a no-code platform change about how you do content?',
        answer:
          "It makes the product story a content story. Our customers are designers and marketers who want to build real websites without being dependent on a developer. That's an identity claim, not just a feature. The content has to embody the same values: expert, capable, not intimidating. I think about that a lot — we're writing for people who chose Webflow partly because they don't want gatekeepers. Our content can't feel like gatekeeping.",
      },
      {
        question: 'What are you most excited about in the future of your field?',
        answer:
          "The legitimacy of content as a measurable growth channel. We have the numbers now: AI referral traffic, conversion rates by source, revenue influenced by specific content assets. That changes the conversation with leadership. I'm no longer arguing that content matters — I'm presenting attribution data. That took years to build the infrastructure for, but it's changed my position in every planning conversation.",
      },
      {
        question: "What's the career shift that changed how you work most?",
        answer:
          "Instead of asking how I can do this faster, I started asking how I can build a system that does it without me. That sounds like a small reframe, but it changes everything about how you approach a problem. When I'm the bottleneck, the operation doesn't scale. When the system is the bottleneck, I can fix the system. I'm constantly trying to make myself unnecessary — not because I want to work less, but because it means I'm building something that lasts.",
      },
    ],
    pullQuotes: [
      "Instead of asking how I can do this faster, I ask how I can build a system that does it without me.",
      "AI-sourced signups were converting at six times the rate of traditional organic. That changes the strategy.",
      "We're writing for people who chose Webflow because they don't want gatekeepers. Our content can't feel like gatekeeping.",
    ],
    heroIllustration: '/illustrations/placeholder-hero.svg',
    detailIllustrations: [
      '/illustrations/placeholder-detail-1.svg',
      '/illustrations/placeholder-detail-2.svg',
    ],
    companyLogo: '/logos/placeholder-logo.svg',
    ogImage: '/og/vivian-hoang.png',
    publishDate: '2025-02-11',
    published: true,
    portraitTint: 'portrait-tint-3',
  },
  {
    name: 'Brianna Chapman',
    slug: 'brianna-chapman',
    company: 'Apollo.io',
    role: 'Social Community Manager',
    championLevel: 'Green',
    editorialHeadline: "Connection Over Content: The Community Manager's Counterintuitive Playbook",
    introParagraph:
      "Before Brianna Chapman joined Apollo.io — the B2B sales intelligence platform powering outbound for thousands of revenue teams — she spent years as the person behind the voice of twelve-plus CEOs at billion-dollar companies. She wrote their LinkedIn posts, shaped their executive presence, and learned something most content strategists don't: the content that lands hardest is the content that feels least like content. At Apollo, she's applied that lesson to community. Her philosophy is disarmingly simple and genuinely hard to execute: connection first, content only when necessary.",
    qa: [
      {
        question: 'How do you describe what you do for work?',
        answer:
          "I build and nurture the community around Apollo.io. That means being present in the spaces where our users talk — LinkedIn, Slack, forums, events — and making sure those conversations feel human. Not broadcasting. Not announcing. Listening, responding, connecting people to each other. The content I create is in service of that, not the other way around.",
      },
      {
        question: "You've written a lot about 'connection over content.' What does that actually mean in practice?",
        answer:
          "It means content should take a back seat to the relationship. A lot of community programs get this backwards: they see community as a distribution channel for content. Post the blog, share the webinar, announce the feature. That's not community, that's a mailing list with a Slack channel attached. Real community is when people show up for each other, not for your content. My job is to create conditions for that, which mostly means staying out of the way and occasionally being the catalyst.",
      },
      {
        question: 'You spent years ghostwriting LinkedIn content for CEOs at major companies. What did that teach you?',
        answer:
          "That voice is everything and authenticity is learnable. The executives who did LinkedIn well weren't the ones with the most polished prose. They were the ones who said something real — an actual opinion, a genuine story, a real question they were sitting with. My job was to find that thing in a conversation and turn it into a post. What I learned is that people can sense the difference between content that comes from a person and content that comes from a content strategy. The former gets engagement. The latter gets impressions.",
      },
      {
        question: 'How does community work differently at a B2B sales intelligence platform?',
        answer:
          "The users are themselves operators. Apollo users are salespeople, RevOps managers, growth leads — people who think about audiences and messaging for a living. They can smell inauthenticity faster than almost any audience. That raises the bar for everything we do in community. We have to actually be useful, actually be honest, actually be willing to answer the hard questions. These people will test whether you mean it.",
      },
      {
        question: 'What makes a community successful that most people underestimate?',
        answer:
          "Patience and consistency over time. Community doesn't compound the way content does. You can't write one great post and let the traffic roll in. You have to show up, every week, in the conversations, in the DMs, at the events. The relationships you build in month one don't pay off until month twelve. Most programs quit before the compounding starts. The ones that work are the ones that stayed.",
      },
      {
        question: "What's the biggest win you're most proud of?",
        answer:
          "The moments when community members start advocating for Apollo to each other unprompted. When someone posts a question in a forum and three Apollo users jump in to answer it, share their experience, and recommend the product — without me being in the thread. That's when you know you've built something real. It doesn't look dramatic. But it's what the whole thing is for.",
      },
      {
        question: 'What are you most excited about in the future of your field?',
        answer:
          "AI making more space for human interaction, not less. When the automated, scalable parts of marketing get better automated, the residue — the things that still require a real person — becomes more valuable. Community is one of those things. You can't automate genuine connection. The investment in it goes up as everything around it gets more commoditized.",
      },
      {
        question: "What do you know now that you wish you'd known earlier in your career?",
        answer:
          "That the work that's hardest to measure is often the most valuable. Community, relationships, trust — none of these show up cleanly in a dashboard. I spent a long time trying to build attribution models for relationship-based work, and I eventually realized I was fitting the work to the metric instead of finding the right metric for the work. The better question is: are the right people showing up? Are they staying? Are they bringing others? Those are the signals.",
      },
    ],
    pullQuotes: [
      "Content should take a back seat to the relationship. A lot of community programs have this backwards.",
      "People can sense the difference between content that comes from a person and content that comes from a content strategy.",
      "Community doesn't compound the way content does. The programs that work are the ones that stayed.",
    ],
    heroIllustration: '/illustrations/placeholder-hero.svg',
    detailIllustrations: [
      '/illustrations/placeholder-detail-1.svg',
      '/illustrations/placeholder-detail-2.svg',
    ],
    companyLogo: '/logos/placeholder-logo.svg',
    ogImage: '/og/brianna-chapman.png',
    publishDate: '2025-02-25',
    published: true,
    portraitTint: 'portrait-tint-4',
  },
  {
    name: 'Tim Metz',
    slug: 'tim-metz',
    company: 'Animalz',
    role: 'Director of Marketing & Innovation',
    championLevel: 'Gold',
    editorialHeadline: "Pair Writing from Xi'an: On Keeping the Human in the Loop",
    introParagraph:
      "Tim Metz has lived in nine cities across four continents. He grew up in the Netherlands, spent years in Beijing, Barcelona, Hong Kong, Nairobi, Sofia, and Sydney, and is currently based in Xi'an, China — where he does the most focused writing work of his career in roughly 25 to 30 hours a week. He's the Director of Marketing and Innovation at Animalz, the content agency known for the kind of long-form depth that enterprise SaaS companies can't produce internally. His view on AI in content is both optimistic and precise: it's a writing partner, not a ghostwriter. The risk, he'll tell you, is that you stop thinking.",
    qa: [
      {
        question: 'How do you describe what you do for work?',
        answer:
          "I run marketing and innovation at a content marketing agency, which means I'm responsible for how Animalz talks about itself and also for figuring out how content marketing needs to evolve. Those two things are supposed to be in tension: if we're saying content marketing is changing, we'd better be changing how we do it too. I spend a lot of time at that intersection.",
      },
      {
        question: "You've talked about 'pair writing' with AI. What does that look like for you?",
        answer:
          "I'm still writing like a human, doing the hard writing work, but then using AI a lot going back and forth — almost like pair programming but pair writing. The AI doesn't write for me. It helps me think. I'll draft something, then ask it to push back on my argument, or find the gap in my logic, or suggest a different structure for a piece I'm stuck on. It's the part of writing where you wish you had a smart colleague sitting next to you. Now I do.",
      },
      {
        question: "What's the risk you worry about?",
        answer:
          "The risk is that you stop thinking. If you outsource the hard parts of writing to the AI, you're not actually writing — you're editing, which is a different skill and produces a different kind of content. The discipline I try to maintain is: the ideas have to come from me. The struggle with structure and argument has to happen in my head before I bring AI in. If you skip that work, it shows. AI-generated prose has a particular texture when the human hasn't done the thinking first.",
      },
      {
        question: "Animalz is known for deeply researched, long-form content. How do you square that with AI's tendency toward competent mediocrity?",
        answer:
          "Carefully. There's a version of AI-assisted content that produces something that reads fine but says nothing new. That's useless for Animalz's clients. If everybody can repurpose easily, maybe writing skills become rare because others rely on AI, which actually makes good writers more valuable. The depth we sell — real research, genuine point of view, something a senior leader at a real company would find genuinely useful — that still requires a human who has done the hard work. AI accelerates it. It doesn't replace it.",
      },
      {
        question: "You work something like 25-30 hours a week and front-load your focus before noon. How do you protect that?",
        answer:
          "It's essentially a system design problem. I structured my work life so the hard things happen when my brain is at its best. I eat my frogs in the morning — the writing, the thinking, the decisions. The meetings and coordination happen later. Over time I got better at defending that structure, which mostly means being very clear with people about when I'm available and when I'm not. It's not discipline, it's architecture.",
      },
      {
        question: "You've lived in nine cities on four continents. What does that kind of mobility teach you about work?",
        answer:
          "That very little of what you think is required is actually required. Working remotely from Xi'an, I've collaborated with clients in New York and San Francisco and London without any of them particularly caring that I'm in central China. What matters is the quality of the work and the reliability of your communication. The geography mostly comes up in time zone math. It clarified for me that the job is the thinking and the writing, and you can do that anywhere you can sit with good internet and a focused mind.",
      },
      {
        question: 'What are you most excited about in the future of content marketing?',
        answer:
          "Custom tools built by content people for content problems. You're going to see a lot more of that — people who understand content deeply using AI to build specific workflow automation for their particular challenges. Not generic tools, custom ones. The content strategist who can also build a little is going to be very powerful.",
      },
      {
        question: "What's the piece of advice you find yourself giving most often?",
        answer:
          "Write something real. Not an AI summary of existing positions. Not a list of things everyone already knows. A real argument that you actually believe, based on something you've genuinely observed. That's the content that gets remembered and shared. And that standard is more achievable for small teams now because the production overhead has dropped so much. You don't need a team of twelve to produce one great piece. You need one good thinker with the right tools.",
      },
    ],
    pullQuotes: [
      "The risk is that you stop thinking. If you outsource the hard parts of writing to AI, you're not writing — you're editing.",
      "If everybody can repurpose easily, maybe writing skills become rare. Which makes good writers more valuable.",
      "It's not discipline, it's architecture. Structure your work so the hard things happen when your brain is at its best.",
    ],
    heroIllustration: '/illustrations/placeholder-hero.svg',
    detailIllustrations: [
      '/illustrations/placeholder-detail-1.svg',
      '/illustrations/placeholder-detail-2.svg',
    ],
    companyLogo: '/logos/placeholder-logo.svg',
    ogImage: '/og/tim-metz.png',
    publishDate: '2025-03-10',
    published: true,
    portraitTint: 'portrait-tint-5',
  },
  {
    name: 'Lauren Shufran',
    slug: 'lauren-shufran',
    company: 'Echo North',
    role: 'Founder & Content Strategist',
    championLevel: 'Gold',
    editorialHeadline: "The Bard of B2B: What Shakespeare Taught One Marketer About Narrative",
    introParagraph:
      "Lauren Shufran has a PhD in Early Modern British Literature, two published poetry collections, and a client list that includes Gem, Rattle, Webflow, and about a dozen venture-backed startups. They spent years as Head of Content at scaling SaaS companies before founding Echo North, their boutique content strategy consultancy. Their methodology has three steps — Find the Throughline, Build the Flagship, Evangelize It — and it comes from a discipline that most B2B marketers haven't thought much about: close reading. Lauren will tell you that the reason most B2B content is forgettable is that it doesn't have a real argument. They learned how to find arguments in Shakespeare. Turns out they're hiding in SaaS data, too.",
    qa: [
      {
        question: 'How did a Shakespearean scholar end up doing B2B content strategy?',
        answer:
          "Circuitously, then suddenly. I finished my PhD, spent a few years doing academic work and publishing poetry, and eventually found myself teaching at a startup accelerator — they wanted someone who could help founders tell their stories. It clicked immediately. The skills are the same: close reading, finding the argument underneath the surface text, understanding how narrative creates conviction. B2B content is mostly underwritten because the people doing it were trained for different goals. I wasn't.",
      },
      {
        question: "What does 'finding the throughline' mean in practice?",
        answer:
          "It means finding the thing that's actually true and interesting about a company that most of their content isn't saying. Almost every company has it — a genuine insight, a counterintuitive finding in their data, a real story in their customer relationships. The problem is that marketing content tends to drift toward the comfortable and the safe: the features, the benefits, the proof points. The throughline is usually hidden in the thing they're nervous to say out loud. My job is to find that and build a narrative around it.",
      },
      {
        question: "Your 'cornerstone content' methodology — flagship assets, benchmark reports, definitive guides — where does that come from?",
        answer:
          "From a conviction that B2B content should be worth reading on its own terms, not just as a funnel vehicle. The best assets I've built are things people actually want to keep — reports that get shared internally, guides that live on someone's desktop for a year. That requires real research, real point of view, and the willingness to say something specific rather than something broad and safe. Shakespeare's plays work because they're particular: particular characters, particular situations, particular language. Genericness is the enemy of memorable.",
      },
      {
        question: "You publish poetry under the same name you do B2B strategy. How do those parts of your work talk to each other?",
        answer:
          "Poetry teaches economy. Every word has to earn its place — not because poetry is short, but because poetry is dense. You can't hide behind wordiness. That habit of ruthless editing transfers directly. The B2B content I'm most proud of is the content that says the most in the least space. My poetry collection 'Inter Arma' and a good content brief have more in common than most people would expect: both are about finding the most precise language for something that's hard to say.",
      },
      {
        question: 'What does a company need to have before they can do good content strategy?',
        answer:
          "Something real to say. That sounds obvious, but a surprising number of companies come to me hoping content will create differentiation that the product hasn't yet earned. Content can amplify what's true — it can't manufacture what isn't there. The best engagements I have are with founders who have a genuine conviction about their market, real data from their customers, and a story they haven't figured out how to tell yet. I can help with the telling. I can't help with the having.",
      },
      {
        question: 'How has AI changed what you do at Echo North?',
        answer:
          "It's changed the production layer, which is the least interesting part of my work. The research, the structural thinking, the finding of the throughline — that's where the value is, and that still requires a human with good judgment and a lot of deep reading. What AI has changed is the drafting and revision cycle. It's faster. It lets me iterate faster. But I've watched AI produce confident, well-structured, deeply unremarkable content at scale, which has made me more committed than ever to the part that requires genuine intellectual engagement.",
      },
      {
        question: 'You work selectively — a small number of clients at a time. Why?',
        answer:
          "Because the work requires real immersion. To find the throughline for a company, I need to read everything they've published, talk to their customers, understand their competitive landscape, sit with their data. That's not something you can do for twenty clients at once. I'd rather do three engagements that result in genuinely category-defining content than ten that produce polished mediocrity. The selective model is also a quality signal to the clients themselves: they know that when Echo North takes them on, they're getting the real thing.",
      },
      {
        question: "What's something about content work that took you a long time to really accept?",
        answer:
          "That the best content often makes people slightly uncomfortable. The throughline, the real argument, the genuine point of view — it has edges. It implies something about the market, about competitors, about the conventional wisdom. Shakespeare's plays work because they're willing to portray ugliness and complexity alongside everything else. The B2B content I'm proudest of has that quality: it says something true that wasn't being said, and some people push back on it. That's usually a sign I found the right thing.",
      },
    ],
    pullQuotes: [
      "Content can amplify what's true. It can't manufacture what isn't there.",
      "Genericness is the enemy of memorable. Shakespeare's plays work because they're particular.",
      "The B2B content I'm proudest of says something true that wasn't being said. Some people push back. That's usually a good sign.",
    ],
    heroIllustration: '/illustrations/placeholder-hero.svg',
    detailIllustrations: [
      '/illustrations/placeholder-detail-1.svg',
      '/illustrations/placeholder-detail-2.svg',
    ],
    companyLogo: '/logos/placeholder-logo.svg',
    ogImage: '/og/lauren-shufran.png',
    publishDate: '2025-03-24',
    published: true,
    portraitTint: 'portrait-tint-1',
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
