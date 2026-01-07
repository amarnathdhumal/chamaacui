"use client";

import { motion, SVGMotionProps } from "motion/react";

interface PulseIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const PulseIcon = (props: PulseIconProps) => {
    const { size = 28, duration = 2, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const ring1Props = isHovered
        ? { whileHover: { r: [4, 8], opacity: [0.8, 0], transition: { duration: duration, ease: "easeOut" as const } } }
        : { animate: { r: [4, 8], opacity: [0.8, 0] }, transition: { duration: duration, ease: "easeOut" as const, repeat: Infinity } };

    const ring2Props = isHovered
        ? { whileHover: { r: [4, 8], opacity: [0.8, 0], transition: { duration: duration, ease: "easeOut" as const, delay: duration * 0.5 } } }
        : { animate: { r: [4, 8], opacity: [0.8, 0] }, transition: { duration: duration, ease: "easeOut" as const, repeat: Infinity, delay: duration * 0.5 } };

    const ring3Props = isHovered
        ? { whileHover: { r: [6, 11], opacity: [0.5, 0], transition: { duration: duration, ease: "easeOut" as const, delay: duration * 0.25 } } }
        : { animate: { r: [6, 11], opacity: [0.5, 0] }, transition: { duration: duration, ease: "easeOut" as const, repeat: Infinity, delay: duration * 0.25 } };

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
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <motion.circle cx="12" cy="12" r="6" fill="none" {...ring1Props} />
            <motion.circle cx="12" cy="12" r="6" fill="none" {...ring2Props} />
            <motion.circle cx="12" cy="12" r="10" fill="none" {...ring3Props} />
        </motion.svg>
    );
};

export default PulseIcon;
