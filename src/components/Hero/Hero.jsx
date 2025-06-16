import React from "react";
import { FaDownload } from "react-icons/fa";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Halo! Saya Nafisah</h1>
        <p className={styles.description}>
        Full-Stack Developer (Web & Mobile) dengan keahlian frontend dan backend, berpengalaman dalam integrasi API microservices dan pengembangan sistem mobile yang scalable.
        </p>

      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
