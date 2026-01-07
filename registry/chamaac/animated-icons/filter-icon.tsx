"use client";

import { motion, SVGMotionProps } from "motion/react";

interface FilterIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const FilterIcon = (props: FilterIconProps) => {
    const { size = 28, duration = 2, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const scaleProps = isHovered
        ? {
            whileHover: {
                scaleY: [1, 0.9, 1],
                transition: { duration: duration, ease: "easeInOut" as const },
            },
        }
        : {
            animate: { scaleY: [1, 0.9, 1] },
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
            style={{ transformOrigin: "12px 4px" }}
            {...scaleProps}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z" />
        </motion.svg>
    );
};

export default FilterIcon;
