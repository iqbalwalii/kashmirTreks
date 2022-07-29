import React from "react";
import { Button, Carousel, Row } from "react-bootstrap";
import Image from "next/image";
import sundayData from "../data/sunday";
import Link from "next/link";
import { useRouter } from "next/router";
const Sunday = () => {
  const router = useRouter();
  return (
    <Row>
      <h1 className="text-center qimm mt-4 mb-0 pb-0">
        Kashmir Ensueno Sunday Trek
      </h1>
      <p className="subHeading text-center mb-4">
        A short trek to Make Your Day
      </p>
      <Carousel>
        <Carousel.Item>
          <Image
            width={900}
            height={500}
            layout="responsive"
            className="d-block w-100"
            src={sundayData.image2}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="">
              <h3>{sundayData?.name}</h3>
              <p>{sundayData?.description}</p>
              <div className="d-flex justify-content-center">
                <Button
                  variant="warning"
                  onClick={() =>
                    router.push({
                      pathname: "/book",
                      query: { name: "daytour" },
                    })
                  }
                >
                  Book Your Slot
                </Button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            width={900}
            height={500}
            layout="responsive"
            className="d-block w-100"
            src={sundayData.image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="">
              <h3>{sundayData?.name}</h3>
              <p>{sundayData?.description}</p>
              <div className="d-flex justify-content-center">
                <Button
                  variant="warning"
                  onClick={() =>
                    router.push({
                      pathname: "/book",
                      query: { name: "daytour" },
                    })
                  }
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
