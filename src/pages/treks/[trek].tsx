import React from "react";
import { useEffect, useState } from "react";
import holidays from "../../data/treks";
import {
  Row,
  Col,
  Container,
  Accordion,
  Button,
  Spinner,
} from "react-bootstrap";
import Link from "next/link";
const Treks = ({ holiday }) => {
  const trip = holiday.trek;
  const [destination, setDestination] = useState(holidays[trip]);
  useEffect(() => {
    setDestination(holidays[trip]);
  }, [trip]);

  console.log(holiday);
  return destination === undefined || null ? (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  ) : (
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
              {destination?.name}
              &nbsp;({destination?.stay})
            </h5>

            <Link href="/book">
              <Button variant="warning">Book Now</Button>
            </Link>
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
          <div className="box mt-2">
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
        </Col>
        <Col>
          <h6 className="d-inline text-success"> Duration:</h6>&nbsp;
          <span>{destination?.duration}</span>
          <br />
          <h6 className="d-inline text-success"> Distance:</h6>&nbsp;
          {destination?.distance} <br />
          <h6 className="d-inline text-success"> Highest Altitude:</h6>
          &nbsp;
          {destination?.altitude}
        </Col>
        <Col>
          <h6 className="d-inline text-success"> Activity Level:</h6>&nbsp;{" "}
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
              {destination?.introduction?.map((para, idx) => {
                return (
                  <p key={idx}>
                    {para}
                    <br />
                  </p>
                );
              })}
              <h4>
                WHILE PLANNING YOUR TREK, AS A BEGINNER KEEP THE FOLLOWING
                POINTS IN CONSIDERATION
              </h4>
              <ul>
                <li>you feel fit enough to trek for hours.</li>
                <li>you walk two or three kilometers daily.</li>
                <li>you don’t have any breathing problems.</li>
                <li>you are not scared of heights.</li>
              </ul>
            </Col>
            <Col md={6} xs={12}>
              <h3>Price Per Person </h3>
              <span>(inclusive of all taxes)</span>
              <Accordion defaultActiveKey="0">
                {destination?.plans?.map((plan, idx) => {
                  return (
                    <Accordion.Item eventKey={idx} key={idx}>
                      <Accordion.Header>{plan?.name}</Accordion.Header>
                      <Accordion.Body>
                        <h6 style={{ color: "green" }}>Highlights</h6>
                        <ul className="list-styled">
                          {plan?.highlights?.map((hylyt, index) => {
                            return <li key={index}>{hylyt}</li>;
                          })}
                        </ul>
                        <h6 style={{ color: "green" }}>Accomodations</h6>
                        <ul className="list-styled">
                          {plan?.Accomodations?.map((hylyt, index) => {
                            return <li key={index}>{hylyt}</li>;
                          })}
                        </ul>
                        <h6 style={{ color: "green", display: "inline" }}>
                          Rate :
                        </h6>
                        <span style={{ color: "#5B3511" }}>
                          &nbsp;{plan?.rate}
                        </span>
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
              <h3 className="mt-4">Departures</h3>
              <Accordion defaultActiveKey="0">
                {destination?.departures?.map((plan, idx) => {
                  return (
                    <Accordion.Item eventKey={idx} key={idx}>
                      <Accordion.Header>{plan?.name}</Accordion.Header>
                      <Accordion.Body>
                        <h6 style={{ color: "green" }}>All Slots</h6>
                        <ul className="list-styled">
                          {plan?.dates?.map((hylyt, index) => {
                            return <li key={index}>{hylyt}</li>;
                          })}
                        </ul>
                        <p>
                          <span className="text-danger">Note:</span> Book Your
                          Slots 15 days Before Mentioned Date
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </Col>
          </Row>
          <Row className="my-5">
            <Col md={6} xs={12}>
              <h4 style={{ color: "#004220" }} className="text-center">
                What&apos;s Included in the Price?
              </h4>
              <ul>
                {destination?.inclusions?.map((incl, idx) => {
                  return <li key={idx}>{incl}</li>;
                })}
              </ul>
            </Col>
            <Col md={6} xs={12}>
              <h4 style={{ color: "red" }} className="text-center">
                What&apos;s Not Included in the Price?
              </h4>
              <ul>
                {destination?.exclusions?.map((incl, idx) => {
                  return <li key={idx}>{incl}</li>;
                })}
              </ul>
            </Col>
          </Row>
          <Row>
            <h2>ITINERARY</h2>
            <Col md={6} xs={12}>
              <h4 style={{ color: "#004220" }}>Brief Itenerary</h4>
              <Accordion>
                {destination?.itinerary?.map((incl, idx) => {
                  return (
                    <Accordion.Item eventKey={idx} key={idx}>
                      <Accordion.Header>
                        Day {idx + 1}: {incl?.name}
                      </Accordion.Header>

                      <Accordion.Body>
                        <ul>
                          {incl?.items?.map((val, idx) => {
                            return <li key={idx}>{val}</li>;
                          })}
                        </ul>
                        ({incl?.description})
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </Col>
            <Col>
              <h4>Detailed Itnerary</h4>
              <Accordion>
                {destination?.detailedItinerary?.map((incl, idx) => {
                  return (
                    <Accordion.Item eventKey={idx} key={idx}>
                      <Accordion.Header>
                        Day {idx + 1}: {incl?.name}
                      </Accordion.Header>

                      <Accordion.Body>
                        <p>{incl}</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={6} xs={10} className="cardCenter">
              <h3>WHAT TO CARRY</h3>
              <p>
                The trek is supported by horses. You will need to carry only a
                light sack, weighing about 4-6kg for your items like passport,
                money, and camera gear. The following is a list of the items you
                should carry on the trek. If you have items that can not be used
                on the trek, you can store them at our houseboat or our office
                and take them back after returning from the trek.
              </p>
              <ul>
                <li>
                  Please note that only postpaid Indian mobile sim cards (Jio,
                  Airtel and BSNL) work in Kashmir Valley. There’s no cellular
                  connectivity from Day 2 to Day 6 of the trek.
                </li>
                <li>
                  Please double check your passport or Aadhar numbers before
                  submitting through booking form. These numbers are required
                  for preparation of trek permits.
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
                Kashmir Ensueno are achievable by anyone with a healthy
                lifestyle and a good level of general fitness. Team members
                should be willing to be part of a team working together to
                achieve the goal of the expedition. As a team member, you should
                have an adventurous and robust spirit. The biggest challenge on
                this expedition is the first part of the trek across alpine
                terrain, much of which at altitudes of above 3000m.
              </p>
            </Col>
            <Col md={6} xs={10} className="cardCenter">
              <h6>MINIMUM FITNESS REQUIREMENTS</h6>
              <ul>
                <li>Trek: up to 10km per day.</li>
                <li>Daily activity: up to 5 hours’ trekking per day.</li>
                <li>Carry: up to 5kg in a day sack.</li>
                <li>
                  Terrain: remote, uneven, snowy, icy, rocky, sometimes exposed
                  terrain at up to 3600m.
                </li>
                <li>
                  Climate: Can be sunny in valleys and cold and windy at
                  Gangabal. Averages are 3000m, 5 to 25C.
                </li>
                <li>
                  Swim: not required though there will be river crossings to
                  make.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Treks;

export async function getServerSideProps(context) {
  console.log(context);
  return {
    props: {
      holiday: context.params,
    },
  };
}
