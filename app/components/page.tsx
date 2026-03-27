import { constructMetadata } from "@/lib/utils";
import ComponentsGrid from "./components-grid";

export const metadata = constructMetadata({
  title: "Components",
  description:
    "A collection of high-performance shader components and interactive animated elements.",
  image: "/images/og-image.png",
});

export default function ComponentsPage() {
  return <ComponentsGrid />;
}
