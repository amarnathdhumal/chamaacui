"use client";

import { motion, SVGMotionProps } from "motion/react";

interface MessageIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
}

const MessageIcon = (props: MessageIconProps) => {
    const { size = 24, className, ...restProps } = props;

    return (
        <motion.svg
            {...restProps}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 9h8" />
            <path d="M8 13h6" />
            <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
            <motion.circle
                cx="8" cy="11" r="0.5" fill="currentColor"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
            />
            <motion.circle
                cx="12" cy="11" r="0.5" fill="currentColor"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            />
            <motion.circle
                cx="16" cy="11" r="0.5" fill="currentColor"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
            />
        </motion.svg>
    )
}

export default MessageIcon;
