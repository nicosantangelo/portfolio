"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { locations } from "../helpers/locations";
import styles from "./navigation.module.css";

export default function Navigation() {
  const currentLocation = usePathname();

  const isHome = currentLocation === locations.home();

  if (isHome) {
    return null;
  }

  return (
    <ul className={styles.navigation}>
      <li>
        <Link href={locations.home()}>Home</Link>
      </li>
      {currentLocation.includes(locations.blog()) ? (
        <li className={styles.selected}>
          <span>Blog</span>
        </li>
      ) : (
        <li>
          <Link href={locations.blog()}>Blog</Link>
        </li>
      )}
      {currentLocation === locations.projects() ? (
        <li className={styles.selected}>
          <span>Projects</span>
        </li>
      ) : (
        <li>
          <Link href={locations.projects()}>Projects</Link>
        </li>
      )}
    </ul>
  );
}
