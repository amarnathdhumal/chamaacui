import React from "react";

export interface SidebarDataTypes {
    componentName: string;
    link: string
}

export interface ViewAreaTypes {
    children: React.ReactNode;
    title: string;
    description: string
}

export interface TabButtonTypes {
    name: string;
    onClick: () => void;
    isActive: boolean
    icon: React.ReactNode
}