"use client";

import { useState, useRef, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

export default function CodeBlock({
  code,
  language = "tsx",
  filename,
  className,
}: CodeBlockProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHeightExceeded, setIsHeightExceeded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const savedScrollY = useRef<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.scrollHeight;
      if (height > 600) {
        setIsHeightExceeded(true);
      }
    }
  }, [code]);

  const displayHeight =
    isHeightExceeded && !isExpanded ? "max-h-[500px]" : "max-h-[10000px]";

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex flex-col w-full bg-[#0d0d0d] rounded-[16px] border border-white/15 overflow-hidden shadow-2xl transition-all duration-300",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/15 bg-white/[0.03] backdrop-blur-md">
        <div className="flex items-center">
          {filename && (
            <span className="text-[14px] text-neutral-400 font-mono tracking-tight select-none">
              {filename}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/15 text-white font-bold uppercase tracking-widest select-none border border-white/15">
            {language}
          </span>
          <div className="h-4 w-[1px] bg-white/10" />
          <CopyButton text={code} />
        </div>
      </div>

      {/* Code Content Area */}
      <div
        className={cn(
          "relative group flex-1 transition-all duration-700 ease-in-out",
          displayHeight,
          !isExpanded && isHeightExceeded ? "overflow-hidden" : "overflow-auto"
        )}
      >
        <div ref={contentRef} className="relative">
          <SyntaxHighlighter
            language={language}
            style={oneDark}
            showLineNumbers={false}
            wrapLongLines={false}
            customStyle={{
              margin: 0,
              padding: "1.5rem 1rem",
              fontSize: "14px",
              lineHeight: "1.7",
              background: "transparent",
              width: "100%",
              maxWidth: "100%",
            }}
            codeTagProps={{
              style: {
                fontFamily:
                  'var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
              },
            }}
          >
            {code}
          </SyntaxHighlighter>

          {/* Button for Expanded state (at the end of code) */}
          {isHeightExceeded && isExpanded && (
            <div className="flex justify-center pb-8 pt-2">
              <button
                onClick={() => {
                  setIsExpanded(false);
                  setTimeout(() => {
                    window.scrollTo({
                      top: savedScrollY.current,
                      behavior: "smooth",
                    });
                  }, 50);
                }}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/10 backdrop-blur-xl text-[14px] text-white/80 font-medium transition-all hover:text-white cursor-pointer shadow-xl"
              >
                Collapse code
              </button>
            </div>
          )}
        </div>

        {/* Sticky Gradient Overlay and Expand Button for Collapsed state */}
        {isHeightExceeded && !isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/90 to-transparent flex items-end justify-center pointer-events-none">
            <button
              onClick={() => {
                savedScrollY.current = window.scrollY;
                setIsExpanded(true);
              }}
              className="mb-6 flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/10 backdrop-blur-xl text-[14px] text-white/80 font-medium transition-all hover:text-white pointer-events-auto shadow-xl cursor-pointer"
            >
              Expand code
            </button>
          </div>
        )}

        {/* Minimal fade for short blocks that might still have horizontal scroll */}
        {!isHeightExceeded && (
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-[#0d0d0d]/50 to-transparent pointer-events-none" />
        )}
      </div>
    </div>
  );
}
