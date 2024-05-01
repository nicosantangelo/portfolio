import Centered from "./components/Centered";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Centered>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Hi! I&apos;m&nbsp;<span className={styles.colored}>Nico</span>
          <small className={styles.handle}>(nicosantangelo)</small>
        </h1>
        <h3 className={styles.subTitle}>
          Software&nbsp;<span className={styles.colored}>developer</span> and
          all-round curious lad
        </h3>
        <div className={styles.links}>
          <a
            className={styles.link}
            href="mailto:santangelonicolas+website@gmail.com"
          >
            e-mail
          </a>
          <a
            className={styles.link}
            href="https://github.com/nicosantangelo"
            target="_blank"
          >
            github
          </a>
          <a
            className={styles.link}
            href="https://stackoverflow.com/users/437049/nicosantangelo"
            target="_blank"
          >
            stack overflow
          </a>
        </div>
      </div>
    </Centered>
  );
}
