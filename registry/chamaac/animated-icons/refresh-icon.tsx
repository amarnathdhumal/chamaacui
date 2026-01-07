"use client";

import { motion, SVGMotionProps } from "motion/react";

interface RefreshIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const RefreshIcon = (props: RefreshIconProps) => {
    const { size = 28, duration = 2, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const animationProps = isHovered
        ? {
            whileHover: {
                rotate: 360,
                transition: {
                    duration: duration,
                    ease: "linear" as const,
                },
            },
        }
        : {
            animate: {
                rotate: 360,
            },
            transition: {
                duration: duration,
                ease: "linear" as const,
                repeat: Infinity,
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
            {...animationProps}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
            <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
        </motion.svg>
    )
}

export default RefreshIcon;
