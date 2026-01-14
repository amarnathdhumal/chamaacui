"use client";

import { motion, SVGMotionProps } from "motion/react";

interface MapPinIconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const MapPinIcon = (props: MapPinIconProps) => {
  const { size = 24, className, ...restProps } = props;

  return (
    <motion.svg
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
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <motion.g
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
      </motion.g>
    </motion.svg>
  );
};

export default MapPinIcon;
