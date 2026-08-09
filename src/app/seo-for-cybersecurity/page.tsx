import { Metadata } from 'next';
import IndustryPageTemplate, { UKIndustrySpec } from '@/components/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'Cybersecurity SEO Agency | Grow Organic B2B Leads | UK',
  description: 'SEO for cybersecurity companies that want more qualified leads, enterprise visibility, and stronger authority in competitive search results.',
  openGraph: {
    title: 'Cybersecurity SEO Agency | Grow Organic B2B Leads | UK',
    description: 'SEO for cybersecurity companies that want more qualified leads, enterprise visibility, and stronger authority in competitive search results.',
    type: 'website',
  },
};

const spec: UKIndustrySpec = {
  tag: 'CYBERSECURITY SEO UK',
  h1: 'SEO for cybersecurity companies that turns technical search into enterprise leads',
  metaTitle: 'Cybersecurity SEO Agency | Grow Organic B2B Leads | UK',
  metaDescription: 'SEO for cybersecurity companies that want more qualified leads, enterprise visibility, and stronger authority in competitive search results.',
  schemaType: 'Organization',
  metaNotesNotice: 'Technical accuracy & credibility focus. Copy targets CISOs, IT Directors, and compliance officers searching for MSSP providers, threat mitigation, and regulatory frameworks.',
  h2Outline: {
    section1Title: 'Why generic IT SEO fails enterprise cybersecurity firms',
    section1Content: 'Cybersecurity decision-makers do not respond to generic marketing fluff. CISOs and IT Directors conduct deep technical research around specific compliance mandates, CVE vulnerabilities, and Zero-Trust frameworks.',
    section2Title: 'Ranking for high-intent threat & compliance searches',
    section2Content: 'We structure expert threat intelligence hubs, NIS2 / ISO27001 compliance landing pages, and MSSP capability matrices that capture enterprise decision-makers during active procurement evaluation.',
    caseStudyTitle: 'Case study: Managed Detection & Response (MDR) Provider Results',
    caseStudyResult: '+380% Qualified Enterprise Demo Requests',
    caseStudyContent: 'By establishing authoritative compliance knowledge silos and Organization JSON-LD schema, a UK cybersecurity firm expanded enterprise pipeline across London and financial sectors.',
    retainerTitle: "What's included in your retainer",
    retainerItems: [
      'Technical Vulnerability & Compliance Content SEO',
      'Enterprise MSSP & MDR Service Page Structuring',
      'Structured for AI search visibility (ChatGPT, Gemini, AI Overviews)',
      'Organization & Security Specialist Schema Markup',
      'CISO Demo Request Conversion Optimisation',
      'CVE Research & Threat Intelligence Authority Clusters',
      'Monthly Enterprise Lead & Demo Attribution',
    ],
  },
  aiSearchSection: {
    h2: 'Built for how people search now — including AI',
    content: 'IT decision-makers are increasingly asking AI tools to compare MSSPs or explain compliance requirements like NIS2 before contacting a provider. We structure your content so it can be accurately cited when these questions come up — positioning you as a credible, well-informed source rather than a generic listing.',
  },
  faqs: [
    {
      q: 'Do you help us get cited when people ask AI tools about cybersecurity compliance or providers?',
      a: "Yes — we write your compliance and service content so it's accurate, well-sourced, and structured for AI extraction. Given how technical this space is, we're careful that everything published is factually correct, since credibility here really matters to your buyers.",
    },
    {
      q: 'How do you target CISOs and IT decision-makers who ignore standard ads?',
      a: 'We build deep, technically rigorous threat intelligence hubs and regulatory compliance guides that rank organically when security executives actively research solutions.',
    },
    {
      q: 'Can SEO shorten enterprise B2B sales cycles for security software?',
      a: 'Yes. By providing clear technical documentation, compliance mapping, and transparent service scope directly on search landing pages, buyers qualify themselves faster.',
    },
  ],
};

export default function CybersecuritySeoPage() {
  return <IndustryPageTemplate spec={spec} />;
}
