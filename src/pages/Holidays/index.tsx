import Link from "next/link";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Holidays } from "../../Types/index";
const index = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col
          className="mt-5"
          style={{ borderRight: "1px solid #ccc", padding: "1rem" }}
        >
          <h1>KASHMIR HOLIDAYS</h1>
          <hr />
          <p>
            Kashmir is rich with history, beautiful places, traditions, and
            activities that are distinct to the area. Kashmir is the winter
            sports capital of India. However, it is just as popular for summer
            tourists who visit its historic cities and attractions. The
            magnificent scenery of Gulmarg, Pahalgam, Sonamarg, and Yousmarg
            attracts thousands of tourists every summer. In order to help and
            guide, Kashmir Ensueno has designed some packages and also can
            tailor-make your trip itinerary.
          </p>
          <p>
            Kashmir is rich with history, beautiful places, traditions, and
            activities that are distinct to the area. Kashmir is the winter
            sports capital of India. However, it is just as popular for summer
            tourists who visit its historic cities and attractions. The
            magnificent scenery of Gulmarg, Pahalgam, Sonamarg, and Yousmarg
            attracts thousands of tourists every summer. In order to help and
            guide, Kashmir Ensueno has designed some packages and also can
            tailor-make your trip itinerary.
          </p>
        </Col>
        <Col className="mt-5" md={4} style={{ padding: "2rem" }}>
          <h4>Kashmir Holidays</h4>
          <ul className="">
            {Object.keys(Holidays).map((holiday) => (
              <li key={holiday}>
                <Link href={`/holidays/${holiday}`} className="link">
                  {Holidays[holiday]}
                </Link>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default index;
