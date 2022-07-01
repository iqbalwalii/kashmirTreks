import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <Row className={styles.main}>
      <Col>
        <h4 className="text-center">ADDRESS INFO</h4>
        <ul className="list-unstyled">
          <li className="text-center">Manigam, Ganderbal,</li>
          <li className="text-center">Kashmir, India-191201.</li>
          <li className="text-center"> +91 1942951515 </li>
          <li className="text-center">+91 9906421796</li>
          <li className="text-center">
            <a href="mailto:info@kashmirtreks.com">info@kashmirtreks.com</a>
          </li>
          <li className="text-center">
            <Image src="/assets/images/partners.png" width={150} height={100} />
          </li>
        </ul>
      </Col>

      <Col>
        <h4 className="text-center">USEFUL LINKS</h4>
        <ul className="list-unstyled">
          <li className="text-center">Car Rental</li>
          <li className="text-center">Weather and Climate</li>
          <li className="text-center">Protect Environment</li>
          <li className="text-center">Trekking grades</li>
          <li className="text-center">Visa Information</li>
        </ul>
      </Col>
      <Col>
        <h4 className="text-center">GET IN TOUCH</h4>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicName" className="my-2">
            <Form.Control type="text" placeholder="Enter Your Name" />
          </Form.Group>
          <div className="d-grid">
            <Button>Subscribe for Updates</Button>
          </div>
        </Form>
      </Col>
      <Col>
        <h4 className="text-center">FOLLOW US</h4>
        <ul className="list-unstyled">
          <li className="text-center">Instagram</li>
          <li className="text-center">Facebook</li>
          <li className="text-center">Twitter</li>
          <li className="text-center">Pinterest</li>
        </ul>
      </Col>
    </Row>
  );
};

export default Footer;
