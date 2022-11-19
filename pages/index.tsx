import Introduction from '@/components/Introduction';
import TopNav from '@/components/TopNav';
import Head from 'next/head';
import styles from './index.module.scss';

export default function Index() {
  return (
    <main className={styles.container}>
      <Head>
        <title>CSZongzi</title>
        <meta name="description" content="This is CSZongzi's Homepage | Nice to meet you |•'-'•) ✧" />
      </Head>
      <TopNav />
      <Introduction />
    </main>
  );
}
