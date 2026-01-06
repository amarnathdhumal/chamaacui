"use client";

import { motion, SVGMotionProps } from "motion/react";

interface EyeIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
}

const EyeIcon = (props: EyeIconProps) => {
    const { size = 24, duration = 3, strokeWidth = 2, className, ...restProps } = props;

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
            <defs>
                {/* Animated clipPath that matches the eye shape */}
                <clipPath id="eyeClip">
                    <motion.path
                        d="M3 12c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6z"
                        animate={{
                            d: [
                                "M3 12c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6z",
                                "M3 12c2.4 4 5.4 6 9 6c3.6 0 6.6 -2 9 -6c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6z",
                                "M3 12c2.4 4 5.4 6 9 6c3.6 0 6.6 -2 9 -6c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6z",
                                "M3 12c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6z",
                            ],
                        }}
                        transition={{
                            duration: duration,
                            ease: "easeInOut",
                            repeat: Infinity,
                            times: [0, 0.4, 0.6, 1],
                        }}
                    />
                </clipPath>
            </defs>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            {/* Pupil - clipped by animated eye shape */}
            <g clipPath="url(#eyeClip)">
                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            </g>
            {/* Eye outline - bottom half (static) */}
            <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6" />
            {/* Eye outline - top half (animated eyelid) */}
            <motion.path
                d="M3 12c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"
                animate={{
                    d: [
                        "M3 12c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",
                        "M3 12c2.4 4 5.4 6 9 6c3.6 0 6.6 -2 9 -6",
                        "M3 12c2.4 4 5.4 6 9 6c3.6 0 6.6 -2 9 -6",
                        "M3 12c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",
                    ],
                }}
                transition={{
                    duration: duration,
                    ease: "easeInOut",
                    repeat: Infinity,
                    times: [0, 0.4, 0.6, 1],
                }}
            />
        </motion.svg>
    );
};

export default EyeIcon;
