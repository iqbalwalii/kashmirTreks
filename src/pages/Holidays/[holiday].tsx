import React from "react";
import { useEffect, useState } from "react";
import holidays from "../../data/holidays";
import {
  Row,
  Col,
  Container,
  Accordion,
  Button,
  Spinner,
} from "react-bootstrap";
import Head from "next/head";
import { useRouter } from "next/router";
const Holidays = ({ holiday }) => {
  const router = useRouter();
  const trip = holiday.holiday;
  const [destination, setDestination] = useState(holidays[trip]);
  useEffect(() => {
    setDestination(holidays[trip]);
  }, [trip]);

  console.log(holidays[trip]);
  return destination === undefined || null ? (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Head>
        <title>{destination}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
            <h5 className="text-center text">{destination?.alternate}</h5>
            <div className="d-flex justify-content-center">
              <Button
                variant="warning"
                onClick={() =>
                  router.push({
                    pathname: "/book",
                    query: { name: "tour" },
                  })
                }
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
                {destination?.introduction?.map((para, idx) => {
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
                {destination?.sightseeings?.map((para, idx) => {
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
                          <h6 style={{ color: "green" }}>Rate :</h6>
                          <p>{plan?.rate}</p>
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
                {destination?.introduction?.map((para, idx) => {
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
      </Container>
    </>
  );
};

export default Holidays;

export async function getServerSideProps(context) {
  console.log(context);
  return {
    props: {
      holiday: context.params,
    },
  };
}
