"use client";

import { motion, SVGMotionProps } from "motion/react";

interface BatteryIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const BatteryIcon = (props: BatteryIconProps) => {
    const { size = 28, duration = 1, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    // Each bar appears at a specific point in the animation cycle
    // Bar 1: appears at 0%, stays until reset
    // Bar 2: appears at 25%, stays until reset  
    // Bar 3: appears at 50%, stays until reset
    // Bar 4: appears at 75%, stays until 100%, then all reset

    const getBarProps = (barIndex: number) => {
        // Calculate when this bar should appear (0-1 scale)
        const appearTime = barIndex * 0.2; // 0, 0.2, 0.4, 0.6
        const resetTime = 0.9; // All bars reset near end

        return isHovered
            ? {
                whileHover: {
                    opacity: [0, 0, 1, 1, 0],
                    transition: {
                        duration: duration * 0.5,
                        ease: "easeOut" as const,
                        times: [0, appearTime, appearTime + 0.1, resetTime, 1]
                    }
                }
            }
            : {
                animate: {
                    opacity: [0, 0, 1, 1, 0],
                },
                transition: {
                    duration: duration,
                    ease: "linear" as const,
                    repeat: Infinity,
                    times: [0, appearTime, appearTime + 0.05, resetTime, 1]
                }
            };
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
            overflow="visible"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            {/* Battery body */}
            <path d="M6 7h11a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2" />
            {/* Charging bars - fill sequentially */}
            <motion.path d="M7 10l0 4" {...getBarProps(0)} />
            <motion.path d="M10 10l0 4" {...getBarProps(1)} />
            <motion.path d="M13 10l0 4" {...getBarProps(2)} />
            <motion.path d="M16 10l0 4" {...getBarProps(3)} />
        </motion.svg>
    );
};

export default BatteryIcon;
