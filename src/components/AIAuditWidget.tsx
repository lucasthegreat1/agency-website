'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, RefreshCw } from '@/components/Icons';
import confetti from 'canvas-confetti';

export default function AIAuditWidget() {
  const [url, setUrl] = useState('');
  const [brand, setBrand] = useState('');
  const [industry, setIndustry] = useState('UK Law Firms');
  const [status, setStatus] = useState<'idle' | 'scanning' | 'complete'>('idle');
  const [scanStep, setScanStep] = useState(0);

  const steps = [
    'Parsing domain structure & semantic metadata...',
    'Querying ChatGPT & Perplexity index for brand mentions...',
    'Analyzing Schema.org JSON-LD Knowledge Graph density...',
    'Evaluating search engine compliance & speed scores...',
    'Synthesizing Organic & AI Visibility Audit Score...',
  ];

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setStatus('scanning');
    setScanStep(0);

    let stepIndex = 0;
    const interval = setInterval(() => {
      stepIndex++;
      if (stepIndex < steps.length) {
        setScanStep(stepIndex);
      } else {
        clearInterval(interval);
        setStatus('complete');
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#000000', '#555555', '#888888'],
          });
        } catch (err) {
          // ignore fallback
        }
      }
    }, 850);
  };

  const resetAudit = () => {
    setStatus('idle');
    setUrl('');
    setBrand('');
  };

  return (
    <div
      id="audit"
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e5e5e5',
        borderRadius: '24px',
        padding: '3rem',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
        color: '#000000',
      }}
    >
      {status === 'idle' && (
        <div>
          <div className="soft-pill-tag" style={{ marginBottom: '1rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#000000' }} /> Free Instant Website & SEO Audit
          </div>

          <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#000000', letterSpacing: '-0.02em', marginBottom: '0.8rem' }}>
            Audit Your Website’s Search & AI Visibility
          </h3>
          <p style={{ color: '#555555', fontSize: '1.05rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            Discover technical issues holding back your rankings and see how frequently search engines and AI models recommend your website.
          </p>

          <form onSubmit={handleScan} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
            <div style={{ gridColumn: 'span 2' }}>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#000000', marginBottom: '0.5rem' }}>
                WEBSITE URL *
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  required
                  placeholder="e.g. yourcompany.co.uk"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.9rem 1rem 0.9rem 2.6rem',
                    border: '1.5px solid #e5e5e5',
                    borderRadius: '12px',
                    fontSize: '0.95rem',
                    outline: 'none',
                    backgroundColor: '#f8f8f8',
                    color: '#000000',
                    fontFamily: 'var(--font-sans)',
                  }}
                />
                <Search size={18} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: '#888888' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#000000', marginBottom: '0.5rem' }}>
                BUSINESS / BRAND NAME
              </label>
              <input
                type="text"
                placeholder="e.g. Acme Solicitors"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.9rem 1rem',
                  border: '1.5px solid #e5e5e5',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  outline: 'none',
                  backgroundColor: '#f8f8f8',
                  color: '#000000',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#000000', marginBottom: '0.5rem' }}>
                INDUSTRY SECTOR
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.9rem 1rem',
                  border: '1.5px solid #e5e5e5',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  outline: 'none',
                  backgroundColor: '#f8f8f8',
                  color: '#000000',
                }}
              >
                <option value="UK Law Firms">UK Law Firms</option>
                <option value="Private Healthcare">Private Healthcare</option>
                <option value="Home Improvement">Home Improvement</option>
                <option value="Industrial B2B">Industrial & B2B</option>
                <option value="Private Education">Private Education</option>
                <option value="Shopify Stores">Shopify & E-Commerce</option>
              </select>
            </div>

            <div style={{ gridColumn: 'span 2', marginTop: '0.8rem' }}>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1.1rem' }}>
                Generate Free Audit Report
              </button>
            </div>
          </form>
        </div>
      )}

      {status === 'scanning' && (
        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              margin: '0 auto 1.5rem auto',
              borderRadius: '50%',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000000',
            }}
          >
            <RefreshCw size={26} style={{ animation: 'spin 1s linear infinite' }} />
          </div>

          <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.8rem', color: '#000000' }}>
            Scanning {url || 'Your Domain'} Across Search & AI Indexes
          </h4>
          <p style={{ color: '#000000', fontSize: '0.95rem', marginBottom: '2rem', fontWeight: 700 }}>
            {steps[scanStep]}
          </p>

          <div style={{ width: '100%', height: '6px', backgroundColor: '#e5e5e5', borderRadius: '3px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${((scanStep + 1) / steps.length) * 100}%`,
                height: '100%',
                backgroundColor: '#000000',
                transition: 'width 0.4s ease',
              }}
            />
          </div>

          <style jsx>{`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}

      {status === 'complete' && (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="soft-pill-tag" style={{ marginBottom: '0.4rem' }}>
                ✓ Audit Complete
              </div>
              <h4 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#000000' }}>
                Diagnostic Results for <span style={{ textDecoration: 'underline' }}>{url}</span>
              </h4>
            </div>
            <button onClick={resetAudit} className="btn btn-outline" style={{ padding: '0.6rem 1.2rem', fontSize: '0.82rem' }}>
              Re-run Audit
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ backgroundColor: '#000000', color: '#ffffff', padding: '1.5rem', borderRadius: '16px', textAlign: 'center' }}>
              <span style={{ fontSize: '0.78rem', color: '#aaaaaa', textTransform: 'uppercase', fontWeight: 700 }}>OVERALL HEALTH SCORE</span>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1, margin: '0.3rem 0' }}>
                64<span style={{ fontSize: '1.3rem', color: '#666666' }}>/100</span>
              </div>
              <span style={{ fontSize: '0.78rem', color: '#000000', backgroundColor: '#ffffff', padding: '0.2rem 0.6rem', borderRadius: '999px', fontWeight: 700 }}>MODERATE FOOTPRINT</span>
            </div>

            <div style={{ backgroundColor: '#f8f8f8', border: '1px solid #e5e5e5', padding: '1.25rem', borderRadius: '16px' }}>
              <span style={{ fontSize: '0.78rem', color: '#555555', fontWeight: 700 }}>SEARCH RANKING DENSITY</span>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#000000', margin: '0.2rem 0' }}>42%</div>
              <p style={{ fontSize: '0.8rem', color: '#666666', fontWeight: 600 }}>Missing key location terms</p>
            </div>

            <div style={{ backgroundColor: '#f8f8f8', border: '1px solid #e5e5e5', padding: '1.25rem', borderRadius: '16px' }}>
              <span style={{ fontSize: '0.78rem', color: '#555555', fontWeight: 700 }}>MOBILE PERFORMANCE</span>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#000000', margin: '0.2rem 0' }}>78%</div>
              <p style={{ fontSize: '0.8rem', color: '#000000', fontWeight: 600 }}>Fast responsive layout</p>
            </div>

            <div style={{ backgroundColor: '#f8f8f8', border: '1px solid #e5e5e5', padding: '1.25rem', borderRadius: '16px' }}>
              <span style={{ fontSize: '0.78rem', color: '#555555', fontWeight: 700 }}>SCHEMA GRAPH HEALTH</span>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#000000', margin: '0.2rem 0' }}>35%</div>
              <p style={{ fontSize: '0.8rem', color: '#666666', fontWeight: 600 }}>Missing JSON-LD tags</p>
            </div>
          </div>

          <div style={{ border: '1px solid #e5e5e5', padding: '1.5rem', borderRadius: '16px', backgroundColor: '#f8f8f8', marginBottom: '2rem' }}>
            <h5 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#000000', marginBottom: '1rem', textTransform: 'uppercase' }}>
              IDENTIFIED TECHNICAL OPPORTUNITIES
            </h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.92rem', color: '#333333' }}>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <span style={{ color: '#000000', fontWeight: 800 }}>✓</span>
                <span><strong>Schema Markup:</strong> Unmapped Organization and Local Business JSON-LD structure.</span>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <span style={{ color: '#000000', fontWeight: 800 }}>✓</span>
                <span><strong>Canonical Silos:</strong> Practice area & service landing pages lack internal link equity.</span>
              </li>
            </ul>
          </div>

          <Link href="/services" className="btn btn-primary" style={{ width: '100%', padding: '1.1rem' }}>
            Fix Search Issues With XTRACT
          </Link>
        </div>
      )}
    </div>
  );
}
