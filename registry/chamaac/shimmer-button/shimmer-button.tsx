"use client";

import { LazyMotion, domAnimation, m } from "motion/react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps {
  text?: string;
  className?: string;
  duration?: number;
  onClick?: () => void;
}

const ShimmerButton = ({
  text = "Book a Free Call",
  className,
  duration = 1.2,
  onClick,
}: ShimmerButtonProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <button
        onClick={onClick}
        className={cn(
          "group relative bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 px-8 py-3 rounded-full cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]",
          className
        )}
      >
        <m.span
          className="relative block bg-clip-text text-transparent bg-[linear-gradient(110deg,#737373_0%,#737373_40%,#171717_50%,#737373_60%,#737373_100%)] dark:bg-[linear-gradient(110deg,#a1a1aa_0%,#a1a1aa_40%,#ffffff_50%,#a1a1aa_60%,#a1a1aa_100%)] bg-[length:200%_100%] font-medium text-base tracking-tight"
          animate={{
            backgroundPosition: ["0% 0%", "-200% 0%"],
          }}
          transition={{
            repeat: Infinity,
            duration: duration,
            ease: "linear",
          }}
        >
          {text}
        </m.span>
      </button>
    </LazyMotion>
  );
};

export default ShimmerButton;
