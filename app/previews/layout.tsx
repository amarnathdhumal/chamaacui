import Link from "next/link";
import React from "react";
import { IconArrowLeft } from "@tabler/icons-react";

export default function PreviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-black">
      <div className="absolute top-4 left-4 z-50">
        <Link
          href="/components"
          className="flex flex-row items-center gap-2 text-sm text-neutral-700 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 h-fit bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800"
        >
          <IconArrowLeft size={16} />
          Back to components
        </Link>
      </div>
      <div className="w-full h-full min-h-screen flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
