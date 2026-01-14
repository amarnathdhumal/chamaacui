"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";
import AnimatedTabs from "@/components/ui/animated-tabs";
import PackageManagerSelector, {
  PackageManager,
} from "@/components/ui/package-manager-selector";

interface InstallationSectionProps {
  componentSource: string;
  dependencies?: string[];
  componentName?: string;
}

interface InstallationSectionProps {
  componentSource: string;
  dependencies?: string[];
  componentName?: string;
}

type InstallMethod = "cli" | "manual";

export default function InstallationSection({
  componentSource,
  dependencies = ["motion"],
  componentName = "component",
}: InstallationSectionProps) {
  const [installMethod, setInstallMethod] = useState<InstallMethod>("cli");
  const [activePm, setActivePm] = useState<PackageManager>("npm");

  const getCliCommand = (pm: PackageManager, name: string) => {
    const url = `https://chamaac.com/r/${name}.json`;
    switch (pm) {
      case "npm":
        return `npx shadcn@latest add ${url}`;
      case "bun":
        return `bunx shadcn@latest add ${url}`;
      case "pnpm":
        return `pnpm dlx shadcn@latest add ${url}`;
      case "yarn":
        return `npx shadcn@latest add ${url}`;
    }
  };

  const getInstallCommand = (pm: PackageManager, deps: string[]) => {
    const depString = deps.join(" ");
    switch (pm) {
      case "npm":
        return `npm install ${depString}`;
      case "bun":
        return `bun add ${depString}`;
      case "pnpm":
        return `pnpm add ${depString}`;
      case "yarn":
        return `yarn add ${depString}`;
    }
  };

  const cliCommand = getCliCommand(activePm, componentName);
  const manualCommand = getInstallCommand(activePm, dependencies);

  return (
    <div className="">
      <h2 className="text-2xl/7 md:text-3xl/7 tracking-tight text-black dark:text-white mb-4 font-semibold">
        Installation
      </h2>

      {/* CLI/Manual Tabs */}
      <div className="mb-5 md:mb-10 mt-6">
        {/* Tab Headers */}
        <AnimatedTabs
          layoutId="activeInstallMethod"
          activeTab={installMethod}
          onTabChange={(val) => setInstallMethod(val as InstallMethod)}
          tabs={[
            { label: "CLI", value: "cli" },
            { label: "Manual", value: "manual" },
          ]}
        />

        <div className="mt-4">
          {/* Tab Content */}
          {installMethod === "cli" ? (
            <div className="border border-gray-200 dark:border-neutral-800 rounded-[16px] overflow-hidden ">
              {/* Package Manager Selector */}
              <div className="bg-gray-50 dark:bg-neutral-900 p-2 border-b border-gray-200 dark:border-neutral-800 ">
                <PackageManagerSelector
                  activePm={activePm}
                  onPmChange={setActivePm}
                  layoutId="cliPmBackground"
                />
              </div>

              {/* CLI Command */}
              <div className="relative bg-white dark:bg-neutral-950">
                <div className="absolute top-4 right-4">
                  <CopyButton text={cliCommand} />
                </div>
                <div className="p-4">
                  <code className="text-sm font-mono text-neutral-500 dark:text-neutral-200">
                    {cliCommand}
                  </code>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {/* Manual Installation Steps */}
              {dependencies.length > 0 && (
                <div>
                  <h4 className="text-lg font-medium text-black dark:text-white  mb-4">
                    Step 1: Install Dependencies
                  </h4>

                  <div className="border border-gray-200 dark:border-neutral-800 rounded-[16px] overflow-hidden ">
                    <div className="bg-gray-50 dark:bg-neutral-900 p-2 ">
                      <PackageManagerSelector
                        activePm={activePm}
                        onPmChange={setActivePm}
                        layoutId="manualPmBackground"
                      />
                    </div>
                    <div className="relative bg-white dark:bg-neutral-950 border-b border-gray-200 dark:border-neutral-800">
                      <div className="absolute top-4 right-4">
                        <CopyButton text={manualCommand} />
                      </div>
                      <div className="p-4">
                        <code className="text-sm font-mono text-neutral-500 dark:text-neutral-200">
                          {manualCommand}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Component Code */}
              <div>
                <div>
                  <h4 className="text-lg font-medium text-black dark:text-white mb-4">
                    Step {dependencies.length > 0 ? 2 : 1}: Copy and paste the
                    component code into your project.
                  </h4>
                </div>
                <div className="bg-white dark:bg-neutral-950 max-h-[350px] overflow-auto hide-scrollbar border border-gray-200 dark:border-neutral-800 rounded-[16px]">
                  <div className="relative">
                    <div className="absolute top-4 right-4">
                      <CopyButton text={componentSource} />
                    </div>
                    <SyntaxHighlighter
                      language="tsx"
                      style={oneDark}
                      wrapLongLines={true}
                      customStyle={{
                        margin: 0,
                        padding: "1rem",
                        fontSize: "14px",
                        lineHeight: "1.5",
                        width: "100%",
                        maxWidth: "100%",
                        boxSizing: "border-box",
                        overflow: "auto",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        borderRadius: "0px",
                      }}
                    >
                      {componentSource}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
