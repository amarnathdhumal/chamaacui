import { Metadata } from "next";
import GetStartedClient from "./get-started-client";

export const metadata: Metadata = {
  title: "Get Started | Chamaac UI",
  description:
    "Learn how to install and configure Chamaac UI components in your Next.js application.",
};

export default function GetStartedPage() {
  return <GetStartedClient />;
}
