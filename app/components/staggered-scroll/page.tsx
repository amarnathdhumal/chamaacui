"use client"

// import fs from "fs"
// import path from "path"
import ViewArea from "@/components/ui/view-area";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
// import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
// import CopyButton from "@/components/ui/copy-button"
import { useRef } from "react"
import StaggeredScroll from "@/components/ui/staggered-scroll";

// file path
// const filePath = path.join(process.cwd(), "components/ui/staggered-scroll.tsx")
// const StaggeredScrollSource = fs.readFileSync(filePath, "utf-8")


const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/1.jpg",
    "/images/2.jpg"
]


export default function StaggeredScrollPage() {
    const containerRef = useRef<HTMLDivElement | null>(null)


    return (
        <ViewArea
            title="Staggered Scroll"
            description="3D scroll-driven grid with staggered card animations"
            preview={<StaggeredScroll container={containerRef} images={images} />}
            scrollContainerRef={containerRef}
            className="h-[1200px] overflow-auto "
            code={
                <div className="relative">
                    <div className="absolute top-4 right-4">
                        {/* <CopyButton text={StaggeredScrollSource} /> */}
                    </div>
                    {/* <SyntaxHighlighter
                        language="tsx"
                        style={oneDark}
                        wrapLongLines={true}
                        customStyle={{
                            margin: 0,
                            padding: "1rem",
                            fontSize: "14px",
                            lineHeight: "1.5",
                            width: "100%",
                            maxWidth: "100%",
                            boxSizing: "border-box",
                            overflow: "auto",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {StaggeredScrollSource}
                    </SyntaxHighlighter> */}
                </div>
            }
        />
    )
}