import React from "react";

export interface SidebarDataTypes {
  componentName: string;
  link: string;
}

export interface ViewAreaTypes {
  title: string;
  description: string;
  preview: React.ReactNode;
  code: React.ReactNode;
  scrollContainerRef?: React.RefObject<HTMLDivElement | null>;
  className?: string;
}

export interface TabButtonTypes {
  name: string;
  onClick: () => void;
  isActive: boolean;
  icon: React.ReactNode;
}

export interface CopyProps {
  text: string;
}
