import RevealEmojiCard from "./reveal-card"
import fs from "fs"
import path from "path"
import ViewArea from "@/components/ui/view-area"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import CopyButton from "@/components/ui/copy-button"

// file path
const filePath = path.join(process.cwd(), "app/components/reveal-emoji/reveal-card.tsx")
const RevealCardSource = fs.readFileSync(filePath, "utf-8")

export default function RevealEmoji() {
  return (
    <ViewArea
      title="Reveal Emoji"
      description="On hover random emoji comes"
      preview={<RevealEmojiCard />}
      code={
        <div className="relative">
          <div className="absolute top-4 right-4">
            <CopyButton text={RevealCardSource} />
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
          {RevealCardSource}
        </SyntaxHighlighter>
        </div>

      }
    />
  )
}
