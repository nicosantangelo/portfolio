"use client";

import { usePathname } from "next/navigation";

import { locations } from "../helpers/locations";
import styles from "./navigation.module.css";

export default function Navigation() {
  const currentLocation = usePathname();
  return (
    <ul className={styles.navigation}>
      {currentLocation === locations.home() ? null : (
        <li>
          <a href={locations.home()}>Home</a>
        </li>
      )}
      {currentLocation === locations.blog() ? null : (
        <li>
          <a href={locations.blog()}>Blog</a>
        </li>
      )}
      {currentLocation === locations.links() ? null : (
        <li>
          <a href={locations.links()}>Links</a>
        </li>
      )}
    </ul>
  );
}
