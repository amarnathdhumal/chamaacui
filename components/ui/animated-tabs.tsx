"use client";

import { m } from "motion/react";
import { cn } from "@/lib/utils";

type Tab = {
  label: string;
  value: string;
};

interface AnimatedTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (value: string) => void;
  layoutId?: string;
  className?: string;
}

export default function AnimatedTabs({
  tabs,
  activeTab,
  onTabChange,
  layoutId = "activeTab",
  className,
}: AnimatedTabsProps) {
  return (
    <div className={cn("flex flex-row gap-4 ", className)}>
      {tabs.map((tab) => (
        <m.button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={cn(
            "relative text-base/10 font-medium px-4 transition-colors cursor-pointer",
            activeTab === tab.value
              ? "dark:text-white text-black"
              : "dark:text-gray-300 dark:hover:text-white text-gray-500 hover:text-black"
          )}
          whileHover={{ scale: 1.05 }}
        >
          {tab.label}
          {activeTab === tab.value && (
            <m.div
              layoutId={layoutId}
              className="absolute bottom-0 left-0 right-0 h-[2px] dark:bg-white bg-black"
              transition={{ duration: 0.2 }}
            />
          )}
        </m.button>
      ))}
    </div>
  );
}
