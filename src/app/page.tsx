'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from '@/components/Icons';
import AIAuditWidget from '@/components/AIAuditWidget';

export default function HomePage() {
  const [monthlyTraffic, setMonthlyTraffic] = useState(50000);
  const [avgCustomerValue, setAvgCustomerValue] = useState(1200);

  const estimatedAiTrafficGain = Math.round(monthlyTraffic * 0.45);
  const estimatedLeadIncrease = Math.round(estimatedAiTrafficGain * 0.035);
  const estimatedRevenueGain = estimatedLeadIncrease * avgCustomerValue;

  return (
    <div style={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh' }}>
      {/* HERO SECTION */}
      <section style={{ paddingTop: 'clamp(3.5rem, 7vw, 6rem)', paddingBottom: 'clamp(4rem, 8vw, 7rem)' }}>
        <div className="container">
          {/* Sleek Dark Soft Pill Tag */}
          <div
            className="soft-pill-tag"
            style={{
              marginBottom: '1.8rem',
              backgroundColor: '#111111',
              borderColor: '#222222',
              color: '#ffffff',
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffffff' }} />
            Personalised search plans to meet your needs
          </div>

          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.75fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              {/* Bold White Headline */}
              <h1
                style={{
                  fontSize: 'clamp(2.4rem, 5.8vw, 5rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  lineHeight: 1.05,
                  color: '#ffffff',
                  marginBottom: '1.8rem',
                }}
              >
                <span
                  style={{
                    position: 'relative',
                    display: 'inline-block',
                  }}
                >
                  Get more clients
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '6px',
                      left: 0,
                      right: 0,
                      height: '8px',
                      backgroundColor: '#ffffff',
                      opacity: 0.25,
                      borderRadius: '4px',
                    }}
                  />
                </span>{' '}
                from search.
              </h1>

              {/* Subheadline Paragraph */}
              <p
                style={{
                  fontSize: 'clamp(1.08rem, 2.2vw, 1.25rem)',
                  color: '#aaaaaa',
                  lineHeight: 1.65,
                  maxWidth: '620px',
                  fontWeight: 500,
                  marginBottom: '2.2rem',
                }}
              >
                Specialist UK SEO built for law firms, healthcare, home improvement, industrial B2B, private education, and Shopify e-commerce brands.
              </p>

              {/* Bullet points with checkmarks */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)', fontWeight: 600, color: '#ffffff' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000000', flexShrink: 0, fontWeight: 900, fontSize: '0.85rem' }}>
                    ✓
                  </div>
                  <span>Legal, Healthcare, Home Improvement, B2B & Shopify E-Commerce SEO</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)', fontWeight: 600, color: '#ffffff' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000000', flexShrink: 0, fontWeight: 900, fontSize: '0.85rem' }}>
                    ✓
                  </div>
                  <span>Regulatory-compliant copy (SRA, CQC & YMYL rules)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="#audit-section"
                  className="btn"
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    padding: '1rem 2.2rem',
                    fontWeight: 800,
                    boxShadow: '0 8px 24px rgba(255, 255, 255, 0.15)',
                  }}
                >
                  Book a Free SEO Audit
                </a>
                <Link
                  href="/industries"
                  className="btn"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#ffffff',
                    border: '2px solid #ffffff',
                    padding: '1rem 2.2rem',
                    fontWeight: 800,
                  }}
                >
                  Explore Industry Pages
                </Link>
              </div>
            </div>

            {/* Right Stat Card */}
            <div style={{ backgroundColor: '#111111', border: '1px solid #222222', color: '#ffffff', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3rem)', boxShadow: '0 16px 40px rgba(0, 0, 0, 0.5)' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#aaaaaa', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                MARKET DOMINANCE COHORT
              </div>
              <div style={{ fontSize: 'clamp(3.2rem, 6vw, 4.5rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1, marginBottom: '1rem' }}>
                +340%
              </div>
              <p style={{ fontSize: '0.95rem', color: '#cccccc', lineHeight: 1.6, marginBottom: '2rem' }}>
                Avg. increase in qualified organic enquiries across our UK legal, healthcare, and trade clients.
              </p>
              <div style={{ borderTop: '1px solid #222222', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: '#aaaaaa' }}>
                <div>✓ 100% Regulatory Compliant</div>
                <div>✓ Zero Outcome Guarantees</div>
                <div>✓ Transparent Lead Attribution</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION BAR: UK INDUSTRY VERTICALS */}
      <section style={{ paddingBottom: 'clamp(4rem, 8vw, 7rem)' }}>
        <div className="container">
          <div className="section-bar" style={{ borderColor: '#222222', color: '#aaaaaa' }}>
            <span>(01) SELECT YOUR SECTOR</span>
            <span>Dedicated UK Industry Pages</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            {[
              { name: 'UK Law Firms', path: '/seo-for-law-firms', desc: 'SRA-compliant SEO for UK solicitors that turns legal searches into instructed clients.' },
              { name: 'Private Healthcare', path: '/seo-for-private-healthcare', desc: 'CQC-aligned SEO for private clinics, dentists & specialists that fills appointment books.' },
              { name: 'Home Improvement', path: '/seo-for-home-improvement', desc: 'Cut cost per lead vs £50+ PPC/Checkatrade ads for roofers, builders & contractors.' },
              { name: 'Industrial & B2B Manufacturing', path: '/seo-for-industrial-b2b', desc: 'Spec-driven SEO targeting procurement teams and design engineers searching exact DIN/ISO specs.' },
              { name: 'Private Schools & Education', path: '/seo-for-private-schools-education', desc: 'Long-lead enrolment runway SEO engaging parents early in their 12-month research journey.' },
              { name: 'Shopify E-Commerce Stores', path: '/seo-for-shopify-stores', desc: 'Specialist Shopify technical SEO fixing hidden liquid code issues holding back your rankings.' },
            ].map((v, idx) => (
              <Link
                key={v.path}
                href={v.path}
                style={{
                  backgroundColor: '#111111',
                  border: '1px solid #222222',
                  borderRadius: '20px',
                  padding: '2.2rem',
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
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.8rem' }}>
                    {v.name}
                  </h3>
                  <p style={{ color: '#aaaaaa', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.8rem' }}>
                    {v.desc}
                  </p>
                </div>

                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  View Dedicated Page <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* REVENUE SIMULATOR SECTION */}
      <section style={{ paddingBottom: 'clamp(4rem, 8vw, 7rem)' }}>
        <div className="container">
          <div className="section-bar" style={{ borderColor: '#222222', color: '#aaaaaa' }}>
            <span>(02) REVENUE IMPACT</span>
            <span>Interactive Lead Simulator</span>
          </div>

          <div style={{ backgroundColor: '#111111', border: '1px solid #222222', borderRadius: '24px', padding: 'clamp(1.75rem, 4vw, 3.5rem)' }}>
            <div className="simulator-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <div>
                <div
                  className="soft-pill-tag"
                  style={{
                    marginBottom: '1rem',
                    backgroundColor: '#181818',
                    borderColor: '#333333',
                    color: '#ffffff',
                  }}
                >
                  Estimate Revenue Growth
                </div>
                <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.3rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                  Calculate Your Potential Organic Lead Value
                </h2>
                <p style={{ color: '#aaaaaa', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                  Adjust baseline traffic and customer contract value to model potential pipeline expansion.
                </p>

                {/* Sliders */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', fontWeight: 700, fontSize: '0.9rem', color: '#ffffff' }}>
                      <span>MONTHLY ORGANIC TRAFFIC:</span>
                      <span style={{ color: '#ffffff', fontWeight: 800 }}>{monthlyTraffic.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="10000"
                      max="500000"
                      step="5000"
                      value={monthlyTraffic}
                      onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                      style={{ width: '100%', accentColor: '#ffffff', cursor: 'pointer' }}
                    />
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', fontWeight: 700, fontSize: '0.9rem', color: '#ffffff' }}>
                      <span>AVERAGE CLIENT / INSTRUCTION VALUE (£):</span>
                      <span style={{ color: '#ffffff', fontWeight: 800 }}>£{avgCustomerValue.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="200"
                      max="10000"
                      step="100"
                      value={avgCustomerValue}
                      onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
                      style={{ width: '100%', accentColor: '#ffffff', cursor: 'pointer' }}
                    />
                  </div>
                </div>
              </div>

              {/* Output Display */}
              <div style={{ backgroundColor: '#000000', border: '1px solid #222222', color: '#ffffff', borderRadius: '20px', padding: 'clamp(2rem, 4vw, 3rem)' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#aaaaaa', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                  PROJECTED ANNUAL REVENUE EXPANSION
                </div>
                <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1, marginBottom: '2rem' }}>
                  +£{(estimatedRevenueGain * 12).toLocaleString()}
                </div>
                <div style={{ borderTop: '1px solid #222222', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', color: '#cccccc' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Estimated Visits / Mo:</span>
                    <strong style={{ color: '#ffffff' }}>+{estimatedAiTrafficGain.toLocaleString()}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Qualified Enquiries / Mo:</span>
                    <strong style={{ color: '#ffffff' }}>+{estimatedLeadIncrease.toLocaleString()}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMBEDDED AI AUDIT SECTION */}
      <section id="audit-section" style={{ paddingBottom: 'clamp(4rem, 8vw, 7rem)' }}>
        <div className="container" style={{ maxWidth: '920px' }}>
          <AIAuditWidget />
        </div>
      </section>
    </div>
  );
}
