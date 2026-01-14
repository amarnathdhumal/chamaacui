import { constructMetadata } from "@/lib/utils";
import ButtonsGrid from "./buttons-grid";

export const metadata = constructMetadata({
  title: "Buttons",
  description:
    "A collection of interactive and animated buttons for your applications.",
  image: "/components/buttons/buttons.png",
});

export default function ButtonsPage() {
  return <ButtonsGrid />;
}
