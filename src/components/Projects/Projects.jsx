import React from "react";
import Slider from "react-slick";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Custom Arrow Components (Tetap ada di Desktop)
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
      <ChevronLeft size={40} />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
      <ChevronRight size={40} />
    </button>
  );
};

export const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,          // Aktifkan swipe
    touchMove: true,      // Aktifkan touch scroll
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          // centerMode: true,
          // centerPadding: "20px",
          arrows: false, // Hilangkan arrow di mobile
          dots: true,
        },
      },
    ],
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <Slider {...settings} className={styles.slider}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </Slider>
    </section>
  );
};
