import type { Metadata } from "next";
import { Header } from "./components/header";

export const metadata: Metadata = {
  title: "Chamaac UI | Premium UI Components",
  description:
    "A premium collection of motion-rich, interactive UI components for React.",
};
import SlideUpButton from "@/registry/chamaac/slideup-button/slideup-button";
import Link from "next/link";
import TextLoop from "./components/text-animations/text-loop/text-loop";
import VideoBentoGrid from "../components/ui/video-bento-grid";
import { IconBrandGithub } from "@tabler/icons-react";
import { PrimaryButton } from "@/components/ui/primary-button";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full dark:bg-black bg-white overflow-x-hidden flex flex-col max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
      <Header />

      <div className="flex flex-col lg:flex-row justify-center mt-[100px] md:mt-[150px] mb-[30px] lg:mb-0 flex-1 z-10 relative w-full mx-auto gap-8 md:gap-12">
        {/* Content Section */}
        <div className="flex flex-col items-start sm:items-center">
          {/* Mobile Static Heading */}
          <h1 className="text-7xl font-semibold text-left text-black dark:text-white leading-[0.95] tracking-tighter sm:hidden mb-2">
            Make your UI Shine.
          </h1>

          {/* Desktop/Tablet Animated Heading */}
          <TextLoop
            className="hidden sm:flex"
            staticTextClassName="text-6xl lg:text-7xl xl:text-8xl font-semibold text-left text-black dark:text-white leading-[0.95] tracking-tighter"
            rotatingTextClassName="text-6xl lg:text-7xl xl:text-8xl font-semibold text-left leading-[0.95] tracking-tighter bg-gradient-to-r from-neutral-600 to-black dark:from-neutral-400 dark:to-white text-black dark:text-white"
            cursorClassName="sm:h-[3.8rem] md:h-[4.5rem]  xl:h-[5.7rem] bg-black dark:bg-white"
            backgroundClassName="bg-gradient-to-r from-transparent via-neutral-300/50 to-neutral-400/80 dark:from-transparent dark:via-neutral-700/50 dark:to-neutral-600/80"
            staticText="Make your UI"
            rotatingTexts={["Shine.", "Pop.", "Glow."]}
          />

          <p className="text-base/5 md:text-lg/6 text-left sm:text-center text-neutral-600 dark:text-gray-300 my-5 md:my-[30px] max-w-[550px]">
            A premium collection of interactable, motion-rich components
            designed to make your web presence unforgettable.
          </p>
          <div className="flex justify-center gap-3">
            <Link href="/components" className="w-fit">
              <PrimaryButton>Explore Components</PrimaryButton>
            </Link>
            <Link
              href="https://github.com/amarnathdhumal/chamaacui"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit"
            >
              <PrimaryButton variant="secondary">
                <IconBrandGithub size={20} />
                Star us on GitHub
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Video Bento Grid */}
      <VideoBentoGrid />
    </div>
  );
}
