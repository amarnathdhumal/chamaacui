"use client";

import { m, SVGMotionProps } from "motion/react";

interface FlameIconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const FlameIcon = (props: FlameIconProps) => {
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
        d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z"
        animate={{ scale: [1, 1.1, 1], y: [0, -2, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "12px", originY: "18px" }}
      />
    </m.svg>
  );
};

export default FlameIcon;
