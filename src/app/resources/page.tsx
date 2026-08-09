'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Download } from '@/components/Icons';
import AIAuditWidget from '@/components/AIAuditWidget';

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resources = [
    {
      id: 1,
      num: '[01]',
      category: 'playbook',
      type: 'GEO Playbook',
      title: 'The 2026 Generative Engine Optimization Blueprint',
      description: 'A 45-page technical guide on optimizing content architecture for SearchGPT, Perplexity AI, and Google Gemini.',
      readTime: '15 MIN READ',
      date: 'AUG 2026',
    },
    {
      id: 2,
      num: '[02]',
      category: 'tool',
      type: 'Developer Tool',
      title: 'JSON-LD Knowledge Graph Builder & Validator',
      description: 'Free browser tool to generate schema definitions for Organization, SameAs Wikidata links, and Executive Authors.',
      readTime: 'INTERACTIVE TOOL',
      date: 'AUG 2026',
    },
    {
      id: 3,
      num: '[03]',
      category: 'whitepaper',
      type: 'Research Report',
      title: 'How ChatGPT Ranks Software: Analysis of 500,000 Prompts',
      description: 'Statistical analysis of source citation frequency, domain authority thresholds, and co-occurrence patterns in LLMs.',
      readTime: '20 MIN READ',
      date: 'JUL 2026',
    },
    {
      id: 4,
      num: '[04]',
      category: 'checklist',
      type: 'Technical Checklist',
      title: 'AI Crawler & Robots.txt Governance Audit Checklist',
      description: 'Audit web server rules to ensure GPTBot, PerplexityBot, and ClaudeBot can safely parse your domain.',
      readTime: '5 MIN CHECKLIST',
      date: 'JUN 2026',
    },
  ];

  const filteredResources = resources.filter((res) => {
    const matchesCategory = selectedCategory === 'all' || res.category === selectedCategory;
    const matchesSearch = res.title.toLowerCase().includes(searchTerm.toLowerCase()) || res.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ backgroundColor: '#fcfcfc', minHeight: '100vh', paddingTop: '5rem', paddingBottom: '6rem' }}>
      {/* Header */}
      <section style={{ marginBottom: '4rem' }}>
        <div className="container">
          <div className="mono-tag" style={{ marginBottom: '1.5rem' }}>
            <span className="square-bullet" /> OPEN RESEARCH & TOOLS
          </div>
          <h1 style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)', fontWeight: 800, color: '#000000', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '1.5rem' }}>
            GEO Intelligence Resource Hub.
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666666', lineHeight: 1.6, maxWidth: '640px' }}>
            Free technical playbooks, empirical LLM research reports, and schema generators.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section>
        <div className="container">
          <div className="section-bar">
            <span>(01) REPOSITORY</span>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <span onClick={() => setSelectedCategory('all')} style={{ cursor: 'pointer', color: selectedCategory === 'all' ? '#ff4500' : '#777777' }}>ALL</span>
              <span onClick={() => setSelectedCategory('playbook')} style={{ cursor: 'pointer', color: selectedCategory === 'playbook' ? '#ff4500' : '#777777' }}>PLAYBOOKS</span>
              <span onClick={() => setSelectedCategory('whitepaper')} style={{ cursor: 'pointer', color: selectedCategory === 'whitepaper' ? '#ff4500' : '#777777' }}>RESEARCH</span>
              <span onClick={() => setSelectedCategory('tool')} style={{ cursor: 'pointer', color: selectedCategory === 'tool' ? '#ff4500' : '#777777' }}>TOOLS</span>
            </div>
          </div>

          {/* Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '6rem' }}>
            {filteredResources.map((res) => (
              <div key={res.id} className="grid-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <span className="card-num">{res.num}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#888888' }}>{res.date}</span>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#000000', marginBottom: '0.8rem', letterSpacing: '-0.02em', lineHeight: 1.3 }}>
                    {res.title}
                  </h3>
                  <p style={{ color: '#666666', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                    {res.description}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#777777' }}>{res.readTime}</span>
                  <a href="#audit-widget" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>ACCESS FREE</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Audit */}
      <section id="audit-widget">
        <div className="container" style={{ maxWidth: '900px' }}>
          <AIAuditWidget />
        </div>
      </section>
    </div>
  );
}
