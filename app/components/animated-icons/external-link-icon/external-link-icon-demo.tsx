"use client";

import ExternalLinkIcon from "@/registry/chamaac/animated-icons/external-link-icon";

export default function ExternalLinkIconDemo() {
  return (
    <ExternalLinkIcon
      className="text-black dark:text-white"
      size={40}
      duration={1.5}
      strokeWidth={2}
      repeatDelay={1}
      ease="easeInOut"
    />
  );
}
