"use client";

import { useState } from "react";
import { m, LazyMotion, domAnimation, SVGMotionProps } from "motion/react";

interface ShieldIconProps
  extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
  size?: number;
  duration?: number;
  strokeWidth?: number;
  isHovered?: boolean;
}

const ShieldIcon = (props: ShieldIconProps) => {
  const {
    size = 28,
    duration = 2.5,
    strokeWidth = 2,
    isHovered = false,
    className,
    ...restProps
  } = props;
  const [isHoveredInternal, setIsHoveredInternal] = useState(false);

  const shouldAnimate = isHovered ? isHoveredInternal : true;

  const shieldProps = {
    animate: shouldAnimate ? { scale: [1, 1.03, 1] } : { scale: 1 },
    transition: {
      duration: duration,
      ease: "easeInOut" as const,
      repeat: isHovered ? 0 : Infinity,
    },
  };

  const checkProps = {
    animate: shouldAnimate
      ? { pathLength: [0, 1, 1, 0], opacity: 1 }
      : { pathLength: 1, opacity: 1 },
    transition: {
      duration: duration,
      ease: "easeInOut" as const,
      repeat: isHovered ? 0 : Infinity,
      times: [0, 0.4, 0.8, 1],
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.svg
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
        <m.path
          d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"
          style={{ transformOrigin: "12px 12px" }}
          {...shieldProps}
        />
        <m.path d="M9 12l2 2l4 -4" {...checkProps} />
      </m.svg>
    </LazyMotion>
  );
};

export default ShieldIcon;
