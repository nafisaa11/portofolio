import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>More About Me </h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              Saya adalah seorang Backend Developer dengan pengalaman mengintegrasikan API untuk website berbasis microservice, memastikan komunikasi data yang efisien dan scalable.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              Saya adalah seorang Frontend Developer dengan pengalaman dalam mengembangkan berbagai proyek website selama perkuliahan, menguasai teknologi seperti HTML, CSS, JavaScript, dan React.
              </p>
            </div>
          </li>
          
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Mobile Developer</h3>
              <p>
              Saya adalah seorang Mobile Developer yang saat ini sedang mengerjakan proyek pengembangan aplikasi mobile dengan fokus pada backend, memastikan sistem yang efisien, aman, dan scalable.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
