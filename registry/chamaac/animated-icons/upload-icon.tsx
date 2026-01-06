"use client";

import { motion, SVGMotionProps } from "motion/react";

interface UploadIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
}

const UploadIcon = (props: UploadIconProps) => {
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
            {/* Base/tray */}
            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
            {/* Arrow going up */}
            <motion.g
                animate={{
                    y: [0, -3, 0],
                }}
                transition={{
                    duration: duration,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            >
                <path d="M7 9l5 -5l5 5" />
                <path d="M12 4l0 12" />
            </motion.g>
        </motion.svg>
    );
};

export default UploadIcon;
