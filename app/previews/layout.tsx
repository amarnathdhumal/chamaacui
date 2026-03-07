import Link from "next/link";
import React from "react";
import { IconArrowLeft } from "@tabler/icons-react";
import { PrimaryButton } from "@/components/ui/primary-button";

export default function PreviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-black">
      <div className="absolute top-4 left-4 z-50">
        <Link href="/components/inputs/ai-input">
          <PrimaryButton className="flex items-center gap-2">
            <IconArrowLeft size={20} />
            Back to component
          </PrimaryButton>
        </Link>
      </div>
      <div className="w-full h-full min-h-screen flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
