import type { Metadata } from "next";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import Whatsapp from "../Components/Whatsapp";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Mount Eco - Kashmir Tours, Treks & Holiday Packages",
  description:
    "Mount Eco Tour & Travels — based in Anantnag, Kashmir. Book Kashmir holiday packages, Gulmarg skiing, Pahalgam tours, Ladakh trips, tulip garden tours and guided Himalayan treks.",
  keywords: [
    "kashmir tour",
    "kashmir trip",
    "kashmir holiday packages",
    "kashmir plans",
    "ladakh trip",
    "ladakh tour",
    "tulip garden kashmir",
    "gulmarg skiing",
    "gulmarg tour",
    "pahalgam tour",
    "pahalgam holiday",
    "kashmir trekking",
    "himalayas trek",
    "kashmir tourist packages",
    "anantnag tours",
    "mount eco",
    "kashmir travel agency",
  ],
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
