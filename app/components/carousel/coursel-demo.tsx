"use client";

import Coursel from "./coursel";

export default function CourselDemo() {
    const images = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg", "/images/5.jpg"];

    return (
        <div className="w-full  flex justify-center items-center">
            <Coursel images={images} />
        </div>
    );
}
