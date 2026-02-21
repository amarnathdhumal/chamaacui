"use client";

import { m, SVGMotionProps } from "motion/react";

interface MoodHappyIconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const MoodHappyIcon = (props: MoodHappyIconProps) => {
  const { size = 24, className, ...restProps } = props;

  return (
    <m.svg
      {...restProps}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      overflow="visible"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <m.path
        d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <path d="M9 9l.01 0" />
      <path d="M15 9l.01 0" />
      <m.path
        d="M8 13a4 4 0 1 0 8 0h-8"
        animate={{ scaleY: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </m.svg>
  );
};

export default MoodHappyIcon;
