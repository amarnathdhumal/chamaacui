"use client";

import React from "react";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";
import SlideUpButton from "@/registry/chamaac/slideup-button/slideup-button";
import { IconArrowUpRight } from "@tabler/icons-react";

interface AIInputPreviewWrapperProps {
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
  subComponents?: Array<{
    name: string;
    description: string;
    props: Array<{
      name: string;
      type: string;
      default: string;
      description: string;
      required: boolean;
    }>;
  }>;
}

export default function AIInputPreviewWrapper({
  title,
  description,
  code,
  codeFilename,
  installationSource,
  props,
  subComponents,
}: AIInputPreviewWrapperProps) {
  return (
    <>
      <ViewArea
        title={title}
        description={description}
        preview={
          <div className="w-full h-[300px] flex flex-col justify-center items-center relative overflow-hidden rounded-xl gap-6">
            <div className="text-center">
              <div className="flex flex-row items-center justify-center gap-2">
                <h3 className="text-3xl font-semibold text-black dark:text-white text-center">
                  Full Page Component
                </h3>
              </div>
              <p className="text-base text-zinc-500 dark:text-zinc-400 max-w-md mt-4 mb-6">
                This component is designed to take up the full viewport height.
                Click below to see the live preview.
              </p>
              <SlideUpButton
                onClick={() => window.open("/previews/ai-input", "_blank")}
                className="px-4 py-2  bg-black dark:bg-white text-white dark:text-black text-sm md:text-base"
              >
                <span className="flex items-center gap-2">
                  Open Preview
                  <IconArrowUpRight className="w-4 h-4" />
                </span>
              </SlideUpButton>
            </div>
          </div>
        }
        code={code}
        codeFilename={codeFilename}
      />

      {/* Installation Section */}
      <InstallationSection
        componentSource={installationSource}
        dependencies={["motion", "clsx", "tailwind-merge", "lucide-react"]}
        componentName="ai-input"
      />

      {/* Main Props Section */}
      <PropsTable props={props} />

      {/* Sub-components Props Sections */}
      {subComponents &&
        subComponents.map((subComponent) => (
          <div key={subComponent.name} className="mt-8">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
              {subComponent.name}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              {subComponent.description}
            </p>
            <PropsTable props={subComponent.props} />
          </div>
        ))}
    </>
  );
}
