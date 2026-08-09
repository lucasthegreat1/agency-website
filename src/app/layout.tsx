import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SEO | Enterprise Search & Generative AI Visibility Agency',
  description: 'Specialist UK SEO agency helping brands rank #1 on Google and convert search queries into instructed clients and organic sales.',
  keywords: [
    'SEO Agency',
    'UK SEO',
    'Law Firm SEO',
    'Private Healthcare SEO',
    'Home Improvement SEO',
    'Industrial B2B SEO',
    'Private Education SEO',
    'Shopify SEO',
  ],
  authors: [{ name: 'SEO AI Team' }],
  openGraph: {
    title: 'SEO | Enterprise Search & Generative AI Visibility Agency',
    description: 'Specialist UK SEO agency helping brands rank #1 on Google and convert search queries into instructed clients and organic sales.',
    url: 'https://seo.ai',
    siteName: 'SEO Agency',
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
    name: 'SEO Agency',
    description: 'Enterprise Search Engine Optimization and Generative AI Search Visibility Agency.',
    url: 'https://seo.ai',
    areaServed: 'Worldwide',
    knowsAbout: [
      'Search Engine Optimization',
      'Local SEO',
      'Law Firm SEO',
      'Healthcare SEO',
      'Shopify SEO',
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
