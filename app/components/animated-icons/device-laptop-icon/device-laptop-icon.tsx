"use client";

import { motion, SVGMotionProps } from "motion/react";

interface DeviceLaptopIconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const DeviceLaptopIcon = (props: DeviceLaptopIconProps) => {
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
      overflow="visible"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <motion.path
        d="M3 19l18 0"
        animate={{ scaleX: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"
        animate={{ y: [0, -1, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
      />
    </motion.svg>
  );
};

export default DeviceLaptopIcon;
