"use client";
import React from "react";
import Slider from "../Components/Carousel";
import { Button, Container } from "react-bootstrap";
import Card from "../Components/Card";
import Link from "next/link";
import Sunday from "../Components/sunday";

export default function Home() {
  return (
    <>
      <Slider />
      <Container>
        <Sunday />
        <div className="paragraph">
          <h2 className="text-center mt-5 heading">Mount Eco</h2>
          <p className="text-center subheading">Adventure comes alive!</p>
          <p className="text-center description">
            Mount Eco is a Kashmir-based tour &amp; travel company offering
            guided <Link href="/treks" className="link">Kashmir trekking</Link>,{" "}
            <Link href="/holidays/gulmarg_family_ski_holiday" className="link">Gulmarg skiing</Link>,{" "}
            <Link href="/holidays/kashmir_tulip_package" className="link">tulip garden tours</Link>,{" "}
            <Link href="/holidays/srinagar_leh_nubra_tour" className="link">Ladakh trips</Link>, and{" "}
            <Link href="/holidays/kashmir_paradise_tour" className="link">Pahalgam holiday packages</Link>.
            Being native and independent, based in Anantnag, Kashmir, we provide a
            friendly, personal, and authentic experience — from classic Himalayan treks like the{" "}
            <Link href="/treks/kashmir_great_lakes_trek" className="link">Great Lakes Trek</Link> to
            fully tailored <Link href="/bespoke" className="link">bespoke Kashmir trips</Link>.
          </p>
        </div>
        <div className="featured my-4">
          <h1 className="mb-3 text-center qimm">FEATURED TOURS</h1>
          <div className="cardGroup">
            <div className="mb-4">
              <Link href="/holidays/kashmir_tulip_package">
                <div>
                  <Card
                    name={"Kashmir Tulip Package"}
                    image={"/assets/images/tulips.webp"}
                    link={"holidays/kashmir_tulip_package"}
                    type={"holiday"}
                  />
                </div>
              </Link>
            </div>
            <div className="mb-4">
              <Link href="/holidays/kashmir_package">
                <div>
                  <Card
                    name={"The Kashmir Package"}
                    image={
                      "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658322194/Kolahoi-Glacier-Trek_qsralh.webp"
                    }
                    type={"Holiday"}
                  />
                </div>
              </Link>
            </div>
            <div className="mb-4">
              <Link href="/treks/kashmir_tulip_garden">
                <div>
                  <Card
                    name={"Kashmir Tulip Garden"}
                    image={"/assets/images/tulips2.jpg"}
                    type={"holiday"}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-3">
          <Link href="/holidays">
            <Button className="btn-primary-custom">
              Kashmir Holiday Packages
            </Button>
          </Link>
          <Link href="/treks">
            <Button className="btn-primary-custom">
              Trekking Routes
            </Button>
          </Link>
        </div>
        <div className="paragraph my-5">
          <h2 className="text-center mt-5 heading">KASHMIR</h2>
          <p className="text-center subheading">
            A Summer Escape and a Winter Playground
          </p>
          <p className="text-center description">
            Kashmir is one of the most popular travel destinations in South
            Asia. It nurtures breathtaking views under snow-covered mountains,
            an evergreen valley during the summers, and a twinkling night sky.
            Kashmir is home to the second coldest place on earth. Among the
            places are mesmerizing lakes, holy pilgrimage sites, admire-worthy
            gardens. Gulmarg offers the world&apos;s highest golf course in the
            summers and serves as a world-class ski resort during the winter.
            Sonamarg referred to as the meadow of gold and Pahalgam the
            shepherd&apos;s village serve base camps for many mountaineering,
            trekking and hiking expeditions.
          </p>
        </div>
        <div className="featured my-4">
          <h3 className="mb-3 text-center qimm">FIXED DEPARTURES</h3>
          <section className="cardGroup">
            <Link href="/treks/naranag_gangabal_mahlish_trek">
              <div className="mb-4">
                <Card
                  name={"Gangbal Mahlish Trek"}
                  image={
                    "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658321844/shutterstock_1214208439_xw1tnp.jpg"
                  }
                  btn={true}
                  type={"trek"}
                />
              </div>
            </Link>
            <Link href="/treks/kashmir_great_lakes_trek">
              <div className="mb-4">
                <Card
                  name={"Kashmir Great Lakes Trek"}
                  image={
                    "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658321686/gl_aho9th.jpg"
                  }
                  btn={true}
                  link={"/treks/kashmir_great_lakes_trek"}
                  type={"trek"}
                />
              </div>
            </Link>
            <Link href="/treks/tarsar_marsar_trek">
              <div className="mb-4">
                <Card
                  name={"Tarsar Marsar Trek"}
                  image={
                    "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658321775/taesae_tjh0je.webp"
                  }
                  btn={true}
                  type={"trek"}
                />
              </div>
            </Link>
          </section>
        </div>
        <div className="d-flex justify-content-center mb-5">
          <Link href="/treks">
            <Button className="btn-primary-custom">
              Browse All Trekking Routes
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
}
