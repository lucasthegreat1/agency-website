import { Metadata } from 'next';
import IndustryPageTemplate, { UKIndustrySpec } from '@/components/IndustryPageTemplate';

export const metadata: Metadata = {
  title: "SEO for Shopify Stores UK | Fix What's Blocking Your Rankings",
  description: 'Shopify hides SEO problems most store owners never see. We fix the technical issues costing you organic traffic. Free Shopify SEO audit.',
  openGraph: {
    title: "SEO for Shopify Stores UK | Fix What's Blocking Your Rankings",
    description: 'Shopify hides SEO problems most store owners never see. We fix the technical issues costing you organic traffic. Free Shopify SEO audit.',
    type: 'website',
  },
};

const spec: UKIndustrySpec = {
  tag: 'UK SHOPIFY SEO SPECIALIST',
  h1: "SEO for Shopify stores that fixes what's actually holding your rankings back",
  metaTitle: "SEO for Shopify Stores UK | Fix What's Blocking Your Rankings",
  metaDescription: 'Shopify hides SEO problems most store owners never see. We fix the technical issues costing you organic traffic. Free Shopify SEO audit.',
  schemaType: 'OnlineStore',
  metaNotesNotice: "Shopify-specific technical audit framework. Focuses on resolving hidden liquid architecture constraints, vendor tag duplicate URLs, and Shopify Plus multi-currency indexing.",
  h2Outline: {
    section1Title: 'Why a "well-built" Shopify store can still be invisible on Google',
    section1Content: 'Shopify is incredible for conversion and design, but out of the box, it forces rigid URL structures (/collections/ and /products/) and generates duplicate collection tag pages. Many beautifully designed Shopify stores stall on page 2 because search engines penalize hidden technical architecture flaws.',
    section2Title: 'The Shopify-specific issues we check first (not generic ecommerce SEO)',
    section2Content: 'We audit Shopify liquid theme code bloat, fix duplicate /collections/vendor-tag URL parameter indexing, enforce clean canonical hierarchy, and inject automated Product JSON-LD schema across thousands of SKUs.',
    caseStudyTitle: 'Case study: UK High-Volume Shopify Plus Retailer Results',
    caseStudyResult: '+520% Non-Branded Organic Sales Growth',
    caseStudyContent: 'By restructuring Shopify liquid theme collection handles and resolving canonical URL fragmentation, we helped an established UK DTC brand double its organic revenue without increasing paid ad spend.',
    retainerTitle: "What's included in your retainer",
    retainerItems: [
      'Shopify Liquid Theme Code & Speed Audit',
      'Collection Tag URL Duplicate & Canonical Fixes',
      'Structured for AI search visibility (ChatGPT, Gemini, AI Overviews)',
      'Automated SKU Product JSON-LD Schema Pipeline',
      'Shopify Plus Multi-Currency & Hreflang SEO',
      'Faceted Navigation Parameter Index Control',
      'Monthly Non-Brand Sales & Revenue Attribution',
    ],
  },
  aiSearchSection: {
    h2: 'Built for how people search now — including AI',
    content: 'Shoppers increasingly ask AI tools things like "best coffee machine on Shopify" or "where can I buy artisan skincare in the UK" instead of browsing Google results. We fix the technical issues that block AI crawlers from reading your product and collection pages properly, so your store can actually be considered for these AI-driven recommendations.',
  },
  faqs: [
    {
      q: 'Can AI shopping tools actually see my Shopify store properly?',
      a: 'Often not, by default — duplicate collection pages, app bloat, and JavaScript-heavy themes can block AI crawlers from reading your store cleanly. Part of our audit checks specifically for this, alongside standard SEO issues.',
    },
    {
      q: 'Why does Shopify create duplicate URLs for products?',
      a: 'Shopify defaults to linking products through collection handles (e.g., /collections/mens/products/shirt) as well as root product URLs (/products/shirt). We fix theme code to enforce primary canonical paths.',
    },
    {
      q: 'How do you fix Shopify app script speed slowdowns?',
      a: 'We audit your app stack, eliminate orphaned liquid code snippets left by uninstalled apps, and implement delayed script loading for non-critical third-party JS.',
    },
    {
      q: 'Can SEO help our Shopify store outrank Amazon and retail aggregators?',
      a: 'Yes. By pairing clean Shopify technical architecture with structured Product/Offer JSON-LD schemas and rich collection buyer guide content, direct DTC brands consistently capture top search spots.',
    },
  ],
};

export default function ShopifyStoresSeoPage() {
  return <IndustryPageTemplate spec={spec} />;
}
