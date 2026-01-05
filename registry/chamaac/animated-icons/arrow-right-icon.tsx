"use client";

import { motion, SVGMotionProps } from "motion/react";

interface ArrowRightIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
}

const ArrowRightIcon = (props: ArrowRightIconProps) => {
    const { size = 24, duration = 1.5, strokeWidth = 2, className, ...restProps } = props;

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
                d="M5 12l14 0"
                animate={{ x: [0, 4, 0] }}
                transition={{
                    duration: duration,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            />
            <motion.path
                d="M13 18l6 -6"
                animate={{ x: [0, 4, 0] }}
                transition={{
                    duration: duration,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            />
            <motion.path
                d="M13 6l6 6"
                animate={{ x: [0, 4, 0] }}
                transition={{
                    duration: duration,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            />
        </motion.svg>
    )
}

export default ArrowRightIcon;
