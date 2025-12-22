"use client";

import DancingLetters from "../components/dancing-letters/dancing-letters";

export default function DancingLettersDemo() {
    return (
        <div className="flex flex-col items-center justify-center gap-8 h-screen">
            <DancingLetters
                text="ANIMATE"
            />
        </div>
    );
}
