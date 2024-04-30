import Link from "next/link";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-secondary py-8 text-primary">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex justify-center gap-5">
          <Link href="/home">Home</Link>
          <Link href="/beats">Beats</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex justify-center">
          <Link href="https://twitter.com" target="_blank">
            <FaTwitter />
          </Link>
        </div>
        <div>
          <p className="text-xs">© {year} Shayan Abedi, All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
