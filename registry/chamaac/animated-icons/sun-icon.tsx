"use client";

import { motion, SVGMotionProps } from "motion/react";

interface SunIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const SunIcon = (props: SunIconProps) => {
    const { size = 28, duration = 4, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const rotateProps = isHovered
        ? {
            whileHover: {
                rotate: 360,
                transition: { duration: duration, ease: "linear" as const },
            },
        }
        : {
            animate: { rotate: 360 },
            transition: { duration: duration, ease: "linear" as const, repeat: Infinity },
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
            {...rotateProps}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="M4.93 4.93l1.41 1.41" />
            <path d="M17.66 17.66l1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="M6.34 17.66l-1.41 1.41" />
            <path d="M19.07 4.93l-1.41 1.41" />
        </motion.svg>
    );
};

export default SunIcon;
