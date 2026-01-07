"use client";

import { motion, SVGMotionProps } from "motion/react";

interface HomeIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const HomeIcon = (props: HomeIconProps) => {
    const { size = 28, duration = 1.5, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const bounceProps = isHovered
        ? {
            whileHover: {
                y: [0, -4, 0],
                transition: { duration: duration, ease: "easeInOut" as const },
            },
        }
        : {
            animate: { y: [0, -4, 0] },
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
            {...bounceProps}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
        </motion.svg>
    );
};

export default HomeIcon;
