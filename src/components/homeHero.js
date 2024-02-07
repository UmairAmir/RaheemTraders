// HeroSection.jsx

import React from 'react';
import styles from '../styles/HomeHero.module.css';

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.content}>
        <div className={styles.overlay}></div>
        <div className={styles.text}>
          <h1>Al Rahim</h1>
          <p>We are proud to be your go-to destination for top-quality tractors and comprehensive services. As an authorized sellers, we bring you cutting-edge agricultural solutions designed to meet the demands of modern farming.</p>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
