"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  content: string;
  location: string;
  closeNavbar: () => void
};

export default function NavbarItemMobile({ content, location, closeNavbar }: Props) {
  const pathname = usePathname();

  return (
    <Link
    onClick={closeNavbar}
      className={
        pathname == location
          ? "flex h-8 w-20 items-center justify-center rounded-lg bg-neutral text-lg font-semibold text-primary"
          : "flex h-8 w-20 items-center justify-center rounded-lg text-lg font-semibold"
      }
      href={location}
    >
      {content}
    </Link>
  );
}
