import type { Metadata } from "next";
import MarqueeCard from "./marquee-card-client";

export const metadata: Metadata = {
  title: "Marquee Card | Chamaac UI",
  description: "An infinite marquee card grid built with Motion.",
};

export default function Page() {
  return <MarqueeCard />;
}
