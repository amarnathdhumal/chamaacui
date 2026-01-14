"use client";

import { useState } from "react";
import { motion, SVGMotionProps } from "motion/react";

interface BatteryIconProps
  extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
  size?: number;
  duration?: number;
  strokeWidth?: number;
  isHovered?: boolean;
}

const BatteryIcon = (props: BatteryIconProps) => {
  const {
    size = 28,
    duration = 1,
    strokeWidth = 2,
    isHovered = false,
    className,
    ...restProps
  } = props;
  const [isHoveredInternal, setIsHoveredInternal] = useState(false);

  const shouldAnimate = isHovered ? isHoveredInternal : true;

  const getBarProps = (barIndex: number) => {
    const appearTime = barIndex * 0.2;
    const resetTime = 0.9;

    return {
      animate: shouldAnimate
        ? {
            opacity: [0, 0, 1, 1, 0],
          }
        : { opacity: 0 },
      transition: {
        duration: isHovered ? duration * 0.5 : duration,
        ease: isHovered ? ("easeOut" as const) : ("linear" as const),
        repeat: isHovered ? 0 : Infinity,
        times: [
          0,
          appearTime,
          appearTime + (isHovered ? 0.1 : 0.05),
          resetTime,
          1,
        ],
      },
    };
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
      onMouseEnter={() => isHovered && setIsHoveredInternal(true)}
      onMouseLeave={() => isHovered && setIsHoveredInternal(false)}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 7h11a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2" />
      <motion.path d="M7 10l0 4" {...getBarProps(0)} />
      <motion.path d="M10 10l0 4" {...getBarProps(1)} />
      <motion.path d="M13 10l0 4" {...getBarProps(2)} />
      <motion.path d="M16 10l0 4" {...getBarProps(3)} />
    </motion.svg>
  );
};

export default BatteryIcon;
