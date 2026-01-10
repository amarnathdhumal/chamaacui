"use client";

import ArrowUpIcon from "@/registry/chamaac/animated-icons/arrow-up-icon";

export default function ArrowUpIconDemo() {
    return (
        <ArrowUpIcon
            className="text-black dark:text-white"
            size={40}
            duration={1.5}
            strokeWidth={2}
            repeatDelay={1}
            ease="easeInOut"
        />
    );
}
