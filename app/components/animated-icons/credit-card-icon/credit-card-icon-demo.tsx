"use client";

import CreditCardIcon from "@/registry/chamaac/animated-icons/credit-card-icon";

export default function CreditCardIconDemo() {
    return (
        <CreditCardIcon
            className="text-black dark:text-white"
            size={40}
            duration={1.5}
            strokeWidth={2}
            repeatDelay={1}
            ease="easeInOut"
        />
    );
}
