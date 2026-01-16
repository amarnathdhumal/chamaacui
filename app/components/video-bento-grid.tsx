"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface BentoItem {
  title: string;
  videoSrc: string;
  className?: string;
}

const bentoItems: BentoItem[] = [
  {
    title: "Interactive Grid",
    videoSrc: "https://assets.amarn.me/interactive-grid.mp4",
    className: "md:col-span-5 md:row-span-2",
  },

  {
    title: "Premium Button",
    videoSrc: "https://assets.amarn.me/premium_button.mp4",
    className: "md:col-span-3 md:row-span-1",
  },

  {
    title: "Stats Cards",
    videoSrc: " https://assets.amarn.me/stats-card.mp4",
    className: "md:col-span-4 ",
  },
  {
    title: "Carousel",
    videoSrc: "https://assets.amarn.me/carousel.mp4",

    className: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Glowing Border Button",
    videoSrc: "https://assets.amarn.me/glowing-border-button.mp4",
    className: "md:col-span-3",
  },

  {
    title: "Dancing Letters",
    videoSrc: "https://assets.amarn.me/dancing-letters.mp4",
    className: "md:col-span-3",
  },
  {
    title: "Dock",

    videoSrc: "https://assets.amarn.me/dock.mp4",
    className: "md:col-span-4",
  },
  {
    title: "Gauge",
    videoSrc: "https://assets.amarn.me/gauge.mp4",
    className: "md:col-span-5 row-span-2 ",
  },
  {
    title: "Animated Icons",
    videoSrc: "https://assets.amarn.me/animated-iconsv2.mp4",
    className: "md:col-span-7 row-span-1",
  },
];

function BentoCard({ item }: { item: BentoItem }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[15px] border dark:border-white/15 border-black/15 ",
        "transition-all duration-300",
        item.className
      )}
    >
      {/* Video */}
      <div className="relative w-full h-full">
        <video
          src={item.videoSrc}
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
          onLoadedData={() => setIsLoaded(true)}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Loading placeholder */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-sm md:text-base font-medium text-white drop-shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default function VideoBentoGrid() {
  return (
    <section className="w-full py-10 ">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid  grid-cols-12 auto-rows-[180px] md:auto-rows-[200px] gap-4">
          {bentoItems.map((item, index) => (
            <BentoCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
