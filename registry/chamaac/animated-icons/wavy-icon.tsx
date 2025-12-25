"use client";

import { motion, SVGMotionProps } from "motion/react";

interface WavyIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
    duration?: number;
}

const WavyIcon = (
    props: WavyIconProps
) => {
    const { size = 24, duration = 0.8, className, ...restProps } = props;
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
                d="M3 7c3 -2 6 -2 9 0s6 2 9 0"
                stroke="currentColor"
                fill="none"
                animate={{
                    d: [
                        "M3 7c3 -3 6 -3 9 0s6 3 9 0",
                        "M3 9c3 0 6 -4 9 -4s6 4 9 4",
                        "M3 7c3 3 6 3 9 0s6 -3 9 0",
                        "M3 5c3 0 6 4 9 4s6 -4 9 -4",
                        "M3 7c3 -3 6 -3 9 0s6 3 9 0",
                    ],
                }}
                transition={{
                    duration: duration,
                    ease: "linear",
                    repeat: Infinity,
                }}
            />

            <motion.path
                d="M3 12c3 -2 6 -2 9 0s6 2 9 0"
                stroke="currentColor"
                fill="none"
                animate={{
                    d: [
                        "M3 12c3 -3 6 -3 9 0s6 3 9 0",
                        "M3 14c3 0 6 -4 9 -4s6 4 9 4",
                        "M3 12c3 3 6 3 9 0s6 -3 9 0",
                        "M3 10c3 0 6 4 9 4s6 -4 9 -4",
                        "M3 12c3 -3 6 -3 9 0s6 3 9 0",
                    ],
                }}
                transition={{
                    duration: duration,
                    ease: "linear",
                    repeat: Infinity,
                }}
            />
            <motion.path
                d="M3 17c3 -2 6 -2 9 0s6 2 9 0"
                stroke="currentColor"
                fill="none"
                animate={{
                    d: [
                        "M3 17c3 -3 6 -3 9 0s6 3 9 0",
                        "M3 19c3 0 6 -4 9 -4s6 4 9 4",
                        "M3 17c3 3 6 3 9 0s6 -3 9 0",
                        "M3 15c3 0 6 4 9 4s6 -4 9 -4",
                        "M3 17c3 -3 6 -3 9 0s6 3 9 0",
                    ],
                }}
                transition={{
                    duration: duration,
                    ease: "linear",
                    repeat: Infinity,
                }}
            />
        </motion.svg>
    )
}

export default WavyIcon;
