import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <Row className={styles.navbar}>
      <Col md={7}>
        <div>Xplenty</div>
        <div>Product</div>
        <div>Intergrations</div>
        <div>Solutions</div>
        <div>Resources</div>
      </Col>
      <Col md={5}>
        <div>English</div>
        <div>Sign in</div>
        <div>GET STARTED</div>
      </Col>
    </Row>
  );
};
export default Navbar;
