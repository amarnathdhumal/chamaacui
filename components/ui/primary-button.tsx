import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export const PrimaryButton = ({
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "px-3 py-1.5 md:px-5 md:py-2.5 bg-black dark:bg-white text-white dark:text-black text-sm md:text-base rounded-[8px] tracking-tight cursor-pointer hover:opacity-80 transition-all",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
