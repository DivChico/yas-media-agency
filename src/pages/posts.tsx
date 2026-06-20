// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { MarketingBlogView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

BlogPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | YAS Media</title>
      </Head>

      <MarketingBlogView />
    </>
  );
}
