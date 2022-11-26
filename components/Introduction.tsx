import BlogIcon from '@/icons/BlogIcon';
import EMailIcon from '@/icons/EMailIcon';
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
          <a href="https://stack.nullptr.zone/">
            <BlogIcon />
          </a>
          <a href="https://leetcode.com/CSZongzi/">
            <LeetCodeIcon />
          </a>
          <a href="https://github.com/CSZongzi/">
            <GitHubIcon />
          </a>
          <a href="mailto:cs.zongzi@gmail.com">
            <EMailIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
