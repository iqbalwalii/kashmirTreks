import styles from "../styles/Home.module.css";
import Slider from "../Components/Carousel";
import { Button, Container, Row, Col } from "react-bootstrap";
import Card from "../Components/Card";
export default function Home() {
  return (
    <>
      <Slider />
      <Container>
        <div className="paragraph">
          <h2 className="text-center mt-5">KASHMIR TREKS</h2>
          <p className="text-center">Adventure comes alive!</p>
          <p className="text-center">
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
        <div className="featured my-5">
          <h3 className=" mb-3 text-center">FEATURED TOURS</h3>
          <Row className="d-flex justify-content-around">
            <Col className="mb-4">
              <Card name={"Tulail - Gangbal - Naranag Trek"} />
            </Col>
            <Col className="mb-4">
              <Card name={"Mount Kolohai Full Glacier Trek"} />
            </Col>
            <Col className="mb-4">
              <Card name={"Srinagar Warwan Valley Panikhar Trek"} />
            </Col>
          </Row>
        </div>
        <div className="d-flex justify-content-center">
          <Button style={{ background: "#004220" }}>
            Browse All Destinations
          </Button>
        </div>
        <div className="paragraph my-5">
          <h2 className="text-center mt-5">KASHMIR </h2>
          <p className="text-center">A Summer Escape and a Winter Playground</p>
          <p className="text-center">
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
        <div className="featured my-5">
          <h3 className=" mb-3 text-center">FIXED DEPARTURES</h3>
          <Row className="d-flex justify-content-around">
            <Col className="mb-4">
              <Card name={"Gangbal Mahlish Trek"} btn={true} />
            </Col>
            <Col className="mb-4">
              <Card name={"kashmir Great Lakes Trek"} btn={true} />
            </Col>
            <Col className="mb-4">
              <Card name={"Tarsar Marsar Trek"} btn={true} />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
