import Link from "next/link";
import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";

const index = () => {
  return (
    <Container style={{ marginTop: "6rem" }}>
      <h2>KASHMIR TREKS AND TRAILS</h2>
      <p>
        Kashmir is the ideal trekking destination, with fascinating Himalayan
        landscapes and a sophisticated network of treks at varying altitudes and
        levels of difficulty. Whether you explore Kashmir Great Lakes Trek,
        experience the beauty of the Himalayan Alps on a long-distance trek or
        head out on a family day trek, Kashmir offers unlimited opportunities.
        <br />
        Kashmir provides diverse landscapes and the perfect backdrop for a
        unique visit and memorable sightseeing or a walking holiday. Trekking in
        Kashmir involves multi day hiking to the picturesque high altitude lakes
        and exploring the meadows of the Himalayas on foot. Apart from flowery
        meadows and the lakes full of trout; most of our walking trails present
        the calling of the Himalayan marmots and a rare sight of the brown bear.
        <br />
        Our adventures in Kashmir visit the hidden sights, most beautiful
        places, and must-see destinations. We have carefully selected and
        researched our favorite tours and treks so whatever your interests, we
        can arrange your ideal holiday in Kashmir.
      </p>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="day" title="Day Tours">
          "height"
        </Tab>
        <Tab eventKey="holiday" title="Holidays">
          "height"
        </Tab>
        <Tab eventKey="long" title="Long Treks">
          <Link href="/treks/kashmir_great_lakes_trek" passHref>
            Great lakes trek
          </Link>
          <br />
          <Link href="/treks/tulail_gangabal_naranag_trek" passHref>
            Tulail-gangabal-naranag-trek
          </Link>
          <br />
          <Link href="/treks/aharbal_kounsarnag_trek" passHref>
            Tulail-gangabal-naranag-trek
          </Link>
        </Tab>
        <Tab eventKey="short" title="Short Treks">
          "height"
        </Tab>
      </Tabs>
    </Container>
  );
};

export default index;
