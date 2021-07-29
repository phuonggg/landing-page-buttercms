import React from "react";
import { Col } from "react-bootstrap";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <Col className={styles.footer}>
      <div className={styles.footerItem}>Terms</div>
      <div className={styles.footerItem}>Privacy policy</div>
      <div className={styles.footerItem}>Contact</div>
      <div className={styles.footerItem}>hello@xplenty.com</div>
    </Col>
  );
};
export default Footer;
