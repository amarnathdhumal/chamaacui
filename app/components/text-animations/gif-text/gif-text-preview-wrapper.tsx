"use client";

import React from "react";
import GifTextDemo from "./gif-text-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

import { BasePreviewWrapperProps } from "@/lib/types";

export default function GifTextPreviewWrapper({
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
          <div className="w-full flex flex-col justify-center items-center bg-white">
            <GifTextDemo />
          </div>
        }
        code={code}
        codeFilename={codeFilename}
      />

      {/* Installation Section */}
      <InstallationSection
        componentSource={installationSource}
        dependencies={["clsx", "tailwind-merge"]}
        componentName="gif-text"
      />

      {/* Main Props Section */}
      <PropsTable props={props} />
    </>
  );
}
