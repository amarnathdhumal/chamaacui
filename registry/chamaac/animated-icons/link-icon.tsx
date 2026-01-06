"use client";

import { motion, SVGMotionProps } from "motion/react";

interface LinkIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
}

const LinkIcon = (props: LinkIconProps) => {
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
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            {/* Left chain link */}
            <motion.path
                d="M9 15l-3 -3a3.536 3.536 0 0 1 5 -5l3 3"
                animate={{
                    x: [-1, 0, -1],
                }}
                transition={{
                    duration: duration,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            />
            {/* Right chain link */}
            <motion.path
                d="M15 9l3 3a3.536 3.536 0 0 1 -5 5l-3 -3"
                animate={{
                    x: [1, 0, 1],
                }}
                transition={{
                    duration: duration,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            />
        </motion.svg>
    );
};

export default LinkIcon;
