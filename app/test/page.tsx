"use client";

import Dock, { DockIcon, DockItem, DockLink, DockDropdownItem } from "../components/dock/dock";


export default function DockDemo() {
    return (
        <Dock>
            <DockIcon
                icon={
                    <svg
                        className="text-black dark:text-white"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.25 8.00001H6.75V19.5H17.25V8.00001H18.75V18.75C18.75 19.9926 17.7426 21 16.5 21H7.5C6.25736 21 5.25 19.9926 5.25 18.75L5.25 8.00001Z" fill="currentColor"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.7166 3.72814C11.4883 3.19225 12.5117 3.19225 13.2834 3.72814L22.0438 9.81177L21.1882 11.0438L12 4.66312L2.81177 11.0438L1.95618 9.81177L10.7166 3.72814Z" fill="currentColor"></path>
                    </svg>
                }
                href="/"
            />
            <DockItem label="Personal">
                <DockDropdownItem label="Jeton Card" href="/jeton-card" image="/personal/1.jpg" />
                <DockDropdownItem label="Fees" href="/fees" image="/personal/2.jpg" />
            </DockItem>
            <DockLink
                label="Business"
                href="/business"
                icon={
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className="text-black dark:text-white"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.166 9.88297V10.55H11.5V9.88297V5.16701C11.5 4.79862 11.2014 4.49999 10.833 4.49999H6.11703H5.45002V5.83402H6.11703H9.22266L4.97165 10.085L4.5 10.5567L5.4433 11.5L5.91496 11.0283L10.166 6.77731V9.88297Z" fill="currentColor"></path>
                    </svg>
                }
            />
            <DockItem label="Company">
                <DockDropdownItem label="About" href="/about" image="/company/1.jpg" />
                <DockDropdownItem label="Newsroom" href="/newsroom" image="/company/2.jpg" />
                <DockDropdownItem label="Partnerships" href="/partnerships" image="/company/3.jpg" />
                <DockDropdownItem label="Media Assets" href="/media-assets" image="/company/4.jpg" />
                <DockDropdownItem label="Release Notes" href="/release-notes" image="/company/5.jpg" />
            </DockItem>
        </Dock>
    );
}
