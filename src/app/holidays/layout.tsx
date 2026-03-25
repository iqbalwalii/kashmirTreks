import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kashmir Holiday Packages — Gulmarg, Pahalgam, Tulip Garden | Mount Eco",
  description:
    "Book all-inclusive Kashmir holiday packages: Gulmarg skiing, Pahalgam valleys, tulip garden tours, Ladakh trips and more. Local experts based in Anantnag.",
  keywords: [
    "kashmir holiday packages",
    "kashmir tour packages",
    "gulmarg skiing",
    "pahalgam tour",
    "tulip garden kashmir",
    "ladakh trip",
    "kashmir plans",
    "kashmir trip",
  ],
};

export default function HolidaysLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
