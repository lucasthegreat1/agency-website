import { Metadata } from 'next';
import Link from 'next/link';
import AIAuditWidget from '@/components/AIAuditWidget';

export const metadata: Metadata = {
  title: 'About Xtract | SEO & AI Search Agency',
  description: 'Xtract is an SEO and AI search agency working with a small number of industries we know deeply. Meet the team and our approach.',
  openGraph: {
    title: 'About Xtract | SEO & AI Search Agency',
    description: 'Xtract is an SEO and AI search agency working with a small number of industries we know deeply. Meet the team and our approach.',
    type: 'website',
    url: 'https://tryxtract.co.uk/about',
  },
};

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh', paddingTop: '5rem', paddingBottom: '6rem' }}>
      {/* HERO SECTION */}
      <section style={{ marginBottom: '5rem' }}>
        <div className="container">
          <div className="soft-pill-tag" style={{ marginBottom: '1.5rem', backgroundColor: '#111111', borderColor: '#222222', color: '#ffffff' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffffff' }} />
            About Xtract
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
            SEO from people who'll tell you the truth about what's working
          </h1>
        </div>
      </section>

      {/* WHY XTRACT EXISTS */}
      <section style={{ marginBottom: '5rem' }}>
        <div className="container">
          <div className="section-bar" style={{ borderColor: '#222222', color: '#aaaaaa' }}>
            <span>(01) OUR PURPOSE</span>
            <span>Why Xtract Exists</span>
          </div>

          <div style={{ backgroundColor: '#111111', border: '1px solid #222222', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3.5rem)' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1.2rem' }}>
              Why Xtract exists
            </h2>
            <p style={{ color: '#aaaaaa', fontSize: '1.08rem', lineHeight: 1.7, maxWidth: '840px' }}>
              Most SEO agencies promise everything to everyone. We do the opposite — we work with a small number of industries, go genuinely deep on how their customers search, and say no to work outside that where we can't confidently deliver results. If something isn't working, we'll tell you and change approach, rather than keep billing for it.
            </p>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section style={{ marginBottom: '5rem' }}>
        <div className="container">
          <div className="section-bar" style={{ borderColor: '#222222', color: '#aaaaaa' }}>
            <span>(02) METHODOLOGY</span>
            <span>Our Approach</span>
          </div>

          <div style={{ backgroundColor: '#111111', border: '1px solid #222222', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3.5rem)' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              Our approach
            </h2>
            <p style={{ color: '#aaaaaa', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '840px', marginBottom: '1.5rem' }}>
              We start every client relationship with a full technical and content audit — no guesswork, no templated recommendations copy-pasted across industries. From there, we build a strategy around the real search behaviour your customers show (informational research, local intent, AI-assisted research), not just a generic keyword list.
            </p>
            <p style={{ color: '#aaaaaa', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '840px' }}>
              We're honest about what's proven and what's emerging. Traditional SEO has 20+ years of established best practice; AI search visibility is genuinely new, and we won't promise guaranteed outcomes there that nobody in the industry can honestly back up.
            </p>
          </div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section style={{ marginBottom: '5rem' }}>
        <div className="container">
          <div className="section-bar" style={{ borderColor: '#222222', color: '#aaaaaa' }}>
            <span>(03) LEADERSHIP</span>
            <span>Meet the Team</span>
          </div>

          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '2.5rem' }}>
            Meet the team
          </h2>

          <div style={{ backgroundColor: '#111111', border: '1px solid #222222', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3rem)', display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                color: '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '1.6rem',
                flexShrink: 0,
              }}
            >
              LH
            </div>
            <div style={{ maxWidth: '720px' }}>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem' }}>
                Luke Haracic — SEO Consultant
              </h3>
              <p style={{ color: '#aaaaaa', fontSize: '1.02rem', lineHeight: 1.65 }}>
                Luke leads technical SEO and AI search strategy at Xtract, working directly with clients to diagnose indexing, crawlability, and ranking issues most audits miss. He writes the majority of Xtract's guides, focused on the technical problems generic SEO content tends to skip over.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WANT TO WORK WITH US? */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div style={{ backgroundColor: '#111111', border: '1px solid #222222', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3.5rem)' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Want to work with us?
            </h2>
            <p style={{ color: '#aaaaaa', fontSize: '1.05rem', lineHeight: 1.65, maxWidth: '780px', marginBottom: '2rem' }}>
              We take on a limited number of clients at a time so we can actually deliver the attention this approach requires. Book a free audit and we'll tell you honestly whether we're a good fit.
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
