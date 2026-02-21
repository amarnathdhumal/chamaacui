import { TabButtonTypes } from "@/lib/types";
import { cn } from "@/lib/utils";
import { m } from "motion/react";

const TabButton = ({
  name,
  onClick,
  isActive,
  icon,
  layoutId = "activeTab",
}: TabButtonTypes) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-row gap-2 relative dark:text-white text-black px-4 py-2 rounded-[8px] text-base font-medium items-center cursor-pointer",
        isActive
          ? "dark:text-white text-black"
          : "text-black hover:text-black dark:hover:text-white"
      )}
    >
      {isActive && (
        <m.div
          layoutId={layoutId}
          className="absolute inset-0 dark:bg-neutral-800 bg-gray-200 rounded-[8px]"
          transition={{ duration: 0.3 }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {icon}
        {name}
      </span>
    </button>
  );
};

export default TabButton;
