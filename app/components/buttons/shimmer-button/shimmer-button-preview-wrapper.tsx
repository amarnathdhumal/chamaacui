"use client";

import React from "react";
import ShimmerButtonDemo from "./shimmer-button-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface ShimmerButtonPreviewWrapperProps {
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

export default function ShimmerButtonPreviewWrapper({
  title,
  description,
  code,
  installationSource,
  props,
}: ShimmerButtonPreviewWrapperProps) {
  return (
    <>
      <ViewArea
        title={title}
        description={description}
        preview={
          <div className="w-full h-[300px] flex justify-center items-center bg-white">
            <ShimmerButtonDemo />
          </div>
        }
        code={code}
      />

      {/* Installation Section */}
      <InstallationSection
        componentSource={installationSource}
        dependencies={["motion", "clsx", "tailwind-merge"]}
        componentName="shimmer-button"
      />

      {/* Main Props Section */}
      <PropsTable props={props} />
    </>
  );
}
