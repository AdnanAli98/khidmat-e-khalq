import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../headerSection/header.module.scss";

const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <Image src="/logo.png" alt="Khidmat e Khalq" width={90} height={90} priority />
      </Link>
  );
};

export default Logo;
