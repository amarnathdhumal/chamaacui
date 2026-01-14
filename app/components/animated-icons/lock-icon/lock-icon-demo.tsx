"use client";

import LockIcon from "@/registry/chamaac/animated-icons/lock-icon";

export default function LockIconDemo() {
  return (
    <LockIcon
      className="text-black dark:text-white"
      size={40}
      duration={1.2}
      strokeWidth={2}
      repeatDelay={1}
      ease="easeInOut"
    />
  );
}
