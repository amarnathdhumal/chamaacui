"use client";

import ChevronsRightIcon from "@/registry/chamaac/animated-icons/chevrons-right-icon";

export default function ChevronsRightIconDemo() {
  return (
    <ChevronsRightIcon
      className="text-black dark:text-white"
      size={40}
      duration={1.5}
      strokeWidth={2}
      repeatDelay={1}
      ease="easeInOut"
    />
  );
}
