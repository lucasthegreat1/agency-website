'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AIAuditWidget from '@/components/AIAuditWidget';
import SeoGeoProcessTimeline from '@/components/SeoGeoProcessTimeline';

export type UKIndustrySpec = {
  tag: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  schemaType: string;
  h2Outline: {
    section1Title: string;
    section1Content: string;
    section2Title: string;
    section2Content: string;
    caseStudyTitle: string;
    caseStudyContent: string;
    caseStudyResult: string;
    retainerTitle: string;
    retainerItems: string[];
  };
  aiSearchSection?: {
    h2: string;
    content: string;
  };
  metaNotesNotice?: string;
  faqs: { q: string; a: string }[];
};

export default function IndustryPageTemplate({ spec }: { spec: UKIndustrySpec }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': spec.schemaType,
        name: spec.h1,
        description: spec.metaDescription,
        url: typeof window !== 'undefined' ? window.location.href : 'https://tryxtract.co.uk',
      },
      {
        '@type': 'FAQPage',
        mainEntity: spec.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
    ],
  };

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
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffffff' }} /> {spec.tag}
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5.2vw, 4.5rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.08, marginBottom: '1.8rem', maxWidth: '900px' }}>
            {spec.h1}
          </h1>

          {spec.metaNotesNotice && (
            <div style={{ backgroundColor: '#111111', borderLeft: '4px solid #ffffff', border: '1px solid #222222', borderLeftWidth: '4px', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2rem', maxWidth: '820px', fontSize: '0.92rem', color: '#aaaaaa' }}>
              <strong style={{ color: '#ffffff' }}>Regulatory & Strategic Notice:</strong> {spec.metaNotesNotice}
            </div>
          )}

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#audit-widget" className="btn btn-primary" style={{ padding: '1rem 2.2rem' }}>
              Book a Free Audit Call
            </a>
            <Link href="/services" className="btn btn-outline" style={{ padding: '1rem 2.2rem' }}>
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* H2 OUTLINE SECTION 1 */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar" style={{ borderColor: '#222222', color: '#aaaaaa' }}>
            <span>(01) STRATEGIC ANALYSIS</span>
            <span>Market Positioning</span>
          </div>

          <div style={{ backgroundColor: '#111111', border: '1px solid #222222', borderRadius: '24px', padding: '3.5rem', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1.2rem' }}>
              {spec.h2Outline.section1Title}
            </h2>
            <p style={{ color: '#aaaaaa', fontSize: '1.05rem', lineHeight: 1.65, maxWidth: '820px', whiteSpace: 'pre-line' }}>
              {spec.h2Outline.section1Content}
            </p>
          </div>
        </div>
      </section>

      {/* H2 OUTLINE SECTION 2 */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar" style={{ borderColor: '#222222', color: '#aaaaaa' }}>
            <span>(02) TARGET SEARCH STRATEGY</span>
            <span>High-Intent Traffic</span>
          </div>

          <div style={{ backgroundColor: '#111111', border: '1px solid #222222', borderRadius: '24px', padding: '3.5rem', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1.2rem' }}>
              {spec.h2Outline.section2Title}
            </h2>
            <p style={{ color: '#aaaaaa', fontSize: '1.05rem', lineHeight: 1.65, maxWidth: '820px', whiteSpace: 'pre-line' }}>
              {spec.h2Outline.section2Content}
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS GRAPH SECTION - SEO TIMELINE */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar" style={{ borderColor: '#222222', color: '#aaaaaa' }}>
            <span>(03) OUR SEO EXECUTION PROCESS</span>
            <span>Step-by-Step Methodology</span>
          </div>

          <SeoGeoProcessTimeline industryName={spec.tag} />
        </div>
      </section>

      {/* H2 OUTLINE SECTION 3: CASE STUDY */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar" style={{ borderColor: '#222222', color: '#aaaaaa' }}>
            <span>(04) PROVEN PROOF</span>
            <span>Case Study & Outcomes</span>
          </div>

          <div style={{ backgroundColor: '#111111', border: '1px solid #222222', color: '#ffffff', borderRadius: '24px', padding: '3.5rem', boxShadow: '0 16px 36px rgba(0, 0, 0, 0.5)' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#aaaaaa', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
              VERIFIED OUTCOMES
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              {spec.h2Outline.caseStudyTitle}
            </h2>
            <div style={{ fontSize: '3.2rem', fontWeight: 900, color: '#ffffff', marginBottom: '1.5rem', lineHeight: 1 }}>
              {spec.h2Outline.caseStudyResult}
            </div>
            <p style={{ color: '#cccccc', fontSize: '1.05rem', lineHeight: 1.65, maxWidth: '800px' }}>
              {spec.h2Outline.caseStudyContent}
            </p>
          </div>
        </div>
      </section>

      {/* H2 OUTLINE SECTION 4: RETAINER SCOPE */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar" style={{ borderColor: '#222222', color: '#aaaaaa' }}>
            <span>(05) RETAINER SCOPE</span>
            <span>What's Included</span>
          </div>

          <div style={{ backgroundColor: '#111111', border: '1px solid #222222', borderRadius: '24px', padding: '3.5rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '2.5rem' }}>
              {spec.h2Outline.retainerTitle}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {spec.h2Outline.retainerItems.map((item, idx) => (
                <div key={idx} style={{ backgroundColor: '#181818', border: '1px solid #222222', borderRadius: '16px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000000', flexShrink: 0, fontSize: '0.8rem', fontWeight: 900 }}>
                    ✓
                  </div>
                  <span style={{ fontSize: '0.98rem', fontWeight: 700, color: '#ffffff' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED AI SEARCH / GEO H2 BLOCK */}
      {spec.aiSearchSection && (
        <section style={{ marginBottom: '6rem' }}>
          <div className="container">
            <div className="section-bar" style={{ borderColor: '#222222', color: '#aaaaaa' }}>
              <span>(06) AI SEARCH & FORWARD-THINKING VISIBILITY</span>
              <span>Modern Search Behaviour</span>
            </div>

            <div style={{ backgroundColor: '#111111', border: '1px solid #222222', borderRadius: '24px', padding: '3.5rem' }}>
              <div className="soft-pill-tag" style={{ marginBottom: '1.2rem', backgroundColor: '#181818', borderColor: '#333333', color: '#ffffff' }}>
                AI Search Optimization
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1.2rem' }}>
                {spec.aiSearchSection.h2}
              </h2>
              <p style={{ color: '#aaaaaa', fontSize: '1.08rem', lineHeight: 1.7, maxWidth: '840px' }}>
                {spec.aiSearchSection.content}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* H2 OUTLINE SECTION 5: FAQS */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar" style={{ borderColor: '#222222', color: '#aaaaaa' }}>
            <span>({spec.aiSearchSection ? '07' : '06'}) FREQUENTLY ASKED QUESTIONS</span>
            <span>Clear Answers</span>
          </div>

          <div style={{ backgroundColor: '#111111', border: '1px solid #222222', borderRadius: '24px', padding: '2.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {spec.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} style={{ borderBottom: '1px solid #222222', paddingBottom: '1rem' }}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        background: 'none',
                        border: 'none',
                        padding: '0.8rem 0',
                        fontSize: '1.1rem',
                        fontWeight: 800,
                        color: '#ffffff',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>{faq.q}</span>
                      <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.2rem' }}>{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <p style={{ color: '#aaaaaa', fontSize: '0.98rem', lineHeight: 1.65, paddingBottom: '0.5rem' }}>
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA & AUDIT WIDGET */}
      <section id="audit-widget">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="soft-pill-tag" style={{ marginBottom: '1rem', backgroundColor: '#181818', borderColor: '#333333', color: '#ffffff' }}>
              Claim Your Free Audit
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Ready to Fill Your Pipeline with High-Intent Organic Clients?
            </h2>
            <p style={{ color: '#aaaaaa', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
              Enter your domain below for a free technical search & AI visibility analysis.
            </p>
          </div>

          <AIAuditWidget />
        </div>
      </section>
    </div>
  );
}
