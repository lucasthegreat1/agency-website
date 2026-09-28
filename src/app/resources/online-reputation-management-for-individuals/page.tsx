import { Metadata } from 'next';
import Link from 'next/link';
import AIAuditWidget from '@/components/AIAuditWidget';

export const metadata: Metadata = {
  title: 'Affordable Online Reputation Management on Google & ChatGPT | Xtract',
  description:
    "Online reputation management (ORM) for individuals doesn't have to cost a fortune. Learn what ORM is, why it matters in the age of Google and ChatGPT, and how Xtract helps you control your search results.",
  openGraph: {
    title: 'Affordable Online Reputation Management on Google & ChatGPT | Xtract',
    description:
      "Online reputation management (ORM) for individuals doesn't have to cost a fortune. Learn what ORM is, why it matters in the age of Google and ChatGPT, and how Xtract helps you control your search results.",
    type: 'article',
    url: 'https://tryxtract.co.uk/resources/online-reputation-management-for-individuals',
  },
};

export default function ORMForIndividualsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline:
          'Online Reputation Management for Individuals: An Affordable Guide to Controlling What People Find About You',
        description:
          "Online reputation management (ORM) for individuals doesn't have to cost a fortune. Learn what ORM is, why it matters in the age of Google and ChatGPT, and how Xtract helps you control your search results.",
        author: {
          '@type': 'Person',
          name: 'Luke Haracic',
          jobTitle: 'Personal Reputation & SEO Consultant',
          worksFor: {
            '@type': 'Organization',
            name: 'XTRACT AI Agency',
          },
        },
        publisher: {
          '@type': 'Organization',
          name: 'XTRACT AI Agency',
          url: 'https://tryxtract.co.uk',
        },
        mainEntityOfPage:
          'https://tryxtract.co.uk/resources/online-reputation-management-for-individuals',
        datePublished: '2026-09-28',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is online reputation management only for people with a bad reputation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Many of our clients simply want a stronger, more accurate presence. ORM is as much about building a positive reputation as fixing a negative one.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you remove something from Google?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Sometimes. Content can be removed where it breaks a platform's policies or legal grounds apply. Where it can't, we focus on building stronger results that push it down.",
            },
          },
          {
            '@type': 'Question',
            name: 'Can you change what ChatGPT says about me?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We can\'t edit it directly, but AI tools draw on public web sources. By improving and strengthening those sources, we help these tools present you more accurately.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does it take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'It depends on your starting point and competition, but most people begin to see movement within a few weeks, with more significant change over a few months.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is it worth it for an individual?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If people search for you before hiring you, working with you or trusting you, then yes. Your name is often your first impression.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div style={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh', paddingTop: '5rem', paddingBottom: '6rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ARTICLE HEADER */}
      <section style={{ marginBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.8rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/resources"
              style={{ color: '#aaaaaa', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 600 }}
            >
              ← Back to Resources
            </Link>
            <span style={{ color: '#444444' }}>|</span>
            <span
              style={{
                padding: '0.3rem 0.8rem',
                backgroundColor: '#ffffff',
                color: '#000000',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 800,
              }}
            >
              PERSONAL REPUTATION & ORM
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}
          >
            Online Reputation Management for Individuals: An Affordable Guide to Controlling What People Find About You
          </h1>

          <div style={{ display: 'flex', gap: '1.5rem', color: '#aaaaaa', fontSize: '0.92rem', marginBottom: '2.5rem', fontWeight: 500, flexWrap: 'wrap' }}>
            <span>By <strong>Luke Haracic</strong> (SEO & Personal Reputation Consultant)</span>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <span>September 2026</span>
          </div>
        </div>
      </section>

      {/* MAIN ARTICLE BODY */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ backgroundColor: '#111111', border: '1px solid #222222', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.75, fontSize: '1.05rem', color: '#cccccc' }}>
            
            {/* SECTION 1: WHAT IS ORM */}
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
              What Is Online Reputation Management?
            </h2>

            <p style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 500, lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Online reputation management (ORM) is the practice of shaping what people see when they search for you online. It means building, monitoring and improving your digital presence so the results that appear for your name are accurate, professional and reflect who you are today.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              For years, ORM was seen as something for celebrities, politicians and big corporations. That's no longer true. Recruiters, landlords, clients, business partners and even dates routinely search for people before they meet them. Whatever comes up first can shape their opinion before you've said a word.
            </p>

            <p style={{ marginBottom: '1.2rem', fontWeight: 700, color: '#ffffff' }}>ORM for individuals typically covers:</p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2.5rem', paddingLeft: 0 }}>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                <strong style={{ color: '#ffffff' }}>• Search results:</strong> what appears when someone Googles your name
              </li>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                <strong style={{ color: '#ffffff' }}>• Social profiles:</strong> how your public accounts look and rank
              </li>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                <strong style={{ color: '#ffffff' }}>• Reviews and mentions:</strong> press coverage, forum posts, review sites and comments
              </li>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                <strong style={{ color: '#ffffff' }}>• Outdated or inaccurate content:</strong> old articles, incorrect information or content that no longer represents you
              </li>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                <strong style={{ color: '#ffffff' }}>• AI-generated answers:</strong> what tools like ChatGPT say about you when someone asks
              </li>
            </ul>

            <hr style={{ border: 0, borderTop: '1px solid #222222', margin: '2.5rem 0' }} />

            {/* SECTION 2: WHY REPUTATION MATTERS MORE THAN EVER */}
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
              Why Your Personal Reputation Matters More Than Ever
            </h2>

            <p style={{ marginBottom: '1.5rem' }}>
              Your name is your most valuable professional asset, and the internet holds a permanent, searchable record of it. A few situations where this comes up:
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', paddingLeft: 0 }}>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                <strong style={{ color: '#ffffff' }}>• Job hunting:</strong> employers often search candidates before interviewing them
              </li>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                <strong style={{ color: '#ffffff' }}>• Running a business or freelancing:</strong> clients check you out before they trust you with their money
              </li>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                <strong style={{ color: '#ffffff' }}>• Professional credibility:</strong> speakers, consultants, founders and specialists are judged on their online footprint
              </li>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                <strong style={{ color: '#ffffff' }}>• Fresh starts:</strong> if you've had a negative story, an old dispute or a mistaken-identity problem, you want the current version of you to be what people find
              </li>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                <strong style={{ color: '#ffffff' }}>• Privacy concerns:</strong> you may want less personal information easily discoverable
              </li>
            </ul>

            <div style={{ backgroundColor: '#181818', borderLeft: '4px solid #ffffff', borderRadius: '16px', padding: '1.8rem', marginBottom: '2.5rem' }}>
              <p style={{ fontSize: '1rem', color: '#ffffff', lineHeight: 1.65, margin: 0, fontWeight: 600 }}>
                The good news is that a poor or messy search result is rarely permanent. With the right strategy, it can be improved.
              </p>
            </div>

            {/* SECTION 3: REPUTATION LIVES IN GOOGLE & AI SEARCH */}
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
              The New Reality: Reputation Now Lives in Google and AI Search
            </h2>

            <p style={{ marginBottom: '1.5rem' }}>
              Google used to be the only place your reputation was decided. Now people are asking ChatGPT, Gemini, Perplexity, Copilot and other AI assistants questions like <em>"Who is [your name]?"</em> or <em>"Is [your name] a good person to hire?"</em>
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              These tools don't invent answers from nothing. They pull from what already exists across the web, including your website, LinkedIn, news articles, directories, interviews, reviews and other public sources. That means:
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem', paddingLeft: 0 }}>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                <strong style={{ color: '#ffffff' }}>1. If there's little quality information about you:</strong> AI tools have little to work with. They may give a thin, vague or inaccurate answer, or confuse you with someone else who shares your name.
              </li>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                <strong style={{ color: '#ffffff' }}>2. If negative or outdated content dominates the web:</strong> It can dominate AI answers too.
              </li>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                <strong style={{ color: '#ffffff' }}>3. If strong, consistent, authoritative content exists about you:</strong> AI tools are far more likely to surface it.
              </li>
            </ul>

            <p style={{ marginBottom: '2.5rem' }}>
              In other words, the same fundamentals that improve your Google results also improve how you appear in AI search, provided they're done properly and consistently.
            </p>

            {/* SECTION 4: HOW XTRACT SURFACES YOUR REPUTATION */}
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
              How Xtract Surfaces Your Reputation Across Google and AI Platforms
            </h2>

            <p style={{ marginBottom: '1.5rem' }}>
              Xtract is an SEO agency, and that background is what makes our approach to reputation different. Reputation management is, at its core, a search visibility problem: you want the right content, in front of the right people, on every platform where they look. That's exactly what we do every day.
            </p>

            <p style={{ marginBottom: '1.5rem', fontWeight: 700, color: '#ffffff' }}>Our process for individuals includes:</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
              <div style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.5rem', borderRadius: '16px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>1. A Full Reputation Audit</h3>
                <p style={{ color: '#aaaaaa', fontSize: '0.98rem', margin: 0, lineHeight: 1.65 }}>
                  We search your name the way your audience does, across Google, Bing and leading AI assistants, and document what appears. We look at rankings, sentiment, accuracy, gaps and anything that could be confused with you.
                </p>
              </div>

              <div style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.5rem', borderRadius: '16px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>2. Keyword and Search Intent Research</h3>
                <p style={{ color: '#aaaaaa', fontSize: '0.98rem', margin: 0, lineHeight: 1.65 }}>
                  Using professional SEO tools, we look at how people actually search for you and for the topics you want to be associated with. This tells us where the opportunity is and what content needs to exist.
                </p>
              </div>

              <div style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.5rem', borderRadius: '16px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>3. Building Strong, Ownable Assets</h3>
                <p style={{ color: '#aaaaaa', fontSize: '0.98rem', margin: '0 0 0.8rem 0', lineHeight: 1.65 }}>
                  The most reliable way to control your search results is to own the pages that rank. We help you develop and optimise assets such as:
                </p>
                <ul style={{ color: '#ffffff', paddingLeft: '1.2rem', fontSize: '0.95rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <li>A personal website or profile page that becomes the authoritative source on you</li>
                  <li>Optimised professional profiles, such as LinkedIn and industry directories</li>
                  <li>Thought leadership content, interviews and bios</li>
                  <li>Structured data and consistent naming so search engines and AI systems understand exactly who you are</li>
                </ul>
              </div>

              <div style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.5rem', borderRadius: '16px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>4. Surfacing Positive, Accurate Information</h3>
                <p style={{ color: '#aaaaaa', fontSize: '0.98rem', margin: 0, lineHeight: 1.65 }}>
                  We work on getting credible, positive and accurate information in front of both search engines and AI models, so that when someone asks about you, the answer reflects your real experience and achievements.
                </p>
              </div>

              <div style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.5rem', borderRadius: '16px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>5. Addressing Negative or Inaccurate Content</h3>
                <p style={{ color: '#aaaaaa', fontSize: '0.98rem', margin: 0, lineHeight: 1.65 }}>
                  Where content is outdated, incorrect or unfair, we look at the legitimate routes available: content removal requests where a platform's policies or the law support it, corrections, and outranking content that can't be removed by building stronger results above it.
                </p>
              </div>

              <div style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.5rem', borderRadius: '16px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>6. Ongoing Monitoring</h3>
                <p style={{ color: '#aaaaaa', fontSize: '0.98rem', margin: 0, lineHeight: 1.65 }}>
                  Reputation isn't a one-time fix. We track your results over time across Google and AI platforms so you can see progress and catch new issues early.
                </p>
              </div>
            </div>

            {/* SECTION 5: WHAT AFFORDABLE ORM LOOKS LIKE */}
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
              What Affordable ORM Actually Looks Like
            </h2>

            <p style={{ marginBottom: '1.5rem' }}>
              Reputation management has a reputation for being expensive, often because agencies quote corporate-level retainers to individuals. It doesn't need to be.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              Affordable ORM works when it's focused. Rather than throwing everything at the problem, we prioritise the actions that make the biggest difference for your situation, such as fixing your top-ranking results, building one or two strong owned assets and improving how you appear in AI answers. Many individuals don't need a sprawling campaign, just a clear plan and consistent execution.
            </p>

            <div style={{ backgroundColor: '#181818', border: '1px solid #333333', borderRadius: '16px', padding: '1.8rem', marginBottom: '2.5rem' }}>
              <p style={{ fontSize: '1.05rem', color: '#ffffff', lineHeight: 1.65, margin: 0, fontWeight: 700 }}>
                Our individual ORM packages are designed for focused execution without agency retainer bloat — giving you dedicated search strategy tailored specifically to your personal profile.
              </p>
            </div>

            {/* SECTION 6: WHAT REALISTIC RESULTS LOOK LIKE */}
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
              What Realistic Results Look Like
            </h2>

            <p style={{ marginBottom: '1.5rem' }}>
              Honesty matters in this industry, so here's what to expect:
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem', paddingLeft: 0 }}>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                <strong style={{ color: '#ffffff' }}>• We can't guarantee removal of every piece of content.</strong> Anyone who promises that is overselling. Some content can be removed; other content is better outranked.
              </li>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                <strong style={{ color: '#ffffff' }}>• Timelines vary.</strong> Search rankings and AI answers change gradually. Many people see early improvement within weeks, with stronger results building over several months.
              </li>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                <strong style={{ color: '#ffffff' }}>• AI answers are influenced, not controlled.</strong> No one can dictate exactly what ChatGPT says, but strengthening the sources it relies on measurably improves your chances of being represented accurately.
              </li>
            </ul>

            {/* SECTION 7: DIY REPUTATION TIPS */}
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
              DIY Reputation Tips You Can Start Today
            </h2>

            <p style={{ marginBottom: '1.5rem' }}>
              Even before you work with an agency, you can take some first steps:
            </p>

            <ol style={{ paddingLeft: '1.5rem', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#cccccc' }}>
              <li>
                <strong style={{ color: '#ffffff' }}>1. Google yourself in a private/incognito window</strong> and note what appears on the first two pages.
              </li>
              <li>
                <strong style={{ color: '#ffffff' }}>2. Ask an AI assistant who you are</strong> and check whether the answer is accurate.
              </li>
              <li>
                <strong style={{ color: '#ffffff' }}>3. Claim and complete your profiles</strong> on LinkedIn and relevant professional sites, using a consistent name and bio.
              </li>
              <li>
                <strong style={{ color: '#ffffff' }}>4. Tighten your privacy settings</strong> on personal social media accounts.
              </li>
              <li>
                <strong style={{ color: '#ffffff' }}>5. Publish something authoritative:</strong> a personal site, an article or a professional bio that you control.
              </li>
              <li>
                <strong style={{ color: '#ffffff' }}>6. Set up alerts for your name</strong> so you know when new content appears.
              </li>
            </ol>

            {/* SECTION 8: FAQS */}
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Frequently Asked Questions
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
              <div style={{ backgroundColor: '#181818', border: '1px solid #222222', borderRadius: '16px', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.6rem' }}>
                  Is online reputation management only for people with a bad reputation?
                </h3>
                <p style={{ color: '#aaaaaa', fontSize: '0.96rem', margin: 0, lineHeight: 1.65 }}>
                  No. Many of our clients simply want a stronger, more accurate presence. ORM is as much about building a positive reputation as fixing a negative one.
                </p>
              </div>

              <div style={{ backgroundColor: '#181818', border: '1px solid #222222', borderRadius: '16px', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.6rem' }}>
                  Can you remove something from Google?
                </h3>
                <p style={{ color: '#aaaaaa', fontSize: '0.96rem', margin: 0, lineHeight: 1.65 }}>
                  Sometimes. Content can be removed where it breaks a platform's policies or legal grounds apply. Where it can't, we focus on building stronger results that push it down.
                </p>
              </div>

              <div style={{ backgroundColor: '#181818', border: '1px solid #222222', borderRadius: '16px', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.6rem' }}>
                  Can you change what ChatGPT says about me?
                </h3>
                <p style={{ color: '#aaaaaa', fontSize: '0.96rem', margin: 0, lineHeight: 1.65 }}>
                  We can't edit it directly, but AI tools draw on public web sources. By improving and strengthening those sources, we help these tools present you more accurately.
                </p>
              </div>

              <div style={{ backgroundColor: '#181818', border: '1px solid #222222', borderRadius: '16px', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.6rem' }}>
                  How long does it take?
                </h3>
                <p style={{ color: '#aaaaaa', fontSize: '0.96rem', margin: 0, lineHeight: 1.65 }}>
                  It depends on your starting point and competition, but most people begin to see movement within a few weeks, with more significant change over a few months.
                </p>
              </div>

              <div style={{ backgroundColor: '#181818', border: '1px solid #222222', borderRadius: '16px', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.6rem' }}>
                  Is it worth it for an individual?
                </h3>
                <p style={{ color: '#aaaaaa', fontSize: '0.96rem', margin: 0, lineHeight: 1.65 }}>
                  If people search for you before hiring you, working with you or trusting you, then yes. Your name is often your first impression.
                </p>
              </div>
            </div>

            {/* SECTION 9: TAKE CONTROL / CTA */}
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
              Take Control of Your Search Results
            </h2>

            <p style={{ marginBottom: '2rem' }}>
              Whatever people are searching for, on Google or in an AI assistant, your name should lead to the right story. At Xtract, we combine SEO expertise with a modern understanding of AI search to help individuals surface the reputation they've earned, without agency-sized costs.
            </p>

            <div style={{ backgroundColor: '#000000', border: '1px solid #222222', borderRadius: '20px', padding: '2.2rem', textAlign: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.8rem' }}>
                Ready to see what the internet says about you?
              </h3>
              <p style={{ color: '#aaaaaa', fontSize: '1rem', maxWidth: '640px', margin: '0 auto 1.8rem auto' }}>
                Get in touch for a personal reputation audit — we'll map your search results across Google and AI platforms and build a clear action plan.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="#audit" className="btn btn-primary" style={{ padding: '0.9rem 2.2rem' }}>
                  Get in Touch for a Reputation Audit →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EMBEDDED INTAKE AUDIT WIDGET */}
      <section id="audit">
        <div className="container" style={{ maxWidth: '920px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="soft-pill-tag" style={{ marginBottom: '1rem', backgroundColor: '#181818', borderColor: '#333333', color: '#ffffff' }}>
              Free Personal Reputation Audit
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              See what Google & AI Search say about your name
            </h2>
            <p style={{ color: '#aaaaaa', fontSize: '1.05rem', maxWidth: '620px', margin: '0 auto' }}>
              Enter your name and details below. We will analyze your search and AI presence and send a custom report.
            </p>
          </div>

          <AIAuditWidget />
        </div>
      </section>
    </div>
  );
}
