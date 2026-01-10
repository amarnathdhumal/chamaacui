"use client";

import CrownIcon from "@/registry/chamaac/animated-icons/crown-icon";

export default function CrownIconDemo() {
    return (
        <CrownIcon
            className="text-black dark:text-white"
            size={40}
            duration={1}
            strokeWidth={2}
            repeatDelay={1.5}
            ease="easeInOut"
        />
    );
}
