"use client";

import React from "react";
import ArrowDownIconDemo from "./arrow-down-icon-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface ArrowDownIconPreviewWrapperProps {
  title: string;
  description: string | React.ReactNode;
  code: React.ReactNode;
  installationSource: string;
  props: Array<{
    name: string;
    type: string;
    default: string;
    description: string;
    required: boolean;
  }>;
}

export default function ArrowDownIconPreviewWrapper({
  title,
  description,
  code,
  installationSource,
  props,
}: ArrowDownIconPreviewWrapperProps) {
  return (
    <>
      <ViewArea
        title={title}
        description={description}
        preview={
          <div className="w-full h-[300px] flex justify-center items-center">
            <ArrowDownIconDemo />
          </div>
        }
        code={code}
      />

      {/* Installation Section */}
      <InstallationSection
        componentSource={installationSource}
        componentName="arrow-down-icon"
      />

      {/* Main Props Section */}
      <PropsTable props={props} />
    </>
  );
}
