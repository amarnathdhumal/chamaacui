"use client";

import { motion, SVGMotionProps } from "motion/react";

interface AdjustmentsHorizontalIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
}

const AdjustmentsHorizontalIcon = (
    props: AdjustmentsHorizontalIconProps
) => {
    const { size = 24, className, ...restProps } = props;
    return (
        <motion.svg
            {...restProps}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l15 0" />
            <motion.path
                animate={{ x: [0, -10, 0] }}
                transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                className="fill-white dark:fill-black"
                stroke="currentColor"
                strokeWidth={2}
                d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
            />

            <path d="M4 12l15 0" />

            <motion.path
                animate={{ x: [0, 10, 0] }}
                transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                className="fill-white dark:fill-black"
                stroke="currentColor"
                strokeWidth={2}
                d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
            />


            <path d="M4 18l15 0" />
            <motion.path
                animate={{ x: [0, -10, 0] }}
                transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                className="fill-white dark:fill-black"
                stroke="currentColor"
                strokeWidth={2}
                d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
            />


        </motion.svg>
    );
};

export default AdjustmentsHorizontalIcon;
