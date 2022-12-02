import Introduction from '@/components/Introduction';
import TopNav from '@/components/TopNav';
import { t } from '@/i18n';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

export default function Index() {
  const router = useRouter();

  return (
    <React.Fragment>
      <Head>
        <title>CSZongzi</title>
        <meta name="description" content={t(router.locale, 'site.description')} />
      </Head>
      <TopNav />
      <Introduction />
    </React.Fragment>
  );
}
