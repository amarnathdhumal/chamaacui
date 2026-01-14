"use client";

import {
  IconBrightness,
  IconBrandX,
  IconSearch,
  IconBrandGithub,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
  useScroll,
  useMotionValueEvent,
  motion,
  AnimatePresence,
} from "motion/react";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { sidebarData } from "@/lib/data";

const Logo = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 355 426"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-white dark:fill-black"
        d="M184.467 0.319128C163.534 2.05246 140.201 8.1858 120.334 17.5191C101.534 26.3191 76.2007 43.5191 77.934 46.3191C78.334 46.9858 80.8673 47.5191 83.8007 47.5191C91.4007 47.5191 117.001 52.1858 134.734 56.7191C166.601 64.9858 197.801 78.8525 224.601 96.7191C266.467 124.452 293.934 162.852 299.934 202.186C301.534 212.319 301.001 220.452 297.667 237.519C297.001 240.986 297.534 240.586 301.934 234.186C328.067 196.452 346.067 146.986 353.801 92.4525C356.201 74.7191 356.201 74.7191 340.067 58.7191C311.534 30.1858 278.334 11.7858 240.867 3.65246C228.201 0.985795 198.867 -0.747539 184.467 0.319128Z"
      />
      <path
        className="fill-white dark:fill-black"
        d="M57.534 63.6524C44.0673 78.0524 30.4673 98.1858 21.134 117.519C5.26732 150.319 -1.26602 182.986 0.200651 221.519C1.40065 253.252 7.80065 279.252 21.2673 307.519C29.2673 324.186 49.2673 354.719 51.0007 352.719C51.2673 352.452 52.2007 346.186 53.0007 338.852C60.6007 275.652 81.0007 219.919 112.601 176.719C121.401 164.719 136.867 149.119 149.134 139.919C158.067 133.119 176.334 124.319 187.134 121.519C198.067 118.586 219.801 118.719 229.667 121.519C233.934 122.719 237.667 123.519 238.067 123.119C238.867 122.186 227.534 113.252 214.867 104.586C201.667 95.7858 173.801 82.0524 157.134 76.1858C131.667 67.3858 98.2007 60.1858 75.934 58.7191L63.0007 57.7858L57.534 63.6524Z"
      />
      <path
        className="fill-white dark:fill-black"
        d="M118.201 190.452C91.934 229.386 77.534 266.586 67.134 322.186C64.6006 335.653 62.0673 361.786 63.0006 365.386C64.334 370.853 90.0673 390.586 111.801 402.853C173.934 437.653 253.134 432.853 313.134 390.453C326.334 381.119 327.534 379.519 321.534 379.519C313.934 379.519 278.734 371.253 261.267 365.519C236.467 357.253 206.467 342.186 189.001 329.386C161.934 309.253 140.334 283.786 130.467 259.786C120.467 235.919 117.801 215.119 121.934 194.852C123.134 189.252 123.801 184.452 123.534 184.052C123.134 183.786 120.734 186.719 118.201 190.452Z"
      />
    </svg>
  );
};

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isScrolledBeyondViewport, setIsScrolledBeyondViewport] =
    useState(false);
  const [open, setOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolledBeyondViewport(latest > 0);
  });

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 w-full bg-white  dark:bg-black transition-all duration-300 ${
          pathname.startsWith("/components") || isScrolledBeyondViewport
            ? " border-b border-gray-200 dark:border-neutral-800"
            : ""
        }`}
      >
        <div className="flex justify-between items-center max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-4">
          <div className="flex items-center gap-4 md:gap-15 flex-row relative z-10">
            <Link
              href="/"
              className="flex flex-row items-center gap-[8px] focus:outline-none focus-visible:outline-none"
            >
              <div className="bg-black dark:bg-white p-1 rounded-[8px]">
                <Logo />
              </div>
              <div>
                <p className="font-bold text-[20px] leading-none tracking-tight hidden md:block ">
                  Chamaac UI
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-2 md:gap-4 flex-row relative z-10">
            <Link
              href="/components"
              className="text-sm/5 md:text-base/7 text-black dark:text-white"
            >
              Components
            </Link>

            {/* search input */}
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 px-2 md:px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-[16px] border border-border transition-colors bg-white dark:bg-black cursor-pointer text-neutral-500 dark:text-gray-400"
            >
              <IconSearch size={16} />
              <span className="hidden lg:inline-block text-sm/5 ">
                Search Components
              </span>
              <kbd className="pointer-events-none lg:inline-flex h-5 select-none items-center gap-1 rounded-[8px] border bg-gray-50 dark:bg-[#111111] px-2 py-2 text-[12px] text-neutral-500 dark:text-gray-400 opacity-100 hidden">
                <span className="">⌘</span>K
              </kbd>
            </button>

            <IconBrandGithub
              onClick={() =>
                window.open(
                  "https://github.com/amarnathdhumal/chamaacui",
                  "_blank"
                )
              }
              className="text-neutral-500 dark:text-gray-400 leading-tight cursor-pointer size-8 p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full "
            />
            <IconBrandX
              onClick={() =>
                window.open("https://x.com/AmarnathDhumal", "_blank")
              }
              className="text-neutral-500 dark:text-gray-400 leading-tight cursor-pointer size-8 p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full "
            />
            <IconBrightness
              onClick={toggleTheme}
              className="text-neutral-500 dark:text-gray-400 leading-tight cursor-pointer size-8 p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full "
            />
          </div>

          {/* Mobile Navigation - Only search, GitHub, and menu */}
          <div className="flex sm:hidden items-center gap-2 flex-row relative z-10">
            {/* Search button */}
            <button
              onClick={() => setOpen(true)}
              className="flex items-center justify-center p-2 text-sm hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-[12px] border border-border transition-colors bg-white dark:bg-black cursor-pointer text-neutral-500 dark:text-gray-400"
            >
              <IconSearch size={18} />
            </button>

            {/* GitHub button */}
            <button
              onClick={() =>
                window.open(
                  "https://github.com/amarnathdhumal/chamaacui",
                  "_blank"
                )
              }
              className="flex items-center justify-center p-2 text-sm hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-[12px] border border-border transition-colors bg-white dark:bg-black cursor-pointer text-neutral-500 dark:text-gray-400"
            >
              <IconBrandGithub size={18} />
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex items-center justify-center p-2 text-sm hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-[12px] transition-colors cursor-pointer text-black dark:text-white"
            >
              <IconMenu2 size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex sm:hidden"
          >
            {/* Sidebar Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="w-full min-h-screen flex flex-col py-4 px-4 overflow-y-auto relative bg-white dark:bg-black"
            >
              {/* Header */}
              <div className="flex items-center justify-between w-full">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex flex-row items-center gap-[8px]"
                >
                  <div className="bg-black dark:bg-white p-1 rounded-[8px]">
                    <Logo />
                  </div>
                  <p className="font-bold text-[20px] leading-none tracking-tight text-black dark:text-white">
                    Chamaac UI
                  </p>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-1 text-neutral-500 dark:text-gray-400 cursor-pointer"
                >
                  <span className="text-sm">Close</span>
                  <IconX size={20} />
                </button>
              </div>

              {/* Navigation Menu */}
              <div className="flex flex-col flex-1 mt-12">
                <ul>
                  <li className="border-b border-gray-200 dark:border-neutral-800 -mx-4">
                    <Link
                      href="/components"
                      className="block font-medium px-4 py-4 text-black dark:text-white text-[24px] leading-none tracking-tight transition-colors hover:bg-gray-50 dark:hover:bg-neutral-900"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Components
                    </Link>
                  </li>
                  <li className="border-b border-gray-200 dark:border-neutral-800 -mx-4">
                    <button
                      onClick={() => {
                        window.open("https://x.com/AmarnathDhumal", "_blank");
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left font-medium px-4 py-4 text-black dark:text-white text-[24px] leading-none tracking-tight transition-colors hover:bg-gray-50 dark:hover:bg-neutral-900"
                    >
                      Twitter / X
                    </button>
                  </li>
                  <li className="border-b border-gray-200 dark:border-neutral-800 -mx-4">
                    <button
                      onClick={() => {
                        toggleTheme();
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center justify-between w-full font-medium px-4 py-4 text-black dark:text-white text-[24px] leading-none tracking-tight transition-colors hover:bg-gray-50 dark:hover:bg-neutral-900"
                    >
                      <span>Toggle Theme</span>
                      <IconBrightness
                        size={24}
                        className="text-neutral-500 dark:text-gray-400"
                      />
                    </button>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        className="bg-white dark:bg-black rounded-[16px] border-gray-200 dark:border-neutral-800 "
      >
        <CommandInput
          className=" py-2 text-sm/5 text-neutral-500 dark:text-gray-400 "
          placeholder="Type a command or search..."
        />
        <CommandList className="bg-white dark:bg-black ">
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(
            sidebarData.reduce(
              (acc, item) => {
                const category = item.category || "Other";
                if (!acc[category]) acc[category] = [];
                acc[category].push(item);
                return acc;
              },
              {} as Record<string, typeof sidebarData>
            )
          )
            .filter(([category]) => category !== "Overview")
            .map(([category, items]) => {
              const filteredItems = items.filter(
                (item) => !item.componentName.includes("Overview")
              );
              return { category, items: filteredItems };
            })
            .filter(({ items }) => items.length > 0)
            .map(({ category, items }) => (
              <CommandGroup key={category} heading={category}>
                {items.map((item) =>
                  item.link ? (
                    <CommandItem
                      key={item.componentName}
                      value={item.componentName}
                      onSelect={() => {
                        runCommand(() =>
                          router.push(`/components${item.link}`)
                        );
                      }}
                      className="text-sm/5 !py-2 cursor-pointer"
                    >
                      {item.componentName}
                    </CommandItem>
                  ) : null
                )}
              </CommandGroup>
            ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};
