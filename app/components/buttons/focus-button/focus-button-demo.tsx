"use client";

import FocusButton from "./focus-button";

const FocusButtonDemo = () => {
  return (
    <div className="flex items-center justify-center h-[300px] bg-white dark:bg-black">
      <FocusButton onClick={() => console.log("Clicked!")}>
        Contact us
      </FocusButton>
    </div>
  );
};

export default FocusButtonDemo;
