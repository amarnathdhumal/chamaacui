"use client";

import React from "react";
import OrbitingIconsDemo from "./orbiting-icons-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

import { BasePreviewWrapperProps } from "@/lib/types";

export default function OrbitingIconsPreviewWrapper({
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
          <div className="w-full h-[500px] flex justify-center items-center">
            <OrbitingIconsDemo />
          </div>
        }
        code={code}
        codeFilename={codeFilename}
      />

      {/* Installation Section */}
      <InstallationSection componentSource={installationSource} />

      {/* Main Props Section */}
      <PropsTable props={props} />
    </>
  );
}
