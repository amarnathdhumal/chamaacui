"use client";

import BatteryIcon from "@/registry/chamaac/animated-icons/battery-icon";

export default function BatteryIconDemo() {
  return (
    <BatteryIcon
      className="text-black dark:text-white"
      size={40}
      duration={1}
      strokeWidth={2}
    />
  );
}
