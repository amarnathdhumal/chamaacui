"use client";

import { motion, SVGMotionProps } from "motion/react";

interface FlagIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const FlagIcon = (props: FlagIconProps) => {
    const { size = 28, duration = 1.2, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const waveProps = isHovered
        ? {
            whileHover: {
                d: [
                    "M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9z",
                    "M5 5a5 5 0 0 0 7 0a5 5 0 0 1 7 0v9a5 5 0 0 0 -7 0a5 5 0 0 1 -7 0v-9z",
                    "M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9z",
                ],
                transition: { duration: duration * 0.5, ease: "easeInOut" as const, repeat: 2 }
            }
        }
        : {
            animate: {
                d: [
                    "M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9z",
                    "M5 5a5 5 0 0 0 7 0a5 5 0 0 1 7 0v9a5 5 0 0 0 -7 0a5 5 0 0 1 -7 0v-9z",
                    "M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9z",
                ],
            },
            transition: {
                duration: duration,
                ease: "easeInOut" as const,
                repeat: Infinity,
            }
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
            {/* Pole */}
            <path d="M5 5v16" />
            {/* Flag waving */}
            <motion.path
                d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9z"
                {...waveProps}
            />
        </motion.svg>
    );
};

export default FlagIcon;
