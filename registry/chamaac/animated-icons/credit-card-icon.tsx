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

const CreditCardIcon = (props: IconProps) => {
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
      overflow="visible"
      onMouseEnter={() => isHovered && setIsHoveredInternal(true)}
      onMouseLeave={() => isHovered && setIsHoveredInternal(false)}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <motion.g
        animate={shouldAnimate ? { rotateY: [0, 180, 360] } : { rotateY: 0 }}
        transition={{ ...transition, duration: duration * 2 }}
        style={{ originX: "50%", originY: "50%" }}
      >
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="7" y1="15" x2="7.01" y2="15" />
        <line x1="11" y1="15" x2="13" y2="15" />
      </motion.g>
    </motion.svg>
  );
};

export default CreditCardIcon;
