"use client";

import { motion, SVGMotionProps } from "motion/react";

interface CursorIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const CursorIcon = (props: CursorIconProps) => {
    const { size = 28, duration = 2, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const cursorProps = isHovered
        ? {
            whileHover: {
                x: [0, 3, 5, 3, 0],
                y: [0, 2, 4, 2, 0],
                transition: { duration: duration, ease: "easeInOut" as const },
            },
        }
        : {
            animate: { x: [0, 3, 5, 3, 0], y: [0, 2, 4, 2, 0] },
            transition: { duration: duration, ease: "easeInOut" as const, repeat: Infinity },
        };

    const clickProps = isHovered
        ? {
            whileHover: {
                scale: [0, 1.5, 0],
                opacity: [0, 0.5, 0],
                transition: { duration: duration * 0.4, ease: "easeOut" as const },
            },
        }
        : {
            animate: { scale: [0, 1.5, 0], opacity: [0, 0.5, 0] },
            transition: { duration: duration * 0.4, ease: "easeOut" as const, repeat: Infinity, repeatDelay: duration * 0.6 },
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
            <motion.g {...cursorProps}>
                <path d="M6 3l14 8.5l-6.5 1.5l-1.5 6.5z" />
            </motion.g>
            <motion.circle cx="14" cy="14" r="3" fill="none" strokeWidth={1} {...clickProps} />
        </motion.svg>
    );
};

export default CursorIcon;
