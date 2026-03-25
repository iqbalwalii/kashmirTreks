"use client";
import React from "react";
import Link from "next/link";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";

export default function BespokePage() {
  return (
    <Container>
      <Row style={{ marginTop: "6rem" }}>
        <Col md={6} xs={10} className="cardCenter pt-3">
          <h2>BESPOKE FULL SERVICE ITINERARY</h2>
          <p>
            The foundation of Mount Eco is based on bespoke travel services
            in Kashmir. We create tailor-made luxury travel itineraries to make
            you unleash your wildest adventure ambitions and the true experience
            to visit Kashmir exactly what you expected and more.
          </p>
          <p>
            Not sure where to start? Browse our ready-made{" "}
            <Link href="/holidays" className="link">Kashmir holiday packages</Link> covering{" "}
            <Link href="/holidays/gulmarg_family_ski_holiday" className="link">Gulmarg skiing</Link>,{" "}
            <Link href="/holidays/kashmir_tulip_package" className="link">tulip garden tours</Link>,{" "}
            <Link href="/holidays/srinagar_leh_nubra_tour" className="link">Ladakh trips</Link>, and{" "}
            <Link href="/holidays/kashmir_paradise_tour" className="link">Pahalgam tours</Link> —
            or explore our <Link href="/treks" className="link">Himalayan trekking routes</Link> including
            the <Link href="/treks/kashmir_great_lakes_trek" className="link">Great Lakes Trek</Link> and{" "}
            <Link href="/treks/tarsar_marsar_trek" className="link">Tarsar Marsar Trek</Link>.
          </p>
          <p>
            We customise itineraries for individuals, group escapes, honeymoons, and family
            adventures — crafting every moment of your Kashmir stay.
          </p>
        </Col>
        <Col className="p-5 pt-3">
          <h4>Let&apos;s Design your Tour</h4>
          <Form action="https://api.web3forms.com/submit" method="post">
            <input
              type="hidden"
              name="access_key"
              value="dc8a5361-f98c-4017-8c31-a4109c58764c"
            ></input>
            <FloatingLabel controlId="floatingName" label="your Name">
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                className="mb-2"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingEmail" label="your Email">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                className="mb-2"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingNationality" label="nationality">
              <Form.Control
                type="text"
                placeholder="nationality"
                className="mb-2"
                name="nationality"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingMessage" label="your Message">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                name="message"
                style={{ height: "180px" }}
              />
            </FloatingLabel>
            <div className="d-grid">
              <Button
                variant="success"
                type="submit"
                className="mt-2 btn-primary-custom"
              >
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
