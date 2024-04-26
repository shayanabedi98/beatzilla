import Image from "next/image";
import banner from "@/assets/home/banner.webp";
import Link from "next/link";

export default function Banner() {
  return (
    <header className="relative flex flex-col items-center justify-center">
      <Image
        className="h-[900px] w-full object-cover"
        priority
        src={banner}
        alt=""
      />
      <div className="absolute flex flex-col items-center gap-32">
        <h1 className="text-6xl font-bold text-primary">
          Discover Raw Instrumentals
        </h1>
        <Link href="/beats">
          <button className="call-to-action">
            Listen
          </button>
        </Link>
      </div>
    </header>
  );
}
