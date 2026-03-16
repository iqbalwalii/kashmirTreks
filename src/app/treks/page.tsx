"use client";
import Link from "next/link";
import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import Card from "../../Components/Card";

export default function TreksPage() {
  return (
    <Container style={{ marginTop: "6rem" }}>
      <h2>Mount Eco AND Trails</h2>
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
        and exploring the meadows of the Himalayas on foot.
        <br />
        Our adventures in Kashmir visit the hidden sights, most beautiful
        places, and must-see destinations. We have carefully selected and
        researched our favorite tours and treks so whatever your interests, we
        can arrange your ideal holiday in Kashmir.
      </p>
      <Tabs defaultActiveKey="holiday" id="treks-tabs" className="mb-3">
        <Tab eventKey="holiday" title="Holidays">
          <section className="cardGroup">
            {[
              {
                href: "holidays/kashmir_tulip_package",
                name: "Kashmir Tulip Package",
                image: "/assets/images/tulips.webp",
              },
              {
                href: "holidays/kashmir_package",
                name: "Kashmir Package",
                image:
                  "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1656913463/photo-1607618064912-0559228f8006_diego3.webp",
              },
              {
                href: "holidays/kashmir_tulip_garden",
                name: "Kashmir Tulip Garden",
                image: "/assets/images/tulips.webp",
              },
              {
                href: "holidays/srinagar_leh_nubra_tour",
                name: "Srinagar Leh Nubra Tour",
                image:
                  "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658328342/1519633344_Ladakh-Home.jpg_h8ypz0.jpg",
              },
              {
                href: "holidays/kashmir_paradise_tour",
                name: "Kashmir Paradise Tour",
                image:
                  "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1656913463/photo-1607618064912-0559228f8006_diego3.webp",
              },
              {
                href: "holidays/kashmir_winter_package_tour",
                name: "Kashmir Winter Package Tour",
                image:
                  "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1656909389/gulmarg-himachal-wanderon-skiing-5_orig_m2kgeh.jpg",
              },
              {
                href: "holidays/srinagar_kargil_zanskar_tour",
                name: "Srinagar Kargil Zanskar Tour",
                image:
                  "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1656907870/The-Maitreya-Buddha-statue-with-Himalaya-mountains-in-the-background-1200x853_cfkjmt.jpg",
              },
              {
                href: "holidays/gulmarg_family_ski_holiday",
                name: "Gulmarg Family Ski Holiday",
                image:
                  "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1656907986/220217_GulmargHotels-Khyber1_iqebgt.jpg",
              },
              {
                href: "holidays/kashmir_spring_special_tour",
                name: "Kashmir Spring Special Tour",
                image:
                  "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1656835689/13_0012256_033078_emgfuf.jpg",
              },
            ].map(({ href, name, image }) => (
              <Link href={href} key={href}>
                <div className="mb-5 cardCenter">
                  <Card name={name} image={image} />
                </div>
              </Link>
            ))}
          </section>
        </Tab>
        <Tab eventKey="long" title="Long Treks">
          <section className="cardGroup">
            {[
              {
                href: "/treks/kashmir_great_lakes_trek",
                name: "Great Lakes Trek",
                image:
                  "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658321686/gl_aho9th.jpg",
              },
              {
                href: "/treks/tulail_gangabal_naranag_trek",
                name: "Tulail Gangabal Naranag Trek",
                image:
                  "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658321844/shutterstock_1214208439_xw1tnp.jpg",
              },
              {
                href: "/treks/aharbal_kounsarnag_trek",
                name: "Aharbal Kounsarnag Trek",
                image:
                  "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658329148/249aab66375ed89d6cba7_hohv2k.jpg",
              },
              {
                href: "/treks/sonamarg_vishansar_bandipora_trek",
                name: "Sonamarg Vishansar Bandipora Trek",
                image:
                  "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658321507/gang_oncssl.jpg",
              },
              {
                href: "/treks/tarsar_marsar_trek",
                name: "Tarsar Marsar Trek",
                image:
                  "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658329204/df4e1199-8c93-47c1-85c5-fc2cc9337837_Tarsar_Marsar_TM_Kishan_Harwalkar_Tarsar_lake_abby3s.webp",
              },
              {
                href: "/treks/srinagar_warwan_panikhar_trek",
                name: "Srinagar Warwan Panikhar Trek",
                image:
                  "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658322295/9f9c89a8-e9f4-44a9-aca5-5baba75b42d2_Warwan_Valley_-_Subro_-_Village_-_Compressed_wyzdbp.webp",
              },
              {
                href: "/treks/markha_valley_trek",
                name: "Markha Valley Trek",
                image:
                  "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658329283/ps4m2oq1gq16gb1hsmw61o91i3b1_1524635872_shutterstock_246933463_c1jvyf.jpg",
              },
            ].map(({ href, name, image }) => (
              <Link href={href} key={href}>
                <div className="mb-5 cardCenter">
                  <Card name={name} image={image} />
                </div>
              </Link>
            ))}
          </section>
        </Tab>
        <Tab eventKey="short" title="Short Treks">
          <section className="cardGroup">
            {[
              {
                href: "/treks/naranag_marchoi_trek",
                name: "Naranag Marchoi Trek",
                image:
                  "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658330594/marchoi_w6asle.jpg",
              },
              {
                href: "/treks/naranag_gangabal_trek",
                name: "Naranag Gangabal Trek",
                image:
                  "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658321844/shutterstock_1214208439_xw1tnp.jpg",
              },
              {
                href: "/treks/kolahoi_glacier_trek",
                name: "Kolahoi Glacier Trek",
                image:
                  "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658329283/ps4m2oq1gq16gb1hsmw61o91i3b1_1524635872_shutterstock_246933463_c1jvyf.jpg",
              },
              {
                href: "/treks/sonamarg_vishansar_trek",
                name: "Sonamarg Vishansar Trek",
                image:
                  "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658321686/gl_aho9th.jpg",
              },
              {
                href: "/treks/naranag_gangabal_mahlish_trek",
                name: "Naranag Gangabal Mahlish Trek",
                image:
                  "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658330771/gangbal_lh8srx.jpg",
              },
              {
                href: "/treks/kashmir_snow_trek",
                name: "Kashmir Snow Trek",
                image:
                  "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1657636760/500158300915_45205_a1irso.jpg",
              },
              {
                href: "/treks/dachigam_marsar_lake_trek",
                name: "Dachigam Marsar Lake Trek",
                image:
                  "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658329204/df4e1199-8c93-47c1-85c5-fc2cc9337837_Tarsar_Marsar_TM_Kishan_Harwalkar_Tarsar_lake_abby3s.webp",
              },
            ].map(({ href, name, image }) => (
              <Link href={href} key={href}>
                <div className="mb-5 cardCenter">
                  <Card name={name} image={image} />
                </div>
              </Link>
            ))}
          </section>
        </Tab>
      </Tabs>
    </Container>
  );
}
