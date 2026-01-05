"use client";

import { motion, SVGMotionProps } from "motion/react";

interface MailIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
}

const MailIcon = (props: MailIconProps) => {
    const { size = 24, duration = 4, strokeWidth = 2, className, ...restProps } = props;

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
                d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: duration, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
                d="M3 7l9 6l9 -6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: duration / 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
            />
        </motion.svg>
    )
}

export default MailIcon;
