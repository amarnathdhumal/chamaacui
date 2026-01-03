import { constructMetadata } from "@/lib/utils";
import { AIInput } from "@/registry/chamaac/ai-input/ai-input";

export const metadata = constructMetadata({
    title: "AI Input",
    description: "A polished AI input component with inspiration and model selection.",
})

export default function AIInputPage() {
    return (
        <div className="min-h-screen ">
            <AIInput />
        </div>
    )
}
