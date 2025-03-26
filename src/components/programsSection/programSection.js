import React from "react";
import styles from "./program.module.scss";
import Link from "next/link";
import Button from "../../app/globals/headerSection/Button";

const ProgramSection = ({ programs = [] }) => {
  return (
    <section className={styles.programSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Projects & Programs</h2>
        <p className={styles.description}>
          Together, we can build a brighter future, one initiative at a time. Join us in our mission to uplift and empower communities!
        </p>

        <div className={styles.programGrid}>
          {programs.map((program, index) => (
            <div key={index} className={styles.programItem}>
              <div className={styles.imageWrapper}>
                <img src={program.img} alt={program.heading} className={styles.image} />
              </div>
              <div className={styles.programContent}>
                <h3 className={styles.programTitle}>{program.heading}</h3>
                <p className={styles.programDescription}>{program.description}</p>
                <Link href={program.link} className={styles.programLink}>Learn More</Link>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.buttonWrapper}>
          <Button button_text="Campaign with us" button_url="/programs" />
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
