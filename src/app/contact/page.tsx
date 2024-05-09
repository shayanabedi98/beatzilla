import Banner from "@/components/universal/Banner";
import banner from "@/assets/contact/banner.webp"

export default function Contact() {
  return (
    <div>
      <Banner
        buttonContent="Listen"
        buttonPath="/beats"
        heading="Lets Collaborate"
        bannerImage={banner}
        buttonPresent={false}
        uniqueClassName="contact-banner"
      />
    </div>
  );
}
