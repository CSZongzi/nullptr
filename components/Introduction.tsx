import BlogIcon from '@/icons/BlogIcon';
import EmailIcon from '@/icons/EmailIcon';
import GitHubIcon from '@/icons/GitHubIcon';
import LeetCodeIcon from '@/icons/LeetCodeIcon';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './Introduction.module.scss';

function textEN() {
  return (
    <React.Fragment>
      <p>
        <span className={styles.hello}>
          <span className={styles.text}>Hello!</span>
          <span className={styles.emoji}>👋🏼</span>
        </span>
      </p>
      <p>I&apos;m CSZongzi.</p>
    </React.Fragment>
  );
}

function textZH() {
  return (
    <React.Fragment>
      <p>
        <span className={styles.hello}>
          <span className={styles.text}>你好!</span>
          <span className={styles.emoji}>👋🏼</span>
        </span>
      </p>
      <p>我是 CSZongzi.</p>
    </React.Fragment>
  );
}

export default function Introduction() {
  const { locale } = useRouter();

  return (
    <section className={styles.introduction}>
      <div>
        {locale === 'en' ? textEN() : textZH()}
        <div className={styles.links}>
          <a href="https://stack.nullptr.zone/" aria-label="My blog">
            <BlogIcon />
          </a>
          <a href="https://leetcode.com/CSZongzi/" aria-label="My LeetCode profile">
            <LeetCodeIcon />
          </a>
          <a href="https://github.com/CSZongzi/" aria-label="My GitHub profile">
            <GitHubIcon />
          </a>
          <a href="mailto:cs.zongzi@gmail.com" aria-label="My email">
            <EmailIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
