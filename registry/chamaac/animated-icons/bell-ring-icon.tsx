"use client";

import { motion, SVGMotionProps } from "motion/react";

interface BellRingIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const BellRingIcon = (props: BellRingIconProps) => {
    const { size = 28, duration = 1, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const bellProps = isHovered
        ? {
            whileHover: {
                rotate: [0, -15, 15, -10, 10, -5, 5, 0],
                transition: { duration: duration * 0.6, ease: "easeInOut" as const }
            }
        }
        : {
            animate: {
                rotate: [0, -12, 12, -8, 8, -4, 4, 0],
            },
            transition: {
                duration: duration,
                ease: "easeInOut" as const,
                repeat: Infinity,
                repeatDelay: 2
            }
        };

    const ringProps = (delay: number) => ({
        animate: {
            scale: [1, 1.3, 1.6],
            opacity: [0.8, 0.4, 0],
        },
        transition: {
            duration: duration * 1.2,
            ease: "easeOut" as const,
            repeat: Infinity,
            delay: delay,
            repeatDelay: 2
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
            {/* Ring waves */}
            <motion.path
                d="M8 4a4 4 0 0 1 8 0"
                strokeWidth={strokeWidth * 0.8}
                {...ringProps(0)}
            />
            <motion.path
                d="M6 2a6 6 0 0 1 12 0"
                strokeWidth={strokeWidth * 0.6}
                {...ringProps(duration * 0.3)}
            />
            {/* Bell body */}
            <motion.g style={{ transformOrigin: "12px 6px" }} {...bellProps}>
                <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
            </motion.g>
        </motion.svg>
    );
};

export default BellRingIcon;
