"use client";

import NavbarItemDesktop from "./NavbarItemDesktop";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarItemMobile from "./NavbarItemobile";

export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    const handleShowMobileNav = () => {
      if (window.innerWidth >= 1024) {
        setShowMobileNav(false);
      }
    };

    window.addEventListener("resize", handleShowMobileNav);
  });

  const closeNavbar = () => {
    setTimeout(() => setShowMobileNav(false), 1000);
  };

  return (
    <nav className="absolute z-50 flex w-full flex-col bg-neutral-200">
      <div className="flex items-center justify-between px-4 py-2 lg:px-24">
        <div>
          <Link href="/">
            <Image
              priority
              src={logo}
              alt="Text that says Beat Zilla, with a silhouette of Godzilla behind it."
              className="w-32"
            />
          </Link>
        </div>
        <div className="hidden gap-8 lg:flex">
          <NavbarItemDesktop content="Home" location="/" />
          <NavbarItemDesktop content="Beats" location="/beats" />
          <NavbarItemDesktop content="Contact" location="/contact" />
        </div>
        <div className="lg:hidden">
          <div
            className="text-3xl"
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            {showMobileNav ? <IoCloseOutline /> : <RxHamburgerMenu />}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showMobileNav && (
          <motion.div
            className="flex items-center justify-center"
            initial={{ height: 0 }}
            animate={{ height: 80 }}
            exit={{ height: 0 }}
          >
            <motion.div
              className="flex gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <NavbarItemMobile
                closeNavbar={closeNavbar}
                content="Home"
                location="/"
              />
              <NavbarItemMobile
                closeNavbar={closeNavbar}
                content="Beats"
                location="/beats"
              />
              <NavbarItemMobile
                closeNavbar={closeNavbar}
                content="Contact"
                location="/contact"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
