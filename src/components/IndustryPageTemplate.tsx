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
        url: typeof window !== 'undefined' ? window.location.href : 'https://xtract-ai-seo.com',
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
    <div style={{ backgroundColor: '#ffffff', color: '#000000', minHeight: '100vh', paddingTop: '5rem', paddingBottom: '6rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <section style={{ marginBottom: '5rem' }}>
        <div className="container">
          <div className="soft-pill-tag" style={{ marginBottom: '1.5rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#000000' }} /> {spec.tag}
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5.2vw, 4.5rem)', fontWeight: 800, color: '#000000', letterSpacing: '-0.03em', lineHeight: 1.08, marginBottom: '1.8rem', maxWidth: '900px' }}>
            {spec.h1}
          </h1>

          {spec.metaNotesNotice && (
            <div style={{ backgroundColor: '#ffffff', borderLeft: '4px solid #000000', border: '1px solid #e5e5e5', borderLeftWidth: '4px', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2rem', maxWidth: '820px', fontSize: '0.92rem', color: '#555555' }}>
              <strong style={{ color: '#000000' }}>Regulatory & Strategic Notice:</strong> {spec.metaNotesNotice}
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
          <div className="section-bar">
            <span>(01) STRATEGIC ANALYSIS</span>
            <span>Market Positioning</span>
          </div>

          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '24px', padding: '3.5rem', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#000000', letterSpacing: '-0.02em', marginBottom: '1.2rem' }}>
              {spec.h2Outline.section1Title}
            </h2>
            <p style={{ color: '#555555', fontSize: '1.05rem', lineHeight: 1.65, maxWidth: '820px', whiteSpace: 'pre-line' }}>
              {spec.h2Outline.section1Content}
            </p>
          </div>
        </div>
      </section>

      {/* H2 OUTLINE SECTION 2 */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar">
            <span>(02) TARGET SEARCH STRATEGY</span>
            <span>High-Intent Traffic</span>
          </div>

          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '24px', padding: '3.5rem', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#000000', letterSpacing: '-0.02em', marginBottom: '1.2rem' }}>
              {spec.h2Outline.section2Title}
            </h2>
            <p style={{ color: '#555555', fontSize: '1.05rem', lineHeight: 1.65, maxWidth: '820px', whiteSpace: 'pre-line' }}>
              {spec.h2Outline.section2Content}
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS GRAPH SECTION - SEO TIMELINE */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar">
            <span>(03) OUR SEO EXECUTION PROCESS</span>
            <span>Step-by-Step Methodology</span>
          </div>

          <SeoGeoProcessTimeline industryName={spec.tag} />
        </div>
      </section>

      {/* H2 OUTLINE SECTION 3: CASE STUDY */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar">
            <span>(04) PROVEN PROOF</span>
            <span>Case Study & Outcomes</span>
          </div>

          <div style={{ backgroundColor: '#000000', color: '#ffffff', borderRadius: '24px', padding: '3.5rem', boxShadow: '0 16px 36px rgba(0, 0, 0, 0.15)' }}>
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
          <div className="section-bar">
            <span>(05) RETAINER SCOPE</span>
            <span>What's Included</span>
          </div>

          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '24px', padding: '3.5rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#000000', letterSpacing: '-0.02em', marginBottom: '2.5rem' }}>
              {spec.h2Outline.retainerTitle}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {spec.h2Outline.retainerItems.map((item, idx) => (
                <div key={idx} style={{ backgroundColor: '#f8f8f8', border: '1px solid #e5e5e5', borderRadius: '16px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', flexShrink: 0, fontSize: '0.8rem', fontWeight: 800 }}>
                    ✓
                  </div>
                  <span style={{ fontSize: '0.98rem', fontWeight: 700, color: '#000000' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* H2 OUTLINE SECTION 5: FAQS */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar">
            <span>(06) FREQUENTLY ASKED QUESTIONS</span>
            <span>Clear Answers</span>
          </div>

          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '24px', padding: '2.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {spec.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} style={{ borderBottom: '1px solid #f0f0f0', paddingBottom: '1rem' }}>
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
                        color: '#000000',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>{faq.q}</span>
                      <span style={{ color: '#000000', fontWeight: 800, fontSize: '1.2rem' }}>{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <p style={{ color: '#555555', fontSize: '0.98rem', lineHeight: 1.65, paddingBottom: '0.5rem' }}>
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
            <div className="soft-pill-tag" style={{ marginBottom: '1rem' }}>
              Claim Your Free Audit
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#000000', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Ready to Fill Your Pipeline with High-Intent Organic Clients?
            </h2>
            <p style={{ color: '#555555', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
              Enter your domain below for a free technical search & AI visibility analysis.
            </p>
          </div>

          <AIAuditWidget />
        </div>
      </section>
    </div>
  );
}
