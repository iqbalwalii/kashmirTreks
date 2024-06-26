import React from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import Head from "next/head";
const contact = () => {
  return (
    <Container>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Row style={{ marginTop: "6rem" }}>
        <Col xs={12} md={6} className="p-3">
          <h2>Contact</h2>
          <Form
            action="https://public.herotofu.com/v1/2c901aa0-0918-11ed-be50-e78da9ee852d"
            method="post"
          >
            <FloatingLabel
              className="mb-2"
              controlId="email"
              label="Enter Email"
            >
              <Form.Control
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                required
              />
            </FloatingLabel>
            <FloatingLabel className="mb-2" controlId="name" label="Enter Name">
              <Form.Control
                type="text"
                name="Name"
                id="Name"
                placeholder="Enter Name"
                required
              />
            </FloatingLabel>
            <FloatingLabel className="mb-2" controlId="subject" label="Subject">
              <Form.Control
                type="text"
                name="subject"
                id="subject"
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
                id="Message"
                placeholder="Message"
                style={{ height: "100px" }}
                required
              />
            </FloatingLabel>
            <div className="d-grid">
              <Button
                type="submit"
                style={{ background: "#5B3511" }}
                className="mt-2 mb-5"
              >
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default contact;
