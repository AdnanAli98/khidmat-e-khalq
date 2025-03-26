import React from "react";
import styles from "./header.module.scss";

const Menu = () => {
  return (
    <ul className={styles.menu}>
      <li>Projects</li>
      <li>Wash</li>
      <li>Health</li>
      <li>Rescue</li>
      <li>Education</li>
      <li>Volunteer</li>
      <li>Youth Empower</li>
      <li>Media</li>
    </ul>
  );
};

export default Menu;