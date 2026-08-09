'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from '@/components/Icons';
import AIAuditWidget from '@/components/AIAuditWidget';

export default function ServicesPage() {
  const [selectedTab, setSelectedTab] = useState<'all' | 'geo' | 'technical' | 'schema' | 'pr'>('all');

  const services = [
    {
      id: 'geo',
      num: '01',
      category: 'Generative Search',
      title: 'Generative Engine Optimization (GEO)',
      subtitle: 'Claim #1 Brand Recommendations in ChatGPT, Perplexity, Claude & Gemini',
      description:
        'LLMs synthesize answer engines using specific corpus indexing and brand entity probability. We optimize your copy structure, answer snippet density, and third-party entity citations to guarantee your brand is recommended first.',
      deliverables: [
        'ChatGPT & Perplexity Prompt Index Audit',
        'Direct LLM Source Citation Placement',
        'Entity Co-occurrence Optimization',
        'AI Answer Snippet Restructuring',
      ],
    },
    {
      id: 'technical',
      num: '02',
      category: 'Programmatic & Technical',
      title: 'Enterprise Technical & Programmatic SEO',
      subtitle: 'Build Scalable 10,000+ Page Search Engines That Crawl Instantly',
      description:
        'Fix complex JavaScript hydration issues, render speed bottlenecks, and canonical loops. We build automated programmatic SEO hubs that generate high-intent landing pages targeted at long-tail search volume.',
      deliverables: [
        'JavaScript Hydration & Core Web Vitals Optimization',
        'Programmatic Template Architecture',
        'Custom Logfile & Crawl Budget Analysis',
        'Multilingual & Subdomain SEO Governance',
      ],
    },
    {
      id: 'schema',
      num: '03',
      category: 'Knowledge Graph',
      title: 'Schema.org & Semantic Graph Engineering',
      subtitle: 'Inject Machine-Readable Data Directly Into Search & LLM Crawlers',
      description:
        'Transform your raw HTML into rich JSON-LD semantic graphs. We explicitly define your Organization, Products, FAQs, Executive Authors, and SameAs entity relations so search engines recognize your domain as a primary topical authority.',
      deliverables: [
        'Full JSON-LD Graph Architecture',
        'SameAs Entity Linking (Wikidata & Crunchbase)',
        'Product & Article Microdata Ingestion',
        'Automated Dynamic Schema Pipeline',
      ],
    },
    {
      id: 'pr',
      num: '04',
      category: 'Digital PR & Citations',
      title: 'Digital PR & Entity Citation Network',
      subtitle: 'High-Impact Media Coverage That LLMs Use as Source Truth',
      description:
        'LLMs prioritize sources referenced in top-tier industry journals and press. We execute high-authority Digital PR campaigns to secure unassailable backlinks and brand mentions in publications indexed by AI models.',
      deliverables: [
        'Tier-1 Press & Journal Placement',
        'Data-Driven Benchmark Studies for PR Coverage',
        'Wikipedia & Wikidata Citation Building',
        'Unlinked Brand Mention Conversion',
      ],
    },
  ];

  const filteredServices = selectedTab === 'all' ? services : services.filter((s) => s.id === selectedTab);

  return (
    <div style={{ backgroundColor: '#0b2b26', color: '#f4f8f5', minHeight: '100vh', paddingTop: '5rem', paddingBottom: '6rem' }}>
      {/* Header Banner */}
      <section style={{ marginBottom: '4rem' }}>
        <div className="container">
          <div className="soft-pill-tag" style={{ marginBottom: '1.5rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#54bf9e' }} /> Full-Service Technical SEO
          </div>
          <h1 style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)', fontWeight: 800, color: '#f4f8f5', letterSpacing: '-0.03em', lineHeight: 1.08, marginBottom: '1.5rem' }}>
            <span className="mint-underline">Precision Search</span> Solutions Built for the AI Era.
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#b8d4cd', lineHeight: 1.65, maxWidth: '640px' }}>
            We blend deep technical SEO, semantic schema engineering, and generative answer optimization to secure uncapped market share.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section>
        <div className="container">
          <div className="section-bar">
            <span>(01) SERVICE ARCHITECTURE</span>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <span onClick={() => setSelectedTab('all')} style={{ cursor: 'pointer', color: selectedTab === 'all' ? '#54bf9e' : '#b8d4cd', fontWeight: 700 }}>ALL</span>
              <span onClick={() => setSelectedTab('geo')} style={{ cursor: 'pointer', color: selectedTab === 'geo' ? '#54bf9e' : '#b8d4cd', fontWeight: 700 }}>GEO</span>
              <span onClick={() => setSelectedTab('technical')} style={{ cursor: 'pointer', color: selectedTab === 'technical' ? '#54bf9e' : '#b8d4cd', fontWeight: 700 }}>PROGRAMMATIC</span>
              <span onClick={() => setSelectedTab('schema')} style={{ cursor: 'pointer', color: selectedTab === 'schema' ? '#54bf9e' : '#b8d4cd', fontWeight: 700 }}>SCHEMA</span>
              <span onClick={() => setSelectedTab('pr')} style={{ cursor: 'pointer', color: selectedTab === 'pr' ? '#54bf9e' : '#b8d4cd', fontWeight: 700 }}>DIGITAL PR</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '6rem' }}>
            {filteredServices.map((service) => (
              <div
                key={service.id}
                style={{
                  backgroundColor: '#113731',
                  border: '1px solid #1b4740',
                  borderRadius: '24px',
                  padding: '3.5rem',
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 0.8fr',
                  gap: '4rem',
                  alignItems: 'flex-start',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                }}
              >
                <div>
                  <div className="card-num-pill">{service.num} {service.category.toUpperCase()}</div>
                  <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#f4f8f5', marginBottom: '0.6rem', letterSpacing: '-0.02em' }}>
                    {service.title}
                  </h3>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#54bf9e', marginBottom: '1.5rem' }}>
                    {service.subtitle}
                  </h4>
                  <p style={{ color: '#b8d4cd', fontSize: '1rem', lineHeight: 1.65, marginBottom: '2.5rem' }}>
                    {service.description}
                  </p>

                  <a href="#audit-widget" className="btn btn-primary" style={{ padding: '0.9rem 2rem' }}>
                    Request Proposal
                  </a>
                </div>

                <div style={{ backgroundColor: '#08211d', color: '#ffffff', borderRadius: '20px', padding: '2.5rem', border: '1px solid #1b4740' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#54bf9e', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    ✓ DELIVERABLES & SCOPE
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem', color: '#d8e6e0' }}>
                    {service.deliverables.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', lineHeight: 1.5 }}>
                        <span style={{ color: '#54bf9e', fontWeight: 700 }}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY VERTICALS SECTION */}
      <section style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div className="section-bar">
            <span>(02) UK INDUSTRY VERTICALS</span>
            <span>Dedicated Solutions</span>
          </div>

          <div className="soft-pill-tag" style={{ marginBottom: '1.5rem' }}>
            Bespoke Sector Architecture
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f4f8f5', letterSpacing: '-0.02em', marginBottom: '3rem' }}>
            Choose Your Industry Vertical
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {[
              { name: 'UK Law Firms', path: '/seo-for-law-firms', desc: 'SRA-compliant SEO for UK solicitors that turns legal searches into instructed clients.' },
              { name: 'Private Healthcare', path: '/seo-for-private-healthcare', desc: 'CQC-aligned SEO for private clinics, dentists & specialists that fills appointment books.' },
              { name: 'Home Improvement', path: '/seo-for-home-improvement', desc: 'Cut cost per lead vs £50+ PPC/Checkatrade ads for roofers, builders & contractors.' },
              { name: 'Industrial & Manufacturing B2B', path: '/seo-for-industrial-b2b', desc: 'Spec-driven SEO targeting procurement teams and design engineers searching exact DIN/ISO specs.' },
              { name: 'Private Schools & Education', path: '/seo-for-private-schools-education', desc: 'Long-lead enrolment runway SEO engaging parents early in their 12-month research journey.' },
              { name: 'Shopify Stores', path: '/seo-for-shopify-stores', desc: 'Specialist Shopify technical SEO fixing hidden liquid code issues holding back your rankings.' },
            ].map((vertical, idx) => (
              <Link
                key={vertical.path}
                href={vertical.path}
                className="grid-card"
                style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div className="card-num-pill">0{idx + 1}</div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f4f8f5', marginBottom: '0.6rem' }}>
                    {vertical.name}
                  </h3>
                  <p style={{ color: '#b8d4cd', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {vertical.desc}
                  </p>
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#54bf9e', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  View Dedicated Page <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section style={{ backgroundColor: '#08211d', color: '#ffffff', padding: '6rem 0', borderTop: '1px solid #1b4740' }}>
        <div className="container">
          <div className="soft-pill-tag" style={{ marginBottom: '1.5rem' }}>
            Engagement Retainers
          </div>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: '4rem' }}>
            Strategic Retainers
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div style={{ backgroundColor: '#113731', border: '1px solid #1b4740', borderRadius: '24px', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#54bf9e', marginBottom: '0.5rem' }}>GROWTH PACKAGE</div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>Growth SEO</h3>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: '#ffffff', marginBottom: '2rem' }}>
                  £4,500 <span style={{ fontSize: '0.9rem', color: '#b8d4cd' }}>/MO</span>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem', color: '#d8e6e0', marginBottom: '2.5rem' }}>
                  <li>✓ Technical & Schema Audit</li>
                  <li>✓ High-Intent Key Term Tracking</li>
                  <li>✓ Monthly Content & Landing Page Optimization</li>
                  <li>✓ Quarterly Digital PR Outreach</li>
                </ul>
              </div>
              <a href="#audit-widget" className="btn btn-outline" style={{ width: '100%', color: '#ffffff', borderColor: '#54bf9e', textAlign: 'center' }}>Select Growth</a>
            </div>

            <div style={{ backgroundColor: '#113731', border: '2px solid #54bf9e', borderRadius: '24px', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#54bf9e', marginBottom: '0.5rem' }}>ENTERPRISE PACKAGE</div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>Enterprise Dominance</h3>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: '#54bf9e', marginBottom: '2rem' }}>
                  £9,500 <span style={{ fontSize: '0.9rem', color: '#b8d4cd' }}>/MO</span>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem', color: '#ffffff', marginBottom: '2.5rem' }}>
                  <li>✓ Everything in Growth +</li>
                  <li>✓ Multi-Location & International SEO</li>
                  <li>✓ Custom Programmatic SEO Hubs</li>
                  <li>✓ Knowledge Graph JSON-LD Integration</li>
                  <li>✓ Dedicated Senior SEO Strategist</li>
                </ul>
              </div>
              <a href="#audit-widget" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Choose Enterprise</a>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Audit Widget */}
      <section id="audit-widget" style={{ paddingTop: '6rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <AIAuditWidget />
        </div>
      </section>
    </div>
  );
}
