import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Kashmir Tour Packages — Bespoke Travel | Mount Eco",
  description:
    "Design your own Kashmir trip with Mount Eco. Custom itineraries for families, couples and groups — covering Gulmarg, Pahalgam, Ladakh, tulip garden and Himalayan treks.",
  keywords: [
    "custom kashmir tour",
    "bespoke kashmir package",
    "kashmir trip planner",
    "kashmir travel",
    "kashmir itinerary",
  ],
};

export default function BespokeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
