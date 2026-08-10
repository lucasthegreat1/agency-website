import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from '@/components/Icons';
import AIAuditWidget from '@/components/AIAuditWidget';

export const metadata: Metadata = {
  title: 'GEO Agency for Law Firms: Improve Your Visibility Across AI Search',
  description:
    'A complete guide on Generative Engine Optimization (GEO) for law firms. Learn how GEO helps legal practices get cited in ChatGPT, Perplexity, and Google AI Overviews.',
  openGraph: {
    title: 'GEO Agency for Law Firms: Improve Your Visibility Across AI Search',
    description:
      'A complete guide on Generative Engine Optimization (GEO) for law firms. Learn how GEO helps legal practices get cited in ChatGPT, Perplexity, and Google AI Overviews.',
    type: 'article',
    url: 'https://tryxtract.co.uk/resources/geo-agency-for-law-firms',
  },
};

export default function GeoAgencyForLawFirmsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'GEO Agency for Law Firms: Improve Your Visibility Across AI Search',
        description:
          'A complete guide on Generative Engine Optimization (GEO) for law firms. Learn how GEO helps legal practices get cited in ChatGPT, Perplexity, and Google AI Overviews.',
        author: {
          '@type': 'Person',
          name: 'Luke Haracic',
          jobTitle: 'SEO & GEO Consultant',
          worksFor: {
            '@type': 'Organization',
            name: 'XTRACT AI Agency',
          },
        },
        publisher: {
          '@type': 'Organization',
          name: 'XTRACT AI Agency',
          url: 'https://tryxtract.co.uk',
        },
        mainEntityOfPage: 'https://tryxtract.co.uk/resources/geo-agency-for-law-firms',
        datePublished: '2026-08-10',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is a GEO agency?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A GEO agency helps businesses — including law firms — improve their visibility, accuracy, and citation frequency within AI-generated search answers, such as Google AI Overviews and AI chatbots, rather than focusing solely on traditional search rankings.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does GEO replace SEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. GEO builds on strong SEO fundamentals. Technical health, quality content, and backlinks remain important; GEO adds entity optimisation, structured data, and citation strategies specifically aimed at how AI systems retrieve and synthesise information.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can GEO help my law firm appear in AI-generated answers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. By strengthening entity signals, building authoritative citations, and creating content that directly answers real client questions, GEO improves the likelihood that AI platforms surface and cite a firm when relevant queries are asked.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does GEO take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Timelines vary by firm, but most see initial visibility improvements within a few months, with stronger, more consistent AI citation building over six to twelve months as entity and citation signals compound.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which AI platforms should law firms optimise for?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'At minimum, Google AI Overviews, ChatGPT, Perplexity, Claude, and Gemini, since these represent the platforms most commonly used for research-style and recommendation-style queries. Copilot is worth including for firms competing in Microsoft/Bing-heavy markets.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do you measure GEO success?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Through a combination of AI mention tracking, citation frequency, sentiment analysis, and share-of-voice against competitors — alongside more traditional indicators like organic traffic and enquiry volume where they can be tied back to AI-driven visibility.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div style={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh', paddingTop: '5rem', paddingBottom: '6rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ARTICLE HEADER */}
      <section style={{ marginBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
            <Link
              href="/resources"
              style={{ color: '#aaaaaa', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 600 }}
            >
              ← Back to Resources
            </Link>
            <span style={{ color: '#444444' }}>|</span>
            <span
              style={{
                padding: '0.3rem 0.8rem',
                backgroundColor: '#ffffff',
                color: '#000000',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 800,
              }}
            >
              LAW FIRMS & LEGAL GEO
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}
          >
            GEO Agency for Law Firms: Improve Your Visibility Across AI Search
          </h1>

          <div style={{ display: 'flex', gap: '1.5rem', color: '#aaaaaa', fontSize: '0.92rem', marginBottom: '2.5rem', fontWeight: 500 }}>
            <span>By <strong>Luke Haracic</strong> (SEO & GEO Consultant)</span>
            <span>•</span>
            <span>12 min read</span>
            <span>•</span>
            <span>Updated August 2026</span>
          </div>
        </div>
      </section>

      {/* MAIN ARTICLE BODY */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ backgroundColor: '#111111', border: '1px solid #222222', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.75, fontSize: '1.05rem', color: '#cccccc' }}>
            
            {/* INTRO PARAGRAPHS */}
            <p style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 500, lineHeight: 1.7, marginBottom: '1.8rem' }}>
              A GEO agency for law firms helps legal practices get found, cited, and recommended inside AI-generated answers — not just ranked on a traditional search results page. As more prospective clients turn to Google AI Overviews, ChatGPT, Perplexity, Claude, and Gemini to ask questions like <em>"who is the best personal injury lawyer near me"</em> or <em>"what should I do after a car accident,"</em> law firms that aren't structured, cited, and recognised as authoritative sources risk disappearing from the conversation entirely — even if they still rank well in classic blue-link search.
            </p>

            <p style={{ marginBottom: '1.8rem' }}>
              Generative Engine Optimization (GEO) is the discipline built to solve this. It's the natural evolution of SEO for a search landscape where AI systems synthesise an answer instead of simply listing ten links. For law firms, that shift matters enormously: legal decisions are high-stakes, trust-driven, and increasingly researched through conversational AI tools before a phone call is ever made.
            </p>

            <p style={{ marginBottom: '2.5rem' }}>
              This guide breaks down what GEO actually involves, why it matters specifically for law firms, and how Xtract — a dedicated <Link href="/services" style={{ color: '#ffffff', fontWeight: 800, textDecoration: 'underline' }}>SEO & GEO Services agency</Link> — builds visibility across the AI platforms your future clients are already using. For legal practices interested in tailored support, explore our <Link href="/seo-for-law-firms" style={{ color: '#ffffff', fontWeight: 800, textDecoration: 'underline' }}>SEO & GEO for UK Law Firms</Link> service area.
            </p>

            <hr style={{ border: 0, borderTop: '1px solid #222222', margin: '2.5rem 0' }} />

            {/* WHAT IS GEO */}
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
              What Is Generative Engine Optimization (GEO)?
            </h2>

            <p style={{ marginBottom: '1.5rem' }}>
              GEO is the practice of optimising a brand's online presence so that AI systems — including AI Overviews, chatbots, and answer engines — understand, trust, and cite that brand when generating responses to user queries. Where SEO is concerned with earning a position on a search results page, GEO is concerned with earning a position inside the answer itself.
            </p>

            <p style={{ marginBottom: '2.5rem' }}>
              For a full technical breakdown of mechanics and query fan-out variant generation, explore our <Link href="/services/generative-engine-optimization" style={{ color: '#ffffff', fontWeight: 800, textDecoration: 'underline' }}>Generative Engine Optimization (GEO) Technical Manual</Link>.
            </p>

            {/* SEO VS GEO */}
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
              SEO vs GEO: What's the Difference?
            </h2>

            <p style={{ marginBottom: '1.5rem' }}>
              Traditional SEO optimises for algorithms that crawl, index, and rank web pages based on keywords, backlinks, and technical signals, producing a list of links a user then has to click through. GEO optimises for large language models and retrieval systems that read, interpret, and synthesise content from multiple sources into a single generated answer — often without the user clicking anywhere at all.
            </p>

            <p style={{ marginBottom: '2.5rem' }}>
              The two disciplines share a foundation (technical health, quality content, authority signals) but diverge in what "success" looks like: a top-three ranking versus being the source an AI model actually quotes or references. See our full comparison on our <Link href="/services" style={{ color: '#ffffff', fontWeight: 800, textDecoration: 'underline' }}>Services Hub</Link>.
            </p>

            {/* HOW AI SEARCH DIFFERS */}
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
              How AI Search Differs From Traditional Search
            </h2>

            <p style={{ marginBottom: '2.5rem' }}>
              Traditional search returns a ranked list based largely on relevance and link authority. AI search tools instead retrieve information from multiple sources, cross-reference it, and generate a single synthesised response — often summarising several firms' content into one answer, sometimes naming specific firms as recommendations. This means visibility is no longer just about being found; it's about being understood, trusted, and selected by the model as a credible source worth citing.
            </p>

            {/* WHY LAW FIRMS NEED GEO */}
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
              Why Law Firms Need GEO
            </h2>

            <p style={{ marginBottom: '1.2rem' }}>
              Legal search behaviour has changed faster than most firms' marketing strategies have kept up with.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', paddingLeft: '0' }}>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                <strong style={{ color: '#ffffff' }}>1. AI is changing how people search for legal help.</strong> Instead of typing short keyword phrases, users now ask full conversational questions — <em>"do I need a solicitor for a boundary dispute?"</em> — and expect a direct, contextual answer.
              </li>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                <strong style={{ color: '#ffffff' }}>2. AI recommends firms, not just websites.</strong> Where a search engine once returned a list of options for the user to evaluate, AI Overviews and chatbots increasingly name specific firms directly within the answer, effectively pre-selecting who gets considered.
              </li>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                <strong style={{ color: '#ffffff' }}>3. Being recognised as an authoritative source matters more than ever.</strong> AI systems weight entity authority, citations, and consistency heavily when deciding which sources to trust — meaning a firm's reputation signals now directly affect whether it appears in AI-generated answers at all.
              </li>
            </ul>

            <p style={{ marginBottom: '2.5rem', fontWeight: 600, color: '#ffffff' }}>
              Firms that ignore this shift risk becoming invisible in the exact moment a prospective client is deciding who to call.
            </p>

            {/* CORE GEO SERVICES FOR LAW FIRMS */}
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
              Core GEO Services for Law Firms
            </h2>

            <p style={{ marginBottom: '1.8rem' }}>
              A GEO strategy for a law firm typically rests on four pillars, each reinforcing the others.
            </p>

            {/* PILLAR 1 */}
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.8rem' }}>
              1. Entity & Authority Optimisation
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              This is the foundation of how AI systems understand who a firm is and what it's an authority on. It includes:
            </p>
            <ul style={{ marginBottom: '1.8rem', paddingLeft: '1.5rem', color: '#aaaaaa' }}>
              <li>Building out clear lawyer entities and individual attorney profiles</li>
              <li>Defining practice area entities so AI systems understand a firm's specific areas of expertise</li>
              <li>Establishing a strong organisation entity for the firm itself</li>
              <li>Strengthening E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness)</li>
              <li>Feeding accurate, consistent Knowledge Graph signals</li>
              <li>Implementing structured data (schema markup) so AI systems can parse firm, attorney, and practice area information reliably</li>
            </ul>

            {/* PILLAR 2 */}
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.8rem' }}>
              2. Citation Building
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              AI models weigh how often, and how consistently, a firm is mentioned across trusted third-party sources. This includes:
            </p>
            <ul style={{ marginBottom: '1.8rem', paddingLeft: '1.5rem', color: '#aaaaaa' }}>
              <li>Legal directory listings (The Law Society, Legal 500, Chambers)</li>
              <li>Law Society profiles & regulatory directory entries</li>
              <li>Chambers and other legal ranking publications</li>
              <li>Industry publications and legal press</li>
              <li>Government and court-related resources</li>
              <li>High-authority legal citations more broadly</li>
              <li>Consistent brand mentions across the web</li>
            </ul>

            {/* PILLAR 3 */}
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.8rem' }}>
              3. Contextual Content Engineering
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              Content built specifically to answer real client questions in the language AI systems can retrieve and cite. This includes:
            </p>
            <ul style={{ marginBottom: '1.8rem', paddingLeft: '1.5rem', color: '#aaaaaa' }}>
              <li>Dedicated practice area pages</li>
              <li>Clear, direct FAQs</li>
              <li>Long-form guides that thoroughly answer a topic</li>
              <li>Case studies that demonstrate real outcomes</li>
              <li>Topic clusters that build depth and authority around core practice areas</li>
              <li>Semantic optimisation aligned to how people actually phrase questions</li>
              <li>A strong focus on genuine user intent, not just keyword targeting</li>
            </ul>

            {/* PILLAR 4 */}
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.8rem' }}>
              4. AI Brand Monitoring
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              Ongoing visibility tracking to understand how a firm is actually appearing (or not appearing) in AI-generated answers:
            </p>
            <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem', color: '#aaaaaa' }}>
              <li>Monitoring where and how a firm is mentioned across AI platforms</li>
              <li>Tracking brand sentiment within AI-generated responses</li>
              <li>Measuring citation frequency over time</li>
              <li>Broader AI visibility tracking across queries relevant to the firm</li>
              <li>Competitor monitoring to understand relative share of voice</li>
            </ul>

            {/* SENTIMENT CALLOUT BOX */}
            <div style={{ backgroundColor: '#181818', borderLeft: '4px solid #ffffff', borderRadius: '16px', padding: '2rem', marginBottom: '2.5rem' }}>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.8rem' }}>
                Why sentiment matters as much as visibility
              </h4>
              <p style={{ fontSize: '0.98rem', color: '#cccccc', lineHeight: 1.65, marginBottom: '1rem' }}>
                Being mentioned by an AI platform isn't automatically a win — how a firm is described matters just as much as whether it's described at all. An AI Overview or chatbot response can reference a firm in clearly positive terms (<em>"a highly rated firm known for strong client outcomes"</em>), in neutral, purely factual terms (name, location, practice areas with no qualitative framing), or in negative terms (referencing complaints, poor reviews, or disciplinary history it has picked up from the web).
              </p>
              <p style={{ fontSize: '0.98rem', color: '#cccccc', lineHeight: 1.65, marginBottom: '1rem' }}>
                For law firms, this distinction carries real weight. Legal decisions are trust-driven, and prospective clients often treat an AI-generated summary as a shortcut to due diligence. A firm that's cited often but described neutrally is missing an opportunity; a firm that's occasionally described negatively is actively losing prospective clients before a single phone call happens — often without the firm ever knowing it's happening, since there's no dashboard or alert built into ChatGPT, Perplexity, or Gemini to flag it.
              </p>
              <p style={{ fontSize: '0.98rem', color: '#ffffff', fontWeight: 600, lineHeight: 1.65 }}>
                This is why sentiment tracking sits alongside citation tracking, not underneath it. Positive sentiment reinforces conversion; neutral sentiment leaves ground for competitors to claim; negative sentiment needs to be identified and addressed at the source before it compounds.
              </p>
            </div>

            {/* COMPARISON TABLE */}
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
              GEO vs Traditional SEO
            </h2>

            <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px', fontSize: '0.95rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#000000', color: '#ffffff', borderBottom: '1px solid #333333' }}>
                    <th style={{ padding: '1rem 1.2rem', width: '25%', textTransform: 'uppercase', fontSize: '0.85rem' }}>Factor</th>
                    <th style={{ padding: '1rem 1.2rem', width: '37%', textTransform: 'uppercase', fontSize: '0.85rem' }}>Traditional SEO</th>
                    <th style={{ padding: '1rem 1.2rem', width: '38%', textTransform: 'uppercase', fontSize: '0.85rem' }}>Generative Engine Optimisation (GEO)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { f: 'Primary goal', s: 'Rankings on a results page', g: 'Citations within an AI-generated answer' },
                    { f: 'Output format', s: 'Blue links', g: 'Synthesised AI answers' },
                    { f: 'Core targeting unit', s: 'Keywords', g: 'Entities' },
                    { f: 'Matching approach', s: 'Search intent via keyword relevance', g: 'Search intent via semantic and conversational meaning' },
                    { f: 'Data signals', s: 'Backlinks, on-page SEO', g: 'Structured data, entity consistency, citations' },
                    { f: 'Success metric', s: 'Position/ranking', g: 'Presence, accuracy, and frequency of AI citation' },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #222222', backgroundColor: i % 2 === 0 ? '#111111' : '#181818' }}>
                      <td style={{ padding: '1rem 1.2rem', fontWeight: 800, color: '#ffffff' }}>{row.f}</td>
                      <td style={{ padding: '1rem 1.2rem', color: '#aaaaaa' }}>{row.s}</td>
                      <td style={{ padding: '1rem 1.2rem', fontWeight: 700, color: '#ffffff' }}>{row.g}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ marginBottom: '2.5rem' }}>
              GEO doesn't replace SEO — it builds on it. Strong technical SEO and quality content remain the foundation; GEO adds the entity, citation, and structured-data layer AI systems need to trust and cite a source. Learn more about our <Link href="/services" style={{ color: '#ffffff', fontWeight: 800, textDecoration: 'underline' }}>complete SEO & GEO retainer scope</Link>.
            </p>

            {/* HOW GEO HELPS APPEAR ACROSS PLATFORMS */}
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
              How GEO Helps Law Firms Appear in AI Search
            </h2>

            <p style={{ marginBottom: '1.5rem' }}>
              Each AI platform surfaces information a little differently, so a firm's visibility strategy needs to account for how each one works — at a high level:
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem', paddingLeft: 0 }}>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1rem 1.2rem', borderRadius: '12px' }}>
                <strong style={{ color: '#ffffff' }}>• Google AI Overviews:</strong> Draws heavily on Google's existing index, structured data, and established authority signals, surfacing summarised answers directly above traditional search results.
              </li>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1rem 1.2rem', borderRadius: '12px' }}>
                <strong style={{ color: '#ffffff' }}>• ChatGPT:</strong> Blends its training knowledge with live web retrieval (via browsing/search features) to generate conversational answers, often citing sources it deems credible.
              </li>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1rem 1.2rem', borderRadius: '12px' }}>
                <strong style={{ color: '#ffffff' }}>• Perplexity:</strong> Built around real-time retrieval and explicit citation, making it particularly sensitive to how easily a firm's content can be found, parsed, and quoted.
              </li>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1rem 1.2rem', borderRadius: '12px' }}>
                <strong style={{ color: '#ffffff' }}>• Claude:</strong> Emphasises careful synthesis of retrieved content, weighing source quality and clarity when referencing external information.
              </li>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1rem 1.2rem', borderRadius: '12px' }}>
                <strong style={{ color: '#ffffff' }}>• Gemini:</strong> Integrates closely with Google's broader ecosystem and knowledge graph, similarly favouring well-structured, entity-rich content.
              </li>
              <li style={{ backgroundColor: '#181818', border: '1px solid #222222', padding: '1rem 1.2rem', borderRadius: '12px' }}>
                <strong style={{ color: '#ffffff' }}>• Copilot:</strong> Draws on Bing's index and search infrastructure, with its own weighting of authority and freshness signals.
              </li>
            </ul>

            <p style={{ marginBottom: '2.5rem' }}>
              These platforms don't all work identically, but they share common ground: they reward firms with clear entity signals, consistent citations, and content that directly and clearly answers real questions. Explore technical details in our <Link href="/services/generative-engine-optimization" style={{ color: '#ffffff', fontWeight: 800, textDecoration: 'underline' }}>Generative Engine Optimization Guide</Link>.
            </p>

            {/* HOW XTRACT IMPROVES AI VISIBILITY */}
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
              How Xtract Improves AI Visibility for Law Firms
            </h2>

            <p style={{ marginBottom: '1.5rem' }}>
              Our process is built to move a firm from invisible-to-AI to consistently cited, in a structured, measurable way:
            </p>

            <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><strong>GEO audit:</strong> Assessing current AI visibility, entity clarity, and citation footprint</li>
              <li><strong>Entity analysis:</strong> Identifying gaps in how the firm, its attorneys, and its practice areas are represented online</li>
              <li><strong>Content strategy:</strong> Building the practice area pages, FAQs, and guides needed to answer real client questions</li>
              <li><strong>Citation strategy:</strong> Securing and strengthening presence across legal directories, publications, and authoritative sources</li>
              <li><strong>Technical optimisation:</strong> Implementing structured data and the technical foundations AI systems rely on</li>
              <li><strong>Monitoring:</strong> Tracking AI mentions, sentiment, and citation frequency on an ongoing basis</li>
              <li><strong>Reporting:</strong> Transparent, regular reporting on visibility gains and where the strategy is heading next</li>
            </ol>

            {/* HOW WE REPORT ON SENTIMENT */}
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
              How We Report on Sentiment
            </h3>

            <p style={{ marginBottom: '1.2rem' }}>
              Visibility numbers alone don't tell a firm whether AI platforms are actually helping or quietly harming client perception — so sentiment is built into how we report, not treated as an afterthought.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              Using Xtract's in-house monitoring tools (including Profound and Limy analytics), we track not just whether and how often a firm is mentioned across AI platforms, but how it's described each time — categorising mentions as positive, neutral, or negative and tracking how that balance shifts over time. This lets us show a firm, in plain terms, whether AI platforms are currently reinforcing their reputation or undermining it, and exactly which sources (a review platform, a directory listing, a piece of press coverage) are driving any negative framing.
            </p>

            <p style={{ marginBottom: '2.5rem' }}>
              That reporting then feeds directly back into the strategy: negative sentiment gets flagged and traced to its source so it can be addressed, neutral mentions get prioritised for stronger entity and content signals to shift them positive, and positive sentiment gets reinforced and monitored to make sure it holds as competitors adjust their own strategies. Firms get this as part of regular reporting, so sentiment shifts are visible and actionable, not just a number buried in a dashboard.
            </p>

            {/* COST SECTION */}
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
              How Much Does GEO for Law Firms Cost?
            </h2>

            <p style={{ marginBottom: '1.5rem' }}>
              GEO pricing for law firms typically follows one of a few models: a monthly retainer covering ongoing content, citation building, and monitoring; a project-based fee for a defined scope such as an initial audit and entity build-out; or a hybrid of the two.
            </p>

            <p style={{ marginBottom: '1rem' }}>Cost is generally shaped by a few key factors:</p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.8rem', color: '#aaaaaa' }}>
              <li><strong>Number and competitiveness of practice areas:</strong> A firm covering multiple high-competition areas (e.g. personal injury, family law, criminal defence) requires more entity and content work than a single-practice firm</li>
              <li><strong>Level of competition in the firm's market:</strong> Highly competitive metro markets typically require a more intensive citation and content strategy</li>
              <li><strong>Geographic reach:</strong> A firm targeting a single city needs a different scope than one competing regionally or nationally</li>
            </ul>

            <p style={{ marginBottom: '2.5rem' }}>
              Because every firm's starting point, practice mix, and competitive landscape differ, we build custom GEO strategies rather than offering fixed, one-size-fits-all packages. Learn more on our <Link href="/services" style={{ color: '#ffffff', fontWeight: 800, textDecoration: 'underline' }}>Services Page</Link>.
            </p>

            {/* CHOOSING THE RIGHT AGENCY */}
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
              Choosing the Right GEO Agency
            </h2>

            <p style={{ marginBottom: '1.5rem' }}>
              Not every SEO agency understands the legal sector, and not every legal marketing agency understands GEO. Look for:
            </p>

            <ul style={{ paddingLeft: '1.5rem', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: '#cccccc' }}>
              <li><strong>Legal marketing experience:</strong> An understanding of how legal clients search, decide, and convert</li>
              <li><strong>Genuine AI search expertise:</strong> Not just SEO knowledge relabelled as GEO</li>
              <li><strong>Technical SEO capabilities:</strong> Structured data, entity architecture, and site health as a foundation</li>
              <li><strong>Content strategy depth:</strong> The ability to build practice area content that actually answers client questions</li>
              <li><strong>Clear reporting:</strong> Visibility into AI mentions, citations, and sentiment, not just vanity metrics</li>
              <li><strong>Case studies:</strong> Evidence of AI visibility gains for other law firms</li>
              <li><strong>Industry knowledge:</strong> An understanding of legal advertising rules, compliance (SRA / regulatory guidelines), and ethical marketing standards</li>
            </ul>

            {/* FAQS SECTION */}
            <hr style={{ border: 0, borderTop: '1px solid #222222', margin: '2.5rem 0' }} />

            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Frequently Asked Questions
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
              {[
                {
                  q: 'What is a GEO agency?',
                  a: 'A GEO agency helps businesses — including law firms — improve their visibility, accuracy, and citation frequency within AI-generated search answers, such as Google AI Overviews and AI chatbots, rather than focusing solely on traditional search rankings.',
                },
                {
                  q: 'Does GEO replace SEO?',
                  a: 'No. GEO builds on strong SEO fundamentals. Technical health, quality content, and backlinks remain important; GEO adds entity optimisation, structured data, and citation strategies specifically aimed at how AI systems retrieve and synthesise information.',
                },
                {
                  q: 'Can GEO help my law firm appear in AI-generated answers?',
                  a: 'Yes. By strengthening entity signals, building authoritative citations, and creating content that directly answers real client questions, GEO improves the likelihood that AI platforms surface and cite a firm when relevant queries are asked.',
                },
                {
                  q: 'How long does GEO take?',
                  a: 'Timelines vary by firm, but most see initial visibility improvements within a few months, with stronger, more consistent AI citation building over six to twelve months as entity and citation signals compound.',
                },
                {
                  q: 'Which AI platforms should law firms optimise for?',
                  a: 'At minimum, Google AI Overviews, ChatGPT, Perplexity, Claude, and Gemini, since these represent the platforms most commonly used for research-style and recommendation-style queries. Copilot is worth including for firms competing in Microsoft/Bing-heavy markets.',
                },
                {
                  q: 'How do you measure GEO success?',
                  a: 'Through a combination of AI mention tracking, citation frequency, sentiment analysis, and share-of-voice against competitors — alongside more traditional indicators like organic traffic and enquiry volume where they can be tied back to AI-driven visibility.',
                },
              ].map((faq, idx) => (
                <div key={idx} style={{ backgroundColor: '#181818', border: '1px solid #222222', borderRadius: '14px', padding: '1.4rem' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
                    {faq.q}
                  </h4>
                  <p style={{ color: '#aaaaaa', fontSize: '0.96rem', lineHeight: 1.6 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            {/* CALL TO ACTION LINKING BACK TO SERVICES & LAW FIRMS */}
            <div style={{ backgroundColor: '#000000', border: '1px solid #222222', borderRadius: '18px', padding: '2rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.8rem' }}>
                Ready to improve your law firm's AI search visibility?
              </h3>
              <p style={{ color: '#aaaaaa', fontSize: '0.98rem', maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
                Learn more about our dedicated <Link href="/seo-for-law-firms" style={{ color: '#ffffff', fontWeight: 800, textDecoration: 'underline' }}>Law Firm SEO & GEO Services</Link> or view our complete <Link href="/services" style={{ color: '#ffffff', fontWeight: 800, textDecoration: 'underline' }}>SEO Services Architecture</Link>.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/services/generative-engine-optimization" className="btn btn-primary" style={{ padding: '0.8rem 1.8rem' }}>
                  View Dedicated GEO Service Page
                </Link>
                <Link href="/seo-for-law-firms" className="btn btn-outline" style={{ padding: '0.8rem 1.8rem' }}>
                  Law Firm SEO Services
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EMBEDDED INTAKE AUDIT WIDGET */}
      <section id="audit">
        <div className="container" style={{ maxWidth: '920px' }}>
          <AIAuditWidget />
        </div>
      </section>
    </div>
  );
}
