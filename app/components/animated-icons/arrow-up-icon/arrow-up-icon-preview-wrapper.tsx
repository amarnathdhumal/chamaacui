"use client";

import React from "react";
import ArrowUpIconDemo from "./arrow-up-icon-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface ArrowUpIconPreviewWrapperProps {
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

export default function ArrowUpIconPreviewWrapper({
  title,
  description,
  code,
  installationSource,
  props,
}: ArrowUpIconPreviewWrapperProps) {
  return (
    <>
      <ViewArea
        title={title}
        description={description}
        preview={
          <div className="w-full h-[300px] flex justify-center items-center">
            <ArrowUpIconDemo />
          </div>
        }
        code={code}
      />

      {/* Installation Section */}
      <InstallationSection
        componentSource={installationSource}
        componentName="arrow-up-icon"
      />

      {/* Main Props Section */}
      <PropsTable props={props} />
    </>
  );
}
