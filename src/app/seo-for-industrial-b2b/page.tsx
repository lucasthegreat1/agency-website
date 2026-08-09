import { Metadata } from 'next';
import IndustryPageTemplate, { UKIndustrySpec } from '@/components/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'SEO for Industrial & Manufacturing B2B Companies',
  description: 'Get found by procurement teams and engineers searching for your exact spec. SEO for UK industrial suppliers. Free audit.',
  openGraph: {
    title: 'SEO for Industrial & Manufacturing B2B Companies',
    description: 'Get found by procurement teams and engineers searching for your exact spec. SEO for UK industrial suppliers. Free audit.',
    type: 'website',
  },
};

const spec: UKIndustrySpec = {
  tag: 'B2B INDUSTRIAL & MANUFACTURING SEO UK',
  h1: 'SEO for industrial and manufacturing businesses that reaches buyers, not browsers',
  metaTitle: 'SEO for Industrial & Manufacturing B2B Companies',
  metaDescription: 'Get found by procurement teams and engineers searching for your exact spec. SEO for UK industrial suppliers. Free audit.',
  schemaType: 'Organization',
  metaNotesNotice: 'Technical specification search alignment. Copy targets procurement managers and design engineers searching by part numbers, ISO standards, CAD specs, and technical material codes.',
  h2Outline: {
    section1Title: 'Why generic SEO agencies fail specialist industrial firms',
    section1Content: 'Generic consumer SEO agencies waste budget targeting broad consumer keywords. Industrial procurement managers and design engineers do not search for generic terms—they query specific DIN/ISO standards, material grades, tolerance specs, and part numbers.',
    section2Title: 'Ranking for spec-driven, long-tail technical searches',
    section2Content: 'We structure your digital catalog for technical spec indexing. By creating programmatic part specification pages, CAD download hubs, and technical data sheet schemas, we place your supply capabilities directly in front of active B2B buyers.',
    caseStudyTitle: 'Case study: Precision Engineering & Tooling Supplier Results',
    caseStudyResult: '+480% Technical CAD Spec Downloads & RFQs',
    caseStudyContent: 'By mapping 15,000+ technical part numbers into programmatic specification silos, we helped a UK precision engineering manufacturer secure multimillion-pound supply contracts.',
    retainerTitle: "What's included in your retainer",
    retainerItems: [
      'Technical Specification & Part Number SEO',
      'Programmatic Industrial Catalog Structuring',
      'CAD Data Sheet & Spec Sheet Schema Markup',
      'B2B Procurement RFQ Conversion Optimisation',
      'Technical ISO/DIN Standard Topical Clusters',
      'Monthly RFQ & B2B Supply Lead Attribution',
    ],
  },
  faqs: [
    {
      q: 'Why is technical spec search behavior different for B2B industrial buyers?',
      a: 'Engineers and procurement teams search by exact tolerances, ISO/BS material codes, and CAD part numbers. Generic consumer SEO fails to capture these high-value spec searches.',
    },
    {
      q: 'Can SEO generate qualified RFQs for complex custom manufacturing?',
      a: 'Yes. We structure custom capabilities pages around specific machining tolerances, material grades, and industrial applications to attract buyers requiring your exact spec.',
    },
    {
      q: 'How do you handle PDF technical data sheets and CAD files for SEO?',
      a: 'We convert raw PDF technical data into crawlable HTML spec tables with schema markup while optimizing CAD download landing pages for procurement indexing.',
    },
  ],
};

export default function IndustrialB2bSeoPage() {
  return <IndustryPageTemplate spec={spec} />;
}
