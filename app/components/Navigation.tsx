"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { locations } from "../helpers/locations";
import styles from "./navigation.module.css";

export default function Navigation() {
  const currentLocation = usePathname();
  return (
    <ul className={styles.navigation}>
      {currentLocation === locations.home() ? (
        <li className={styles.selected}>
          <span>Home</span>
        </li>
      ) : (
        <li>
          <Link href={locations.home()}>Home</Link>
        </li>
      )}
      {currentLocation.includes(locations.blog()) ? (
        <li className={styles.selected}>
          <span>Blog</span>
        </li>
      ) : (
        <li>
          <Link href={locations.blog()}>Blog</Link>
        </li>
      )}
      {currentLocation === locations.links() ? (
        <li className={styles.selected}>
          <span>Links</span>
        </li>
      ) : (
        <li>
          <Link href={locations.links()}>Links</Link>
        </li>
      )}
    </ul>
  );
}
