"use client";

import { motion, SVGMotionProps } from "motion/react";

interface WavyIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const WavyIcon = (
    props: WavyIconProps
) => {
    const { size = 28, duration = 0.8, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const wave1Props = isHovered
        ? {
            whileHover: {
                d: [
                    "M3 7c3 -3 6 -3 9 0s6 3 9 0",
                    "M3 9c3 0 6 -4 9 -4s6 4 9 4",
                    "M3 7c3 3 6 3 9 0s6 -3 9 0",
                    "M3 5c3 0 6 4 9 4s6 -4 9 -4",
                    "M3 7c3 -3 6 -3 9 0s6 3 9 0",
                ],
                transition: { duration: duration, ease: "linear" as const },
            },
        }
        : {
            animate: {
                d: [
                    "M3 7c3 -3 6 -3 9 0s6 3 9 0",
                    "M3 9c3 0 6 -4 9 -4s6 4 9 4",
                    "M3 7c3 3 6 3 9 0s6 -3 9 0",
                    "M3 5c3 0 6 4 9 4s6 -4 9 -4",
                    "M3 7c3 -3 6 -3 9 0s6 3 9 0",
                ],
            },
            transition: { duration: duration, ease: "linear" as const, repeat: Infinity },
        };

    const wave2Props = isHovered
        ? {
            whileHover: {
                d: [
                    "M3 12c3 -3 6 -3 9 0s6 3 9 0",
                    "M3 14c3 0 6 -4 9 -4s6 4 9 4",
                    "M3 12c3 3 6 3 9 0s6 -3 9 0",
                    "M3 10c3 0 6 4 9 4s6 -4 9 -4",
                    "M3 12c3 -3 6 -3 9 0s6 3 9 0",
                ],
                transition: { duration: duration, ease: "linear" as const },
            },
        }
        : {
            animate: {
                d: [
                    "M3 12c3 -3 6 -3 9 0s6 3 9 0",
                    "M3 14c3 0 6 -4 9 -4s6 4 9 4",
                    "M3 12c3 3 6 3 9 0s6 -3 9 0",
                    "M3 10c3 0 6 4 9 4s6 -4 9 -4",
                    "M3 12c3 -3 6 -3 9 0s6 3 9 0",
                ],
            },
            transition: { duration: duration, ease: "linear" as const, repeat: Infinity },
        };

    const wave3Props = isHovered
        ? {
            whileHover: {
                d: [
                    "M3 17c3 -3 6 -3 9 0s6 3 9 0",
                    "M3 19c3 0 6 -4 9 -4s6 4 9 4",
                    "M3 17c3 3 6 3 9 0s6 -3 9 0",
                    "M3 15c3 0 6 4 9 4s6 -4 9 -4",
                    "M3 17c3 -3 6 -3 9 0s6 3 9 0",
                ],
                transition: { duration: duration, ease: "linear" as const },
            },
        }
        : {
            animate: {
                d: [
                    "M3 17c3 -3 6 -3 9 0s6 3 9 0",
                    "M3 19c3 0 6 -4 9 -4s6 4 9 4",
                    "M3 17c3 3 6 3 9 0s6 -3 9 0",
                    "M3 15c3 0 6 4 9 4s6 -4 9 -4",
                    "M3 17c3 -3 6 -3 9 0s6 3 9 0",
                ],
            },
            transition: { duration: duration, ease: "linear" as const, repeat: Infinity },
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
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                d="M3 7c3 -2 6 -2 9 0s6 2 9 0"
                stroke="currentColor"
                fill="none"
                {...wave1Props}
            />
            <motion.path
                d="M3 12c3 -2 6 -2 9 0s6 2 9 0"
                stroke="currentColor"
                fill="none"
                {...wave2Props}
            />
            <motion.path
                d="M3 17c3 -2 6 -2 9 0s6 2 9 0"
                stroke="currentColor"
                fill="none"
                {...wave3Props}
            />
        </motion.svg>
    )
}

export default WavyIcon;
