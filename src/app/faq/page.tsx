"use client";
import React from "react";
import { Accordion, Container, Row } from "react-bootstrap";

export default function FaqPage() {
  return (
    <Container>
      <Row style={{ marginTop: "6rem" }}>
        <h1 className="my-2">FAQ&apos;s</h1>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Who is leading your trips?</Accordion.Header>
            <Accordion.Body>
              <p>
                We use professional local guides and instructors according to
                the requirements of a specific itinerary. Our guides and
                instructors are licensed members of the Kashmir Tourism
                Department. Not only is this a legal requirement in Kashmir, but
                it&apos;s also your guarantee of a safe, knowledgeable, and
                experienced leader on your trip.
                <br />
                <br />
                Our leaders are hand-picked and have extensive experience in the
                areas they visit and operate in. Most of our leaders are our
                long-time friends and climbing, trekking, or skiing partners
                who, in addition to being incredibly skillful, are great
                companions in the mountains. All our leaders are English
                speakers.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What is Accommodation like?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The accommodation is an important part of your trip. We always
                look for an accommodation which is in a great location, whilst
                offering a friendly and welcoming service and an authentic
                experience. We aim to strike a balance between accommodation
                that we feel will fit most people&apos;s taste and keep our
                trips affordable. The type of accommodation varies depending on
                whether we&apos;re in the heart of an alpine village or high up
                in the mountains. On our multi-day treks, you&apos;ll generally
                stay in tented camps, hotels, houseboats, and mountain huts.
                <br />
                <br />
                In houseboats we use twin or double rooms, we offer a private
                room upgrade for those who prefer. There are shower and toilet
                facilities in all houseboats and mountain huts.
                <br />
                <br />
                In mountain valleys and meadows we provide tented accommodation.
                Our tents are double fly spacious tents, we carry proper
                matting, sleeping bags, and blankets.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              What about single travelers and single rooms?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Single travelers are very welcome on our trips. Single travelers
                will share rooms with other single travelers. On the rare
                occasion where we&apos;re not able to find a suitable room share
                solution, single travelers may be required to pay a forced
                single room upgrade fee. For travelers wishing to have a
                private, single room, it&apos;s often possible to upgrade at an
                additional cost.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What will I carry in my rucksack?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Exactly, what you need to pack in your backpack depends on the
                type and duration of the tour, your personal preference, and
                whether you have opted for additional baggage transfers.
                Generally, the less you carry, the more you&apos;ll enjoy your
                time on the trek.
                <br />
                <br />
                Necessary items:- Passport, visas, Baselayers, mid-layers for
                warmth, trekking trousers, trekking shorts, wind, and waterproof
                jacket, Wind and waterproof trousers, Trekking socks, Trekking
                boots, Sun hat, Warm hat, Personal medication, Gloves, Sun
                protection (sunscreen incl. lip balm), Sanitary kit (tissues,
                wipes), Hydration system (bottles or &apos;bladder&apos;), and
                Sunglasses.
                <br />
                <br />
                <b>Optional</b>:- Pocketknife, camera, binoculars, navigation
                aids, travel towel, head torch, and money.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              What about my additional baggage?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Any additional baggage that you&apos;ve got, and that you
                don&apos;t wish to carry on the mountain during your trek, can
                be stored at the houseboat or at our office where we meet on
                the first day. This means it&apos;ll be waiting for you when
                you return from the trek.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              Do you provide flights and transfers?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                We don&apos;t provide flights on our trips. People come from all
                over the world and many choose to lengthen their stay at either
                end of the trip to get the most of what is often the trip of a
                lifetime. Some prefer to have full flexibility and choice of
                airports and flight times, and others have access to special
                deals or have air miles to redeem. Airport transfers are
                included in our trips.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>What are the Meals like?</Accordion.Header>
            <Accordion.Body>
              <p>
                The trip description clearly states which meals are included in
                the trek. There are options for dietary requirements like
                vegetarian and non-vegetarian meals, the later is charged an
                extra fee. Check out our{" "}
                <a
                  href="https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658467486/Meal-Plan_copy_wd3dp5.jpg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>trek meal plan.</b>
                </a>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              Should I choose a Private or Scheduled Group trip?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Our scheduled group trips are open for all to join. Joining a
                group trip is a great way of meeting other trekkers and is more
                cost-effective if you travel as an individual or small group.
                <br />
                <br />A private trip offers additional flexibility. You can
                choose the dates of your trip to suit your schedule and
                you&apos;re completely in control of who is in your group.
                During the trip, you&apos;ll be going at a pace that suits you,
                so there&apos;s no need to worry about keeping up or being
                slowed down. This makes private trips particularly popular with
                families and groups of friends.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>
              What&apos;s the weather like in the mountains and when should I
              go?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <b>Summer</b> — Prime time for walking, trekking, and climbing.
                The main alpine summer season is from mid-June to mid-September.
                <br />
                <br />
                <b>Spring and Autumn</b> — Much quieter seasons with unique
                beauty — spring blooms and autumn colors.
                <br />
                <br />
                <b>Winter</b> — A magical time for snow-trekking in Naranag and
                skiing in Gulmarg. Generally December to April.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>
              Will the itinerary of my trip change?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Our trip itineraries are popular and well-proven and we aim to
                follow them on each trip. However, on our guided trips,
                we&apos;re able to keep some flexibility in the itinerary, to
                match it as closely as possible to the group members&apos;
                abilities as well as uncontrollable factors such as weather and
                mountain conditions.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>
              Do you provide Travel Insurance?
            </Accordion.Header>
            <Accordion.Body>
              No, we do not provide Travel Insurance. It is the client&apos;s
              responsibility for obtaining sufficient personal travel insurance.
              We recommend World Nomads as a travel Insurance Partner.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header>
              Where can I buy Kashmiri Arts and Handicrafts?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                We recommend &nbsp;
                <a
                  href="https://www.jkhandicrafts.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>Kashmir Government Arts Emporiums</b>
                </a>
                &nbsp; Srinagar situated at Emporium Building, Residency Road,
                Srinagar.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </Container>
  );
}
