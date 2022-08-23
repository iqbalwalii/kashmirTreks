import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const about = () => {
  return (
    <Container>
      <Row style={{ marginTop: "6rem" }}>
        <Col xs={12} md={8} className="p-3">
          <h1>About Us</h1>
          <p>
            Kashmir Ensueno is based in Srinagar, Kashmir. Owned and operated by
            a group of trekkers who are born and raised in the valley of Kashmir.
            “We would like others to feel the same joy that we do. We love being
            trekkers so much that we made it our job. Let us help you get the
            most from your trekking experiences. Let us help you arrange and
            operate trekking expeditions that suit you the most”.
            <br />
            Kashmir Ensueno is a fun and easy way to travel around Kashmir in
            both style and comfort. Everything is arranged for you and
            throughout your journey, you will receive service with a smile and
            professional commentary which will enhance your trekking experience.
            We have a range of tours available for people of any age. It doesn’t
            matter if you are looking for a sightseeing tour or an adventure
            tour, a large group tour or a small group tour, we can recommend the
            best tour for you.
          </p>
        </Col>
        <Col xs={12} md={4} className="p-3">
          <h6>Founder/ CEO</h6>
          <h5>Riyaz Ahmad</h5>
          <Image
            src="https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658942163/IMG-20220727-WA0015_gzhgam.jpg"
            width={350}
            height={250}
            alt="Riyaz"
            layout="responsive"
          />
          <p className="mt-2 p-2">
            Riyaz Mir as a founder and Operator of Kashmir Ensueno is a travel
            entrepreneur and a presenter of Kashmir Tourism. Being a mountain
            lover has made adventure tourism his profession. Guided many
            mountain expeditions through the rough terrain and high altitudes of
            the Himalayas. Works hard to promote Tourism in the peace-loving
            Kashmir.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default about;
