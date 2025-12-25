"use client";

import { componentCards } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";

const ComponentCard = ({ component }: { component: typeof componentCards[0] }) => {
  const [isLoading, setIsLoading] = useState(() => !!(component.videoSrc || component.imagePath));
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (component.videoSrc && videoRef.current && videoRef.current.readyState >= 3) {
      setIsLoading(false);
    }
  }, [component.videoSrc]);

  const handleLoad = () => setIsLoading(false);

  return (
    <motion.div whileHover={{ y: -4 }}>
      <Link href={component.link}>
        <motion.div
          className={cn(
            "group relative h-full rounded-[16px] border border-gray-200 dark:border-neutral-800 p-2",
            "bg-gray-50 dark:bg-neutral-900",
            "overflow-hidden cursor-pointer",
            "transition-all duration-300",
            " hover:border-gray-300 dark:hover:border-neutral-700"
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

            {component.videoSrc ? (
              <video
                ref={videoRef}
                src={component.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                onLoadedData={handleLoad}
                className={cn(
                  "w-full h-full object-cover transition-opacity  border-none outline-none duration-300 bg-gray-50 dark:bg-neutral-900",
                  isLoading ? "opacity-0" : "opacity-100"
                )}
              />
            ) : component.imagePath ? (
              <Image
                src={component.imagePath}
                alt={component.title}
                fill
                onLoadingComplete={handleLoad}
                className={cn(
                  "object-contain transition-transform duration-300",
                  isLoading ? "opacity-0" : "opacity-100"
                )}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-gray-400 dark:text-gray-600">
                  <svg
                    className="w-16 h-16 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm">Image coming soon</p>
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="pb-2 pt-4 px-2 md:px-2">
            <h3 className="text-xl leading-none  font-medium text-black dark:text-white mb-2 md:mb-4  group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors tracking-[-0.01em]">
              {component.title}
            </h3>
            <p className="text-sm/5 text-gray-600 dark:text-gray-400 tracking-wide ">
              {component.description}
            </p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

const Components = () => {
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

export default Components;
