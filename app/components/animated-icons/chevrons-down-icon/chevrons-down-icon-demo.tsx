"use client";

import ChevronsDownIcon from "@/registry/chamaac/animated-icons/chevrons-down-icon";

export default function ChevronsDownIconDemo() {
    return (
        <ChevronsDownIcon
            className="text-black dark:text-white"
            size={40}
            duration={1.5}
            strokeWidth={2}
            repeatDelay={1}
            ease="easeInOut"
        />
    );
}
