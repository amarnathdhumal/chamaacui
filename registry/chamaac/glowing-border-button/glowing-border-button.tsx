"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlowingBorderButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string; // Explicitly kept if needed, though extended types usually cover it
  children: React.ReactNode;
}

const GlowingBorderButton = ({
  className,
  children = "Book a Call",
  ...props
}: GlowingBorderButtonProps) => {
  return (
    <button
      className={cn(
        "glowing-border-button group relative h-[60px] px-4 cursor-pointer border-0 bg-transparent p-0 text-[20px] font-bold outline-none",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative h-full w-full overflow-hidden rounded-[18px] p-[2px] transition-all duration-300 ease-in-out",
          "dark:bg-zinc-800 bg-zinc-200"
        )}
      >
        {/* Rotating Border Beam */}
        <div className="absolute inset-0 overflow-hidden rounded-[18px]">
          <div
            className={cn(
              "absolute left-1/2 top-1/2 h-[500%] w-[80px] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite]",
              "[background:linear-gradient(to_right,transparent_20%,#50C878_50%,#50C878_60%,transparent_80%)]",
              "blur-[2px]"
            )}
          ></div>
        </div>

        {/* Inner Content */}
        <div
          className={cn(
            "content relative z-10 flex h-full w-full items-center justify-center gap-2 rounded-[16px] transition-all duration-300 ease-in-out bg-white dark:bg-black px-11"
          )}
        >
          <span className="dark:text-white text-black transition-colors duration-300">
            {children}
          </span>
        </div>
      </div>
    </button>
  );
};

export default GlowingBorderButton;
