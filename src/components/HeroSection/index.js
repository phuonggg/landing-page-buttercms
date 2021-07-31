import React from "react";

import styles from "./index.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.heroImage}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            Line 44:6: React Hook useEffect has a missing dependency:
            'fetchData'. Either include it or remove the dependency array
            react-hooks/exhaustive-deps
          </div>
          <div className={styles.heroButton}></div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
