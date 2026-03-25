import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Mount Eco — Kashmir Tour & Travels, Anantnag",
  description:
    "Mount Eco is a locally owned tour & travel agency based in Anantnag, Kashmir. We offer 360° Kashmir experiences — holiday packages, treks, Gulmarg, Pahalgam, Ladakh and more.",
  keywords: [
    "mount eco kashmir",
    "anantnag travel agency",
    "kashmir tour operator",
    "local kashmir guide",
    "kashmir travel company",
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
