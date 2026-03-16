"use client";
import React from "react";
import holidays from "../../../data/holidays";
import { useParams, useRouter } from "next/navigation";
import { Row, Col, Container, Accordion, Button, Spinner } from "react-bootstrap";

export default function HolidayPage() {
  const params = useParams();
  const router = useRouter();
  const trip = params.holiday as string;
  const destination = holidays[trip];

  if (!destination) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <>
      <Row>
        {destination?.image && (
          <img
            src={destination.image}
            width="100%"
            height="100%"
            alt="image"
            className="imagehead"
          />
        )}
        <div className="dark">
          <div className="d-flex-column justify-content-center align-items-center w-50">
            <h5 className="text-center text">{destination?.alternate}</h5>
            <div className="d-flex justify-content-center">
              <Button
                className="btn-gold-custom"
                onClick={() => router.push("/book?name=tour")}
              >
                Book Your Slot
              </Button>
            </div>
          </div>
        </div>
      </Row>
      <Container>
        <Row className="mt-5">
          <Col className="mt-5">
            <h1 className="text-center">{destination?.name}</h1>
            <p className="text-center">{destination?.stay}</p>
          </Col>
        </Row>
        <Row className="mt-5">
          {destination?.sightseeings ? (
            <>
              <Col md={4} xs={12}>
                <h3 className="text-center">Introduction</h3>
                {destination?.introduction?.map((para, idx) => (
                  <p key={idx}>
                    {para}
                    <br />
                  </p>
                ))}
              </Col>
              <Col md={4} xs={12}>
                <h3 className="text-center">Sightseeings</h3>
                {destination?.sightseeings?.map((para, idx) => (
                  <p key={idx}>
                    {para}
                    <br />
                  </p>
                ))}
              </Col>
              <Col md={4} xs={12}>
                <h3>Price Per Person</h3>
                <span>(inclusive of all taxes)</span>
                <Accordion defaultActiveKey="0">
                  {destination?.plans?.map((plan, idx) => (
                    <Accordion.Item eventKey={String(idx)} key={idx}>
                      <Accordion.Header>{plan?.name}</Accordion.Header>
                      <Accordion.Body>
                        <h6 className="text-success">Highlights</h6>
                        <ul>
                          {plan?.highlights?.map((hylyt, index) => (
                            <li key={index}>{hylyt}</li>
                          ))}
                        </ul>
                        <h6 className="text-success">Accommodations</h6>
                        <ul>
                          {plan?.Accomodations?.map((hylyt, index) => (
                            <li key={index}>{hylyt}</li>
                          ))}
                        </ul>
                        <h6 className="text-success">Rate:</h6>
                        <p>{plan?.rate}</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </Col>
            </>
          ) : (
            <>
              <Col md={6} xs={12}>
                <h3 className="text-center">Introduction</h3>
                {destination?.introduction?.map((para, idx) => (
                  <p key={idx}>
                    {para}
                    <br />
                  </p>
                ))}
              </Col>
              <Col md={6} xs={12}>
                <h3>Price Per Person</h3>
                <span>(inclusive of all taxes)</span>
                <Accordion defaultActiveKey="0">
                  {destination?.plans?.map((plan, idx) => (
                    <Accordion.Item eventKey={String(idx)} key={idx}>
                      <Accordion.Header>{plan?.name}</Accordion.Header>
                      <Accordion.Body>
                        <h6 className="text-success d-inline">Rate:</h6>
                        <span className="text-accent">&nbsp;{plan?.rate}</span>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </Col>
            </>
          )}
        </Row>
        <Row className="my-5">
          <Col md={6} xs={12}>
            <h4 className="text-center text-primary-custom">
              What&apos;s Included in the Price?
            </h4>
            <ul>
              {destination?.inclusions?.map((incl, idx) => (
                <li key={idx}>{incl}</li>
              ))}
            </ul>
          </Col>
          <Col md={6} xs={12}>
            <h4 style={{ color: "red" }} className="text-center">
              What&apos;s Not Included in the Price?
            </h4>
            <ul>
              {destination?.exclusions?.map((incl, idx) => (
                <li key={idx}>{incl}</li>
              ))}
            </ul>
          </Col>
        </Row>
        {(destination?.itinerary?.length > 0 || destination?.detailedItinerary?.length > 0) && (
          <Row>
            <h2>ITINERARY</h2>
            {destination?.itinerary?.length > 0 && (
              <Col md={6} xs={12}>
                <h4 className="text-primary-custom">Brief Itinerary</h4>
                <Accordion>
                  {destination.itinerary.map((incl, idx) => (
                    <Accordion.Item eventKey={String(idx)} key={idx}>
                      <Accordion.Header>
                        Day {idx + 1}: {incl?.name}
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          {incl?.items?.map((val, idx) => (
                            <li key={idx}>{val}</li>
                          ))}
                        </ul>
                        ({incl?.description})
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </Col>
            )}
            {destination?.detailedItinerary?.length > 0 && (
              <Col>
                <h4>Detailed Itinerary</h4>
                <Accordion>
                  {destination.detailedItinerary.map((incl, idx) => (
                    <Accordion.Item eventKey={String(idx)} key={idx}>
                      <Accordion.Header>
                        Day {idx + 1}: {incl?.name}
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>{incl}</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </Col>
            )}
          </Row>
        )}
      </Container>
    </>
  );
}
