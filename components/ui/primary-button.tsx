import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export const PrimaryButton = ({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) => {
  const variants = {
    primary:
      "bg-black dark:bg-white text-white dark:text-black hover:opacity-80 transition-all",
    secondary:
      "text-black dark:text-white border border-border bg-bg-secondary hover:bg-bg-tertiary transition-colors",
  };

  return (
    <button
      className={cn(
        "px-3 py-1.5 md:px-5 md:py-2.5 text-sm md:text-base rounded-[8px] tracking-tight cursor-pointer flex items-center justify-center gap-[5px]",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
