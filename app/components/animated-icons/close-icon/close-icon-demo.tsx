"use client";

import CloseIcon from "@/registry/chamaac/animated-icons/close-icon";

export default function CloseIconDemo() {
  return (
    <CloseIcon
      className="text-black dark:text-white"
      size={40}
      duration={0.8}
      strokeWidth={2}
      repeatDelay={1}
      ease="easeInOut"
    />
  );
}
