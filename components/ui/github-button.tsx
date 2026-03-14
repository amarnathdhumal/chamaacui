"use client";

import { IconBrandGithub, IconStarFilled } from "@tabler/icons-react";
import { m, useAnimationControls } from "motion/react";
import { useEffect, useState } from "react";
import Link from "next/link";

export const GithubButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="https://github.com/amarnathdhumal/chamaacui"
      target="_blank"
      rel="noopener noreferrer"
      className="relative group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer rotating glow */}
      <div className="absolute -inset-[2px] rounded-[14px] bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 opacity-75 blur-md transition-all duration-500 group-hover:opacity-100 group-hover:duration-200 animate-tilt"></div>

      {/* Inner animated border gradient */}
      <div className="absolute inset-0 rounded-[12px] bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 [background-size:200%_auto] animate-gradient"></div>

      {/* Button content layer */}
      <div className="relative flex items-center gap-2 rounded-[11px] bg-white dark:bg-black px-3 py-2 transition-all duration-300 group-hover:bg-white/90 dark:group-hover:bg-black/80">
        <div className="relative flex items-center justify-center">
          <IconBrandGithub
            size={18}
            className="text-black dark:text-white relative z-10 transition-transform duration-300 group-hover:-rotate-[10deg] group-hover:scale-110"
          />
          {/* Sparkle effect on hover */}
          <m.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
            className="absolute -top-1 -right-1 z-20"
          >
            <IconStarFilled
              size={10}
              className="text-yellow-400 animate-pulse"
            />
          </m.div>
        </div>

        <div className="flex flex-col items-start translate-y-[1px]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-text-secondary leading-none">
            Star us on
          </span>
          <span className="text-sm font-semibold text-black dark:text-white leading-tight bg-clip-text text-transparent bg-gradient-to-r from-black to-black dark:from-white dark:to-white group-hover:from-violet-500 group-hover:to-cyan-500 transition-all duration-300">
            GitHub
          </span>
        </div>
      </div>
    </Link>
  );
};
