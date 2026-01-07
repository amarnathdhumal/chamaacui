"use client";

import { motion, SVGMotionProps } from "motion/react";

interface BellIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const BellIcon = (props: BellIconProps) => {
    const { size = 28, duration = 2, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const animationProps = isHovered
        ? {
            whileHover: {
                rotate: [0, -10, 10, -10, 10, 0, 0, 0],
                transition: {
                    duration: duration,
                    ease: "easeInOut" as const,
                },
            },
        }
        : {
            animate: {
                rotate: [0, -10, 10, -10, 10, 0, 0, 0],
            },
            transition: {
                duration: duration,
                ease: "easeInOut" as const,
                repeat: Infinity,
                repeatDelay: 1,
            },
        };

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
            style={{ originX: "12px", originY: "2px" }}
            {...animationProps}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
        </motion.svg>
    )
}

export default BellIcon;
