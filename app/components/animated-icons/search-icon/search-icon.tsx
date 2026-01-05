"use client";

import { motion, SVGMotionProps } from "motion/react";

interface SearchIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
}

const SearchIcon = (props: SearchIconProps) => {
    const { size = 24, className, ...restProps } = props;

    return (
        <motion.svg
            {...restProps}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            />
            <motion.path
                d="M21 21l-6 -6"
                animate={{ x: [0, 2, 0], y: [0, 2, 0] }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            />
        </motion.svg>
    )
}

export default SearchIcon;
