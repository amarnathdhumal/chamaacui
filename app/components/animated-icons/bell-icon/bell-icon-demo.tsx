"use client";

import BellIcon from "@/registry/chamaac/animated-icons/bell-icon";

export default function BellIconDemo() {
    return (
        <BellIcon
            className="text-black dark:text-white"
            size={40}
            duration={1.3}
            strokeWidth={2}
            repeatDelay={1}
            ease="easeInOut"
        />
    );
}
