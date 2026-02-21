import type { Metadata } from "next";
import AIInputDemo from "@/app/components/inputs/ai-input/ai-input-demo";

export const metadata: Metadata = {
  title: "AI Input | Chamaac UI",
  description: "Preview of the animated AI Input component for Chamaac UI.",
};

export default function AIInputPreviewPage() {
  return <AIInputDemo />;
}
