import Link from "next/link";
import Centered from "../components/Centered";
import { locations } from "../helpers/locations";
import { BLOG_SLUGS } from "../helpers/blogNames";
import styles from "./page.module.css";

export default function Links() {
  return (
    <Centered>
      <div>
        <h5 className={styles.title}>Some stuff to checkout</h5>
        <ul className={styles.list}>
          <li>
            <Link href="https://github.com/nicosantangelo?tab=repositories&q=extension&type=&language=&sort=">
              Chrome extensions
            </Link>
          </li>
          <li>
            <Link href="https://packagecontrol.io/browse/authors/nicosantangelo">
              Sublime text packages
            </Link>
          </li>
          <li>
            <Link href="http://langyapp.github.io/">Other projects</Link>
          </li>
          <li>
            <Link
              href={locations.blog(BLOG_SLUGS.slice(-1)[0])}
              className={styles.blogLink}
            >
              Last blog post
            </Link>
          </li>
        </ul>
      </div>
    </Centered>
  );
}
