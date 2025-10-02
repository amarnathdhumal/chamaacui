import React from "react";

export interface SidebarDataTypes {
    componentName: string;
    link: string
}

export interface ViewAreaTypes {

    title: string;
    description: string
    preview: React.ReactNode;
    code: React.ReactNode
}

export interface TabButtonTypes {
    name: string;
    onClick: () => void;
    isActive: boolean
    icon: React.ReactNode

}

export interface CopyProps {
    text: string;
}