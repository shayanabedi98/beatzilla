"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  content: string;
  location: string;
};

export default function NavbarItemDesktop({ content, location }: Props) {
  const pathname = usePathname();

  return (
    <Link
      className={
        pathname == location
          ? "flex h-9 w-24 items-center justify-center rounded-lg bg-neutral text-xl font-semibold text-primary"
          : "flex h-9 w-24 items-center justify-center rounded-lg text-xl font-semibold"
      }
      href={location}
    >
      {content}
    </Link>
  );
}
