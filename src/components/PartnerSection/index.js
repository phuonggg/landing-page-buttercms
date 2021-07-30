import React from "react";
import Foxtel from "../../assets/img/partners/foxtel.png";
import Gap from "../../assets/img/partners/gap.png";
import Samsung from "../../assets/img/partners/samsung.png";
import Caterpillar from "../../assets/img/partners/caterpillar.png";
import Ikea from "../../assets/img/partners/ikea.png";
import Sabre from "../../assets/img/partners/sabre.png";
import Deloitte from "../../assets/img/partners/deloitte.png";
import styles from "./index.module.scss";

const PartnerSection = () => {
  return (
    <div className={styles.partnerSection}>
      <div className={styles.message}>TRUSTED BY COMPANIES WORLDWIDE:</div>
      <div className={styles.slider}>
        <div className={styles.partnerItem}>
          <img src={Foxtel} alt="" />
        </div>
        <div className={styles.partnerItem}>
          <img src={Gap} alt="" />
        </div>
        <div className={styles.partnerItem}>
          <img src={Samsung} alt="" />
        </div>
        <div className={styles.partnerItem}>
          <img src={Caterpillar} alt="" />
        </div>
        <div className={styles.partnerItem}>
          <img src={Ikea} alt="" />
        </div>
        <div className={styles.partnerItem}>
          <img src={Sabre} alt="" />
        </div>
        <div className={styles.partnerItem}>
          <img src={Deloitte} alt="" />
        </div>
      </div>
    </div>
  );
};
export default PartnerSection;
