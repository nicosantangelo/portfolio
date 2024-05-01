import styles from "./centered.module.css";

export default function Centered({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.main}>
      <div className={styles.mainContent}>{children}</div>
    </main>
  );
}
