"use client";

import ChevronsLeftIcon from "@/registry/chamaac/animated-icons/chevrons-left-icon";

export default function ChevronsLeftIconDemo() {
    return (
        <ChevronsLeftIcon
            className="text-black dark:text-white"
            size={40}
            duration={1.5}
            strokeWidth={2}
            repeatDelay={1}
            ease="easeInOut"
        />
    );
}
