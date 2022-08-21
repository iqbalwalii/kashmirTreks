import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Container, Row, Col } from "react-bootstrap";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import styles from "../styles/Slider.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <div className={styles.main}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.slides}
      >
        <SwiperSlide className={styles.first}>
          <div className={styles.controls}>
            <h2 className="text-light">Best Places to Wander</h2>
            <Link href="/treks">
              <Button variant="light" className="mx-1 ">
                Browse Treks
              </Button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.second}>
          <div className={styles.controls}>
            <h2 className="text-light">Fil Your Heart with Adventure</h2>
            <Link href="/holidays">
              <Button variant="light" className="mx-1 ">
                Browse Tours
              </Button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.last}>
          <div className={styles.controls}>
            <h2 className="text-light">Visit Srinagar</h2>
            <Link href="/holidays/kashmir_spring_special_tour">
              <Button variant="light">Book Now</Button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
