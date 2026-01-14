"use client";

import React from "react";
import SparkleIconDemo from "./sparkle-icon-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface SparkleIconPreviewWrapperProps {
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

export default function SparkleIconPreviewWrapper({
  title,
  description,
  code,
  installationSource,
  props,
}: SparkleIconPreviewWrapperProps) {
  return (
    <>
      <ViewArea
        title={title}
        description={description}
        preview={
          <div className="w-full h-[300px] flex justify-center items-center">
            <SparkleIconDemo />
          </div>
        }
        code={code}
      />
      <InstallationSection
        componentSource={installationSource}
        componentName="sparkle-icon"
      />
      <PropsTable props={props} />
    </>
  );
}
