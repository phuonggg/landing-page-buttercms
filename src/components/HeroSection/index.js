import React from "react";
import Blue from "../../assets/img/hero/blue.png";
import Purple from "../../assets/img/hero/purple.png";
import styles from "./index.module.scss";

const HeroSection = ({ heading }) => {
  return (
    <div onMouseover className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.imgFrame}>
          <img
            className={styles.blueImg}
            // onMouseOver={(e) => (e.currentTarget.src = Purple)}
            // onMouseOut={(e) => (e.currentTarget.src = Blue)}
            src={Blue}
            alt=""
          />
          <img
            className={styles.purpleImg}
            // onMouseOver={(e) => (e.currentTarget.src = Purple)}
            // onMouseOut={(e) => (e.currentTarget.src = Blue)}
            src={Purple}
            alt=""
          />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>{heading}</div>
          <div className={styles.heroButton}>SECURE MY DATA</div>
          <div className={styles.heroButton}>TAKE A CHANCE</div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
