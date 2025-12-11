"use client";

import { ViewAreaTypes } from "@/lib/types";
import { useState } from "react";
import TabButton from "./tab-button";
import { IconEye, IconCode } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import RefreshButton from "./refresh-button";

const ViewArea = ({
  title,
  description,
  preview,
  code,
  scrollContainerRef,
  className,
  onRefresh,
}: ViewAreaTypes) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <div className="flex flex-col w-full h-full mb-10 md:mb-20 min-w-0 hide-scrollbar ">
      <h1 className="text-[2rem]/10 md:text-[2.5rem]/10 font-medium tracking-tighter text-black dark:text-white">{title}</h1>
      <p className="text-base/5 md:text-lg/7 text-neutral-500 dark:text-gray-400 tracking-tight mt-2 md:mt-4 mb-5 md:mb-10  max-w-[750px]">
        {description}
      </p>
      <div className="flex flex-row gap-4 mb-4">
        <TabButton
          name="Preview"
          onClick={() => setActiveTab("preview")}
          isActive={activeTab === "preview"}
          icon={<IconEye className="size-5" />}
        />
        <TabButton
          name="Code"
          onClick={() => setActiveTab("code")}
          isActive={activeTab === "code"}
          icon={<IconCode className="size-5" />}
        />
      </div>
      <div className="border border-gray-200 dark:border-neutral-800 rounded-[16px] overflow-hidden w-full ">
        {activeTab === "preview" ? (
          <div
            ref={scrollContainerRef}
            className={cn("overflow-y-auto hide-scrollbar  relative", className)}
          >
            {onRefresh && (
              <div className="absolute top-4 right-4 z-10">
                <RefreshButton onRefresh={onRefresh} />
              </div>
            )}
            {preview}
          </div>
        ) : (
          <div className="overflow-x-auto w-full max-h-[450px] hide-scrollbar relative">
            <div className="min-w-0">{code}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewArea;
