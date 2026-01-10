"use client";

import CartIcon from "@/registry/chamaac/animated-icons/cart-icon";

export default function CartIconDemo() {
    return (
        <CartIcon
            className="text-black dark:text-white"
            size={40}
            duration={1.5}
            strokeWidth={2}
            repeatDelay={1}
            ease="easeInOut"
        />
    );
}
