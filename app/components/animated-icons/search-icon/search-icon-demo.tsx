"use client";

import SearchIcon from "@/registry/chamaac/animated-icons/search-icon";

export default function SearchIconDemo() {
    return (
        <SearchIcon
            className="text-black dark:text-white"
            size={40}
            duration={1.2}
            strokeWidth={2}
            repeatDelay={1}
            ease="easeInOut"
        />
    );
}
