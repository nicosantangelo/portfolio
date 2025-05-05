"use client";

import { useState } from "react";
import Centered from "./components/Centered";
import { locations } from "./helpers/locations";
import styles from "./page.module.css";

export default function Home() {
  const [isSocialOpen, setIsSocialOpen] = useState(true);

  function handleSocialClick() {
    setIsSocialOpen(!isSocialOpen);
  }

  return (
    <Centered>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Hi! I&apos;m&nbsp;
          <span>
            <span className={styles.colored}>Nico</span>
            <span className={styles.handle}>santangelo</span>
          </span>
        </h1>
        <h3 className={styles.subTitle}>
          Software&nbsp;<span className={styles.colored}>developer</span> and
          all-round <span className={styles.colored}>curious</span> lad
        </h3>
        <div className={styles.links}>
          <a className={styles.link} href={locations.blog()}>
            blog
          </a>
          <a className={styles.link} href={locations.projects()}>
            projects
          </a>
        </div>

        <div className={[styles.links, styles.social].join(" ")}>
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
