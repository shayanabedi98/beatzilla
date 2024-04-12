import Banner from "@/components/home/Banner";
import FeaturedBeats from "@/components/home/FeaturedBeats";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <Banner />
      <FeaturedBeats />
    </main>
  );
}
