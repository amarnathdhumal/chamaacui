"use client";

import { motion, SVGMotionProps } from "motion/react";

interface ActivityIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const ActivityIcon = (props: ActivityIconProps) => {
    const { size = 28, duration = 2, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const pathAnimationProps = isHovered
        ? {
            initial: { pathLength: 0, opacity: 0 },
            whileHover: {
                pathLength: 1,
                opacity: 1,
                transition: {
                    duration: duration,
                    ease: "easeInOut" as const,
                },
            },
        }
        : {
            initial: { pathLength: 0, opacity: 0 },
            animate: {
                pathLength: 1,
                opacity: 1,
            },
            transition: {
                duration: duration,
                ease: "easeInOut" as const,
                repeat: Infinity,
                repeatType: "reverse" as const,
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
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                d="M3 12h4.5l1.5 -6l4 12l2 -9l1.5 3h4.5"
                {...pathAnimationProps}
            />
        </motion.svg>
    )
}

export default ActivityIcon;
