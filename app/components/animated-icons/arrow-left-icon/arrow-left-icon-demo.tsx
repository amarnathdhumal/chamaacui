"use client";

import ArrowLeftIcon from "@/registry/chamaac/animated-icons/arrow-left-icon";

export default function ArrowLeftIconDemo() {
    return (
        <ArrowLeftIcon
            className="text-black dark:text-white"
            size={40}
            duration={1.5}
            strokeWidth={2}
            repeatDelay={1}
            ease="easeInOut"
        />
    );
}
