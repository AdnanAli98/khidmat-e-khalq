"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import styles from "./Carousel.module.scss";
import Button from "../../app/globals/headerSection/Button";

const cards = [
  { image: "/img.png", name: "Medical Camps" },
  { image: "/ambulance.png", name: "Ambulance" },
  { image: "/water_project.png", name: "Water Project" },
  { image: "/rescue.png", name: "Rescue Volunteer" },
  { image: "/img.png", name: "Schools" },
];

const Carousel = () => {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);

  return (
    <section className={styles.carouselWrapper}>
      <h2 className={styles.title}>What Khidmat e Khalq do?</h2>
      <p className={styles.description}>
        Together, we can build a brighter future, one initiative at a time. Join
        us in our mission to uplift and empower communities!
      </p>
      <div className={styles.carouselContainer}>
        <motion.div
          ref={carouselRef}
          className={styles.carousel}
          drag="x"
          dragConstraints={{ left: -width, right: 0 }}
          animate={controls}
        >
          {[...cards, ...cards].map((card, index) => (
            <motion.div key={index} className={styles.carouselCard}>
              <Image
                src={card.image}
                alt={card.name}
                width={400} 
                height={400}
                className={styles.cardImage}
                priority 
              />
              <div className={styles.cardFooter}>
                <h2 className={styles.cardTitle}>{card.name}</h2>
                <button className={styles.linkButton}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <path
                      d="M11.2375 3.5889L2.19178 12.6347C2.03838 12.7881 1.83032 12.8742 1.61338 12.8742C1.39644 12.8742 1.18838 12.7881 1.03498 12.6347C0.881583 12.4813 0.795403 12.2732 0.795402 12.0563L1.0454 12.0563L0.795403 12.0563C0.795403 11.8393 0.881582 11.6313 1.03498 11.4779L10.0807 2.43211L5.62963 2.43281L5.62959 2.43281C5.41246 2.43281 5.20422 2.34656 5.05069 2.19302C4.89715 2.03949 4.8109 1.83125 4.8109 1.61412C4.8109 1.39699 4.89715 1.18875 5.05069 1.03521C5.12671 0.959189 5.21696 0.898884 5.31629 0.857741C5.41562 0.816598 5.52208 0.795421 5.62959 0.795421L12.0552 0.795422L12.0555 0.795421C12.163 0.795327 12.2695 0.816418 12.3688 0.857488C12.4682 0.898599 12.5586 0.958922 12.6346 1.035C12.7107 1.11108 12.7711 1.20142 12.8122 1.30085C12.8532 1.40021 12.8743 1.5067 12.8742 1.61421L12.8742 1.61412L11.2375 3.5889ZM11.2375 3.5889L11.2368 8.04002L11.2368 8.04006C11.2368 8.25719 11.3231 8.46543 11.4766 8.61896C11.6302 8.7725 11.8384 8.85875 12.0555 8.85875C12.2727 8.85875 12.4809 8.7725 12.6344 8.61896C12.788 8.46543 12.8742 8.25719 12.8742 8.04006L12.8742 1.61443L11.2375 3.5889Z"
                      stroke="#B89A5C"
                      strokeWidth="0.5"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
       <Button button_text="Get Involved" button_url="www.get-involve.com" />
      </section>
  );
};

export default Carousel;
