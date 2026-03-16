"use client";
import React from "react";
import holidays from "../../../data/treks";
import { useParams, useRouter } from "next/navigation";
import { Row, Col, Container, Accordion, Button, Spinner } from "react-bootstrap";

export default function TrekPage() {
  const params = useParams();
  const router = useRouter();
  const trip = params.trek as string;
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
        <img
          src={destination?.image}
          width="100%"
          height="100%"
          alt="image"
          className="imagehead"
        />
        <div className="dark">
          <div className="d-flex-column justify-content-center align-items-center w-50">
            <h5 className="text-center text">
              {destination?.name}&nbsp;({destination?.stay})
            </h5>
            <div className="d-flex justify-content-center">
              <Button
                className="btn-gold-custom"
                onClick={() => router.push("/book?name=trek")}
              >
                Book Your Slot
              </Button>
            </div>
          </div>
        </div>
      </Row>
      <Row className="activity">
        <Col>
          <h6 className="d-inline text-success"> Arrive:</h6>&nbsp;
          <span>{destination?.arrival}</span>
          <br />
          <h6 className="d-inline text-success"> Deport:</h6>&nbsp;
          {destination?.departure} <br />
          <h6 className="d-inline text-success"> Best Time:</h6>&nbsp;
          {destination?.best_time}
          {destination?.altitude_map && (
            <div className="box my-4">
              <h6>
                <a
                  href={destination?.altitude_map}
                  target="_blank"
                  rel="noreferrer"
                >
                  Altitude Map
                </a>
              </h6>
            </div>
          )}
        </Col>
        <Col>
          <h6 className="d-inline text-success"> Duration:</h6>&nbsp;
          <span>{destination?.duration}</span>
          <br />
          <h6 className="d-inline text-success"> Distance:</h6>&nbsp;
          {destination?.distance} <br />
          <h6 className="d-inline text-success"> Highest Altitude:</h6>&nbsp;
          {destination?.altitude}
        </Col>
        <Col>
          <h6 className="d-inline text-success"> Activity Level:</h6>&nbsp;
          {destination?.level}
        </Col>
      </Row>
      <Container>
        <Container>
          <Row className="mt-5">
            <Col className="mt-5">
              <h1 className="text-center">{destination?.name}</h1>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={6} xs={12}>
              <h3 className="text-center">Introduction</h3>
              {destination?.introduction?.map((para, idx) => (
                <p key={idx}>
                  {para}
                  <br />
                </p>
              ))}
              <h4>
                WHILE PLANNING YOUR TREK, AS A BEGINNER KEEP THE FOLLOWING
                POINTS IN CONSIDERATION
              </h4>
              <ul>
                <li>you feel fit enough to trek for hours.</li>
                <li>you walk two or three kilometers daily.</li>
                <li>you don&apos;t have any breathing problems.</li>
                <li>you are not scared of heights.</li>
              </ul>
            </Col>
            <Col md={6} xs={12}>
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
                      <h6 className="text-success d-inline">Rate:</h6>
                      <span className="text-accent">&nbsp;{plan?.rate}</span>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
              <h3 className="mt-4">Departures</h3>
              <Accordion defaultActiveKey="0">
                {destination?.departures?.map((plan, idx) => (
                  <Accordion.Item eventKey={String(idx)} key={idx}>
                    <Accordion.Header>{plan?.name}</Accordion.Header>
                    <Accordion.Body>
                      <h6 className="text-success">All Slots</h6>
                      <ul>
                        {plan?.dates?.map((hylyt, index) => (
                          <li key={index}>{hylyt}</li>
                        ))}
                      </ul>
                      <p>
                        <span className="text-danger">Note:</span> Book Your
                        Slots 15 days Before Mentioned Date
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
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
          <Row>
            <h2>ITINERARY</h2>
            <Col md={6} xs={12}>
              <h4 className="text-primary-custom">Brief Itinerary</h4>
              <Accordion>
                {destination?.itinerary?.map((incl, idx) => (
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
            <Col>
              <h4>Detailed Itinerary</h4>
              <Accordion>
                {destination?.detailedItinerary?.map((incl, idx) => (
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
          </Row>
          <Row className="mt-5">
            <Col md={6} xs={10} className="cardCenter">
              <h3>WHAT TO CARRY</h3>
              <p>
                The trek is supported by horses. You will need to carry only a
                light sack, weighing about 4-6kg for your items like passport,
                money, and camera gear.
              </p>
              <ul>
                <li>
                  Please note that only postpaid Indian mobile sim cards (Jio,
                  Airtel and BSNL) work in Kashmir Valley.
                </li>
                <li>
                  Please double check your passport or Aadhar numbers before
                  submitting through booking form.
                </li>
              </ul>
            </Col>
            <Col md={6} xs={10} className="cardCenter">
              <ul>
                <li>Passport or a valid ID card</li>
                <li>Duffel Bag 60 liters</li>
                <li>One Pair Trekking Shoes</li>
                <li>One Pair Trail Approach Shoes</li>
                <li>Trekking Pants</li>
                <li>Hooded Rain Jacket</li>
                <li>Shade Hat</li>
                <li>One Pair Sunglasses</li>
                <li>One Pair Liner Gloves</li>
                <li>Small Size Day-Pack</li>
                <li>Two Pair Trekking Socks</li>
                <li>One Pair Sandals</li>
                <li>Extra Warm Clothes</li>
                <li>Warm Hooded Down Jacket</li>
                <li>Sunscreen Cream</li>
                <li>Lip Balm</li>
                <li>Any Personal Medication</li>
              </ul>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={6} xs={10} className="cardCenter">
              <h3>FITNESS</h3>
              <p>
                Mount Eco treks are achievable by anyone with a healthy lifestyle
                and a good level of general fitness. Team members should be
                willing to be part of a team working together to achieve the
                goal of the expedition.
              </p>
            </Col>
            <Col md={6} xs={10} className="cardCenter">
              <h6>MINIMUM FITNESS REQUIREMENTS</h6>
              <ul>
                <li>Trek: up to 10km per day.</li>
                <li>Daily activity: up to 5 hours&apos; trekking per day.</li>
                <li>Carry: up to 5kg in a day sack.</li>
                <li>
                  Terrain: remote, uneven, snowy, icy, rocky, sometimes exposed
                  terrain at up to 3600m.
                </li>
                <li>
                  Climate: Can be sunny in valleys and cold and windy at
                  Gangabal. Averages are 3000m, 5 to 25C.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
