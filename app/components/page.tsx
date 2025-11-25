"use client";

import { componentCards } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const Components = () => {
  return (
    <div className="flex flex-col w-full pb-12 ">
      {/* Component Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {componentCards.map((component) => (
          <motion.div
            key={component.link}
            whileHover={{ y: -4 }}
          >
            <Link href={component.link}>
              <motion.div
                className={cn(
                  "group relative h-full rounded-[16px] border border-gray-200 dark:border-neutral-800 p-2",
                  "bg-white dark:bg-black",
                  "overflow-hidden cursor-pointer",
                  "transition-all duration-300",
                  " hover:border-gray-300 dark:hover:border-neutral-700"
                )}


              >
                {/* Image Container */}
                <div className={cn("relative w-full h-[300px] rounded-[12px] bg-gray-100 dark:bg-black  overflow-hidden border-gray-200 dark:border-neutral-800", component.bgColor)}>
                  {component.imagePath ? (
                    <Image
                      src={component.imagePath}
                      alt={component.title}
                      fill
                      className="object-contain transition-transform duration-300 "
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center text-gray-400 dark:text-gray-600">
                        <svg
                          className="w-16 h-16 mx-auto mb-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="text-sm">Image coming soon</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="py-4 px-3">
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {component.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {component.description}
                  </p>
                </div>


              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Components;
