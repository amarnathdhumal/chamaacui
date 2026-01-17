"use client";

import { InteractiveGridBackground } from "@/registry/chamaac/backgrounds/interactive-grid-background";
import SlideUpButton from "@/registry/chamaac/slideup-button/slideup-button";
import { IconArrowUpRight } from "@tabler/icons-react";

export function SponsorSection() {
  return (
    <section className="relative w-full h-[400px] overflow-hidden my-10 border border-border rounded-[30px]">
      <InteractiveGridBackground className="w-full h-full" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
        <SlideUpButton
          onClick={() =>
            window.open("https://github.com/sponsors/amarnathdhumal", "_blank")
          }
          className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm md:text-base pointer-events-auto"
        >
          <span className="flex items-center gap-2">
            Sponsor Me
            <IconArrowUpRight className="w-4 h-4" />
          </span>
        </SlideUpButton>
      </div>
    </section>
  );
}
