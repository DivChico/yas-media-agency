// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { MarketingLandingView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

HomePage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Head>
        <title>YAS Media Agency | AI-Native Digital Marketing Agency — Riyadh, KSA</title>
        <meta name="description" content="YAS Media Agency is an AI-Native digital marketing agency based in Riyadh, Saudi Arabia. We help mid-to-large enterprises across the GCC grow through data-driven marketing, AI automation, and creative excellence." />

        <meta property="og:title" content="YAS Media Agency | AI-Native Digital Marketing Agency" />
        <meta property="og:description" content="AI-Native digital marketing agency serving enterprises across KSA and GCC. Data-driven strategies, AI automation, and creative excellence." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="YAS Media Agency" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YAS Media Agency | AI-Native Digital Marketing Agency" />
        <meta name="twitter:description" content="AI-Native digital marketing agency serving enterprises across KSA and GCC." />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'YAS Media Agency',
              description:
                'AI-Native Digital Marketing Agency based in Riyadh, Saudi Arabia. Specializing in digital marketing, campaign management, social media, branding, content creation, SEO, digital transformation, AI automation, and CRM.',
              url: 'https://yasmedia.com',
              telephone: '+966-xxx-xxxx',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Riyadh',
                addressRegion: 'Riyadh',
                addressCountry: 'SA',
              },
              areaServed: ['Saudi Arabia', 'GCC'],
              priceRange: '$$',
            }),
          }}
        />
      </Head>

      <MarketingLandingView />
    </>
  );
}
