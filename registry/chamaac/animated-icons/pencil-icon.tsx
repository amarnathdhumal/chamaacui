"use client";

import { motion, SVGMotionProps } from "motion/react";

interface PencilIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const PencilIcon = (props: PencilIconProps) => {
    const { size = 28, duration = 2, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const writeProps = isHovered
        ? {
            whileHover: {
                x: [0, 2, -1, 2, 0],
                y: [0, 1, -0.5, 1, 0],
                transition: { duration: duration, ease: "easeInOut" as const },
            },
        }
        : {
            animate: { x: [0, 2, -1, 2, 0], y: [0, 1, -0.5, 1, 0] },
            transition: { duration: duration, ease: "easeInOut" as const, repeat: Infinity },
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
            {...writeProps}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
            <path d="M13.5 6.5l4 4" />
        </motion.svg>
    );
};

export default PencilIcon;
