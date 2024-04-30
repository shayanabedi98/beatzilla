import AboutBeatZilla from "@/components/home/AboutBeatZilla";
import Banner from "@/components/home/Banner";
import FeaturedBeats from "@/components/home/FeaturedBeats";

export default function Home() {
  return (
    <main className="relative">
      <Banner />
      <FeaturedBeats />
      <AboutBeatZilla />
    </main>
  );
}
