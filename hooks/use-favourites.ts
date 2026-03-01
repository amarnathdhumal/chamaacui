import { useState, useEffect } from "react";

export function useFavourites() {
  const [favourites, setFavourites] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const stored = localStorage.getItem("favourites");
    if (stored) {
      try {
        setFavourites(JSON.parse(stored));
      } catch {
        setFavourites([]);
      }
    }
  }, []);

  const toggleFavourite = (link: string) => {
    const stored = localStorage.getItem("favourites");
    let currentFavs: string[] = [];
    if (stored) {
      try {
        currentFavs = JSON.parse(stored);
      } catch {
        currentFavs = [];
      }
    }

    let newFavourites: string[];
    if (currentFavs.includes(link)) {
      newFavourites = currentFavs.filter((item) => item !== link);
    } else {
      newFavourites = [...currentFavs, link];
    }

    setFavourites(newFavourites);
    localStorage.setItem("favourites", JSON.stringify(newFavourites));
    window.dispatchEvent(new Event("favouritesChange"));
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const stored = localStorage.getItem("favourites");
      if (stored) {
        try {
          setFavourites(JSON.parse(stored));
        } catch {}
      } else {
        setFavourites([]);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("favouritesChange", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("favouritesChange", handleStorageChange);
    };
  }, []);

  return { favourites, toggleFavourite, isMounted };
}
