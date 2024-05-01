import Link from "next/link";
import { locations } from "../helpers/locations";
import styles from "./page.module.css";
import { BLOG_NAMES, BLOG_SLUGS } from "../helpers/blogNames";

export default function BlogList() {
  return (
    <div className={styles.blogs}>
      <ul className={styles.list}>
        <li>
          <div className={styles.date}>2024-04-30</div>
          <div className={styles.name}>
            {BLOG_SLUGS.map((slug) => (
              <Link href={locations.blog(slug)}>{BLOG_NAMES[slug]}</Link>
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
}
