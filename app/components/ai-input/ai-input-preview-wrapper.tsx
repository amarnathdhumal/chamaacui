"use client";

import React from "react";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface AIInputPreviewWrapperProps {
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
                    <div className="w-full h-[300px] flex flex-col justify-center items-center relative overflow-hidden rounded-xl gap-4">
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                                Full Page Preview Required
                            </h3>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md">
                                This component is designed to take up the full viewport height.
                                Click below to see the live preview.
                            </p>
                        </div>
                        <a
                            href="/previews/ai-input"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium hover:opacity-90 transition-opacity"
                        >
                            Open Full Preview
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                }
                code={code}
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
            {subComponents && subComponents.map((subComponent, index) => (
                <div key={index} className="mt-8">
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
