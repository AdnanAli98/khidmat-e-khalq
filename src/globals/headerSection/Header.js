"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Button from "./Button";
import styles from "./header.module.scss";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    console.log("test", isOpen);
  };

  return (
    <nav className={styles.header}>
      <div className={styles.container}>
        <Logo />

        <div className={styles.desktopMenu}>
          <Menu />
        </div>
        <div className={styles.desktopButton}>
          <Button
            button_text="Join the cause"
            button_url="www.join-the-cause.com"
          />
        </div>

        <div className={styles.hamburger} onClick={toggleDrawer}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </div>

      {isOpen && (
        <div className={styles.backdrop} onClick={toggleDrawer}>
          <div
            className={`${styles.drawer} ${isOpen ? styles.open : ""}`}
            onClick={(e) => e.stopPropagation()} 
          >
            <div className={styles.closeIcon} onClick={toggleDrawer}>
              <FiX size={24} />
            </div>

            <Menu />
            <Button
              button_text="Join the cause"
              button_url="www.join-the-cause.com"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
