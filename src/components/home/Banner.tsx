import Image from "next/image";
import banner from "@/assets/home/banner.jpg";

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
        <button className="h-14 w-44 rounded-lg bg-primary text-xl font-bold text-secondary transition duration-100 hover:bg-secondary hover:text-primary">
          Listen
        </button>
      </div>
    </header>
  );
}
