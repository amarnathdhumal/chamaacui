"use client";

import { useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import { icons } from "./icons-data";
import IconCard from "./icon-card";
import TabButton from "@/components/ui/tab-button";

import { MousePointer2, Infinity } from "lucide-react";

export default function AnimatedIconsGrid() {
  const [isHoveredMode, setIsHoveredMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIcons = icons
    .filter((icon) =>
      icon.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="w-full mx-auto mb-20">
      <div className="mb-5 md:mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-[2rem]/10 md:text-[2.5rem]/10 font-semibold tracking-tight text-black dark:text-white">
              Animated Icons
            </h1>
            <p className="text-base/5 md:text-lg/7 text-neutral-600 dark:text-gray-300 tracking-tight mt-4 max-w-[750px]">
              A collection of smooth, micro-interaction animations for your
              icons.
            </p>
          </div>
        </div>
      </div>

      <div className=" mb-6 flex items-center justify-between gap-4">
        <div className="w-full max-w-[50%] relative">
          <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600 dark:text-gray-300 size-4" />
          <input
            type="text"
            placeholder="Search icons..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-[16px] border border-border bg-white dark:bg-black text-black dark:text-white transition-all placeholder:text-neutral-500 focus:outline-none "
          />
        </div>
        <div className="flex h-12 items-center justify-center rounded-[12px] bg-neutral-100 p-1 dark:bg-neutral-900 border border-border">
          <TabButton
            name="Infinite"
            onClick={() => setIsHoveredMode(false)}
            isActive={!isHoveredMode}
            icon={<Infinity size={18} />}
            layoutId="icon-grid-tab"
          />
          <TabButton
            name="Hover"
            onClick={() => setIsHoveredMode(true)}
            isActive={isHoveredMode}
            icon={<MousePointer2 size={18} />}
            layoutId="icon-grid-tab"
          />
        </div>
      </div>

      {filteredIcons.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="p-4 rounded-full bg-neutral-100 dark:bg-neutral-800 mb-4">
            <IconSearch className="size-8 text-neutral-400" />
          </div>
          <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100 mb-2">
            No icons found
          </h3>
          <p className="text-neutral-600 dark:text-gray-300 max-w-[300px]">
            We couldn&apos;t find any icons matching &quot;{searchQuery}&quot;.
            Try searching for something else.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-5">
          {filteredIcons.map((icon) => (
            <IconCard
              key={icon.name}
              icon={icon}
              isHoveredMode={isHoveredMode}
            />
          ))}
        </div>
      )}
    </div>
  );
}
