"use client";

import ArrowDownIcon from "@/registry/chamaac/animated-icons/arrow-down-icon";

export default function ArrowDownIconDemo() {
    return (
        <ArrowDownIcon
            className="text-black dark:text-white"
            size={40}
            duration={1.5}
            strokeWidth={2}
            repeatDelay={1}
            ease="easeInOut"
        />
    );
}
