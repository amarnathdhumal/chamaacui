"use client";

import { motion, SVGMotionProps } from "motion/react";

interface CoffeeIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const CoffeeIcon = (props: CoffeeIconProps) => {
    const { size = 28, duration = 2, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    // S-shaped paths for more realistic steam
    const path1 = "M6 9C6 7 8 7 8 5C8 3 6 3 6 1";
    const path2 = "M12 9C12 7 14 7 14 5C14 3 12 3 12 1";
    const path3 = "M18 9C18 7 20 7 20 5C20 3 18 3 18 1";

    const getSteamProps = (delay: number) => {
        const props = isHovered
            ? {
                initial: { pathLength: 0, opacity: 0, y: 3 },
                whileHover: {
                    pathLength: 1,
                    opacity: 1,
                    y: 0,
                    transition: { duration: duration * 0.5, ease: "easeOut" }
                }
            }
            : {
                animate: {
                    pathLength: [0, 0.5, 1], // Grow from nothing
                    opacity: [0, 1, 0], // Smooth fade in/out
                    y: [0, -4, -8], // Rise from path origin upwards
                },
                transition: {
                    duration: duration,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: delay,
                    repeatDelay: 0.2
                }
            };
        return props as SVGMotionProps<SVGPathElement>;
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

            {/* Cup */}
            <path d="M3 10h14v5a4 4 0 0 1 -4 4h-6a4 4 0 0 1 -4 -4v-5z" />
            <path d="M17 10h1a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-1" />

            {/* Steam - larger S-curves */}
            <motion.path
                d={path1}
                {...getSteamProps(0)}
            />
            <motion.path
                d={path2}
                {...getSteamProps(duration * 0.33)}
            />
            <motion.path
                d={path3}
                {...getSteamProps(duration * 0.66)}
            />
        </motion.svg>
    );
};

export default CoffeeIcon;
