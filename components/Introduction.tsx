import { t } from '@/i18n';
import BlogIcon from '@/icons/BlogIcon';
import EmailIcon from '@/icons/EmailIcon';
import GitHubIcon from '@/icons/GitHubIcon';
import LeetCodeIcon from '@/icons/LeetCodeIcon';
import { useRouter } from 'next/router';
import styles from './Introduction.module.scss';

export default function Introduction() {
  const router = useRouter();

  return (
    <section className={styles.introduction}>
      <div>
        <p>
          <span className={styles.hello}>
            <span className={styles.text}>{t(router.locale, 'introduction.hello')}</span>
            <span className={styles.emoji}>👋🏼</span>
          </span>
        </p>
        <p>{t(router.locale, 'introduction.me')}</p>
        <div className={styles.links}>
          <a href="https://stack.nullptr.zone/" aria-label={t(router.locale, 'accessibility.visitBlog')}>
            <BlogIcon />
          </a>
          <a href="https://leetcode.com/CSZongzi/" aria-label={t(router.locale, 'accessibility.visitLeetCode')}>
            <LeetCodeIcon />
          </a>
          <a href="https://github.com/CSZongzi/" aria-label={t(router.locale, 'accessibility.visitGitHub')}>
            <GitHubIcon />
          </a>
          <a href="mailto:cs.zongzi@gmail.com" aria-label={t(router.locale, 'accessibility.mailToMe')}>
            <EmailIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
