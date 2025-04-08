import React from "react";
import styles from "./Footer.module.scss";
import Logo from "../headerSection/Logo";
import { FaYoutube, FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerColumn}>
          <Logo className={styles.footerLogo} />
            <h4 className={styles.logoHeading}>Khidmat e Khalq</h4>
            <p>Your involvement helps us deliver hope and support to individuals facing challenges every day.</p>
            <ul className={styles.socialIcons}>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaTiktok />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>Get in touch</h4>
            <ul>
              <li><a href="#">khidmatekhalq@gmail.com</a></li>
              <li><a href="#">+92 312 7865387</a></li>
              <li><a href="#">Abc Street, Xyz Building, City.</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Register as Employee</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy & Policy</a></li>
              <li><a href="#">Campaign with us</a></li>
              <li><a href="#">Our Programs</a></li>
              <li><a href="#">About us</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>Media</h4>
            <ul>
              <li><a href="#">News Alerts</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Articles</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Gallery</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>Get Involved</h4>
            <ul>
              <li><a href="#">Orphans Care</a></li>
              <li><a href="#">Water Supply</a></li>
              <li><a href="#">Disaster Rescue Team</a></li>
              <li><a href="#">Ambulance</a></li>
              <li><a href="#">Register as Volunteer</a></li>
              <li><a href="#">Medical Camps</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.container}>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} Your Company. All Rights Reserved.
        </div>
        <div className={styles.footerLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
