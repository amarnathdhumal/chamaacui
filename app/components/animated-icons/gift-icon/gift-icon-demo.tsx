"use client";

import GiftIcon from "@/registry/chamaac/animated-icons/gift-icon";

export default function GiftIconDemo() {
  return (
    <GiftIcon
      className="text-black dark:text-white"
      size={40}
      duration={0.8}
      strokeWidth={2}
      repeatDelay={1.5}
      ease="easeInOut"
    />
  );
}
