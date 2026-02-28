"use client";

import React from "react";

import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";
import { StatsCards } from "@/registry/chamaac/stats-cards/stats-cards";

import { BasePreviewWrapperProps } from "@/lib/types";

export default function StatsCardsPreviewWrapper({
  title,
  description,
  code,
  codeFilename,
  installationSource,
  props,
}: BasePreviewWrapperProps) {
  return (
    <>
      <ViewArea
        title={title}
        description={description}
        preview={
          <div className="w-full flex justify-center items-center overflow-hidden min-h-[500px] bg-orange-50 py-4">
            <StatsCards width="w-64" height="h-78" />
          </div>
        }
        code={code}
        codeFilename={codeFilename}
      />

      {/* Installation Section */}
      <InstallationSection
        componentSource={installationSource}
        dependencies={["motion", "clsx", "tailwind-merge"]}
        componentName="stats-cards"
      />

      {/* Main Props Section */}
      <PropsTable props={props} />
    </>
  );
}
