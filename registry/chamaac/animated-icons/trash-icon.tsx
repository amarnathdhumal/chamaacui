"use client";

import { motion, SVGMotionProps } from "motion/react";

interface TrashIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const TrashIcon = (props: TrashIconProps) => {
    const { size = 28, duration = 1, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const lidProps = isHovered
        ? {
            whileHover: {
                y: [0, -3, 0],
                rotate: [0, -10, 0],
                transition: { duration: duration, ease: "easeInOut" as const },
            },
        }
        : {
            animate: {
                y: [-1],
                rotate: [0, -10, 10, -5, 5, 0]
            },
            transition: {
                duration: duration,
                ease: "easeInOut" as const,
                repeat: Infinity,

            },
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
            {/* Lid */}
            <motion.g  {...lidProps}>
                <path d="M4 7l16 0" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </motion.g>
            {/* Bin body */}
            <path d="M10 11l0 6" />
            <path d="M14 11l0 6" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
        </motion.svg>
    );
};

export default TrashIcon;
