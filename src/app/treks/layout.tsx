import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kashmir Treks & Himalayan Trekking | Mount Eco",
  description:
    "Explore guided trekking routes across Kashmir — Great Lakes, Tarsar Marsar, Sinthan Top and more. Book your Himalayan trek with Mount Eco, based in Anantnag.",
  keywords: [
    "kashmir trekking",
    "himalayan trek",
    "kashmir treks",
    "great lakes trek kashmir",
    "tarsar marsar trek",
    "kashmir hiking",
    "anantnag treks",
  ],
};

export default function TreksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
