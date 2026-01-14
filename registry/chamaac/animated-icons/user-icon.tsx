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

const UserIcon = (props: IconProps) => {
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
      <motion.circle
        cx="12"
        cy="7"
        r="4"
        animate={shouldAnimate ? { y: [0, -2, 0] } : { y: 0 }}
        transition={transition}
      />
      <motion.path
        d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
        animate={shouldAnimate ? { y: [0, 1, 0] } : { y: 0 }}
        transition={transition}
      />
    </motion.svg>
  );
};

export default UserIcon;
