import styles from "../styles/Home.module.css";
import Slider from "../Components/Carousel";
import { Container } from "react-bootstrap";
export default function Home() {
  return (
    <>
      <Slider />
      <Container>
        <h2 className="text-center mt-5">KASHMIR TREKS</h2>
        <p className="text-center">Adventure comes alive!</p>
        <p className="text-center">
          Kashmir Treks is an expedition and adventure travel company. We offer
          guided hiking, trekking tours and mountain adventures in the Himalayas
          of Kashmir. We specialize in selected classic treks and climbs, such
          as the Great Lakes Trek, the Mount Harmukh Climb, Kolahoi Glacier
          Trek, Stok-Kangri Climb, and the Zanskar Valley Trek. We also support
          TV/ Film shootings and documentaries and are equally happy to design a
          private trip, tailor-made to meet your specific requirements. Being
          native and independent, we provide a friendly, personal, secure, and
          authentic mountain experience.
        </p>
      </Container>
    </>
  );
}
