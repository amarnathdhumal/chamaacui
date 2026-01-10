"use client";

import LocationIcon from "@/registry/chamaac/animated-icons/location-icon";
export default function LocationIconDemo() {
    return (
        <LocationIcon
            className="text-black dark:text-white"
            size={40}
            duration={1}
            strokeWidth={2}
            ease="easeOut"
        />
    );
}
