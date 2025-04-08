import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.scss";

const Logo = ({ className = "" }) => {
  return (
    <Link href="/" className={`${styles.logo} ${className}`}>
      <Image src="/images/logo.png" alt="Khidmat e Khalq" width={90} height={90} className={styles.logoImage} priority />
      </Link>
  );
};

export default Logo;
