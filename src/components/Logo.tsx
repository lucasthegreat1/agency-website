'use client';

import React from 'react';

export default function Logo({ color = '#000000', height = 32 }: { color?: string; height?: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', height: `${height}px` }}>
      {/* Exact Vector Emblem from User's Brand Logo */}
      <svg
        width={height * 0.9}
        height={height * 0.9}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', flexShrink: 0 }}
      >
        {/* Main curved shape */}
        <path
          d="M 10 10 L 90 10 C 90 55 55 90 10 90 L 10 10 Z"
          fill={color}
        />
        {/* Secondary small quarter-circle corner shape */}
        <path
          d="M 70 100 C 70 83.43 83.43 70 100 70 L 100 100 Z"
          fill={color}
        />
      </svg>

      {/* Wordmark: Xtract */}
      <span
        style={{
          fontSize: `${height * 0.78}px`,
          fontWeight: 800,
          color: color,
          letterSpacing: '-0.03em',
          fontFamily: 'var(--font-sans)',
          lineHeight: 1,
        }}
      >
        Xtract
      </span>
    </div>
  );
}
