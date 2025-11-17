import ViewArea from "@/components/ui/view-area";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";
import fs from "fs";
import path from "path";
import StackScrollDemo from "./stack-scroll-demo";

const filePath = path.join(
  process.cwd(),
  "app/components/stack-scroll/stack-scroll.tsx"
);
const StackScrollSource = fs.readFileSync(filePath, "utf-8");

const StackScrollPage = () => {
  return (
    <ViewArea
      title="Stack Scroll"
      description="Interactive stacked card layout with smooth scroll animations. Cards scale and stack on top of each other, creating an engaging visual effect as users scroll through content."
      preview={<StackScrollDemo />}
      code={
        <div className="relative">
          <div className="absolute top-4 right-4">
            <CopyButton text={StackScrollSource} />
          </div>
          <SyntaxHighlighter
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
            {StackScrollSource}
          </SyntaxHighlighter>
        </div>
      }
    />
  );
};

export default StackScrollPage;
