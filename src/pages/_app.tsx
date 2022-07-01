import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Components/Navigation";
import Footer from "../Components/Footer";
import Whatsapp from "../Components/Whatsapp";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />;
      <Whatsapp />
      <Footer />
    </>
  );
}

export default MyApp;
