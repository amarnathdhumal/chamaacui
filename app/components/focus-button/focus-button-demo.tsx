"use client";

import FocusButton from "./focus-button";

const FocusButtonDemo = () => {
    return (
        <div className="flex items-center justify-center min-h-[200px] bg-white dark:bg-black p-10">
            <FocusButton onClick={() => console.log("Clicked!")}>
                Contact us
            </FocusButton>
        </div>
    );
};

export default FocusButtonDemo;
