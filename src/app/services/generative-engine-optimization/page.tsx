import { Metadata } from 'next';
import Link from 'next/link';
import AIAuditWidget from '@/components/AIAuditWidget';

export const metadata: Metadata = {
  title: 'Generative Engine Optimization (GEO) Agency | AI Search Optimization',
  description:
    'GEO services to get your brand cited in ChatGPT, Perplexity, and Google AI Overviews. Also known as AEO or AI search optimization. Free AI visibility audit.',
  openGraph: {
    title: 'Generative Engine Optimization (GEO) Agency | AI Search Optimization',
    description:
      'GEO services to get your brand cited in ChatGPT, Perplexity, and Google AI Overviews. Also known as AEO or AI search optimization. Free AI visibility audit.',
    type: 'website',
    url: 'https://tryxtract.co.uk/services/generative-engine-optimization',
  },
};

export default function GenerativeEngineOptimizationPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Generative Engine Optimization (GEO)',
        serviceType: 'AI Search Optimization & Answer Engine Optimization (AEO)',
        provider: {
          '@type': 'Organization',
          name: 'XTRACT AI Agency',
          url: 'https://tryxtract.co.uk',
        },
        description:
          'Structuring client content so LLM tools like ChatGPT, Perplexity, Claude, and Google AI Overviews cite and recommend your brand when answering questions.',
        areaServed: 'United Kingdom',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is GEO guaranteed to get us cited in ChatGPT or Perplexity?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No reputable agency can guarantee AI citations, just as no one can guarantee page one on Google. AI models are non-deterministic and update their retrieval systems regularly. What GEO does is maximize the probability of your brand being cited by aligning your content with the specific retrieval patterns, entity models, and query fan-out structures these systems use.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do you measure GEO performance if traditional tracking doesn\'t work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We track AI visibility using specialized AI intelligence tools like Profound and Limy combined with prompt-level monitoring across target query clusters, referral traffic tracking from AI tools (via GA4 custom segmenting), and brand sentiment tracking within generated answers.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does GEO take to show results?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Initial movement in AI Search Overviews (like Google AI Overviews) can happen within 4 to 8 weeks as content is crawled and indexed. For standalone LLM tools like ChatGPT and Perplexity, timeline depends on their model training and live search web retrieval cycles — typically 2 to 4 months of consistent entity building and structural optimization.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do we need to stop doing traditional SEO to do GEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Not at all — they reinforce each other. In fact, most AI search systems rely heavily on traditional search indexes to find sources before summarising them. A site with poor technical SEO, weak crawlability, or low domain authority will struggle in GEO because AI crawlers can\'t find or trust the underlying content.',
            },
          },
        ],
      },
    ],
  };

  const comparisonData = [
    {
      label: 'Primary Goal',
      seo: 'Rank #1 in Google blue links',
      geo: 'Get cited & recommended inside AI generated answers',
    },
    {
      label: 'User Experience',
      seo: 'User clicks link to visit website',
      geo: 'User reads AI summary directly (often zero-click)',
    },
    {
      label: 'Search Mechanics',
      seo: 'Single query matched against indexed pages',
      geo: 'Query fan-out (8-12 sub-queries run simultaneously)',
    },
    {
      label: 'Key Optimization Focus',
      seo: 'Exact keyword density, backlinks, page speed',
      geo: 'Entity clarity, schema markup, quotable answer density',
    },
    {
      label: 'Success Metric',
      seo: 'Organic rank position & SERP traffic clicks',
      geo: 'Source citation frequency & high-intent AI referrals',
    },
  ];

  const deliverables = [
    {
      title: '1. AI Visibility & Citation Audit',
      desc: 'We map how AI tools currently view your brand across high-intent prompt clusters. We test ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews using Profound & Limy tools to establish baseline citation share vs competitors.',
    },
    {
      title: '2. Entity & Schema Architecture',
      desc: 'We engineer full Schema.org JSON-LD semantic graphs (Organization, Service, Article, FAQ, Author, SameAs) connecting your site to recognized Knowledge Graph entities like Wikidata, Crunchbase, and official regulatory registries.',
    },
    {
      title: '3. Query Fan-Out Content Restructuring',
      desc: 'We audit and rewrite key landing pages into high-density "answer engine snippets." We structure content to directly address the 8-12 sub-queries AI systems generate when expanding user questions.',
    },
    {
      title: '4. Source Authority & Digital PR',
      desc: 'AI models prioritize sources cited across authoritative third-party sites. We build digital PR campaigns targeting industry press, journals, and directories that LLMs ingest as primary ground-truth data.',
    },
    {
      title: '5. Server-Side Rendering & Crawlability Audit',
      desc: 'We ensure AI crawlers (GPTBot, PerplexityBot, ClaudeBot, Google-Extended) can access, parse, and render your core content without getting blocked by JavaScript execution limits or paywalls.',
    },
    {
      title: '6. Monthly Prompt & Citation Tracking',
      desc: 'We provide monthly benchmark reports powered by Profound & Limy tracking your brand citation frequency across ChatGPT, Perplexity, and Google AI Overviews, paired with custom GA4 referral segmentation.',
    },
  ];

  return (
    <div style={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh', paddingTop: '5rem', paddingBottom: '6rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <section style={{ marginBottom: '5rem' }}>
        <div className="container">
          <div className="soft-pill-tag" style={{ marginBottom: '1.5rem', backgroundColor: '#111111', borderColor: '#222222', color: '#ffffff' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffffff' }} />
            Generative Engine Optimization (GEO) Services
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              marginBottom: '1.8rem',
              maxWidth: '960px',
            }}
          >
            Generative Engine Optimization — get cited, not just ranked.
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.1rem, 2.2vw, 1.25rem)',
              color: '#aaaaaa',
              lineHeight: 1.65,
              maxWidth: '780px',
              marginBottom: '2.5rem',
              fontWeight: 500,
            }}
          >
            Generative Engine Optimization (GEO) — also called AEO or AI search optimization — structures your website so ChatGPT, Perplexity, Gemini, and Google AI Overviews cite and recommend your brand when customers ask for solutions in your industry.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#audit" className="btn btn-primary" style={{ padding: '1rem 2.2rem' }}>
              Request Free AI Visibility Audit
            </a>
            <a href="#ai-tooling" className="btn btn-outline" style={{ padding: '1rem 2.2rem' }}>
              See Profound & Limy AI Tooling
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1: WHAT IS GEO? */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar" style={{ borderColor: '#222222', color: '#aaaaaa' }}>
            <span>(01) DEFINITION & CORE MECHANICS</span>
            <span>SEO vs GEO Explained</span>
          </div>

          <div style={{ backgroundColor: '#111111', border: '1px solid #222222', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3.5rem)', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              What is GEO?
            </h2>

            <p style={{ fontSize: '1.1rem', color: '#ffffff', lineHeight: 1.7, marginBottom: '1.5rem', fontWeight: 600 }}>
              Generative Engine Optimization (GEO) — also called AEO (Answer Engine Optimization) or AI search optimization — is the practice of structuring your content so AI tools like ChatGPT, Perplexity, Gemini, and Google's AI Overviews cite you when they answer a question.
            </p>

            <p style={{ color: '#aaaaaa', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Traditional SEO gets you a ranked position in a list of blue links. GEO is different: instead of getting a click, you're aiming to be one of the sources an AI system pulls from, summarises, and names when it answers someone's question directly — often without the user visiting any website at all.
            </p>

            <div style={{ backgroundColor: '#181818', borderLeft: '4px solid #ffffff', borderRadius: '12px', padding: '1.5rem', fontSize: '1rem', color: '#ffffff', fontWeight: 600 }}>
              Both matter, but they require different work, which is why GEO sits alongside your SEO strategy rather than replacing it.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW AI SEARCH WORKS - QUERY FAN-OUT */}
      <section id="how-geo-works" style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar" style={{ borderColor: '#222222', color: '#aaaaaa' }}>
            <span>(02) TECHNICAL ARCHITECTURE</span>
            <span>Query Fan-Out Mechanism</span>
          </div>

          <div style={{ backgroundColor: '#111111', border: '1px solid #222222', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3.5rem)' }}>
            <div className="soft-pill-tag" style={{ marginBottom: '1.2rem', backgroundColor: '#181818', borderColor: '#333333', color: '#ffffff' }}>
              Algorithm Mechanics
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              How AI search actually works: query fan-out
            </h2>

            <p style={{ color: '#aaaaaa', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              The mechanism behind almost every AI search tool today is called <strong>query fan-out</strong> (Google's own patent calls it "query variant generation," but "fan-out" is the term that's stuck in the industry).
            </p>

            <p style={{ color: '#aaaaaa', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Here's what happens: when someone asks an AI tool a question, the system doesn't just search for that one phrase. It uses a language model to break the question apart into a set of related sub-queries — often somewhere between 8 and 12 — covering different angles, intents, and follow-up questions the person didn't explicitly ask but likely cares about. Each sub-query is run separately, the results are gathered, and the AI synthesises everything into one combined answer.
            </p>

            {/* Example Box */}
            <div style={{ backgroundColor: '#000000', border: '1px solid #222222', color: '#ffffff', borderRadius: '20px', padding: '2rem', marginBottom: '2rem' }}>
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

            <p style={{ color: '#aaaaaa', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              This is why GEO is fundamentally different from traditional keyword targeting. In classic SEO, visibility is binary — you either rank on page one for a keyword or you don't. In AI search, visibility is closer to probabilistic: your site might not rank for the main phrase someone typed, but if you cover one of the underlying sub-queries particularly well, you can still get pulled into the answer. Conversely, ranking well on Google doesn't guarantee you're cited by AI — many AI-cited sources aren't the top-ranked page for the original search term at all.
            </p>

            <p style={{ color: '#aaaaaa', fontSize: '1.02rem', lineHeight: 1.7 }}>
              This is also why comprehensive coverage of a topic matters more in GEO than chasing a single exact keyword. Content that answers the full cluster of questions around a topic — not just one phrase — has more surface area to get picked up across the fan-out.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: GEO VS SEO COMPARISON TABLE */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar" style={{ borderColor: '#222222', color: '#aaaaaa' }}>
            <span>(03) STRATEGIC ALIGNMENT</span>
            <span>GEO vs SEO Comparison</span>
          </div>

          <div style={{ backgroundColor: '#111111', border: '1px solid #222222', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3.5rem)' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              GEO vs SEO — how they relate
            </h2>
            <p style={{ color: '#aaaaaa', fontSize: '1.05rem', marginBottom: '2.5rem' }}>
              They're complementary, not competing. Good GEO is built on good SEO — a technically broken, poorly structured site won't perform well in either.
            </p>

            {/* Comparison Table */}
            <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#000000', color: '#ffffff', borderBottom: '1px solid #333333' }}>
                    <th style={{ padding: '1.2rem 1.5rem', borderRadius: '16px 0 0 0', width: '20%', fontSize: '0.9rem', textTransform: 'uppercase' }}>Dimension</th>
                    <th style={{ padding: '1.2rem 1.5rem', width: '40%', fontSize: '0.9rem', textTransform: 'uppercase' }}>Traditional SEO</th>
                    <th style={{ padding: '1.2rem 1.5rem', borderRadius: '0 16px 0 0', width: '40%', fontSize: '0.9rem', textTransform: 'uppercase' }}>Generative Engine Optimization (GEO)</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #222222', backgroundColor: idx % 2 === 0 ? '#111111' : '#181818' }}>
                      <td style={{ padding: '1.2rem 1.5rem', fontWeight: 800, color: '#ffffff', fontSize: '0.95rem' }}>{row.label}</td>
                      <td style={{ padding: '1.2rem 1.5rem', color: '#aaaaaa', fontSize: '0.95rem' }}>{row.seo}</td>
                      <td style={{ padding: '1.2rem 1.5rem', fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>{row.geo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ color: '#aaaaaa', fontSize: '1rem', lineHeight: 1.65 }}>
              That's why we treat this as one connected strategy, not two separate services.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR 6 GEO DELIVERABLES */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar" style={{ borderColor: '#222222', color: '#aaaaaa' }}>
            <span>(04) WHAT WE DO — OUR GEO DELIVERABLES</span>
            <span>6 Core Services</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.8rem' }}>
            {deliverables.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#111111',
                  border: '1px solid #222222',
                  borderRadius: '20px',
                  padding: '2.2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'inline-block',
                      padding: '0.3rem 0.8rem',
                      backgroundColor: '#ffffff',
                      color: '#000000',
                      borderRadius: '9999px',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      marginBottom: '1.2rem',
                    }}
                  >
                    DELIVERABLE 0{idx + 1}
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.8rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#aaaaaa', fontSize: '0.95rem', lineHeight: 1.65 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: PROPRIETARY AI INTELLIGENCE & TOOLING (PROFOUND & LIMY) */}
      <section id="ai-tooling" style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar" style={{ borderColor: '#222222', color: '#aaaaaa' }}>
            <span>(05) PROPRIETARY AI INTELLIGENCE & TOOLING</span>
            <span>Enterprise AI Analytics</span>
          </div>

          <div style={{ backgroundColor: '#111111', border: '1px solid #222222', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3.5rem)', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)' }}>
            <div className="soft-pill-tag" style={{ marginBottom: '1.2rem', backgroundColor: '#181818', borderColor: '#333333', color: '#ffffff' }}>
              Advanced AI Visibility Tools
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              How we use tooling like Profound and Limy to gain deep AI insights
            </h2>

            <p style={{ color: '#aaaaaa', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Traditional SEO software like Ahrefs or Semrush only tracks static Google blue-link ranks. To optimize for non-deterministic AI search models, we leverage specialized AI intelligence platforms — including <strong>Profound</strong> and <strong>Limy</strong> — to monitor live prompt retrieval logs, entity sentiment, and brand citation probability across ChatGPT, Perplexity, Claude, and Google AI.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {/* Profound Tool Card */}
              <div style={{ backgroundColor: '#181818', border: '1px solid #222222', borderRadius: '20px', padding: '2rem' }}>
                <div style={{ display: 'inline-block', padding: '0.3rem 0.8rem', backgroundColor: '#ffffff', color: '#000000', borderRadius: '9999px', fontSize: '0.78rem', fontWeight: 900, marginBottom: '1rem' }}>
                  PROFOUND STRATEGY & AI PROMPT MONITORING
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.8rem' }}>
                  Prompt-Level Citation & Sentiment Intelligence
                </h3>
                <p style={{ color: '#aaaaaa', fontSize: '0.96rem', lineHeight: 1.65, marginBottom: '1.2rem' }}>
                  Profound simulates hundreds of high-intent buyer prompts across ChatGPT (GPT-4o), Perplexity Pro, Claude 3.5, and Google AI Overviews to map exactly where and how your brand is cited vs competitors.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: '#cccccc', fontSize: '0.92rem' }}>
                  <li>✓ Real-time brand citation probability scoring</li>
                  <li>✓ Source co-occurrence & entity relationship mapping</li>
                  <li>✓ Prompt variant fan-out coverage tracking</li>
                </ul>
              </div>

              {/* Limy Tool Card */}
              <div style={{ backgroundColor: '#181818', border: '1px solid #222222', borderRadius: '20px', padding: '2rem' }}>
                <div style={{ display: 'inline-block', padding: '0.3rem 0.8rem', backgroundColor: '#ffffff', color: '#000000', borderRadius: '9999px', fontSize: '0.78rem', fontWeight: 900, marginBottom: '1rem' }}>
                  LIMY AI ANALYTICS & CRAWLER INGESTION
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.8rem' }}>
                  LLM Bot Crawl Logs & Zero-Click Analytics
                </h3>
                <p style={{ color: '#aaaaaa', fontSize: '0.96rem', lineHeight: 1.65, marginBottom: '1.2rem' }}>
                  Limy monitors AI crawler activity (GPTBot, PerplexityBot, ClaudeBot, ByteSpider) on your site to ensure your high-density answer blocks are being rendered, parsed, and ingested without technical blocks.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: '#cccccc', fontSize: '0.92rem' }}>
                  <li>✓ AI crawler access & hydration bottleneck logs</li>
                  <li>✓ Zero-click AI referral traffic attribution</li>
                  <li>✓ Direct answer snippet extraction verification</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TRANSPARENT EXPECTATIONS */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar" style={{ borderColor: '#222222', color: '#aaaaaa' }}>
            <span>(06) HONEST STRATEGY & TRANSPARENCY</span>
            <span>What GEO Can and Cannot Do</span>
          </div>

          <div style={{ backgroundColor: '#111111', border: '1px solid #222222', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3.5rem)' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              Setting honest expectations
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <div style={{ backgroundColor: '#181818', border: '1px solid #222222', borderRadius: '16px', padding: '1.8rem' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.8rem' }}>
                  What GEO Genuinely Delivers
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: '#cccccc', fontSize: '0.94rem' }}>
                  <li>✓ Higher citation frequency across ChatGPT & Perplexity</li>
                  <li>✓ Stronger representation in Google AI Overviews</li>
                  <li>✓ Better entity clarity in search engine Knowledge Graphs</li>
                  <li>✓ High-intent referral traffic from users ready to buy</li>
                </ul>
              </div>

              <div style={{ backgroundColor: '#181818', border: '1px solid #222222', borderRadius: '16px', padding: '1.8rem' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.8rem' }}>
                  What No Real Agency Can Guarantee
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: '#aaaaaa', fontSize: '0.94rem' }}>
                  <li>❌ Guaranteed #1 citation in every prompt</li>
                  <li>❌ Fixed impression volumes inside LLM tools</li>
                  <li>❌ Instant overnight inclusion before models re-crawl</li>
                  <li>❌ Proprietary "secret backdoor" algorithms into OpenAI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQS */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar" style={{ borderColor: '#222222', color: '#aaaaaa' }}>
            <span>(07) FREQUENTLY ASKED QUESTIONS</span>
            <span>Client Questions Answered</span>
          </div>

          <div style={{ backgroundColor: '#111111', border: '1px solid #222222', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3rem)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                {
                  q: 'Is GEO guaranteed to get us cited in ChatGPT or Perplexity?',
                  a: 'No reputable agency can guarantee AI citations, just as no one can guarantee page one on Google. AI models are non-deterministic and update their retrieval systems regularly. What GEO does is maximize the probability of your brand being cited by aligning your content with the specific retrieval patterns, entity models, and query fan-out structures these systems use.',
                },
                {
                  q: "How do you measure GEO performance if traditional tracking doesn't work?",
                  a: 'We track AI visibility using specialized AI intelligence tools like Profound and Limy combined with prompt-level monitoring across target query clusters, referral traffic tracking from AI tools (via GA4 custom segmenting), and brand sentiment tracking within generated answers.',
                },
                {
                  q: 'How long does GEO take to show results?',
                  a: 'Initial movement in AI Search Overviews (like Google AI Overviews) can happen within 4 to 8 weeks as content is crawled and indexed. For standalone LLM tools like ChatGPT and Perplexity, timeline depends on their model training and live search web retrieval cycles — typically 2 to 4 months of consistent entity building and structural optimization.',
                },
                {
                  q: 'Do we need to stop doing traditional SEO to do GEO?',
                  a: "Not at all — they reinforce each other. In fact, most AI search systems rely heavily on traditional search indexes to find sources before summarising them. A site with poor technical SEO, weak crawlability, or low domain authority will struggle in GEO because AI crawlers can't find or trust the underlying content.",
                },
              ].map((faq, idx) => (
                <div key={idx} style={{ backgroundColor: '#181818', border: '1px solid #222222', borderRadius: '16px', padding: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.6rem' }}>
                    {faq.q}
                  </h4>
                  <p style={{ color: '#aaaaaa', fontSize: '0.96rem', lineHeight: 1.65 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EMBEDDED AI AUDIT SECTION */}
      <section id="audit">
        <div className="container" style={{ maxWidth: '920px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="soft-pill-tag" style={{ marginBottom: '1rem', backgroundColor: '#181818', borderColor: '#333333', color: '#ffffff' }}>
              Free AI Search Audit
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Want to see how AI search engines view your brand?
            </h2>
            <p style={{ color: '#aaaaaa', fontSize: '1.05rem', maxWidth: '620px', margin: '0 auto' }}>
              Submit your domain below. We will run your site through our AI prompt testing suite powered by Profound & Limy and send a free report to your email.
            </p>
          </div>

          <AIAuditWidget />
        </div>
      </section>
    </div>
  );
}
