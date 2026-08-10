import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from '@/components/Icons';
import AIAuditWidget from '@/components/AIAuditWidget';

export const metadata: Metadata = {
  title: 'SEO by Industry | Xtract',
  description: "SEO and AI search strategies built around how your specific industry's customers actually search. See our approach by industry.",
  openGraph: {
    title: 'SEO by Industry | Xtract',
    description: "SEO and AI search strategies built around how your specific industry's customers actually search. See our approach by industry.",
    type: 'website',
    url: 'https://tryxtract.co.uk/industries',
  },
};

export default function IndustriesPage() {
  const industryCards = [
    {
      name: 'Law Firms',
      teaser: 'Move beyond referral-only growth with SEO built for how clients actually search for legal help.',
      link: '/seo-for-law-firms',
    },
    {
      name: 'Private Healthcare',
      teaser: 'Get found by patients researching treatments, not just clicking ads.',
      link: '/seo-for-private-healthcare',
    },
    {
      name: 'Home Improvement',
      teaser: 'Stop overpaying for shared leads. Own your local search instead.',
      link: '/seo-for-home-improvement',
    },
    {
      name: 'Specialist B2B Industrial',
      teaser: 'Get in front of buyers during the 70% of their research done before they ever contact a supplier.',
      link: '/seo-for-industrial-b2b',
    },
    {
      name: 'Private Education',
      teaser: 'Reach parents researching schools and fees months before enrolment.',
      link: '/seo-for-private-schools-education',
    },
    {
      name: 'Shopify & E-commerce',
      teaser: "Fix what's actually blocking your store's rankings, beyond what Shopify handles automatically.",
      link: '/seo-for-shopify-stores',
    },
    {
      name: 'Cybersecurity',
      teaser: 'Get cited as a credible source when technical buyers research providers and compliance.',
      link: '/seo-for-cybersecurity',
    },
  ];

  return (
    <div style={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh', paddingTop: '5rem', paddingBottom: '6rem' }}>
      {/* HERO SECTION */}
      <section style={{ marginBottom: '5rem' }}>
        <div className="container">
          <div className="soft-pill-tag" style={{ marginBottom: '1.5rem', backgroundColor: '#111111', borderColor: '#222222', color: '#ffffff' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffffff' }} />
            Industry-Specific Search Strategy
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
            SEO built around how your industry actually gets found
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
            Generic SEO advice ignores that a roofer's customers search completely differently to a law firm's, and a law firm's differently again to a Shopify store's. We build our approach around the real search behaviour, buying cycle, and trust signals specific to each industry we work in.
          </p>
        </div>
      </section>

      {/* CHOOSE YOUR INDUSTRY CARDS */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar" style={{ borderColor: '#222222', color: '#aaaaaa' }}>
            <span>(01) SELECT YOUR INDUSTRY</span>
            <span>Dedicated Strategy Pages</span>
          </div>

          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '2.5rem' }}>
            Choose your industry
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.8rem' }}>
            {industryCards.map((card, idx) => (
              <Link
                key={idx}
                href={card.link}
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
                    0{idx + 1}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.8rem' }}>
                    {card.name}
                  </h3>
                  <p style={{ color: '#aaaaaa', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                    {card.teaser}
                  </p>
                </div>

                <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  View Full Industry Page <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DON'T SEE YOUR INDUSTRY? */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div style={{ backgroundColor: '#111111', border: '1px solid #222222', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3.5rem)' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Don't see your industry?
            </h2>
            <p style={{ color: '#aaaaaa', fontSize: '1.05rem', lineHeight: 1.65, maxWidth: '780px', marginBottom: '2rem' }}>
              We're selective about the industries we take on so we can maintain real expertise rather than generic advice — get in touch and we'll tell you honestly whether we're the right fit.
            </p>
            <a href="#audit" className="btn btn-primary" style={{ padding: '0.9rem 2rem' }}>
              Get in Touch
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
