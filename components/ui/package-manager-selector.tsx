"use client";

import { m, LazyMotion, domMax } from "motion/react";
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
    <LazyMotion features={domMax}>
      <div className={cn("flex flex-wrap gap-1 relative", className)}>
        {(["npm", "bun", "pnpm", "yarn"] as PackageManager[]).map((pm) => (
          <button
            key={pm}
            onClick={() => onPmChange(pm)}
            className={cn(
              "px-4 py-2 rounded-[8px] text-sm/5 transition-colors leading-none relative z-10 cursor-pointer",
              activePm === pm ? "text-white" : "text-gray-400 hover:text-white"
            )}
          >
            {activePm === pm && (
              <m.div
                layoutId={layoutId}
                className="absolute inset-0 bg-neutral-800 rounded-[8px]"
                transition={{
                  duration: 0.2,
                }}
              />
            )}
            <span className="relative z-10">{pm}</span>
          </button>
        ))}
      </div>
    </LazyMotion>
  );
}
