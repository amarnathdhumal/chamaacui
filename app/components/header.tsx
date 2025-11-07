"use client";

import { IconBrightness } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="fixed w-full flex justify-between items-center px-12 py-6  shadow-md dark:shadow-[0_4px_10px_rgba(255,255,255,0.1)] backdrop-blur-sm">
      <div>
        <h1 className="">Logo</h1>
      </div>
      <div>
        <IconBrightness
          onClick={toggleTheme}
          className="text-black dark:text-white cursor-pointer"
        />
      </div>
    </div>
  );
};
