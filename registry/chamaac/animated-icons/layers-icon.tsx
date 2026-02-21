"use client";

import { useState } from "react";
import { m, LazyMotion, domAnimation, SVGMotionProps } from "motion/react";

interface LayersIconProps
  extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
  size?: number;
  duration?: number;
  strokeWidth?: number;
  isHovered?: boolean;
}

const LayersIcon = (props: LayersIconProps) => {
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

  const layer1Props = {
    animate: shouldAnimate ? { y: [0, -3, 0] } : { y: 0 },
    transition: {
      duration: duration,
      ease: "easeInOut" as const,
      repeat: isHovered ? 0 : Infinity,
    },
  };

  const layer2Props = {
    animate: shouldAnimate ? { y: [0, -1.5, 0] } : { y: 0 },
    transition: {
      duration: duration,
      ease: "easeInOut" as const,
      repeat: isHovered ? 0 : Infinity,
      delay: 0.1,
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
        <m.path d="M12 4l-8 4l8 4l8 -4l-8 -4" {...layer1Props} />
        <m.path d="M4 12l8 4l8 -4" {...layer2Props} />
        <path d="M4 16l8 4l8 -4" />
      </m.svg>
    </LazyMotion>
  );
};

export default LayersIcon;
