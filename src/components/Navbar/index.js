import React from "react";
import { Col, Row, Dropdown } from "react-bootstrap";
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
        <div className={styles.navItem}>
          <Dropdown>
            <Dropdown.Toggle variant="outline-light">Solutions</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Solution 1 </Dropdown.Item>
              <Dropdown.Item>Solution 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className={styles.navItem}>
          <Dropdown>
            <Dropdown.Toggle variant="outline-light">Resourses</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Resources 1</Dropdown.Item>
              <Dropdown.Item>Resources 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Col>
      <Col md={5} className={styles.rightSide}>
        <div className={styles.navItem}>
          <Dropdown>
            <Dropdown.Toggle variant="outline-light">English</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Japanese</Dropdown.Item>
              <Dropdown.Item>Vietnamese</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className={styles.navItem}>Sign in</div>
        <div className={styles.navButton}>GET STARTED</div>
      </Col>
    </Row>
  );
};
export default Navbar;
