"use client"

import { sidebarData } from "@/lib/data"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const Sidebar = () => {
    const pathname = usePathname()

    return (
        <div className="min-w-40 h-full flex flex-col sticky top-28">
            <ul className="flex flex-col gap-2">
                {sidebarData.map((item) => {
                    const isActive = `/components${item.link}` === pathname
                    return (
                        <>
                            <li >
                                <Link
                                    href={`/components/${item.link}`}
                                    className={cn(" cursor-pointer ",
                                        `${isActive ? "text-black dark:text-white font-medium text-base" : "text-neutral-800 dark:text-gray-400 font-normal text-sm"}`)}>
                                    {item.componentName}
                                </Link>
                            </li>
                        </>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar