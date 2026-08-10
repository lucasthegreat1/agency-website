'use client';

import React, { useState, useEffect } from 'react';
import { Search, Send, CheckCircle } from '@/components/Icons';

export default function AIAuditWidget() {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brand, setBrand] = useState('');
  const [industry, setIndustry] = useState('UK Law Firms');
  const [requestType, setRequestType] = useState('Both Audit & Meeting');
  const [notes, setNotes] = useState('');

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
    `Intake Request: ${name || 'New Client'} (${brand || url || 'Website'})`
  )}&body=${encodeURIComponent(
    `Website URL: ${url}\nFull Name: ${name}\nWork Email: ${email}\nCompany/Brand: ${brand || 'N/A'}\nIndustry: ${industry}\nRequest Type: ${requestType}\nNotes: ${notes || 'None'}`
  )}`;

  return (
    <div
      id="audit"
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e5e5e5',
        borderRadius: '24px',
        padding: 'clamp(1.75rem, 4vw, 3.5rem)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
        color: '#000000',
      }}
    >
      {!submitted ? (
        <div>
          <div className="soft-pill-tag" style={{ marginBottom: '1.2rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#000000' }} />
            Free Audit & Strategy Meeting Request
          </div>

          <h3 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: '#000000', letterSpacing: '-0.02em', marginBottom: '0.8rem' }}>
            Request a Free Website Audit or Meeting
          </h3>
          <p style={{ color: '#555555', fontSize: '0.98rem', marginBottom: '2.2rem', lineHeight: 1.6, maxWidth: '680px' }}>
            Enter your domain and details below. Our search specialists will review your website performance, identify ranking roadblocks, and email your audit directly to your inbox.
          </p>

          <form
            action="https://formsubmit.co/info.xtractagency@gmail.com"
            method="POST"
            className="audit-form-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}
          >
            {/* FormSubmit Configuration Settings */}
            <input type="hidden" name="_subject" value="New SEO Audit Request from tryxtract.co.uk" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://tryxtract.co.uk/?submitted=true#audit" />
            <input type="hidden" name="Request Type" value={requestType} />

            {/* Website URL */}
            <div style={{ gridColumn: 'span 2' }} className="full-width-col">
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#000000', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                WEBSITE URL *
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  name="Website URL"
                  required
                  placeholder="e.g. yourcompany.co.uk"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.95rem 1rem 0.95rem 2.6rem',
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

            {/* Full Name */}
            <div className="full-width-col">
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#000000', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                FULL NAME *
              </label>
              <input
                type="text"
                name="Full Name"
                required
                placeholder="e.g. Sarah Jenkins"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.95rem 1rem',
                  border: '1.5px solid #e5e5e5',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  outline: 'none',
                  backgroundColor: '#f8f8f8',
                  color: '#000000',
                }}
              />
            </div>

            {/* Work Email */}
            <div className="full-width-col">
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#000000', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                WORK EMAIL *
              </label>
              <input
                type="email"
                name="Email Address"
                required
                placeholder="e.g. sarah@company.co.uk"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.95rem 1rem',
                  border: '1.5px solid #e5e5e5',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  outline: 'none',
                  backgroundColor: '#f8f8f8',
                  color: '#000000',
                }}
              />
            </div>

            {/* Company / Brand Name */}
            <div className="full-width-col">
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#000000', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                COMPANY / BRAND NAME
              </label>
              <input
                type="text"
                name="Company Name"
                placeholder="e.g. Jenkins Legal Ltd"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.95rem 1rem',
                  border: '1.5px solid #e5e5e5',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  outline: 'none',
                  backgroundColor: '#f8f8f8',
                  color: '#000000',
                }}
              />
            </div>

            {/* Industry Sector */}
            <div className="full-width-col">
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#000000', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                INDUSTRY SECTOR
              </label>
              <select
                name="Industry Sector"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.95rem 1rem',
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
                <option value="Industrial B2B">Industrial & B2B Manufacturing</option>
                <option value="Private Education">Private Education</option>
                <option value="Shopify Stores">Shopify & E-Commerce</option>
                <option value="Cybersecurity">Cybersecurity & IT</option>
              </select>
            </div>

            {/* Request Type */}
            <div style={{ gridColumn: 'span 2' }} className="full-width-col">
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#000000', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
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
                      border: requestType === type ? '2px solid #000000' : '1px solid #e5e5e5',
                      backgroundColor: requestType === type ? '#000000' : '#f8f8f8',
                      color: requestType === type ? '#ffffff' : '#000000',
                      fontWeight: 700,
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
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#000000', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                ADDITIONAL NOTES / SPECIFIC GOALS (OPTIONAL)
              </label>
              <textarea
                name="Additional Notes"
                rows={3}
                placeholder="Tell us about your main competitors or search targets..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.95rem 1rem',
                  border: '1.5px solid #e5e5e5',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  outline: 'none',
                  backgroundColor: '#f8f8f8',
                  color: '#000000',
                  fontFamily: 'var(--font-sans)',
                  resize: 'vertical',
                }}
              />
            </div>

            {/* Submit Button */}
            <div style={{ gridColumn: 'span 2', marginTop: '0.8rem' }} className="full-width-col">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '1.1rem', fontSize: '1rem' }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  Submit Request to info.xtractagency@gmail.com <Send size={18} />
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
              backgroundColor: '#000000',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CheckCircle size={32} />
          </div>

          <h4 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#000000', marginBottom: '0.8rem' }}>
            Intake Request Submitted!
          </h4>
          <p style={{ color: '#555555', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '580px', margin: '0 auto 2rem auto' }}>
            Thank you! Your intake request has been submitted directly to <strong>info.xtractagency@gmail.com</strong>.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={mailtoHref}
              className="btn btn-primary"
              style={{ padding: '0.8rem 1.6rem', fontSize: '0.9rem' }}
            >
              ✉ Send Direct Email Backup
            </a>
            <button onClick={() => setSubmitted(false)} className="btn btn-outline" style={{ padding: '0.8rem 1.6rem', fontSize: '0.9rem' }}>
              Submit Another Request
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
