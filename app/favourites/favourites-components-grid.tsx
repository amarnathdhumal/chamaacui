"use client";

import { useFavourites } from "@/hooks/use-favourites";
import { componentCards } from "@/lib/data";
import { ComponentCard } from "../components/components-grid";
import { IconHeartOff } from "@tabler/icons-react";

export default function FavouritesComponentsGrid() {
  const { favourites, isMounted } = useFavourites();

  if (!isMounted) return null;

  // Render in reverse order of how they were added (latest first)
  const favouriteComponents = [...favourites]
    .reverse()
    .map((link) => componentCards.find((card) => card.link === link))
    .filter((card) => card !== undefined);

  return (
    <div className="flex flex-col w-full pb-12">
      <h1 className="text-[2rem]/10 md:text-[2.5rem]/10 font-semibold tracking-tight text-black dark:text-white mb-3">
        Your Favourites
      </h1>
      <p className="text-base/5 md:text-lg/7 text-text-secondary tracking-tight mb-5 md:mb-10">
        A collection of components you&apos;ve saved for later.
      </p>

      {favouriteComponents.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-20 text-center mx-auto text-neutral-500">
          <IconHeartOff className="size-16 stroke-1 border-neutral-200 dark:border-neutral-800" />
          <p className="text-lg">
            No favourite components yet.
            <br />
            <span className="text-sm">
              Click the heart icon on any component to save it here.
            </span>
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {favouriteComponents.map((component) => (
            <ComponentCard
              key={component.link}
              component={component}
              isFavouritesPage={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}
