import React from "react";
import Link from "next/link"; 

const Button = ({ button_text, button_url, className = "" }) => {
  return (
    <Link href={button_url} passHref>
      <button className={`button ${className}`}>{button_text}</button>
    </Link>
  );
};

export default Button;
