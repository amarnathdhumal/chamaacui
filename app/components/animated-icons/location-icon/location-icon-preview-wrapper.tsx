"use client";

import React from "react";
import LocationIconDemo from "./location-icon-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface LocationIconPreviewWrapperProps {
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

export default function LocationIconPreviewWrapper({
  title,
  description,
  code,
  installationSource,
  props,
}: LocationIconPreviewWrapperProps) {
  return (
    <>
      <ViewArea
        title={title}
        description={description}
        preview={
          <div className="w-full h-[300px] flex justify-center items-center">
            <LocationIconDemo />
          </div>
        }
        code={code}
      />
      <InstallationSection
        componentSource={installationSource}
        componentName="location-icon"
      />
      <PropsTable props={props} />
    </>
  );
}
