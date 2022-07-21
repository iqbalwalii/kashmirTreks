import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <Row className={styles.main}>
      <Col>
        <h4 className="text-center">ADDRESS INFO</h4>
        <ul className="list-unstyled">
          <li className="text-center">Manigam, Ganderbal,</li>
          <li className="text-center">Kashmir, India-191201.</li>
          <li className="text-center"> +91 6005702825</li>
          <li className="text-center">+91 9596979729</li>
          <li className="text-center">
            <a href="mailto:info@kashmirtreks.com">kashmirensueno@gmail.com</a>
          </li>
          <li className="text-center">
            <Image src="/assets/images/partners.png" width={150} height={100} />
          </li>
        </ul>
      </Col>

      <Col>
        <h4 className="text-center ">USEFUL LINKS</h4>
        <ul className="list-unstyled ">
          <li className="text-center">
            <Link href="/holidays">Holidays</Link>
          </li>
          <li className="text-center">
            <Link href="/treks" className="reservedLinks">
              Treks
            </Link>
          </li>
          <li className="text-center">
            <Link href="/bespoke" className="reservedLinks">
              Bespoke
            </Link>
          </li>
          <li className="text-center">
            <Link href="/contact" className="reservedLinks">
              Contact
            </Link>
          </li>
        </ul>
      </Col>
      <Col>
        <h4 className="text-center">GET IN TOUCH</h4>
        <Form
          action="https://public.herotofu.com/v1/feb7c820-084b-11ed-be50-e78da9ee852d"
          method="post"
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              id="email"
            />
          </Form.Group>
          <Form.Group controlId="formBasicName" className="my-2">
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              name="name"
              id="name"
            />
          </Form.Group>
          <div className="d-grid">
            <Button variant="warning" type="submit">
              Subscribe for Updates
            </Button>
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
