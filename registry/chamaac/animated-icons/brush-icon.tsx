"use client";

import { motion, SVGMotionProps } from "motion/react";

interface BrushIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const BrushIcon = (props: BrushIconProps) => {
    const { size = 28, duration = 1.2, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const brushProps = isHovered
        ? {
            whileHover: {
                rotate: [0, -8, 8, -5, 5, 0],
                x: [0, -2, 2, -1, 1, 0],
                y: [0, -2, 2, -1, 1, 0],
                transition: { duration: duration * 0.6, ease: "easeInOut" as const }
            }
        }
        : {
            animate: {
                rotate: [0, -5, 5, -3, 3, 0],
                x: [0, -1, 1, 0],
                y: [0, -1, 1, 0],
            },
            transition: {
                duration: duration,
                ease: "easeInOut" as const,
                repeat: Infinity,
                repeatDelay: 1
            }
        };

    const strokeProps = (delay: number) => ({
        animate: {
            pathLength: [0, 1],
            opacity: [0, 1, 0],
        },
        transition: {
            duration: duration * 0.6,
            ease: "easeOut" as const,
            repeat: Infinity,
            delay: delay,
            repeatDelay: 1.4
        }
    });

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
            {/* Paint strokes */}
            <motion.path
                d="M3 21c2 -2 4 -4 6 -6"
                strokeWidth={strokeWidth * 1.5}
                {...strokeProps(0)}
            />
            <motion.path
                d="M5 19c2 -2 4 -4 6 -6"
                strokeWidth={strokeWidth * 1.2}
                {...strokeProps(duration * 0.2)}
            />
            {/* Brush */}
            <motion.g style={{ transformOrigin: "center" }} {...brushProps}>
                <path d="M14.5 5.5l4 4" />
                <path d="M10 10l4 4l-6 6h-4v-4z" />
                <path d="M19.347 16.575l1.08 1.079a1.96 1.96 0 0 1 -2.773 2.772l-1.08 -1.079a1.96 1.96 0 0 1 2.773 -2.772z" />
            </motion.g>
        </motion.svg>
    );
};

export default BrushIcon;
