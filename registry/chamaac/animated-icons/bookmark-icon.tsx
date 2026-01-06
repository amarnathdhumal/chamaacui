"use client";

import { motion, SVGMotionProps } from "motion/react";

interface BookmarkIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
}

const BookmarkIcon = (props: BookmarkIconProps) => {
    const { size = 24, duration = 2, strokeWidth = 2, className, ...restProps } = props;

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
            <motion.path
                d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"
                animate={{
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: duration,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                style={{ transformOrigin: "12px 12px" }}
            />
            {/* Star inside */}
            <motion.path
                d="M12 8l1 2l2 .5l-1.5 1.5l.5 2l-2 -1l-2 1l.5 -2l-1.5 -1.5l2 -.5z"
                fill="currentColor"
                stroke="none"
                animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                    duration: duration,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                style={{ transformOrigin: "12px 11px" }}
            />
        </motion.svg>
    );
};

export default BookmarkIcon;
