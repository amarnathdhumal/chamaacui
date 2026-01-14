"use client";

import AlertCircleIcon from "@/registry/chamaac/animated-icons/alert-circle-icon";

export default function AlertCircleIconDemo() {
  return (
    <AlertCircleIcon
      className="text-black dark:text-white"
      size={40}
      duration={1.5}
      strokeWidth={2}
      repeatDelay={1}
      ease="easeInOut"
    />
  );
}
