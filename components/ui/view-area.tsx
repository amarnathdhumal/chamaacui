"use client";

import { ViewAreaTypes } from "@/lib/types";
import { useState } from "react";
import TabButton from "./tab-button";
import { IconEye, IconCode } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const ViewArea = ({
  title,
  description,
  preview,
  code,
  scrollContainerRef,
  className,
}: ViewAreaTypes) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <div className="flex flex-col w-full h-full mb-12 min-w-0 hide-scrollbar">
      <h1 className="text-4xl font-bold text-black dark:text-white">{title}</h1>
      <p className="text-base text-neutral-800 dark:text-gray-400 my-4">
        {description}
      </p>
      <div className="flex flex-row gap-4 mb-6">
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
      <div className="border border-gray-200 dark:border-neutral-800 rounded-[16px] overflow-hidden w-full">
        {activeTab === "preview" ? (
          <div
            ref={scrollContainerRef}
            className={cn("overflow-y-auto hide-scrollbar", className)}
          >
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
