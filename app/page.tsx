"use client";

import { Header } from "./components/header";
import SlideUpButton from "./components/slideup-button/slide-up-button";
import { useRouter } from "next/navigation";
import { IconRocket, IconCode, IconSparkles } from "@tabler/icons-react";

export default function Home() {
  const router = useRouter();
  return (
    <div className="relative h-screen w-full dark:bg-black bg-white overflow-hidden flex flex-col">
      <Header />
      {/* Dashed Grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 1px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
          WebkitMaskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      <div className="flex flex-col items-center justify-center flex-1 z-10 relative px-12 max-w-[900px] mx-auto">
        <h1 className="text-[72px] font-semibold text-center text-black dark:text-white leading-[0.95] tracking-tighter" >
          Animated Components for Modern Web.
        </h1>
        <p className="text-xl text-center text-black dark:text-white mt-[30px] max-w-[600px]">
          Transform your UI with production-ready animated components. Free and open source.
        </p>
        <div className="mt-5">
          <SlideUpButton
            text="Explore Components"
            darkBackgroundColor="bg-white"
            lightBackgroundColor="bg-black"
            onClick={() => router.push("/components")}
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 w-full px-12 pb-12">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm">
            <div className="mb-3 p-3 rounded-full bg-black dark:bg-white">
              <IconRocket className="size-6 text-white dark:text-black" />
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
              Production Ready
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Battle-tested components ready to use in your projects. No configuration needed.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm">
            <div className="mb-3 p-3 rounded-full bg-black dark:bg-white">
              <IconCode className="size-6 text-white dark:text-black" />
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
              Free & Open Source
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Completely free to use. Open source and available for everyone to contribute.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm">
            <div className="mb-3 p-3 rounded-full bg-black dark:bg-white">
              <IconSparkles className="size-6 text-white dark:text-black" />
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
              Modern Animations
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Beautiful, smooth animations that enhance user experience and engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
