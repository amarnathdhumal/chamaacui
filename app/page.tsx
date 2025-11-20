"use client";

import { Header } from "./components/header";
import SlideUpButton from "./components/slideup-button/slide-up-button";
import { useRouter } from "next/navigation";
import HeroGrid from "@/components/ui/hero-grid";

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
        <HeroGrid />
      </div>
    </div>
  );
}
