import Image from "next/image";
import studio from "@/assets/home/studioequipment.webp";
import logo from "@/assets/logo.png";
import Link from "next/link";

export default function AboutBeatZilla() {
  return (
    <div className="container lg:w-2/3">
      <h2 className="container-header">About BeatZilla</h2>
      <div>
        <div className="z-0 flex flex-col items-center justify-center bg-primary">
          <Image
            className="h-[1000px] xl:h-[600px] object-cover grayscale"
            src={studio}
            alt=""
          />
          <div className="absolute flex w-full flex-col xl:flex-row items-center justify-center">
            <div className="flex h-96 w-96 items-center justify-center bg-primary max-sm:h-72 max-sm:w-[95%]">
              <Image className="w-3/4" src={logo} alt="" />
            </div>
            <div className="flex h-96 w-96 flex-col items-center justify-center gap-5 bg-secondary p-4 text-center text-primary max-sm:h-[500px] max-sm:w-[95%]">
              {/* <h3 className="text-2xl font-bold ">BeatZilla?</h3> */}
              <p className="text-lg">
                Hi, I&apos;m Shayan, a music producer from the Greater Toronto
                Area and this is my{" "}
                <span className="font-bold">Beat Portfolio</span>. I have years
                of experience with beats that carry influence from Hip-Hop, EDM,
                and Alternative Pop. If you&apos;re interested in collaborating
                with me, feel free to contact me. This website will be
                constantly updated as I make new music. Happy exploring!
              </p>
              <Link href="/contact">
                <button className="call-to-action">Contact</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
