"use client";

import MoonIcon from "@/registry/chamaac/animated-icons/moon-icon";

export default function MoonIconDemo() {
  return (
    <MoonIcon
      className="text-black dark:text-white"
      size={40}
      duration={1}
      strokeWidth={2}
      repeatDelay={0.3}
      ease="easeInOut"
    />
  );
}
