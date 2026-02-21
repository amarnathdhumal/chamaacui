"use client";

import React, { useState } from "react";
import GaugeDemo from "./gauge-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface GaugePreviewWrapperProps {
  title: string;
  description: string | React.ReactNode;
  code: React.ReactNode | string;
  codeFilename?: string;
  installationSource: string;
  props: Array<{
    name: string;
    type: string;
    default: string;
    description: string;
    required: boolean;
  }>;
}

export default function GaugePreviewWrapper({
  title,
  description,
  code,
  codeFilename,
  installationSource,
  props,
}: GaugePreviewWrapperProps) {
  const [key, setKey] = useState(0);

  return (
    <>
      <ViewArea
        title={title}
        description={description}
        preview={
          <div className="w-full  flex justify-center items-center">
            <GaugeDemo key={key} />
          </div>
        }
        code={code}
        codeFilename={codeFilename}
        onRefresh={() => setKey((prev) => prev + 1)}
      />

      {/* Installation Section */}
      <InstallationSection
        componentSource={installationSource}
        dependencies={["motion", "clsx", "tailwind-merge"]}
        componentName="gauge"
      />

      {/* Main Props Section */}
      <PropsTable props={props} />
    </>
  );
}
