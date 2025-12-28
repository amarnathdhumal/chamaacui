"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface FocusButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    dashColor?: string;
}

const FocusButton = ({ children, className, dashColor, ...props }: FocusButtonProps) => {
    return (
        <button
            className={cn(
                "group relative px-6 py-3 text-black dark:text-white leading-none text-[16px] tracking-normal cursor-pointer",
                className
            )}
            {...props}
        >
            {/* Main Border */}
            <div className="absolute inset-0 border border-gray-200 dark:border-white/20" />

            {/* Corner Dashes */}
            <CornerDashes color={dashColor} />

            {/* Content */}
            <span className="relative z-10">{children}</span>
        </button>
    );
};

const CornerDashes = ({ color }: { color?: string }) => {
    return (
        <>
            {/* Top Right Corner */}
            <div
                className={cn(
                    "absolute top-0 right-0 w-2 h-2 border-t border-r border-black dark:border-white transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:dark:border-white group-hover:border-black",
                )}
                style={color ? { borderColor: color } : undefined}
            />

            {/* Bottom Left Corner */}
            <div
                className={cn(
                    "absolute bottom-0 left-0 w-2 h-2 border-b border-l border-black dark:border-white transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:dark:border-white group-hover:border-black",
                )}
                style={color ? { borderColor: color } : undefined}
            />
        </>
    );
};

export default FocusButton;
