import { useRouter } from 'next/router';
import styles from './Introduction.module.scss';

function textEN() {
  return (
    <div>
      <p>
        <span className={styles.hello}>
          <span className={styles.text}>Hello!</span>
          <span className={styles.emoji}>👋🏼</span>
        </span>
      </p>
      <p>I&apos;m CSZongzi.</p>
    </div>
  );
}

function textZH() {
  return (
    <div>
      <p>
        <span className={styles.hello}>
          <span className={styles.text}>你好！</span>
          <span className={styles.emoji}>👋🏼</span>
        </span>
      </p>
      <p>这里是 CSZongzi。</p>
    </div>
  );
}

export default function Introduction() {
  const { locale } = useRouter();

  return <section className={styles.introduction}>{locale === 'en' ? textEN() : textZH()}</section>;
}
