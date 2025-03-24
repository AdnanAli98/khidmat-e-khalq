import React from "react";
import styles from "./leadership.module.scss";
import Button from "../headerSection/Button";

const LeadershipSection = ({ data = [] }) => {
  return (
    <section className={styles.leadershipSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Executive Leadership</h2>
        <p className={styles.description}>
          Our team of passionate volunteers and dedicated staff work tirelessly
          to ensure that every effort contributes to the well-being of the
          communities we serve.
        </p>

        <div className={styles.leadershipGrid}>
          {data.map((data, index) => (
            <div key={index} className={styles.Item}>
              <img src={data.img} alt="" className={styles.image} />
              <h3 className={styles.leadershipTitle}>{data.heading}</h3>
              <p className={styles.leadershipDescription}>{data.role}</p>
            </div>
          ))}
        </div>
        <div className={styles.buttonWrapper}>
          <Button button_text="View All" button_url="/leaders" />
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
