"use client";
import React from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";

export default function ContactPage() {
  return (
    <Container>
      <Row style={{ marginTop: "6rem" }}>
        <Col xs={12} md={6} className="p-3">
          <h2>Contact</h2>
          <Form action="https://api.web3forms.com/submit" method="post">
            <input
              type="hidden"
              name="access_key"
              value="5907f1cf-42bb-4c84-bc3a-c9f1a150daba"
            ></input>
            <FloatingLabel
              className="mb-2"
              controlId="email"
              label="Enter Email"
            >
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
                required
              />
            </FloatingLabel>
            <FloatingLabel className="mb-2" controlId="name" label="Enter Name">
              <Form.Control
                type="text"
                name="Name"
                placeholder="Enter Name"
                required
              />
            </FloatingLabel>
            <FloatingLabel className="mb-2" controlId="subject" label="Subject">
              <Form.Control
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </FloatingLabel>
            <FloatingLabel
              className="mb-2"
              controlId="message"
              label="Enter Message"
            >
              <Form.Control
                as="textarea"
                name="Message"
                placeholder="Message"
                style={{ height: "100px" }}
                required
              />
            </FloatingLabel>
            <div className="d-grid">
              <Button type="submit" className="btn-accent-custom mt-2 mb-5">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
