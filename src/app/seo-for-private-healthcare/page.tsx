import { Metadata } from 'next';
import IndustryPageTemplate, { UKIndustrySpec } from '@/components/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'SEO for Private Clinics, Hospitals & Healthcare Providers | UK',
  description:
    'Get found by patients searching for clinics, hospitals & specialist treatments. SEO for private healthcare providers. Book a free audit.',
  openGraph: {
    title: 'SEO for Private Clinics, Hospitals & Healthcare Providers | UK',
    description:
      'Get found by patients searching for clinics, hospitals & specialist treatments. SEO for private healthcare providers. Book a free audit.',
    type: 'website',
  },
};

const spec: UKIndustrySpec = {
  tag: 'PRIVATE HEALTHCARE SEO UK',
  h1: 'SEO for private clinics, hospitals & healthcare providers that fills your appointment book',
  metaTitle: 'SEO for Private Clinics, Hospitals & Healthcare Providers | UK',
  metaDescription:
    'Get found by patients searching for clinics, hospitals & specialist treatments. SEO for private healthcare providers. Book a free audit.',
  schemaType: 'MedicalBusiness',
  metaNotesNotice:
    'CQC advertising compliance strictly observed. Copy focuses on patient search visibility, clinic and hospital accessibility, and appointment booking enquiries without making unverified medical efficacy claims.',
  whoWeServeSection: {
    sectionLabel: '(01.5) WHO WE SERVE — PRIVATE HEALTHCARE SEO ACROSS THE SECTOR',
    title: 'Built for every type of private healthcare provider',
    body: 'We work with private hospitals, independent clinics, consultant-led practices, and specialist surgical centres across the UK. Whether patients are searching for a specific consultant, comparing private hospital groups, or looking for same-week appointment availability at a local clinic, we structure your site so search engines — and patients — find the right answer fast.',
    bullets: [
      'Private hospitals & hospital groups',
      'Independent clinics & multi-specialty practices',
      'Private doctors, consultants & specialists',
      'Dental practices & orthodontic clinics',
      'Surgical & cosmetic surgery centres',
    ],
  },
  h2Outline: {
    section1Title: "Why patients don't find you on Google (even if you're great)",
    section1Content:
      'Prospective private patients search for specific medical procedures, consultant specialisms, and treatment symptoms. Without structured treatment pages and verified medical authority schema, search engines defer to general health portals.',
    section2Title: 'Local + treatment-specific search strategy',
    section2Content:
      'We map patient search journeys for Harley Street clinics, private hospitals, dental practices, and specialist surgical centres—capturing high-intent local patients actively seeking private consultations, hospital procedures, and treatments.',
    caseStudyTitle: 'Case study: Specialist Private Cosmetic Clinic Results',
    caseStudyResult: '+310% Increase in Patient Appointment Bookings',
    caseStudyContent:
      'By restructuring clinic treatment silos and establishing MedicalBusiness JSON-LD schema, we enabled a Harley Street surgical group to capture organic patient consultation requests across London and the Home Counties.',
    retainerTitle: "What's included in your retainer",
    retainerItems: [
      'CQC-Compliant Medical Treatment Copy',
      'Local & Clinic Location SEO Optimisation',
      'Structured for AI search visibility (ChatGPT, Gemini, AI Overviews)',
      'Consultant Profile & Specialism Schema',
      'MedicalBusiness & FAQPage JSON-LD Graph',
      'Patient Consultation Conversion Optimisation',
      'Monthly Appointment Booking Attribution',
    ],
  },
  aiSearchSection: {
    h2: 'Built for how people search now — including AI',
    content:
      'Patients increasingly ask AI tools questions like "best private dermatologist near me" or "how much does knee replacement cost" before they search Google directly. We write your content so it can be accurately quoted by these tools — helping patients find and trust you earlier in their research.',
  },
  faqs: [
    {
      q: 'Will this help us show up when people ask ChatGPT for a recommendation?',
      a: "It's designed to. We structure your treatment and pricing information so AI tools can extract and cite it accurately — it's a newer channel, so we treat it as an added layer on top of your core SEO, not a replacement for it.",
    },
    {
      q: 'How do you maintain CQC compliance in healthcare SEO copy?',
      a: 'We adhere to CQC advertising principles by providing factual, patient-focused descriptions of procedures, clinic facilities, and consultant qualifications without clinical outcome claims.',
    },
    {
      q: 'Can SEO increase private patient bookings for specific treatments?',
      a: 'Yes. We build dedicated treatment pages targeting high-intent long-tail medical searches, driving patients directly into your clinic booking funnel.',
    },
    {
      q: 'How do you handle Google YMYL (Your Money Your Life) medical guidelines?',
      a: 'We implement verified clinician author profiles, PubMed citation linking, and MedicalBusiness schema to satisfy Google E-E-A-T standards.',
    },
    {
      q: 'Do you offer SEO for private hospitals?',
      a: 'Yes — we work with both independent private hospitals and larger hospital groups, structuring department and consultant pages so patients can find specific specialisms, procedures, and locations directly through search.',
    },
    {
      q: 'Can you help private doctors and consultants get found on Google?',
      a: 'Absolutely. We build consultant profile pages with structured schema so individual doctors rank for their specialism and location, not just the practice as a whole — helping patients find and trust the right consultant before they book.',
    },
    {
      q: 'Do you work with private surgeons and surgical clinics?',
      a: 'Yes, including cosmetic, orthopaedic, and specialist surgical clinics. We focus on procedure-specific search visibility while staying fully within CQC advertising guidelines.',
    },
  ],
};

export default function PrivateHealthcareSeoPage() {
  return <IndustryPageTemplate spec={spec} />;
}
