import { Metadata } from 'next';
import Link from 'next/link';
import AIAuditWidget from '@/components/AIAuditWidget';

export const metadata: Metadata = {
  title: 'Is Your Clinic Invisible in ChatGPT? A Quick Guide for Private Healthcare Providers',
  description:
    'Find out why private clinics & hospitals are invisible in ChatGPT, Gemini & AI search answers — and how to fix it with a 5-minute self-check.',
  openGraph: {
    title: 'Is Your Clinic Invisible in ChatGPT? A Quick Guide for Private Healthcare Providers',
    description:
      'Find out why private clinics & hospitals are invisible in ChatGPT, Gemini & AI search answers — and how to fix it with a 5-minute self-check.',
    type: 'article',
    url: 'https://tryxtract.co.uk/resources/is-your-clinic-invisible-in-chatgpt-private-healthcare',
  },
};

export default function InvisibleClinicChatGPTGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline:
          'Is Your Clinic Invisible in ChatGPT? A Quick Guide for Private Healthcare Providers',
        description:
          'Find out why private clinics & hospitals are invisible in ChatGPT, Gemini & AI search answers — and how to fix it with a 5-minute self-check.',
        author: {
          '@type': 'Person',
          name: 'Luke Haracic',
          jobTitle: 'Healthcare SEO & AI Search Consultant',
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
          'https://tryxtract.co.uk/resources/is-your-clinic-invisible-in-chatgpt-private-healthcare',
        datePublished: '2026-09-02',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Why are private clinics invisible in ChatGPT and AI search?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AI tools rely on explicit content, consistent cross-platform NAP data (Name, Address, Phone), and structured schema markup (MedicalBusiness, FAQPage) to verify healthcare credibility. Without these, AI models default to citing competitors or general health portals.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I perform a 5-minute AI visibility check for my clinic?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ask ChatGPT or Gemini: "Best private [specialism] clinic in [city]", "Is [clinic name] a good clinic?", "What does [procedure] cost privately?", and "[Clinic name] address and opening hours". Check if your clinic is cited and if the facts are accurate.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does schema markup help clinics rank in AI answers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Schema markup like MedicalBusiness, MedicalClinic, and Physician provides machine-readable structured JSON data that AI crawlers (GPTBot, PerplexityBot, ClaudeBot) extract directly to confirm services, locations, and clinician credentials.',
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
              PRIVATE HEALTHCARE & AI SEARCH
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
            Is Your Clinic Invisible in ChatGPT? A Quick Guide for Private Healthcare Providers
          </h1>

          <div style={{ display: 'flex', gap: '1.5rem', color: '#aaaaaa', fontSize: '0.92rem', marginBottom: '2.5rem', fontWeight: 500, flexWrap: 'wrap' }}>
            <span>By <strong>Luke Haracic</strong> (Healthcare SEO Consultant)</span>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <span>September 2026</span>
          </div>
        </div>
      </section>

      {/* MAIN ARTICLE BODY */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ backgroundColor: '#111111', border: '1px solid #222222', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.75, fontSize: '1.05rem', color: '#cccccc' }}>
            
            {/* INTRO PARAGRAPHS */}
            <p style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 500, lineHeight: 1.7, marginBottom: '1.8rem' }}>
              Patients don't only search Google anymore. Increasingly, they're opening ChatGPT, Gemini, or Google's AI Overviews and typing things like <em>"best private clinic for knee surgery in Manchester"</em> or <em>"is [treatment] worth it privately"</em> — and getting a direct answer, often before they ever land on a clinic's website.
            </p>

            <p style={{ marginBottom: '1.8rem' }}>
              If your clinic doesn't come up in that answer, or comes up with wrong information, you're losing patients at the exact moment they're deciding who to trust — and you probably don't even know it's happening.
            </p>

            <p style={{ marginBottom: '2.5rem' }}>
              Here's how to check, and what to do about it. If you'd rather have this done for you, our <Link href="/seo-for-private-healthcare" style={{ color: '#ffffff', fontWeight: 800, textDecoration: 'underline' }}>SEO for private clinics and hospitals</Link> service covers AI search visibility as standard.
            </p>

            <hr style={{ border: 0, borderTop: '1px solid #222222', margin: '2.5rem 0' }} />

            {/* SECTION 1 */}
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
              Why this matters more in healthcare than almost anywhere else
            </h2>

            <p style={{ marginBottom: '1.5rem' }}>
              Patients researching private treatment are making a high-stakes, high-trust decision. They're not comparison shopping for shoes — they're deciding who operates on them, treats their child, or manages a condition they're anxious about. AI tools have become a fast way to shortlist "who's credible" before a patient ever visits a website.
            </p>

            <p style={{ marginBottom: '1.2rem', fontWeight: 700, color: '#ffffff' }}>That means:</p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem', paddingLeft: 0 }}>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                <strong style={{ color: '#ffffff' }}>1. If AI tools cite your competitors and not you:</strong> You're invisible at the shortlisting stage — regardless of how good your actual care is.
              </li>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                <strong style={{ color: '#ffffff' }}>2. If AI tools cite outdated or incorrect information:</strong> An old address, a discontinued service, or the wrong consultant is actively working against you.
              </li>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                <strong style={{ color: '#ffffff' }}>3. Higher conversion intent:</strong> Patients who arrive at your site after an AI search tend to be further along in their decision — this is high-intent traffic worth capturing properly.
              </li>
            </ul>

            {/* SECTION 2 */}
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
              The 5-minute self-check
            </h2>

            <p style={{ marginBottom: '1.5rem' }}>
              Before anything else, find out where you actually stand. Open ChatGPT, Gemini, or Google and ask questions a real patient would ask, such as:
            </p>

            <ul style={{ marginBottom: '1.8rem', paddingLeft: '1.5rem', color: '#ffffff', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><em>"Best private [your specialism] clinic in [your city/region]"</em></li>
              <li><em>"Is [your clinic name] a good private clinic?"</em></li>
              <li><em>"What does [a specific procedure you offer] cost privately in the UK?"</em></li>
              <li><em>"[Your clinic name] address and opening hours"</em></li>
            </ul>

            <p style={{ marginBottom: '1.2rem', fontWeight: 700, color: '#ffffff' }}>Note down, for each:</p>
            <ul style={{ marginBottom: '1.8rem', paddingLeft: '1.5rem', color: '#aaaaaa', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li>Were you mentioned at all?</li>
              <li>Was the information accurate (address, services, consultants, pricing)?</li>
              <li>Which competitors came up instead of you — and can you see why?</li>
            </ul>

            <div style={{ backgroundColor: '#181818', borderLeft: '4px solid #ffffff', borderRadius: '16px', padding: '1.8rem', marginBottom: '2.5rem' }}>
              <p style={{ fontSize: '1rem', color: '#ffffff', lineHeight: 1.65, margin: 0, fontWeight: 600 }}>
                Most clinics doing this for the first time find at least one of: they're not mentioned, they're mentioned with outdated details, or a competitor with a much less complete website is being cited instead of them.
              </p>
            </div>

            {/* SECTION 3 */}
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
              Why this happens
            </h2>

            <p style={{ marginBottom: '1.5rem' }}>
              AI tools build their answers from what's clearly and consistently published across the web — your own site, directories, review platforms, and news mentions. They tend to favour sources that are:
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem', paddingLeft: 0 }}>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                <strong style={{ color: '#ffffff' }}>Explicit rather than implied:</strong> A page that plainly states <em>"we treat X condition at our clinic in Y location"</em> is easier to cite than a beautifully designed page that implies the same thing through imagery and branding.
              </li>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                <strong style={{ color: '#ffffff' }}>Consistent across sources:</strong> If your website says one address and your Google Business Profile says another, that inconsistency makes you a less trustworthy source to cite.
              </li>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                <strong style={{ color: '#ffffff' }}>Structured, not just written:</strong> Pages using proper schema markup (<code>MedicalBusiness</code>, <code>FAQPage</code>, <code>Physician</code>) give AI tools a much easier, more reliable way to extract accurate facts about your clinic.
              </li>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                <strong style={{ color: '#ffffff' }}>Answer-shaped:</strong> Content written as a direct answer to a real question — <em>"How much does a private hip replacement cost in the UK?"</em> — is far more citable than a general "About Us" page.
              </li>
            </ul>

            {/* SECTION 4 */}
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
              What to actually fix
            </h2>

            <p style={{ marginBottom: '1.5rem' }}>
              If your self-check turned up gaps, here's where to start:
            </p>

            <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <li>
                <strong style={{ color: '#ffffff' }}>1. Audit your NAP consistency (Name, Address, Phone):</strong> Check across your website, Google Business Profile, and any directories you're listed in. Even small mismatches undermine AI trust in your information.
              </li>
              <li>
                <strong style={{ color: '#ffffff' }}>2. Add clear, structured schema markup to your site:</strong> Implement <code>MedicalBusiness</code> or <code>MedicalClinic</code> schema at minimum, with <code>FAQPage</code> schema on any page that answers patient questions directly.
              </li>
              <li>
                <strong style={{ color: '#ffffff' }}>3. Write pages that answer real questions plainly:</strong> Instead of only having a general "Services" page, add direct answer-shaped content: <em>"What does [procedure] involve?"</em>, <em>"How much does [treatment] cost privately?"</em>, <em>"What's recovery like after [procedure]?"</em> These recovery and cost-related questions are exactly what patients — and AI tools — are looking for, and they're some of the most under-published content in private healthcare.
              </li>
              <li>
                <strong style={{ color: '#ffffff' }}>4. Keep information current:</strong> If a consultant leaves, a service changes, or your address moves, update it everywhere at once — not just on your own site.
              </li>
              <li>
                <strong style={{ color: '#ffffff' }}>5. Re-run your self-check every few months:</strong> AI search results shift as tools re-crawl and re-index information — this isn't a one-time fix.
              </li>
            </ol>

            <p style={{ marginBottom: '2.5rem', backgroundColor: '#181818', border: '1px solid #222222', padding: '1.4rem 1.8rem', borderRadius: '16px', color: '#aaaaaa' }}>
              If this feels like a lot to manage alongside running a clinic, it's exactly what our <Link href="/seo-for-private-healthcare" style={{ color: '#ffffff', fontWeight: 800, textDecoration: 'underline' }}>private healthcare SEO service</Link> is built to handle — from schema implementation to ongoing AI visibility monitoring.
            </p>

            {/* SECTION 5 */}
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
              The takeaway
            </h2>

            <p style={{ marginBottom: '1.5rem' }}>
              Your clinic can have excellent care, a great reputation, and a functional website — and still be effectively invisible at the exact moment a prospective patient is deciding who to trust, simply because the information available to AI tools is thin, inconsistent, or missing entirely.
            </p>

            <p style={{ marginBottom: '2.5rem' }}>
              The good news: unlike traditional SEO, most of this is quick to identify and fix. A short audit tells you exactly where you stand, and the fixes are concrete — not vague brand-building work.
            </p>

            {/* CALL TO ACTION BOX */}
            <div style={{ backgroundColor: '#000000', border: '1px solid #222222', borderRadius: '20px', padding: '2.2rem', textAlign: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.8rem' }}>
                Want a free AI visibility and technical SEO audit for your clinic?
              </h3>
              <p style={{ color: '#aaaaaa', fontSize: '1rem', maxWidth: '640px', margin: '0 auto 1.8rem auto' }}>
                Request one below — we'll show you exactly what AI tools currently say about your clinic, and what's holding it back.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="#audit" className="btn btn-primary" style={{ padding: '0.9rem 2.2rem' }}>
                  Request Free Clinic Audit
                </a>
                <Link href="/seo-for-private-healthcare" className="btn btn-outline" style={{ padding: '0.9rem 2.2rem' }}>
                  Healthcare SEO Services
                </Link>
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
              Free Clinic AI Visibility Audit
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              See what ChatGPT & AI Search say about your clinic
            </h2>
            <p style={{ color: '#aaaaaa', fontSize: '1.05rem', maxWidth: '620px', margin: '0 auto' }}>
              Enter your domain below. We will run your clinic site through our AI search diagnostic suite and deliver a custom report.
            </p>
          </div>

          <AIAuditWidget />
        </div>
      </section>
    </div>
  );
}
