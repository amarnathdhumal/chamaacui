"use client";

import React from "react";
import { IconArrowRight } from "@tabler/icons-react";
import { LazyMotion, domAnimation, m } from "motion/react";
import { cn } from "@/lib/utils";

interface HoverArrowButtonProps extends React.ComponentProps<typeof m.button> {
  text?: string;
  duration?: number;
  iconSize?: number;
}

export default function HoverArrowButton({
  text = "Get Started",
  duration = 0.3,
  iconSize = 24,
  className,
  ...props
}: HoverArrowButtonProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.button
        className={cn(
          "group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-black px-6 py-3 text-white transition-all  dark:bg-white dark:text-black  text-base font-medium cursor-pointer",
          className
        )}
        whileHover="hover"
        initial="initial"
        whileTap="tap"
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1 },
        }}
        {...props}
      >
        <m.div
          className="flex items-center justify-center overflow-hidden"
          variants={{
            initial: { width: 0, opacity: 0 },
            hover: { width: "auto", opacity: 1 },
          }}
          transition={{
            duration: duration,
            ease: [0.165, 0.84, 0.44, 1],
          }}
        >
          <m.div
            className="flex items-center justify-center"
            variants={{
              initial: { x: "-200%", opacity: 0 },
              hover: { x: 0, opacity: 1 },
            }}
            transition={{
              duration: duration,
              ease: [0.165, 0.84, 0.44, 1],
            }}
          >
            <IconArrowRight
              size={iconSize}
              className="text-white dark:text-black"
            />
          </m.div>
        </m.div>

        <span className="mx-2">{text}</span>

        <m.div
          className="flex items-center justify-center overflow-hidden"
          variants={{
            initial: { width: "auto", opacity: 1 },
            hover: { width: 0, opacity: 0 },
          }}
          transition={{
            duration: duration,
            ease: [0.165, 0.84, 0.44, 1],
          }}
        >
          <m.div
            className="flex items-center justify-center"
            variants={{
              initial: { x: 0, opacity: 1 },
              hover: { x: "200%", opacity: 0 },
            }}
            transition={{
              duration: duration,
              ease: [0.165, 0.84, 0.44, 1],
            }}
          >
            <IconArrowRight
              size={iconSize}
              className="text-white dark:text-black"
            />
          </m.div>
        </m.div>
      </m.button>
    </LazyMotion>
  );
}
