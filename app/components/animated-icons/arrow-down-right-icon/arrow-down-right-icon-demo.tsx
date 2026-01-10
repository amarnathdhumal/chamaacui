"use client";

import ArrowDownRightIcon from "@/registry/chamaac/animated-icons/arrow-down-right-icon";

export default function ArrowDownRightIconDemo() {
    return (
        <ArrowDownRightIcon
            className="text-black dark:text-white"
            size={40}
            duration={1.5}
            strokeWidth={2}
            repeatDelay={1}
            ease="easeInOut"
        />
    );
}
