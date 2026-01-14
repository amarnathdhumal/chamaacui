"use client";

import { motion, SVGMotionProps } from "motion/react";

interface SparklesIconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const SparklesIcon = (props: SparklesIconProps) => {
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
      <motion.path
        d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2"
        animate={{ scale: [0, 1.2, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        style={{ originX: "18px", originY: "18px" }}
      />
      <motion.path
        d="M16 6a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2"
        animate={{ scale: [1, 0, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{ originX: "18px", originY: "6px" }}
      />
      <motion.path
        d="M9 12a4 4 0 0 1 4 4a4 4 0 0 1 4 -4a4 4 0 0 1 -4 -4a4 4 0 0 1 -4 4"
        animate={{ scale: [0.8, 1.1, 0.8], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "13px", originY: "12px" }}
      />
    </motion.svg>
  );
};

export default SparklesIcon;
