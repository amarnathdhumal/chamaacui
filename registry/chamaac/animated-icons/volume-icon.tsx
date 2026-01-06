"use client";

import { motion, SVGMotionProps } from "motion/react";

interface VolumeIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
}

const VolumeIcon = (props: VolumeIconProps) => {
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
            overflow="visible"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            {/* Speaker base */}

            <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />

            {/* Sound wave - inner */}
            <motion.path
                d="M15 8a5 5 0 0 1 0 8"
                animate={{
                    opacity: [0.5, 1, 0.5, 1, 0.5],
                    scaleX: [1, 1.05, 0.95, 1.05, 1],
                    x: [0, 0.5, -0.25, 0.5, 0],
                }}
                transition={{
                    duration: duration,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                style={{ transformOrigin: "15px 12px" }}
            />
            {/* Sound wave - outer */}
            <motion.path
                d="M18 5a9 9 0 0 1 0 14"
                animate={{
                    opacity: [0.3, 1, 0.3, 1, 0.3],
                    scaleX: [1, 1.1, 0.95, 1.1, 1],
                    x: [0, 1, -0.25, 1, 0],
                }}
                transition={{
                    duration: duration,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: 0.1,
                }}
                style={{ transformOrigin: "18px 12px" }}
            />
        </motion.svg>
    );
};

export default VolumeIcon;
