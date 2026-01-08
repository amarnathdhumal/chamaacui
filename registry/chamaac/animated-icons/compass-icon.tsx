"use client";

import { motion, SVGMotionProps } from "motion/react";

interface CompassIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const CompassIcon = (props: CompassIconProps) => {
    const { size = 28, duration = 3, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const needleProps = isHovered
        ? {
            whileHover: {
                rotate: [0, 360],
                transition: { duration: duration * 0.5, ease: "linear" as const }
            }
        }
        : {
            animate: {
                rotate: [0, 360],
            },
            transition: {
                duration: duration,
                ease: "linear" as const,
                repeat: Infinity,
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
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            {/* Compass circle */}
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            {/* Cardinal points */}
            <path d="M12 3l0 2" />
            <path d="M12 19l0 2" />
            <path d="M3 12l2 0" />
            <path d="M19 12l2 0" />
            {/* Rotating needle */}
            <motion.g style={{ transformOrigin: "12px 12px" }} {...needleProps}>
                <path d="M12 12l-1 -4l2 0l-1 4z" fill="currentColor" />
                <path d="M12 12l1 4l-2 0l1 -4z" fill="currentColor" opacity="0.5" />
            </motion.g>
        </motion.svg>
    );
};

export default CompassIcon;
