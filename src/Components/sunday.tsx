"use client";
import React from "react";
import { Button, Carousel, Row } from "react-bootstrap";
import Image from "next/image";
import sundayData from "../data/sunday";
import { useRouter } from "next/navigation";

const Sunday = () => {
  const router = useRouter();
  const [buttonText, setButtonText] = React.useState("Book Your Slot");
  const [isTempDisabled, setIsTempDisabled] = React.useState(false);
  const handleSundayTrekClick = () => {
    if (isTempDisabled) return;

    setButtonText("Comming Soon.. Stay Tuned");
    setIsTempDisabled(true);

    setTimeout(() => {
      setButtonText("Book Your Slot");
      setIsTempDisabled(false);
    }, 5000);
  };
  return (
    <Row>
      <h1 className="text-center qimm mt-4 mb-0 pb-0">Mount Eco Sunday Trek</h1>
      <p className="subHeading text-center mb-4">
        A short trek to Make Your Day
      </p>
      <Carousel>
        <Carousel.Item>
          <Image
            width={900}
            height={500}
            className="d-block w-100"
            src={sundayData.image2}
            alt="First slide"
            style={{ width: "100%", height: "auto" }}
          />
          <Carousel.Caption>
            <div>
              <h3>{sundayData?.name}</h3>
              <p>{sundayData?.description}</p>
              <div className="d-flex justify-content-center">
                <Button
                  className="btn-gold-custom"
                  onClick={handleSundayTrekClick}
                  disabled={isTempDisabled}
                >
                  {buttonText}
                </Button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            width={900}
            height={500}
            className="d-block w-100"
            src={sundayData.image1}
            alt="Second slide"
            style={{ width: "100%", height: "auto" }}
          />
          <Carousel.Caption>
            <div>
              <h3>{sundayData?.name}</h3>
              <p>{sundayData?.description}</p>
              <div className="d-flex justify-content-center">
                <Button
                  className="btn-gold-custom"
                  disabled
                  onClick={() => router.push("/book?name=daytour")}
                >
                  Book Your Slot
                </Button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Row>
  );
};

export default Sunday;
