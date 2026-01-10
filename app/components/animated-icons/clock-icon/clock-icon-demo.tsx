"use client";

import ClockIcon from "@/registry/chamaac/animated-icons/clock-icon";

export default function ClockIconDemo() {
    return (
        <ClockIcon
            className="text-black dark:text-white"
            size={40}
            duration={0.5}
            strokeWidth={2}
            repeatDelay={1}
            ease="easeInOut"
        />
    );
}
