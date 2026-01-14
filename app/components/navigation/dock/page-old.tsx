"use client";

import { easeIn, easeOut, motion } from "motion/react";
import Link from "next/link";

import { useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

const Dock = () => {
  const [isPersonalOpen, setIsPersonalOpen] = useState<boolean>(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState<boolean>(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const companyCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isCompanyHovered, setIsCompanyHovered] = useState<boolean>(false);

  const router = useRouter();
  const pathname = usePathname();

  const linkImages: Record<string, string> = {
    // Personal menu items
    "/jeton-card": "/personal/1.jpg",
    "/fees": "/personal/2.jpg",
    // Company menu items
    "/about": "/company/1.jpg",
    "/newsroom": "/company/2.jpg",
    "/partnerships": "/company/3.jpg",
    "/media-assets": "/company/4.jpg",
    "/release-notes": "/company/5.jpg",
  };

  const currentImage = hoveredLink
    ? linkImages[hoveredLink]
    : pathname && linkImages[pathname]
      ? linkImages[pathname]
      : null;

  const handleMouseEnter = (): void => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsPersonalOpen(true);
    setHoveredLink(pathname);
  };

  const handleMouseLeave = (): void => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsPersonalOpen(false);
      setHoveredLink(null);
    }, 100);
  };

  const handleCompanyMouseEnter = (): void => {
    if (companyCloseTimeoutRef.current) {
      clearTimeout(companyCloseTimeoutRef.current);
    }
    setIsCompanyOpen(true);
    setHoveredLink(pathname);
  };

  const handleCompanyMouseLeave = (): void => {
    companyCloseTimeoutRef.current = setTimeout(() => {
      setIsCompanyOpen(false);
      setHoveredLink(null);
    }, 100);
  };

  return (
    <div
      className="bg-white dark:bg-white min-h-screen w-full"
      style={{ backgroundColor: "white" }}
    >
      <motion.nav className="fixed bottom-[60px] left-0 w-full   z-50 hidden md:block  ">
        <div className="px-4  flex justify-center">
          <motion.div
            className="relative  p-[3px] flex flex-col items-center justify-center overflow-hidden backdrop-blur-md border border-[#E0E0E0]"
            initial={{ borderRadius: "25px" }}
            animate={{
              borderRadius: "25px",
            }}
            transition={{ duration: 0.2 }}
          >
            {/* Personal Dropdown Content */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isPersonalOpen ? 1 : 0,
                height: isPersonalOpen ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className={`w-full  overflow-hidden ${isPersonalOpen ? "pointer-events-auto min-h-[100px] " : "pointer-events-none"}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bg-white px-[15px] pt-[15px]  pb-[30px] flex justify-between items-start">
                <div className=" gap-[12.5px] flex flex-col">
                  <motion.a
                    whileHover={{
                      x: 5,
                    }}
                    transition={{ duration: 0.1 }}
                    onMouseEnter={() => setHoveredLink("/jeton-card")}
                    href="/jeton-card"
                    className={`block text-[14px] leading-[10px] transition-colors font-medium ${
                      hoveredLink === "/jeton-card"
                        ? "text-black"
                        : "text-[#C1C1C1] hover:text-black"
                    }`}
                  >
                    Jeton Card
                  </motion.a>

                  <motion.a
                    whileHover={{
                      x: 5,
                    }}
                    transition={{ duration: 0.1 }}
                    onMouseEnter={() => setHoveredLink("/fees")}
                    href="/fees"
                    className={`block text-[14px] leading-[10px] transition-colors ${
                      hoveredLink === "/fees"
                        ? "text-black"
                        : "text-[#C1C1C1] hover:text-black"
                    }`}
                  >
                    Fees
                  </motion.a>
                </div>

                {currentImage && (
                  <div>
                    <motion.img
                      key={currentImage}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: hoveredLink ? 1 : 0.8,
                        scale: hoveredLink ? 1 : 0.9,
                      }}
                      transition={{
                        ease: hoveredLink ? easeIn : easeOut,
                        duration: 0.2,
                      }}
                      src={currentImage}
                      className="rounded-[15px] w-[80px] h-[80px] object-cover"
                    />
                  </div>
                )}
              </div>
            </motion.div>

            {/* Company Dropdown Content - Above nav items */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isCompanyOpen ? 1 : 0,
                height: isCompanyOpen ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className={`w-full  overflow-hidden ${isCompanyOpen ? "pointer-events-auto min-h-[100px]" : "pointer-events-none"}`}
              onMouseEnter={handleCompanyMouseEnter}
              onMouseLeave={handleCompanyMouseLeave}
            >
              <div className="bg-white px-[15px] pt-[15px] pb-[30px] flex justify-between items-start">
                <div className=" gap-[12.5px] flex flex-col">
                  <motion.a
                    whileHover={{
                      x: 5,
                    }}
                    transition={{ duration: 0.1 }}
                    onMouseEnter={() => setHoveredLink("/about")}
                    href="/about"
                    className={`block text-[14px] leading-[10px] transition-colors font-medium ${
                      hoveredLink === "/about"
                        ? "text-black"
                        : "text-[#C1C1C1] hover:text-black"
                    }`}
                  >
                    About
                  </motion.a>

                  <motion.a
                    whileHover={{
                      x: 5,
                    }}
                    transition={{ duration: 0.1 }}
                    onMouseEnter={() => setHoveredLink("/newsroom")}
                    href="/newsroom"
                    className={`block text-[14px] leading-[10px] transition-colors ${
                      hoveredLink === "/newsroom"
                        ? "text-black"
                        : "text-[#C1C1C1] hover:text-black"
                    }`}
                  >
                    Newsroom
                  </motion.a>

                  <motion.a
                    whileHover={{
                      x: 5,
                    }}
                    transition={{ duration: 0.1 }}
                    onMouseEnter={() => setHoveredLink("/partnerships")}
                    href="/partnerships"
                    className={`block text-[14px] leading-[10px] transition-colors ${
                      hoveredLink === "/partnerships"
                        ? "text-black"
                        : "text-[#C1C1C1] hover:text-black"
                    }`}
                  >
                    Partnerships
                  </motion.a>

                  <motion.a
                    whileHover={{
                      x: 5,
                    }}
                    transition={{ duration: 0.1 }}
                    onMouseEnter={() => setHoveredLink("/media-assets")}
                    href="/media-assets"
                    className={`block text-[14px] leading-[10px] transition-colors ${
                      hoveredLink === "/media-assets"
                        ? "text-black"
                        : "text-[#C1C1C1] hover:text-black"
                    }`}
                  >
                    Media Assets
                  </motion.a>

                  <motion.a
                    whileHover={{
                      x: 5,
                    }}
                    transition={{ duration: 0.1 }}
                    onMouseEnter={() => setHoveredLink("/release-notes")}
                    href="/release-notes"
                    className={`block text-[14px] leading-[10px] transition-colors ${
                      hoveredLink === "/release-notes"
                        ? "text-black"
                        : "text-[#C1C1C1] hover:text-black"
                    }`}
                  >
                    Release Notes
                  </motion.a>
                </div>

                {currentImage && (
                  <div>
                    <motion.img
                      key={currentImage}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: hoveredLink ? 1 : 0.8,
                        scale: hoveredLink ? 1 : 0.9,
                      }}
                      transition={{
                        ease: hoveredLink ? easeIn : easeOut,
                        duration: 0.2,
                      }}
                      src={currentImage}
                      className="rounded-[15px] w-[80px] h-[80px] object-cover"
                    />
                  </div>
                )}
              </div>
            </motion.div>

            {/* Desktop Navigation - White pill with items */}
            <div className="flex items-center gap-[3px] relative z-10">
              {/* Home Icon Button */}
              <motion.button
                onClick={() => router.push("/")}
                className="flex items-center justify-center w-[56px] h-[42px] rounded-full bg-[#F0F0F0]  transition-colors cursor-pointer "
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.25 8.00001H6.75V19.5H17.25V8.00001H18.75V18.75C18.75 19.9926 17.7426 21 16.5 21H7.5C6.25736 21 5.25 19.9926 5.25 18.75L5.25 8.00001Z"
                    fill="#000000"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.7166 3.72814C11.4883 3.19225 12.5117 3.19225 13.2834 3.72814L22.0438 9.81177L21.1882 11.0438L12 4.66312L2.81177 11.0438L1.95618 9.81177L10.7166 3.72814Z"
                    fill="#000000"
                  ></path>
                </svg>
              </motion.button>

              {/* Personal Link */}
              <motion.div
                className={`text-black transition-colors duration-200 text-[14px] leading-[10px] flex items-center gap-1  h-[42px] rounded-full cursor-pointer  px-[18px] `}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                animate={{
                  backgroundColor:
                    isPersonalOpen ||
                    pathname === "/finvastra-advisors" ||
                    pathname === "/finvastra-wealth" ||
                    pathname === "/finvastra-insurance-marketing"
                      ? "#F0F0F0"
                      : "transparent",
                }}
                whileHover={{ backgroundColor: "#F0F0F0" }}
                transition={{ duration: 0.2 }}
              >
                Personal
                <motion.svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{
                    rotate: isPersonalOpen ? 180 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 8.93934L4.53033 5.46967L3.46967 6.53033L6.58578 9.64645C7.36683 10.4275 8.63316 10.4275 9.41421 9.64645L12.5303 6.53033L11.4697 5.46967L8 8.93934Z"
                    data-mode="fill"
                  ></path>
                </motion.svg>
              </motion.div>

              {/* Company Link with External Icon */}
              <Link
                href="/company"
                className={`text-black transition-colors duration-200 text-[14px] leading-[10px] flex items-center gap-1  h-[42px] rounded-full hover:bg-[#F0F0F0] px-[18px] ${
                  pathname === "/company" ? "bg-[#F0F0F0]" : ""
                }`}
                onMouseEnter={() => setIsCompanyHovered(true)}
                onMouseLeave={() => setIsCompanyHovered(false)}
              >
                Business
                <motion.svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ x: 0, y: 0 }}
                  animate={{
                    x: isCompanyHovered ? 2 : 0,
                    y: isCompanyHovered ? -2 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.166 9.88297V10.55H11.5V9.88297V5.16701C11.5 4.79862 11.2014 4.49999 10.833 4.49999H6.11703H5.45002V5.83402H6.11703H9.22266L4.97165 10.085L4.5 10.5567L5.4433 11.5L5.91496 11.0283L10.166 6.77731V9.88297Z"
                    data-mode="fill"
                  ></path>
                </motion.svg>
              </Link>

              <motion.div
                className={`text-black transition-colors duration-200 text-[14px] leading-[10px] flex items-center gap-1  h-[42px] rounded-full cursor-pointer  px-[18px] `}
                onMouseEnter={handleCompanyMouseEnter}
                onMouseLeave={handleCompanyMouseLeave}
                animate={{
                  backgroundColor:
                    isCompanyOpen ||
                    pathname === "/about" ||
                    pathname === "/newsroom" ||
                    pathname === "/partnerships" ||
                    pathname === "/media-assets" ||
                    pathname === "/release-notes"
                      ? "#F0F0F0"
                      : "transparent",
                }}
                whileHover={{ backgroundColor: "#F0F0F0" }}
                transition={{ duration: 0.2 }}
              >
                Company
                <motion.svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{
                    rotate: isCompanyOpen ? 180 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 8.93934L4.53033 5.46967L3.46967 6.53033L6.58578 9.64645C7.36683 10.4275 8.63316 10.4275 9.41421 9.64645L12.5303 6.53033L11.4697 5.46967L8 8.93934Z"
                    data-mode="fill"
                  ></path>
                </motion.svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Dock;
