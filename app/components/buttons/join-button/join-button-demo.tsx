import React from "react";
import JoinButton from "./join-button";

const JoinButtonDemo = () => {
    return (
        <div className="flex flex-col items-center justify-center rounded-xl gap-8 ">
            <div className="flex flex-wrap gap-8 justify-center">
                <div className="flex flex-col items-center gap-2">
                    <JoinButton />
                </div>
            </div>
        </div>
    );
};

export default JoinButtonDemo;
