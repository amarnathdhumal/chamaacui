"use client";

import { m, LazyMotion, domAnimation } from "motion/react";

import { cn } from "@/lib/utils";

interface Item {
  name: string;
  description: string;
  price: number;
}

interface InvoiceCardProps {
  title?: string;
  total: number;
  originalAmount?: number;
  items: Item[];
  taxRate?: number;
  taxLabel?: string;
  delay?: number;
  className?: string;
}

const InvoiceCard = ({
  title = "Invoice",
  total,
  originalAmount,
  items,
  taxRate = 0,
  taxLabel = "Tax",
  delay = 0.1,
  className,
}: InvoiceCardProps) => {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * (taxRate / 100);
  return (
    <LazyMotion features={domAnimation}>
      <div
        className={cn(
          "h-[500px] flex justify-center items-center w-full",
          className
        )}
      >
        <m.div className="border border-[#E8E8E8] dark:border-neutral-700 px-5 py-6 rounded-[20px] bg-[#fafafa] dark:bg-neutral-800 h-auto flex flex-col min-w-[350px]  overflow-hidden">
          <m.p
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0,
              duration: 0.3,
            }}
            className="font-medium text-[16px] leading-[15px] text-neutral-600 dark:text-neutral-400 tracking-tight"
          >
            {title}
          </m.p>
          <div className="flex flex-row items-center gap-2 pt-8 tracking-tighter">
            <m.h1
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0,
                duration: 0.3,
              }}
              className="font-medium text-[28px] leading-[15px] tracking-[0em] text-black dark:text-white "
            >
              ${total.toLocaleString()}
            </m.h1>
            {originalAmount && (
              <m.p
                initial={{ x: -150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: delay,
                  duration: 0.3,
                }}
                className="text-[18px] leading-[15px]  text-neutral-600 dark:text-neutral-400 line-through"
              >
                ${originalAmount.toLocaleString()}
              </m.p>
            )}
          </div>

          {/* Invoice Details */}
          <div className="mt-8 space-y-4">
            {/* Items */}
            <div className="space-y-3">
              {items.map((item, index) => (
                <m.div
                  key={item.name}
                  initial={{ x: -150, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: index * delay,
                    duration: 0.3,
                  }}
                  className="flex justify-between items-start"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium text-black dark:text-white mb-1">
                      {item.name}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-black dark:text-white">
                    ${item.price.toLocaleString()}
                  </p>
                </m.div>
              ))}
            </div>

            {/* Divider */}
            <m.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                delay: items.length * delay,
                duration: 0.3,
              }}
              className="border-t border-neutral-200 dark:border-neutral-700 my-4"
            ></m.div>

            {/* Summary */}
            <div className="space-y-2">
              <m.div
                initial={{ x: -150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: items.length * delay,
                  duration: 0.3,
                }}
                className="flex justify-between items-center"
              >
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Subtotal
                </p>
                <p className="text-sm font-medium text-black dark:text-white">
                  ${subtotal.toLocaleString()}
                </p>
              </m.div>
              {taxRate > 0 && (
                <m.div
                  initial={{ x: -150, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: (items.length + 1) * delay,
                    duration: 0.3,
                  }}
                  className="flex justify-between items-center"
                >
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {taxLabel} ({taxRate}%)
                  </p>
                  <p className="text-sm font-medium text-black dark:text-white">
                    ${tax.toLocaleString()}
                  </p>
                </m.div>
              )}
              <m.div
                initial={{ x: -150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: (items.length + (taxRate > 0 ? 2 : 1)) * delay,
                  duration: 0.3,
                }}
                className="flex justify-between items-center pt-2 border-t border-neutral-200 dark:border-neutral-700"
              >
                <p className="text-base font-semibold text-black dark:text-white">
                  Total
                </p>
                <p className="text-base font-semibold text-black dark:text-white">
                  ${total.toLocaleString()}
                </p>
              </m.div>
            </div>
          </div>
        </m.div>
      </div>
    </LazyMotion>
  );
};

export default InvoiceCard;
