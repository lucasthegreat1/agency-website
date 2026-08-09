'use client';

import React from 'react';
import Link from 'next/link';
import AIAuditWidget from '@/components/AIAuditWidget';

export default function AboutPage() {
  const team = [
    {
      num: '[01]',
      name: 'Alexander Vance',
      role: 'Co-Founder & CEO',
      bio: 'Former Staff Search Engineer at Google & Principal Architect at Yext. 14+ years pioneering semantic Knowledge Graph algorithms.',
      tag: 'EX-GOOGLE SEARCH',
    },
    {
      num: '[02]',
      name: 'Elena Rostova',
      role: 'Chief AI & GEO Officer',
      bio: 'NLP Researcher specializing in Large Language Model retrieval augmented generation (RAG) and entity co-occurrence probability.',
      tag: 'PHD NLP RESEARCH',
    },
    {
      num: '[03]',
      name: 'Marcus Chen',
      role: 'VP of Enterprise Technical SEO',
      bio: 'Scaled programmatic SEO infrastructure for 4 Fortune 500 SaaS companies to over 80M monthly organic visits.',
      tag: 'PROGRAMMATIC GURU',
    },
  ];

  return (
    <div style={{ backgroundColor: '#fcfcfc', minHeight: '100vh', paddingTop: '5rem', paddingBottom: '6rem' }}>
      {/* Header */}
      <section style={{ marginBottom: '4rem' }}>
        <div className="container">
          <div className="mono-tag" style={{ marginBottom: '1.5rem' }}>
            <span className="square-bullet" /> AGENCY VISION
          </div>
          <h1 style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)', fontWeight: 800, color: '#000000', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '1.5rem' }}>
            Engineering Search Authority for Category Kings.
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666666', lineHeight: 1.6, maxWidth: '640px' }}>
            XTRACT was founded on a singular premise: Search is no longer just a list of ten blue links. We help world-class companies command the AI answer engines of tomorrow.
          </p>
        </div>
      </section>

      {/* Principles Section */}
      <section>
        <div className="container">
          <div className="section-bar">
            <span>(01) PRINCIPLES</span>
            <span>Technical Integrity</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '6rem' }}>
            <div className="grid-card">
              <div className="card-num">[01]</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#000000', marginBottom: '0.8rem' }}>Algorithmic Rigor</h3>
              <p style={{ color: '#666666', fontSize: '0.95rem', lineHeight: 1.6 }}>
                We test every GEO strategy against empirical LLM response corpora before deploying to client production environments.
              </p>
            </div>

            <div className="grid-card">
              <div className="card-num">[02]</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#000000', marginBottom: '0.8rem' }}>Knowledge Graph Primacy</h3>
              <p style={{ color: '#666666', fontSize: '0.95rem', lineHeight: 1.6 }}>
                We build machine-readable JSON-LD entity structures that search engines and AI models trust as definitive source truth.
              </p>
            </div>

            <div className="grid-card">
              <div className="card-num">[03]</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#000000', marginBottom: '0.8rem' }}>Quantifiable Revenue</h3>
              <p style={{ color: '#666666', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Vanity search impressions don’t pay bills. We tie every optimization directly to qualified pipeline and ARR expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ backgroundColor: '#000000', color: '#ffffff', padding: '6rem 0' }}>
        <div className="container">
          <div className="mono-tag" style={{ marginBottom: '1.5rem' }}>
            <span className="square-bullet" /> LEADERSHIP
          </div>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: '4rem' }}>
            Search & AI Engineering Veterans
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {team.map((member, i) => (
              <div key={i} style={{ backgroundColor: '#111111', border: '1px solid #222222', padding: '2.5rem' }}>
                <div className="card-num" style={{ marginBottom: '1rem' }}>{member.num}</div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.3rem' }}>{member.name}</h3>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#ff4500', marginBottom: '1.2rem' }}>{member.role.toUpperCase()}</div>
                <p style={{ color: '#aaaaaa', fontSize: '0.9rem', lineHeight: 1.6 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Audit */}
      <section id="audit-widget" style={{ paddingTop: '6rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <AIAuditWidget />
        </div>
      </section>
    </div>
  );
}
