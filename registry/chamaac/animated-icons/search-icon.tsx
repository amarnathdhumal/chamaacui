"use client";

import { motion, SVGMotionProps } from "motion/react";

interface SearchIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
}

const SearchIcon = (props: SearchIconProps) => {
    const { size = 24, duration = 2, strokeWidth = 2, className, ...restProps } = props;

    return (
        <motion.svg
            {...restProps}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            overflow="visible"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            {/* Magnifying glass */}
            <motion.g
                animate={{
                    x: [0, 2, 0, -2, 0],
                    y: [0, -1, 0, 1, 0],
                }}
                transition={{
                    duration: duration,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            >
                <circle cx="10" cy="10" r="7" />
                <path d="M21 21l-6 -6" />
            </motion.g>
        </motion.svg>
    );
};

export default SearchIcon;
