"use client"

import { motion } from "motion/react";
import DottedBackground from "@/components/ui/dotted-bg";

const InvoiceCard = () => {
    return (
        <div className="bg-white h-screen flex justify-center items-center w-full">
            <DottedBackground className="w-[350px] h-auto border border-[#E8E8E8] p-[5px] rounded-[25px] ">
                <motion.div
                    initial={{ y: 400 }}
                    animate={{ y: 0 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeIn",
                    }}
                    className="border border-[#E8E8E8] px-5 py-6 rounded-[20px] bg-[#fafafa] h-auto flex flex-col ">

                    <p className="font-medium text-[16px] leading-[15px] text-neutral-600 font-mono tracking-tight">
                        Invoice
                    </p>
                    <div className="flex flex-row items-center gap-2 pt-8 font-mono tracking-tighter">
                        <h1 className="font-medium text-[32px] leading-[15px] tracking-[0em] text-black ">
                            $1000
                        </h1>
                        <p className="text-[20px] leading-[15px]  text-neutral-600 line-through">$5000</p>
                    </div>

                    {/* Invoice Details */}
                    <div className="mt-8 space-y-4 overflow-hidden">
                        {/* Line Items */}
                        <div className="space-y-3">
                            <motion.div className="flex justify-between items-center">
                                <motion.div className="flex-1">
                                    <motion.div
                                        initial={{ x: -150, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{
                                            delay: 0.6,
                                            duration: 0.3
                                        }}
                                        className="h-3 bg-neutral-300 rounded-full w-3/4 mb-1"></motion.div>
                                    <motion.div
                                        initial={{ x: -150, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{
                                            delay: 0.6,
                                            duration: 0.3
                                        }}
                                        className="h-2 bg-neutral-200 rounded-full w-1/2"></motion.div>
                                </motion.div>
                                <motion.div

                                    className="h-3 bg-neutral-300 rounded-full w-12"></motion.div>
                            </motion.div>
                            <motion.div className="flex justify-between items-center">
                                <motion.div className="flex-1">
                                    <motion.div
                                        initial={{ x: -150, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{
                                            delay: 0.7,
                                            duration: 0.3
                                        }}
                                        className="h-3 bg-neutral-300 rounded-full w-4/5 mb-1"></motion.div>
                                    <motion.div
                                        initial={{ x: -150, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{
                                            delay: 0.7,
                                            duration: 0.3
                                        }}
                                        className="h-2 bg-neutral-200 rounded-full w-2/3"></motion.div>
                                </motion.div>
                                <motion.div className="h-3 bg-neutral-300 rounded-full w-12"></motion.div>
                            </motion.div>
                            <motion.div className="flex justify-between items-center">
                                <motion.div className="flex-1">
                                    <motion.div
                                        initial={{ x: -150, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{
                                            delay: 0.8,
                                            duration: 0.3
                                        }}
                                        className="h-3 bg-neutral-300 rounded-full w-2/3 mb-1"></motion.div>
                                    <motion.div
                                        initial={{ x: -150, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{
                                            delay: 0.8,
                                            duration: 0.3
                                        }}
                                        className="h-2 bg-neutral-200 rounded-full w-1/2"></motion.div>
                                </motion.div>
                                <motion.div className="h-3 bg-neutral-300 rounded-full w-12"></motion.div>
                            </motion.div>



                        </div>

                        {/* Divider */}
                        <div className="border-t border-neutral-200 my-4"></div>

                        {/* Summary */}
                        <div className="space-y-2">
                            <motion.div className="flex justify-between items-center">
                                <motion.div
                                    initial={{ x: -150, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.9,
                                        duration: 0.3
                                    }}
                                    className="h-2 bg-neutral-200 rounded-full w-16"></motion.div>
                                <div className="h-2 bg-neutral-300 rounded-full w-12"></div>
                            </motion.div>
                            <motion.div className="flex justify-between items-center">
                                <motion.div
                                    initial={{ x: -150, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 1.0,
                                        duration: 0.3
                                    }}
                                    className="h-2 bg-neutral-200 rounded-full w-12"></motion.div>
                                <div className="h-2 bg-neutral-300 rounded-full w-10"></div>
                            </motion.div>
                            <motion.div className="flex justify-between items-center pt-2">
                                <motion.div
                                    initial={{ x: -150, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 1.1,
                                        duration: 0.3
                                    }}
                                    className="h-3 bg-neutral-400 rounded-full w-20"></motion.div>
                                <div className="h-3 bg-neutral-500 rounded-full w-16"></div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
                {/* <p className="text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                </p> */}
            </DottedBackground>

        </div >
    )
}

export default InvoiceCard;