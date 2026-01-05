"use client";

import React from "react";
import ActivityIconDemo from "./activity-icon-demo";
import ViewArea from "@/components/ui/view-area";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

interface ActivityIconPreviewWrapperProps {
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

export default function ActivityIconPreviewWrapper({
    title,
    description,
    code,
    installationSource,
    props,
}: ActivityIconPreviewWrapperProps) {
    return (
        <>
            <ViewArea
                title={title}
                description={description}
                preview={
                    <div className="w-full h-[300px] flex justify-center items-center">
                        <ActivityIconDemo />
                    </div>
                }
                code={code}
            />
            <InstallationSection componentSource={installationSource} componentName="activity-icon" />
            <PropsTable props={props} />
        </>
    );
}
