"use client";
import React from "react";
import Slider from "../Components/Carousel";
import { Button, Container } from "react-bootstrap";
import Card from "../Components/Card";
import Link from "next/link";
import Sunday from "../Components/sunday";
import Modal from "../Components/Modal";
export default function Home() {
  return (
    <>
      <Slider />
      <Modal />
      <Container>
        <Sunday />
        <div className="paragraph">
          <h2 className="text-center mt-5 heading">Kashmir Ensueno</h2>
          <p className="text-center subheading">Adventure comes alive!</p>
          <p
            className="text-center description"
            // style={{ fontFamily: "Caveat, cursive", fontSize: "1.5rem" }}
          >
            Kashmir Ensueno is an expedition and adventure travel company. We
            offer guided hiking, trekking tours and mountain adventures in the
            Himalayas of Kashmir. We specialize in selected classic treks and
            climbs, such as the Great Lakes Trek, the Mount Harmukh Climb,
            Kolahoi Glacier Trek, Stok-Kangri Climb, and the Zanskar Valley
            Trek. We also support TV/ Film shootings and documentaries and are
            equally happy to design a private trip, tailor-made to meet your
            specific requirements. Being native and independent, we provide a
            friendly, personal, secure, and authentic mountain experience.
          </p>
        </div>
        <div className="featured my-4">
          <h1 className=" mb-3 text-center qimm">FEATURED TOURS</h1>
          <div className="cardGroup">
            <div className="mb-4 ">
              <Link href="/treks/tulail_gangabal_naranag_trek">
                <div>
                  <Card
                    name={"Tulail - Gangbal - Naranag Trek"}
                    image={
                      "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658322099/3da497d1-d051-408e-be5b-d2e59d94e271_Kashmir_Great_Lakes_KGL_RAJARSHI_MANNA_-_UNDER_THE_SAME_SKY_d5dbph.webp"
                    }
                    link={"treks/tulail_gangbal_naranag_trek"}
                    type={"trek"}
                  />
                </div>
              </Link>
            </div>
            <div className="mb-4 ">
              <Link href="/treks/kolahoi_glacier_trek">
                <div>
                  <Card
                    name={"Mount Kolohai Full Glacier Trek"}
                    image={
                      "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658322194/Kolahoi-Glacier-Trek_qsralh.webp"
                    }
                    type={"trek"}
                  />
                </div>
              </Link>
            </div>
            <div className="mb-4 ">
              <Link href="/treks/srinagar_warwan_panikhar_trek">
                <div>
                  <Card
                    name={"Srinagar Warwan Valley Panikhar Trek"}
                    image={
                      "https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658322295/9f9c89a8-e9f4-44a9-aca5-5baba75b42d2_Warwan_Valley_-_Subro_-_Village_-_Compressed_wyzdbp.webp"
                    }
                    type={"trek"}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Link href="/treks">
            <Button style={{ background: "#004220" }}>
              Browse All Destinations
            </Button>
          </Link>
        </div>
        <div className="paragraph my-5">
          <h2 className="text-center mt-5  heading">KASHMIR </h2>
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
          <h3 className=" mb-3 text-center qimm">FIXED DEPARTURES</h3>
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
                  name={"kashmir Great Lakes Trek"}
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
            <Button style={{ background: "#004220" }}>
              Browse All Destinations
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
}
