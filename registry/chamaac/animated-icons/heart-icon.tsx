"use client";

import { motion, SVGMotionProps } from "motion/react";

interface HeartIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const HeartIcon = (props: HeartIconProps) => {
    const { size = 28, duration = 0.8, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const pathAnimationProps = isHovered
        ? {
            whileHover: {
                scale: [1, 1.2, 1],
                transition: {
                    duration: duration,
                    ease: "easeInOut" as const,
                },
            },
        }
        : {
            animate: {
                scale: [1, 1.2, 1],
            },
            transition: {
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut" as const,
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
            <motion.path
                d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
                style={{ originX: "12px", originY: "12px" }}
                {...pathAnimationProps}
            />
        </motion.svg>
    )
}

export default HeartIcon;
