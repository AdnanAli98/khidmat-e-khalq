"use client";

import React, { useEffect, useState } from "react";
import styles from "./CounterSection.module.scss";

const Counter = ({ value, postfix, text }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let duration = 2000; 
    let stepTime = Math.max(10, duration / end); 
    let step = Math.ceil(end / 100); 

    let timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className={styles.counterItem}>
      <h2 className={styles.number}>{count}{postfix}</h2>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

const CounterSection = () => {
  const counters = [
    { value: 20, postfix: "M+", text: "Lives Impacted" },
    { value: 19, postfix: "K+", text: "Water Projects" },
    { value: 29, postfix: "K+", text: "Orphans Sponsored" },
    { value: 1, postfix: "K+", text: "Academic Scholarships" },
    { value: 67, postfix: "K+", text: "K-e-K Volunteers" },
  ];

  return (
    <section className={styles.counterSection}>
      <div className={styles.container}>
        {counters.map((counter, index) => (
          <Counter key={index} value={counter.value} postfix={counter.postfix} text={counter.text} />
        ))}
      </div>
    </section>
  );
};

export default CounterSection;
