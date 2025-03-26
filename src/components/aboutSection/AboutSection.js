"use client";

import styles from "./about.module.scss";
import Button from "../../globals/headerSection/Button";

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About Khidmat-E-Khalq</h2>
        <p className={styles.description}>
          Founded on the principles of empathy and social responsibility, we
          engage in various initiatives aimed at alleviating poverty, improving
          health and education, and fostering sustainable development.Your
          involvement helps us deliver hope and support to individuals facing
          challenges every day.
        </p>
        <div className={styles.imageWrapper}>
          <img
            src="/images/about1.png"
            alt=""
            className={styles.abtImage}
          />  
          <img
            src="/images/about2.png"
            alt=""
            className={styles.abtImage}
          />  
          <img
            src="/images/about3.png"
            alt=""
            className={styles.abtImage}
          />  
        </div>
        <div className={styles.buttonWrapper}>
          <Button button_text="Learn More" button_url="/about" />
        </div>
      </div>
    </section>
  );
};


export default AboutSection;