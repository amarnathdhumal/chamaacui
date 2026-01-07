"use client";

import { motion, SVGMotionProps } from "motion/react";

interface ClockIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const ClockIcon = (props: ClockIconProps) => {
    const { size = 28, duration = 2, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const handProps = isHovered
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
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="9" />
            {/* Clock hands rotating */}
            <motion.g style={{ transformOrigin: "12px 12px" }} {...handProps}>
                <path d="M12 7v5l3 3" />
            </motion.g>
        </motion.svg>
    );
};

export default ClockIcon;
