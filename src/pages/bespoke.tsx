import React from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
const bespoke = () => {
  return (
    <Container>
      <Row style={{ marginTop: "6rem" }}>
        <Col md={6} xs={10} className="cardCenter ">
          <h2>BESPOKE FULL SERVICE ITINERARY</h2>
          <p>
            The foundation of Kashmir Treks is based on the bespoke travel
            services in Kashmir. We create tailor-made luxury travel itineraries
            to make you unleash your wildest adventure ambitions and the true
            experience to visit Kashmir exactly what you expected and more.
          </p>
          <p>
            We’ve been exploring the remote corners of this Himalayan country
            and are fully aware of its adventures and challenges. We present to
            you our exclusive bespoke service. Our expertise in the field will
            make your Kashmir experience unique and memorable. We will plan your
            tour in detail based on your needs and wishes. We customize
            itineraries for individuals, group escapes, exquisite proposals,
            wilderness weddings, personal honeymoons to family adventures,
            crafting every moment of your stay.
          </p>
        </Col>
        <Col>
          <h5>Let&apos;s Design your Tour</h5>
          <Form
            action="https://public.herotofu.com/v1/0e6ef160-0849-11ed-be50-e78da9ee852d"
            method="post"
          >
            <FloatingLabel controlId="floatingName" label="your Name">
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                className="mb-2"
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingTextarea2" label="your Email">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                className="mb-2"
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingTextarea2" label="nationality">
              <Form.Control
                type="text"
                placeholder="nationality"
                className="mb-2"
                name="nationality"
                id="nationality"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="your Message">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                name="message"
                id="message"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <Button variant="success" type="submit" className="mt-2">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default bespoke;
