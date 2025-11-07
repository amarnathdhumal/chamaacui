import { TabButtonTypes } from "@/lib/types";
import { cn } from "@/lib/utils";

const TabButton = ({ name, onClick, isActive, icon }: TabButtonTypes) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-row gap-2  text-white px-4 py-2 rounded-[8px] text-base font-medium items-center cursor-pointer",
        `${isActive ? "dark:bg-neutral-800 bg-gray-200 text-neutral-700 dark:text-white" : "text-neutral-500 dark:text-gray-400"}`
      )}
    >
      {icon}
      {name}
    </button>
  );
};

export default TabButton;
