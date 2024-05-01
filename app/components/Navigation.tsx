"use client";

import { usePathname } from "next/navigation";

import { locations } from "../helpers/locations";
import styles from "./navigation.module.css";
import Link from "next/link";

export default function Navigation() {
  const currentLocation = usePathname();
  return (
    <ul className={styles.navigation}>
      {currentLocation === locations.home() ? null : (
        <li>
          <Link href={locations.home()}>Home</Link>
        </li>
      )}
      {currentLocation === locations.blog() ? null : (
        <li>
          <Link href={locations.blog()}>Blog</Link>
        </li>
      )}
      {currentLocation === locations.links() ? null : (
        <li>
          <Link href={locations.links()}>Links</Link>
        </li>
      )}
    </ul>
  );
}
