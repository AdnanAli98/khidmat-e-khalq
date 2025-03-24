"use client";

import { useState } from "react";
import styles from "./slider.module.scss";
import { sliderData } from "./sliderData";

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={styles.sliderContainer}>
      {sliderData.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentIndex ? styles.active : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className={styles.overlay}></div>

          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              <h2 className={styles.title}>{slide.title}</h2>
              <p className={styles.description}>{slide.description}</p>
              <div className={styles.buttons}>
                <button className={`${styles.button} ${styles.register}`}>
                Register as Volunteer
                </button>
                <button className={`${styles.button} ${styles.involved}`}>
                  Get Involved
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className={styles.dots}>
        {sliderData.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;