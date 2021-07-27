import React from "react";
import { Col, Row } from "react-bootstrap";
import Logo from "../../assets/img/logo.png";
import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <Row className={styles.navbar}>
      <Col md={7} className={styles.leftSide}>
        <div className={styles.navItem}>
          <img src={Logo} alt="Logo" />
        </div>
        <div className={styles.navItem}>Product</div>
        <div className={styles.navItem}>Intergrations</div>
        <div className={styles.navItem}>Solutions</div>
        <div className={styles.navItem}>Resources</div>
      </Col>
      <Col md={5} className={styles.rightSide}>
        <div className={styles.navItem}>English</div>
        <div className={styles.navItem}>Sign in</div>
        <div className={styles.navItem}>GET STARTED</div>
      </Col>
    </Row>
  );
};
export default Navbar;
