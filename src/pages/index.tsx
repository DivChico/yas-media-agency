// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { MarketingLandingView } from 'src/sections/_marketing/view';
// hooks
import { useLocales } from 'src/hooks/useLocales';

// ----------------------------------------------------------------------

HomePage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function HomePage() {
  const { t, isArabic } = useLocales();

  return (
    <>
      <Head>
        <title>{t('seo_title')}</title>
        <meta name="description" content={t('seo_description')} />

        <meta property="og:title" content={t('seo_og_title')} />
        <meta property="og:description" content={t('seo_og_description')} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="YAS Media Agency" />
        <meta property="og:locale" content={isArabic ? 'ar_SA' : 'en_US'} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('seo_twitter_title')} />
        <meta name="twitter:description" content={t('seo_twitter_description')} />

        <meta name="language" content={isArabic ? 'ar' : 'en'} />
        <meta name="direction" content={isArabic ? 'rtl' : 'ltr'} />

        {isArabic && (
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        )}

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
