import React from "react";
import Image from "next/image";
import styles from "./goalsgrid.module.scss";
import Button from "../../globals/headerSection/Button";

const GoalsGrid = ({ gridData }) => {
  return (
    <section className={styles.goalsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>17 Sustainable Development Goals</h2>
        <p className={styles.description}>
        Together, we can build a brighter future, one initiative at a time. Join us in our mission to uplift and empower communities!
        </p>

        <div className={styles.gridContainer}>
          {gridData.map((goal) => (
            <div key={goal.id} className={styles.gridItem}>
              <div className={styles.imageContainer}>
                <Image
                  src={goal.image}
                  alt={goal.title}
                  width={500} 
                  height={450} 
                  className={styles.bgImage}
                  priority
                />

                <div className={styles.imageWrapper}>
                  <Image
                    src={goal.icon}
                    alt={`${goal.title} Icon`}
                    width={96}
                    height={96}
                    className={styles.icon}
                    priority
                  />
                </div>

                <div className={styles.overlay}>
                  <h4 className={styles.overlayTitle}>{goal.title}</h4>
                  <p className={styles.overlayDescription}>
                    {goal.description}
                  </p>
                  <div className={styles.borderLine}></div>

                  <div className={styles.innerGrid}>
                    <div>
                      <strong>{goal.targets}</strong> <br></br><span>Targets</span>
                    </div>
                    <div>
                      <strong>{goal.events}</strong> <br></br><span>Events</span>
                    </div>
                    <div>
                      <strong>{goal.publications}</strong>{" "}
                      <br></br><span>Publications</span>
                    </div>
                    <div>
                      <strong>{goal.applications}</strong>{" "}
                      <br></br><span>Applications</span>
                    </div>
                  </div>

                  <button className={styles.ctaButton}>More Info</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.buttonWrapper}>
          <Button button_text="Show All" button_url="/goals" />
        </div>
      </div>
    </section>
  );
};

export default GoalsGrid;
