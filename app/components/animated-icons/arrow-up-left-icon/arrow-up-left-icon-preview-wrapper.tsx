"use client";

import React from "react";
import ArrowUpLeftIconDemo from "./arrow-up-left-icon-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface ArrowUpLeftIconPreviewWrapperProps {
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

export default function ArrowUpLeftIconPreviewWrapper({
  title,
  description,
  code,
  installationSource,
  props,
}: ArrowUpLeftIconPreviewWrapperProps) {
  return (
    <>
      <ViewArea
        title={title}
        description={description}
        preview={
          <div className="w-full h-[300px] flex justify-center items-center">
            <ArrowUpLeftIconDemo />
          </div>
        }
        code={code}
      />

      {/* Installation Section */}
      <InstallationSection
        componentSource={installationSource}
        componentName="arrow-up-left-icon"
      />

      {/* Main Props Section */}
      <PropsTable props={props} />
    </>
  );
}
