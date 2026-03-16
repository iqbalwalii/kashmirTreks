import type { Metadata } from "next";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import Whatsapp from "../Components/Whatsapp";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Mount Eco - Kashmir Treks & Adventures",
  description:
    "Guided hiking, trekking tours and mountain adventures in the Himalayas of Kashmir",
  icons: {
    icon: [
      { url: "/assets/images/favicon.ico" },
      { url: "/assets/images/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/assets/images/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/assets/images/apple-touch-icon.png",
  },
  manifest: "/assets/images/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Providers>
          <Navigation />
          {children}
          <Whatsapp />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
