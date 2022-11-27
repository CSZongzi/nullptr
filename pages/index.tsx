import Introduction from '@/components/Introduction';
import TopNav from '@/components/TopNav';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import React from 'react';

export default function Index() {
  const t = useTranslations('site');

  return (
    <React.Fragment>
      <Head>
        <title>CSZongzi</title>
        <meta name="description" content={t('description')} />
      </Head>
      <TopNav />
      <Introduction />
    </React.Fragment>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale;

  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}
