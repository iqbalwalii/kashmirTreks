import React from "react";
import { Accordion, Container, Row } from "react-bootstrap";

const Faq = () => {
  return (
    <Container>
      <Row style={{ marginTop: "6rem" }}>
        <h1 className="my-2 ">FAQ&apos;s</h1>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Who is leading your trips?</Accordion.Header>
            <Accordion.Body>
              <p>
                We use professional local guides and instructors according to
                the requirements of a specific itinerary. Our guides and
                instructors are licensed members of the Kashmir Tourism
                Department. Not only is this a legal requirement in Kashmir, but
                it’s also your guarantee of a safe, knowledgeable, and
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
          <Accordion.Item eventKey="1   ">
            <Accordion.Header>What is Accommodation like?</Accordion.Header>
            <Accordion.Body>
              <p>
                The accommodation is an important part of your trip. We always
                look for an accommodation which is in a great location, whilst
                offering a friendly and welcoming service and an authentic
                experience. We aim to strike a balance between accommodation
                that we feel will fit most people’s taste and keep our trips
                affordable. The type of accommodation varies depending on
                whether we’re in the heart of an alpine village or high up in
                the mountains. On our multi-day treks, you’ll generally stay in
                tented camps, hotels, houseboats, and mountain huts.
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
                Generally, the less you carry, the more you’ll enjoy your time
                on the trek.
                <br />
                <br />
                Necessary items:- Passport, visas, Baselayers, mid-layers for
                warmth, trekking trousers, trekking shorts, wind, and waterproof
                jacket, Wind and waterproof trousers, Trekking socks, Trekking
                boots, Sun hat, Warm hat, Personal medication, Gloves, Sun
                protection (sunscreen incl. lip balm), Sanitary kit (tissues,
                wipes), Hydration system (bottles or ‘bladder’), and Sunglasses.
                <br />
                <br />
                <b>Optional</b>:- Pocketknife, camera, binoculars, navigation
                aids, ravel towel, head torch, and money.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              What about my additional baggage?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Any additional baggage that you’ve got, and that you don’t wish
                to carry on the mountain during your trek, can be stored at the
                houseboat or at our office where we meet on the first day. This
                means it’ll be waiting for you when you return from the trek.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              Do you provide flights and transfers?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                We don’t provide flights on our trips. People come from all over
                the world and many choose to lengthen their stay at either end
                of the trip to get the most of what is often the trip of a
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
                choose the dates of your trip to suit your schedule and you’re
                completely in control of who is in your group. During the trip,
                you’ll be going at a pace that suits you, so there’s no need to
                worry about keeping up or being slowed down. This makes private
                trips particularly popular with families and groups of friends.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>
              What’s the weather like in the mountains and when should I go?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <b>Summer</b>
                <br />
                <br />
                Summer is prime time for walking, trekking, and climbing in the
                mountains. Summers in the Himalaya mostly provide stable, warm
                weather. The main alpine summer season is from mid-June to
                mid-September. All the mountain treks are open during this
                period. In June, the weather is not too hot and there is a lot
                of snow left on the high trails and passes. The main Kashmir
                trek season has not yet begun so the mountains are still fairly
                quiet. July and August are by far the busiest and have the
                warmest and most stable weather. It’s not uncommon that
                temperatures exceed 30C. In September, things get quieter again
                and the temperatures get cooler. Of course, there’s never any
                guarantee when it comes to weather in the mountains and we’ve
                seen snowstorms in the middle of August!
                <br />
                <br />
                <b>Spring and Autumn</b>
                <br />
                <br />
                Spring and Autumn are seasons of change but are certainly not to
                be avoided. Spring and Autumn is a fantastic time in the
                Kashmir. In contrast to the busy summer season, Spring and
                Autumn are much quieter and both seasons offer something unique.
                In Spring, we enjoy watching nature come to life after the snowy
                winter season; the early alpine flowers and tulips are blooming.
                In Autumn, the colors and the light are simply breathtaking and
                the cool especially the chinar, crisp air completes the
                experience. The temperatures vary, the mornings and evenings are
                cool, but the days can be very pleasant with temperatures as
                high as 20 C. We may get some rain, and there may even be the
                odd dusting of snow high up. In practice, we do not run many of
                our trekking tours in Spring and Autumn.
                <br />
                <br />
                <b>Winter</b>
                <br />
                <br />
                Winter is a magical time in Kashmir and it’s the time for
                snow-trek in Naranag and skiing in Gulmarg. The winter season is
                generally from December to April, with some ski touring
                continuing into May. December and January are the coldest months
                and the days are shorter. Temperatures drop to as low as -10C at
                valley level, but dry air and frequent sunny days help a lot.
                The majority of the snow comes in this period and is of the
                lovely, light, and fluffy variety! February can still be very
                cold but the weather gradually gets warmer and the days longer.
                February still provides very good snow, including the fluffy,
                powdery stuff. March and April are generally the sunniest and
                warmest. It’s not uncommon to wear little more than a t-shirt in
                the warm sun. The snowpack is at it’s deepest in the mountains
                and has started to compact and get firmer. the snow gets wetter
                during the day and starts melting at lower elevations.
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
                follow them on each trip. However, on our guided trips, we’re
                able to keep some flexibility in the itinerary, to match it as
                closely as possible to the group members’ abilities as well as
                uncontrollable factors such as weather and mountain conditions.
                Our leaders have extensive local knowledge and will always be
                able to find suitable alternatives on very short notice. For
                instance, if the normal trek on Kashmir-Great-Lakes is unsafe
                due to snowfall, your leader will find another, safer, route to
                your destination. If unforeseen circumstances necessitate a
                significant change in the itinerary, which requires changing
                accommodation and/or using unplanned transport, members may be
                required to contribute financially. Please keep an open mind and
                do not hesitate to discuss particular wishes with your leader
                who will try to accommodate them.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>
              Do you provide Travel Insurance?
            </Accordion.Header>
            <Accordion.Body>
              No, we do not provide Travel Insurance. It is the client’s
              responsibility for obtaining sufficient personal travel insurance.
              The client is willing to accept full responsibility for insurance
              up to limits that the client may require. This insurance must
              cover personal accident, medical expenses, air ambulance, loss of
              effects, repatriation costs, and all other expenses which might
              arise as a result of loss, damage, injury delay, or inconvenience
              occurring to the client. All clients must have personal travel
              insurance. When obtaining travel insurance the client must ensure
              that the insurer is aware of the type of travel to be undertaken.
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
                <a href="https://www.jkhandicrafts.com" target="_blank">
                  <b>Kashmir Government Arts Emporiums</b>
                </a>
                &nbsp; Srinagar situated at Emporium Building, Residency Road,
                Srinagar. It’s only at a ten minutes walk away from Dal Lake
                Srinagar. It’s a government-owned arts emporium, holds a range
                of reliable Kashmiri handicrafts which include carpets, shawls,
                wood carvings, paper mache, crewel, namda, Phool Kari, Kaliko
                paintings, and many more. For Kashmir Pashmina products like
                shawls, scarves, wraps, and mufflers, we recommend an online
                Kashmir based store Pashmina Crafts.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </Container>
  );
};

export default Faq;
