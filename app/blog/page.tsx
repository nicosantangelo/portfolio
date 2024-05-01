import { locations } from "../helpers/locations";
import styles from "./page.module.css";

export default function BlogList() {
  return (
    <ul className={styles.blogList}>
      <li>
        <div className={styles.date}>2024-04-30</div>
        <div className={styles.name}>
          <a href={locations.blog("macos-configuration")}>Supercharge macos</a>
        </div>
      </li>
    </ul>
  );
}
