'use client';

import React from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#000000', color: '#ffffff', paddingTop: '5rem', paddingBottom: '4rem', borderTop: '1px solid #111111' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Column 1 */}
          <div style={{ gridColumn: 'span 2' }}>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '1.2rem' }}>
              <Logo color="#ffffff" height={36} />
            </Link>
            <p style={{ color: '#888888', fontSize: '0.98rem', lineHeight: 1.65, maxWidth: '360px', marginBottom: '1.5rem' }}>
              Specialist search & AI visibility agency helping UK brands convert organic searches into high-value clients and revenue.
            </p>
            <div style={{ fontSize: '0.85rem', color: '#666666', fontWeight: 700, letterSpacing: '0.05em' }}>
              LONDON • SAN FRANCISCO • MANCHESTER
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.95rem', color: '#aaaaaa' }}>
              <li><Link href="/" style={{ color: '#aaaaaa' }}>Home</Link></li>
              <li><Link href="/services" style={{ color: '#aaaaaa' }}>Services</Link></li>
              <li><Link href="/industries" style={{ color: '#aaaaaa' }}>Industries Overview</Link></li>
              <li><Link href="/resources" style={{ color: '#aaaaaa' }}>Resources</Link></li>
              <li><Link href="/about" style={{ color: '#aaaaaa' }}>About Us</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
              UK Industry Pages
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.95rem', color: '#aaaaaa' }}>
              <li><Link href="/seo-for-law-firms" style={{ color: '#aaaaaa' }}>UK Law Firms</Link></li>
              <li><Link href="/seo-for-private-healthcare" style={{ color: '#aaaaaa' }}>Private Healthcare</Link></li>
              <li><Link href="/seo-for-home-improvement" style={{ color: '#aaaaaa' }}>Home Improvement</Link></li>
              <li><Link href="/seo-for-industrial-b2b" style={{ color: '#aaaaaa' }}>Industrial B2B</Link></li>
              <li><Link href="/seo-for-private-schools-education" style={{ color: '#aaaaaa' }}>Private Education</Link></li>
              <li><Link href="/seo-for-shopify-stores" style={{ color: '#aaaaaa' }}>Shopify Stores</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid #111111',
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: '#666666',
          }}
        >
          <div>© {new Date().getFullYear()} XTRACT AI AGENCY INC. ALL RIGHTS RESERVED.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Regulatory Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
