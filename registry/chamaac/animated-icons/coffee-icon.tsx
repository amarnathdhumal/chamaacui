"use client";

import { motion, SVGMotionProps } from "motion/react";

interface CoffeeIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const CoffeeIcon = (props: CoffeeIconProps) => {
    const { size = 28, duration = 1.5, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const steam1Props = isHovered
        ? {
            initial: { pathLength: 0, opacity: 0 },
            whileHover: { pathLength: 1, opacity: 1, transition: { duration: duration, ease: "easeInOut" as const } }
        }
        : {
            initial: { pathLength: 0, opacity: 0 },
            animate: { pathLength: 1, opacity: 1 },
            transition: { duration: duration, ease: "easeInOut" as const, repeat: Infinity, repeatType: "reverse" as const }
        };

    const steam2Props = isHovered
        ? {
            initial: { pathLength: 0, opacity: 0 },
            whileHover: { pathLength: 1, opacity: 1, transition: { duration: duration, ease: "easeInOut" as const, delay: 0.2 } }
        }
        : {
            initial: { pathLength: 0, opacity: 0 },
            animate: { pathLength: 1, opacity: 1 },
            transition: { duration: duration, ease: "easeInOut" as const, repeat: Infinity, repeatType: "reverse" as const, delay: 0.2 }
        };

    const steam3Props = isHovered
        ? {
            initial: { pathLength: 0, opacity: 0 },
            whileHover: { pathLength: 1, opacity: 1, transition: { duration: duration, ease: "easeInOut" as const, delay: 0.4 } }
        }
        : {
            initial: { pathLength: 0, opacity: 0 },
            animate: { pathLength: 1, opacity: 1 },
            transition: { duration: duration, ease: "easeInOut" as const, repeat: Infinity, repeatType: "reverse" as const, delay: 0.4 }
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
            overflow="visible"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            {/* Steam with path draw animation */}
            <motion.path d="M8 2c0 1.5 .5 2.5 1 3.5" {...steam1Props} />
            <motion.path d="M12 2c0 1.5 .5 2.5 1 3.5" {...steam2Props} />
            <motion.path d="M16 2c0 1.5 .5 2.5 1 3.5" {...steam3Props} />
            {/* Cup */}
            <path d="M3 10h14v5a4 4 0 0 1 -4 4h-6a4 4 0 0 1 -4 -4v-5z" />
            <path d="M17 10h1a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-1" />
        </motion.svg>
    );
};

export default CoffeeIcon;
