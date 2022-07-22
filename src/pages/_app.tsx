import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Components/Navigation";
import Footer from "../Components/Footer";
import Whatsapp from "../Components/Whatsapp";
import ThemeProvider from "react-bootstrap/ThemeProvider";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        <Navbar />
        <Component {...pageProps} />
        <Whatsapp />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
