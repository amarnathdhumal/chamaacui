"use client";

import { motion, SVGMotionProps } from "motion/react";

interface RocketIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
}

const RocketIcon = (props: RocketIconProps) => {
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
            overflow="visible"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            {/* Rocket body */}
            <motion.g
                animate={{
                    y: [0, -2, 0],
                    x: [0, 1, 0],
                }}
                transition={{
                    duration: duration * 0.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            >
                <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
                <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
                <circle cx="15" cy="9" r="1" />
            </motion.g>
            {/* Flames */}
            <motion.g
                animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                    duration: duration * 0.15,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                style={{ transformOrigin: "7px 17px" }}
            >
                <path d="M4.5 17l-1.5 3" stroke="currentColor" strokeWidth={1.5} />
                <path d="M7 19l-1 2" stroke="currentColor" strokeWidth={1.5} />
            </motion.g>
        </motion.svg>
    );
};

export default RocketIcon;
