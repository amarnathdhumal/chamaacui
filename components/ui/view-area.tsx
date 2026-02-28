"use client";

import { useState } from "react";
import TabButton from "./tab-button";
import { IconEye, IconCode } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import RefreshButton from "./refresh-button";
import CodeBlock from "./code-block";
import DeviceSelector, { DeviceType } from "./device-selector";
import IframePreview from "./iframe-preview";
import { ViewAreaTypes } from "@/lib/types";

const ViewArea = ({
  title,
  description,
  preview,
  code,
  codeFilename,
  scrollContainerRef,
  className,
  onRefresh,
}: ViewAreaTypes) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [device, setDevice] = useState<DeviceType>("desktop");

  return (
    <div className="flex flex-col w-full h-full mb-10 md:mb-20 min-w-0 hide-scrollbar ">
      <h1 className="text-[2rem]/10 md:text-[2.5rem]/10 font-semibold tracking-tight text-black dark:text-white">
        {title}
      </h1>
      <p className="text-base/5 md:text-lg/7 text-neutral-600 dark:text-gray-300 tracking-tight mt-2 md:mt-4 mb-5 md:mb-10  max-w-[750px]">
        {description}
      </p>
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-row gap-4">
          <TabButton
            name="Preview"
            onClick={() => setActiveTab("preview")}
            isActive={activeTab === "preview"}
            icon={<IconEye className="size-5" />}
            layoutId={`viewAreaTab-${title}`}
          />
          <TabButton
            name="Code"
            onClick={() => setActiveTab("code")}
            isActive={activeTab === "code"}
            icon={<IconCode className="size-5" />}
            layoutId={`viewAreaTab-${title}`}
          />
        </div>

        {activeTab === "preview" && (
          <DeviceSelector device={device} setDevice={setDevice} />
        )}
      </div>
      <div
        className={cn(
          activeTab === "preview"
            ? "border border-border rounded-[16px] overflow-hidden transition-all duration-300 ease-in-out w-full"
            : "w-full",
          activeTab === "preview" && device === "tablet" ? "max-w-[768px]" : "",
          activeTab === "preview" && device === "mobile" ? "max-w-[393px]" : ""
        )}
      >
        {activeTab === "preview" ? (
          <div
            ref={scrollContainerRef}
            className={cn(
              "hide-scrollbar relative bg-white dark:bg-black w-full h-full",
              device === "desktop" ? "overflow-y-auto" : "overflow-hidden",
              className
            )}
          >
            {onRefresh && (
              <div className="absolute top-4 right-4 z-10">
                <RefreshButton onRefresh={onRefresh} />
              </div>
            )}
            {device === "desktop" ? (
              preview
            ) : (
              <IframePreview>{preview}</IframePreview>
            )}
          </div>
        ) : (
          <div className="w-full">
            {typeof code === "string" ? (
              <CodeBlock code={code} filename={codeFilename} />
            ) : (
              code
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewArea;
