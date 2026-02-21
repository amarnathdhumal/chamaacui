import type { Metadata } from "next";
import BorderAnimationClient from "./border-animation-client";

export const metadata: Metadata = {
  title: "Border Animation | Chamaac UI",
  description: "An animated border effect built with Motion.",
};

export default function Page() {
  return <BorderAnimationClient />;
}
