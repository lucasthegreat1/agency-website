'use client';

import React from 'react';

export default function SeoGeoProcessTimeline({ industryName }: { industryName?: string }) {
  const steps = [
    {
      num: '01',
      title: 'CONDUCT KEYWORD RESEARCH',
      side: 'left',
      description:
        `We begin by conducting keyword research and keyword mapping. Our SEO team will discuss potential topics you may want to avoid, and get to work on creating a detailed content plan based on keywords that:`,
      bullets: [
        `Align with your ${industryName || 'business'} requirements`,
        'Are relevant to what is already appearing in the SERPs',
        'People are actively searching for on Google',
      ],
    },
    {
      num: '02',
      title: 'CREATE A BESPOKE CONTENT PLAN',
      side: 'right',
      description:
        `In ${industryName || 'your sector'}, authoritative content that demonstrates trust and expertise is an absolute must. We will create content unique to your services—from practice landing pages to specialized guides. We produce a range of content types, such as:`,
      bullets: [
        'Location & regional service pages',
        'Specialist service breakdown pages',
        'Client support & decision guides',
        'Authoritative industry articles',
      ],
      extraText:
        'Our content writers have experience writing within this sector and will produce expert content that builds topical authority and trust with your target audience.',
    },
    {
      num: '03',
      title: 'TECHNICAL SEO & ON-PAGE OPTIMISATION',
      side: 'left',
      description:
        'We audit and optimize your website technical architecture to ensure Google and other search engines crawl, render, and index your pages without any technical friction.',
      bullets: [
        'Technical website & crawl budget audit',
        'On-page title tag & meta description optimisation',
        'Mobile page speed & Core Web Vitals performance',
        'Structured Schema.org microdata implementation',
      ],
    },
    {
      num: '04',
      title: 'AUTHORITY BUILDING & LINK ACQUISITION',
      side: 'right',
      description:
        'To outrank established competitors on Google, search engines need to see that reputable websites trust you. We build high-quality backlinks and digital PR coverage to elevate your domain authority.',
      bullets: [
        'High-authority backlink acquisition & Digital PR',
        'Competitor backlink gap analysis',
        'Local citation & map pack optimisation',
        'Transparent monthly ranking & organic lead reporting',
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
          backgroundColor: '#ffffff',
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
                  backgroundColor: '#111111',
                  border: '1px solid #222222',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 800, color: '#aaaaaa', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                  [STEP {step.num}]
                </div>
                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 900,
                    color: '#ffffff',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ color: '#aaaaaa', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '1.2rem' }}>
                  {step.description}
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.92rem', color: '#ffffff', marginBottom: step.extraText ? '1.2rem' : '0' }}>
                  {step.bullets.map((b, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', lineHeight: 1.5 }}>
                      <span style={{ fontWeight: 900, color: '#ffffff' }}>•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {step.extraText && (
                  <p style={{ color: '#aaaaaa', fontSize: '0.95rem', lineHeight: 1.65, paddingTop: '0.8rem', borderTop: '1px solid #222222' }}>
                    {step.extraText}
                  </p>
                )}
              </div>
            </div>

            {/* Central Node Dot */}
            <div style={{ gridColumn: '2', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div
                style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  border: '4px solid #000000',
                  boxShadow: '0 0 0 2px #ffffff',
                }}
              />
            </div>

            {/* Empty Spacer Column for layout symmetry */}
            <div style={{ gridColumn: step.side === 'left' ? '3' : '1' }} className="desktop-only" />
          </div>
        ))}
      </div>
    </div>
  );
}
