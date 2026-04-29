"use client";
import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <Row className={styles.main}>
        <Col xs={12} md={3} className="p-3">
          <h4 className="text-center">ADDRESS INFO</h4>
          <ul className="list-unstyled">
            <li className="text-center">Anantnag, KP Road,</li>
            <li className="text-center">Kashmir, India-191201.</li>
            <li className="text-center"> +91 6005566568</li>
            <li className="text-center"> +91 9149760698</li>
            <li className="text-center">
              <a href="mailto:queries@mounteco.in">queries@mounteco.in</a>
            </li>
            {/* <li className="text-center">
            <Image
              src="/assets/images/partners.png"
              width={150}
              height={100}
              alt="logo"
            />
          </li> */}
          </ul>
        </Col>

        <Col xs={12} md={3} className="p-3">
          <h4 className="text-center ">USEFUL LINKS</h4>
          <ul className="list-unstyled ">
            <li className="text-center">
              <Link href="/holidays" className="reservedLinks">
                Holidays
              </Link>
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
            <li className="text-center">
              <Link href="/imprint" className="reservedLinks">
                Imprint
              </Link>
            </li>
            <li className="text-center">
              <Link href="/policy" className="reservedLinks">
                Tour Policies
              </Link>
            </li>
            <li className="text-center">
              <Link href="/faq" className="reservedLinks">
                FAQ&apos;s
              </Link>
            </li>
            <li className="text-center">
              <a
                href="https://indianvisaonline.gov.in/evisa/tvoa.html"
                className="reservedLinks"
                target="_blank"
              >
                Visa Info
              </a>
            </li>
          </ul>
        </Col>
        <Col xs={12} md={3} className="` p-3">
          <h4 className="text-center">GET IN TOUCH</h4>
          <Form
            action="https://api.web3forms.com/submit"
            method="post"
            className="d-flex flex-column align-items-center"
          >
            <input
              type="hidden"
              name="access_key"
              value="5907f1cf-42bb-4c84-bc3a-c9f1a150daba"
            ></input>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicName" className="my-2">
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                name="name"
                required
              />
            </Form.Group>
            <div className="d-grid">
              <Button variant="warning" type="submit">
                Subscribe for Updates
              </Button>
            </div>
          </Form>
        </Col>
        <Col xs={12} md={3} className="p-3">
          <h4 className="text-center">FOLLOW US</h4>
          <ul className="list-unstyled">
            <li className="text-center">
              <a href="https://instagram.com/mount_eco_tour_and_travel">
                Instagram
              </a>
            </li>
            <li className="text-center">Facebook</li>
            <li className="text-center">Twitter</li>
            <li className="text-center">Pinterest</li>
          </ul>
        </Col>
      </Row>
      <div
        style={{
          background: "#060f07",
          borderTop: "1px solid #1a3a20",
          padding: "0.6rem 1rem",
          textAlign: "center",
          fontSize: "0.78rem",
          color: "#5a8a6a",
          letterSpacing: "0.03em",
        }}
      >
        Designed &amp; built by{" "}
        <a
          href="https://dropoutdevs.in"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#e8a020",
            fontWeight: 600,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.3rem",
          }}
        >
          <Image
            src="/assets/images/dropout.svg"
            alt="dropoutdevs"
            width={16}
            height={16}
            style={{ display: "inline", verticalAlign: "middle" }}
          />
          dropoutdevs
        </a>
      </div>
    </>
  );
};

export default Footer;
