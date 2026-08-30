import { Metadata } from 'next';
import IndustryPageTemplate, { UKIndustrySpec } from '@/components/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'SEO for Cladding Companies, Roofers & Home Improvement Firms',
  description:
    'Stop paying £50+ per lead on ads. SEO for cladding contractors, roofers & home improvement firms to rank locally — free audit.',
  openGraph: {
    title: 'SEO for Cladding Companies, Roofers & Home Improvement Firms',
    description:
      'Stop paying £50+ per lead on ads. SEO for cladding contractors, roofers & home improvement firms to rank locally — free audit.',
    type: 'website',
  },
};

const spec: UKIndustrySpec = {
  tag: 'HOME IMPROVEMENT & CLADDING SEO UK',
  h1: 'SEO for cladding companies, roofers & home improvement firms that cuts your cost per lead',
  metaTitle: 'SEO for Cladding Companies, Roofers & Home Improvement Firms',
  metaDescription:
    'Stop paying £50+ per lead on ads. SEO for cladding contractors, roofers & home improvement firms to rank locally — free audit.',
  schemaType: 'HomeAndConstructionBusiness',
  metaNotesNotice:
    'Cost-Per-Lead (CPL) reduction focus. Direct organic search positioning built to replace £50-£120 pay-per-lead aggregators like Checkatrade, MyBuilder, and Google PPC for cladding contractors, roofers, and specialists.',
  tradesSection: {
    title: 'Trades We Work With',
    intro:
      'We build dedicated search and AI visibility campaigns for high-ticket domestic construction and installation trades across the UK. Our campaigns target homeowners and property managers ready to request quotes for specific specialist work:',
    trades: [
      {
        name: 'Cladding Installers & Contractors',
        desc: 'Targeting high-intent searches for external wall cladding, composite cladding, uPVC weatherboarding, and commercial façade installations.',
      },
      {
        name: 'Conservatory Companies',
        desc: 'Capturing homeowners searching for new glass conservatories, sunrooms, and tiled warm roof replacements.',
      },
      {
        name: 'Roofers & Roofing Specialists',
        desc: 'Ranking for complete re-roofing, flat roof conversions, slate repair, and residential roof replacements.',
      },
      {
        name: 'Loft Conversion Specialists',
        desc: 'Dominating local search results for dormer, mansard, hip-to-gable, and VELUX attic conversions.',
      },
      {
        name: 'Extension Builders',
        desc: 'Attracting high-ticket enquiries for single and double-storey rear extensions and kitchen-diner expansions.',
      },
      {
        name: 'Kitchen Fitters',
        desc: 'Optimizing for custom kitchen design, supply, and full installation quote requests in your local coverage area.',
      },
    ],
  },
  h2Outline: {
    section1Title: 'Why "3 quotes" searches are where the real money is',
    section1Content:
      'Homeowners searching for exterior cladding, domestic extensions, re-roofing, loft conversions, or high-end kitchen installations perform extensive research before requesting quotes. We position your firm at the exact moment homeowners compare local contractors.',
    section2Title: 'Local SEO + Google Business Profile strategy',
    section2Content:
      'We optimize your Google Business Map Pack rankings, geotargeted trade service pages (cladding, roofing, loft conversions), and verified customer project portfolios so high-value homeowners call your team directly instead of shared lead portals.',
    caseStudyTitle: 'Case study: UK Roofing & Extensions Group Results',
    caseStudyResult: 'Cut Lead Acquisition Cost From £65 to £14',
    caseStudyContent:
      'By establishing localized trade service hubs and HomeAndConstructionBusiness schema, a regional building contractor replaced shared pay-per-lead portals with exclusive organic enquiries.',
    caseStudySupportingExample:
      'Supporting Proof Point (Cladding & Exterior Envelopes): Following our specialized trade hub structure, a regional cladding contractor saw non-brand organic search impressions increase by 420% for "external wall cladding installers" within 90 days, producing 18 high-value commercial and residential quote requests in their first quarter.',
    retainerTitle: "What's included in your retainer",
    retainerItems: [
      'Geotargeted Service Area Landing Pages',
      'Google Maps Pack & Local GBP Optimization',
      'Cladding, Roofing & Loft Conversion Keyword Targeting',
      'Structured for AI search visibility (ChatGPT, Gemini, AI Overviews)',
      'Cost-Per-Lead Reduction Tracking',
      'HomeAndConstructionBusiness JSON-LD Schema',
      'Completed Project Gallery & Review SEO',
      'Monthly Quote Request & Call Attribution',
    ],
  },
  aiSearchSection: {
    h2: 'Built for how people search now — including AI',
    content:
      'Homeowners are starting to ask AI tools things like "how much does external wall cladding cost" or "find me a good roofer near Manchester" instead of typing it into Google. We build your content so it\'s structured for these AI answers too — not just traditional search rankings.',
  },
  faqs: [
    {
      q: 'Do you help with AI search, not just Google?',
      a: "Yes — we build your pages so tools like ChatGPT and Google's AI Overview can pull accurate information about your services and pricing, alongside your normal SEO work.",
    },
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
    {
      q: 'Do you offer SEO for cladding companies and contractors?',
      a: 'Yes. We build targeted search campaigns for cladding contractors focusing on high-intent terms like external wall cladding, composite cladding installation, and commercial cladding services to generate direct quote enquiries.',
    },
    {
      q: 'Can you help conservatory installers rank locally on Google?',
      a: 'Yes. We optimize local Google Map packs and create dedicated landing pages for conservatory installers, tiled warm roof upgrades, and sunroom extensions so homeowners in your target coverage area find you directly.',
    },
    {
      q: 'Do you work with loft conversion specialists?',
      a: 'Yes. Loft conversions are high-ticket projects with strong search volume. We design custom SEO campaigns targeting homeowners searching for dormer, mansard, and hip-to-gable loft conversion specialists.',
    },
  ],
};

export default function HomeImprovementSeoPage() {
  return <IndustryPageTemplate spec={spec} />;
}
