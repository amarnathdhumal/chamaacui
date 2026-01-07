"use client";

import { motion, SVGMotionProps } from "motion/react";

interface MenuIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const MenuIcon = (props: MenuIconProps) => {
    const { size = 28, duration = 2, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const line1Props = isHovered
        ? { whileHover: { scaleX: [1, 0.6, 1], transition: { duration: duration, ease: "easeInOut" as const } } }
        : { animate: { scaleX: [1, 0.6, 1] }, transition: { duration: duration, ease: "easeInOut" as const, repeat: Infinity } };

    const line2Props = isHovered
        ? { whileHover: { scaleX: [1, 0.8, 1], transition: { duration: duration, ease: "easeInOut" as const, delay: 0.15 } } }
        : { animate: { scaleX: [1, 0.8, 1] }, transition: { duration: duration, ease: "easeInOut" as const, repeat: Infinity, delay: 0.15 } };

    const line3Props = isHovered
        ? { whileHover: { scaleX: [1, 0.5, 1], transition: { duration: duration, ease: "easeInOut" as const, delay: 0.3 } } }
        : { animate: { scaleX: [1, 0.5, 1] }, transition: { duration: duration, ease: "easeInOut" as const, repeat: Infinity, delay: 0.3 } };

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
            <motion.path d="M4 6h16" style={{ transformOrigin: "4px 6px" }} {...line1Props} />
            <motion.path d="M4 12h16" style={{ transformOrigin: "4px 12px" }} {...line2Props} />
            <motion.path d="M4 18h16" style={{ transformOrigin: "4px 18px" }} {...line3Props} />
        </motion.svg>
    );
};

export default MenuIcon;
