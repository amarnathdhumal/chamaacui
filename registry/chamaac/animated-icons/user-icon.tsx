"use client";

import { motion, SVGMotionProps } from "motion/react";

interface UserIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const UserIcon = (props: UserIconProps) => {
    const { size = 28, duration = 1.5, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const headProps = isHovered
        ? {
            whileHover: {
                y: [0, -2, 0],
                transition: { duration: duration, ease: "easeInOut" as const },
            },
        }
        : {
            animate: { y: [0, -2, 0] },
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
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.circle cx="12" cy="7" r="4" {...headProps} />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        </motion.svg>
    );
};

export default UserIcon;
