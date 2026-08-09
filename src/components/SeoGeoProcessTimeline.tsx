'use client';

import React from 'react';

export default function SeoGeoProcessTimeline({ industryName }: { industryName?: string }) {
  const steps = [
    {
      num: '01',
      title: 'CONDUCT KEYWORD & GEO RESEARCH',
      side: 'left',
      description:
        `We begin by conducting detailed keyword research and generative AI prompt mapping tailored to ${industryName || 'your sector'}. Our team identifies high-intent searches prospective clients use on Google, ChatGPT, and Perplexity when seeking your services.`,
      bullets: [
        'Align with your exact industry compliance rules (SRA, CQC & YMYL guidelines)',
        'Identify high-converting search queries appearing in Google SERPs & AI Overviews',
        'Map entity co-occurrences to secure brand recommendations in AI answer engines',
      ],
    },
    {
      num: '02',
      title: 'CREATE A BESPOKE CONTENT PLAN',
      side: 'right',
      description:
        `In ${industryName || 'your industry'}, authoritative content demonstrating trust, expertise, and precision is an absolute requirement. We create content unique to your capabilities—from specialized service landing pages to technical research hubs.`,
      bullets: [
        'Location & geotargeted service-area landing pages',
        'Practice-area & specialized service breakdown hubs',
        'Structured FAQ pages with machine-readable microdata',
        'Expert commentary & high-intent buyer decision guides',
      ],
    },
    {
      num: '03',
      title: 'TECHNICAL SEO & SCHEMA GRAPH ARCHITECTURE',
      side: 'left',
      description:
        'We optimize your website architecture to eliminate technical crawl bottlenecks and inject machine-readable Schema.org JSON-LD data graphs directly into search engine and AI model crawlers.',
      bullets: [
        'Full Organization, LegalService & MedicalBusiness JSON-LD schema',
        'Mobile page speed & Core Web Vitals optimization',
        'Faceted navigation index control & canonical URL hierarchy',
        'Schema graph entity linking (Wikidata & Crunchbase co-occurrences)',
      ],
    },
    {
      num: '04',
      title: 'DIGITAL PR & LLM CITATION BUILDING',
      side: 'right',
      description:
        'Generative AI models and search algorithms prioritize brands cited across authoritative publications and media outlets. We execute targeted PR campaigns to secure high-authority references that solidify your domain authority.',
      bullets: [
        'Tier-1 industry press coverage & unlinked brand mention conversions',
        'AI answer engine source citation tracking (ChatGPT & Perplexity)',
        'Wikidata & directory entity reference alignment',
        'Transparent monthly enquiry & organic client attribution reporting',
      ],
    },
  ];

  return (
    <div style={{ position: 'relative', padding: '2rem 0' }}>
      {/* Central Timeline Spine (Desktop) */}
      <div
        className="timeline-spine"
        style={{
          position: 'absolute',
          left: '50%',
          top: '3rem',
          bottom: '3rem',
          width: '2px',
          backgroundColor: '#000000',
          transform: 'translateX(-50%)',
          zIndex: 1,
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', position: 'relative', zIndex: 2 }}>
        {steps.map((step, idx) => (
          <div
            key={idx}
            style={{
              display: 'grid',
              gridTemplateColumns: step.side === 'left' ? '1fr 60px 1fr' : '1fr 60px 1fr',
              alignItems: 'center',
              width: '100%',
            }}
            className="timeline-row"
          >
            {/* Left Box */}
            <div style={{ paddingRight: step.side === 'left' ? '2.5rem' : '0', paddingLeft: step.side === 'right' ? '2.5rem' : '0', gridColumn: step.side === 'left' ? '1' : '3' }}>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e5e5',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 800, color: '#666666', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                  [STEP {step.num}]
                </div>
                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 900,
                    color: '#000000',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ color: '#555555', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '1.2rem' }}>
                  {step.description}
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.92rem', color: '#000000' }}>
                  {step.bullets.map((b, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', lineHeight: 1.5 }}>
                      <span style={{ fontWeight: 900, color: '#000000' }}>•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Central Node Dot */}
            <div style={{ gridColumn: '2', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div
                style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  backgroundColor: '#000000',
                  border: '4px solid #ffffff',
                  boxShadow: '0 0 0 2px #000000',
                }}
              />
            </div>

            {/* Empty Spacer Column for layout symmetry */}
            <div style={{ gridColumn: step.side === 'left' ? '3' : '1' }} className="desktop-only" />
          </div>
        ))}
      </div>

      <style jsx global>{`
        @media (max-width: 868px) {
          .timeline-spine {
            left: '20px' !important;
            transform: none !important;
          }
          .timeline-row {
            grid-template-columns: 40px 1fr !important;
          }
          .timeline-row > div:nth-child(1) {
            grid-column: 2 !important;
            padding: 0 !important;
          }
          .timeline-row > div:nth-child(2) {
            grid-column: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}
