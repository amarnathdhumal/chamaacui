"use client";

import { IconBrightness, IconBrandX, IconSearch } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useScroll, useMotionValueEvent } from "motion/react";
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

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isScrolledBeyondViewport, setIsScrolledBeyondViewport] = useState(false);
  const [open, setOpen] = useState(false);
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

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 w-full bg-white dark:bg-transparent dark:backdrop-blur-sm transition-all duration-300 ${pathname.startsWith("/components") || isScrolledBeyondViewport
          ? "shadow-md dark:shadow-[0_4px_10px_rgba(255,255,255,0.1)] border-b border-gray-200 dark:border-neutral-800"
          : ""
          }`}
      >
        <div className="flex justify-between items-center max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <div >
            <Link href="/" className="font-bold text-[20px] leading-none tracking-tight">Chamaac UI</Link>

          </div>
          <div className="flex items-center gap-2 md:gap-4 flex-row relative z-10" >

            <Link href="/components" className="text-sm/5 md:text-base/7  text-black dark:text-white">
              Components
            </Link>
            {/* search input */}
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 px-2 md:px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-[16px] border border-border transition-colors bg-white dark:bg-black cursor-pointer text-neutral-500 dark:text-gray-400"
            >
              <IconSearch size={16} />
              <span className="hidden md:inline-block text-sm/5 ">Search Components</span>
              <kbd className="pointer-events-none sm:inline-flex h-5 select-none items-center gap-1 rounded-[8px] border bg-gray-200 dark:bg-[#111111] px-2 py-2  text-[12px] text-neutral-500 dark:text-gray-400 opacity-100  hidden">
                <span className="">⌘</span>K
              </kbd>
            </button>




            <IconBrandX
              onClick={() => window.open("https://x.com/AmarnathDhumal", "_blank")}
              className="text-neutral-500 dark:text-gray-400 my-4 leading-tight  cursor-pointer size-8 p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full " />
            <IconBrightness
              onClick={toggleTheme}
              className="text-neutral-500 dark:text-gray-400 my-4 leading-tight  cursor-pointer size-8 p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full "
            />


          </div>
        </div>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen} className="bg-white dark:bg-black rounded-[16px] border-gray-200 dark:border-neutral-800 ">
        <CommandInput className=" py-2 text-sm/5 text-neutral-500 dark:text-gray-400 " placeholder="Type a command or search..." />
        <CommandList className="bg-white dark:bg-black ">
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(
            sidebarData.reduce((acc, item) => {
              const category = item.category || "Other";
              if (!acc[category]) acc[category] = [];
              acc[category].push(item);
              return acc;
            }, {} as Record<string, typeof sidebarData>)
          )
            .filter(([category]) => category !== "Overview")
            .map(([category, items]) => {
              const filteredItems = items.filter((item) => !item.componentName.includes("Overview"));
              return { category, items: filteredItems };
            })
            .filter(({ items }) => items.length > 0)
            .map(({ category, items }) => (
              <CommandGroup key={category} heading={category} >
                {items
                  .map((item) => (
                    item.link ? (
                      <CommandItem
                        key={item.componentName}
                        value={item.componentName}
                        onSelect={() => {
                          runCommand(() => router.push(`/components${item.link}`));
                        }}
                        className="text-sm/5 !py-2 cursor-pointer"
                      >
                        {item.componentName}
                      </CommandItem>
                    ) : null
                  ))}
              </CommandGroup>
            ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};
