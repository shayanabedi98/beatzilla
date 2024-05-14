import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer({ padding } : {padding: string}) {
  const year = new Date().getFullYear();

  return (
    <footer className={`relative bg-secondary text-primary ${padding}`}>
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex justify-center gap-5">
          <Link href="/">Home</Link>
          <Link href="/beats">Beats</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex justify-center gap-4">
          <Link className="" href="https://twitter.com" target="_blank">
            <FaTwitter />
          </Link>
          <Link className="" href="https://facebook.com" target="_blank">
            <FaFacebook />
          </Link>
        </div>
        <div>
          <p className="text-xs">© {year} Shayan Abedi, All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
