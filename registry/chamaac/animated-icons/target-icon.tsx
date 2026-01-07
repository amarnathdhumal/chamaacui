"use client";

import { motion, SVGMotionProps } from "motion/react";

interface TargetIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const TargetIcon = (props: TargetIconProps) => {
    const { size = 28, duration = 2, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const ring1Props = isHovered
        ? { whileHover: { scale: [1, 1.1, 1], transition: { duration: duration, ease: "easeInOut" as const } } }
        : { animate: { scale: [1, 1.1, 1] }, transition: { duration: duration, ease: "easeInOut" as const, repeat: Infinity } };

    const ring2Props = isHovered
        ? { whileHover: { scale: [1, 1.15, 1], transition: { duration: duration, ease: "easeInOut" as const, delay: 0.1 } } }
        : { animate: { scale: [1, 1.15, 1] }, transition: { duration: duration, ease: "easeInOut" as const, repeat: Infinity, delay: 0.1 } };

    const ring3Props = isHovered
        ? { whileHover: { scale: [1, 1.2, 1], transition: { duration: duration, ease: "easeInOut" as const, delay: 0.2 } } }
        : { animate: { scale: [1, 1.2, 1] }, transition: { duration: duration, ease: "easeInOut" as const, repeat: Infinity, delay: 0.2 } };

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
            <motion.circle cx="12" cy="12" r="9" style={{ transformOrigin: "12px 12px" }} {...ring3Props} />
            <motion.circle cx="12" cy="12" r="5" style={{ transformOrigin: "12px 12px" }} {...ring2Props} />
            <motion.circle cx="12" cy="12" r="1" fill="currentColor" style={{ transformOrigin: "12px 12px" }} {...ring1Props} />
        </motion.svg>
    );
};

export default TargetIcon;
