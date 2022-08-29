import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
const imprint = () => {
  return (
    <Container>
      <Head>
        <title>Imprint</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Row style={{ marginTop: "6rem" }}>
        <Col md={4} xs={10} className="cardCenter">
          <h5>Imprint</h5>
          <p>
            <b className="text-success mb-5">
              The responsible provider of this website in terms of data
              protection law is:
            </b>
            <br />
            Kashmir Ensueno,
            <br /> Ganderbal, Jammu and Kashmir, <br />
            India-191201.
            <br />
            Registration Number: – JKEA00000789 <br />
            (Registered by Tourism Department, Kashmir).
            <br /> PAN: – BDXPA6060K
            <br /> Email: kashmirensueno@gmail.com
            <br />
            Phone: +91 6005702825 <br />
            <br />
            <b className="text-success mt-3">Contact Person</b>
            <br />
            Riyaz Ahmad
            <br /> kashmirensueno@gmail.com
          </p>
        </Col>
        <Col md={8} xs={10} className="cardCenter">
          <p>
            <b className="text-success mb-2">Use rights</b> <br /> The
            copyrights of this web site are completely owned by Kashmir Ensueno.
            The web pages and documents provided herein or their contents may
            not be used in any form without the written permission of Kashmir
            Treks, neither commercially nor non-commercially.
            <br />
            <br />
            <b className="text-success mb-2">Liability notice</b> <br />
            Despite careful content control, we assume no liability for the
            content of external links. The content of the linked pages is the
            sole responsibility of their operators. We make every effort to keep
            our website up-to-date, accurate, and complete. Nevertheless, the
            occurrence of errors can not be completely ruled out. We assume no
            liability for the timeliness, accuracy, or completeness of the
            content posted here. This also applies to any damage of a material
            or immaterial nature caused by the use of this website or its
            contents. <br /> <br />
            <b className="text-success mb-2">
              Alternative dispute resolution according to the Information
              Technology Act, 2000 and EC
            </b>{" "}
            <br /> The IT Act and the EC provides a platform for online dispute
            resolution (ODR). We are not obligated and unwilling to participate
            in a dispute settlement procedure before a consumer arbitration
            board. Legal notice regarding our presence This imprint and the data
            protection declaration are valid for the following website,
            accessible at the following URL: kashmirtreks.com <br />
            This imprint is also valid for our appearance on Facebook,
            Instagram, and Twitter pages:
          </p>
          <ul>
            <li>facebook.com/kashmirtreks</li>
            <li>instagram.com/kashmirtreks</li>
            <li>twitter.com/kashmirtreks</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default imprint;
