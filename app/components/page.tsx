import { constructMetadata } from "@/lib/utils";
import ComponentsGrid from "./components-grid";

export const metadata = constructMetadata({
  title: "Components",
  description: "A collection of interactive and animated components for your applications.",
  image: "/images/og-image.png",
});

export default function ComponentsPage() {
  return <ComponentsGrid />;
}
