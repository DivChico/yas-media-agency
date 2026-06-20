// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { MarketingCaseStudiesView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

CaseStudiesPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function CaseStudiesPage() {
  return (
    <>
      <Head>
        <title>Case Studies | YAS Media</title>
      </Head>

      <MarketingCaseStudiesView />
    </>
  );
}
