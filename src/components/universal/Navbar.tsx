"use-client";

import NavbarItemDesktop from "./NavbarItemDesktop";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-2">
      <div>
        <Image
          src={logo}
          alt="Text that says Beat Zilla, with a silhouette of Godzilla behind it."
          className="w-56"
        />
      </div>
      <div className="flex gap-4">
        <NavbarItemDesktop content="Home" location="/" />
        <NavbarItemDesktop content="Beats" location="/beats" />
        <NavbarItemDesktop content="Contact" location="/Contact" />
      </div>
    </header>
  );
}
