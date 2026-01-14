"use client";

import { useState } from "react";
import { motion, SVGMotionProps } from "motion/react";

interface MessageIconProps
  extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
  size?: number;
  duration?: number;
  strokeWidth?: number;
  isHovered?: boolean;
}

const MessageIcon = (props: MessageIconProps) => {
  const {
    size = 28,
    duration = 1.5,
    strokeWidth = 2,
    isHovered = false,
    className,
    ...restProps
  } = props;
  const [isHoveredInternal, setIsHoveredInternal] = useState(false);

  const shouldAnimate = isHovered ? isHoveredInternal : true;

  const dot1Props = {
    animate: shouldAnimate ? { opacity: [0.3, 1, 0.3] } : { opacity: 1 },
    transition: {
      duration: duration,
      repeat: isHovered ? 0 : Infinity,
      delay: 0,
    },
  };

  const dot2Props = {
    animate: shouldAnimate ? { opacity: [0.3, 1, 0.3] } : { opacity: 1 },
    transition: {
      duration: duration,
      repeat: isHovered ? 0 : Infinity,
      delay: duration * 0.2,
    },
  };

  const dot3Props = {
    animate: shouldAnimate ? { opacity: [0.3, 1, 0.3] } : { opacity: 1 },
    transition: { duration: duration, repeat: isHovered ? 0 : Infinity },
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
      <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
      <motion.circle
        cx="8"
        cy="11"
        r="1"
        fill="currentColor"
        stroke="none"
        {...dot1Props}
      />
      <motion.circle
        cx="12"
        cy="11"
        r="1"
        fill="currentColor"
        stroke="none"
        {...dot2Props}
      />
      <motion.circle
        cx="16"
        cy="11"
        r="1"
        fill="currentColor"
        stroke="none"
        {...dot3Props}
      />
    </motion.svg>
  );
};

export default MessageIcon;
