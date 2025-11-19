"use client";

import { IconBrightness } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { IconBrandX } from "@tabler/icons-react";
import Link from "next/link";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full flex justify-between items-center px-12 py-4  ">
      <div>
        <h1 className="">Logo</h1>
      </div>
      <div className="flex items-center gap-6 flex-row relative z-10" >
        <Link href="/components" className="text-base text-neutral-800 dark:text-gray-400 my-4 leading-tight">
          Components
        </Link>
        <IconBrandX
          onClick={() => window.open("https://x.com/AmarnathDhumal", "_blank")}
          className="text-neutral-800 dark:text-gray-400 my-4 leading-tight  cursor-pointer size-10 p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full " />
        <IconBrightness
          onClick={toggleTheme}
          className="text-neutral-800 dark:text-gray-400 my-4 leading-tight  cursor-pointer size-10 p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full "
        />
      </div>
    </div>
  );
};
// shadow-md dark:shadow-[0_4px_10px_rgba(255,255,255,0.1)] backdrop-blur-sm