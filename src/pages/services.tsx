// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { MarketingServicesView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

ServicesPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | YAS Media</title>
      </Head>

      <MarketingServicesView />
    </>
  );
}
