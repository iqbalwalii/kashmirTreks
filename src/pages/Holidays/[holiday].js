import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import holidays from "../../data/holidays";
import {
  Row,
  Col,
  Container,
  Accordion,
  Button,
  ButtonGroup,
} from "react-bootstrap";
const Holidays = () => {
  const router = useRouter();
  const [holiday, setHoliday] = useState(null);
  useEffect(() => {
    if (router.isReady) {
      const packageName = router.query.holiday;
      setHoliday(holidays[packageName]);
    }
  }, [router, holiday, router.query.holiday]);
  console.log(holiday);
  return (
    <>
      <Row>
        <img
          src={holiday?.image}
          width="100%"
          height="100%"
          alt="image"
          class="imagehead"
        />
        <div className="dark">
          <div className="d-flex-column justify-content-center align-items-center w-50">
            <h5 className="text-center text">{holiday?.alternate}</h5>
            <ButtonGroup className="d-flex justify-content-around">
              <Button variant="success">Enquire</Button>
              <Button variant="warning">Book Now</Button>
            </ButtonGroup>
          </div>
        </div>
      </Row>
      <Container>
        <Row className="mt-5">
          <Col className="mt-5">
            <h1 className="text-center">{holiday?.name}</h1>
            <p className="text-center">{holiday?.stay}</p>
          </Col>
        </Row>
        <Row className="mt-5">
          {holiday?.sightseeings ? (
            <>
              <Col md={4} xs={12}>
                <h3 className="text-center">Introduction</h3>
                {holiday?.introduction?.map((para, idx) => {
                  return (
                    <p key={idx}>
                      {para}
                      <br />
                    </p>
                  );
                })}
              </Col>

              <Col md={4} xs={12}>
                <h3 className="text-center">Sightseeings</h3>
                {holiday?.sightseeings?.map((para, idx) => {
                  return (
                    <p key={idx}>
                      {para}
                      <br />
                    </p>
                  );
                })}
              </Col>
              <Col md={4} xs={12}>
                <h3>Price Per Person </h3>
                <span>(inclusive of all taxes)</span>
                <Accordion defaultActiveKey="0">
                  {holiday?.plans?.map((plan, idx) => {
                    return (
                      <Accordion.Item eventKey={idx} key={idx}>
                        <Accordion.Header>{plan?.name}</Accordion.Header>
                        <Accordion.Body>
                          <h6>Highlights</h6>
                          <ul className="list-styled">
                            {plan?.highlights?.map((hylyt, index) => {
                              return <li key={index}>{hylyt}</li>;
                            })}
                          </ul>
                          <h6>Accomodations</h6>
                          <ul className="list-styled">
                            {plan?.Accomodations?.map((hylyt, index) => {
                              return <li key={index}>{hylyt}</li>;
                            })}
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    );
                  })}
                </Accordion>
              </Col>
            </>
          ) : (
            <>
              <Col md={6} xs={12}>
                <h3 className="text-center">Introduction</h3>
                {holiday?.introduction?.map((para, idx) => {
                  return (
                    <p key={idx}>
                      {para}
                      <br />
                    </p>
                  );
                })}
              </Col>
              <Col md={6} xs={12}>
                <h3>Price Per Person </h3>
                <span>(inclusive of all taxes)</span>
                <Accordion defaultActiveKey="0">
                  {holiday?.plans?.map((plan, idx) => {
                    return (
                      <Accordion.Item eventKey={idx} key={idx}>
                        <Accordion.Header>{plan?.name}</Accordion.Header>
                        <Accordion.Body>
                          <h6>Highlights</h6>
                          <ul className="list-styled">
                            {plan?.highlights?.map((hylyt, index) => {
                              return <li key={index}>{hylyt}</li>;
                            })}
                          </ul>
                          <h6>Accomodations</h6>
                          <ul className="list-styled">
                            {plan?.Accomodations?.map((hylyt, index) => {
                              return <li key={index}>{hylyt}</li>;
                            })}
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    );
                  })}
                </Accordion>
              </Col>
            </>
          )}
        </Row>
        <Row className="my-5">
          <Col md={6} xs={12}>
            <h4 style={{ color: "#004220" }} className="text-center">
              What&apos;s Included in the Price?
            </h4>
            <ul>
              {holiday?.inclusions?.map((incl, idx) => {
                return <li key={idx}>{incl}</li>;
              })}
            </ul>
          </Col>
          <Col md={6} xs={12}>
            <h4 style={{ color: "red" }} className="text-center">
              What&apos;s Not Included in the Price?
            </h4>
            <ul>
              {holiday?.exclusions?.map((incl, idx) => {
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
              {holiday?.itinerary?.map((incl, idx) => {
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
              {holiday?.detailedItinerary?.map((incl, idx) => {
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
      </Container>
    </>
  );
};

export default Holidays;
