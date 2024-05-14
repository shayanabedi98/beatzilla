import Banner from "@/components/universal/Banner";
import banner from "@/assets/beats/banner.webp"
import BeatsList from "@/components/beats/BeatsList";
import Footer from "@/components/universal/Footer";

export default function Beats() {
  return (
    <main>
      <Banner
        buttonContent="Listen"
        buttonPath="/beats"
        heading="Explore BeatZilla"
        bannerImage={banner}
        buttonPresent={false}
        uniqueClassName="beats-banner"
      />
      <BeatsList />
      <Footer padding="pt-10 pb-36" />
    </main>
  );
}
