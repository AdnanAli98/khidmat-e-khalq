"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./slider.module.scss";
import { sliderData } from "./sliderData";
import { useState } from "react";

const BannerSlider = () => {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return (
              `<span class="${className} ${styles.swiperPaginationBullet}" data-index="${index}"></span>`
            );
          },
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView={1}
        className={styles.swiperContainer}
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.slideWrapper}>
              <div
                className={styles.slide}
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={`${styles.swiperPagination} customPagination`}></div>
    </div>
  );
};

export default BannerSlider;
