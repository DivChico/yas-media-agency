// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { MarketingPostView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

PostPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function PostPage() {
  return (
    <>
      <Head>
        <title>The A-Z Of Event Post | YAS Media</title>
      </Head>

      <MarketingPostView />
    </>
  );
}
