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
        Saya mahasiswa Teknik Informatika di PENS, dengan minat dalam pengembangan website. Saya juga memiliki pengalaman dalam pengembangan aplikasi mobile dengan Flutter.
        </p>
        <a href="/CV.pdf" download="CV_Jauharotun_Nafisah.pdf" className={styles.contactBtn}>
        <FaDownload /> Lihat CV Saya
</a>

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
