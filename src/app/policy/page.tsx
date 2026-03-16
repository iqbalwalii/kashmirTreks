"use client";
import React from "react";
import { Container, Accordion } from "react-bootstrap";

export default function PolicyPage() {
  return (
    <Container style={{ marginTop: "6rem" }}>
      <h1>Tour Policies</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Privacy Policy</Accordion.Header>
          <Accordion.Body>
            <p>
              Mount Eco respects your privacy and recognizes the need to protect
              the personally identifiable information you share with us. We
              assure you that we follow appropriate standards when it comes to
              protecting your privacy on our websites.
              <br />
              <br />
              We collect information that you voluntarily disclose to us,
              including but not limited to name, address, phone, and email. We
              will not share or sell that information with any other
              company/entity for commercial purposes.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Terms and Conditions</Accordion.Header>
          <Accordion.Body>
            Please read the following booking agreement terms and conditions
            carefully. By booking a tour with us, you are accepting and
            consenting to The Agreement. If you do not agree to the Terms and
            Conditions, you must not make any booking with us.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Photographs</Accordion.Header>
          <Accordion.Body>
            <p>
              Our guides may take photographs in the course of their leading our
              treks. We may sometimes include these photos on our website. We
              will honor any request by a client to not have her or his photo so
              utilized.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Reservations and Payments</Accordion.Header>
          <Accordion.Body>
            <p>
              To register for a Mount Eco tour, submit a form on our website. A
              30% deposit of the tour will be charged in order to hold your
              spot; payment can be made by PayPal or bank-transfer. The balance
              of your payment is due 90 days prior to departure. All prices are
              in Indian Rupee (INR).
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Cancellations and Refunds</Accordion.Header>
          <Accordion.Body>
            <p>
              Cancellations prior to 90 days — full refund. Cancellation
              between 60 and 40 days — 50% refund. Cancellation less than 40
              days — no refund.
              <br />
              <br />
              <b>Covid-19:</b> Clients are entitled to a full refund only if
              the cancellation is solely related to the Covid-19 pandemic. Trips
              can also be rescheduled without any extra charge.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Travel Documents</Accordion.Header>
          <Accordion.Body>
            <p>
              The client must be in possession of a valid passport (for Indians
              a valid ID card) and all visas required for the whole of the
              journey.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Travel Insurance</Accordion.Header>
          <Accordion.Body>
            <p>
              It is the client&apos;s responsibility for obtaining sufficient
              personal travel insurance. We recommend World Nomads as a travel
              Insurance Partner.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>Force Majeure</Accordion.Header>
          <Accordion.Body>
            <p>
              Mount Eco shall not be responsible for events beyond its control,
              such as acts of God, strikes, acts of war, terrorism, government
              restrictions, natural or nuclear activity, epidemic, pandemic,
              adverse weather conditions, or other similar events outside our
              control.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
