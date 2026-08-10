import { Metadata } from 'next';
import Link from 'next/link';
import AIAuditWidget from '@/components/AIAuditWidget';
import { ArrowRight, CheckCircle } from '@/components/Icons';

export const metadata: Metadata = {
  title: "Why Isn't My Shopify Store Showing Up on Google? (2026 Guide)",
  description:
    "A full diagnostic for why your Shopify store isn't ranking — including the technical issues most guides miss. Free Shopify SEO audit inside.",
  openGraph: {
    title: "Why Isn't My Shopify Store Showing Up on Google? (2026 Guide)",
    description:
      "A full diagnostic for why your Shopify store isn't ranking — including the technical issues most guides miss. Free Shopify SEO audit inside.",
    type: 'article',
    url: 'https://tryxtract.co.uk/resources/why-shopify-store-not-showing-up-on-google',
  },
};

export default function WhyShopifyStoreNotShowingUpPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: "Why Isn't My Shopify Store Showing Up on Google?",
        description:
          "A full diagnostic for why your Shopify store isn't ranking — including the technical issues most guides miss.",
        author: {
          '@type': 'Person',
          name: 'Luke Haracic',
          jobTitle: 'SEO Consultant',
        },
        publisher: {
          '@type': 'Organization',
          name: 'XTRACT AI Agency',
          url: 'https://tryxtract.co.uk',
        },
        datePublished: '2026-08-01',
        dateModified: '2026-08-10',
        url: 'https://tryxtract.co.uk/resources/why-shopify-store-not-showing-up-on-google',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Why is my Shopify store not showing up in Google at all?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most often it is password protection still enabled, Google simply has not crawled the new site yet, an accidental noindex tag, or the sitemap was never submitted. Search Console will tell you which of these applies within a few minutes of checking.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does it take for a new Shopify store to appear in Google?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Indexing typically takes 2–4 weeks after removing any blockers and submitting your sitemap. Actually ranking competitively for meaningful search terms takes considerably longer — usually 3–12 months of consistent technical and content work.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why did my Shopify store disappear from Google after ranking fine before?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Usually a noindex tag added accidentally during a theme update, a broken redirect creating 404s, a Google algorithm update, or a manual penalty. Check Search Console\'s Manual Actions and Coverage reports first.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can duplicate collection pages really hurt my rankings?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes — when Google indexes several near-identical versions of the same collection (created by filter and sort URL parameters), your ranking signal gets split across all of them instead of concentrated on one strong page.',
            },
          },
          {
            '@type': 'Question',
            name: 'Will fixing my SEO also help me show up in ChatGPT or AI search results?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Partially, but not automatically. Traditional SEO and AI visibility overlap heavily, but AI-specific factors like schema markup and server-rendered content need separate attention.',
            },
          },
        ],
      },
    ],
  };

  const checklistData = [
    {
      seeing: 'Brand new store, nothing indexed',
      cause: "Google hasn't crawled it yet",
      check: 'Search Console → Sitemaps',
    },
    {
      seeing: 'site:yourdomain.com returns nothing',
      cause: 'Password protection or site-wide noindex',
      check: 'Shopify Admin → Online Store → Preferences',
    },
    {
      seeing: 'Some pages indexed, others missing',
      cause: 'Crawl budget wasted on thin/duplicate pages',
      check: 'Search Console → Pages report',
    },
    {
      seeing: 'Indexed but stuck on page 3+',
      cause: 'Weak content, no authority, slow site',
      check: 'PageSpeed Insights + content audit',
    },
    {
      seeing: 'Used to rank, now gone',
      cause: 'Broken redirect, noindex from a theme update, algorithm shift',
      check: 'Search Console → Manual Actions & Coverage',
    },
    {
      seeing: 'Rankings fine but AI tools never mention you',
      cause: 'Site not structured for AI crawlers',
      check: 'See the AI visibility section below',
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#000000', minHeight: '100vh', paddingTop: '5rem', paddingBottom: '6rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ARTICLE HEADER & HERO */}
      <section style={{ marginBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="soft-pill-tag" style={{ marginBottom: '1.5rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#000000' }} />
            Shopify Technical SEO Playbook
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 800,
              color: '#000000',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}
          >
            Why Is My Shopify Store Not Showing Up on Google?
          </h1>

          {/* Byline */}
          <div
            style={{
              fontSize: '0.95rem',
              color: '#555555',
              fontWeight: 600,
              paddingBottom: '2rem',
              borderBottom: '1px solid #e5e5e5',
              marginBottom: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              flexWrap: 'wrap',
            }}
          >
            <span>Written by <strong>Luke Haracic</strong>, SEO Consultant</span>
            <span>•</span>
            <span>Updated August 2026</span>
          </div>

          {/* QUICK ANSWER BOX */}
          <div
            style={{
              backgroundColor: '#f8f8f8',
              borderLeft: '4px solid #000000',
              border: '1px solid #e5e5e5',
              borderLeftWidth: '4px',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '3rem',
            }}
          >
            <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#000000', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.8rem' }}>
              QUICK ANSWER
            </div>
            <p style={{ color: '#333333', fontSize: '1.02rem', lineHeight: 1.65, fontWeight: 500 }}>
              Most Shopify stores are invisible on Google for one of three reasons: Google hasn't indexed the site yet (common for new stores, takes 2–4 weeks), a technical block like password protection or a noindex tag is stopping Google from crawling it, or the store is indexed but not ranking because of thin content, duplicate collection pages, or app bloat slowing the site down. Established stores that suddenly disappeared usually have a broken sitemap, an accidental noindex tag from a theme update, or a Google algorithm change. Check Google Search Console first — it tells you exactly what Google sees.
            </p>
          </div>

          {/* INTRODUCTION */}
          <div style={{ fontSize: '1.08rem', color: '#444444', lineHeight: 1.75, marginBottom: '3.5rem' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              We see a version of this same story often: a store has been live for a couple of years, has a clean design, decent product photography, and a handful of apps installed for reviews and upsells. To the owner, everything looks fine.
            </p>
            <p>
              But a quick audit turns up six indexed versions of the same collection page (created by sort and filter parameters), a review app quietly adding half a second to every page load on mobile, and a homepage <code>noindex</code> tag left over from a staging site that was never removed before launch. None of these are visible just by looking at the store — which is exactly why "it looks fine" and "Google can't find it" aren't contradictory. This guide runs through every layer, from the obvious to the ones most audits miss.
            </p>
          </div>

          {/* THE DIAGNOSTIC CHECKLIST TABLE */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#000000', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              The diagnostic checklist
            </h2>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#000000', color: '#ffffff' }}>
                    <th style={{ padding: '1rem 1.2rem', borderRadius: '12px 0 0 0', width: '33%', fontSize: '0.88rem', textTransform: 'uppercase' }}>What you're seeing</th>
                    <th style={{ padding: '1rem 1.2rem', width: '33%', fontSize: '0.88rem', textTransform: 'uppercase' }}>Likely cause</th>
                    <th style={{ padding: '1rem 1.2rem', borderRadius: '0 12px 0 0', width: '34%', fontSize: '0.88rem', textTransform: 'uppercase' }}>What to check first</th>
                  </tr>
                </thead>
                <tbody>
                  {checklistData.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #e5e5e5', backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8f8f8' }}>
                      <td style={{ padding: '1rem 1.2rem', fontWeight: 700, color: '#000000', fontSize: '0.92rem' }}>{row.seeing}</td>
                      <td style={{ padding: '1rem 1.2rem', color: '#555555', fontSize: '0.92rem' }}>{row.cause}</td>
                      <td style={{ padding: '1rem 1.2rem', fontWeight: 600, color: '#000000', fontSize: '0.92rem' }}>{row.check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SECTION: IS GOOGLE ALLOWED TO SEE YOUR STORE? */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#000000', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              Start here: is Google even allowed to see your store?
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#444444', fontSize: '1.05rem', lineHeight: 1.7 }}>
              <div>
                <strong style={{ color: '#000000' }}>Password protection.</strong> If your store still has a password on it (common while building), Google gets a login page instead of your content — nothing gets indexed no matter what else you fix. Remove it in Shopify Admin → Online Store → Preferences before anything else.
              </div>
              <div>
                <strong style={{ color: '#000000' }}>Google hasn't crawled you yet.</strong> New domains typically take 2–4 weeks to be discovered and indexed. Submit your sitemap (<code>yourdomain.com/sitemap.xml</code> — Shopify generates this automatically) in Google Search Console, then use the URL Inspection tool to request indexing on your homepage and top collection pages directly.
              </div>
              <div>
                <strong style={{ color: '#000000' }}>Noindex tags.</strong> Some themes and apps accidentally add a <code>noindex</code> tag to pages during setup or updates. View page source on your homepage and key product pages and search for "noindex" — if it's there, it needs removing from the theme code or the app causing it.
              </div>
              <div>
                <strong style={{ color: '#000000' }}>Broken or misconfigured canonical tags.</strong> Shopify sets canonical tags automatically to avoid duplicate content, but a misconfigured app or custom theme edit can point them at the wrong URL, effectively telling Google to ignore the page you actually want ranked. Each important page's canonical tag should point to itself.
              </div>
            </div>
          </div>

          {/* SECTION: THE ISSUES MOST GUIDES SKIP */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#000000', letterSpacing: '-0.02em', marginBottom: '1.2rem' }}>
              The issues most guides skip
            </h2>
            <p style={{ color: '#555555', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              This is where most "why isn't my store on Google" guides stop — but for stores that have been live a while, the real problem is usually more subtle than a checkbox fix.
            </p>

            {/* Sub-item 1 */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '20px', padding: '2rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#000000', marginBottom: '1rem' }}>
                Duplicate collection, tag, and filter URLs
              </h3>
              <p style={{ color: '#555555', fontSize: '1rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Shopify's filtering and sorting options generate multiple URL variations of essentially the same page (<code>?sort_by=</code>, <code>?filter.p.tag=</code>, and similar parameters). Google can end up indexing several near-identical versions of one collection page, splitting your ranking signal across all of them instead of concentrating it on one strong page.
              </p>

              <div style={{ backgroundColor: '#f8f8f8', borderRadius: '12px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', color: '#000000', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.8rem' }}>
                  How to check and fix it:
                </strong>
                <ol style={{ listStylePosition: 'inside', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: '#333333', fontSize: '0.95rem' }}>
                  <li>In Search Console, open the Pages report and look for multiple indexed URLs that share the same collection name but differ only by a <code>?</code> parameter.</li>
                  <li>Confirm each filtered/sorted URL has a self-referencing issue — view page source on a filtered URL (e.g. <code>/collections/shoes?sort_by=price-ascending</code>) and check whether its canonical tag points back to the clean <code>/collections/shoes</code> URL. If it points to itself instead, that's the problem.</li>
                  <li>If your theme doesn't handle this automatically, add the fix via your theme's collection template (canonical should always point to the unfiltered URL) or use an SEO app that manages canonicals for filtered pages.</li>
                  <li>For variants you don't want crawled at all, disallow the specific parameters in <code>robots.txt</code> — but don't block the base <code>/collections/</code> path, or you'll lose the pages you actually want indexed.</li>
                  <li>Re-check in Search Console after a few weeks; the number of indexed variants for that collection should drop toward one.</li>
                </ol>
              </div>
            </div>

            {/* Sub-item 2 */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '20px', padding: '2rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#000000', marginBottom: '1rem' }}>
                App bloat killing your page speed
              </h3>
              <p style={{ color: '#555555', fontSize: '1rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Every review widget, upsell popup, and tracking script you install adds weight to your pages. Since the large majority of Shopify traffic is mobile, a store running five or six apps often loads noticeably slower on a phone than on the desktop it was tested on — and Google's page experience signals factor this in.
              </p>

              <div style={{ backgroundColor: '#f8f8f8', borderRadius: '12px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', color: '#000000', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.8rem' }}>
                  How to check and fix it:
                </strong>
                <ol style={{ listStylePosition: 'inside', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: '#333333', fontSize: '0.95rem' }}>
                  <li>Run your homepage and a product page through PageSpeed Insights, checking the mobile score specifically, not just desktop.</li>
                  <li>In Shopify Admin, go through your installed apps list one by one — for each, ask whether it's actively driving revenue or conversions, not just "nice to have."</li>
                  <li>Temporarily disable a suspected slow app and re-run PageSpeed Insights to see the actual before/after difference, rather than guessing which one is the culprit.</li>
                  <li>Remove or replace apps that add significant load time relative to the value they provide — review widgets and pop-up apps are the most common offenders.</li>
                  <li>Re-audit quarterly, since new apps get added over time and speed tends to quietly degrade unless someone checks.</li>
                </ol>
              </div>
            </div>

            {/* Sub-item 3 & 4 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#444444', fontSize: '1.05rem', lineHeight: 1.7 }}>
              <div>
                <strong style={{ color: '#000000' }}>Thin or duplicate product descriptions.</strong> A two-sentence description copied from the manufacturer is functionally identical to what dozens of other stores are running — Google has no reason to index another copy of the same text. Rewrite descriptions in your own voice, aiming for genuinely useful detail (materials, sizing, use cases, care) rather than padding for word count.
              </div>
              <div>
                <strong style={{ color: '#000000' }}>Empty collection pages.</strong> A collection page that's just a product grid with no introductory text gives Google very little to actually index and rank. Adding a few genuinely useful paragraphs — what the collection is, who it's for — gives the page substance beyond a list of thumbnails.
              </div>
            </div>
          </div>

          {/* SECTION: STRUCTURING YOUR STORE FOR AI SEARCH */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#000000', letterSpacing: '-0.02em', marginBottom: '1.2rem' }}>
              Structuring your store for AI search, not just Google
            </h2>
            <p style={{ color: '#555555', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              This is the part almost no Shopify SEO guide currently covers, and it's becoming genuinely relevant. A growing share of shopping research now happens inside ChatGPT, Perplexity, and Google's AI Overviews before someone ever opens a normal search results page — and if your store isn't technically accessible to these tools, you're invisible to that entire layer of demand, separately from your Google ranking.
            </p>

            <div style={{ backgroundColor: '#000000', color: '#ffffff', borderRadius: '20px', padding: '2rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#aaaaaa', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
                THREE THINGS THAT MATTER MOST
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#dddddd', fontSize: '0.98rem' }}>
                <li><strong style={{ color: '#ffffff' }}>• Schema markup (Product, Offer, Organization):</strong> Enables AI systems to accurately parse pricing, availability, and what you sell — default Shopify themes implement only basic schema.</li>
                <li><strong style={{ color: '#ffffff' }}>• Server-rendered content:</strong> Some AI crawlers don't execute JavaScript like browsers — if product info loads client-side, it may never be read.</li>
                <li><strong style={{ color: '#ffffff' }}>• Clear, quotable answers:</strong> Product and collection pages stating what a product is and who it's for get pulled into AI answers far more often than pure marketing fluff.</li>
              </ul>
            </div>
          </div>

          {/* SECTION: SPEED UP INDEXING */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#000000', letterSpacing: '-0.02em', marginBottom: '1.2rem' }}>
              How to speed up indexing
            </h2>
            <p style={{ color: '#555555', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Once the blockers above are cleared, a few things genuinely shorten the time it takes Google to find and index new or updated pages:
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#444444', fontSize: '1.02rem', lineHeight: 1.65 }}>
              <li style={{ backgroundColor: '#f8f8f8', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '1.2rem' }}>
                <strong style={{ color: '#000000' }}>Request indexing directly:</strong> In Search Console, use the URL Inspection tool on your most important pages and click "Request Indexing." This nudges Google to prioritise crawling that specific URL rather than waiting for it to be discovered naturally.
              </li>
              <li style={{ backgroundColor: '#f8f8f8', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '1.2rem' }}>
                <strong style={{ color: '#000000' }}>Earn a few early backlinks:</strong> Pages with at least one inbound link tend to get discovered and crawled faster than pages sitting in isolation. A mention in a relevant directory, a supplier's site, or a genuine press feature all help here.
              </li>
              <li style={{ backgroundColor: '#f8f8f8', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '1.2rem' }}>
                <strong style={{ color: '#000000' }}>Keep the site actively updated:</strong> Sites that publish or update content regularly get crawled more frequently overall, which indirectly speeds up indexing of new pages too.
              </li>
              <li style={{ backgroundColor: '#f8f8f8', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '1.2rem' }}>
                <strong style={{ color: '#000000' }}>Use IndexNow:</strong> This protocol lets you proactively notify participating search engines (including Bing) the moment a page is added or changed, cutting indexing time from weeks to potentially hours on those engines.
              </li>
            </ul>
          </div>

          {/* NEW STORE LAUNCH CHECKLIST */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#000000', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              New store launch checklist
            </h2>

            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '20px', padding: '2rem' }}>
              <ol style={{ listStylePosition: 'inside', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: '#000000', fontWeight: 700, fontSize: '0.98rem' }}>
                <li>Remove password protection</li>
                <li>Verify your domain in Google Search Console</li>
                <li>Submit your sitemap and request indexing on key pages</li>
                <li>Write unique title tags and meta descriptions for every important page</li>
                <li>Add genuine, non-duplicated content to product and collection pages</li>
                <li>Check for and fix duplicate collection/filter URLs before they get indexed</li>
                <li>Audit installed apps for unnecessary speed cost</li>
                <li>Add Product and Organization schema</li>
                <li>Set up GA4 and segment for AI referral traffic (ChatGPT, Perplexity, Copilot) alongside normal channels</li>
                <li>Build a small number of genuine backlinks — directories, supplier mentions, relevant press</li>
              </ol>
            </div>
          </div>

          {/* FAQS SECTION */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#000000', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              Frequently Asked Questions
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {[
                {
                  q: 'Why is my Shopify store not showing up in Google at all?',
                  a: 'Most often it is password protection still enabled, Google simply has not crawled the new site yet, an accidental noindex tag, or the sitemap was never submitted. Search Console will tell you which of these applies within a few minutes of checking.',
                },
                {
                  q: 'How long does it take for a new Shopify store to appear in Google?',
                  a: 'Indexing typically takes 2–4 weeks after removing any blockers and submitting your sitemap. Actually ranking competitively for meaningful search terms takes considerably longer — usually 3–12 months of consistent technical and content work, not a one-off fix.',
                },
                {
                  q: 'Why did my Shopify store disappear from Google after ranking fine before?',
                  a: 'Usually a noindex tag added accidentally during a theme update, a broken redirect creating 404s, a Google algorithm update, or a manual penalty. Check Search Console\'s Manual Actions and Coverage reports first — they\'ll usually tell you directly.',
                },
                {
                  q: 'Can duplicate collection pages really hurt my rankings?',
                  a: 'Yes — when Google indexes several near-identical versions of the same collection (created by filter and sort URL parameters), your ranking signal gets split across all of them instead of concentrated on one strong page, which weakens all of them.',
                },
                {
                  q: 'Will fixing my SEO also help me show up in ChatGPT or AI search results?',
                  a: 'Partially, but not automatically. Traditional SEO and AI visibility overlap heavily (Google\'s own AI Overviews are built on the same core ranking systems), but AI-specific factors like schema markup and server-rendered content need separate attention.',
                },
              ].map((faq, idx) => (
                <div key={idx} style={{ backgroundColor: '#f8f8f8', border: '1px solid #e5e5e5', borderRadius: '16px', padding: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#000000', marginBottom: '0.5rem' }}>
                    {faq.q}
                  </h4>
                  <p style={{ color: '#555555', fontSize: '0.96rem', lineHeight: 1.65 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* INTERNAL CTA BOX LINKING TO /seo-for-shopify-stores */}
          <div
            style={{
              backgroundColor: '#000000',
              color: '#ffffff',
              borderRadius: '24px',
              padding: '3rem',
              marginBottom: '4rem',
              textAlign: 'center',
            }}
          >
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
              Struggling to work out which of these applies to your store specifically?
            </h3>
            <p style={{ color: '#cccccc', fontSize: '1.05rem', lineHeight: 1.65, maxWidth: '680px', margin: '0 auto 2rem auto' }}>
              We run a free Shopify SEO audit that checks indexing, technical blockers, and AI search readiness in one pass — no app to install, no bias toward selling you a product.
            </p>
            <Link href="/seo-for-shopify-stores" className="btn btn-primary" style={{ backgroundColor: '#ffffff', color: '#000000', padding: '1rem 2.2rem' }}>
              Explore UK Shopify SEO Services <ArrowRight size={18} />
            </Link>
          </div>

          {/* ABOUT THE AUTHOR */}
          <div
            style={{
              backgroundColor: '#f8f8f8',
              border: '1px solid #e5e5e5',
              borderRadius: '20px',
              padding: '2rem',
              marginBottom: '5rem',
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#000000',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '1.4rem',
                flexShrink: 0,
              }}
            >
              LH
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#666666', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>
                ABOUT THE AUTHOR
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#000000', marginBottom: '0.4rem' }}>
                Luke Haracic
              </h4>
              <p style={{ color: '#555555', fontSize: '0.95rem', lineHeight: 1.6 }}>
                <strong>Luke Haracic</strong> is an SEO consultant specialising in technical SEO for Shopify and e-commerce stores. He works directly with store owners to diagnose indexing, crawlability, and ranking issues, and writes about the technical side of Shopify SEO that most generic guides skip.
              </p>
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
