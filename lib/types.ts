import React from "react";

export interface SidebarDataTypes {
  componentName: string;
  link: string;
  category?: string;
  isNew?: boolean;
}

export interface ViewAreaTypes {
  title: string;
  description: string | React.ReactNode;
  preview: React.ReactNode;
  code: React.ReactNode;
  scrollContainerRef?: React.RefObject<HTMLDivElement | null>;
  className?: string;
  onRefresh?: () => void;
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
