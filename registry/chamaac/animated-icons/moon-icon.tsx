"use client";

import { motion, SVGMotionProps } from "motion/react";

interface MoonIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const MoonIcon = (props: MoonIconProps) => {
    const { size = 28, duration = 4, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const moonProps = isHovered
        ? {
            whileHover: {
                rotate: [0, 360],
                transition: { duration: duration, ease: "linear" as const },
            },
        }
        : {
            animate: { rotate: [0, 360] },
            transition: { duration: duration * 4, ease: "linear" as const, repeat: Infinity },
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
            {...moonProps}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
        </motion.svg>
    );
};

export default MoonIcon;
