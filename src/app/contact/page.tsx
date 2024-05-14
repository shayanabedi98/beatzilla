import Banner from "@/components/universal/Banner";
import banner from "@/assets/contact/banner.webp"
import Footer from "@/components/universal/Footer"
import EmailForm from "@/components/contact/EmailForm";

export default function Contact() {
  return (
    <main>
      <Banner
        buttonContent="Listen"
        buttonPath="/beats"
        heading="Lets Collaborate"
        bannerImage={banner}
        buttonPresent={false}
        uniqueClassName="contact-banner"
      />
      <EmailForm />    
      <Footer padding="py-10" />
    </main>
  );
}
