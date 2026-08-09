import { Metadata } from 'next';
import IndustryPageTemplate, { UKIndustrySpec } from '@/components/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'SEO for Private Clinics & Healthcare Providers | UK',
  description: 'Get found by patients actively searching for your treatments. SEO for private clinics, dentists & specialists. Book a free audit.',
  openGraph: {
    title: 'SEO for Private Clinics & Healthcare Providers | UK',
    description: 'Get found by patients actively searching for your treatments. SEO for private clinics, dentists & specialists. Book a free audit.',
    type: 'website',
  },
};

const spec: UKIndustrySpec = {
  tag: 'PRIVATE HEALTHCARE SEO UK',
  h1: 'SEO for private healthcare providers that fills your appointment book',
  metaTitle: 'SEO for Private Clinics & Healthcare Providers | UK',
  metaDescription: 'Get found by patients actively searching for your treatments. SEO for private clinics, dentists & specialists. Book a free audit.',
  schemaType: 'MedicalBusiness',
  metaNotesNotice: 'CQC advertising compliance strictly observed. Copy focuses on patient search visibility, clinic accessibility, and appointment booking enquiries without making unverified medical efficacy claims.',
  h2Outline: {
    section1Title: "Why patients don't find you on Google (even if you're great)",
    section1Content: 'Prospective private patients search for specific medical procedures, consultant specialisms, and treatment symptoms. Without structured treatment pages and verified medical authority schema, search engines defer to general health portals.',
    section2Title: 'Local + treatment-specific search strategy',
    section2Content: 'We map patient search journeys for Harley Street clinics, private dental practices, and specialist surgical centers—capturing high-intent local patients actively seeking private consultations and procedures.',
    caseStudyTitle: 'Case study: Specialist Private Cosmetic Clinic Results',
    caseStudyResult: '+310% Increase in Patient Appointment Bookings',
    caseStudyContent: 'By restructuring clinic treatment silos and establishing MedicalBusiness JSON-LD schema, we enabled a Harley Street surgical group to capture organic patient consultation requests across London and the Home Counties.',
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
    content: 'Patients increasingly ask AI tools questions like "best private dermatologist near me" or "how much does knee replacement cost" before they search Google directly. We write your content so it can be accurately quoted by these tools — helping patients find and trust you earlier in their research.',
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
  ],
};

export default function PrivateHealthcareSeoPage() {
  return <IndustryPageTemplate spec={spec} />;
}
