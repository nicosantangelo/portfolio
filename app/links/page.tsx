import Centered from "../components/Centered";
import { locations } from "../helpers/locations";
import styles from "./page.module.css";

export default function Links() {
  return (
    <Centered>
      <div>
        <h5 className={styles.title}>Some stuff to checkout</h5>
        <ul className={styles.list}>
          <li>
            <a href="https://github.com/nicosantangelo?tab=repositories&q=extension&type=&language=&sort=">
              Chrome extensions
            </a>
          </li>
          <li>
            <a href="https://packagecontrol.io/browse/authors/nicosantangelo">
              Sublime text packages
            </a>
          </li>
          <li>
            <a href="http://langyapp.github.io/">Other projects</a>
          </li>
          <li>
            <a
              href={locations.blog("macos-configuration")}
              className={styles.blogLink}
            >
              Last blog post
            </a>
          </li>
        </ul>
      </div>
    </Centered>
  );
}
