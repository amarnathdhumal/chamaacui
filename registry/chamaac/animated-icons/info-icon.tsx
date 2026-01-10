"use client";

import { useState } from "react";
import { motion, SVGMotionProps, Easing } from "motion/react";

interface IconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
    repeatDelay?: number;
    ease?: Easing;
}


const InfoIcon = (props: IconProps) => {
    const {
        size = 28,
        duration = 1.5,
        strokeWidth = 2,
        isHovered = false,
        repeatDelay = 1,
        ease = "easeInOut",
        className,
        ...restProps
    } = props;

    const [isHoveredInternal, setIsHoveredInternal] = useState(false);
    const shouldAnimate = isHovered ? isHoveredInternal : true;

    
    const transition = {
        duration: duration,
        ease: ease,
        repeat: isHovered ? 0 : Infinity,
        repeatDelay: repeatDelay,
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
            onMouseEnter={() => isHovered && setIsHoveredInternal(true)}
            onMouseLeave={() => isHovered && setIsHoveredInternal(false)}
        >
             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
             <motion.circle cx="12" cy="12" r="9" />
             <motion.line 
                x1="12" y1="8" x2="12.01" y2="8"  
                animate={shouldAnimate ? { y: [0, -2, 0] } : { y: 0 }}
                transition={transition}
                strokeWidth={Math.max(3, strokeWidth)}
             />
             <motion.path 
                d="M11 12h1v4h1" 
             />
        </motion.svg>
    )
    
}

export default InfoIcon;
