"use client";

import { cn } from "@/lib/utils";
import SlideUpButton from "@/registry/chamaac/slideup-button/slideup-button";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface BentoItem {
  title: string;
  videoSrc: string;
  href: string;
  className?: string;
}

const bentoItems: BentoItem[] = [
  {
    title: "Interactive Grid",
    videoSrc: "https://assets.amarn.me/interactive-grid.mp4",
    href: "/components/backgrounds/interactive-grid",
    className: "md:col-span-5 md:row-span-2",
  },

  {
    title: "Premium Button",
    videoSrc: "https://assets.amarn.me/premium_button.mp4",
    href: "/components/buttons/premium-button",
    className: "md:col-span-3 md:row-span-1",
  },

  {
    title: "Stats Cards",
    videoSrc: " https://assets.amarn.me/stats-card.mp4",
    href: "/components/sections/stats-cards",
    className: "md:col-span-4 ",
  },
  {
    title: "Carousel",
    videoSrc: "https://assets.amarn.me/carousel2.mp4",
    href: "/components/carousels/carousel",
    className: "md:col-span-4 md:row-span-1",
  },
  // {
  //   title: "How It Works",

  //   videoSrc: "https://assets.amarn.me/how-it-works.mp4",
  //   href: "/components/sections/how-it-works",

  //   className: "md:col-span-3",
  // },
  {
    title: "Glowing Border Button",
    videoSrc: "https://assets.amarn.me/glowing-border-button.mp4",
    href: "/components/buttons/glowing-border-button",
    className: "md:col-span-3",
  },

  {
    title: "Dancing Letters",
    videoSrc: "https://assets.amarn.me/dancing-lettersv3.mp4",
    href: "/components/text-animations/dancing-letters",
    className: "md:col-span-3",
  },
  {
    title: "Dock",

    videoSrc: "https://assets.amarn.me/dock2.mp4",
    href: "/components/navigation/dock",
    className: "md:col-span-4",
  },
  {
    title: "Gauge",
    videoSrc: "https://assets.amarn.me/gauge.mp4",
    href: "/components/sections/gauge",
    className: "md:col-span-5 md:row-span-2 ",
  },
  {
    title: "Animated Icons",
    videoSrc: "https://assets.amarn.me/animated-icons2.mp4",
    href: "/components/animated-icons",
    className: "md:col-span-7 rmd:ow-span-1",
  },
];

function BentoCard({ item }: { item: BentoItem }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Check if video is already loaded (e.g., from browser cache) on mount
  useEffect(() => {
    const video = videoRef.current;
    if (video && video.readyState >= 3) {
      // HAVE_FUTURE_DATA or HAVE_ENOUGH_DATA
      setIsLoaded(true);
    }
  }, []);

  return (
    <Link
      href={item.href}
      className={cn(
        "group relative overflow-hidden rounded-[15px] border border-border ",
        "transition-all duration-300",
        item.className
      )}
    >
      {/* Video */}
      <div className="relative w-full h-full">
        <video
          ref={videoRef}
          src={item.videoSrc}
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
          onLoadedData={() => setIsLoaded(true)}
          onCanPlayThrough={() => setIsLoaded(true)}
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
    </Link>
  );
}

export default function VideoBentoGrid() {
  return (
    <section className="w-full py-0 md:py-10 ">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 h-full auto-rows-[180px] md:auto-rows-[200px] gap-4">
          {bentoItems.map((item, index) => (
            <BentoCard key={index} item={item} />
          ))}
        </div>
        <Link
          href="/components"
          className="flex justify-center mt-5 md:mt-10 mb-10 md:mb-0 w-fit items-center mx-auto"
        >
          <SlideUpButton
            className="
                px-4 py-2 md:px-6 md:py-3
                bg-black dark:bg-white text-white dark:text-black text-sm md:text-base  "
          >
            View All Components
          </SlideUpButton>
        </Link>
      </div>
    </section>
  );
}
