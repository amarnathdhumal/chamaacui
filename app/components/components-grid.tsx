"use client";

import { componentCards } from "@/lib/data";
import Link from "next/link";
import { m, LazyMotion, domAnimation } from "motion/react";
import { cn } from "@/lib/utils";
import { useState, useRef, useCallback } from "react";
import Image from "next/image";

const ComponentCard = ({
  component,
}: {
  component: (typeof componentCards)[0];
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    const video = videoRef.current;
    if (!video) return;
    video.load();
    video.play().catch(() => {});
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setIsVideoReady(false);
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <m.div>
        <Link href={component.link}>
          <m.div
            className={cn(
              "group relative h-full rounded-[16px] border border-border p-2",
              "bg-gray-50 dark:bg-neutral-900",
              "overflow-hidden cursor-pointer",
              "transition-all duration-300"
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Media Container */}
            <div
              className={cn(
                "relative w-full aspect-video rounded-[12px] overflow-hidden",
                component.bgColor
              )}
            >
              {/* Static image — always present as the base thumbnail */}
              <Image
                src={component.imagePath}
                alt={component.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />

              {/* Video — loads only on hover, fades in over the image when ready */}
              {component.videoSrc && (
                <video
                  ref={videoRef}
                  src={component.videoSrc}
                  loop
                  muted
                  playsInline
                  preload="none"
                  onLoadedData={() => setIsVideoReady(true)}
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover border-none outline-none",
                    "transition-opacity duration-500",
                    isHovered && isVideoReady ? "opacity-100" : "opacity-0"
                  )}
                />
              )}
            </div>

            {/* Content */}
            <div className="pb-2 pt-4 px-2 md:px-2">
              <h3 className="text-xl leading-none font-medium text-black dark:text-white mb-2 md:mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors tracking-[-0.01em]">
                {component.title}
              </h3>
              <p className="text-sm/5 text-neutral-600 dark:text-gray-300 tracking-wide">
                {component.description}
              </p>
            </div>
          </m.div>
        </Link>
      </m.div>
    </LazyMotion>
  );
};

const ComponentsGrid = () => {
  return (
    <div className="flex flex-col w-full pb-12 ">
      {/* Component Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {componentCards.map((component) => (
          <ComponentCard key={component.link} component={component} />
        ))}
      </div>
    </div>
  );
};

export default ComponentsGrid;
