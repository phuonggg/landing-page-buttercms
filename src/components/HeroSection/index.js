import React from "react";
import Blue from "../../assets/img/hero/blue.png";
import Purple from "../../assets/img/hero/purple.png";
import styles from "./index.module.scss";

const HeroSection = ({ heading }) => {
  return (
    <div onMouseover className={styles.heroSection}>
      <div className={styles.container}>
        <img className={styles.blueImg} src={Blue} alt="" />
        <img className={styles.purpleImg} src={Purple} alt="" />
        <div className={styles.heroContent}>
          <div className={styles.heroText}>{heading}</div>
          <div className={styles.buttonsContainer}>
            <div className={styles.heroButtonLeft}>SECURE MY DATA</div>
            <div className={styles.heroButtonRight}>TAKE A CHANCE</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
