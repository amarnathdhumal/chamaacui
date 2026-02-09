"use client";

import { componentCards } from "@/lib/data";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";

const ComponentCard = ({
  component,
}: {
  component: (typeof componentCards)[0];
}) => {
  const [isLoading, setIsLoading] = useState(
    () => !!(component.videoSrc || component.imagePath)
  );
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.5 });

  useEffect(() => {
    if (
      component.videoSrc &&
      videoRef.current &&
      videoRef.current.readyState >= 3
    ) {
      setIsLoading(false);
    }
  }, [component.videoSrc]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView]);

  const handleLoad = () => setIsLoading(false);

  return (
    <motion.div whileHover={{ y: -4 }}>
      <Link href={component.link}>
        <motion.div
          ref={containerRef}
          className={cn(
            "group relative h-full rounded-[16px] border border-border p-2",
            "bg-gray-50 dark:bg-neutral-900",
            "overflow-hidden cursor-pointer",
            "transition-all duration-300"
          )}
        >
          {/* Image Container */}
          <div
            className={cn(
              "relative w-full aspect-video rounded-[12px] overflow-hidden ",
              component.bgColor
            )}
          >
            {/* Skeleton Overlay */}
            {isLoading && (
              <div className="absolute inset-0 z-10 animate-pulse bg-neutral-200 dark:bg-neutral-800 rounded-[12px]" />
            )}

            {component.videoSrc && (
              <video
                ref={videoRef}
                src={component.videoSrc}
                loop
                muted
                playsInline
                onLoadedData={handleLoad}
                className={cn(
                  "w-full h-full object-cover transition-opacity  border-none outline-none duration-300 bg-gray-50 dark:bg-neutral-900",
                  isLoading ? "opacity-0" : "opacity-100"
                )}
              />
            )}
          </div>

          {/* Content */}
          <div className="pb-2 pt-4 px-2 md:px-2">
            <h3 className="text-xl leading-none  font-medium text-black dark:text-white mb-2 md:mb-4  group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors tracking-[-0.01em]">
              {component.title}
            </h3>
            <p className="text-sm/5 text-neutral-600 dark:text-gray-300 tracking-wide ">
              {component.description}
            </p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
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
