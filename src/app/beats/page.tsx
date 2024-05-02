import Banner from "@/components/universal/Banner";
import banner from "@/assets/beats/banner.webp"
import BeatsList from "@/components/beats/BeatsList";

export default function Beats() {
  return (
    <div>
      <Banner
        buttonContent="Listen"
        buttonPath="/beats"
        heading="Explore BeatZilla"
        bannerImage={banner}
        buttonPresent={false}
        uniqueClassName="beats-banner"
      />
      <BeatsList />
    </div>
  );
}
