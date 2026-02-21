"use client";

import { m } from "motion/react";
import { cn } from "@/lib/utils";

export type PackageManager = "npm" | "bun" | "pnpm" | "yarn";

interface PackageManagerSelectorProps {
  activePm: PackageManager;
  onPmChange: (pm: PackageManager) => void;
  layoutId?: string;
  className?: string;
}

export default function PackageManagerSelector({
  activePm,
  onPmChange,
  layoutId = "pmBackground",
  className,
}: PackageManagerSelectorProps) {
  return (
    <div className={cn("flex flex-wrap gap-1 relative", className)}>
      {(["npm", "bun", "pnpm", "yarn"] as PackageManager[]).map((pm) => (
        <button
          key={pm}
          onClick={() => onPmChange(pm)}
          className={cn(
            "px-4 py-2 rounded-[8px] text-sm/5 transition-colors leading-none relative z-10 cursor-pointer",
            activePm === pm
              ? "text-neutral-700 dark:text-white"
              : "text-neutral-600 dark:text-gray-300 hover:text-neutral-700 dark:hover:text-gray-300"
          )}
        >
          {activePm === pm && (
            <m.div
              layoutId={layoutId}
              className="absolute inset-0 bg-gray-200 dark:bg-neutral-800 rounded-[8px]"
              transition={{
                duration: 0.2,
              }}
            />
          )}
          <span className="relative z-10">{pm}</span>
        </button>
      ))}
    </div>
  );
}
