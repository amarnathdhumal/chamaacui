"use client";

import { cn } from "@/lib/utils";
import React from "react";

export type ControlType = "color" | "number" | "select" | "boolean" | "text";

export interface ControlItem {
  id: string;
  label: string;
  type: ControlType;
  value: string | number | boolean;
  onChange: (value: string | number | boolean) => void;
  min?: number;
  max?: number;
  step?: number;
  options?: { label: string; value: string }[];
}

interface ShaderControlsProps {
  controls: ControlItem[];
  className?: string;
}

export function ShaderControls({ controls, className }: ShaderControlsProps) {
  return (
    <div className="mb-5 md:mb-15">
      <h2 className="text-2xl/7 md:text-3xl/7 tracking-tight text-black dark:text-white mb-4 font-semibold">
        Customize
      </h2>

      <div
        className={cn(
          "flex flex-col gap-5 p-8 border rounded-[16px]",
          className
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 max-w-[900px] ">
          {controls.map((control) => (
            <div key={control.id}>
              <div className="flex justify-between items-center">
                <label
                  htmlFor={control.id}
                  className="text-base/5 text-text-secondary tracking-tight leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {control.label}
                </label>
                {control.type === "number" && (
                  <span className="font-mono text-sm">
                    {Number(control.value)
                      .toFixed(3)
                      .replace(/\.?0+$/, "")}
                  </span>
                )}
              </div>

              {control.type === "color" && (
                <div className="flex gap-3 items-center mt-3">
                  <div className="relative w-10 h-10 rounded-[8px]  overflow-hidden border shadow-sm shrink-0">
                    <input
                      type="color"
                      id={control.id}
                      value={control.value as string}
                      onChange={(e) => control.onChange(e.target.value)}
                      className="absolute inset-0 w-[150%] h-[150%] -top-1/4 -left-1/4 p-0 m-0 cursor-pointer border-0"
                    />
                  </div>
                  <input
                    type="text"
                    value={control.value as string}
                    onChange={(e) => control.onChange(e.target.value)}
                    className="flex justify-between items-center gap-2 px-2 md:px-5 py-2 text-sm rounded-[8px] border border-border transition-colors bg-bg-secondary cursor-pointer text-text-secondary w-full size-10"
                    spellCheck={false}
                  />
                </div>
              )}

              {control.type === "number" &&
                (() => {
                  const min = control.min ?? 0;
                  const max = control.max ?? 100;
                  const percentage =
                    ((Number(control.value) - min) / (max - min)) * 100;

                  return (
                    <div className="relative flex items-center w-full mt-[24px]">
                      <input
                        type="range"
                        id={control.id}
                        min={min}
                        max={max}
                        step={control.step}
                        value={control.value as number}
                        onChange={(e) =>
                          control.onChange(parseFloat(e.target.value))
                        }
                        className="w-full h-2 rounded-full appearance-none cursor-pointer bg-secondary
                                            [&::-webkit-slider-thumb]:appearance-none 
                                            [&::-webkit-slider-thumb]:w-6 
                                            [&::-webkit-slider-thumb]:h-6 
                                            [&::-webkit-slider-thumb]:rounded-full 
                                            [&::-webkit-slider-thumb]:bg-white 
                                            dark:[&::-webkit-slider-thumb]:bg-black
                                            [&::-webkit-slider-thumb]:border-[3px] 
                                            [&::-webkit-slider-thumb]:border-primary
                                            [&::-webkit-slider-thumb]:shadow-md
                                            "
                        style={{
                          background: `linear-gradient(to right, var(--foreground) ${percentage}%, var(--secondary) ${percentage}%)`,
                        }}
                      />
                    </div>
                  );
                })()}

              {control.type === "boolean" && (
                <div className="flex items-center mt-3 h-11">
                  <button
                    type="button"
                    id={control.id}
                    onClick={() => control.onChange(!control.value)}
                    className={cn(
                      "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out outline-none",
                      control.value
                        ? "bg-black dark:bg-white"
                        : "bg-gray-200 dark:bg-neutral-800"
                    )}
                  >
                    <span
                      className={cn(
                        "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white dark:bg-black shadow ring-0 transition duration-200 ease-in-out",
                        control.value ? "translate-x-5" : "translate-x-0",
                        control.value && "dark:bg-black bg-white",
                        !control.value && "dark:bg-white bg-black"
                      )}
                    />
                  </button>
                </div>
              )}

              {control.type === "select" && (
                <div className="mt-3 h-11">
                  <select
                    id={control.id}
                    value={control.value as string}
                    onChange={(e) => control.onChange(e.target.value)}
                    className="w-full h-full px-4 rounded-[12px] border border-border bg-white dark:bg-black text-sm text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer"
                  >
                    {control.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {control.type === "text" && (
                <div className="mt-3 h-11">
                  <input
                    type="text"
                    id={control.id}
                    value={control.value as string}
                    onChange={(e) => control.onChange(e.target.value)}
                    className="w-full h-full px-4 rounded-[12px] border border-border bg-white dark:bg-black text-sm text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
