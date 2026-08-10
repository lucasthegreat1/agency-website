import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://tryxtract.co.uk'),
  title: {
    default: 'XTRACT | UK Search & AI Visibility Agency',
    template: '%s | XTRACT AI Agency',
  },
  description:
    'Specialist UK search & AI visibility agency engineered for law firms, healthcare, home improvement, industrial B2B, private education, and Shopify e-commerce brands.',
  keywords: [
    'SEO Agency UK',
    'AI Search Optimization',
    'Law Firm SEO',
    'Private Healthcare SEO',
    'Home Improvement SEO',
    'Industrial B2B SEO',
    'Private Education SEO',
    'Shopify E-Commerce SEO',
    'Generative Engine Optimization',
    'Search Engine Optimization London',
  ],
  authors: [{ name: 'XTRACT Agency' }],
  creator: 'XTRACT AI Agency',
  publisher: 'XTRACT AI Agency',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://tryxtract.co.uk',
    siteName: 'XTRACT AI Agency',
    title: 'XTRACT | Specialist UK Search & AI Visibility Agency',
    description:
      'Specialist UK search & AI visibility agency engineered for law firms, healthcare, home improvement, industrial B2B, private education, and Shopify e-commerce brands.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XTRACT | Specialist UK Search & AI Visibility Agency',
    description:
      'Specialist UK search & AI visibility agency engineered for law firms, healthcare, home improvement, industrial B2B, private education, and Shopify e-commerce brands.',
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
    name: 'XTRACT AI Agency',
    description: 'Enterprise Search Engine Optimization and Generative AI Search Visibility Agency.',
    url: 'https://tryxtract.co.uk',
    email: 'info.xtractagency@gmail.com',
    areaServed: 'Worldwide',
    knowsAbout: [
      'Search Engine Optimization',
      'Generative Engine Optimization',
      'AI Search Visibility',
      'Legal SEO',
      'Healthcare SEO',
      'Shopify E-Commerce SEO',
    ],
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
