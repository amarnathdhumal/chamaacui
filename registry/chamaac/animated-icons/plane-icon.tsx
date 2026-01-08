"use client";

import { motion, SVGMotionProps } from "motion/react";

interface PlaneIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const PlaneIcon = (props: PlaneIconProps) => {
    const { size = 28, duration = 1.5, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    // Plane flies diagonally from bottom-left to top-right (315° / 45° up-right)
    // Then resets to starting position
    const flyProps = isHovered
        ? {
            whileHover: {
                x: [0, 6, 0],
                y: [0, -6, 0],
                transition: { duration: duration * 0.6, ease: "easeInOut" as const }
            }
        }
        : {
            animate: {
                x: [-12, 12],
                y: [12, -12],
                opacity: [0, 1, 1, 0], // Fade in at start, fade out at end
            },
            transition: {
                duration: duration,
                ease: "linear" as const,
                repeat: Infinity,
                times: [0, 0.4, 0.6, 1]
            }
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
            style={{ rotate: "-45deg" }} // Rotate plane to point diagonally up-right
            {...flyProps}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
        </motion.svg>
    );
};

export default PlaneIcon;
