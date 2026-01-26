"use client";

import React from "react";

import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";
import HowItWorksDemo from "./how-it-works-demo";

interface HowItWorksPreviewWrapperProps {
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

export default function HowItWorksPreviewWrapper({
  title,
  description,
  code,
  installationSource,
  props,
}: HowItWorksPreviewWrapperProps) {
  return (
    <>
      <ViewArea
        title={title}
        description={description}
        preview={
          <div className="w-full h-[700px] overflow-hidden  bg-background relative">
            <div className="absolute inset-0 overflow-y-auto hide-scrollbar">
              <HowItWorksDemo />
            </div>
          </div>
        }
        code={code}
      />

      {/* Installation Section */}
      <InstallationSection
        componentSource={installationSource}
        dependencies={[]}
        componentName="how-it-works"
      />

      {/* Main Props Section */}
      <PropsTable props={props} />
    </>
  );
}
