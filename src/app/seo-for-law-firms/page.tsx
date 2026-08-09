import { Metadata } from 'next';
import IndustryPageTemplate, { UKIndustrySpec } from '@/components/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'SEO for Law Firms UK | More Enquiries, Not Just Traffic',
  description: 'SEO built for solicitors — rank for the searches that turn into instructed clients, not just visits. Free audit for UK law firms.',
  openGraph: {
    title: 'SEO for Law Firms UK | More Enquiries, Not Just Traffic',
    description: 'SEO built for solicitors — rank for the searches that turn into instructed clients, not just visits. Free audit for UK law firms.',
    type: 'website',
  },
};

const spec: UKIndustrySpec = {
  tag: 'UK LAW FIRMS SEO',
  h1: 'SEO for UK law firms that turns searches into instructed clients',
  metaTitle: 'SEO for Law Firms UK | More Enquiries, Not Just Traffic',
  metaDescription: 'SEO built for solicitors — rank for the searches that turn into instructed clients, not just visits. Free audit for UK law firms.',
  schemaType: 'LegalService',
  metaNotesNotice: 'Strict SRA advertising compliance enforced. All content focuses on search visibility, practice-area authority, and client enquiry volume without outcome guarantees.',
  h2Outline: {
    section1Title: 'Why most law firm SEO fails to convert',
    section1Content: 'Many digital agencies focus on vanity traffic from informational legal guides that never result in instructed cases. We build search campaigns tailored to solicitors that target commercial and personal legal queries where prospective clients actively seek legal representation.',
    section2Title: 'Ranking for high-intent local + practice-area searches',
    section2Content: 'Whether your firm specializes in corporate law, commercial property, dispute resolution, or family law, we optimize your Google Business Profile and local landing pages for high-value legal queries in your target UK jurisdictions.',
    caseStudyTitle: 'Case study: Commercial Litigation Practice Results',
    caseStudyResult: '+240% Increase in Qualified Solicitor Enquiries',
    caseStudyContent: 'By restructuring practice area pages and establishing authoritative LegalService schema, we enabled a mid-sized UK commercial law firm to capture high-value instructed cases across London and the South East.',
    retainerTitle: "What's included in your retainer",
    retainerItems: [
      'SRA-Compliant Legal Content Optimization',
      'Practice-Area & Local Landing Page SEO',
      'Structured for AI search visibility (ChatGPT, Gemini, AI Overviews)',
      'Google Business Profile & Local Citation Audits',
      'LegalService & FAQPage JSON-LD Schema',
      'Technical Crawl & Mobile Speed Optimization',
      'Monthly Solicitor Enquiry & Lead Attribution',
    ],
  },
  aiSearchSection: {
    h2: 'Built for how people search now — including AI',
    content: "More people ask ChatGPT or Google's AI Overview \"who's a good solicitor for commercial property\" before they ever open a search engine. We structure your content so it can be found and accurately cited by AI tools, not just ranked in traditional search — so you show up whichever way a potential client is looking.",
  },
  faqs: [
    {
      q: 'Do you also help us show up in ChatGPT and AI search results?',
      a: "Yes — this is now part of how we build your content. It's still an emerging area, so we're upfront that tracking and results here are less mature than traditional Google rankings, but it's built into everything we produce for you.",
    },
    {
      q: 'How do you ensure SEO copy complies with SRA advertising rules?',
      a: 'We strictly adhere to SRA regulatory standards by focusing exclusively on firm experience, service clarity, practice area coverage, and search visibility—avoiding any outcome guarantees or comparative superlatives.',
    },
    {
      q: 'How long does it take for a UK law firm to see increased legal enquiries?',
      a: 'Initial technical and local map pack improvements typically take 60 to 90 days, with consistent growth in client instructions building between months 4 and 6.',
    },
    {
      q: 'Do you target specific practice areas like commercial litigation or family law?',
      a: 'Yes. We construct dedicated landing page silos for each specific practice area to capture high-intent prospective clients searching for expert legal counsel in your area.',
    },
  ],
};

export default function LawFirmsSeoPage() {
  return <IndustryPageTemplate spec={spec} />;
}
