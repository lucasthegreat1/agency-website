import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from '@/components/Icons';
import AIAuditWidget from '@/components/AIAuditWidget';

export const metadata: Metadata = {
  title: 'SEO & AI Search Services | Xtract',
  description: "SEO and AI search optimization for businesses that need real enquiries, not just traffic. See what's included in every Xtract retainer.",
  openGraph: {
    title: 'SEO & AI Search Services | Xtract',
    description: "SEO and AI search optimization for businesses that need real enquiries, not just traffic. See what's included in every Xtract retainer.",
    type: 'website',
    url: 'https://tryxtract.co.uk/services',
  },
};

export default function ServicesPage() {
  const retainerItems = [
    {
      title: 'Technical SEO',
      content:
        'We start every engagement with a full technical audit — indexing, crawlability, page speed, mobile experience, and the structural issues (like duplicate collection or filter pages) that quietly cap how well a site can rank, no matter how good the content is.',
      deliverables: ['Indexing & Crawlability Audit', 'Mobile PageSpeed & Core Web Vitals', 'Canonical & Duplicate URL Resolution', 'Site Architecture & Internal Link Flow'],
    },
    {
      title: 'On-page & content',
      content:
        'We build and optimise pages around the real questions and search terms your customers are actually using — not guessed keywords. This includes landing pages, service pages, and ongoing article content that targets the specific problems your customers are trying to solve when they land on Google.',
      deliverables: ['Intent-Based Keyword Mapping', 'Service & Practice Landing Pages', 'Targeted Problem-Solving Content', 'Conversion Copy Optimisation'],
    },
    {
      title: 'Local SEO (for applicable industries)',
      content:
        'Google Business Profile optimisation, local citation building, and review strategy for businesses that rely on local search — home improvement, healthcare, and similar service-area businesses.',
      deliverables: ['Google Business Profile Optimisation', 'Local Citation Alignment', 'Service Area Keyword Targeting', 'Review Strategy Guidance'],
    },
    {
      title: 'Generative Engine Optimization (GEO) & AI Visibility',
      content:
        "We structure content so it can be accurately found and cited by ChatGPT, Perplexity, Gemini, and Google's AI Overviews — not just ranked in traditional search. This includes structured data, clear answer-first content, and monthly tracking of how you appear across these tools. It's still an emerging area, so we treat it as an addition to strong SEO fundamentals, not a replacement for them.",
      deliverables: ['Structured Data & JSON-LD Microdata', 'Clear Answer-First Content Blocks', 'Query Fan-Out Optimization', 'Monthly Multi-Platform Citation Tracking'],
      link: '/services/generative-engine-optimization',
    },
    {
      title: 'Reporting',
      content:
        'Monthly reporting that shows rankings, organic traffic, AI visibility scores, and AI bot traffic (GPTBot, PerplexityBot, ClaudeBot), tied back to actual client enquiries where possible. No vanity metrics without context.',
      deliverables: [
        'Custom GA4 & Search Console Dashboard',
        'AI Visibility & Citation Share Tracking',
        'AI Bot Traffic & Crawler Log Analytics',
        'Organic & AI Enquiry Attribution',
        'Direct Strategy Recommendations',
      ],
    },
  ];

  const faqs = [
    {
      q: 'How long until I see results?',
      a: "Technical fixes can show impact within weeks. Meaningful ranking improvement for competitive terms typically takes 3–6 months of consistent work — we'll be upfront with you about realistic timelines for your specific market during the audit.",
    },
    {
      q: 'Do you offer one-off projects or only retainers?',
      a: "We offer a one-off technical audit as an entry point, but ongoing results come from an ongoing retainer — SEO isn't a one-time fix, and neither is showing up reliably in AI search.",
    },
    {
      q: 'Do you work with businesses outside your listed industries?',
      a: "We focus on a small number of industries so we can go deep rather than generic — get in touch and we'll tell you honestly if we're a good fit.",
    },
  ];

  return (
    <div style={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh', paddingTop: '5rem', paddingBottom: '6rem' }}>
      {/* HERO SECTION */}
      <section style={{ marginBottom: '5rem' }}>
        <div className="container">
          <div className="soft-pill-tag" style={{ marginBottom: '1.5rem', backgroundColor: '#111111', borderColor: '#222222', color: '#ffffff' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffffff' }} />
            SEO & AI Search Services
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
            SEO built to get you clients — not just clicks
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.1rem, 2.2vw, 1.25rem)',
              color: '#aaaaaa',
              lineHeight: 1.65,
              maxWidth: '820px',
              fontWeight: 500,
              marginBottom: '2.5rem',
            }}
          >
            Rankings are only useful if they turn into enquiries. Every service we run is built around that one outcome — more of the right people finding you, and enough trust on the page to get them to actually get in touch. We work with a small number of clients at a time across a handful of industries we know well, rather than spreading thin across everyone.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#audit" className="btn btn-primary" style={{ padding: '1rem 2.2rem' }}>
              Request a Free Audit
            </a>
            <a href="#retainer-scope" className="btn btn-outline" style={{ padding: '1rem 2.2rem' }}>
              See What's Included
            </a>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED IN EVERY RETAINER */}
      <section id="retainer-scope" style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar" style={{ borderColor: '#222222', color: '#aaaaaa' }}>
            <span>(01) RETAINER SCOPE</span>
            <span>What's Included in Every Retainer</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {retainerItems.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#111111',
                  border: '1px solid #222222',
                  borderRadius: '24px',
                  padding: 'clamp(2rem, 4vw, 3.5rem)',
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 0.8fr',
                  gap: '3rem',
                  alignItems: 'flex-start',
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
                    CORE SERVICE 0{idx + 1}
                  </div>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                    {item.title}
                  </h2>
                  <p style={{ color: '#aaaaaa', fontSize: '1.02rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                    {item.content}
                  </p>

                  {item.link ? (
                    <Link href={item.link} className="btn btn-primary" style={{ padding: '0.9rem 2rem' }}>
                      Explore Dedicated GEO Service Page <ArrowRight size={16} />
                    </Link>
                  ) : (
                    <a href="#audit" className="btn btn-outline" style={{ padding: '0.9rem 2rem' }}>
                      Request Audit
                    </a>
                  )}
                </div>

                <div style={{ backgroundColor: '#181818', border: '1px solid #222222', borderRadius: '20px', padding: '2.5rem' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                    KEY DELIVERABLES
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem', color: '#cccccc' }}>
                    {item.deliverables.map((deliv, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', lineHeight: 1.5 }}>
                        <span style={{ color: '#ffffff', fontWeight: 900 }}>✓</span>
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: DEDICATED GEO FEATURE SECTION */}
      <section id="geo-section" style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar" style={{ borderColor: '#222222', color: '#aaaaaa' }}>
            <span>(02) GENERATIVE ENGINE OPTIMIZATION (GEO)</span>
            <span>AI Search Engine Optimization</span>
          </div>

          <div style={{ backgroundColor: '#111111', border: '1px solid #222222', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3.5rem)', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)' }}>
            <div className="soft-pill-tag" style={{ marginBottom: '1.2rem', backgroundColor: '#181818', borderColor: '#333333', color: '#ffffff' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffffff' }} />
              Generative Engine Optimization (GEO)
            </div>

            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1.2rem' }}>
              Get cited and recommended by ChatGPT, Perplexity & Google AI Overviews
            </h2>

            <p style={{ color: '#aaaaaa', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '820px' }}>
              Generative Engine Optimization (GEO) — also called Answer Engine Optimization (AEO) — structures your website content so AI tools cite and recommend your brand when customers ask for solutions in your industry. Rather than competing for static blue link clicks, GEO optimizes your digital footprint for AI query fan-out mechanics and entity knowledge graphs.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ backgroundColor: '#181818', border: '1px solid #222222', borderRadius: '16px', padding: '1.8rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.6rem' }}>
                  Query Fan-Out Mechanics
                </h3>
                <p style={{ color: '#aaaaaa', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  AI search tools break single questions into 8–12 sub-queries. We structure your content to address every sub-query in the fan-out cluster.
                </p>
              </div>

              <div style={{ backgroundColor: '#181818', border: '1px solid #222222', borderRadius: '16px', padding: '1.8rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.6rem' }}>
                  Entity & Schema Graphs
                </h3>
                <p style={{ color: '#aaaaaa', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  We engineer Schema.org JSON-LD semantic architecture connecting your site to recognized Knowledge Graph entity nodes.
                </p>
              </div>

              <div style={{ backgroundColor: '#181818', border: '1px solid #222222', borderRadius: '16px', padding: '1.8rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.6rem' }}>
                  Profound & Limy Tooling
                </h3>
                <p style={{ color: '#aaaaaa', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  We use enterprise AI tools like Profound and Limy to monitor live prompt citation shares and LLM crawler access logs.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/services/generative-engine-optimization" className="btn btn-primary" style={{ padding: '1rem 2.2rem' }}>
                Explore Dedicated GEO Service Page <ArrowRight size={16} />
              </Link>
              <a href="#audit" className="btn btn-outline" style={{ padding: '1rem 2.2rem' }}>
                Request Free AI Search Audit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS SECTION */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar" style={{ borderColor: '#222222', color: '#aaaaaa' }}>
            <span>(03) FREQUENTLY ASKED QUESTIONS</span>
            <span>Honest Answers</span>
          </div>

          <div style={{ backgroundColor: '#111111', border: '1px solid #222222', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3rem)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {faqs.map((faq, idx) => (
                <div key={idx} style={{ backgroundColor: '#181818', border: '1px solid #222222', borderRadius: '16px', padding: '1.8rem' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.8rem' }}>
                    {faq.q}
                  </h3>
                  <p style={{ color: '#aaaaaa', fontSize: '1rem', lineHeight: 1.65 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EMBEDDED INTAKE AUDIT WIDGET */}
      <section id="audit">
        <div className="container" style={{ maxWidth: '920px' }}>
          <AIAuditWidget />
        </div>
      </section>
    </div>
  );
}
