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
            <p className="text-base/5 md:text-lg/7 text-text-secondary tracking-tight mt-4 max-w-[750px]">
              A collection of smooth, micro-interaction animations for your
              icons.
            </p>
          </div>
        </div>
      </div>

      <div className=" mb-6 flex items-center justify-between gap-4">
        <div className="hidden md:flex justify-between items-center gap-2 px-2 md:px-3 h-12 text-sm hover:bg-bg-tertiary rounded-[12px] border border-border transition-colors bg-bg-secondary text-text-secondary w-full max-w-[50%]">
          <div className="flex items-center gap-[10px] w-full">
            <IconSearch size={20} className="transition-colors" />
            <input
              type="text"
              placeholder="Search icons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-base/5 text-black dark:text-white placeholder:text-text-secondary placeholder:text-base/5 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex h-12 items-center justify-center rounded-[12px] p-1 bg-bg-secondary border border-border">
          <TabButton
            name="Infinite"
            onClick={() => setIsHoveredMode(false)}
            isActive={!isHoveredMode}
            icon={<Infinity size={20} />}
            layoutId="icon-grid-tab"
          />
          <TabButton
            name="Hover"
            onClick={() => setIsHoveredMode(true)}
            isActive={isHoveredMode}
            icon={<MousePointer2 size={20} />}
            layoutId="icon-grid-tab"
          />
        </div>
      </div>

      {filteredIcons.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="p-4 rounded-full bg-neutral-100 dark:bg-neutral-800 mb-4">
            <IconSearch className="size-8 text-text-secondary" />
          </div>
          <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100 mb-2">
            No icons found
          </h3>
          <p className="text-text-secondary max-w-[300px]">
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
