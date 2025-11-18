"use client";

import { sidebarData } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const pathname = usePathname();

  // Group items by category
  const groupedData = sidebarData.reduce((acc, item) => {
    const category = item.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<string, typeof sidebarData>);

  return (
    <div className="min-w-40 h-full flex flex-col sticky top-28">
      <ul className="flex flex-col gap-4">
        {Object.entries(groupedData).map(([category, items]) => (
          <li key={category} className="flex flex-col gap-2">
            <h3 className="text-lg font-medium text-black dark:text-white leading-none tracking-tight">
              {category}
            </h3>
            <ul className="flex flex-col gap-2">
              {items.map((item) => {
                const href = item.link === "" ? "/components" : `/components${item.link}`;
                const isActive = item.link === ""
                  ? pathname === "/components"
                  : `/components${item.link}` === pathname;
                return (
                  <li key={item.link || "introduction"}>
                    <Link
                      href={href}
                      className={cn(
                        "cursor-pointer block font-normal text-sm ",
                        `${isActive ? "text-black dark:text-white  font-medium" : "text-gray-500 dark:text-gray-400 "}`
                      )}
                    >
                      {item.componentName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
