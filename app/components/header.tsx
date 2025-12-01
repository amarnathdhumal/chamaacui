"use client";

import { IconBrightness } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { IconBrandX } from "@tabler/icons-react";
import Link from "next/link";
import { useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isScrolledBeyondViewport, setIsScrolledBeyondViewport] = useState(false);
  const pathname = usePathname();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show border and shadow when scrolled even a little
    setIsScrolledBeyondViewport(latest > 0);
  });

  return (

    <div
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-white dark:bg-transparent dark:backdrop-blur-sm transition-all duration-300 ${pathname.startsWith("/components") || isScrolledBeyondViewport
        ? "shadow-md dark:shadow-[0_4px_10px_rgba(255,255,255,0.1)] border-b border-gray-200 dark:border-neutral-800"
        : ""
        }`}
    >
      <div className="flex justify-between items-center max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div>
          <Link href="/" className="font-semibold text-[20px] leading-none">Chamaac</Link>
        </div>
        <div className="flex items-center gap-2 md:gap-4 flex-row relative z-10" >
          <Link href="/components" className="text-base text-neutral-800 dark:text-gray-400  leading-tight">
            Components
          </Link>
          <IconBrandX
            onClick={() => window.open("https://x.com/AmarnathDhumal", "_blank")}
            className="text-neutral-800 dark:text-gray-400 my-4 leading-tight  cursor-pointer size-8 p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full " />
          <IconBrightness
            onClick={toggleTheme}
            className="text-neutral-800 dark:text-gray-400 my-4 leading-tight  cursor-pointer size-8 p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full "
          />
        </div>
      </div>
    </div>

  );
};
