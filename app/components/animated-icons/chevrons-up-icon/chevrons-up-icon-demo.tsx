"use client";

import ChevronsUpIcon from "@/registry/chamaac/animated-icons/chevrons-up-icon";

export default function ChevronsUpIconDemo() {
    return (
        <ChevronsUpIcon
            className="text-black dark:text-white"
            size={40}
            duration={1.5}
            strokeWidth={2}
            repeatDelay={1}
            ease="easeInOut"
        />
    );
}
