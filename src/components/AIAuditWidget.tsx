'use client';

import React, { useState, useEffect } from 'react';
import { Search, Send, CheckCircle } from '@/components/Icons';
import confetti from 'canvas-confetti';

export default function AIAuditWidget() {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brand, setBrand] = useState('');
  const [industry, setIndustry] = useState('UK Law Firms');
  const [requestType, setRequestType] = useState('Both Audit & Meeting');
  const [notes, setNotes] = useState('');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.get('submitted') === 'true') {
        setSubmitted(true);
      }
    }
  }, []);

  const mailtoHref = `mailto:info.xtractagency@gmail.com?subject=${encodeURIComponent(
    `SEO Audit Request: ${name || 'New Client'} (${brand || url || 'Website'})`
  )}&body=${encodeURIComponent(
    `NEW INTAKE REQUEST DETAILS:\n-----------------------------\nWebsite URL: ${url}\nFull Name: ${name}\nWork Email: ${email}\nCompany/Brand: ${brand || 'N/A'}\nIndustry Sector: ${industry}\nRequest Type: ${requestType}\nAdditional Notes: ${notes || 'None'}`
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send background API request to Resend email service
      await fetch('/api/audit-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url,
          name,
          email,
          brand,
          industry,
          requestType,
          notes,
        }),
      });
    } catch (err) {
      console.error('Submission API error:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#ffffff', '#aaaaaa', '#777777'],
        });
      } catch (e) {
        // ignore
      }
    }
  };

  return (
    <div
      id="audit"
      style={{
        backgroundColor: '#111111',
        border: '1px solid #222222',
        borderRadius: '24px',
        padding: 'clamp(1.75rem, 4vw, 3.5rem)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
        color: '#ffffff',
      }}
    >
      {!submitted ? (
        <div>
          <div className="soft-pill-tag" style={{ marginBottom: '1.2rem', backgroundColor: '#181818', borderColor: '#333333', color: '#ffffff' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffffff' }} />
            Free Audit & Strategy Meeting Request
          </div>

          <h3 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.8rem' }}>
            Request a Free Website Audit or Meeting
          </h3>
          <p style={{ color: '#aaaaaa', fontSize: '0.98rem', marginBottom: '2.2rem', lineHeight: 1.6, maxWidth: '680px' }}>
            Enter your domain and details below. Submitting will send your request straight to <strong>info.xtractagency@gmail.com</strong>.
          </p>

          <form
            onSubmit={handleSubmit}
            className="audit-form-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}
          >
            {/* Website URL */}
            <div style={{ gridColumn: 'span 2' }} className="full-width-col">
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
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
                    padding: '0.95rem 1rem 0.95rem 2.6rem',
                    border: '1.5px solid #333333',
                    borderRadius: '12px',
                    fontSize: '0.95rem',
                    outline: 'none',
                    backgroundColor: '#181818',
                    color: '#ffffff',
                    fontFamily: 'var(--font-sans)',
                  }}
                />
                <Search size={18} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: '#888888' }} />
              </div>
            </div>

            {/* Full Name */}
            <div className="full-width-col">
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                FULL NAME *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Sarah Jenkins"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.95rem 1rem',
                  border: '1.5px solid #333333',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  outline: 'none',
                  backgroundColor: '#181818',
                  color: '#ffffff',
                }}
              />
            </div>

            {/* Work Email */}
            <div className="full-width-col">
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                WORK EMAIL *
              </label>
              <input
                type="email"
                required
                placeholder="e.g. sarah@company.co.uk"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.95rem 1rem',
                  border: '1.5px solid #333333',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  outline: 'none',
                  backgroundColor: '#181818',
                  color: '#ffffff',
                }}
              />
            </div>

            {/* Company / Brand Name */}
            <div className="full-width-col">
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                COMPANY / BRAND NAME
              </label>
              <input
                type="text"
                placeholder="e.g. Jenkins Legal Ltd"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.95rem 1rem',
                  border: '1.5px solid #333333',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  outline: 'none',
                  backgroundColor: '#181818',
                  color: '#ffffff',
                }}
              />
            </div>

            {/* Industry Sector */}
            <div className="full-width-col">
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                INDUSTRY SECTOR
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.95rem 1rem',
                  border: '1.5px solid #333333',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  outline: 'none',
                  backgroundColor: '#181818',
                  color: '#ffffff',
                }}
              >
                <option value="UK Law Firms">UK Law Firms</option>
                <option value="Private Healthcare">Private Healthcare</option>
                <option value="Home Improvement">Home Improvement</option>
                <option value="Industrial B2B">Industrial & B2B Manufacturing</option>
                <option value="Private Education">Private Education</option>
                <option value="Shopify Stores">Shopify & E-Commerce</option>
                <option value="Cybersecurity">Cybersecurity & IT</option>
              </select>
            </div>

            {/* Request Type */}
            <div style={{ gridColumn: 'span 2' }} className="full-width-col">
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                WHAT WOULD YOU LIKE TO REQUEST?
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.8rem' }}>
                {[
                  'Both Audit & Meeting',
                  'Free SEO & Website Audit',
                  '15-Min Strategy Meeting',
                ].map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => setRequestType(type)}
                    style={{
                      padding: '0.8rem 1rem',
                      borderRadius: '12px',
                      border: requestType === type ? '2px solid #ffffff' : '1px solid #333333',
                      backgroundColor: requestType === type ? '#ffffff' : '#181818',
                      color: requestType === type ? '#000000' : '#ffffff',
                      fontWeight: 800,
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Notes */}
            <div style={{ gridColumn: 'span 2' }} className="full-width-col">
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                ADDITIONAL NOTES / SPECIFIC GOALS (OPTIONAL)
              </label>
              <textarea
                rows={3}
                placeholder="Tell us about your main competitors or search targets..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.95rem 1rem',
                  border: '1.5px solid #333333',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  outline: 'none',
                  backgroundColor: '#181818',
                  color: '#ffffff',
                  fontFamily: 'var(--font-sans)',
                  resize: 'vertical',
                }}
              />
            </div>

            {/* Submit Button */}
            <div style={{ gridColumn: 'span 2', marginTop: '0.8rem' }} className="full-width-col">
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
                style={{ width: '100%', padding: '1.1rem', fontSize: '1rem', opacity: loading ? 0.7 : 1 }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  {loading ? 'Submitting Request...' : 'Send Request to info.xtractagency@gmail.com'} <Send size={18} />
                </span>
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* Confirmation State */
        <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              margin: '0 auto 1.5rem auto',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              color: '#000000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CheckCircle size={32} />
          </div>

          <h4 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.8rem' }}>
            Intake Request Submitted!
          </h4>
          <p style={{ color: '#aaaaaa', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '580px', margin: '0 auto 2rem auto' }}>
            Thank you! Your intake request has been sent directly to <strong>info.xtractagency@gmail.com</strong>.
          </p>

          <div style={{ backgroundColor: '#181818', border: '1px solid #222222', borderRadius: '16px', padding: '1.5rem', maxWidth: '520px', margin: '0 auto 2rem auto', textAlign: 'left' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#aaaaaa', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
              INTAKE SUMMARY
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.92rem', color: '#ffffff' }}>
              <div><strong>Target Domain:</strong> {url}</div>
              <div><strong>Full Name:</strong> {name}</div>
              <div><strong>Contact Email:</strong> {email}</div>
              <div><strong>Company:</strong> {brand || 'N/A'}</div>
              <div><strong>Industry:</strong> {industry}</div>
              <div><strong>Request Type:</strong> {requestType}</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={mailtoHref}
              className="btn btn-outline"
              style={{ padding: '0.9rem 2rem', fontSize: '0.95rem' }}
            >
              ✉ Send Optional Backup Email
            </a>
            <button onClick={() => setSubmitted(false)} className="btn btn-primary" style={{ padding: '0.9rem 1.8rem', fontSize: '0.95rem' }}>
              Submit Another Request
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
