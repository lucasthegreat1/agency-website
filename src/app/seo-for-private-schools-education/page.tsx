import { Metadata } from 'next';
import IndustryPageTemplate, { UKIndustrySpec } from '@/components/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'SEO for Private Schools & Education Providers | UK',
  description: 'Get in front of parents researching schools and tutors months before enrolment. SEO for UK private education. Free audit.',
  openGraph: {
    title: 'SEO for Private Schools & Education Providers | UK',
    description: 'Get in front of parents researching schools and tutors months before enrolment. SEO for UK private education. Free audit.',
    type: 'website',
  },
};

const spec: UKIndustrySpec = {
  tag: 'PRIVATE EDUCATION SEO UK',
  h1: 'SEO for private schools and education providers that builds enrolment pipeline early',
  metaTitle: 'SEO for Private Schools & Education Providers | UK',
  metaDescription: 'Get in front of parents researching schools and tutors months before enrolment. SEO for UK private education. Free audit.',
  schemaType: 'EducationalOrganization',
  metaNotesNotice: 'Annual enrolment cycle runway alignment. Focus on long-lead parent research content, open day landing pages, regional comparison guides, and curriculum authority.',
  h2Outline: {
    section1Title: 'Why enrolment SEO needs a longer runway than most agencies plan for',
    section1Content: 'Parents researching independent schools, prep schools, or selective tutoring services begin their decision-making process 12 to 18 months before registration deadlines. Campaigns must engage parents early in their research journey long before open day events.',
    section2Title: 'Ranking through the parent research journey (open days, comparisons, reviews)',
    section2Content: 'We structure strategic content hubs targeting parent queries around curriculum choice (IB vs A-Levels), ISI inspection report breakdowns, regional school comparison searches, and key entry assessment preparation.',
    caseStudyTitle: 'Case study: UK Independent Prep & Senior School Results',
    caseStudyResult: '+180% Increase in Open Day Registrations',
    caseStudyContent: 'By establishing regional parent research silos and EducationalOrganization JSON-LD schema, an independent UK school group filled its prospective open day events 6 months ahead of registration deadlines.',
    retainerTitle: "What's included in your retainer",
    retainerItems: [
      'Open Day & Campus Visit Landing Page SEO',
      'Parent Research Journey Content Hubs',
      'Regional School Comparison & Guide SEO',
      'EducationalOrganization JSON-LD Schema',
      'ISI Inspection & Curriculum Authority Optimization',
      'Monthly Open Day & Prospectus Enquiries Attribution',
    ],
  },
  faqs: [
    {
      q: 'When should an independent school begin its enrolment SEO campaign?',
      a: 'Because parent buying decisions follow 12-month annual academic cycles, starting SEO 6 to 9 months prior to open day seasons ensures peak rankings when parent search volume spikes.',
    },
    {
      q: 'How do you target parents searching for independent schools in specific regions?',
      a: 'We create localized county and town catchment area pages, catchment guide content, and optimized Google Business Profiles for each campus site.',
    },
    {
      q: 'Can SEO support both day schools and international boarding enquiries?',
      a: 'Yes. We build multi-region campaign structures that target local UK parents for day school entry while optimizing international landing pages for overseas family placement.',
    },
  ],
};

export default function PrivateEducationSeoPage() {
  return <IndustryPageTemplate spec={spec} />;
}
