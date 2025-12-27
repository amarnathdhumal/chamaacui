"use client";

import React from "react";
import FocusButtonDemo from "./focus-button-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface FocusButtonPreviewWrapperProps {
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

export default function FocusButtonPreviewWrapper({
    title,
    description,
    code,
    installationSource,
    props,
}: FocusButtonPreviewWrapperProps) {
    return (
        <>
            <ViewArea
                title={title}
                description={description}
                preview={
                    <div className="w-full h-[300px] flex justify-center items-center">
                        <FocusButtonDemo
                        />
                    </div>
                }
                code={code}
            />

            {/* Installation Section */}
            <InstallationSection componentSource={installationSource} dependencies={["clsx", "tailwind-merge"]} componentName="focus-button" />

            {/* Main Props Section */}
            <PropsTable props={props} />
        </>
    );
}
