"use client";
import { TabButtonTypes } from "@/lib/types";
import { cn } from "@/lib/utils";
import { m, LazyMotion, domMax } from "motion/react";

const TabButton = ({
  name,
  onClick,
  isActive,
  icon,
  layoutId = "activeTab",
}: TabButtonTypes) => {
  return (
    <LazyMotion features={domMax}>
      <button
        onClick={onClick}
        className={cn(
          "flex flex-row gap-2 relative dark:text-white text-black px-4 py-2 rounded-[8px] text-base font-medium items-center cursor-pointer",
          isActive
            ? "dark:text-white text-black"
            : "text-black hover:text-black dark:hover:text-white"
        )}
      >
        {isActive && (
          <m.div
            layoutId={layoutId}
            className="absolute inset-0 bg-bg-tertiary rounded-[8px]"
            transition={{ duration: 0.3 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-2">
          {icon}
          {name}
        </span>
      </button>
    </LazyMotion>
  );
};

export default TabButton;
