"use client";

import ChevronRightIcon from "@/registry/chamaac/animated-icons/chevron-right-icon";

export default function ChevronRightIconDemo() {
  return (
    <ChevronRightIcon
      className="text-black dark:text-white"
      size={40}
      duration={1.5}
      strokeWidth={2}
      repeatDelay={1}
      ease="easeInOut"
    />
  );
}
