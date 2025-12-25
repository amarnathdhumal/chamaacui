"use client";

import React from "react";
import DockDemo from "./dock-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface DockPreviewWrapperProps {
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

export default function DockPreviewWrapper({
    title,
    description,
    code,
    installationSource,
    props,
    subComponents,
}: DockPreviewWrapperProps) {
    return (
        <>
            <ViewArea
                title={title}
                description={description}
                preview={
                    <div className="w-full h-[300px] flex flex-col justify-center items-center gap-4">
                        <h2 className="text-center text-2xl font-medium">
                            The dock will show on bottom of the page
                        </h2>
                        <DockDemo />
                    </div>
                }
                code={code}
            />

            {/* Installation Section */}
            <InstallationSection componentSource={installationSource} dependencies={["motion", "clsx", "tailwind-merge", "lucide-react", "next-themes"]} />

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

