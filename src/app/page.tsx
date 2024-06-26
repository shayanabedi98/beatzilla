import AboutBeatZilla from "@/components/home/AboutBeatZilla";
import Banner from "@/components/universal/Banner";
import FeaturedBeats from "@/components/home/FeaturedBeats";
import banner from "@/assets/home/banner.webp";
import Footer from "@/components/universal/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Banner
        buttonContent="Listen"
        buttonPath="/beats"
        heading="Discover Raw Instrumentals"
        bannerImage={banner}
        buttonPresent={true}
        uniqueClassName="home-banner"
      />
      <FeaturedBeats />
      <AboutBeatZilla />
      <Footer padding="py-10" />
    </main>
  );
}
