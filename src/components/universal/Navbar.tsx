"use client";

import NavbarItemDesktop from "./NavbarItemDesktop";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-24 py-2">
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
      <div className="flex gap-8">
        <NavbarItemDesktop content="Home" location="/" />
        <NavbarItemDesktop content="Beats" location="/beats" />
        <NavbarItemDesktop content="Contact" location="/contact" />
      </div>
    </nav>
  );
}
