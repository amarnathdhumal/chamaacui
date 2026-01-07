"use client";

import { motion, SVGMotionProps } from "motion/react";

interface MessageIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const MessageIcon = (props: MessageIconProps) => {
    const { size = 28, duration = 1.5, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const dot1Props = isHovered
        ? { whileHover: { opacity: [0.3, 1, 0.3], transition: { duration: duration, delay: 0 } } }
        : { animate: { opacity: [0.3, 1, 0.3] }, transition: { duration: duration, repeat: Infinity, delay: 0 } };

    const dot2Props = isHovered
        ? { whileHover: { opacity: [0.3, 1, 0.3], transition: { duration: duration, delay: duration * 0.2 } } }
        : { animate: { opacity: [0.3, 1, 0.3] }, transition: { duration: duration, repeat: Infinity, delay: duration * 0.2 } };

    const dot3Props = isHovered
        ? { whileHover: { opacity: [0.3, 1, 0.3], transition: { duration: duration, delay: duration * 0.4 } } }
        : { animate: { opacity: [0.3, 1, 0.3] }, transition: { duration: duration, repeat: Infinity, delay: duration * 0.4 } };

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
            <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
            <motion.circle cx="8" cy="11" r="1" fill="currentColor" stroke="none" {...dot1Props} />
            <motion.circle cx="12" cy="11" r="1" fill="currentColor" stroke="none" {...dot2Props} />
            <motion.circle cx="16" cy="11" r="1" fill="currentColor" stroke="none" {...dot3Props} />
        </motion.svg>
    );
};

export default MessageIcon;
