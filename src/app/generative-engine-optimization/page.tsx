import { Metadata } from 'next';
import Link from 'next/link';
import AIAuditWidget from '@/components/AIAuditWidget';
import { ArrowRight, CheckCircle } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Generative Engine Optimization (GEO) Agency | AI Search Optimization',
  description:
    'GEO services to get your brand cited in ChatGPT, Perplexity, and Google AI Overviews. Also known as AEO or AI search optimization. Free AI visibility audit.',
  openGraph: {
    title: 'Generative Engine Optimization (GEO) Agency | AI Search Optimization',
    description:
      'GEO services to get your brand cited in ChatGPT, Perplexity, and Google AI Overviews. Also known as AEO or AI search optimization. Free AI visibility audit.',
    type: 'website',
    url: 'https://tryxtract.co.uk/generative-engine-optimization',
  },
};

export default function GeoServicePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Generative Engine Optimization (GEO)',
        serviceType: 'AI Search Optimization & Answer Engine Optimization',
        provider: {
          '@type': 'Organization',
          name: 'XTRACT AI Agency',
          url: 'https://tryxtract.co.uk',
        },
        description:
          'Specialist GEO services to get your brand cited, quoted, and recommended across ChatGPT, Perplexity, Gemini, and Google AI Overviews.',
        url: 'https://tryxtract.co.uk/generative-engine-optimization',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: "What's the difference between GEO, AEO, and AI SEO?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "They're mostly the same thing described with different names, because the terminology hasn't settled yet as an industry standard. We use them interchangeably — what matters is the underlying work: getting your business found and cited accurately by AI tools.",
            },
          },
          {
            '@type': 'Question',
            name: 'How is this different from just doing SEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Good SEO is the foundation GEO is built on — technical health, page speed, and clear content all matter for both. GEO adds work specific to how AI systems retrieve and synthesise information: structured data, fan-out-aware content, and citation tracking that traditional SEO reporting doesn\'t cover.',
            },
          },
          {
            '@type': 'Question',
            name: "Can you guarantee we'll be cited by ChatGPT or appear in AI Overviews?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "No — and we'd be cautious of anyone who does. This is an emerging, fast-changing area. What we can guarantee is a proper baseline audit, a real strategy built on how these systems actually work, and transparent monthly tracking of your progress.",
            },
          },
          {
            '@type': 'Question',
            name: 'How long before we see results?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Similar to SEO, this isn't instant — expect an initial audit and baseline in the first few weeks, with visibility changes typically showing over 2–3 months as content and technical changes take effect and get picked up by AI systems.",
            },
          },
        ],
      },
    ],
  };

  const comparisonData = [
    {
      label: 'Goal',
      seo: 'Rank in traditional search results (blue links)',
      geo: 'Get cited in AI-generated answers & summaries',
    },
    {
      label: 'Success Metric',
      seo: 'SERP position, organic impressions, search clicks',
      geo: 'AI citations, brand mentions, AI referral traffic',
    },
    {
      label: 'Core Unit',
      seo: 'Target keywords & search volume',
      geo: 'Questions & sub-query clusters (Query Fan-Out)',
    },
    {
      label: 'Content Approach',
      seo: 'Optimise a single page for a target keyword',
      geo: 'Cover a topic comprehensively across likely sub-questions',
    },
    {
      label: 'Foundation',
      seo: 'Technical SEO, on-page optimization, backlinks',
      geo: 'Technical foundation + structured schema, entity clarity & unlinked PR',
    },
  ];

  const deliverables = [
    {
      num: '01',
      title: '1. AI Visibility Audit',
      desc: 'Before anything else, we establish your current baseline: we test a set of real prompts your customersPlausibly ask (drawn from actual keyword and search-behaviour research for your industry, not guesses) across ChatGPT, Perplexity, Google AI Overviews, and Gemini, and record whether — and how — you currently appear.',
    },
    {
      num: '02',
      title: '2. Technical Crawlability Fixes',
      desc: 'AI crawlers can\'t cite what they can\'t read. We check for the things that commonly block visibility: JavaScript-rendered content that never loads for crawlers, robots.txt rules accidentally blocking AI bots (a common issue, especially on platforms like Cloudflare that changed their default bot-blocking settings), slow page speed, and duplicate or thin pages splitting your content\'s authority.',
    },
    {
      num: '03',
      title: '3. Entity & Structured Data Work',
      desc: 'We implement schema markup (Organization, Service, FAQPage, Article, and others depending on the page) so AI systems can parse exactly who you are, what you offer, and what your content says — rather than having to infer it from unstructured text.',
    },
    {
      num: '04',
      title: '4. Content Built Around Query Fan-Out',
      desc: 'Instead of writing one page targeting one phrase, we map the realistic cluster of sub-questions a buyer and an AI system would generate around a topic, and make sure your content answers that whole cluster clearly and directly — including a concise, quotable answer near the top of the page, since that\'s the passage most likely to be lifted into a citation.',
    },
    {
      num: '05',
      title: '5. Authority & Third-Party Citation Building',
      desc: 'AI systems weigh how often and how credibly you\'re referenced elsewhere — not just what your own site says about you. We work on getting you mentioned accurately on the kinds of third-party sites, reviews, and sources these systems already trust, since domains with a broader footprint of referring sources tend to be cited more often.',
    },
    {
      num: '06',
      title: '6. Citation Tracking & Monthly Reporting',
      desc: 'This is the part most businesses assume doesn\'t exist yet — it does, it\'s just newer and less standardised than Google Analytics. Our tracking approach combines recurring prompt tests across major AI engines, GA4 AI referral segmentation, and honest monthly reporting.',
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#000000', minHeight: '100vh', paddingTop: '5rem', paddingBottom: '6rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <section style={{ marginBottom: '5rem' }}>
        <div className="container">
          <div className="soft-pill-tag" style={{ marginBottom: '1.5rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#000000' }} />
            Generative Engine Optimization (GEO / AEO)
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.2vw, 4.5rem)',
              fontWeight: 800,
              color: '#000000',
              letterSpacing: '-0.03em',
              lineHeight: 1.08,
              marginBottom: '1.8rem',
              maxWidth: '920px',
            }}
          >
            Generative Engine Optimization — get cited, not just ranked
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#555555', lineHeight: 1.65, maxWidth: '760px', marginBottom: '2.5rem' }}>
            Get your business cited, quoted, and recommended when prospective clients ask ChatGPT, Perplexity, Gemini, or Google AI Overviews for recommendations.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#audit" className="btn btn-primary" style={{ padding: '1rem 2.2rem' }}>
              Request AI Visibility Audit
            </a>
            <a href="#how-geo-works" className="btn btn-outline" style={{ padding: '1rem 2.2rem' }}>
              How Query Fan-Out Works
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1: WHAT IS GEO? */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar">
            <span>(01) DEFINITION & CORE MECHANICS</span>
            <span>SEO vs GEO Explained</span>
          </div>

          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3.5rem)', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: '#000000', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              What is GEO?
            </h2>
            
            <p style={{ fontSize: '1.1rem', color: '#333333', lineHeight: 1.7, marginBottom: '1.5rem', fontWeight: 600 }}>
              Generative Engine Optimization (GEO) — also called AEO (Answer Engine Optimization) or AI search optimization — is the practice of structuring your content so AI tools like ChatGPT, Perplexity, Gemini, and Google's AI Overviews cite you when they answer a question.
            </p>

            <p style={{ color: '#555555', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Traditional SEO gets you a ranked position in a list of blue links. GEO is different: instead of getting a click, you're aiming to be one of the sources an AI system pulls from, summarises, and names when it answers someone's question directly — often without the user visiting any website at all.
            </p>

            <div style={{ backgroundColor: '#f8f8f8', borderLeft: '4px solid #000000', borderRadius: '12px', padding: '1.5rem', fontSize: '1rem', color: '#000000', fontWeight: 600 }}>
              Both matter, but they require different work, which is why GEO sits alongside your SEO strategy rather than replacing it.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW AI SEARCH WORKS - QUERY FAN-OUT */}
      <section id="how-geo-works" style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar">
            <span>(02) TECHNICAL ARCHITECTURE</span>
            <span>Query Fan-Out Mechanism</span>
          </div>

          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3.5rem)' }}>
            <div className="soft-pill-tag" style={{ marginBottom: '1.2rem' }}>
              Algorithm Mechanics
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: '#000000', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              How AI search actually works: query fan-out
            </h2>

            <p style={{ color: '#555555', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              The mechanism behind almost every AI search tool today is called <strong>query fan-out</strong> (Google's own patent calls it "query variant generation," but "fan-out" is the term that's stuck in the industry).
            </p>

            <p style={{ color: '#555555', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Here's what happens: when someone asks an AI tool a question, the system doesn't just search for that one phrase. It uses a language model to break the question apart into a set of related sub-queries — often somewhere between 8 and 12 — covering different angles, intents, and follow-up questions the person didn't explicitly ask but likely cares about. Each sub-query is run separately, the results are gathered, and the AI synthesises everything into one combined answer.
            </p>

            {/* Example Box */}
            <div style={{ backgroundColor: '#000000', color: '#ffffff', borderRadius: '20px', padding: '2rem', marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#aaaaaa', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.8rem' }}>
                REAL WORLD EXAMPLE
              </div>
              <p style={{ fontSize: '1.05rem', color: '#ffffff', lineHeight: 1.65, marginBottom: '1.2rem' }}>
                For example, someone asking <em>"best roofing company near me"</em> isn't just matched against that exact phrase. The system might quietly also search things like:
              </p>
              <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.8rem', fontSize: '0.95rem', color: '#cccccc' }}>
                <li style={{ backgroundColor: '#111111', border: '1px solid #222222', padding: '0.8rem 1rem', borderRadius: '10px' }}>• "roofing company reviews"</li>
                <li style={{ backgroundColor: '#111111', border: '1px solid #222222', padding: '0.8rem 1rem', borderRadius: '10px' }}>• "how much does a roof replacement cost"</li>
                <li style={{ backgroundColor: '#111111', border: '1px solid #222222', padding: '0.8rem 1rem', borderRadius: '10px' }}>• "signs you need a new roof"</li>
                <li style={{ backgroundColor: '#111111', border: '1px solid #222222', padding: '0.8rem 1rem', borderRadius: '10px' }}>• "licensed roofers in [area]"</li>
              </ul>
            </div>

            <p style={{ color: '#555555', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              This is why GEO is fundamentally different from traditional keyword targeting. In classic SEO, visibility is binary — you either rank on page one for a keyword or you don't. In AI search, visibility is closer to probabilistic: your site might not rank for the main phrase someone typed, but if you cover one of the underlying sub-queries particularly well, you can still get pulled into the answer. Conversely, ranking well on Google doesn't guarantee you're cited by AI — many AI-cited sources aren't the top-ranked page for the original search term at all.
            </p>

            <p style={{ color: '#555555', fontSize: '1.02rem', lineHeight: 1.7 }}>
              This is also why comprehensive coverage of a topic matters more in GEO than chasing a single exact keyword. Content that answers the full cluster of questions around a topic — not just one phrase — has more surface area to get picked up across the fan-out.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: GEO VS SEO COMPARISON TABLE */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar">
            <span>(03) STRATEGIC ALIGNMENT</span>
            <span>GEO vs SEO Comparison</span>
          </div>

          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3.5rem)' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: '#000000', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              GEO vs SEO — how they relate
            </h2>
            <p style={{ color: '#555555', fontSize: '1.05rem', marginBottom: '2.5rem' }}>
              They're complementary, not competing. Good GEO is built on good SEO — a technically broken, poorly structured site won't perform well in either.
            </p>

            {/* Comparison Table */}
            <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#000000', color: '#ffffff' }}>
                    <th style={{ padding: '1.2rem 1.5rem', borderRadius: '16px 0 0 0', width: '20%', fontSize: '0.9rem', textTransform: 'uppercase' }}>Dimension</th>
                    <th style={{ padding: '1.2rem 1.5rem', width: '40%', fontSize: '0.9rem', textTransform: 'uppercase' }}>Traditional SEO</th>
                    <th style={{ padding: '1.2rem 1.5rem', borderRadius: '0 16px 0 0', width: '40%', fontSize: '0.9rem', textTransform: 'uppercase' }}>Generative Engine Optimization (GEO)</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #e5e5e5', backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8f8f8' }}>
                      <td style={{ padding: '1.2rem 1.5rem', fontWeight: 800, color: '#000000', fontSize: '0.95rem' }}>{row.label}</td>
                      <td style={{ padding: '1.2rem 1.5rem', color: '#555555', fontSize: '0.95rem' }}>{row.seo}</td>
                      <td style={{ padding: '1.2rem 1.5rem', fontWeight: 700, color: '#000000', fontSize: '0.95rem' }}>{row.geo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ color: '#555555', fontSize: '1rem', lineHeight: 1.65 }}>
              That's why we treat this as one connected strategy, not two separate services.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT WE ACTUALLY DO */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar">
            <span>(04) AGENCY DELIVERABLES</span>
            <span>What We Actually Do As Your GEO Agency</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.8rem' }}>
            {deliverables.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e5e5',
                  borderRadius: '20px',
                  padding: '2.2rem',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 800, color: '#666666', letterSpacing: '0.08em', marginBottom: '0.6rem' }}>
                  [DELIVERABLE {item.num}]
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#000000', marginBottom: '1rem', letterSpacing: '-0.01em' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#555555', fontSize: '0.95rem', lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: AN HONEST NOTE ON WHAT GEO CAN & CAN'T PROMISE */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar">
            <span>(05) TRANSPARENT EXPECTATIONS</span>
            <span>An Honest Note on What GEO Can and Can't Promise</span>
          </div>

          <div style={{ backgroundColor: '#f8f8f8', border: '1px solid #e5e5e5', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3.5rem)' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.3rem)', fontWeight: 800, color: '#000000', letterSpacing: '-0.02em', marginBottom: '1.2rem' }}>
              An honest note on what GEO can and can't promise
            </h2>

            <p style={{ color: '#444444', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              This is a genuinely new discipline, and we'd rather be straight with you than oversell it. Google's own developer guidance is explicit that many "GEO hacks" circulating online aren't actually supported by how AI search works, and that the fundamentals — genuinely useful, well-structured, technically accessible content — matter more than any trick.
            </p>

            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '16px', padding: '1.5rem', fontSize: '1rem', color: '#000000', fontWeight: 700 }}>
              We won't promise a guaranteed citation count or a fixed timeline, because nobody honest in this space can. What we can promise is a clear baseline, a documented strategy, and monthly reporting that shows real movement (or tells us honestly when something isn't working, so we can change approach).
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQS */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar">
            <span>(06) FREQUENTLY ASKED QUESTIONS</span>
            <span>Clear Answers</span>
          </div>

          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3rem)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                {
                  q: "What's the difference between GEO, AEO, and AI SEO?",
                  a: "They're mostly the same thing described with different names, because the terminology hasn't settled yet as an industry standard. We use them interchangeably — what matters is the underlying work: getting your business found and cited accurately by AI tools.",
                },
                {
                  q: 'How is this different from just doing SEO?',
                  a: "Good SEO is the foundation GEO is built on — technical health, page speed, and clear content all matter for both. GEO adds work specific to how AI systems retrieve and synthesise information: structured data, fan-out-aware content, and citation tracking that traditional SEO reporting doesn't cover.",
                },
                {
                  q: "Can you guarantee we'll be cited by ChatGPT or appear in AI Overviews?",
                  a: "No — and we'd be cautious of anyone who does. This is an emerging, fast-changing area. What we can guarantee is a proper baseline audit, a real strategy built on how these systems actually work, and transparent monthly tracking of your progress.",
                },
                {
                  q: 'How long before we see results?',
                  a: "Similar to SEO, this isn't instant — expect an initial audit and baseline in the first few weeks, with visibility changes typically showing over 2–3 months as content and technical changes take effect and get picked up by AI systems.",
                },
              ].map((faq, idx) => (
                <div key={idx} style={{ borderBottom: '1px solid #f0f0f0', paddingBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#000000', marginBottom: '0.6rem' }}>
                    {faq.q}
                  </h4>
                  <p style={{ color: '#555555', fontSize: '0.98rem', lineHeight: 1.65 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL INTAKE AUDIT WIDGET */}
      <section id="audit">
        <div className="container" style={{ maxWidth: '920px' }}>
          <AIAuditWidget />
        </div>
      </section>
    </div>
  );
}
