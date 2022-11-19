import styles from './Introduction.module.scss';

export default function Introduction() {
  return (
    <section className={styles.introduction}>
      <div>
        <p>
          <span className={styles.hello}>
            <span className={styles.text}>Hello!</span>
            <span className={styles.emoji}>👋🏼</span>
          </span>
        </p>
        <p>I&apos;m CSZongzi.</p>
      </div>
    </section>
  );
}
