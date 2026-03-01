import FavouritesComponentsGrid from "./favourites-components-grid";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Favourites",
  description: "Your favourite UI components saved for later.",
});

export default function FavouritesPage() {
  return <FavouritesComponentsGrid />;
}
