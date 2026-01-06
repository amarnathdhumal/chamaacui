"use client";

import { motion, SVGMotionProps } from "motion/react";

interface CalendarIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
}

const CalendarIcon = (props: CalendarIconProps) => {
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
            {/* Calendar frame */}
            <rect x="4" y="5" width="16" height="16" rx="2" />
            <path d="M16 3v4" />
            <path d="M8 3v4" />
            <path d="M4 11h16" />
            {/* Animated date */}
            <motion.g
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                }}
                transition={{
                    duration: duration,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                style={{ transformOrigin: "12px 16px" }}
            >
                <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none" />
            </motion.g>
        </motion.svg>
    );
};

export default CalendarIcon;
