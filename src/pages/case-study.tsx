// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { MarketingCaseStudyView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

CaseStudyPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function CaseStudyPage() {
  return (
    <>
      <Head>
        <title>Case Study | ZONE UI</title>
      </Head>

      <MarketingCaseStudyView />
    </>
  );
}
