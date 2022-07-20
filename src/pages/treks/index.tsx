import Link from "next/link";
import React from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import Card from "../../Components/Card";
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
        defaultActiveKey="holiday"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="holiday" title="Holidays">
          <Row>
            <Link href="holidays/srinagar_leh_nubra_tour">
              <Col className="mb-5 cardCenter" xs={10} md={4}>
                <div>
                  <Card
                    name={"Srinagar Leh Nubra Tour"}
                    image={
                      "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658328342/1519633344_Ladakh-Home.jpg_h8ypz0.jpg"
                    }
                  />
                </div>
              </Col>
            </Link>
            <Col className="mb-5 cardCenter" md={4} xs={10}>
              <Link href="holidays/kashmir_paradise_tour">
                <div>
                  <Card
                    name={"Kashmir Paradise Tour"}
                    image={
                      "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1656913463/photo-1607618064912-0559228f8006_diego3.webp"
                    }
                  />
                </div>
              </Link>
            </Col>
            <Col className="mb-5 cardCenter" md={4} xs={10}>
              <Link href="holidays/kashmir_winter_package_tour">
                <div>
                  <Card
                    name={"Kashmir Winter Package Tour"}
                    image={
                      "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1656909389/gulmarg-himachal-wanderon-skiing-5_orig_m2kgeh.jpg"
                    }
                  />
                </div>
              </Link>
            </Col>
            <Col className="mb-5 cardCenter" md={4} xs={10}>
              <Link href="holidays/srinagar_kargil_zanskar_tour">
                <div>
                  <Card
                    name={"Srinagar Kargil Zanskar Tour"}
                    image={
                      "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1656907870/The-Maitreya-Buddha-statue-with-Himalaya-mountains-in-the-background-1200x853_cfkjmt.jpg"
                    }
                  />
                </div>
              </Link>
            </Col>
            <Col className="mb-5 cardCenter" md={4} xs={10}>
              <Link href="holidays/gulmarg_family_ski_holiday">
                <div>
                  <Card
                    name={"Gulmarg Family Ski Holiday"}
                    image={
                      "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1656907986/220217_GulmargHotels-Khyber1_iqebgt.jpg"
                    }
                  />
                </div>
              </Link>
            </Col>
            <Col className="mb-5 cardCenter" md={4} xs={10}>
              <Link href="holidays/kashmir_spring_special_tour">
                <div>
                  <Card
                    name={"Kashmir Spring Special Tour"}
                    image={
                      "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1656835689/13_0012256_033078_emgfuf.jpg"
                    }
                  />
                </div>
              </Link>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="long" title="Long Treks">
          <Row>
            <Col className="mb-5 cardCenter" md={4} xs={10}>
              <Link href="/treks/kashmir_great_lakes_trek" passHref>
                <div>
                  <Card
                    name={"Great Lakes Trek"}
                    image={
                      "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658321686/gl_aho9th.jpg"
                    }
                  />
                </div>
              </Link>
            </Col>
            <Col className="mb-5 cardCenter" md={4} xs={10}>
              <Link href="/treks/tulail_gangabal_naranag_trek" passHref>
                <div>
                  <Card
                    name={"Tulail Gangabal naranag Trek"}
                    image={
                      "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658321844/shutterstock_1214208439_xw1tnp.jpg"
                    }
                  />
                </div>
              </Link>
            </Col>
            <Col className="mb-5 cardCenter" md={4} xs={10}>
              <Link href="/treks/aharbal_kounsarnag_trek" passHref>
                <div>
                  <Card
                    name={"Aharbal Kounsarnag Trek"}
                    image={
                      "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658329148/249aab66375ed89d6cba7_hohv2k.jpg"
                    }
                  />
                </div>
              </Link>
            </Col>
            <Col className="mb-5 cardCenter" md={4} xs={10}>
              <Link href="/treks/sonamarg_vishansar_bandipora_trek" passHref>
                <div>
                  <Card
                    name={"Sonamarg Vishansar Bandipora Trek"}
                    image={
                      "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658321507/gang_oncssl.jpg"
                    }
                  />
                </div>
              </Link>
            </Col>
            <Col className="mb-5 cardCenter" md={4} xs={10}>
              <Link href="/treks/tarsar_marsar_trek" passHref>
                <div>
                  <Card
                    name={"Tarsar Marsar Trek"}
                    image={
                      "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658329204/df4e1199-8c93-47c1-85c5-fc2cc9337837_Tarsar_Marsar_TM_Kishan_Harwalkar_Tarsar_lake_abby3s.webp"
                    }
                  />
                </div>
              </Link>{" "}
            </Col>
            <Col className="mb-5 cardCenter" md={4} xs={10}>
              <Link href="/treks/srinagar_warwan_panikhar_trek" passHref>
                <div>
                  <Card
                    name={"Srinagar Warwan Panikhar Trek"}
                    image={
                      "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658322295/9f9c89a8-e9f4-44a9-aca5-5baba75b42d2_Warwan_Valley_-_Subro_-_Village_-_Compressed_wyzdbp.webp"
                    }
                  />
                </div>
              </Link>
            </Col>
            <Col className="mb-5 cardCenter" md={4} xs={10}>
              <Link href="/treks/markha_valley_trek" passHref>
                <div>
                  <Card
                    name={"Markha Valley Trek"}
                    image={
                      "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658329283/ps4m2oq1gq16gb1hsmw61o91i3b1_1524635872_shutterstock_246933463_c1jvyf.jpg"
                    }
                  />
                </div>
              </Link>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="short" title="Short Treks">
          <Row>
            <Col className="mb-5 cardCenter" md={4} xs={10}>
              <Link href="/treks/naranag_marchoi_trek" passHref>
                <div>
                  <Card
                    name={"Naranag Marchoi Trek"}
                    image={
                      "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658330594/marchoi_w6asle.jpg"
                    }
                  />
                </div>
              </Link>
            </Col>
            <Col className="mb-5 cardCenter" md={4} xs={10}>
              <Link href="/treks/naranag_gangabal_trek" passHref>
                <div>
                  <Card
                    name={"Naranag Gangabal Trek"}
                    image={
                      "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658321844/shutterstock_1214208439_xw1tnp.jpg"
                    }
                  />
                </div>
              </Link>
            </Col>
            <Col className="mb-5 cardCenter" md={4} xs={10}>
              <Link href="/treks/kolahoi_glacier_trek" passHref>
                <div>
                  <Card
                    name={"Kolahoi Glacier Trek"}
                    image={
                      "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658329283/ps4m2oq1gq16gb1hsmw61o91i3b1_1524635872_shutterstock_246933463_c1jvyf.jpg"
                    }
                  />
                </div>
              </Link>
            </Col>
            <Col className="mb-5 cardCenter" md={4} xs={10}>
              <Link href="/treks/sonamarg_vishansar_trek" passHref>
                <div>
                  <Card
                    name={"Sonamarg Vishansar Trek"}
                    image={
                      "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658321686/gl_aho9th.jpg"
                    }
                  />
                </div>
              </Link>
            </Col>
            <Col className="mb-5 cardCenter" md={4} xs={10}>
              <Link href="/treks/naranag_gangabal_mahlish_trek" passHref>
                <div>
                  <Card
                    name={"Naranag Gangabal Mahlish Trek"}
                    image={
                      "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658330771/gangbal_lh8srx.jpg"
                    }
                  />
                </div>
              </Link>
            </Col>
            <Col className="mb-5 cardCenter" md={4} xs={10}>
              <Link href="/treks/kashmir_snow_trek" passHref>
                <div>
                  <Card
                    name={"Kashmir Snow Trek"}
                    image={
                      "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1657636760/500158300915_45205_a1irso.jpg"
                    }
                  />
                </div>
              </Link>
            </Col>
            <Col className="mb-5 cardCenter" md={4} xs={10}>
              <Link href="/treks/dachigam_marsar_lake_trek" passHref>
                <div>
                  <Card
                    name={"Dachigam Marsar Lake Trek"}
                    image={
                      "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658329204/df4e1199-8c93-47c1-85c5-fc2cc9337837_Tarsar_Marsar_TM_Kishan_Harwalkar_Tarsar_lake_abby3s.webp"
                    }
                  />
                </div>
              </Link>
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default index;
