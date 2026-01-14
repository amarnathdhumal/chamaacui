"use client";

import { useState } from "react";
import { motion, SVGMotionProps } from "motion/react";

interface WifiIconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
  duration?: number;
  strokeWidth?: number;
  isHovered?: boolean;
}

const WifiIcon = (props: WifiIconProps) => {
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

  const path1Props = {
    animate: shouldAnimate ? { opacity: [0.3, 1, 0.3] } : { opacity: 1 },
    transition: {
      duration: duration,
      repeat: isHovered ? 0 : Infinity,
      delay: 0,
    },
  };

  const path2Props = {
    animate: shouldAnimate ? { opacity: [0.3, 1, 0.3] } : { opacity: 1 },
    transition: {
      duration: duration,
      repeat: isHovered ? 0 : Infinity,
      delay: 0.2,
    },
  };

  const path3Props = {
    animate: shouldAnimate ? { opacity: [0.3, 1, 0.3] } : { opacity: 1 },
    transition: {
      duration: duration,
      repeat: isHovered ? 0 : Infinity,
      delay: 0.4,
    },
  };

  const path4Props = {
    animate: shouldAnimate ? { opacity: [0.3, 1, 0.3] } : { opacity: 1 },
    transition: {
      duration: duration,
      repeat: isHovered ? 0 : Infinity,
      delay: 0.6,
    },
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
      <motion.path d="M12 18l.01 0" {...path1Props} />
      <motion.path d="M9.172 15.172a4 4 0 0 1 5.656 0" {...path2Props} />
      <motion.path d="M6.343 12.343a8 8 0 0 1 11.314 0" {...path3Props} />
      <motion.path
        d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0"
        {...path4Props}
      />
    </motion.svg>
  );
};

export default WifiIcon;
