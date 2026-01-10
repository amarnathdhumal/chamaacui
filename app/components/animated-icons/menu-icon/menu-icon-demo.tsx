"use client";

import MenuIcon from "@/registry/chamaac/animated-icons/menu-icon";

export default function MenuIconDemo() {
    return (
        <MenuIcon
            className="text-black dark:text-white"
            size={40}
            duration={1.5}
            strokeWidth={2}
            repeatDelay={1}
            ease="easeInOut"
        />
    );
}
