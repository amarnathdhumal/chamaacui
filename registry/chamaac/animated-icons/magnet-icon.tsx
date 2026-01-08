"use client";

import { motion, SVGMotionProps } from "motion/react";

interface MagnetIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const MagnetIcon = (props: MagnetIconProps) => {
    const { size = 28, duration = 1.5, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const magnetProps = isHovered
        ? {
            whileHover: {
                y: [0, -3, 0],
                transition: { duration: duration * 0.4, ease: "easeInOut" as const }
            }
        }
        : {
            animate: {
                y: [0, -2, 0],
            },
            transition: {
                duration: duration,
                ease: "easeInOut" as const,
                repeat: Infinity,
            }
        };

    const particleProps = (delay: number, xOffset: number) => ({
        animate: {
            y: [8, -2],
            x: [xOffset, xOffset * 0.5],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
        },
        transition: {
            duration: duration * 0.8,
            ease: "easeOut" as const,
            repeat: Infinity,
            delay: delay,
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
            {/* Magnet body */}
            <motion.g {...magnetProps}>
                <path d="M4 13v-8a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v8a6 6 0 0 0 6 0v-8a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v8a8 8 0 0 1 -16 0" />
                <path d="M4 8l5 0" />
                <path d="M15 8l4 0" />
            </motion.g>
            {/* Magnetic particles */}
            <motion.circle cx="10" cy="18" r="1" fill="currentColor" stroke="none" {...particleProps(0, -2)} />
            <motion.circle cx="14" cy="18" r="1" fill="currentColor" stroke="none" {...particleProps(duration * 0.3, 2)} />
            <motion.circle cx="12" cy="19" r="0.8" fill="currentColor" stroke="none" {...particleProps(duration * 0.6, 0)} />
        </motion.svg>
    );
};

export default MagnetIcon;
