import BlogIcon from '@/icons/BlogIcon';
import EmailIcon from '@/icons/EmailIcon';
import GitHubIcon from '@/icons/GitHubIcon';
import LeetCodeIcon from '@/icons/LeetCodeIcon';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import styles from './Introduction.module.scss';

export default function Introduction() {
  const { locale } = useRouter();

  const t = useTranslations('accessibility');
  const intro = useTranslations('introduction');

  return (
    <section className={styles.introduction}>
      <div>
        <p>
          <span className={styles.hello}>
            <span className={styles.text}>{intro('hello')}</span>
            <span className={styles.emoji}>👋🏼</span>
          </span>
        </p>
        <p>{intro('me')}</p>
        <div className={styles.links}>
          <a href="https://stack.nullptr.zone/" aria-label={t('visitBlog')}>
            <BlogIcon />
          </a>
          <a href="https://leetcode.com/CSZongzi/" aria-label={t('visitLeetCode')}>
            <LeetCodeIcon />
          </a>
          <a href="https://github.com/CSZongzi/" aria-label={t('visitGitHub')}>
            <GitHubIcon />
          </a>
          <a href="mailto:cs.zongzi@gmail.com" aria-label={t('mailToMe')}>
            <EmailIcon />
          </a>
        </div>
      </div>
    </section>
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
