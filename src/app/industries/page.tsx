'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from '@/components/Icons';
import AIAuditWidget from '@/components/AIAuditWidget';

export default function IndustriesOverviewPage() {
  const ukVerticals = [
    { name: 'UK Law Firms', path: '/seo-for-law-firms', num: '[01]', desc: 'SRA-compliant SEO for UK solicitors that turns legal searches into instructed clients.' },
    { name: 'Private Healthcare', path: '/seo-for-private-healthcare', num: '[02]', desc: 'CQC-aligned SEO for private clinics, dentists & specialists that fills appointment books.' },
    { name: 'Home Improvement', path: '/seo-for-home-improvement', num: '[03]', desc: 'Cut cost per lead vs £50+ PPC/Checkatrade ads for roofers, builders & contractors.' },
    { name: 'Industrial & B2B Manufacturing', path: '/seo-for-industrial-b2b', num: '[04]', desc: 'Spec-driven SEO targeting procurement teams and design engineers searching exact DIN/ISO specs.' },
    { name: 'Private Schools & Education', path: '/seo-for-private-schools-education', num: '[05]', desc: 'Long-lead enrolment runway SEO engaging parents early in their 12-month research journey.' },
    { name: 'Shopify E-Commerce Stores', path: '/seo-for-shopify-stores', num: '[06]', desc: 'Specialist Shopify technical SEO fixing hidden liquid code issues holding back your rankings.' },
    { name: 'Cybersecurity Firms', path: '/seo-for-cybersecurity', num: '[07]', desc: 'NIS2 compliance & technical SEO targeting CISOs and enterprise IT decision-makers.' },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '5rem', paddingBottom: '6rem' }}>
      {/* Header */}
      <section style={{ marginBottom: '4rem' }}>
        <div className="container">
          <div className="mono-tag" style={{ marginBottom: '1.5rem' }}>
            <span className="square-bullet" /> INDUSTRY ARCHITECTURE
          </div>
          <h1 style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)', fontWeight: 800, color: '#000000', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '1.5rem' }}>
            Specialist Search Campaigns by Industry.
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666666', lineHeight: 1.6, maxWidth: '680px' }}>
            Explore dedicated technical roadmaps, regulatory-compliant copy frameworks, and verified outcome data for your specific sector.
          </p>
        </div>
      </section>

      {/* Specialist Industry Verticals */}
      <section>
        <div className="container">
          <div className="section-bar">
            <span>(01) SELECT YOUR INDUSTRY</span>
            <span>Dedicated Industry Pages</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '6rem' }}>
            {ukVerticals.map((v) => (
              <Link
                key={v.path}
                href={v.path}
                className="grid-card"
                style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div className="card-num">{v.num}</div>
                  <h3 style={{ fontSize: '1.55rem', fontWeight: 800, color: '#000000', marginBottom: '0.8rem', letterSpacing: '-0.02em' }}>
                    {v.name}
                  </h3>
                  <p style={{ color: '#666666', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                    {v.desc}
                  </p>
                </div>

                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, color: '#000000', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  VIEW SPECIALIST PAGE <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Audit Widget */}
      <section id="audit-widget">
        <div className="container" style={{ maxWidth: '900px' }}>
          <AIAuditWidget />
        </div>
      </section>
    </div>
  );
}
