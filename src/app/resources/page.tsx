'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Download, ArrowRight } from '@/components/Icons';
import AIAuditWidget from '@/components/AIAuditWidget';

export default function ResourcesPage() {
  const articles = [
    {
      title: "Why Isn't My Shopify Store Showing Up on Google? (2026 Guide)",
      path: '/resources/why-shopify-store-not-showing-up-on-google',
      tag: 'FEATURED PLAYBOOK',
      byline: 'By Luke Haracic • Updated Aug 2026',
      desc: 'A full diagnostic for why your Shopify store isn\'t ranking — including duplicate collection parameters, app bloat, and AI search readiness.',
    },
    {
      title: 'Generative Engine Optimization (GEO) Technical Manual',
      path: '/generative-engine-optimization',
      tag: 'TECHNICAL MANUAL',
      byline: 'By XTRACT Search Team • 2026',
      desc: 'How query fan-out variant generation works and how to structure your website to get cited across ChatGPT, Perplexity, and Google AI Overviews.',
    },
    {
      title: 'SRA & CQC Compliance Rules in Organic Search',
      path: '/seo-for-law-firms',
      tag: 'REGULATORY GUIDE',
      byline: 'By Legal & Healthcare SEO Team • 2026',
      desc: 'Navigating solicitor advertising regulations and medical YMYL rules without compromising search visibility or client instruction volume.',
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '5rem', paddingBottom: '6rem' }}>
      {/* Header */}
      <section style={{ marginBottom: '4rem' }}>
        <div className="container">
          <div className="soft-pill-tag" style={{ marginBottom: '1.5rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#000000' }} />
            RESEARCH & PLAYBOOKS
          </div>
          <h1 style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)', fontWeight: 800, color: '#000000', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '1.5rem' }}>
            Technical Search & GEO Research Library.
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666666', lineHeight: 1.6, maxWidth: '680px' }}>
            In-depth technical guides, e-commerce diagnostics, and regulatory compliance playbooks written for UK founders and marketing directors.
          </p>
        </div>
      </section>

      {/* Featured Resource Cards */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar">
            <span>(01) RECENT PLAYBOOKS & DIAGNOSTICS</span>
            <span>Technical Guides</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.8rem' }}>
            {articles.map((item, idx) => (
              <Link
                key={idx}
                href={item.path}
                className="grid-card"
                style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div className="card-num-pill">{item.tag}</div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#000000', marginBottom: '0.8rem', lineHeight: 1.25 }}>
                    {item.title}
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: '#666666', fontWeight: 700, marginBottom: '1rem' }}>
                    {item.byline}
                  </div>
                  <p style={{ color: '#555555', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.8rem' }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#000000', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  Read Full Guide <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Intake Audit Widget */}
      <section id="audit">
        <div className="container" style={{ maxWidth: '920px' }}>
          <AIAuditWidget />
        </div>
      </section>
    </div>
  );
}
