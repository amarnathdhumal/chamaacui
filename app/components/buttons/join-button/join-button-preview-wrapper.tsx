"use client";

import React from "react";
import JoinButtonDemo from "./join-button-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface JoinButtonPreviewWrapperProps {
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

export default function JoinButtonPreviewWrapper({
    title,
    description,
    code,
    installationSource,
    props,
}: JoinButtonPreviewWrapperProps) {
    return (
        <>
            <ViewArea
                title={title}
                description={description}
                preview={
                    <div className="w-full h-[300px] flex justify-center items-center bg-white dark:bg-black">
                        <JoinButtonDemo />
                    </div>
                }
                code={code}
            />

            {/* Installation Section */}
            <InstallationSection componentSource={installationSource} dependencies={[]} componentName="join-button" />

            {/* Main Props Section */}
            <PropsTable props={props} />
        </>
    );
}
