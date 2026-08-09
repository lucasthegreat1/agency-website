import { Metadata } from 'next';
import IndustryPageTemplate, { UKIndustrySpec } from '@/components/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'SEO for Roofers, Builders & Home Improvement Firms',
  description: 'Stop paying £50+ per lead on ads. Rank locally for the jobs you actually want. SEO for UK home improvement businesses — free audit.',
  openGraph: {
    title: 'SEO for Roofers, Builders & Home Improvement Firms',
    description: 'Stop paying £50+ per lead on ads. Rank locally for the jobs you actually want. SEO for UK home improvement businesses — free audit.',
    type: 'website',
  },
};

const spec: UKIndustrySpec = {
  tag: 'HOME IMPROVEMENT SEO UK',
  h1: 'SEO for home improvement companies that cuts your cost per lead',
  metaTitle: 'SEO for Roofers, Builders & Home Improvement Firms',
  metaDescription: 'Stop paying £50+ per lead on ads. Rank locally for the jobs you actually want. SEO for UK home improvement businesses — free audit.',
  schemaType: 'HomeAndConstructionBusiness',
  metaNotesNotice: 'Cost-Per-Lead (CPL) reduction focus. Direct organic search positioning built to replace £50-£120 pay-per-lead aggregators like Checkatrade, MyBuilder, and Google PPC.',
  h2Outline: {
    section1Title: 'Why "3 quotes" searches are where the real money is',
    section1Content: 'Homeowners searching for domestic extensions, re-roofing, loft conversions, or high-end kitchen installations perform extensive research before requesting quotes. We position your firm at the exact moment homeowners compare local contractors.',
    section2Title: 'Local SEO + Google Business Profile strategy',
    section2Content: 'We optimize your Google Business Map Pack rankings, geotargeted service area pages, and verified customer project portfolios so high-value homeowners call your team directly instead of shared lead portals.',
    caseStudyTitle: 'Case study: UK Roofing & Extensions Group Results',
    caseStudyResult: 'Cut Lead Acquisition Cost From £65 to £14',
    caseStudyContent: 'By establishing localized trade service hubs and HomeAndConstructionBusiness schema, a regional building contractor replaced shared pay-per-lead portals with exclusive organic enquiries.',
    retainerTitle: "What's included in your retainer",
    retainerItems: [
      'Geotargeted Service Area Landing Pages',
      'Google Maps Pack & Local GBP Optimization',
      'Cost-Per-Lead Reduction Tracking',
      'HomeAndConstructionBusiness JSON-LD Schema',
      'Completed Project Gallery & Review SEO',
      'Monthly Quote Request & Call Attribution',
    ],
  },
  faqs: [
    {
      q: 'How does SEO reduce my cost-per-lead compared to Checkatrade or Google Ads?',
      a: 'PPC and lead directories charge £50 to £120+ for every shared lead. Organic SEO builds an asset owned by your firm, producing exclusive quote enquiries at a fraction of the cost per lead.',
    },
    {
      q: 'How quickly can our trade business rank in local Google Map packs?',
      a: 'Google Business Profile audits and local citation cleanup frequently produce visible Map Pack ranking lifts within 30 to 60 days.',
    },
    {
      q: 'Can we target specific high-value jobs like extensions or full re-roofs?',
      a: 'Yes. We build targeted service pages specifically optimized for high-ticket domestic construction projects rather than low-margin repair jobs.',
    },
  ],
};

export default function HomeImprovementSeoPage() {
  return <IndustryPageTemplate spec={spec} />;
}
