import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'XTRACT | Generative Engine Optimization (GEO) & Enterprise SEO Agency',
  description: 'XTRACT is the premier SEO & AI Visibility agency helping high-growth brands rank #1 on Google and dominate AI Search Engine recommendations in ChatGPT, Perplexity, and Gemini.',
  keywords: [
    'XTRACT Agency',
    'GEO Agency',
    'Generative Engine Optimization',
    'AI SEO Agency',
    'ChatGPT Visibility',
    'Perplexity SEO',
    'Enterprise SEO Services',
    'Programmatic SEO',
    'Knowledge Graph SEO',
  ],
  authors: [{ name: 'XTRACT AI Team' }],
  openGraph: {
    title: 'XTRACT | Enterprise SEO & AI Search Visibility Agency',
    description: 'Dominate Google rankings and AI recommendations with custom GEO & Enterprise Search strategies.',
    url: 'https://xtract-ai-seo.com',
    siteName: 'XTRACT AI SEO Agency',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'XTRACT AI SEO Agency',
    description: 'Generative Engine Optimization (GEO) and Enterprise Search Engine Optimization Agency.',
    url: 'https://xtract-ai-seo.com',
    logo: 'https://xtract-ai-seo.com/logo.png',
    areaServed: 'Worldwide',
    knowsAbout: [
      'Generative Engine Optimization',
      'Search Engine Optimization',
      'ChatGPT Citation Management',
      'Schema.org Knowledge Graph',
    ],
    priceRange: '$$$$',
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
