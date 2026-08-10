import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from '@/components/Icons';
import AIAuditWidget from '@/components/AIAuditWidget';

export const metadata: Metadata = {
  title: 'SEO Resources & Guides | Xtract',
  description: 'Practical SEO and AI search guides for real problems — no fluff, no generic advice. Browse by industry or topic.',
  openGraph: {
    title: 'SEO Resources & Guides | Xtract',
    description: 'Practical SEO and AI search guides for real problems — no fluff, no generic advice. Browse by industry or topic.',
    type: 'website',
    url: 'https://tryxtract.co.uk/resources',
  },
};

export default function ResourcesPage() {
  const industryTags = [
    'Law Firms',
    'Private Healthcare',
    'Home Improvement',
    'Specialist B2B Industrial',
    'Private Education',
    'Shopify / E-commerce',
    'Cybersecurity',
  ];

  const articles = [
    {
      title: 'GEO Agency for Law Firms: Improve Your Visibility Across AI Search',
      path: '/resources/geo-agency-for-law-firms',
      summary:
        'A complete guide on Generative Engine Optimization (GEO) for law firms. Learn how GEO helps legal practices get cited in ChatGPT, Perplexity, and Google AI Overviews.',
      readTime: '12 min read',
      tag: 'LAW FIRMS & LEGAL GEO',
    },
    {
      title: 'Why Is My Shopify Store Not Showing Up on Google?',
      path: '/resources/why-shopify-store-not-showing-up-on-google',
      summary:
        'A full diagnostic for why your Shopify store isn\'t ranking — including duplicate collection parameters, app bloat, and AI search readiness.',
      readTime: '8 min read',
      tag: 'SHOPIFY & E-COMMERCE',
    },
    {
      title: 'Generative Engine Optimization (GEO) Technical Manual',
      path: '/services/generative-engine-optimization',
      summary:
        'How query fan-out variant generation works and how to structure your website to get cited across ChatGPT, Perplexity, and Google AI Overviews.',
      readTime: '10 min read',
      tag: 'AI SEARCH OPTIMIZATION',
    },
  ];

  return (
    <div style={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh', paddingTop: '5rem', paddingBottom: '6rem' }}>
      {/* HERO SECTION */}
      <section style={{ marginBottom: '5rem' }}>
        <div className="container">
          <div className="soft-pill-tag" style={{ marginBottom: '1.5rem', backgroundColor: '#111111', borderColor: '#222222', color: '#ffffff' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffffff' }} />
            Practical Guides & Research
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
            SEO guides that actually solve the problem you searched for
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
            Every guide here starts from a real, specific problem — not a generic "10 SEO tips" list. If you found this because you're stuck on something, you should be able to fix it from what's here, not just come away with more theory.
          </p>
        </div>
      </section>

      {/* BROWSE BY INDUSTRY */}
      <section style={{ marginBottom: '5rem' }}>
        <div className="container">
          <div className="section-bar" style={{ borderColor: '#222222', color: '#aaaaaa' }}>
            <span>(01) FILTER BY INDUSTRY</span>
            <span>Targeted Problem Solving</span>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
            Browse by industry
          </h2>

          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            {industryTags.map((tag, idx) => (
              <div
                key={idx}
                style={{
                  padding: '0.6rem 1.2rem',
                  backgroundColor: '#111111',
                  border: '1px solid #222222',
                  borderRadius: '9999px',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: '#ffffff',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST GUIDES */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar" style={{ borderColor: '#222222', color: '#aaaaaa' }}>
            <span>(02) LATEST DIAGNOSTICS & GUIDES</span>
            <span>In-Depth Articles</span>
          </div>

          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '2.5rem' }}>
            Latest guides
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.8rem' }}>
            {articles.map((item, idx) => (
              <Link
                key={idx}
                href={item.path}
                style={{
                  backgroundColor: '#111111',
                  border: '1px solid #222222',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1.2rem',
                    }}
                  >
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
                      {item.tag}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: '#888888', fontWeight: 600 }}>{item.readTime}</span>
                  </div>

                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.8rem', lineHeight: 1.25 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#aaaaaa', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                    {item.summary}
                  </p>
                </div>

                <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Read Full Guide <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WANT THIS LEVEL OF DETAIL APPLIED TO YOUR SITE SPECIFICALLY? */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div style={{ backgroundColor: '#111111', border: '1px solid #222222', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3.5rem)' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Want this level of detail applied to your site specifically?
            </h2>
            <p style={{ color: '#aaaaaa', fontSize: '1.05rem', lineHeight: 1.65, maxWidth: '780px', marginBottom: '2rem' }}>
              Our guides are free because we'd rather earn your trust than ask for it. If you want us to actually run this diagnostic on your site, book a free audit.
            </p>
            <a href="#audit" className="btn btn-primary" style={{ padding: '0.9rem 2rem' }}>
              Book a Free Audit
            </a>
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
