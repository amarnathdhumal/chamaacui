"use client";

import HourglassIcon from "@/registry/chamaac/animated-icons/hourglass-icon";

export default function HourglassIconDemo() {
    return (
        <HourglassIcon
            className="text-black dark:text-white"
            size={40}
            duration={2}
            strokeWidth={2}
            repeatDelay={1}
            ease="easeInOut"
        />
    );
}
